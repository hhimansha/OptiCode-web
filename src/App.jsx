import { useState, useEffect } from 'react'

/* ─── SITE CONTENT — Replace this object for other groups ─────────────────── */
const SITE = {
  projectTitle: 'OptiCode',
  projectSubtitle: 'An AI-Powered Intelligent Code Analysis Platform for Enhancing Computer Science Education',
  projectTagline: 'Providing educators and learners with actionable, real-time feedback on code comprehension and technical readiness.',
  conferenceTag: 'IEEE 2026',
  groupNo: '25-26J-364',
  institution: 'Sri Lanka Institute of Information Technology',
  department: 'Dept. of Information Technology',
  cdapUrl: 'http://cdap.sliit.lk/',

  abstract: 'The increasing reliance of computer science students on AI-generated code without adequate understanding of underlying concepts presents a significant pedagogical challenge. Students often produce functionally correct solutions while lacking the ability to explain algorithms, data structures, or design patterns, leaving them underprepared for technical assessments. This paper presents OptiCode, a multi-component intelligent code analysis platform that integrates four AI-powered modules to provide educators and learners with actionable, real-time feedback on code comprehension and technical readiness.',

  researchProblem: 'The proliferation of AI code generation tools such as GitHub Copilot and ChatGPT has fundamentally altered how students interact with programming assignments. A substantial proportion of undergraduate computer science students now submit AI-generated solutions without developing an understanding of the embedded algorithmic concepts. This behavior produces graduates who can write syntactically correct programs yet struggle to explain time complexity, identify design patterns, or justify architectural decisions during technical interviews.',

  researchGap: 'Traditional learning platforms such as LeetCode assess functional correctness but not conceptual understanding. Static linters detect syntactic issues without identifying higher-order concepts such as Recursion or the Observer Pattern. Existing automated code analysis tools focus on code summarization and comment generation but do not map constructs to named CS concepts. Recent LLM-based methods demonstrate strong code understanding capabilities but remain prone to hallucination and ignore structural precision.',

  objectives: [
    'Automatically extract and explain CS concepts in student code',
    'Identify and track conceptual weaknesses over time',
    'Improve code quality through intelligent refactoring',
    'Simulate technical interviews with multimodal performance scoring',
  ],

  methodology: 'OptiCode is implemented as a distributed microservice architecture. A React/Vite frontend communicates with a Node.js/Express API gateway backed by MongoDB. Four specialized AI services, each exposing a REST API, handle domain-specific inference tasks. The gateway enforces JWT-based authentication and rate limiting. A hybrid AST+LLM pipeline grounds language model inference with deterministic structural analysis, achieving macro F1 = 0.85 — outperforming the LLM-only baseline by 16.4%.',

  technologies: [
    { name: 'React / Vite', cat: 'Frontend' },
    { name: 'Node.js / Express', cat: 'Backend' },
    { name: 'MongoDB', cat: 'Database' },
    { name: 'FastAPI', cat: 'ML Service' },
    { name: 'Flask', cat: 'ML Services' },
    { name: 'Google Gemini 2.0 Flash', cat: 'LLM' },
    { name: 'Python AST Module', cat: 'Static Analysis' },
    { name: 'Random Forest', cat: 'ML Model' },
    { name: 'Bayesian Knowledge Tracing (BKT)', cat: 'Knowledge Modeling' },
    { name: 'Mini-Xception', cat: 'Computer Vision' },
    { name: 'OpenCV', cat: 'Computer Vision' },
    { name: 'AssemblyAI / Cartesia', cat: 'ASR / TTS' },
    { name: 'Google Gemini 2.5 Flash', cat: 'LLM' },
  ],

  components: [
    {
      id: 'concept-extractor',
      number: '01',
      title: 'Code Concept Extractor',
      owner: 'Mr. Haritha Himansha',
      color: '#0066cc',
      icon: '⬡',
      tagline: 'Hybrid AST + LLM Pipeline',
      description: 'Addresses the gap by identifying and explaining high-level concepts such as algorithms, data structures, and design patterns present in source code. A three-stage pipeline combines deterministic static analysis with semantic inference to achieve macro F1 = 0.85, outperforming an LLM-only baseline by 16.4%.',
      highlights: [
        'Stage 1: Python AST performs structural analysis to identify classes, functions, design pattern signatures (Singleton, Observer, Factory), and control flow constructs with high precision.',
        'Stage 2: Structural findings are injected as confirmed context into a prompt sent to Google Gemini 2.0 Flash.',
        'Stage 3: Post-merge confidence fusion — concepts confirmed by both LLM and AST receive a confidence boost of +0.10. AST-detected concepts absent from the LLM are appended.',
        'Calibrated confidence scoring achieves the lowest Expected Calibration Error (ECE = 0.07).',
      ],
      metrics: [
        { label: 'Macro F1', value: '0.85' },
        { label: 'vs LLM-only', value: '+16.4%' },
        { label: 'ECE', value: '0.07' },
        { label: 'Precision', value: '0.86' },
      ],
      tech: ['FastAPI (Port 8000)', 'Python AST', 'Google Gemini 2.0 Flash', 'MongoDB'],
    },
    {
      id: 'skill-weakness',
      number: '02',
      title: 'Adaptive Weakness Detector',
      owner: 'Mr. Thilina Sandamal',
      color: '#1a7f4f',
      icon: '◈',
      tagline: 'Adaptive Learning System',
      description: 'Analyzes extraction histories over multiple sessions to identify recurring gaps. It uses a unified adaptive framework that integrates real-time weakness detection, targeted task generation, and performance-driven progression.',
      highlights: [
        'Skill Prediction: Random Forest classifier predicts the learner\'s level (Beginner, Intermediate, Advanced).',
        'Hybrid Weakness Detection: Combines AST-based structural features, execution output comparison, rule-based checks, and behavioral signals (e.g., idle time).',
        'Knowledge Modelling: Learner mastery is modelled using Bayesian Knowledge Tracing (BKT), updated after each interaction.',
        'Identifies 8 detectable weakness types, including syntax_error, infinite_loop, logic_error, and missing_base_case.',
      ],
      metrics: [
        { label: 'Hybrid F1', value: '0.92' },
        { label: 'Latency Target', value: '<3s' },
        { label: 'Weakness Types', value: '8' },
        { label: 'Pass Threshold', value: '≥ 0.85' },
      ],
      tech: ['Flask (Port 8001)', 'Random Forest', 'BKT', 'Python AST'],
    },
    {
      id: 'refactoring',
      number: '03',
      title: 'Code Refactoring and Risk Analyzer',
      owner: 'Ms. Ashani Hettiarachchi',
      color: '#b45309',
      icon: '◇',
      tagline: 'Safe, Explainable Refactoring',
      description: 'Addresses suboptimal code by identifying refactoring opportunities through AST-based analysis while quantifying the associated transformation risk. Integrates an AI-driven explanation module providing rationale for decisions.',
      highlights: [
        'Stage 1: AST parsing decomposes programs into structural components, finding deep-rooted anti-patterns like deeply nested loops and bloated classes.',
        'Stage 3: Safe Transformation ensures behavioral preservation by comparing ASTs of the original and refactored code.',
        'Risk Classification: Candidate transformations are assigned a risk level of low, medium, or high based on scope of change, coupling metrics, and test coverage.',
        'Gamified analytics dashboard tracks technical debt using metrics like cyclomatic complexity and maintainability index.',
      ],
      metrics: [
        { label: 'User Satisfaction', value: '90.7%' },
        { label: 'Valid Output', value: '100%' },
        { label: 'Risk Levels', value: '3' },
        { label: 'Participants', value: '43' },
      ],
      tech: ['Flask (Port 8002)', 'Python AST', 'Rule-based Engine'],
    },
    {
      id: 'interview-sim',
      number: '04',
      title: 'AI Interview Simulator',
      owner: 'Mr. Navinda Viraj',
      color: '#7c3aed',
      icon: '○',
      tagline: 'Multimodal Performance Scoring',
      description: 'Enables real-time speech interaction, continuous facial emotion analysis, and adaptive questioning based on candidate performance. Generates personalized follow-up questions utilizing the Weakness Detection module.',
      highlights: [
        'Live speech-based interview interaction using ASR (AssemblyAI), TTS (Cartesia), and Gemini 2.5 Flash for dialogue management.',
        'Real-time emotion recognition using OpenCV and a Mini-Xception model tracking 7 affect categories: neutral, focused, confused, anxious, confident, distracted, and engaged.',
        'NLP scoring module assesses technical accuracy, completeness, and terminology precision.',
        'Final score is computed as a weighted sum: 0.7 × S_content + 0.3 × S_affect.',
      ],
      metrics: [
        { label: 'Affect Categories', value: '7' },
        { label: 'Content Weight', value: '0.7' },
        { label: 'Affect Weight', value: '0.3' },
        { label: 'Model Latency', value: '18 ms' },
      ],
      tech: ['Flask (Port 8003)', 'AssemblyAI / Cartesia', 'OpenCV / Mini-Xception', 'Gemini 2.5 Flash'],
    },
  ],

  milestones: [
    { id: 1, title: 'Project Proposal', date: 'Aug 2025', status: 'done', desc: 'Initial research proposal submitted. Research gap identified, scope defined, and methodology outlined.' },
    { id: 2, title: 'Progress Presentation I', date: 'Nov 2025', status: 'done', desc: 'System architecture finalized. Individual component designs presented.' },
    { id: 3, title: 'Progress Presentation II', date: 'Mar 2026', status: 'done', desc: 'Core components implemented. Experimental evaluation dataset constructed.' },
    { id: 4, title: 'Research Paper Submission', date: 'Apr 2026', status: 'done', desc: 'Paper submitted and finalized formatting matching IEEE formatting conventions.' },
    { id: 5, title: 'Final Assessment', date: 'Jun 2026', status: 'upcoming', desc: 'Complete platform integration, multi-language benchmarking, and longitudinal studies.' },
    { id: 6, title: 'Viva', date: 'Jul 2026', status: 'upcoming', desc: 'Defense of research contributions and live demonstration of the OptiCode platform.' },
  ],

  documents: [
    { title: 'Project Charter', type: 'PDF', status: 'available', url: '#' },
    { title: 'Proposal Document', type: 'PDF', status: 'available', url: '#' },
    { title: 'Progress Report I', type: 'PDF', status: 'available', url: '#' },
    { title: 'Progress Report II', type: 'PDF', status: 'available', url: '#' },
    { title: 'Research Paper (OptiCode)', type: 'PDF', status: 'available', url: '#' },
    { title: 'Final Report', type: 'PDF', status: 'pending', url: '#' },
  ],

  presentations: [
    { title: 'Proposal Presentation', date: 'Aug 2025', status: 'available', url: '#' },
    { title: 'Progress Presentation I', date: 'Nov 2025', status: 'available', url: '#' },
    { title: 'Progress Presentation II', date: 'Mar 2026', status: 'available', url: '#' },
    { title: 'Final Presentation', date: 'Jun 2026', status: 'pending', url: '#' },
  ],

  team: [
    {
      name: 'Mr. Haritha Himansha',
      id: 'IT22601360',
      role: 'Code Concept Extractor',
      email: 'it22601360@my.sliit.lk',
      initials: 'HH',
      color: '#0066cc',
      type: 'member',
    },
    {
      name: 'Mr. Thilina Sandamal',
      id: 'IT22606860',
      role: 'Adaptive Weakness Detector',
      email: 'it22606860@my.sliit.lk',
      initials: 'TS',
      color: '#1a7f4f',
      type: 'member',
    },
    {
      name: 'Mr. Navinda Viraj',
      id: 'IT22639226',
      role: 'AI Interview Simulator',
      email: 'it22639226@my.sliit.lk',
      initials: 'NV',
      color: '#7c3aed',
      type: 'member',
    },
    {
      name: 'Ms. Ashani Hettiarachchi',
      id: 'IT22604194',
      role: 'Code Refactoring & Risk Analyzer',
      email: 'it22604194@my.sliit.lk',
      initials: 'AH',
      color: '#b45309',
      type: 'member',
    },
    {
      name: 'Ms. Sanjeevi Chandrasiri',
      id: '',
      role: 'Research Supervisor',
      email: 'sanji.c@sliit.lk',
      initials: 'SC',
      color: '#515154',
      type: 'supervisor',
    },
    {
      name: 'Ms. Lokesha Weerasinghe',
      id: '',
      role: 'Research Co-Supervisor',
      email: 'lokesha.w@sliit.lk',
      initials: 'LW',
      color: '#515154',
      type: 'supervisor',
    },
  ],
}
/* ─── END SITE CONTENT ───────────────────────────────────────────────────── */

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'domain', label: 'Domain' },
  { id: 'components', label: 'Components' },
  { id: 'milestones', label: 'Milestones' },
  { id: 'documents', label: 'Documents' },
  { id: 'presentations', label: 'Presentations' },
  { id: 'team', label: 'About Us' },
  { id: 'contact', label: 'Contact' },
]

