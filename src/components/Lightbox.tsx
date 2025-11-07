import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LightboxProps {
  images: string[];
  initialIndex: number;
  onClose: () => void;
}

const Lightbox = ({ images, initialIndex, onClose }: LightboxProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div 
  className="fixed inset-0 z-50 bg-black/95 flex flex-col h-screen overflow-hidden"
  onClick={onClose}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-border" onClick={(e) => e.stopPropagation()}>
        <span className="text-sm text-muted-foreground">
          {currentIndex + 1} / {images.length}
        </span>
        <Button variant="ghost" size="icon" onClick={onClose}>
          <X className="h-5 w-5 stroke-white" />
        </Button>
      </div>

      {/* Main Image */}
<div className="flex-1 relative flex items-center justify-center p-4 overflow-hidden">
  <img
    src={images[currentIndex]}
    alt={`Image ${currentIndex + 1}`}
    className="max-w-full max-h-full object-contain"
    onClick={(e) => e.stopPropagation()}
  />

        {/* Navigation Arrows */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/20 hover:bg-background/40 dark:hover:bg-background backdrop-blur-sm hover:text-white"
          onClick={(e) => {
            e.stopPropagation();
            goToPrevious();
          }}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/20 hover:bg-background/40 dark:hover:bg-background backdrop-blur-sm hover:text-white"
          onClick={(e) => {
            e.stopPropagation();
            goToNext();
          }}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Thumbnail Strip */}
<div
  className="border-border p-4 overflow-x-auto flex-shrink-0"
  onClick={(e) => e.stopPropagation()}
>
  <div className="flex gap-2 justify-center">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`flex-shrink-0 w-20 h-20 rounded overflow-hidden border-2 transition-all ${
                index === currentIndex
                  ? "border-primary scale-110"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
