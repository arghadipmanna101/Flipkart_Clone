const r = "nightowl-color-scheme", i = "light", o = "dark";
let n = null, t = i;
try {
  n = localStorage;
} catch {
}
function a() {
  const e = document.createElement("style");
  e.innerHTML = `
    /* Prevent inconsistencies for positioning */
    .nightowl-light body{
        filter: invert(0%);
    }
    
    .nightowl-dark {
    /* Firefox fallback. */
    background-color: #111;
    }

    .nightowl-dark body {
        filter: invert(100%) hue-rotate(180deg);
    }

    /* Do not invert media (revert the invert). */
    .nightowl-dark img, .nightowl-dark video, .nightowl-dark iframe, .nightowl-dark .nightowl-daylight {
        filter: invert(100%) hue-rotate(180deg);
    }

    /* Improve contrast on icons. */
    .nightowl-dark .icon {
        filter: invert(15%) hue-rotate(180deg);
    }

    /* Re-enable code block backgrounds. */
     .nightowl-dark pre {
        filter: invert(6%);
    }

    /* Improve contrast on list item markers. */
    .nightowl-dark li::marker {
        color: #666;
    }
    `, document.head.appendChild(e);
}
window.addEventListener("load", () => {
  a(), f(), m();
});
function h() {
  t = o;
  const e = document.querySelector("html");
  e && (e.classList.remove("nightowl-light"), e.classList.add("nightowl-dark"));
}
function g() {
  t = i;
  const e = document.querySelector("html");
  e && (e.classList.remove("nightowl-dark"), e.classList.add("nightowl-light"));
}
function w() {
  t = t === o ? i : o, s();
}
function s() {
  t === o ? h() : g(), c();
}
function c() {
  const e = document.getElementById("nightowl-switcher-default");
  if (e) {
    const l = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 25px; height:25px;">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
</svg>`, d = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" style="width: 25px; height:25px;">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
</svg>`;
    e.innerHTML = t === o ? d : l;
  }
}
function m() {
  const e = document.createElement("div");
  console.log(window.innerWidth), e.id = "nightowl-switcher-default", e.style.position = "fixed", e.style.left = "calc(100vw - 70px)", e.style.top = "calc(10px)", e.style.width = "50px", e.style.height = "50px", e.style.borderRadius = "50%", e.style.backgroundColor = "white", e.style.display = "flex", e.style.justifyContent = "center", e.style.alignItems = "center", e.style.cursor = "pointer", e.style.zIndex = "9999", e.style.boxShadow = "0 0 10px rgba(0,0,0,0.2)", e.style.transition = "all 0.3s ease-in-out", e.style.overflow = "hidden", e.style.color = "black", e.addEventListener("click", () => {
    w(), k();
  }), document.body.appendChild(e), c();
}
function u() {
  let e = null;
  try {
    n && (e = n.getItem(r));
  } catch {
  }
  console.log("storage", e), e && [o, i].includes(e) ? t = e : y() && (t = o);
}
function f() {
  u(), s();
}
function k() {
  if (t !== null)
    try {
      n && n.setItem(r, t);
    } catch {
    }
}
function y() {
  return window.matchMedia && (window.matchMedia("(prefers-color-scheme: dark)").matches || window.matchMedia("(prefers-color-scheme:dark)").matches);
}