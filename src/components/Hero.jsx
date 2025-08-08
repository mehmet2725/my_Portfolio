import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef(null);
  
  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current.children,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, stagger: 0.2, duration: 1 }
      );
    }
  }, []);
  
  return (
    <section id="anasayfa" className="hero">
      <div className="container">
        <div className="hero-content" ref={heroRef}>
          <h1 className="text-gradient">Merhaba, ben Mehmet</h1>
          <p className="subtitle">Frontend Developer</p>
          <p className="description">
            Öğrenimime ve gelişimime adadığım hayatımı yazılım dünyası ile en iyi biçimde şekillendirmeye çalışıyorum.
          </p>
          <a href="#projeler" className="cta-button">
            Projelerime Göz At
          </a>
        </div>
      </div>
    </section>
  );
}