function Navbar({ active, scrollTo }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      height: '56px',
      background: scrolled ? 'rgba(255,255,255,0.88)' : 'transparent',
      backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
      borderBottom: scrolled ? '0.5px solid rgba(0,0,0,0.1)' : 'none',
      transition: 'all 0.3s ease',
    }}>
      <div style={{
        maxWidth: 1080, margin: '0 auto', padding: '0 24px',
        height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <button onClick={() => scrollTo('home')} style={{
          fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: 700,
          color: 'var(--black)', background: 'none', border: 'none', cursor: 'pointer',
          letterSpacing: '-0.03em',
        }}>
          Opti<span style={{ color: 'var(--accent)' }}>Code</span>
        </button>

        <div style={{ display: 'flex', gap: 4 }} className="desktop-nav">
          {NAV_ITEMS.map(item => (
            <button key={item.id} onClick={() => scrollTo(item.id)} style={{
              fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: active === item.id ? 500 : 400,
              color: active === item.id ? 'var(--accent)' : 'var(--gray-600)',
              background: 'none', border: 'none', cursor: 'pointer',
              padding: '6px 10px', borderRadius: 6,
              transition: 'color 0.2s',
            }}>
              {item.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--black)', fontSize: '20px' }}
          className="mobile-menu-btn"
          aria-label="Menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {menuOpen && (
        <div style={{
          position: 'absolute', top: '56px', left: 0, right: 0,
          background: 'rgba(255,255,255,0.96)', backdropFilter: 'blur(20px)',
          borderBottom: '0.5px solid var(--gray-100)',
          padding: '16px 24px',
        }}>
          {NAV_ITEMS.map(item => (
            <button key={item.id} onClick={() => { scrollTo(item.id); setMenuOpen(false) }} style={{
              display: 'block', width: '100%', textAlign: 'left',
              fontFamily: 'var(--font-body)', fontSize: '15px',
              color: active === item.id ? 'var(--accent)' : 'var(--gray-800)',
              background: 'none', border: 'none', cursor: 'pointer',
              padding: '10px 0',
              borderBottom: '0.5px solid var(--gray-100)',
            }}>
              {item.label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  )
}

function Hero({ scrollTo }) {
  return (
    <section id="home" style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      background: 'linear-gradient(160deg, #000000 0%, #0a0a1a 50%, #000c1a 100%)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(ellipse 80% 60% at 60% 40%, rgba(0,102,204,0.18) 0%, transparent 60%), radial-gradient(ellipse 40% 40% at 20% 80%, rgba(0,153,255,0.08) 0%, transparent 60%)',
      }} />
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, padding: '120px 24px 80px' }}>
        <div style={{ maxWidth: 720 }}>
          <div style={{
            display: 'inline-block',
            fontFamily: 'var(--font-display)', fontSize: '11px', fontWeight: 600,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            color: 'rgba(41,151,255,1)',
            background: 'rgba(0,102,204,0.15)',
            border: '0.5px solid rgba(0,102,204,0.3)',
            padding: '5px 12px', borderRadius: 20,
            marginBottom: 24,
          }}>
            {SITE.conferenceTag}
          </div>

          <h1 style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(2.8rem, 6vw, 5rem)',
            fontWeight: 800, color: 'var(--white)',
            lineHeight: 1.05, letterSpacing: '-0.03em',
            marginBottom: 24,
          }}>
            {SITE.projectTitle}
            <span style={{ display: 'block', color: 'var(--accent-light)', fontWeight: 700 }}>
              Code Analysis
            </span>
            <span style={{ display: 'block', color: 'rgba(255,255,255,0.5)', fontWeight: 400, fontSize: '60%' }}>
              for CS Education
            </span>
          </h1>

          <p style={{
            fontSize: '17px', color: 'rgba(255,255,255,0.6)',
            lineHeight: 1.7, marginBottom: 40, maxWidth: 560,
            fontWeight: 300,
          }}>
            {SITE.projectTagline}
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <button className="btn btn-primary" onClick={() => scrollTo('components')} style={{ fontSize: '15px' }}>
              Explore Platform
            </button>
            <button className="btn btn-outline" onClick={() => scrollTo('domain')} style={{
              borderColor: 'rgba(255,255,255,0.25)', color: 'rgba(255,255,255,0.8)',
            }}>
              Research Overview
            </button>
          </div>

          <div style={{
            display: 'flex', gap: 40, marginTop: 64,
            paddingTop: 32, borderTop: '0.5px solid rgba(255,255,255,0.1)',
            flexWrap: 'wrap',
          }}>
            {[
              { value: '0.85', label: 'Macro F1 Score' },
              { value: '+16.4%', label: 'vs LLM Baseline' },
              { value: '4', label: 'AI Components' },
              { value: '90.7%', label: 'User Satisfaction' },
            ].map(stat => (
              <div key={stat.label}>
                <div style={{
                  fontFamily: 'var(--font-display)', fontSize: '28px', fontWeight: 700,
                  color: 'var(--white)', letterSpacing: '-0.02em',
                }}>{stat.value}</div>
                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', marginTop: 2 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function SectionHeader({ tag, title, subtitle }) {
  return (
    <div style={{ marginBottom: 56, maxWidth: 600 }}>
      {tag && <div className="tag">{tag}</div>}
      <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 700, marginBottom: 16, color: 'var(--gray-800)' }}>
        {title}
      </h2>
      {subtitle && <p style={{ fontSize: '16px', color: 'var(--gray-400)', lineHeight: 1.7 }}>{subtitle}</p>}
    </div>
  )
}

function Domain() {
  const [activeTab, setActiveTab] = useState('problem')
  const tabs = [
    { id: 'problem', label: 'Research Problem' },
    { id: 'gap', label: 'Research Gap' },
    { id: 'objectives', label: 'Objectives' },
    { id: 'methodology', label: 'Methodology' },
    { id: 'technologies', label: 'Technologies' },
  ]

  return (
    <section id="domain" className="section" style={{ background: 'var(--gray-50)' }}>
      <div className="container">
        <SectionHeader
          tag="Domain"
          title="Research Foundation"
          subtitle="A rigorous academic investigation into AI-assisted programming education and automated code comprehension."
        />

        <div style={{ display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap' }}>
          {tabs.map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{
              fontFamily: 'var(--font-body)', fontSize: '14px', fontWeight: activeTab === tab.id ? 500 : 400,
              padding: '8px 18px', borderRadius: 980,
              background: activeTab === tab.id ? 'var(--black)' : 'transparent',
              color: activeTab === tab.id ? 'var(--white)' : 'var(--gray-600)',
              border: `1px solid ${activeTab === tab.id ? 'var(--black)' : 'var(--gray-200)'}`,
              cursor: 'pointer', transition: 'all 0.2s',
            }}>
              {tab.label}
            </button>
          ))}
        </div>

        <div style={{
          background: 'var(--white)', borderRadius: 'var(--radius-lg)',
          border: '0.5px solid var(--gray-200)', padding: '40px',
          minHeight: 280,
        }}>
          {activeTab === 'problem' && (
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', marginBottom: 16 }}>Research Problem</h3>
              <p style={{ fontSize: '16px', color: 'var(--gray-600)', lineHeight: 1.8, maxWidth: 700 }}>{SITE.researchProblem}</p>
            </div>
          )}
          {activeTab === 'gap' && (
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', marginBottom: 16 }}>Research Gap</h3>
              <p style={{ fontSize: '16px', color: 'var(--gray-600)', lineHeight: 1.8, maxWidth: 700 }}>{SITE.researchGap}</p>
            </div>
          )}
          {activeTab === 'objectives' && (
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', marginBottom: 20 }}>Research Objectives</h3>
              <ol style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 14 }}>
                {SITE.objectives.map((obj, i) => (
                  <li key={i} style={{ fontSize: '16px', color: 'var(--gray-600)', lineHeight: 1.7 }}>
                    <span style={{ fontWeight: 500, color: 'var(--accent)' }}>0{i + 1}.</span>{' '}{obj}
                  </li>
                ))}
              </ol>
            </div>
          )}
          {activeTab === 'methodology' && (
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', marginBottom: 16 }}>Methodology</h3>
              <p style={{ fontSize: '16px', color: 'var(--gray-600)', lineHeight: 1.8, maxWidth: 700 }}>{SITE.methodology}</p>
              <div style={{ marginTop: 28, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
                {[
                  { label: 'Architecture', value: 'Distributed Microservices' },
                  { label: 'Frontend', value: 'React / Vite' },
                  { label: 'Gateway', value: 'Node.js / Express' },
                  { label: 'Auth', value: 'JWT + Rate Limiting' },
                ].map(item => (
                  <div key={item.label} style={{
                    background: 'var(--gray-50)', borderRadius: 'var(--radius-md)',
                    padding: '14px 16px',
                  }}>
                    <div style={{ fontSize: '12px', color: 'var(--gray-400)', marginBottom: 4 }}>{item.label}</div>
                    <div style={{ fontSize: '14px', fontWeight: 500 }}>{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {activeTab === 'technologies' && (
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', marginBottom: 20 }}>Technologies Used</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                {SITE.technologies.map(tech => (
                  <div key={tech.name} style={{
                    background: 'var(--gray-50)', borderRadius: 'var(--radius-md)',
                    border: '0.5px solid var(--gray-200)',
                    padding: '8px 14px',
                  }}>
                    <div style={{ fontSize: '13px', fontWeight: 500 }}>{tech.name}</div>
                    <div style={{ fontSize: '11px', color: 'var(--accent)', marginTop: 2 }}>{tech.cat}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

function ComponentCard({ comp }) {
  const [expanded, setExpanded] = useState(false)
  return (
    <div style={{
      background: 'var(--white)', border: '0.5px solid var(--gray-200)',
      borderRadius: 'var(--radius-xl)', padding: '32px',
      transition: 'all 0.3s ease',
      borderTop: `3px solid ${comp.color}`,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
        <div style={{
          width: 48, height: 48, borderRadius: 'var(--radius-md)',
          background: `${comp.color}15`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '22px', color: comp.color,
        }}>{comp.icon}</div>
        <span style={{
          fontFamily: 'var(--font-display)', fontSize: '12px', fontWeight: 700,
          color: comp.color, opacity: 0.6, letterSpacing: '0.05em',
        }}>{comp.number}</span>
      </div>

      <h3 style={{
        fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: 700,
        marginBottom: 6, color: 'var(--gray-800)',
      }}>{comp.title}</h3>
      <div style={{ fontSize: '12px', color: comp.color, fontWeight: 500, marginBottom: 4 }}>{comp.tagline}</div>
      <div style={{ fontSize: '12px', color: 'var(--gray-400)', marginBottom: 16 }}>by {comp.owner}</div>

      <p style={{ fontSize: '14px', color: 'var(--gray-600)', lineHeight: 1.7, marginBottom: 20 }}>
        {comp.description}
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 20 }}>
        {comp.metrics.map(m => (
          <div key={m.label} style={{
            background: 'var(--gray-50)', borderRadius: 'var(--radius-sm)',
            padding: '10px 12px',
          }}>
            <div style={{ fontSize: '18px', fontFamily: 'var(--font-display)', fontWeight: 700, color: comp.color }}>{m.value}</div>
            <div style={{ fontSize: '11px', color: 'var(--gray-400)', marginTop: 2 }}>{m.label}</div>
          </div>
        ))}
      </div>

      {expanded && (
        <div style={{ marginBottom: 20 }}>
          <div style={{ fontSize: '13px', fontWeight: 500, marginBottom: 10, color: 'var(--gray-800)' }}>Key Features</div>
          {comp.highlights.map((h, i) => (
            <div key={i} style={{
              display: 'flex', gap: 10, marginBottom: 10,
              fontSize: '13px', color: 'var(--gray-600)', lineHeight: 1.6,
            }}>
              <span style={{ color: comp.color, marginTop: 2, flexShrink: 0 }}>→</span>
              <span>{h}</span>
            </div>
          ))}
          <div style={{ marginTop: 16 }}>
            <div style={{ fontSize: '13px', fontWeight: 500, marginBottom: 8, color: 'var(--gray-800)' }}>Technologies</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {comp.tech.map(t => (
                <span key={t} style={{
                  fontSize: '11px', padding: '4px 10px',
                  background: `${comp.color}10`, color: comp.color,
                  borderRadius: 20, fontWeight: 500,
                }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      )}

      <button onClick={() => setExpanded(!expanded)} style={{
        fontFamily: 'var(--font-body)', fontSize: '13px', fontWeight: 500,
        color: comp.color, background: 'none', border: 'none', cursor: 'pointer',
        padding: 0, display: 'flex', alignItems: 'center', gap: 4,
      }}>
        {expanded ? '↑ Show less' : '↓ Explore details'}
      </button>
    </div>
  )
}

function Components() {
  return (
    <section id="components" className="section">
      <div className="container-wide">
        <SectionHeader
          tag="Platform Components"
          title="Four AI-Powered Modules"
          subtitle="Each component tackles a distinct dimension of the CS education challenge — from concept extraction to interview readiness."
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {SITE.components.map(comp => (
            <ComponentCard key={comp.id} comp={comp} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Milestones() {
  return (
    <section id="milestones" className="section" style={{ background: 'var(--gray-800)' }}>
      <div className="container">
        <SectionHeader
          tag="Milestones"
          title={<span style={{ color: 'var(--white)' }}>Project Timeline</span>}
          subtitle={<span style={{ color: 'rgba(255,255,255,0.4)' }}>Key assessments and research deliverables throughout the BSc (Hons) IT programme.</span>}
        />
        <div style={{ position: 'relative' }}>
          <div style={{
            position: 'absolute', left: 20, top: 0, bottom: 0, width: '1px',
            background: 'rgba(255,255,255,0.1)',
          }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {SITE.milestones.map((m, i) => (
              <div key={m.id} style={{
                display: 'flex', gap: 28, paddingLeft: 0, marginBottom: 32,
                opacity: m.status === 'upcoming' ? 0.5 : 1,
              }}>
                <div style={{ position: 'relative', flexShrink: 0, width: 40 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: '50%',
                    background: m.status === 'done' ? 'var(--accent)' : 'var(--gray-600)',
                    border: `2px solid ${m.status === 'done' ? 'var(--accent)' : 'rgba(255,255,255,0.2)'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'white', fontSize: '14px', fontWeight: 600,
                  }}>
                    {m.status === 'done' ? '✓' : m.id}
                  </div>
                </div>
                <div style={{ paddingBottom: 32, borderBottom: i < SITE.milestones.length - 1 ? '0.5px solid rgba(255,255,255,0.05)' : 'none', flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                    <h4 style={{
                      fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: 600,
                      color: 'var(--white)',
                    }}>{m.title}</h4>
                    <span style={{
                      fontSize: '12px', color: m.status === 'done' ? '#4ade80' : 'rgba(255,255,255,0.3)',
                      background: m.status === 'done' ? 'rgba(74,222,128,0.1)' : 'rgba(255,255,255,0.05)',
                      padding: '3px 10px', borderRadius: 20, flexShrink: 0, marginLeft: 12,
                    }}>
                      {m.date} · {m.status === 'done' ? 'Completed' : 'Upcoming'}
                    </span>
                  </div>
                  <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.7 }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function DocCard({ item, type }) {
  const isPending = item.status === 'pending'
  return (
    <a href={item.url} style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      background: 'var(--white)', borderRadius: 'var(--radius-md)',
      border: '0.5px solid var(--gray-200)', padding: '16px 20px',
      transition: 'all 0.2s', opacity: isPending ? 0.45 : 1,
      textDecoration: 'none', color: 'inherit',
    }}
    onMouseEnter={e => { if (!isPending) e.currentTarget.style.borderColor = 'var(--accent)' }}
    onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--gray-200)' }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{
          width: 36, height: 36, borderRadius: 8,
          background: isPending ? 'var(--gray-100)' : 'rgba(0,102,204,0.08)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '14px', color: isPending ? 'var(--gray-400)' : 'var(--accent)',
        }}>
          {type === 'slides' ? '▶' : '📄'}
        </div>
        <div>
          <div style={{ fontSize: '14px', fontWeight: 500, color: 'var(--gray-800)' }}>{item.title}</div>
          {item.date && <div style={{ fontSize: '12px', color: 'var(--gray-400)', marginTop: 2 }}>{item.date}</div>}
        </div>
      </div>
      <span style={{
        fontSize: '12px', fontWeight: 500,
        color: isPending ? 'var(--gray-400)' : 'var(--accent)',
        background: isPending ? 'var(--gray-50)' : 'rgba(0,102,204,0.08)',
        padding: '4px 10px', borderRadius: 20,
      }}>
        {isPending ? 'Pending' : item.type || 'Slides'}
      </span>
    </a>
  )
}

function Documents() {
  return (
    <section id="documents" className="section">
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 64 }}>
          <div>
            <SectionHeader tag="Documents" title="Project Documents" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {SITE.documents.map(doc => <DocCard key={doc.title} item={doc} type="doc" />)}
            </div>
          </div>
          <div id="presentations">
            <SectionHeader tag="Presentations" title="Slide Decks" />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {SITE.presentations.map(p => <DocCard key={p.title} item={p} type="slides" />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Team() {
  const members = SITE.team.filter(m => m.type === 'member')
  const supervisors = SITE.team.filter(m => m.type === 'supervisor')

  const MemberCard = ({ person, large }) => (
    <div style={{
      background: 'var(--white)', borderRadius: 'var(--radius-lg)',
      border: '0.5px solid var(--gray-200)', padding: '24px',
      transition: 'all 0.25s',
    }}
    onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.07)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
    onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none' }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
        <div style={{
          width: large ? 52 : 44, height: large ? 52 : 44,
          borderRadius: '50%', flexShrink: 0,
          background: `${person.color}18`,
          border: `2px solid ${person.color}30`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'var(--font-display)', fontSize: '14px', fontWeight: 700,
          color: person.color,
        }}>
          {person.initials}
        </div>
        <div>
          <div style={{ fontSize: '15px', fontWeight: 500, color: 'var(--gray-800)' }}>{person.name}</div>
          {person.id && <div style={{ fontSize: '12px', color: 'var(--gray-400)', marginTop: 1 }}>{person.id}</div>}
        </div>
      </div>
      <div style={{
        fontSize: '12px', fontWeight: 500,
        color: person.color,
        background: `${person.color}10`,
        display: 'inline-block', padding: '3px 10px', borderRadius: 20, marginBottom: 10,
      }}>
        {person.role}
      </div>
      <a href={`mailto:${person.email}`} style={{
        display: 'block', fontSize: '13px', color: 'var(--gray-400)',
        transition: 'color 0.2s',
      }}
      onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
      onMouseLeave={e => e.currentTarget.style.color = 'var(--gray-400)'}
      >
        {person.email}
      </a>
    </div>
  )

  return (
    <section id="team" className="section" style={{ background: 'var(--gray-50)' }}>
      <div className="container">
        <SectionHeader
          tag="About Us"
          title="Research Team"
          subtitle={`Final year research group ${SITE.groupNo} — ${SITE.department}, ${SITE.institution}.`}
        />
        <div style={{ marginBottom: 40 }}>
          <div style={{ fontSize: '13px', color: 'var(--gray-400)', marginBottom: 16, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Group Members</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
            {members.map(m => <MemberCard key={m.name} person={m} />)}
          </div>
        </div>
        <div>
          <div style={{ fontSize: '13px', color: 'var(--gray-400)', marginBottom: 16, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Supervisors</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
            {supervisors.map(m => <MemberCard key={m.name} person={m} />)}
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeader
          tag="Contact"
          title="Get in Touch"
          subtitle="Reach out to the OptiCode research team for questions, collaborations, or more information about the platform."
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          <div style={{
            background: 'var(--black)', borderRadius: 'var(--radius-xl)',
            padding: '40px', color: 'var(--white)',
          }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 700, marginBottom: 12 }}>OptiCode Research</h3>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: 24 }}>
              {SITE.institution}<br />{SITE.department}<br />Malabe, Sri Lanka
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {SITE.team.filter(m => m.type === 'supervisor').map(s => (
                <a key={s.email} href={`mailto:${s.email}`} style={{
                  display: 'flex', alignItems: 'center', gap: 10,
                  color: 'rgba(255,255,255,0.6)', fontSize: '14px',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-light)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
                >
                  <span style={{ fontSize: '16px' }}>✉</span>
                  <span>{s.email}</span>
                </a>
              ))}
            </div>
            {/* <div style={{ marginTop: 28, paddingTop: 24, borderTop: '0.5px solid rgba(255,255,255,0.1)' }}>
              <a href={SITE.cdapUrl} target="_blank" rel="noopener noreferrer" style={{
                fontSize: '13px', color: 'rgba(255,255,255,0.4)', transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-light)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}
              >
                CDAP Repository → {SITE.cdapUrl}
              </a>
            </div> */}
          </div>

          <div style={{
            background: 'var(--gray-50)', borderRadius: 'var(--radius-xl)',
            border: '0.5px solid var(--gray-200)', padding: '40px',
          }}>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px', marginBottom: 20 }}>Send a Message</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {['Your Name', 'Your Email'].map(ph => (
                <input key={ph} type={ph.includes('Email') ? 'email' : 'text'} placeholder={ph} style={{
                  width: '100%', padding: '12px 16px', borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--gray-200)', background: 'var(--white)',
                  fontFamily: 'var(--font-body)', fontSize: '14px', outline: 'none',
                  transition: 'border-color 0.2s',
                }}
                onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                onBlur={e => e.target.style.borderColor = 'var(--gray-200)'}
                />
              ))}
              <textarea placeholder="Your Message" rows={4} style={{
                width: '100%', padding: '12px 16px', borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--gray-200)', background: 'var(--white)',
                fontFamily: 'var(--font-body)', fontSize: '14px', outline: 'none',
                resize: 'vertical', transition: 'border-color 0.2s',
              }}
              onFocus={e => e.target.style.borderColor = 'var(--accent)'}
              onBlur={e => e.target.style.borderColor = 'var(--gray-200)'}
              />
              <button className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
                Send Message →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer({ scrollTo }) {
  return (
    <footer style={{
      background: 'var(--gray-800)', color: 'rgba(255,255,255,0.4)',
      padding: '40px 0',
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: 700, color: 'var(--white)', marginBottom: 4 }}>
            Opti<span style={{ color: 'var(--accent-light)' }}>Code</span>
          </div>
          <div style={{ fontSize: '13px' }}>
            Group {SITE.groupNo} · {SITE.institution}
          </div>
        </div>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          {NAV_ITEMS.slice(0, 5).map(item => (
            <button key={item.id} onClick={() => scrollTo(item.id)} style={{
              fontFamily: 'var(--font-body)', fontSize: '13px',
              color: 'rgba(255,255,255,0.35)', background: 'none', border: 'none',
              cursor: 'pointer', transition: 'color 0.2s', padding: 0,
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.7)'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.35)'}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div style={{ fontSize: '12px', textAlign: 'right' }}>
          © 2026 OptiCode Research Team<br />BSc (Hons) Information Technology, SLIIT
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sections = NAV_ITEMS.map(n => document.getElementById(n.id)).filter(Boolean)
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActiveSection(entry.target.id)
      })
    }, { rootMargin: '-40% 0px -55% 0px' })
    sections.forEach(s => observer.observe(s))
    return () => sections.forEach(s => observer.unobserve(s))
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Navbar active={activeSection} scrollTo={scrollTo} />
      <Hero scrollTo={scrollTo} />
      <Domain />
      <Components />
      <Milestones />
      <Documents />
      <Team />
      <Contact />
      <Footer scrollTo={scrollTo} />
    </>
  )
}