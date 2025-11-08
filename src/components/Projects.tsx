import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Sparkles } from "lucide-react";

const projects = [
  {
    title: "AI Chat Assistant",
    description: "Plataforma de chatbot inteligente utilizando OpenAI GPT-4 e LangChain para processar documentos e fornecer respostas contextualizadas em tempo real.",
    image: "ai-project",
    tags: ["React", "Node.js", "OpenAI", "LangChain", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    aiPowered: true,
    results: "Reduziu tempo de resposta ao cliente em 65%"
  },
  {
    title: "E-commerce Dashboard",
    description: "Dashboard completo para gerenciamento de e-commerce com análises em tempo real, gestão de estoque e integração com múltiplas plataformas de pagamento.",
    image: "dashboard-project",
    tags: ["Next.js", "TypeScript", "Stripe", "TailwindCSS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    results: "Aumentou eficiência operacional em 40%"
  },
  {
    title: "Task Management SaaS",
    description: "Aplicação SaaS para gerenciamento de tarefas e projetos com funcionalidades de colaboração em tempo real e integrações com ferramentas populares.",
    image: "saas-project",
    tags: ["React", "Node.js", "MongoDB", "Socket.io", "AWS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    results: "2k+ usuários ativos mensais"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-card/30">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
            Projetos em <span className="gradient-text">Destaque</span>
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
            Alguns dos projetos que desenvolvi, com foco em qualidade e resultados
          </p>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className="overflow-hidden border-border hover:border-primary/50 transition-smooth group"
              >
                <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                  {/* Project image */}
                  <div className={`relative bg-secondary ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                    <div className="aspect-video md:aspect-square flex items-center justify-center relative overflow-hidden">
                      {/* Placeholder with gradient */}
                      <div className="absolute inset-0 bg-gradient-primary opacity-20"></div>
                      <div className="relative z-10 text-4xl font-bold text-muted-foreground/30">
                        PROJECT
                      </div>
                      
                      {/* AI badge if applicable */}
                      {project.aiPowered && (
                        <div className="absolute top-4 right-4 px-3 py-1.5 bg-accent/90 backdrop-blur-sm rounded-full flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-accent-foreground" />
                          <span className="text-sm font-semibold text-accent-foreground">AI Powered</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Project info */}
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Results badge */}
                    <div className="mb-6">
                      <span className="inline-block px-3 py-1 bg-accent/10 border border-accent/20 rounded-lg text-sm font-medium text-accent">
                        ✓ {project.results}
                      </span>
                    </div>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="px-3 py-1 bg-muted text-sm rounded-md border border-border"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-3">
                      <Button variant="default" size="sm" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                          Ver projeto
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                          Código
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
