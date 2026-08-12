import Image from 'next/image'
import { ArrowDown, ArrowUpRight, Github, Linkedin } from 'lucide-react'
import { CopyEmailButton, ScrollButton } from '@/components/PortfolioActions'
import CinematicIntro from '@/components/CinematicIntro'

const roles = [
  {
    period: '2023–2026',
    company: 'Associa',
    title: 'Software Developer',
    copy: 'Built and operated backend systems for TownSq, from deployment automation and authentication to event-driven processing in AWS.',
    impact: 'Re-architected synchronous workflows to process 10,000+ records per hour while eliminating timeout failures.'
  },
  {
    period: '2022',
    company: 'ASICS Digital',
    title: 'BI Developer',
    copy: 'Built analytics pipelines and dashboards for e-commerce reporting, reducing manual work and contributing to revenue growth.'
  },
  {
    period: '2021',
    company: 'PanAgora Asset Management',
    title: 'DevOps Engineer',
    copy: 'Automated CI/CD for data science workflows, cutting deployment time by 80% and making releases safer.'
  }
]

const projects = [
  {
    number: '01',
    title: 'Zenesis',
    kicker: 'Business website · TypeScript',
    copy: 'A client-facing platform that makes complex business setup and advisory services feel clear, credible, and easy to navigate.',
    href: 'https://www.zenesiscorp.com',
    image: '/images/project-zenesis.webp',
    visual: 'image'
  },
  {
    number: '02',
    title: 'Upside',
    kicker: 'iOS marketplace · Swift',
    copy: 'A marketplace concept designed to make partnerships between creators and brands in the GCC simpler and more direct.',
    href: 'https://github.com/nikdmello/upside',
    image: '/logos/upside_logo.png',
    visual: 'upside'
  },
  {
    number: '03',
    title: 'Source of Truth',
    kicker: 'Workflow system · TypeScript',
    copy: 'A structured workspace for turning scattered claim files into reliable records that teams can review, validate, and trust.',
    href: 'https://source-of-truth-lovat.vercel.app/',
    visual: 'source'
  }
]

const stack = ['TypeScript', 'JavaScript', 'Java', 'C# / .NET', 'Python', 'SQL', 'AWS', 'Node.js', 'React', 'Next.js', 'DynamoDB', 'Docker']

