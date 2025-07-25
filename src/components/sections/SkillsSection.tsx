import { Progress } from "@/components/ui/progress";
import TerminalSection from "../ui-custom/TerminalSection";
import GlitchText from "../ui-custom/GlitchText";

interface Skill {
  name: string;
  level: number; // 0-100
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: [
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "GoLang", level: 80 },
      { name: "Python", level: 70 },
    ],
  },
  {
    name: "Frameworks & Libraries",
    skills: [
      { name: "Node.js", level: 95 },
      { name: "Express.js", level: 90 },
      { name: "NestJS", level: 85 },
      { name: "React", level: 80 },
    ],
  },
  {
    name: "Databases",
    skills: [
      { name: "MySQL", level: 85 },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 90 },
      { name: "Redis", level: 80 },
      { name: "DynamoDB", level: 75 },
    ],
  },
  {
    name: "DevOps & Cloud",
    skills: [
      { name: "AWS", level: 85 },
      { name: "Docker", level: 90 },
      { name: "Kubernetes", level: 80 },
      { name: "CI/CD", level: 85 },
      { name: "Prometheus/Grafana", level: 80 },
    ],
  },
  {
    name: "Others",
    skills: [
      { name: "Microservices", level: 90 },
      { name: "Kafka", level: 85 },
      { name: "gRPC", level: 80 },
      { name: "ElasticSearch", level: 70 },
      { name: "HAProxy", level: 65 },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <GlitchText>$ man skills</GlitchText>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            {skillCategories.slice(0, 3).map((category, idx) => (
              <div key={idx} className="space-y-4">
                <h3 className="text-xl font-mono text-[#00ff00] mb-3 terminal-text">{category.name}</h3>
                <div className="space-y-3">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="space-y-1">
                      <div className="flex justify-between">
                        <span className="text-sm font-mono">{skill.name}</span>
                        <span className="text-xs font-mono text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress
                        value={skill.level}
                        className="h-2 bg-black/50 border border-[#00ff00]/20"
                        indicatorClassName="bg-[#00ff00]"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            {skillCategories.slice(3).map((category, idx) => (
              <div key={idx} className="space-y-4">
                <h3 className="text-xl font-mono text-[#00ff00] mb-3 terminal-text">{category.name}</h3>
                <div className="space-y-3">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="space-y-1">
                      <div className="flex justify-between">
                        <span className="text-sm font-mono">{skill.name}</span>
                        <span className="text-xs font-mono text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress
                        value={skill.level}
                        className="h-2 bg-black/50 border border-[#00ff00]/20"
                        indicatorClassName="bg-[#00ff00]"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <TerminalSection title="skill_matrix">
            <div className="font-mono text-[#00ff00] text-sm">
              <p className="mb-2">{'>'} ANALYZING SKILL PATTERNS...</p>
              <p className="mb-2">{'>'} PRIMARY STRENGTHS DETECTED:</p>
              <p className="mb-2">{'>'} ■ Full Stack Development with Node.js/TypeScript</p>
              <p className="mb-2">{'>'} ■ DevOps & Cloud Architecture on AWS</p>
              <p className="mb-2">{'>'} ■ Data Pipeline & Real-time Processing Systems</p>
              <p className="mb-2">{'>'} ■ Microservices Architecture & Design</p>
              <p>{'>'} SKILL ANALYSIS COMPLETE ✓</p>
            </div>
          </TerminalSection>
        </div>
      </div>
    </section>
  );
}