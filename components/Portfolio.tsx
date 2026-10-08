"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { Download, Linkedin, Github, Mail, ExternalLink, Sun, Moon, Menu, X, ArrowRight, GraduationCap, Database } from "lucide-react";
import { profile, about, skills, projects, exploring, education, experience, type Project } from "@/data/content";
import { certificates, type Certificate } from "@/data/certificates";

const nav = ["home", "about", "skills", "projects", "certifications", "journey", "contact"] as const;

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.5 }}>{children}</motion.div>
  );
}
function Heading({ k, children }: { k: string; children: React.ReactNode }) {
  return <Reveal className="mb-10"><p className="font-mono text-xs uppercase tracking-widest ac">{k}</p>
    <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">{children}</h2></Reveal>;
}
function Modal({ onClose, children, label }: { onClose: () => void; children: React.ReactNode; label: string }) {
  useEffect(() => {
    const h = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", h); document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", h); document.body.style.overflow = ""; };
  }, [onClose]);
  return (
    <div role="dialog" aria-modal="true" aria-label={label} className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4" onClick={onClose}>
      <div className="card relative max-h-[90vh] w-full max-w-3xl overflow-auto !bg-[var(--bg)] p-6" onClick={(e) => e.stopPropagation()}>
        <button autoFocus onClick={onClose} aria-label="Close" className="absolute right-3 top-3 rounded-full p-2 hover:bg-white/10 focus-visible:outline focus-visible:outline-2"><X size={18} /></button>
        {children}
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState("home");
  const [dark, setDark] = useState(true);
  const [open, setOpen] = useState(false);
  const [proj, setProj] = useState<Project | null>(null);
  const [cert, setCert] = useState<Certificate | null>(null);
  const reduce = useReducedMotion();

  useEffect(() => { setDark(document.documentElement.classList.contains("dark")); }, []);
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-45% 0px -50% 0px" });
    nav.forEach((id) => { const el = document.getElementById(id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);
  const toggle = () => {
    const n = !dark; setDark(n);
    document.documentElement.classList.toggle("dark", n);
    try { localStorage.theme = n ? "dark" : "light"; } catch {}
  };
  const feat = projects.find((p) => p.featured)!;
  const others = projects.filter((p) => !p.featured);

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-[70] focus:rounded focus:bg-teal-400 focus:p-2 focus:text-black">Skip to content</a>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--bd)] bg-[var(--bg)]/80 backdrop-blur">
        <nav aria-label="Main" className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5">
          <a href="#home" className="font-mono text-sm font-semibold">MKE<span className="ac">.data</span></a>
          <ul className="hidden gap-1 md:flex">
            {nav.map((id) => (
              <li key={id}><a href={`#${id}`} aria-current={active === id ? "true" : undefined}
                className={`rounded-full px-3 py-1.5 text-sm capitalize transition ${active === id ? "bg-teal-400/15 ac" : "mut hover:text-[var(--fg)]"}`}>{id}</a></li>
            ))}
          </ul>
          <div className="flex items-center gap-1">
            <button onClick={toggle} aria-label="Toggle theme" className="rounded-full p-2 hover:bg-white/10">{dark ? <Sun size={18} /> : <Moon size={18} />}</button>
            <button className="rounded-full p-2 md:hidden" aria-expanded={open} aria-controls="mnav" aria-label="Menu" onClick={() => setOpen(!open)}>{open ? <X size={20} /> : <Menu size={20} />}</button>
          </div>
        </nav>
        {open && <ul id="mnav" className="border-t border-[var(--bd)] px-5 pb-3 md:hidden">
          {nav.map((id) => <li key={id}><a href={`#${id}`} onClick={() => setOpen(false)} className="block py-2 capitalize">{id}</a></li>)}</ul>}
      </header>

      <main id="main">
        <section id="home" className="relative overflow-hidden px-5 pb-20 pt-28 sm:pt-36">
          <div className="grid-bg absolute inset-0 -z-10" aria-hidden />
          <div className="pointer-events-none absolute left-1/2 top-10 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-teal-400/10 blur-3xl" aria-hidden />
          <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.2fr_1fr]">
            <motion.div initial={reduce ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <p className="font-mono text-xs ac">Data → Insight → Decision</p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-6xl">{profile.name}</h1>
              <p className="mt-3 text-lg ac">{profile.role}</p>
              <p className="mt-6 text-2xl font-medium leading-snug">{profile.tagline}</p>
              <p className="mut mt-4 max-w-xl">{profile.intro}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-teal-400 px-5 py-2.5 text-sm font-medium text-black hover:bg-teal-300">Explore My Work <ArrowRight size={16} /></a>
                <a href={profile.cv} download className="card inline-flex items-center gap-2 px-5 py-2.5 text-sm hover:border-teal-400/50"><Download size={16} /> Download CV</a>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="card inline-flex items-center gap-2 px-5 py-2.5 text-sm hover:border-teal-400/50"><Linkedin size={16} /> LinkedIn</a>
              </div>
            </motion.div>
            <motion.div className="relative mx-auto w-64 sm:w-80" initial={reduce ? false : { opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.15 }}>
              <div className="card overflow-hidden !rounded-3xl bg-white p-1">
                <Image src="/photo.png" alt="Portrait of Mohamed Khaled Eid" width={640} height={760} priority className="h-auto w-full rounded-[1.25rem]" sizes="(max-width:640px) 256px, 320px" />
              </div>
              <div className="card absolute -left-6 bottom-8 hidden px-3 py-2 font-mono text-xs sm:block"><span className="ac">SELECT</span> insight <span className="ac">FROM</span> data;</div>
              <div className="card absolute -right-4 top-6 hidden items-end gap-1 px-3 py-2 sm:flex" aria-hidden>
                {[10, 18, 13, 24, 30].map((h, i) => <span key={i} className="w-2 rounded-sm bg-teal-400/80" style={{ height: h }} />)}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-5 py-20">
          <Heading k="01 · Who I am">From statistics to data science</Heading>
          <Reveal className="mut max-w-3xl space-y-4 text-lg leading-relaxed">{about.map((p) => <p key={p}>{p}</p>)}</Reveal>
        </section>

        <section id="skills" className="mx-auto max-w-6xl px-5 py-20">
          <Heading k="02 · What I know">Toolkit</Heading>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(skills).map(([cat, items]) => (
              <Reveal key={cat}><div className="card h-full p-5 transition hover:border-teal-400/40">
                <h3 className="mb-3 font-medium">{cat}</h3>
                <ul className="flex flex-wrap gap-2">{items.map((s) => <li key={s} className="rounded-full border border-[var(--bd)] px-3 py-1 font-mono text-xs">{s}</li>)}</ul>
              </div></Reveal>
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl px-5 py-20">
          <Heading k="03 · What I built">Projects & case studies</Heading>
          <Reveal>
            <article className="card overflow-hidden p-6 sm:p-8">
              <p className="font-mono text-xs ac">Featured · {feat.status}</p>
              <h3 className="mt-2 text-2xl font-semibold sm:text-3xl">{feat.title}</h3>
              <p className="mut mt-2 max-w-3xl">{feat.subtitle}</p>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div><h4 className="font-mono text-xs uppercase ac">Problem</h4><p className="mut mt-1">{feat.problem}</p>
                  <h4 className="mt-4 font-mono text-xs uppercase ac">Solution</h4><p className="mut mt-1">{feat.solution}</p>
                  <h4 className="mt-4 font-mono text-xs uppercase ac">My role</h4><p className="mut mt-1">{feat.role}</p></div>
                <div><h4 className="font-mono text-xs uppercase ac">Key features</h4>
                  <ul className="mut mt-1 list-disc space-y-1 pl-5">{feat.features.map((f) => <li key={f}>{f}</li>)}</ul></div>
              </div>
              <ul className="mt-6 flex flex-wrap gap-2">{feat.tech.map((t) => <li key={t} className="rounded-full border border-[var(--bd)] px-3 py-1 font-mono text-xs">{t}</li>)}</ul>
              {feat.live && <a href={feat.live} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-full bg-teal-400 px-5 py-2.5 text-sm font-medium text-black">Open live app <ExternalLink size={15} /></a>}
            </article>
          </Reveal>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {others.map((p) => (
              <Reveal key={p.slug}><button onClick={() => setProj(p)} className="card group h-full w-full p-6 text-left transition hover:-translate-y-1 hover:border-teal-400/40">
                <Database className="ac" size={20} /><h3 className="mt-3 text-lg font-medium">{p.title}</h3>
                <p className="mut mt-1 text-sm">{p.subtitle}</p><span className="ac mt-4 inline-flex items-center gap-1 text-sm">Case study <ArrowRight size={14} /></span>
              </button></Reveal>
            ))}
          </div>
        </section>

        <section id="certifications" className="mx-auto max-w-6xl px-5 py-20">
          <Heading k="04 · What I've learned">Certifications</Heading>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certificates.map((c) => (
              <Reveal key={c.file}><button onClick={() => setCert(c)} className="card group w-full overflow-hidden text-left transition hover:-translate-y-1 hover:border-teal-400/40" aria-label={`View certificate: ${c.title}`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.file} alt={`${c.title} certificate`} loading="lazy" className="aspect-[16/9] w-full object-cover object-top" />
                <div className="p-4"><h3 className="font-medium">{c.title}</h3><p className="mut mt-1 text-sm">{c.issuer} · {c.date}{c.length ? ` · ${c.length}` : ""}</p></div>
              </button></Reveal>
            ))}
          </div>
        </section>

        <section id="journey" className="mx-auto max-w-6xl px-5 py-20">
          <Heading k="05 · Where I'm going">Currently exploring</Heading>
          <ul className="mb-16 flex flex-wrap gap-3">{exploring.map((e) => <li key={e} className="card px-4 py-2 font-mono text-sm">{e}</li>)}</ul>
          <div className="grid gap-10 md:grid-cols-2">
            <div><h3 className="mb-4 flex items-center gap-2 text-xl font-medium"><GraduationCap className="ac" size={20} /> Education</h3>
              <div className="card border-l-2 !border-l-teal-400 p-5"><p className="font-medium">{education.school}</p><p className="mut text-sm">{education.faculty}</p>
                <p className="mt-2">{education.degree}</p><p className="mut text-sm">{education.period} · GPA {education.gpa}</p></div></div>
            <div><h3 className="mb-4 text-xl font-medium">Practical experience & training</h3>
              <ol className="space-y-3">{experience.map((x) => (
                <li key={x.title} className="card p-5"><p className="font-mono text-xs ac">{x.kind} · {x.period}</p>
                  <p className="mt-1 font-medium">{x.title}</p><p className="mut text-sm">{x.org}</p><p className="mut mt-2 text-sm">{x.text}</p>
                  {x.image && <a href={x.image} target="_blank" rel="noopener noreferrer" className="ac mt-2 inline-block text-sm underline">View internship certificate</a>}</li>))}</ol></div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-5 py-20">
          <div className="card p-8 text-center sm:p-12">
            <h2 className="text-3xl font-semibold sm:text-4xl">Let&apos;s Build Something With Data.</h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={`mailto:${profile.email}`} className="card inline-flex items-center gap-2 px-5 py-2.5 text-sm"><Mail size={16} /> {profile.email}</a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="card inline-flex items-center gap-2 px-5 py-2.5 text-sm"><Linkedin size={16} /> LinkedIn</a>
              {profile.github && <a href={profile.github} target="_blank" rel="noopener noreferrer" className="card inline-flex items-center gap-2 px-5 py-2.5 text-sm"><Github size={16} /> GitHub</a>}
              <a href={profile.cv} download className="inline-flex items-center gap-2 rounded-full bg-teal-400 px-5 py-2.5 text-sm font-medium text-black"><Download size={16} /> Download CV</a>
            </div>
          </div>
        </section>
      </main>
      <footer className="mut border-t border-[var(--bd)] py-8 text-center text-sm">© {new Date().getFullYear()} {profile.name}</footer>

      <AnimatePresence>
        {proj && <Modal label={proj.title} onClose={() => setProj(null)}>
          <p className="font-mono text-xs ac">{proj.status}</p><h3 className="mt-1 text-2xl font-semibold">{proj.title}</h3>
          <h4 className="mt-4 font-mono text-xs uppercase ac">Problem</h4><p className="mut">{proj.problem}</p>
          <h4 className="mt-4 font-mono text-xs uppercase ac">Solution</h4><p className="mut">{proj.solution}</p>
          <h4 className="mt-4 font-mono text-xs uppercase ac">Key features</h4><ul className="mut list-disc pl-5">{proj.features.map((f) => <li key={f}>{f}</li>)}</ul>
          <h4 className="mt-4 font-mono text-xs uppercase ac">My role</h4><p className="mut">{proj.role}</p>
          <ul className="mt-4 flex flex-wrap gap-2">{proj.tech.map((t) => <li key={t} className="rounded-full border border-[var(--bd)] px-3 py-1 font-mono text-xs">{t}</li>)}</ul>
        </Modal>}
        {cert && <Modal label={cert.title} onClose={() => setCert(null)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={cert.file} alt={`${cert.title} certificate`} className="w-full rounded-lg" />
          <p className="mt-3 font-medium">{cert.title}</p><p className="mut text-sm">{cert.issuer} · {cert.date}</p>
        </Modal>}
      </AnimatePresence>
    </>
  );
}
