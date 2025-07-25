import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import GlitchText from '../ui-custom/GlitchText';

interface Education {
  degree: string;
  institution: string;
  period: string;
}

interface Certificate {
  name: string;
  issuer: string;
  year: string;
}

const educationData: Education[] = [
  {
    degree: "Masters in Computer Application",
    institution: "Abdul Kalam University (Former UPTU), Lucknow",
    period: "2016 - 2018",
  },
  {
    degree: "Diploma In Computer Application",
    institution: "NIIT",
    period: "2019",
  },
];

const certificateData: Certificate[] = [
  {
    name: "GoLang - The Complete Guide",
    issuer: "Udemy",
    year: "2021",
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <GlitchText>$ cat education.md</GlitchText>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-mono text-[#00ff00] mb-6 terminal-text">
              Education
            </h3>
            <div className="space-y-6">
              {educationData.map((edu, index) => (
                <Card key={index} className="bg-black/50 border border-[#00ff00]/20 hover:border-[#00ff00]/50 transition-all">
                  <CardHeader>
                    <CardTitle className="text-[#00ff00]">{edu.degree}</CardTitle>
                    <CardDescription>{edu.institution}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm font-mono text-muted-foreground">{edu.period}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-mono text-[#00ff00] mb-6 terminal-text">
              Certificates
            </h3>
            <div className="space-y-6">
              {certificateData.map((cert, index) => (
                <Card key={index} className="bg-black/50 border border-[#00ff00]/20 hover:border-[#00ff00]/50 transition-all">
                  <CardHeader>
                    <CardTitle className="text-[#00ff00]">{cert.name}</CardTitle>
                    <CardDescription>{cert.issuer}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm font-mono text-muted-foreground">{cert.year}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-mono text-[#00ff00] mb-6 terminal-text">
                Achievements
              </h3>
              <Card className="bg-black/50 border border-[#00ff00]/20 hover:border-[#00ff00]/50 transition-all">
                <CardHeader>
                  <CardTitle className="text-[#00ff00]">Recognition</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="bg-black/30 border-[#00ff00]/30 text-[#00ff00] mt-1">
                      Yapsody
                    </Badge>
                    <p className="text-sm text-muted-foreground">Received "Highly Valuable" Excellence review scores for three consecutive quarters</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <Badge variant="outline" className="bg-black/30 border-[#00ff00]/30 text-[#00ff00] mt-1">
                      Sunstone
                    </Badge>
                    <p className="text-sm text-muted-foreground">Received "Extraordinary Sr. Developer" Excellence review score</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}