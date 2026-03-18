"use client";

import { SectionWrapper, Card, Button } from "@/components/ui";
import {
  Download,
  Briefcase,
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Award,
  Code,
  Layers,
  CheckCircle2,
  Target,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";

const resumeData = {
  name: "Pir Ghulam Muhyo Din",
  role: "Full Stack Web Developer",
  tagline: "Full-Stack Engineer | Performance & Scalable Web Applications",
  about:
    "Versatile professional with experience in sales management, project coordination, and full stack web development. Worked as Sales Manager (2020–2022), transitioned into freelance full stack development (2023–Present), and also handled project management and digital systems (2025–2026). Strong ability to manage technical, administrative, and team-based responsibilities.",
  contact: [
    { icon: <Phone className="w-4 h-4" />, text: "+92-322-4458481" },
    { icon: <Mail className="w-4 h-4" />, text: "attariattari549@gmail.com" },
    { icon: <MapPin className="w-4 h-4" />, text: "Lahore, Pakistan" },
  ],
  stats: [
    {
      label: "Years Experience",
      value: "3+",
      icon: <Award className="w-5 h-5 text-accent" />,
    },
    {
      label: "Projects Delivered",
      value: "10+",
      icon: <Zap className="w-5 h-5 text-accent" />,
    },
    {
      label: "Technologies",
      value: "10+",
      icon: <Code className="w-5 h-5 text-accent" />,
    },
  ],
  experience: [
    {
      role: "Freelance Full Stack Web Developer",
      company: "Self-Employed",
      duration: "2023 – Present",
      metrics: "Global Reach • 95+ Performance",
      achievements: [
        "Engineered and delivered 10+ high-performance web applications using robust modern stacks (Next.js, Node.js), ensuring optimized performance and scalability.",
        "Managed the end-to-end software development lifecycle (SDLC), from initial architecture to final cloud deployment, for global clients across multiple domains.",
        "Reduced client operational overhead by 20% through custom-built automation tools and seamless third-party integrations.",
      ],
    },
    {
      role: "Project Manager & Computer Operator",
      company: "Digital Systems Division",
      duration: "2025 – Jan 2026",
      metrics: "100% On-Time Delivery",
      achievements: [
        "Directed project execution and cross-functional team coordination, maintaining a 100% success rate in meeting project milestones.",
        "Revolutionized digital record-keeping and documentation systems, enhancing data retrieval speed by 40% and overall reporting accuracy.",
        "Optimized internal workflows by identifying technical bottlenecks and implementing streamlined communication protocols between departments.",
      ],
    },
    {
      role: "Sales Manager",
      company: "Theme Park Society",
      duration: "2020 – 2022",
      metrics: "Increased Rev. & Efficiency",
      achievements: [
        "Orchestrated sales operations and managed high-priority client relationships, consistently exceeding quarterly performance targets.",
        "Improved inter-departmental communication efficiency by 30% through the implementation of standardized reporting frameworks.",
        "Led diverse teams to execute complex operational tasks, ensuring high-quality client service delivery under tight deadlines.",
      ],
    },
  ],
  education: [
    {
      degree: "BS Computer Science",
      institution: "Virtual University Lahore",
      duration: "2025",
    },
    {
      degree: "Intermediate",
      institution: "BISE Sahiwal",
      duration: "2020 – 2021",
    },
    {
      degree: "Matric",
      institution: "BISE Sahiwal",
      duration: "2018 – 2019",
    },
  ],
  skills: [
    {
      category: "Development",
      items: [
        "Full Stack Web Dev",
        "Next.js & React",
        "Node.js & Express",
        "Database Management",
      ],
    },
    {
      category: "Management",
      items: [
        "Project Coordination",
        "Sales & Client Management",
        "Team Leadership",
        "Digital Records",
      ],
    },
    {
      category: "Strategy",
      items: [
        "Problem Solving",
        "Adaptability",
        "Process Optimization",
        "Client Growth",
      ],
    },
  ],
  projects: [
    {
      name: "Enterprise ERP Ecosystem",
      tech: ["Next.js", "Node.js", "MongoDB"],
      outcome:
        "Streamlined resource management, reducing inventory waste by 15%.",
    },
    {
      name: "High-Traffic SaaS Portal",
      tech: ["React", "Firebase", "Tailwind"],
      outcome:
        "Achieved 99.9% uptime for 2k+ daily users with sub-1s load times.",
    },
    {
      name: "Real Estate CRM Edge",
      tech: ["Express", "PostgreSQL", "React"],
      outcome:
        "Automated lead tracking, increasing closure rates by 25% in 3 months.",
    },
  ],
};

export default function ResumePage() {
  const handleDownload = () => {
    // Simply placing a file named 'resume.pdf' in your 'public' folder will make this work
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Pir_Ghulam_Muhyo_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="pt-2 pb-2 ">
      <SectionWrapper subtitle="Professional Path" title="My Digital Legacy">
        {/* HERO SECTION */}
        <div className="relative mb-20 overflow-hidden">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12"
            >
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-black text-foreground tracking-tight">
                  {resumeData.name}
                </h1>
                <div className="flex flex-col gap-2">
                  <p className="text-accent text-xl font-bold uppercase tracking-[0.2em]">
                    {resumeData.role}
                  </p>
                  <p className="text-muted-foreground text-lg max-w-xl font-medium">
                    {resumeData.tagline}
                  </p>
                </div>
                <div className="flex flex-wrap gap-6 pt-4 text-sm font-semibold">
                  {resumeData.contact.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
                    >
                      <span className="p-2 rounded-lg bg-accent/10 text-accent">
                        {item.icon}
                      </span>
                      {item.text}
                    </div>
                  ))}
                </div>
              </div>

              <Button
                variant="primary"
                onClick={handleDownload}
                className="group relative overflow-hidden shadow-2xl shadow-accent/30 hover:shadow-accent/50 px-10 py-2 flex items-center justify-center transition-all duration-300 hover:-translate-y-1 border border-accent/40 bg-accent text-white"
              >
                <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-[100%] transition-all duration-700 ease-in-out" />
                <Download className="w-5 h-5 mr-3 group-hover:-translate-y-1 transition-transform duration-300 relative z-10" />
                <span className="font-black tracking-widest relative z-10 uppercase">
                  Download CV
                </span>
              </Button>
            </motion.div>

            {/* STATS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {resumeData.stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card className="flex items-center gap-5 py-6 group hover:translate-y-[-4px] transition-all duration-300">
                    <div className="p-4 rounded-2xl bg-accent/10 text-accent ring-1 ring-accent/20 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                      {stat.icon}
                    </div>
                    <div>
                      <div className="text-2xl font-black text-foreground">
                        {stat.value}
                      </div>
                      <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* LEFT COLUMN: EXPERIENCE & EDUCATION */}
          <div className="lg:col-span-8 space-y-16">
            {/* SUMMARY */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative p-8 rounded-2xl bg-accent/5 border-l-4 border-accent">
                <div className="flex items-center gap-3 mb-4 text-accent">
                  <Target className="w-5 h-5" />
                  <span className="text-sm font-black uppercase tracking-widest">
                    Career Mission
                  </span>
                </div>
                <p className="text-lg text-foreground italic leading-relaxed">
                  "{resumeData.about}"
                </p>
              </div>
            </motion.div>

            {/* WORK EXPERIENCE */}
            <div className="space-y-10">
              <h3 className="flex items-center gap-4 text-2xl font-black text-foreground">
                <Briefcase className="w-6 h-6 text-accent" />
                Work Experience
              </h3>

              <div className="relative ml-4 pl-8 border-l-2 border-accent/20 space-y-12">
                {resumeData.experience.map((exp, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="relative"
                  >
                    <div className="absolute left-[-41px] top-1 p-1 rounded-full bg-background ring-2 ring-accent">
                      <div className="w-4 h-4 rounded-full bg-accent" />
                    </div>

                    <div className="mb-4">
                      <div className="flex flex-wrap justify-between items-start gap-4 mb-2">
                        <h4 className="text-xl font-bold text-foreground">
                          {exp.role}
                        </h4>
                        <span className="px-4 py-1 rounded-full bg-accent/10 border border-accent/20 text-xs font-black text-accent uppercase tracking-tighter">
                          {exp.duration}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-sm font-bold text-muted-foreground uppercase tracking-widest">
                        <span>{exp.company}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/30" />
                        <span className="text-accent/80 italic normal-case tracking-normal">
                          {exp.metrics}
                        </span>
                      </div>
                    </div>

                    <ul className="grid gap-3">
                      {exp.achievements.map((ach, aIdx) => (
                        <li key={aIdx} className="flex gap-4 group">
                          <CheckCircle2 className="w-5 h-5 mt-0.5 text-accent shrink-0 group-hover:scale-110 transition-transform" />
                          <p className="text-muted-foreground leading-relaxed text-sm group-hover:text-foreground transition-colors">
                            {ach}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* EDUCATION */}
            <div className="space-y-10">
              <h3 className="flex items-center gap-4 text-2xl font-black text-foreground">
                <GraduationCap className="w-6 h-6 text-accent" />
                Academic Background
              </h3>

              <div className="relative ml-4 pl-8 border-l-2 border-accent/20 space-y-10">
                {resumeData.education.map((edu, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="absolute left-[-41px] top-1 p-1 rounded-full bg-background ring-2 ring-accent/30">
                      <div className="w-4 h-4 rounded-full bg-muted-foreground/30" />
                    </div>

                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                      <div>
                        <h4 className="text-lg font-bold text-foreground tracking-tight">
                          {edu.degree}
                        </h4>
                        <p className="text-muted-foreground font-semibold text-sm">
                          {edu.institution}
                        </p>
                      </div>
                      <span className="text-sm font-black text-accent tracking-tighter bg-accent/5 px-4 py-1 rounded-lg">
                        {edu.duration}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: SKILLS & PROJECTS */}
          <div className="lg:col-span-4 space-y-16">
            {/* SKILLS SECTION */}
            <div className="space-y-10">
              <h3 className="flex items-center gap-4 text-2xl font-black text-foreground">
                <Code className="w-6 h-6 text-accent" />
                Expertise
              </h3>

              <div className="space-y-8">
                {resumeData.skills.map((skillGroup, idx) => (
                  <Card
                    key={idx}
                    className="p-6 border border-border/10 hover-glow transition-all"
                  >
                    <h4 className="text-xs font-black uppercase tracking-[0.3em] text-accent mb-6 flex items-center gap-3">
                      <div className="h-[2px] w-8 bg-accent/30 rounded-full" />
                      {skillGroup.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-4 py-2 rounded-xl bg-card border border-border text-xs font-bold text-foreground hover:bg-accent hover:text-white hover:translate-y-[-2px] transition-all cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            {/* PROJECTS HIGHLIGHT */}
            <div className="space-y-10">
              <h3 className="flex items-center gap-4 text-2xl font-black text-foreground">
                <Layers className="w-6 h-6 text-accent" />
                Key Projects
              </h3>

              <div className="space-y-6">
                {resumeData.projects.map((project, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-6 group relative overflow-hidden backdrop-blur-xl border-border/50">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />

                      <div className="relative">
                        <div className="flex justify-between items-start mb-4">
                          <h4 className="text-lg font-black text-foreground group-hover:text-accent transition-colors">
                            {project.name}
                          </h4>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.map((t, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-[10px] font-black uppercase text-accent/70 tracking-tighter"
                            >
                              {t}
                            </span>
                          ))}
                        </div>

                        <p className="text-sm text-muted-foreground font-medium leading-relaxed italic">
                          "{project.outcome}"
                        </p>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
