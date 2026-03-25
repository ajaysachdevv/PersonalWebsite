/* ═══════════════════════════════════════════════
   Ajay Sachdev — Shared JS (Premium v2)
   Loaded on all pages: homepage + project pages
   ═══════════════════════════════════════════════ */

/* ═══ REGISTER PLUGINS ═══ */
gsap.registerPlugin(ScrollTrigger);
if (typeof SplitText !== "undefined") gsap.registerPlugin(SplitText);
if (typeof ScrambleTextPlugin !== "undefined")
  gsap.registerPlugin(ScrambleTextPlugin);
if (typeof CustomEase !== "undefined") gsap.registerPlugin(CustomEase);
if (typeof DrawSVGPlugin !== "undefined") gsap.registerPlugin(DrawSVGPlugin);

/* ═══ CUSTOM EASES ═══ */
if (typeof CustomEase !== "undefined") {
  CustomEase.create("smooth", "M0,0 C0.25,0.1 0.25,1 1,1");
  CustomEase.create("snap", "M0,0 C0.5,0 0,1 1,1");
}
const EASE = typeof CustomEase !== "undefined" ? "smooth" : "power3.out";

const reducedMotion = matchMedia("(prefers-reduced-motion:reduce)").matches;

/* ═══ LENIS ═══ */
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});
gsap.ticker.add((t) => lenis.raf(t * 1000));
gsap.ticker.lagSmoothing(0);
lenis.stop();

/* ═══ PRELOADER ═══ */
const isProjectPage = document.body.classList.contains("project-page");
const preNum = document.getElementById("preNum"),
  preFill = document.getElementById("preFill");

const isGalleryPage = document.body.classList.contains("gallery-page");

if (isGalleryPage) {
  /* Dennis-style preloader: word cycling + curved screen lift */
  const loader = document.getElementById("loader");
  const loaderScreen = document.getElementById("loaderScreen");
  const words = document.querySelectorAll(".loader-word");

  if (loader && loaderScreen && words.length) {
    const preTl = gsap.timeline({
      onComplete: () => {
        gsap.set(loader, { display: "none" });
        lenis.start();
        if (typeof pageReveal === "function") pageReveal();
      },
    });

    /* Word cycling: flash each word, building energy */
    words.forEach((w, i) => {
      const dur = 0.18 - i * 0.01; /* accelerate: 180ms → 120ms */
      preTl
        .set(w, { opacity: 1 }, i * dur + 0.1)
        .set(w, { opacity: 0 }, (i + 1) * dur + 0.1);
    });
    /* Brief hold on last word */
    preTl.to({}, { duration: 0.3 });
    /* Curved screen lifts up with drama */
    preTl.to(loaderScreen, {
      yPercent: -130,
      duration: 0.9,
      ease: "power4.inOut",
    });
  } else {
    lenis.start();
    if (typeof pageReveal === "function") pageReveal();
  }
} else if (isProjectPage) {
  const preTl = gsap.timeline({
    onComplete: () => {
      lenis.start();
      if (typeof pageReveal === "function") pageReveal();
    },
  });
  preTl
    .set("#pre", { display: "none" })
    .to("#prePanels .pre-panel", {
      yPercent: -100,
      duration: 0.5,
      ease: "power4.inOut",
      stagger: 0.04,
    })
    .set("#prePanels", { display: "none" });
} else if (preNum && preFill) {
  const preTl = gsap.timeline({
    onComplete: () => {
      lenis.start();
      if (typeof heroReveal === "function") heroReveal();
    },
  });
  let cObj = { v: 0 };
  preTl
    .to(cObj, {
      v: 100,
      duration: 1.6,
      ease: "power2.inOut",
      onUpdate: () => {
        preNum.textContent = Math.round(cObj.v);
        preFill.style.width = cObj.v + "%";
      },
    })
    .to("#preNum", { opacity: 0, scale: 0.8, duration: 0.25 })
    .to("#preFill", { opacity: 0, duration: 0.15 }, "<")
    .to("#pre", { opacity: 0, duration: 0.01 })
    .set("#pre", { display: "none" })
    .to(
      "#prePanels .pre-panel",
      { yPercent: -100, duration: 0.65, ease: "power4.inOut", stagger: 0.05 },
      "-=.25",
    )
    .set("#prePanels", { display: "none" });
} else {
  lenis.start();
  if (typeof heroReveal === "function") heroReveal();
  if (typeof pageReveal === "function") pageReveal();
}

