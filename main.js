// Sticky nav style on scroll
const nav = document.getElementById("nav");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 20);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Mobile menu
document.getElementById("navToggle").addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll("#navLinks a").forEach((a) =>
  a.addEventListener("click", () => nav.classList.remove("open"))
);

// Reveal on scroll + count-up stats
const countUp = (el) => {
  const target = Number(el.dataset.count);
  const start = performance.now();
  const tick = (now) => {
    const p = Math.min((now - start) / 1400, 1);
    el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
};

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add("in");
      e.target.querySelectorAll("[data-count]").forEach(countUp);
      io.unobserve(e.target);
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el, i) => {
  el.style.transitionDelay = `${(i % 3) * 80}ms`;
  io.observe(el);
});

// Lead form -> WhatsApp
document.getElementById("leadForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const f = new FormData(e.target);
  const text =
    `Hi Fitness Plus! I'd like a free consultation.\n` +
    `Name: ${f.get("name")}\nPhone: ${f.get("phone")}\n` +
    `Interested in: ${f.get("service")}\n${f.get("message") || ""}`;
  window.open(`https://wa.me/8801748928540?text=${encodeURIComponent(text)}`, "_blank");
});

document.getElementById("year").textContent = new Date().getFullYear();
