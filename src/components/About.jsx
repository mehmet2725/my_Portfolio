import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGitAlt,
} from "react-icons/fa";
import { SiMysql } from "react-icons/si";

export default function About() {
  const para1Ref = useRef(null);
  const para2Ref = useRef(null);
  const iconsRef = useRef([]);

  const tech = [
    { icon: <FaHtml5 />, label: "HTML5", color: "text-orange-500" },
    { icon: <FaCss3Alt />, label: "CSS3", color: "text-blue-500" },
    { icon: <FaBootstrap />, label: "Bootstrap", color: "text-purple-500" },
    { icon: <FaJs />, label: "JavaScript", color: "text-yellow-400" },
    { icon: <FaReact />, label: "React", color: "text-cyan-400" },
    { icon: <FaGitAlt />, label: "Git & GitHub", color: "text-red-500" },
    { icon: "C#", label: "C#", color: "text-blue-700" }, // C# icon yok, yazı olarak bıraktık
    { icon: <SiMysql />, label: "MySQL", color: "text-teal-500" },
  ];

  useEffect(() => {
    const typingAnimation = (element, text, delay = 0) => {
      element.innerHTML = "";
      const chars = text.split("");
      chars.forEach((char) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.style.opacity = "0";
        element.appendChild(span);
      });

      return gsap.to(element.querySelectorAll("span"), {
        opacity: 1,
        stagger: 0.01,
        delay: delay,
        duration: 0.1,
        ease: "power1.inOut",
      });
    };

    const text1 =
      "Yazılım geliştirme alanında kendimi sürekli geliştiren bir Frontend Developer'ım. Web teknolojilerine olan tutkum ve öğrenme azmimle modern web uygulamaları geliştiriyorum. Özellikle kullanıcı deneyimi odaklı, responsive ve performanslı web siteleri yaratmaya odaklanıyorum.";
    const text2 =
      "HTML5, CSS3 ve JavaScript temellerinden başlayarak React ekosisteminde uzmanlaşmaya devam ediyorum. Her projede yeni şeyler öğrenmeyi ve en iyi pratikleri uygulamayı hedefliyorum.";

    const tl = gsap.timeline();
    tl.add(typingAnimation(para1Ref.current, text1, 0))
      .add(typingAnimation(para2Ref.current, text2, 0.5))
      .add(
        gsap.fromTo(
          iconsRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.1,
            ease: "back.out(1.7)",
          }
        ),
        "+=0.1"
      );
  }, []);

  return (
    <section id="hakkimda" className="about">
      <div className="container">
        <h2 className="text-gradient">Hakkımda</h2>

        <img
          src="/profile.jpg"
          alt="Mehmet Sönmez"
          className="profile-image"
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />

        <p className="about-description" ref={para1Ref}></p>
        <p className="about-description" ref={para2Ref}></p>

        <div className="tech-grid">
          {tech.map((t, i) => (
            <div
              key={i}
              className="tech-item group transition-transform duration-300 hover:scale-110"
              ref={(el) => (iconsRef.current[i] = el)}
            >
              <div className={`icon text-4xl ${t.color} transition duration-300 group-hover:scale-110`}>
                {typeof t.icon === "string" ? <span>{t.icon}</span> : t.icon}
              </div>
              <span className="label mt-2 block text-sm">{t.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}