const photographs = [
  { src: '/images/IMG_0673.webp', location: 'Lower Antelope Canyon', date: 'Jun 2025', className: 'photo-feature' },
  { src: '/images/IMG_6650.webp', location: 'Chicago, IL', date: 'Apr 2025', className: 'photo-tall' },
  { src: '/images/IMG_8864.webp', location: 'Amman Citadel, Jordan', date: 'Oct 2025', className: 'photo-amman' },
  { src: '/images/IMG_7280.webp', location: 'Horseshoe Canyon', date: 'Jun 2025', className: 'photo-horseshoe' },
  { src: '/images/IMG_8807.webp', location: 'Petra, Jordan', date: 'Oct 2025', className: 'photo-petra' }
]

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1}>
      <CinematicIntro />
      <header className="nav shell">
        <ScrollButton className="brand" targetId="landing" ariaLabel="Nikhil D'Mello home">
          <span>ND</span><strong>Nikhil D&apos;Mello</strong>
        </ScrollButton>
        <nav aria-label="Main navigation">
          <ScrollButton targetId="experience">Experience</ScrollButton>
          <ScrollButton targetId="work">Work</ScrollButton>
          <ScrollButton targetId="beyond">Beyond</ScrollButton>
          <ScrollButton targetId="about">About</ScrollButton>
        </nav>
        <a className="nav-cta" href="/resume.pdf" target="_blank">Résumé <ArrowUpRight /></a>
      </header>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> The person behind the work</p>
          <h2>I turn messy problems into <em>systems that work.</em></h2>
          <p className="intro">I&apos;m Nikhil, a software engineer drawn to backend systems, thoughtful products, and the small details that make technology feel reliable.</p>
          <div className="actions">
            <ScrollButton className="primary" targetId="work">Explore my work <ArrowDown /></ScrollButton>
            <a className="text-link" href="https://github.com/nikdmello" target="_blank" rel="noreferrer">GitHub <ArrowUpRight /></a>
          </div>
          <p className="credentials">Dubai, UAE · Backend systems · Cloud architecture · Product engineering</p>
        </div>

        <div className="portrait-wrap">
          <div className="portrait-frame">
            <Image src="/images/PFP.webp" alt="Nikhil D'Mello" fill sizes="(max-width: 800px) 88vw, 430px" />
          </div>
        </div>
      </section>

      <section className="proof" aria-label="Career highlights">
        <div className="shell stats">
          <div><strong>Production</strong><span>Backend systems that stay reliable</span></div>
          <div><strong>Cloud</strong><span>AWS and event-driven architecture</span></div>
          <div><strong>Open source</strong><span>Contributing to VS Code</span></div>
          <div><strong>Product</strong><span>Building across web and iOS</span></div>
        </div>
      </section>

      <section className="experience shell" id="experience">
        <div className="section-intro">
          <p className="section-tag">01 / Experience</p>
          <h2>Engineering for the moments when <em>reliability matters.</em></h2>
        </div>
        <div className="timeline">
          {roles.map((role) => (
            <article key={role.company}>
              <time>{role.period}</time>
              <div>
                <p className="role-company">{role.company}</p>
                <h3>{role.title}</h3>
                <p>{role.copy}</p>
                {role.impact && <p className="impact"><span>Impact</span>{role.impact}</p>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="work" id="work">
        <div className="shell">
          <p className="section-tag light">02 / Selected work</p>
          <div className="work-head">
            <h2>Ideas made <em>useful.</em></h2>
            <p>I learn by making things: client platforms, mobile products, open-source fixes, and experiments that sharpen how I think.</p>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <a href={project.href} target="_blank" rel="noreferrer" key={project.title} className="project-card">
                <span className="project-number">{project.number}</span>
                <div className={`project-visual project-visual-${project.visual}`}>
                  {project.image ? (
                    <Image src={project.image} alt={`${project.title} project`} fill sizes="(max-width: 800px) 100vw, 33vw" />
                  ) : (
                    <div className="source-preview" aria-hidden="true">
                      <span className="source-file">CSV</span>
                      <div><strong>Source of Truth</strong><small>12 claims ready to review</small></div>
                      <span className="source-status">Validated</span>
                    </div>
                  )}
                </div>
                <div><p>{project.kicker}</p><h3>{project.title}</h3><p>{project.copy}</p></div>
                <ArrowUpRight className="project-arrow" />
              </a>
            ))}
          </div>
          <div className="open-source-callout">
            <div><p className="section-tag light">Open source</p><h3>Small fixes. Real users.</h3></div>
            <p>Two contributions to VS Code, both merged and released, including fixes to screencast mode and Markdown preview parsing.</p>
            <a className="text-link light-link" href="https://github.com/microsoft/vscode/pulls?q=is%3Apr+author%3Anikdmello" target="_blank" rel="noreferrer">View contributions <ArrowUpRight /></a>
          </div>
        </div>
      </section>

      <section className="beyond shell" id="beyond">
        <div className="beyond-head">
          <div>
            <p className="section-tag">03 / Beyond the code</p>
            <h2>Collecting moments,<br /><em>wherever curiosity leads.</em></h2>
          </div>
          <p>Travel has a way of resetting how I see things. These are a few places that made me stop, look twice, and remember there is always more to explore.</p>
        </div>
        <div className="photo-grid">
          {photographs.map((photo, index) => (
            <figure className={photo.className} key={photo.src}>
              <Image
                src={photo.src}
                alt={`${photo.location}, photographed by Nikhil D'Mello`}
                fill
                sizes={index < 3
                  ? '(max-width: 480px) calc(100vw - 32px), (max-width: 800px) calc(50vw - 24px), (max-width: 1230px) 33vw, 393px'
                  : '(max-width: 480px) calc(100vw - 32px), (max-width: 800px) calc(50vw - 24px), (max-width: 1230px) 50vw, 590px'}
              />
              <figcaption><span>{photo.location}</span><time>{photo.date}</time></figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="about shell" id="about">
        <div>
          <p className="section-tag">04 / About</p>
          <h2>A curious mind, with a bias toward <em>building.</em></h2>
        </div>
        <div className="about-copy">
          <p>I&apos;m happiest somewhere between understanding a complicated system and making it simpler. My work spans cloud infrastructure, backend services, data, and product interfaces. The through-line is always the same: ask better questions, then build something useful.</p>
          <p>I&apos;m drawn to anything that helps me understand more of the world and what I&apos;m capable of within it.</p>
          <div className="stack" aria-label="Technical skills">{stack.map((item) => <span key={item}>{item}</span>)}</div>
        </div>
      </section>

      <section className="contact">
        <div className="shell contact-inner">
          <p className="section-tag">Let&apos;s connect</p>
          <h2>Have a hard problem<br />worth <em>solving?</em></h2>
          <p>I&apos;m always happy to meet thoughtful people building useful things.</p>
          <div className="contact-actions">
            <CopyEmailButton />
            <a className="social" href="https://linkedin.com/in/nikdmello" target="_blank" rel="noreferrer"><Linkedin /> LinkedIn</a>
            <a className="social" href="https://github.com/nikdmello" target="_blank" rel="noreferrer"><Github /> GitHub</a>
          </div>
        </div>
      </section>

      <footer className="shell">
        <div className="brand"><span>ND</span><strong>Nikhil D&apos;Mello</strong></div>
        <p>Software engineer</p>
        <p>© {new Date().getFullYear()} Nikhil D&apos;Mello</p>
      </footer>
    </main>
  )
}