/* ═══ SPLITTEXT — PRE-SPLIT HEADINGS ═══ */
if (!reducedMotion && typeof SplitText !== "undefined") {
  /* Section headings — char reveal on scroll */
  gsap.utils.toArray(".s-heading").forEach((el) => {
    const split = new SplitText(el, { type: "chars,words", mask: true });
    gsap.set(split.chars, { yPercent: 100 });
    ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to(split.chars, {
          yPercent: 0,
          stagger: 0.03,
          duration: 0.8,
          ease: EASE,
        });
      },
    });
  });

  /* Project title — animated by pageReveal() */
  const projTitleEl = document.querySelector(".proj-title");
  if (projTitleEl) {
    window._projTitleSplit = new SplitText(projTitleEl, {
      type: "chars,words",
      mask: true,
    });
    gsap.set(window._projTitleSplit.chars, { yPercent: 100 });
  }

  /* Footer heading */
  const footerH = document.getElementById("footerH");
  if (footerH) {
    const fSplit = new SplitText(footerH, { type: "chars,words", mask: true });
    gsap.set(footerH, { visibility: "visible" });
    gsap.set(fSplit.chars, { yPercent: 100 });
    ScrollTrigger.create({
      trigger: footerH,
      start: "top 80%",
      once: true,
      onEnter: () => {
        gsap.to(fSplit.chars, {
          yPercent: 0,
          stagger: 0.03,
          duration: 0.8,
          ease: EASE,
        });
      },
    });
  }
} else {
  /* Fallback: simple fade for footer */
  const footerH = document.getElementById("footerH");
  if (footerH && !reducedMotion) {
    gsap.set(footerH, { visibility: "visible" });
    ScrollTrigger.create({
      trigger: footerH,
      start: "top 80%",
      once: true,
      onEnter: () => {
        gsap.from(footerH, {
          opacity: 0,
          y: 40,
          scale: 0.95,
          duration: 0.8,
          ease: "power3.out",
        });
      },
    });
  }
}

/* ═══ SCRAMBLETEXT — SECTION LABELS ═══ */
if (!reducedMotion && typeof ScrambleTextPlugin !== "undefined") {
  gsap.utils.toArray(".s-label").forEach((el) => {
    const original = el.textContent;
    gsap.set(el, { autoAlpha: 0 });
    ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.set(el, { autoAlpha: 1 });
        gsap.to(el, {
          duration: 1.2,
          scrambleText: { text: original, chars: "01/█▓░!@#AXYZ", speed: 0.3 },
        });
      },
    });
  });
}

/* ═══ COUNTERS ═══ */
function animateCounters(sel) {
  document.querySelectorAll((sel || "") + "[data-target]").forEach((el) => {
    const target = parseInt(el.dataset.target),
      suffix = el.dataset.suffix || "";
    const o = { v: 0 };
    gsap.to(o, {
      v: target,
      duration: 1.8,
      ease: "power2.out",
      snap: { v: 1 },
      onUpdate: () => {
        el.textContent = o.v.toLocaleString() + suffix;
      },
      scrollTrigger: el.closest(".hero,.proj-hero")
        ? null
        : { trigger: el, start: "top 85%", once: true },
    });
  });
}

/* ═══ NAV ═══ */
ScrollTrigger.create({
  start: 80,
  onToggle: (s) => {
    const n = document.getElementById("nav");
    if (n) n.classList.toggle("solid", s.isActive);
  },
});

/* ═══ PROGRESS ═══ */
const progBar = document.getElementById("progBar");
if (progBar) {
  gsap.to(progBar, {
    scaleX: 1,
    ease: "none",
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      scrub: true,
    },
  });
}

/* ═══ SCROLL REVEALS ═══ */
if (!reducedMotion) {
  /* Fade-up reveals — s-heading and s-label handled by SplitText/ScrambleText above */
  const revealSelector =
    typeof SplitText !== "undefined"
      ? ".s-sub,.pcard,.bento-cell,.feature-card,.tech-item,.proj-prose,.mockup,.hero-proof,.before-after,.daily-schedule,.screenshot-gallery"
      : ".s-label,.s-heading,.s-sub,.pcard,.bento-cell,.feature-card,.tech-item,.proj-prose,.mockup,.hero-proof,.before-after,.daily-schedule,.screenshot-gallery";
  gsap.utils.toArray(revealSelector).forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: EASE,
      scrollTrigger: { trigger: el, start: "top 85%", once: true },
    });
  });
}

