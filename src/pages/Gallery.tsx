import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GalleryCard from "@/components/GalleryCard";
import { galleries } from "@/data/galleries";

const Gallery = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Foto Galerijen
            </h1>
            <p className="text-lg text-muted-foreground">
              Ontdek mijn collecties van professionele fotografie
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleries.map((gallery) => (
              <GalleryCard
                key={gallery.id}
                id={gallery.id}
                name={gallery.name}
                thumbnail={gallery.thumbnail}
                imageCount={gallery.images.length}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
