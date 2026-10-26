import React, { useEffect, useRef, useState } from 'react';
import { Mail, Smartphone, ExternalLink, ChevronRight, Apple, Box, Network, Database, X } from 'lucide-react';

// --- Brand Icons (Colorful SVGs) ---
const IconLinkedIn = ({ size = 16, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="#0077B5">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const IconGitHub = ({ size = 16, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="#181717">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const IconJava = ({ size = 16, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none" stroke="#E76F00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
    <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" stroke="#5382a1"/>
    <line x1="9" y1="2" x2="9" y2="4" />
    <line x1="15" y1="2" x2="15" y2="4" />
    <line x1="12" y1="2" x2="12" y2="4" />
  </svg>
);

const IconHTML5 = ({ size = 16, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="#E34F26">
    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.09 4.163l-13.18.016L5.753 8.03h12.502l-.248 2.766H6.002l.343 3.844h11.233l-.865 9.697-4.733 1.314-4.74-1.314-.325-3.64H3.848l.493 6.963 7.636 2.12 7.643-2.12 1.341-15.026H7.135l-.234-2.61h11.83l-.141-1.558z"/>
  </svg>
);

const IconCSS3 = ({ size = 16, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="#1572B6">
    <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm17.09 4.163l-13.18.016L5.753 8.03h12.502l-.248 2.766H6.002l.343 3.844h11.233l-.865 9.697-4.733 1.314-4.74-1.314-.325-3.64H3.848l.493 6.963 7.636 2.12 7.643-2.12 1.341-15.026H7.135l-.234-2.61h11.83l-.141-1.558z"/>
  </svg>
);

const IconJavaScript = ({ size = 16, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="#F7DF1E">
    <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.463.795-.694 1.258-.694.752 0 1.295.27 1.632.748.163.232.327.42.61.42.316 0 .59-.225.59-.57v-1.92c0-.36-.21-.57-.495-.735-1.125-.66-2.52-.825-3.825-.825-3.15 0-4.575 1.77-4.575 3.99 0 2.22 1.5 3.195 3.69 3.93 1.455.51 1.77 1.05 1.77 1.62 0 .84-.87 1.35-1.98 1.35-1.2 0-1.98-.42-2.475-1.14-.15-.225-.33-.36-.615-.36-.3 0-.585.225-.585.555v1.98c0 .36.21.615.525.81 1.26.795 3.165 1.08 4.77 1.08 3.255 0 5.175-1.785 5.175-4.215-.015-.81-.225-1.425-.615-1.92zM11.25 10.35h-1.89v8.37c0 1.95-1.065 2.76-2.925 2.76-.795 0-1.635-.225-2.205-.57-.27-.15-.435-.405-.435-.735v-1.965c0-.39.27-.585.585-.585.12 0 .255.03.36.09.435.255 1.05.42 1.635.42.825 0 1.215-.435 1.215-1.29V10.35h-1.89v-2.1h5.55v2.1z"/>
  </svg>
);

const IconReact = ({ size = 16, className = '' }) => (
  <svg width={size} height={size} viewBox="-11.5 -10.23174 23 20.46348" className={className} fill="#61DAFB">
    <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
    <g stroke="#61dafb" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2"/>
      <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
      <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
    </g>
  </svg>
);

const IconSpringBoot = ({ size = 16, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="#6DB33F">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 19.333c-4.045 0-7.333-3.288-7.333-7.333S7.955 4.667 12 4.667c4.045 0 7.333 3.288 7.333 7.333s-3.288 7.333-7.333 7.333zm3.76-9.61c-.51-.4-1.24-.62-2.12-.62-2.3 0-3.66 1.41-3.66 3.12 0 1.15.7 1.94 1.77 2.22l.53.14c.66.17.91.43.91.82 0 .54-.53.94-1.34.94-.85 0-1.57-.34-2.07-.94l-1.09 1.48c.85.92 2.05 1.38 3.29 1.38 2.24 0 3.73-1.31 3.73-3.13 0-1.12-.76-1.92-1.92-2.22l-.46-.12c-.67-.17-.91-.43-.91-.84 0-.48.45-.88 1.25-.88.66 0 1.25.26 1.63.7l1.06-1.47z"/>
  </svg>
);

const IconMySQL = ({ size = 16, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="#4479A1">
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8zm-1-13h2v7h-2zm0 8h2v2h-2z"/>
  </svg>
);

const IconGemini = ({ size = 16, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className} fill="none">
    <path d="M12 2L14.2 9.8L22 12L14.2 14.2L12 22L9.8 14.2L2 12L9.8 9.8L12 2Z" fill="#8AB4F8"/>
    <path d="M19 15L19.8 17.2L22 18L19.8 18.8L19 21L18.2 18.8L16 18L18.2 17.2L19 15Z" fill="#4285F4"/>
  </svg>
);

// --- Custom Hooks ---
const useScrollReveal = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
};

// --- Reusable UI Components ---
const RevealWrapper = ({ children, className = '', delay = 0 }) => {
  const [ref, isVisible] = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const PrimaryButton = ({ children, href, onClick, target, rel }) => (
  <a
    href={href}
    onClick={onClick}
    target={target}
    rel={rel}
    className="inline-flex items-center justify-center bg-[#0071e3] text-[#f4f8fb] rounded-[980px] px-[15px] py-[11px] text-[17px] font-normal tracking-[-0.016em] hover:bg-[#0077ED] transition-colors duration-300 shadow-sm"
  >
    {children}
  </a>
);

const SecondaryButton = ({ children, href, onClick, target, rel }) => (
  <a
    href={href}
    onClick={onClick}
    target={target}
    rel={rel}
    className="inline-flex items-center justify-center border border-[#0066cc] text-[#0066cc] bg-transparent rounded-[980px] px-[15px] py-[11px] text-[17px] font-normal tracking-[-0.016em] hover:bg-[#f4f8fb] transition-colors duration-300"
  >
    {children}
  </a>
);

const Section = ({ children, bg = 'bg-[#f5f5f7]', id }) => (
  <section id={id} className={`w-full py-[64px] md:py-[96px] ${bg} flex justify-center px-6`}>
    <div className="w-full max-w-[980px]">
      {children}
    </div>
  </section>
);

// --- 3D Hover Card Components ---
const MouseEnterContext = React.createContext(undefined);

const CardContainer = ({ children, className, containerClassName }) => {
  const containerRef = useRef(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
  };

  const handleMouseEnter = (e) => {
    setIsMouseEntered(true);
  };

  const handleMouseLeave = (e) => {
    if (!containerRef.current) return;
    setIsMouseEntered(false);
    containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };

  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div
        className={`py-6 flex items-center justify-center ${containerClassName || ""}`}
        style={{ perspective: "1000px" }}
      >
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className={`flex items-center justify-center transition-all duration-200 ease-linear ${className || ""}`}
          style={{ transformStyle: "preserve-3d" }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
};

const CardBody = ({ children, className }) => {
  return (
    <div
      className={`h-full w-full [transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d] ${className || ""}`}
    >
      {children}
    </div>
  );
};

const CardItem = ({
  as: Tag = "div",
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  ...rest
}) => {
  const ref = useRef(null);
  const context = React.useContext(MouseEnterContext);
  if (context === undefined) {
    throw new Error("CardItem must be used within a CardContainer");
  }
  const [isMouseEntered] = context;

  useEffect(() => {
    if (!ref.current) return;
    if (isMouseEntered) {
      ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
    } else {
      ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
    }
  }, [isMouseEntered, translateX, translateY, translateZ, rotateX, rotateY, rotateZ]);

  return (
    <Tag
      ref={ref}
      className={`transition duration-200 ease-linear ${className || ""}`}
      {...rest}
    >
      {children}
    </Tag>
  );
};

// --- Resume View Component ---
const ResumeView = ({ onClose }) => (
  <div className="fixed inset-0 z-[100] bg-[#f5f5f7] overflow-y-auto py-12 px-4 md:px-12 font-sans text-[#1d1d1f] flex flex-col items-center">
    <div className="max-w-[850px] w-full flex justify-between items-center mb-8">
      <h2 className="text-[28px] font-semibold tracking-[-0.011em]">Arzoo_Mehdi_Java.pdf</h2>
      <SecondaryButton href="#" onClick={(e) => { e.preventDefault(); onClose(); }}>
        <X size={16} className="mr-2" /> Close
      </SecondaryButton>
    </div>
    <div className="max-w-[850px] w-full bg-white p-8 md:p-16 border border-[#d2d2d7] rounded-[8px] shadow-sm text-left">
      <div className="text-center mb-8 border-b border-[#d2d2d7] pb-8">
        <h1 className="text-[40px] font-semibold tracking-[-0.011em] mb-2">Arzoo Mehdi</h1>
        <p className="text-[14px] text-[#474747] flex justify-center items-center gap-4 flex-wrap">
          <a href="mailto:arzoomehdi12345678910@gmail.com" className="hover:text-[#0071e3] transition-colors">arzoomehdi12345678910@gmail.com</a>
          <a href="tel:+919113784778" className="hover:text-[#0071e3] transition-colors">+91 9113784778</a>
          <a href="https://linkedin.com/in/arzoo-mehdi-7ba3012ba" target="_blank" rel="noopener noreferrer" className="hover:text-[#0071e3] transition-colors">arzoo-mehdi-7ba3012ba</a>
          <a href="https://github.com/Arzoomehdi" target="_blank" rel="noopener noreferrer" className="hover:text-[#0071e3] transition-colors">Arzoomehdi</a>
        </p>
      </div>

      <div className="space-y-8 text-[14px] leading-[1.47] tracking-[-0.016em]">
        <section>
          <h2 className="text-[17px] font-semibold mb-3 uppercase text-[#707070] border-b border-[#d2d2d7] pb-1">Skills</h2>
          <p className="mb-1"><strong>Programming:</strong> Java</p>
          <p className="mb-1"><strong>Frontend:</strong> HTML, CSS, JavaScript, React</p>
          <p className="mb-1"><strong>Backend:</strong> Spring Boot, Hibernate</p>
          <p className="mb-1"><strong>Database:</strong> MySQL</p>
          <p><strong>Core:</strong> OOP's, DSA</p>
        </section>

        <section>
          <h2 className="text-[17px] font-semibold mb-3 uppercase text-[#707070] border-b border-[#d2d2d7] pb-1">Projects</h2>
          <div className="mb-4">
            <div className="flex justify-between font-semibold">
              <span>CropGuard</span>
              <span>May 2026 - June 2026</span>
            </div>
            <p className="mb-2 italic text-[#707070]">Tech: Java, HTML5, CSS3, JavaScript, Spring Boot 3, Gemini API | Live Link</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Developed a robust agricultural web application leveraging Spring Boot 3 and Java for efficient backend processing.</li>
              <li>Integrated the Gemini API to enable dynamic and intelligent data processing for end users.</li>
              <li>Designed a responsive and intuitive user interface utilizing HTML5, CSS3, and JavaScript.</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-[17px] font-semibold mb-3 uppercase text-[#707070] border-b border-[#d2d2d7] pb-1">Experience</h2>
          <div className="mb-6">
            <div className="flex justify-between font-semibold">
              <span>SPRINT</span>
              <span>Nov 2025 - Feb 2026</span>
            </div>
            <p className="mb-2 italic text-[#707070]">Software Developer Intern</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Designed and developed scalable software solutions utilizing core Java and OOP principles.</li>
              <li>Collaborated with engineering teams to debug code, streamline backend processes, and improve application performance.</li>
            </ul>
          </div>
          <div>
            <div className="flex justify-between font-semibold">
              <span>Bright Code Software Pvt. Ltd.</span>
              <span>June 2024 - July 2024</span>
            </div>
            <p className="mb-2 italic text-[#707070]">Web Development Intern</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Assisted in building responsive web layouts and interactive user interfaces utilizing frontend web technologies.</li>
              <li>Supported the backend team in managing data structures and resolving database queries in MySQL.</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-[17px] font-semibold mb-3 uppercase text-[#707070] border-b border-[#d2d2d7] pb-1">Education</h2>
          <div className="flex justify-between font-semibold">
            <span>Guru Gobind Singh Educational Society Technical Campus</span>
            <span>2022-2026</span>
          </div>
          <p>B.Tech in Computer Science and Engineering | CGPA: 6.57</p>
          <p className="text-[#707070]">Bokaro Steel City, Jharkhand</p>
        </section>
      </div>
    </div>
  </div>
);

// --- Main App Component ---
export default function App() {
  const [isResumeView, setIsResumeView] = useState(false);

  return (
    <div className="min-h-screen bg-[#f5f5f7] font-sans selection:bg-[#0071e3] selection:text-white" style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
      
      {isResumeView && <ResumeView onClose={() => setIsResumeView(false)} />}

      {/* Global Nav Bar */}
      <nav className="sticky top-0 z-50 w-full bg-[#1d1d1f]/90 backdrop-blur-md border-b border-[#333333]">
        <div className="max-w-[980px] mx-auto px-4 py-[8px] flex items-center justify-between text-[#f5f5f7] text-[12px] tracking-[-0.022em] font-normal">
          <a href="#home" className="hover:text-white transition-colors"><Apple size={14} /></a>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#education" className="hover:text-white transition-colors">Education</a>
          </div>
          <div className="flex items-center space-x-4 text-[#f5f5f7]">
            <a href="https://github.com/Arzoomehdi" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><IconGitHub size={14} /></a>
            <a href="https://linkedin.com/in/arzoo-mehdi-7ba3012ba" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><IconLinkedIn size={14} /></a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Section id="home" bg="bg-[#f5f5f7]">
        <RevealWrapper className="flex flex-col items-center text-center mt-12 mb-20">
          <h1 className="text-[40px] md:text-[56px] font-semibold text-[#1d1d1f] tracking-[-0.011em] leading-[1.07] mb-2">
            Arzoo Mehdi
          </h1>
          <p className="text-[21px] md:text-[26px] font-light text-[#1d1d1f] tracking-[-0.016em] leading-[1.24] mb-6 max-w-2xl">
            Software Developer
          </p>
          
          <div className="flex flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 mb-10 text-[14px] text-[#474747] tracking-[-0.016em] w-full">
            <a href="https://linkedin.com/in/arzoo-mehdi-7ba3012ba" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-[#0071e3] transition-colors"><IconLinkedIn size={16} className="mr-2"/> <b>LinkedIn</b></a>
            <a href="https://github.com/Arzoomehdi" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-[#0071e3] transition-colors"><IconGitHub size={16} className="mr-2"/> <b>GitHub</b></a>
            <a href="mailto:arzoomehdi12345678910@gmail.com" className="flex items-center hover:text-[#0071e3] transition-colors"><Mail size={16} className="mr-2 text-[#0071e3]"/> <b>Email</b></a>
            <a href="tel:9113784778" className="flex items-center hover:text-[#0071e3] transition-colors"><Smartphone size={16} className="mr-2 text-[#4479A1]"/> <b>Phone</b></a>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4">
            <PrimaryButton href="#" onClick={(e) => { e.preventDefault(); setIsResumeView(true); }}>View Resume</PrimaryButton>
            <SecondaryButton href="#projects">View Projects</SecondaryButton>
          </div>
        </RevealWrapper>
      </Section>

      {/* Skills Section */}
      <Section id="skills" bg="bg-[#f4f8fb]">
        <RevealWrapper className="text-center">
          <h2 className="text-[28px] md:text-[40px] font-semibold text-[#1d1d1f] tracking-[-0.011em] leading-[1.14] mb-12">
            Technical Skills
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 text-left">
            <div className="border-t border-[#d2d2d7] pt-4">
              <h3 className="text-[17px] font-semibold text-[#1d1d1f] mb-4 tracking-[-0.016em]">Programming</h3>
              <div className="flex flex-col gap-3 text-[17px] font-normal text-[#474747] tracking-[-0.016em]">
                <span className="flex items-center"><IconJava size={18} className="mr-3"/> <b>Java</b></span>
              </div>
            </div>
            <div className="border-t border-[#d2d2d7] pt-4">
              <h3 className="text-[17px] font-semibold text-[#1d1d1f] mb-4 tracking-[-0.016em]">Frontend</h3>
              <div className="flex flex-col gap-3 text-[17px] font-normal text-[#474747] tracking-[-0.016em]">
                <span className="flex items-center"><IconHTML5 size={18} className="mr-3"/> <b>HTML5</b></span>
                <span className="flex items-center"><IconCSS3 size={18} className="mr-3"/> <b>CSS3</b></span>
                <span className="flex items-center"><IconJavaScript size={18} className="mr-3"/> <b>JavaScript</b></span>
                <span className="flex items-center"><IconReact size={18} className="mr-3"/> <b>React</b></span>
              </div>
            </div>
            <div className="border-t border-[#d2d2d7] pt-4">
              <h3 className="text-[17px] font-semibold text-[#1d1d1f] mb-4 tracking-[-0.016em]">Backend & DB</h3>
              <div className="flex flex-col gap-3 text-[17px] font-normal text-[#474747] tracking-[-0.016em]">
                <span className="flex items-center"><IconSpringBoot size={18} className="mr-3"/> <b>Spring Boot</b></span>
                <span className="flex items-center"><Database size={18} className="mr-3 text-[#1d1d1f]"/> <b>Hibernate</b></span>
                <span className="flex items-center"><IconMySQL size={18} className="mr-3"/> <b>MySQL</b></span>
              </div>
            </div>
            <div className="border-t border-[#d2d2d7] pt-4">
              <h3 className="text-[17px] font-semibold text-[#1d1d1f] mb-4 tracking-[-0.016em]">Core</h3>
              <div className="flex flex-col gap-3 text-[17px] font-normal text-[#474747] tracking-[-0.016em]">
                <span className="flex items-center"><Box size={18} className="mr-3 text-[#1d1d1f]"/> <b>OOP's</b></span>
                <span className="flex items-center"><Network size={18} className="mr-3 text-[#1d1d1f]"/> <b>DSA</b></span>
              </div>
            </div>
          </div>
        </RevealWrapper>
      </Section>

      {/* Projects Section */}
      <Section id="projects" bg="bg-[#f5f5f7]">
        <RevealWrapper className="flex flex-col items-center text-center py-10">
          <h2 className="text-[40px] md:text-[56px] font-semibold text-[#1d1d1f] tracking-[-0.011em] leading-[1.07] mb-2">
            Projects
          </h2>
          <p className="text-[17px] text-[#858585] tracking-[-0.016em] mb-4">Showcasing dynamic solutions.</p>
          
          <div className="w-full max-w-[850px] bg-white border border-[#d2d2d7] rounded-[8px] p-6 md:p-12 text-left hover:shadow-[rgba(0,0,0,0.06)_0px_8px_40px] transition-shadow duration-300">
            <div className="flex flex-col md:flex-row justify-between md:items-center mb-2">
              <div>
                <h3 className="text-[28px] md:text-[40px] font-semibold text-[#1d1d1f] tracking-[-0.011em]">
                  CropGuard
                </h3>
                <p className="text-[#858585] text-[14px] mt-1 tracking-[-0.016em]">
                  May 2026 — June 2026
                </p>
              </div>
            </div>
            
            {/* 3D Hover Effect Applied ONLY to the Image Container */}
            <CardContainer className="w-full mb-6">
              <CardBody className="w-full">
                <CardItem translateZ="100" className="w-full">
                  <img
                    src="https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=2000&auto=format&fit=crop"
                    height="1000"
                    width="1000"
                    className="h-[250px] md:h-[400px] w-full object-cover rounded-[8px] shadow-[rgba(0,0,0,0.1)_0px_4px_20px]"
                    alt="CropGuard Agricultural Tech"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>

            <div className="flex flex-wrap gap-3 mb-8 text-[14px] text-[#1d1d1f]">
              <span className="flex items-center bg-[#f5f5f7] px-3 py-1.5 rounded-[980px] border border-[#e2e2e5]"><IconJava size={14} className="mr-2"/> <b>Java</b></span>
              <span className="flex items-center bg-[#f5f5f7] px-3 py-1.5 rounded-[980px] border border-[#e2e2e5]"><IconHTML5 size={14} className="mr-2"/> <b>HTML5</b></span>
              <span className="flex items-center bg-[#f5f5f7] px-3 py-1.5 rounded-[980px] border border-[#e2e2e5]"><IconCSS3 size={14} className="mr-2"/> <b>CSS3</b></span>
              <span className="flex items-center bg-[#f5f5f7] px-3 py-1.5 rounded-[980px] border border-[#e2e2e5]"><IconJavaScript size={14} className="mr-2"/> <b>JavaScript</b></span>
              <span className="flex items-center bg-[#f5f5f7] px-3 py-1.5 rounded-[980px] border border-[#e2e2e5]"><IconSpringBoot size={14} className="mr-2"/> <b>Spring Boot 3</b></span>
              <span className="flex items-center bg-[#f5f5f7] px-3 py-1.5 rounded-[980px] border border-[#e2e2e5]"><IconGemini size={14} className="mr-2"/> <b>Gemini API</b></span>
            </div>

            <div className="space-y-4 mb-10">
               <p className="flex text-[17px] text-[#474747] leading-[1.47] font-normal tracking-[-0.016em]">
                 <ChevronRight size={16} className="text-[#0071e3] mt-1 mr-3 flex-shrink-0" />
                 Developed a robust agricultural web application leveraging Spring Boot 3 and Java for efficient backend processing.
               </p>
               <p className="flex text-[17px] text-[#474747] leading-[1.47] font-normal tracking-[-0.016em]">
                 <ChevronRight size={16} className="text-[#0071e3] mt-1 mr-3 flex-shrink-0" />
                 Integrated the Gemini API to enable dynamic and intelligent data processing for end users.
               </p>
               <p className="flex text-[17px] text-[#474747] leading-[1.47] font-normal tracking-[-0.016em]">
                 <ChevronRight size={16} className="text-[#0071e3] mt-1 mr-3 flex-shrink-0" />
                 Designed a responsive and intuitive user interface utilizing HTML5, CSS3, and JavaScript.
               </p>
            </div>

            <div className="flex justify-start gap-4 items-center border-t border-[#d2d2d7] pt-8">
              <SecondaryButton href="https://github.com/Arzoomehdi/CropGuard-Java.git" target="_blank" rel="noopener noreferrer">GitHub</SecondaryButton>
              <PrimaryButton href="https://github.com/Arzoomehdi/CropGuard-Java.git" target="_blank" rel="noopener noreferrer">Live Link <ExternalLink size={16} className="ml-2 inline" /></PrimaryButton>
            </div>
          </div>
        </RevealWrapper>
      </Section>

      {/* Experience Section */}
      <Section id="experience" bg="bg-[#ffffff]">
        <RevealWrapper>
          <h2 className="text-[28px] md:text-[40px] font-semibold text-[#1d1d1f] tracking-[-0.011em] text-center mb-16">
            Professional Experience.
          </h2>

          <div className="space-y-16">
            <div className="border-b border-[#d2d2d7] pb-12">
              <div className="flex flex-col md:flex-row justify-between mb-6">
                <div>
                  <h3 className="text-[24px] font-semibold text-[#1d1d1f] tracking-[-0.011em]">SPRINT</h3>
                  <p className="text-[17px] text-[#474747] font-medium tracking-[-0.016em] mt-1">Software Developer Intern</p>
                </div>
                <div className="text-[14px] text-[#707070] tracking-[-0.016em] mt-2 md:mt-0 font-light">
                  Nov 2025 — Feb 2026
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex text-[17px] text-[#1d1d1f] leading-[1.47] font-normal tracking-[-0.016em]">
                  <ChevronRight size={16} className="text-[#0071e3] mt-1 mr-2 flex-shrink-0" />
                  Designed and developed scalable software solutions utilizing core Java and OOP principles.
                </li>
                <li className="flex text-[17px] text-[#1d1d1f] leading-[1.47] font-normal tracking-[-0.016em]">
                  <ChevronRight size={16} className="text-[#0071e3] mt-1 mr-2 flex-shrink-0" />
                  Collaborated with engineering teams to debug code, streamline backend processes, and improve application performance.
                </li>
              </ul>
            </div>

            <div className="pb-4">
              <div className="flex flex-col md:flex-row justify-between mb-6">
                <div>
                  <h3 className="text-[24px] font-semibold text-[#1d1d1f] tracking-[-0.011em]">Bright Code Software Pvt. Ltd.</h3>
                  <p className="text-[17px] text-[#474747] font-medium tracking-[-0.016em] mt-1">Web Development Intern</p>
                </div>
                <div className="text-[14px] text-[#707070] tracking-[-0.016em] mt-2 md:mt-0 font-light">
                  June 2024 — July 2024
                </div>
              </div>
              <ul className="space-y-3">
                <li className="flex text-[17px] text-[#1d1d1f] leading-[1.47] font-normal tracking-[-0.016em]">
                  <ChevronRight size={16} className="text-[#0071e3] mt-1 mr-2 flex-shrink-0" />
                  Assisted in building responsive web layouts and interactive user interfaces utilizing frontend web technologies.
                </li>
                <li className="flex text-[17px] text-[#1d1d1f] leading-[1.47] font-normal tracking-[-0.016em]">
                  <ChevronRight size={16} className="text-[#0071e3] mt-1 mr-2 flex-shrink-0" />
                  Supported the backend team in managing data structures and resolving database queries in MySQL.
                </li>
              </ul>
            </div>
          </div>
        </RevealWrapper>
      </Section>

      {/* Education Section */}
      <Section id="education" bg="bg-[#f5f5f7]">
         <RevealWrapper className="text-center">
            <h2 className="text-[14px] text-[#858585] tracking-[-0.016em] uppercase font-semibold mb-6">Education</h2>
            <h3 className="text-[28px] font-semibold text-[#1d1d1f] tracking-[-0.011em] mb-2">Guru Gobind Singh Educational Society Technical Campus</h3>
            <p className="text-[21px] font-light text-[#474747] tracking-[-0.016em] mb-4">B.Tech in Computer Science and Engineering | CGPA: 6.57</p>
            <p className="text-[17px] text-[#707070] font-normal tracking-[-0.016em]">Bokaro Steel City, Jharkhand • 2022-2026</p>
         </RevealWrapper>
      </Section>

      {/* Footer */}
      <footer className="bg-[#f5f5f7] pt-12 pb-8 border-t border-[#d2d2d7]">
        <div className="max-w-[980px] mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            
            <div>
              <h4 className="text-[12px] font-semibold text-[#1d1d1f] mb-3 tracking-[-0.022em]">Contact</h4>
              <ul className="space-y-2 text-[12px] text-[#707070] font-normal tracking-[-0.022em]">
                <li><a href="mailto:arzoomehdi12345678910@gmail.com" className="hover:text-[#1d1d1f] transition-colors">arzoomehdi12345678910@gmail.com</a></li>
                <li><a href="tel:9113784778" className="hover:text-[#1d1d1f] transition-colors">+91 9113784778</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[12px] font-semibold text-[#1d1d1f] mb-3 tracking-[-0.022em]">Social</h4>
              <ul className="space-y-2 text-[12px] text-[#707070] font-normal tracking-[-0.022em]">
                <li><a href="https://linkedin.com/in/arzoo-mehdi-7ba3012ba" target="_blank" rel="noreferrer" className="hover:text-[#1d1d1f] transition-colors">LinkedIn</a></li>
                <li><a href="https://github.com/Arzoomehdi" target="_blank" rel="noreferrer" className="hover:text-[#1d1d1f] transition-colors">GitHub</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-[12px] font-semibold text-[#1d1d1f] mb-3 tracking-[-0.022em]">Navigation</h4>
              <ul className="space-y-2 text-[12px] text-[#707070] font-normal tracking-[-0.022em]">
                <li><a href="#home" className="hover:text-[#1d1d1f] transition-colors">Home</a></li>
                <li><a href="#projects" className="hover:text-[#1d1d1f] transition-colors">Projects</a></li>
                <li><a href="#experience" className="hover:text-[#1d1d1f] transition-colors">Experience</a></li>
              </ul>
            </div>

             <div>
              <h4 className="text-[12px] font-semibold text-[#1d1d1f] mb-3 tracking-[-0.022em]">Legal</h4>
              <ul className="space-y-2 text-[12px] text-[#707070] font-normal tracking-[-0.022em]">
                <li><span className="cursor-not-allowed">Terms of Use</span></li>
                <li><span className="cursor-not-allowed">Privacy Policy</span></li>
              </ul>
            </div>

          </div>

          <div className="pt-6 border-t border-[#d2d2d7] flex flex-col md:flex-row justify-between items-center text-[12px] text-[#707070] font-normal tracking-[-0.022em]">
            <p>Copyright © 2026 Arzoo Mehdi. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Designed in Bokaro Steel City.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}