/* ═══ ABOUT GROUP REVEALS (homepage) ═══ */
const aboutGrid = document.querySelector(".about-grid");
if (aboutGrid && !reducedMotion) {
  gsap.from(".about-group", {
    opacity: 0,
    y: 30,
    scale: 0.97,
    duration: 0.7,
    ease: "power3.out",
    stagger: { amount: 0.5, from: "start" },
    scrollTrigger: { trigger: ".about-grid", start: "top 80%", once: true },
  });
  gsap.utils.toArray(".about-group").forEach((g) => {
    gsap.fromTo(
      g,
      { scale: 0.95, opacity: 0.7 },
      {
        scale: 1,
        opacity: 1,
        ease: "none",
        scrollTrigger: {
          trigger: g,
          start: "top 85%",
          end: "top 40%",
          scrub: 1.2,
        },
      },
    );
  });
}

/* ═══ PROJECT METRIC COUNTERS ═══ */
document.querySelectorAll(".p-mv[data-target]").forEach((el) => {
  const target = parseInt(el.dataset.target),
    suffix = el.dataset.suffix || "";
  ScrollTrigger.create({
    trigger: el,
    start: "top 85%",
    once: true,
    onEnter: () => {
      const o = { v: 0 };
      gsap.to(o, {
        v: target,
        duration: 1.6,
        ease: EASE,
        snap: { v: 1 },
        onUpdate: () => {
          el.textContent = o.v.toLocaleString() + suffix;
        },
      });
    },
  });
});

/* ═══ SPOTLIGHT TRACKING ═══ */
document
  .querySelectorAll(".bento-cell,.about-group,.feature-card")
  .forEach((cell) => {
    const spot = cell.querySelector(".bento-spot");
    if (!spot) return;
    cell.addEventListener("mousemove", (e) => {
      const r = cell.getBoundingClientRect();
      spot.style.left = e.clientX - r.left + "px";
      spot.style.top = e.clientY - r.top + "px";
    });
  });

/* ═══ MOUSE-FOLLOWER CURSOR ═══ */
if (matchMedia("(pointer:fine)").matches) {
  if (typeof MouseFollower !== "undefined") {
    MouseFollower.registerGSAP(gsap);
    const cursor = new MouseFollower({
      speed: 0.55,
      ease: "expo.out",
      skewing: 3,
      skewingText: 2,
      skewingIcon: 2,
      skewingMedia: 1.5,
      stateDetection: {
        "-pointer": "a,button,.magnetic",
        "-hidden": "canvas",
      },
    });

    /* Project cards: "View" label */
    document.querySelectorAll(".pcard,.other-card,.v5-work-entry,.cs-other-entry").forEach((el) => {
      el.dataset.cursor = "-text";
      el.dataset.cursorText = "View";
    });

    /* Images and complex components: expand cursor */
    document.querySelectorAll(".project-img,.cs-img-wrap img,.term-viewport,.browser-viewport,.un-phone,.un-browser,.v5-entry-img-wrap").forEach((el) => {
      el.dataset.cursor = "-inverse";
      el.dataset.cursorText = "View";
    });

    /* Hide old cursor elements */
    const cDot = document.getElementById("cDot"),
      cRing = document.getElementById("cRing");
    if (cDot) cDot.style.display = "none";
    if (cRing) cRing.style.display = "none";
    document.body.style.cursor = "";
    document.querySelectorAll("a,button").forEach((el) => {
      el.style.cursor = "";
    });
  } else {
    /* Fallback: original dot+ring cursor */
    const dot = document.getElementById("cDot"),
      ring = document.getElementById("cRing");
    if (dot && ring) {
      let mx = 0,
        my = 0,
        dx = 0,
        dy = 0;
      document.addEventListener("mousemove", (e) => {
        mx = e.clientX;
        my = e.clientY;
      });
      gsap.ticker.add(() => {
        dot.style.left = mx + "px";
        dot.style.top = my + "px";
        dx += (mx - dx) * 0.12;
        dy += (my - dy) * 0.12;
        ring.style.left = dx + "px";
        ring.style.top = dy + "px";
      });
      document
        .querySelectorAll(
          "a,button,[data-tilt],.bento-cell,.about-group,.feature-card,.other-card,.tech-item",
        )
        .forEach((el) => {
          el.addEventListener("mouseenter", () => {
            dot.classList.add("h");
            ring.classList.add("h");
          });
          el.addEventListener("mouseleave", () => {
            dot.classList.remove("h");
            ring.classList.remove("h");
          });
        });
      document.body.style.cursor = "none";
      document
        .querySelectorAll("a,button")
        .forEach((el) => (el.style.cursor = "none"));
    }
  }
}

