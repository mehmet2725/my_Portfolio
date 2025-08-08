import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Projects() {
  const projects = [
    {
      title: "İleri Seviye İşletme Yönetim Sistemi",
      desc: "Bir işletme için tüm yönetim araçlarını içeren masaüstü uygulaması. C# WinForms teknolojisiyle geliştirilmiş, MySQL veritabanı kullanıyor.",
      tech: "C#, MySQL",
      github: "https://github.com/mehmet2725/ileri-seviye-isletme-yonetim-sistemi",
      site: null,
    },
    {
      title: "Gelişmiş Ürün Listeleme Platformu",
      desc: "API’den ürünleri alan, kategori filtreleme ve tema sunan modern React projesi. useEffect kullanımıyla tasarlanmış listeleme uygulaması.",
      tech: "React, DummyJson",
      github: "https://github.com/mehmet2725/Login-Register-Page-Product-List",
      site: "https://login-register-page-product-list.vercel.app",
    },
    {
      title: "Kullanıcı Dostu React ToDo App",
      desc: "Görev ekleme, tamamlama ve silme içeren React tabanlı ToDo uygulaması. Light/Dark tema destekli kullanıcı dostu modern Projem.",
      tech: "React",
      github: "https://github.com/mehmet2725/todo_react",
      site: "https://todo-react-phi-steel.vercel.app/",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <section id="projeler" className="projects">
      <div className="container">
        <h2 className="text-gradient" data-aos="fade-up">Projelerim</h2>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <div
              key={i}
              className="project-card"
              data-aos="fade-up"
              data-aos-delay={i * 150}
            >
              <h3>{p.title}</h3>
              <p className="description">{p.desc}</p>
              <span className="tech">{p.tech}</span>
              <div className="project-buttons">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link github"
                >
                  GitHub
                </a>
                {p.site && (
                  <a
                    href={p.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link site"
                  >
                    Canlı Site
                  </a>
                )}
              </div>
            </div>

          ))}

        </div>
      </div>
      <br />
      <p>Daha Fazla Proje İçin <a
        href="https://github.com/mehmet2725"
        target="_blank"
        rel="noopener noreferrer"
        className="project-link github"
      > Github </a></p>
    </section>
  );
}
