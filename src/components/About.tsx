export const About = () => {
  return (
    <section id="about" className="section-padding bg-card/30">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12">
            Sobre <span className="gradient-text">Mim</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile image placeholder */}
            <div className="relative">
              <div className="aspect-square bg-gradient-primary rounded-2xl opacity-20 absolute inset-0 blur-2xl"></div>
              <div className="relative aspect-square bg-secondary border border-border rounded-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-muted-foreground/20">
                  DEV
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Desenvolvedor Full-stack especializado em JavaScript com mais de{" "}
                <span className="text-accent font-semibold">X anos de experiência</span> criando 
                aplicações web robustas e escaláveis.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Minha stack principal inclui{" "}
                <span className="text-primary font-semibold">React, Next.js, Node.js</span> e 
                bancos de dados relacionais e NoSQL. Recentemente, tenho me especializado em 
                integrar ferramentas de{" "}
                <span className="gradient-accent font-semibold">Inteligência Artificial</span> como 
                LangChain, OpenAI e modelos de linguagem em aplicações de produção.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Apaixonado por resolver problemas complexos e criar experiências de usuário 
                excepcionais, sempre buscando as melhores práticas e novas tecnologias para 
                entregar soluções de alta qualidade.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg text-sm font-medium">
                  Problem Solver
                </span>
                <span className="px-4 py-2 bg-accent/10 border border-accent/20 rounded-lg text-sm font-medium">
                  Fast Learner
                </span>
                <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-lg text-sm font-medium">
                  Team Player
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
