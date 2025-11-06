import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Slideshow from "@/components/Slideshow";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-20">
        <Slideshow />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
