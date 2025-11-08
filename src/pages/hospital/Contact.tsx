import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().min(3, "Nome deve ter no mínimo 3 caracteres").max(100),
  email: z.string().email("E-mail inválido").max(255),
  subject: z.string().min(3, "Assunto deve ter no mínimo 3 caracteres").max(200),
  message: z.string().min(10, "Mensagem deve ter no mínimo 10 caracteres").max(1000),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Form data:", data);
    toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    reset();
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      items: ["(11) 3456-7890", "(11) 98765-4321"],
    },
    {
      icon: Mail,
      title: "E-mail",
      items: ["contato@hospital.com.br", "atendimento@hospital.com.br"],
    },
    {
      icon: MapPin,
      title: "Endereço",
      items: ["Av. Exemplo, 1234 - Bairro", "São Paulo, SP - CEP 01234-567"],
    },
    {
      icon: Clock,
      title: "Horário",
      items: ["Seg-Sex: 7h às 19h", "Emergência: 24 horas"],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-16 md:py-24">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Entre em <span className="text-primary">Contato</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Estamos prontos para atendê-lo. Entre em contato e tire suas dúvidas ou agende uma consulta.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
            {contactInfo.map((info, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-2">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  {info.items.map((item, idx) => (
                    <p key={idx} className="text-sm text-muted-foreground">
                      {item}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Envie sua Mensagem</CardTitle>
                <CardDescription>
                  Preencha o formulário abaixo e entraremos em contato em breve.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome Completo *</Label>
                    <Input
                      id="name"
                      placeholder="Seu nome completo"
                      {...register("name")}
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Assunto *</Label>
                    <Input
                      id="subject"
                      placeholder="Assunto da mensagem"
                      {...register("subject")}
                    />
                    {errors.subject && (
                      <p className="text-sm text-destructive">{errors.subject.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem *</Label>
                    <Textarea
                      id="message"
                      placeholder="Escreva sua mensagem..."
                      rows={5}
                      {...register("message")}
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive">{errors.message.message}</p>
                    )}
                  </div>

                  <Button type="submit" className="w-full">
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map */}
            <Card>
              <CardHeader>
                <CardTitle>Nossa Localização</CardTitle>
                <CardDescription>
                  Visite-nos ou use o mapa para traçar sua rota
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-square w-full rounded-lg overflow-hidden bg-muted">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975831486655!2d-46.65448492377018!3d-23.561414878787254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1699999999999!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização do Hospital"
                  />
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-sm font-medium">Como Chegar:</p>
                  <p className="text-sm text-muted-foreground">
                    Estamos localizados na Av. Exemplo, 1234, com fácil acesso por transporte público e estacionamento disponível.
                  </p>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Av.+Paulista,+São+Paulo+-+SP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button variant="outline" size="sm" className="mt-2">
                      Traçar Rota
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
