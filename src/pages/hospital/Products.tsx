import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

export default function Products() {
  const plans = [
    {
      name: "Plano Básico",
      price: "R$ 299",
      period: "/mês",
      description: "Ideal para quem busca cobertura essencial em saúde",
      features: [
        "Consultas médicas ilimitadas",
        "Exames laboratoriais básicos",
        "Atendimento de urgência e emergência",
        "Internações hospitalares",
        "Rede credenciada regional",
      ],
      highlighted: false,
    },
    {
      name: "Plano Premium",
      price: "R$ 599",
      period: "/mês",
      description: "Cobertura completa para você e sua família",
      features: [
        "Tudo do Plano Básico",
        "Exames de imagem completos",
        "Cirurgias de média e alta complexidade",
        "Rede credenciada nacional",
        "Atendimento domiciliar",
        "Telemedicina 24h",
        "Check-up anual gratuito",
      ],
      highlighted: true,
    },
    {
      name: "Plano Empresarial",
      price: "Sob consulta",
      period: "",
      description: "Soluções personalizadas para sua empresa",
      features: [
        "Planos corporativos customizados",
        "Gestão de saúde ocupacional",
        "Programas de prevenção",
        "Relatórios gerenciais",
        "Atendimento prioritário",
        "Condições especiais por volume",
      ],
      highlighted: false,
    },
  ];

  const packages = [
    {
      title: "Check-up Completo",
      price: "R$ 890",
      description: "Avaliação completa da sua saúde",
      items: [
        "Consulta com clínico geral",
        "Exames laboratoriais completos",
        "Eletrocardiograma",
        "Raio-X de tórax",
        "Ultrassonografia abdominal",
        "Avaliação cardiológica",
      ],
    },
    {
      title: "Pacote Cardiológico",
      price: "R$ 1.290",
      description: "Cuide da saúde do seu coração",
      items: [
        "Consulta cardiológica",
        "Eletrocardiograma",
        "Ecocardiograma",
        "Teste ergométrico",
        "Holter 24h",
        "Retorno em 30 dias",
      ],
    },
    {
      title: "Pacote Materno-Infantil",
      price: "R$ 2.490",
      description: "Cuidado completo para mãe e bebê",
      items: [
        "Acompanhamento pré-natal completo",
        "Ultrassonografias obstétricas",
        "Exames laboratoriais",
        "Consultas com obstetra",
        "Preparação para o parto",
        "1 consulta pediátrica pós-parto",
      ],
    },
    {
      title: "Pacote Oncológico",
      price: "Sob consulta",
      description: "Tratamento e acompanhamento especializado",
      items: [
        "Consultas com oncologista",
        "Exames de imagem avançados",
        "Quimioterapia (conforme necessidade)",
        "Radioterapia (conforme necessidade)",
        "Suporte multidisciplinar",
        "Acompanhamento psicológico",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-16 md:py-24">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Planos e <span className="text-primary">Pacotes</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Escolha o plano ideal para você e sua família. Oferecemos opções flexíveis com a melhor cobertura em saúde.
            </p>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Planos de Saúde
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cobertura completa com rede credenciada de excelência
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative ${plan.highlighted ? 'border-primary shadow-lg scale-105' : ''}`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Mais Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link to="/contato" className="w-full">
                    <Button 
                      className="w-full" 
                      variant={plan.highlighted ? "default" : "outline"}
                    >
                      Contratar Agora
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Pacotes de Exames
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Pacotes especiais com preços promocionais para cuidar da sua saúde
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {packages.map((pkg, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{pkg.title}</CardTitle>
                  <CardDescription>{pkg.description}</CardDescription>
                  <div className="mt-2">
                    <span className="text-2xl font-bold text-primary">{pkg.price}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {pkg.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link to="/contato" className="w-full">
                    <Button variant="outline" className="w-full">
                      Mais Informações
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