/* ═══ MAGNETIC BUTTONS ═══ */
if (matchMedia("(pointer:fine)").matches) {
  document.querySelectorAll(".magnetic").forEach((btn) => {
    const str = parseInt(btn.dataset.strength) || 30;
    btn.addEventListener("mousemove", (e) => {
      const r = btn.getBoundingClientRect(),
        cx = r.left + r.width / 2,
        cy = r.top + r.height / 2;
      const ddx = ((e.clientX - cx) / r.width) * str,
        dy = ((e.clientY - cy) / r.height) * str;
      gsap.to(btn, { x: ddx, y: dy, duration: 0.3, ease: "power2.out" });
      const inner = btn.querySelector("span");
      if (inner)
        gsap.to(inner, {
          x: ddx * 0.3,
          y: dy * 0.3,
          duration: 0.3,
          ease: "power2.out",
        });
    });
    btn.addEventListener("mouseleave", () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1,.5)" });
      const inner = btn.querySelector("span");
      if (inner)
        gsap.to(inner, {
          x: 0,
          y: 0,
          duration: 0.6,
          ease: "elastic.out(1,.5)",
        });
    });
  });
}

/* ═══ SMOOTH ANCHORS ═══ */
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    const t = document.querySelector(a.getAttribute("href"));
    if (t) lenis.scrollTo(t, { offset: -20 });
  });
});

/* ═══ PIPELINE DIAGRAMS ═══ */
document.querySelectorAll(".pipeline-svg").forEach((svg) => {
  const stages = svg.querySelectorAll(".stage-group");
  const connectors = svg.querySelectorAll(".connector");
  const verts = svg.querySelectorAll(".connector-vert");
  const allLines = [...connectors, ...verts];

  if (typeof DrawSVGPlugin !== "undefined" && !reducedMotion) {
    /* Premium: DrawSVG line animation */
    gsap.set(allLines, { drawSVG: "0%" });
    gsap.set(stages, { opacity: 0 });
    ScrollTrigger.create({
      trigger: svg,
      start: "top 80%",
      once: true,
      onEnter: () => {
        gsap.to(stages, {
          opacity: 1,
          duration: 0.4,
          stagger: 0.08,
          ease: EASE,
        });
        gsap.to(allLines, {
          drawSVG: "100%",
          duration: 0.8,
          stagger: 0.08,
          delay: 0.15,
          ease: "power2.inOut",
        });
      },
    });
  } else if (!reducedMotion) {
    /* Fallback: strokeDashoffset */
    ScrollTrigger.create({
      trigger: svg,
      start: "top 80%",
      once: true,
      onEnter: () => {
        gsap.to(stages, {
          opacity: 1,
          duration: 0.4,
          stagger: 0.08,
          ease: "power2.out",
        });
        gsap.to(allLines, {
          strokeDashoffset: 0,
          duration: 0.6,
          stagger: 0.06,
          delay: 0.2,
          ease: "power2.inOut",
        });
      },
    });
  }
});

/* ═══ SPOTLIGHT + TILT (project cards) ═══ */
if (matchMedia("(pointer:fine)").matches) {
  document.querySelectorAll("[data-tilt]").forEach((card) => {
    const inner = card.querySelector(".pcard-inner");
    card.addEventListener("mousemove", (e) => {
      const r = card.getBoundingClientRect(),
        x = (e.clientX - r.left) / r.width,
        y = (e.clientY - r.top) / r.height;
      inner.style.setProperty("--x", x * 100 + "%");
      inner.style.setProperty("--y", y * 100 + "%");
      const rotY = (x - 0.5) * 8,
        rotX = (y - 0.5) * -8;
      gsap.to(inner, {
        rotateX: rotX,
        rotateY: rotY,
        duration: 0.4,
        ease: "power2.out",
      });
    });
    card.addEventListener("mouseleave", () => {
      gsap.to(inner, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.6,
        ease: "elastic.out(1,0.4)",
      });
    });
  });
}

