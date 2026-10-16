/* Site nav, option C (motion pass, 12/10/2026).
   Full ledger bar at the top of the page; once scrolled past --nav-squeeze-at it squeezes
   into a black notch holding the monogram. Fine pointers open the notch on hover, touch
   opens it on tap, keyboard focus opens it, Escape closes it. Scrolling up opens it too (the
   same open notch, not the full bar) and scrolling down closes it again (Ajay, 14/10/2026). Never touches scrolling or
   anchor clicks, and never assumes Lenis. Phones (16/10/2026): scrolling down tucks the
   notch away entirely so it never sits over the text; scrolling up brings back the monogram only, closed. Loaded with defer, so it runs before the
   home page's DOMContentLoaded handler binds its anchor links. */
(() => {
  const nav = document.querySelector(".site-nav");
  if (!nav) return;
  const bar = nav.querySelector(".nav-bar");
  const links = Array.from(bar.querySelectorAll(".nav-links a"));
  const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const phone = window.matchMedia("(max-width: 720px)");
  const at =
    parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue(
        "--nav-squeeze-at",
      ),
    ) || 60;

  const notch = document.createElement("div");
  notch.className = "nav-notch";
  const side = (cls, list) => {
    const s = document.createElement("div");
    s.className = "side " + cls;
    /* every link goes in the notch, including the ones the narrow bar hides (About) */
    list.forEach((a) => {
      const c = a.cloneNode(true);
      c.classList.remove("nav-hide-sm");
      s.appendChild(c);
    });
    return s;
  };
  const half = Math.ceil(links.length / 2);
  const mono = document.createElement("button");
  mono.type = "button";
  mono.className = "nav-mono";
  mono.setAttribute("aria-expanded", "false");
  mono.setAttribute("aria-label", "Menu");
  mono.innerHTML = "A<em>.</em>S";
  notch.append(
    side("l", links.slice(0, half)),
    mono,
    side("r", links.slice(half)),
  );
  nav.appendChild(notch);

  let squeezed = false;
  let pinned = false;
  const setOpen = (open) => {
    notch.classList.toggle("is-open", open);
    mono.setAttribute("aria-expanded", open ? "true" : "false");
  };
  const close = () => {
    pinned = false;
    setOpen(false);
  };
  /* scroll direction: a short run one way (DIR_PX) flips it, so jitter and inertia tails do nothing */
  const DIR_PX = 12;
  let lastY = window.scrollY;
  let run = 0;
  const held = () =>
    pinned ||
    notch.contains(document.activeElement) ||
    (fine && notch.matches(":hover"));
  const direction = () => {
    const y = window.scrollY;
    const d = y - lastY;
    lastY = y;
    if (!squeezed || !d) return;
    run = Math.sign(d) === Math.sign(run) ? run + d : d;
    if (run <= -DIR_PX) {
      nav.classList.remove("is-tucked");
      /* phones come back as the monogram only; a tap opens it (Ajay 16/10/2026) */
      if (!phone.matches && !notch.classList.contains("is-open")) setOpen(true);
    } else if (run >= DIR_PX && !held()) {
      if (notch.classList.contains("is-open")) setOpen(false);
      if (phone.matches) nav.classList.add("is-tucked");
    }
  };

  const update = () => {
    const s = window.scrollY > at;
    if (s === squeezed) return;
    squeezed = s;
    nav.classList.toggle("is-squeezed", s);
    if (!s) {
      close();
      nav.classList.remove("is-tucked");
    }
  };
  let ticking = false;
  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        update();
        direction();
      });
    },
    { passive: true },
  );
  update();

  if (fine) {
    notch.addEventListener("pointerenter", () => setOpen(true));
    notch.addEventListener("pointerleave", () => {
      if (!pinned && !notch.contains(document.activeElement)) setOpen(false);
    });
  }
  mono.addEventListener("click", () => {
    pinned = !notch.classList.contains("is-open") || !pinned;
    setOpen(pinned);
  });
  notch.addEventListener("focusin", () => {
    nav.classList.remove("is-tucked");
    setOpen(true);
  });
  /* tucking is phone-only: widening past 720px (rotation) brings the notch back */
  phone.addEventListener("change", () => {
    if (!phone.matches) nav.classList.remove("is-tucked");
  });
  notch.addEventListener("focusout", (e) => {
    if (!notch.contains(e.relatedTarget) && !pinned) setOpen(false);
  });
  notch.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && notch.classList.contains("is-open")) {
      close();
      mono.focus();
    }
  });
  /* pointerdown, not click: iOS sends no click for taps on non-interactive page areas */
  document.addEventListener("pointerdown", (e) => {
    if (!notch.contains(e.target) && notch.classList.contains("is-open"))
      close();
  });
})();
