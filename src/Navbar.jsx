import { useEffect } from "react";

function Navbar({ handleScroll }) {
  useEffect(() => {
    const sections = document.querySelectorAll(".content-item");
    const navlinks = document.querySelectorAll(".nav-link");

    const highlightActiveSection = () => {
      let closestSection = null;
      let minDistance = Infinity;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top); 

        if (distance < minDistance) {
          minDistance = distance;
          closestSection = section;
        }
      });

      if (closestSection) {
        const activeLink = document.querySelector(
          `.nav-link[data-section="${closestSection.id}"]`
        );
        navlinks.forEach((nav) => nav.classList.remove("active"));
        activeLink?.classList.add("active");
      }
    };

    window.addEventListener("scroll", highlightActiveSection);
    highlightActiveSection();

    return () => window.removeEventListener("scroll", highlightActiveSection);
  }, []);

  return (
    <nav>
      <h3>
        <a
          href="#content-container"
          className="nav-link"
          data-section="about-me-section"
        >
          <span id="index-one">01</span> About Me
        </a>
      </h3>
      <h3>
        <a
          href="#project-section"
          className="nav-link"
          onClick={(e) => handleScroll(e, "project-section")}
          data-section="project-section"
        >
          <span>02 Projects</span>
        </a>
      </h3>
      <h3>
        <a
          href="#contact-item-container"
          className="nav-link"
          onClick={(e) => handleScroll(e, "contact-item-container")}
          data-section="contact-item-container"
        >
          <span>03 Contact</span>
        </a>
      </h3>
      <h3>
        <a
          href="#faq-section"
          className="nav-link"
          onClick={(e) => handleScroll(e, "faq-section")}
          data-section="faq-section"
        >
          <span>04 FAQ</span>
        </a>
      </h3>
    </nav>
  );
}
export default Navbar;
