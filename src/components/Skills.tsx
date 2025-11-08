import { 
  Code2, 
  Database, 
  Sparkles, 
  Layers, 
  Braces, 
  FileJson,
  GitBranch,
  Cloud
} from "lucide-react";
import { Card } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: ["React", "Next.js", "TypeScript", "TailwindCSS", "HTML5/CSS3"],
    color: "text-primary"
  },
  {
    title: "Backend",
    icon: Braces,
    skills: ["Node.js", "Express", "NestJS", "REST APIs", "GraphQL"],
    color: "text-accent"
  },
  {
    title: "Database",
    icon: Database,
    skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Supabase"],
    color: "text-primary"
  },
  {
    title: "AI & ML",
    icon: Sparkles,
    skills: ["OpenAI API", "LangChain", "Prompt Engineering", "RAG", "Vector DBs"],
    color: "text-accent"
  },
  {
    title: "DevOps",
    icon: Cloud,
    skills: ["Docker", "AWS", "Vercel", "GitHub Actions", "CI/CD"],
    color: "text-primary"
  },
  {
    title: "Tools",
    icon: GitBranch,
    skills: ["Git", "VS Code", "Postman", "Figma", "Linear"],
    color: "text-accent"
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
            Tecnologias e ferramentas que domino para criar soluções completas
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category) => {
              const Icon = category.icon;
              return (
                <Card 
                  key={category.title}
                  className="p-6 bg-card border-border hover:border-primary/50 transition-smooth group hover:scale-105"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-muted rounded-lg group-hover:bg-primary/10 transition-smooth">
                      <Icon className={`w-6 h-6 ${category.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.skills.map((skill) => (
                      <li 
                        key={skill}
                        className="text-muted-foreground flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>

          {/* Additional skills badges */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-4">Também trabalho com</p>
            <div className="flex flex-wrap gap-3 justify-center">
              {["Jest", "Cypress", "Webpack", "Vite", "Zustand", "React Query", "Zod", "tRPC"].map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 text-sm bg-secondary border border-border rounded-full hover:border-accent/50 transition-smooth"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
