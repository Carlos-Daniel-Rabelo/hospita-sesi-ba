import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Heart, 
  Brain, 
  Bone, 
  Eye, 
  Baby, 
  Activity, 
  Stethoscope,
  Siren,
  Pill,
  Microscope,
  UserRound,
  Scissors
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Heart,
      title: "Cardiologia",
      description: "Tratamento completo do coração com equipamentos de última geração e equipe especializada em doenças cardiovasculares.",
      team: "15 cardiologistas",
    },
    {
      icon: Brain,
      title: "Neurologia",
      description: "Diagnóstico e tratamento de doenças do sistema nervoso central e periférico com tecnologia avançada.",
      team: "12 neurologistas",
    },
    {
      icon: Bone,
      title: "Ortopedia",
      description: "Especialistas em tratamento de lesões ósseas, articulares e musculares, incluindo cirurgias avançadas.",
      team: "20 ortopedistas",
    },
    {
      icon: Eye,
      title: "Oftalmologia",
      description: "Cuidados completos para sua visão, desde consultas preventivas até cirurgias de alta complexidade.",
      team: "10 oftalmologistas",
    },
    {
      icon: Baby,
      title: "Pediatria",
      description: "Atendimento especializado para bebês, crianças e adolescentes com equipe dedicada e ambiente acolhedor.",
      team: "18 pediatras",
    },
    {
      icon: Activity,
      title: "UTI e CTI",
      description: "Unidades de Terapia Intensiva equipadas com tecnologia de ponta para cuidados críticos 24 horas.",
      team: "30 intensivistas",
    },
    {
      icon: Siren,
      title: "Pronto Socorro",
      description: "Atendimento de emergência 24 horas com equipe multidisciplinar preparada para todas as urgências.",
      team: "Atendimento 24h",
    },
    {
      icon: Microscope,
      title: "Laboratório",
      description: "Exames laboratoriais com resultados rápidos e precisos, utilizando equipamentos de última geração.",
      team: "Equipe técnica especializada",
    },
    {
      icon: Pill,
      title: "Oncologia",
      description: "Centro oncológico completo com tratamentos modernos, quimioterapia, radioterapia e suporte multidisciplinar.",
      team: "25 oncologistas",
    },
    {
      icon: UserRound,
      title: "Dermatologia",
      description: "Cuidados com a saúde da pele, procedimentos estéticos e tratamento de doenças dermatológicas.",
      team: "8 dermatologistas",
    },
    {
      icon: Scissors,
      title: "Cirurgia Geral",
      description: "Centro cirúrgico moderno com salas equipadas para procedimentos de alta e média complexidade.",
      team: "35 cirurgiões",
    },
    {
      icon: Stethoscope,
      title: "Clínica Médica",
      description: "Atendimento clínico geral para diagnóstico, prevenção e tratamento de diversas condições de saúde.",
      team: "22 clínicos gerais",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-16 md:py-24">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Nossos <span className="text-primary">Serviços</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Oferecemos atendimento em mais de 30 especialidades médicas com profissionais altamente qualificados e infraestrutura de excelência.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                      {service.team}
                    </span>
                  </div>
                  <CardTitle className="mt-4">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription>{service.description}</CardDescription>
                  <Link to="/contato">
                    <Button variant="outline" className="w-full">
                      Agendar Consulta
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-y bg-muted/30 py-16">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Não encontrou o serviço que procura?
            </h2>
            <p className="text-lg text-muted-foreground">
              Entre em contato conosco. Temos muitas outras especialidades e serviços disponíveis.
            </p>
            <Link to="/contato">
              <Button size="lg">
                Fale Conosco
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
