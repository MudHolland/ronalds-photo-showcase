import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ronaldPortrait from "@/assets/ronald-portrait.jpg";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Over Ronald Follong
              </h1>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Welkom bij Ronald Follong Fotografie. Mijn passie voor fotografie begon meer dan 15 jaar geleden, 
                  en sindsdien heb ik me toegelegd op het vastleggen van bijzondere momenten en emoties.
                </p>
                <p>
                  Of het nu gaat om portretfotografie, evenementen, of artistieke shoots, 
                  ik streef er altijd naar om authentieke en tijdloze beelden te creëren. 
                  Elk project is uniek en vraagt om een persoonlijke benadering.
                </p>
                <p>
                  Met een oog voor detail en compositie, werk ik samen met mijn klanten om hun visie 
                  tot leven te brengen. Van concept tot eindresultaat, ik begeleid het gehele proces 
                  met professionaliteit en creativiteit.
                </p>
                <p>
                  Mijn werk is gepubliceerd in diverse magazines en ik werk regelmatig samen met 
                  modellenbureaus, stylisten en andere creatieve professionals. Samen creëren we 
                  beelden waar we trots op kunnen zijn.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden border-4 border-primary/20">
                <img
                  src={ronaldPortrait}
                  alt="Ronald Follong"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