/* ═══ OTHER PROJECT CARDS ═══ */
document.querySelectorAll(".other-card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const r = card.getBoundingClientRect();
    const inner = card.querySelector(".other-card-inner");
    if (inner) {
      inner.style.setProperty(
        "--x",
        ((e.clientX - r.left) / r.width) * 100 + "%",
      );
      inner.style.setProperty(
        "--y",
        ((e.clientY - r.top) / r.height) * 100 + "%",
      );
    }
  });
});

/* ═══ CONSTELLATION CANVAS (project pages) ═══ */
(function () {
  const canvas = document.getElementById("heroCanvas");
  if (!canvas || reducedMotion) return;
  if (document.getElementById("hero")) return;
  const heroEl = canvas.closest(".proj-hero");
  if (!heroEl) return;
  const ctx = canvas.getContext("2d");
  let w,
    h,
    mouseX = 0,
    mouseY = 0,
    particles = [];
  const COUNT = 50,
    CONNECT_DIST = 110;
  function resize() {
    const r = heroEl.getBoundingClientRect();
    w = canvas.width = r.width;
    h = canvas.height = r.height;
  }
  resize();
  window.addEventListener("resize", resize);
  for (let i = 0; i < COUNT; i++) {
    particles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: 1 + Math.random() * 1.5,
    });
  }
  heroEl.addEventListener("mousemove", (e) => {
    const r = heroEl.getBoundingClientRect();
    mouseX = e.clientX - r.left;
    mouseY = e.clientY - r.top;
  });
  function draw() {
    ctx.clearRect(0, 0, w, h);
    for (let i = 0; i < COUNT; i++) {
      const p = particles[i];
      const dx = p.x - mouseX,
        dy = p.y - mouseY,
        dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 150 && dist > 0) {
        const f = 0.6 / dist;
        p.vx += dx * f;
        p.vy += dy * f;
      }
      p.x += p.vx;
      p.y += p.vy;
      p.vx *= 0.99;
      p.vy *= 0.99;
      if (p.x < 0) p.x = w;
      if (p.x > w) p.x = 0;
      if (p.y < 0) p.y = h;
      if (p.y > h) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(139,92,246,0.35)";
      ctx.fill();
      for (let j = i + 1; j < COUNT; j++) {
        const q = particles[j],
          ddx = p.x - q.x,
          ddy = p.y - q.y,
          d = Math.sqrt(ddx * ddx + ddy * ddy);
        if (d < CONNECT_DIST) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = `rgba(139,92,246,${0.12 * (1 - d / CONNECT_DIST)})`;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
})();

/* ═══ PARALLAX LAYERS (project pages) ═══ */
if (matchMedia("(pointer:fine)").matches) {
  const projHero = document.querySelector(".proj-hero");
  const plLayers = projHero ? projHero.querySelectorAll(".parallax-layer") : [];
  if (projHero && plLayers.length) {
    const targets = Array.from(plLayers).map(() => ({ x: 0, y: 0 }));
    const current = Array.from(plLayers).map(() => ({ x: 0, y: 0 }));
    document.addEventListener("mousemove", (e) => {
      const rect = projHero.getBoundingClientRect();
      const cx = rect.left + rect.width / 2,
        cy = rect.top + rect.height / 2;
      const mx = e.clientX - cx,
        my = e.clientY - cy;
      plLayers.forEach((l, i) => {
        const d = parseFloat(l.dataset.depth);
        targets[i].x = mx * d * 0.03;
        targets[i].y = my * d * 0.03;
      });
    });
    gsap.ticker.add(() => {
      plLayers.forEach((l, i) => {
        current[i].x += (targets[i].x - current[i].x) * 0.06;
        current[i].y += (targets[i].y - current[i].y) * 0.06;
        l.style.transform = `translate(${current[i].x}px,${current[i].y}px)`;
      });
    });
  }
}

/* ═══ REDUCED MOTION ═══ */
if (reducedMotion) {
  ScrollTrigger.getAll().forEach((st) => st.kill());
  gsap.globalTimeline.clear();
  gsap.set(
    ".hero-tag,.hero-title-wrap,.hero-desc,.hero-numbers,.hero-btns,.scroll-cue,#footerH,.proj-hero *,.s-label,.s-heading,.s-sub",
    { visibility: "visible", opacity: 1, y: 0 },
  );
  document
    .querySelectorAll(".pipeline-svg .stage-group")
    .forEach((g) => (g.style.opacity = "1"));
  document
    .querySelectorAll(".pipeline-svg .connector,.pipeline-svg .connector-vert")
    .forEach((l) => (l.style.strokeDashoffset = "0"));
}
