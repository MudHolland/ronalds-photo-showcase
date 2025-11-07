import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Neem Contact Op
              </h1>
              <p className="text-lg text-muted-foreground">
                Interesse in een fotoshoot? Neem gerust contact met mij op!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-6">
                    Contact Informatie
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground">Email</h3>
                        <a
                          href="mailto:info@ronaldfollongfotografie.nl"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          info@ronaldfollongfotografie.nl
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground">Telefoon</h3>
                        <a
                          href="tel:+31629593683"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          +31 (0) 6 29 59 36 83
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground">Locatie</h3>
                        <p className="text-muted-foreground">
                          Noord-Brabant, Nederland
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-6  leading-relaxed space-y-4 text-muted-foreground">
                  {/* <h3 className="font-semibold text-foreground mb-3">Openingstijden</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Maandag - Vrijdag</span>
                      <span className="text-foreground">9:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Zaterdag</span>
                      <span className="text-foreground">Op afspraak</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Zondag</span>
                      <span className="text-foreground">Gesloten</span>
                    </div>
                  </div> */}
                  <p>Als u geen aansluiting met mij krijgt ben ik even niet instaat om u te woord te staan.</p>
                  <p>Indien gewenst kunt u een bericht via Whatsapp insturen. Ik bel u zo spoedig mogelijk terug.</p>
                  <p>Ook is het mogelijk om via <a href="https://www.facebook.com/ronald.follong" target="_blank" rel="noopener noreferrer" className="text-primary underline-offset-4 underline hover:text-primary/90">Facebook</a> u vraag te stellen.</p>
                  <p>Opmerkingen zijn eveneens welkom!</p>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-8">
                <h2 className="text-2xl font-semibold text-foreground mb-6">
                  Stuur een Bericht
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
