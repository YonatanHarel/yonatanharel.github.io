import { useState, useEffect } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 250); // החץ מופיע אחרי 250px גלילה
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <div className="back-to-top" onClick={scrollToTop}>
        {/* ↑ */}
        <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        >
            <path d="M12 19V5" />
            <path d="M5 12l7-7 7 7" />
        </svg>
      </div>
    )
  );
}
