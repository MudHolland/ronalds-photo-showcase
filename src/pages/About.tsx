import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ronaldPortrait from "@/assets/ronald-medium.jpg";

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
                  <span className="font-bold">Naam:</span> Ronald Follong<br></br>
                  <span className="font-bold">Beroep:</span> Senior Calibratrion Technician<br></br>
                  <span className="font-bold">Hobby’s:</span> Fotografie, Martial Arts, Motorrijden
                </p>
                <p>
                  Ronald, geboren en getogen Nijmegenaar uit 1958. Tijdens mijn technische studie ben ik in aanraking gekomen met de fotografie. In het analoge tijdperk kon een primitieve doka dan ook niet uitblijven. Na een lange tijd van weinig activiteit in de fotografie heb ik in 2008 de draad weer opgepakt met een eenvoudige digitale camera.
                </p>
                <p>
                  Dit bleek toch niet het echte fotograferen te zijn en ben ik overgestapt op mijn eerste digitale spiegelreflexcamera. Na het volgen van een cursus op de Fotovakschool in 2011 was de volgende stap naar de wereld van de semiprofessionele fotografie snel gemaakt. Inmiddels is het gebruik van een professionele camera een feit geworden.
                </p>
                <p>
                  Fotografie is spelen met licht en de resultaten kunnen uit verschillende ooghoeken bekeken worden. Een foto is nooit mooi of lelijk, het is maar net hoe de fotograaf er tegen aan keek op het moment dat hij de foto maakte. Het is aan de kijker of deze zich ook in het perspectief van de fotograaf kan plaatsen.
                </p>
                <p>
                  Deze site is opgezet om u een indruk te geven wat mijn vaardigheden zijn en uw mening is altijd van harte welkom. Mijn doel is dan ook om mooie foto’s te maken uit een diversiteit van onderwerpen.
                </p>
                <p>
                  Indien u vragen heeft of interesse in een fotoshoot, bv samen met uw dierbaren of huisdier(en), kunt u vrijblijvend contact met mij opnemen. Onder het genot van een kop koffie of thee kunt u dan uw wensen kenbaar maken. Samen met u komt er dan een mooi resultaat op tafel.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-lg overflow-hidden border-4 border-primary/20 max-w-80">
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
