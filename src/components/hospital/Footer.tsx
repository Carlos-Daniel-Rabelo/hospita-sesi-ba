import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export const Footer = () => {
  const quickLinks = [
    { name: "Início", href: "/" },
    { name: "Serviços", href: "/servicos" },
    { name: "Produtos", href: "/produtos" },
    { name: "Contato", href: "/contato" },
  ];

  const legalLinks = [
    { name: "Política de Privacidade", href: "/privacidade" },
    { name: "Termos de Uso", href: "/termos" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="border-t bg-muted/30">
      <div className="container-custom">
        <div className="py-12 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2">
            {/* Brand & Description */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary">
                  <span className="text-xl font-bold text-primary-foreground">H+</span>
                </div>
                <span className="font-bold">Hospital Institucional</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Cuidando da sua saúde com excelência, tecnologia e humanização. Seu bem-estar é nossa prioridade.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-md border bg-background text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold">Links Rápidos</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold">Contato</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Phone className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                  <div className="text-sm text-muted-foreground">
                    <div>(11) 3456-7890</div>
                    <div>(11) 98765-4321</div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                  <a
                    href="mailto:contato@hospital.com.br"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    contato@hospital.com.br
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    Av. Exemplo, 1234 - Bairro - São Paulo, SP - CEP 01234-567
                  </span>
                </li>
              </ul>
            </div>

            {/* Opening Hours */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold">Horário de Atendimento</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex justify-between">
                  <span>Segunda a Sexta:</span>
                  <span className="font-medium">7h às 19h</span>
                </li>
                <li className="flex justify-between">
                  <span>Sábados:</span>
                  <span className="font-medium">8h às 14h</span>
                </li>
                <li className="flex justify-between">
                  <span>Emergência:</span>
                  <span className="font-medium text-accent">24 horas</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t py-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Hospital Institucional. Todos os direitos reservados.
            </p>
            <div className="flex flex-wrap gap-4">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
