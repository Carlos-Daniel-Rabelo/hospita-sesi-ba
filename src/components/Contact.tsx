import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Github, MapPin, Send } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
            Vamos <span className="gradient-text">Conversar</span>
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
            Estou disponível para novos projetos e oportunidades. Entre em contato!
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact info */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Informações de Contato</h3>
              
              <Card className="p-6 border-border bg-card/50 hover:border-accent/50 transition-smooth group">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-smooth">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">E-mail</p>
                    <a 
                      href="mailto:seu@email.com" 
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      seu@email.com
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-border bg-card/50 hover:border-primary/50 transition-smooth group">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-smooth">
                    <Linkedin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">LinkedIn</p>
                    <a 
                      href="https://linkedin.com/in/seu-perfil" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      linkedin.com/in/seu-perfil
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-border bg-card/50 hover:border-accent/50 transition-smooth group">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-smooth">
                    <Github className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">GitHub</p>
                    <a 
                      href="https://github.com/seu-usuario" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      github.com/seu-usuario
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-border bg-card/50">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Localização</p>
                    <p className="text-muted-foreground">
                      São Paulo, Brasil (Remoto)
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* CTA Card */}
            <div className="flex flex-col justify-center">
              <Card className="p-8 bg-gradient-subtle border-border relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">
                    Pronto para começar um projeto?
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Se você tem uma ideia ou projeto em mente, adoraria ouvir sobre ele. 
                    Vamos construir algo incrível juntos!
                  </p>
                  
                  <div className="space-y-3">
                    <Button 
                      variant="default" 
                      className="w-full group"
                      size="lg"
                      asChild
                    >
                      <a href="mailto:seu@email.com">
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        Enviar e-mail
                      </a>
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full"
                      size="lg"
                      asChild
                    >
                      <a href="https://linkedin.com/in/seu-perfil" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-4 h-4" />
                        Conectar no LinkedIn
                      </a>
                    </Button>
                  </div>

                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground text-center">
                      Tempo de resposta: <span className="text-accent font-semibold">24-48 horas</span>
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
