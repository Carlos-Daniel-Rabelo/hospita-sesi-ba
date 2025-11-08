import { Github, Linkedin, Mail, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/30">
      <div className="container-custom py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main footer content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-xl font-bold mb-3">
                <span className="gradient-text">Full-stack Dev</span>
              </h3>
              <p className="text-muted-foreground text-sm">
                Criando experiências web excepcionais com JavaScript e IA
              </p>
            </div>

            {/* Quick links */}
            <div>
              <h4 className="font-semibold mb-3">Links Rápidos</h4>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="#about" 
                    className="text-muted-foreground hover:text-accent transition-colors text-sm"
                  >
                    Sobre Mim
                  </a>
                </li>
                <li>
                  <a 
                    href="#skills" 
                    className="text-muted-foreground hover:text-accent transition-colors text-sm"
                  >
                    Habilidades
                  </a>
                </li>
                <li>
                  <a 
                    href="#projects" 
                    className="text-muted-foreground hover:text-accent transition-colors text-sm"
                  >
                    Projetos
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    className="text-muted-foreground hover:text-accent transition-colors text-sm"
                  >
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-semibold mb-3">Conecte-se</h4>
              <div className="flex gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-muted hover:bg-primary/10 border border-border hover:border-primary/50 rounded-lg transition-smooth hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-muted hover:bg-primary/10 border border-border hover:border-primary/50 rounded-lg transition-smooth hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:seu@email.com"
                  className="p-2 bg-muted hover:bg-accent/10 border border-border hover:border-accent/50 rounded-lg transition-smooth hover:scale-110"
                  aria-label="E-mail"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-border">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground">
                © {currentYear} Portfolio. Todos os direitos reservados.
              </p>
              <p className="text-sm text-muted-foreground flex items-center gap-1">
                Feito com <Heart className="w-4 h-4 text-accent fill-accent" /> usando React & TypeScript
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
