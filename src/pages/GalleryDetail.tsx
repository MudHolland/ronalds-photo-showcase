import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Lightbox from "@/components/Lightbox";
import { galleries } from "@/data/galleries";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const GalleryDetail = () => {
  const { id } = useParams();
  const gallery = galleries.find((g) => g.id === id);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!gallery) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 pt-20 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Gallery niet gevonden
            </h1>
            <Link to="/gallery">
              <Button>Terug naar Galerijen</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="mb-8">
            <Link to="/gallery">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Terug naar Galerijen
              </Button>
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">
              {gallery.name}
            </h1>
            <p className="text-muted-foreground">
              {gallery.images.length} foto's
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {gallery.images.map((image, index) => (
              <button
                key={index}
                onClick={() => openLightbox(index)}
                className="group relative aspect-square overflow-hidden rounded-lg border border-border hover:border-primary transition-all duration-300"
              >
                <img
                  src={image}
                  alt={`${gallery.name} ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-foreground font-medium">
                    Bekijken
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </main>
      <Footer />

      {lightboxOpen && (
        <Lightbox
          images={gallery.images}
          initialIndex={selectedImageIndex}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </div>
  );
};

export default GalleryDetail;
