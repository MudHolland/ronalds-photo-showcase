import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

interface GalleryCardProps {
  id: string;
  name: string;
  thumbnail: string;
  imageCount?: number;
}

const GalleryCard = ({ id, name, thumbnail, imageCount }: GalleryCardProps) => {
  return (
    <Link to={`/gallery/${id}`}>
      <Card className="overflow-hidden group cursor-pointer border-border hover:border-primary transition-all duration-300">
        <CardContent className="p-0">
          <div className="relative aspect-square overflow-hidden">
            <img
              src={thumbnail}
              alt={name}
              className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="p-4 bg-card">
            <h3 className="text-lg font-semibold text-foreground mb-1">{name}</h3>
            {imageCount && (
              <p className="text-sm text-muted-foreground">{imageCount} photos</p>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default GalleryCard;
