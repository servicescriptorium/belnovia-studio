/* Belnovia Studio Pro website: language, prices, screenshots, legal pages. No dependencies. */

/* ---- Owner settings -------------------------------------------------------
   Checkout links. Leave empty ("") to send buyers to the download section
   (purchase then happens inside the app after the free trial).
   tr   = Shopier product link for customers in Türkiye (optional; buying inside the app is better:
          the licence is then tied to the buyer's account automatically)
   intl = Paddle checkout link for everyone else                               */
var CHECKOUT = { tr: "", intl: "" };
var DOWNLOAD_URL = "https://github.com/servicescriptorium/belnovia-studio-pro/releases/latest/download/BelnoviaStudioPro-Setup.exe";
/* -------------------------------------------------------------------------- */

(function () {
  "use strict";
  var LANGS = [
    ["tr", "Türkçe"], ["en", "English"], ["de", "Deutsch"],
    ["es", "Español"], ["fr", "Français"], ["pt", "Português"]
  ];
  var DICT = window.I18N || {};
  var PRICES = { creatorMonthly: "", creatorYearly: "", proMonthly: "", proYearly: "", yearlyNote: "", trialDays: 7, trialVideos: 3, currencyNote: "" };
  var lang = "tr";

  function store(k, v) {
    try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; }
  }

  function pickLang() {
    var q = new URLSearchParams(location.search).get("lang");
    if (q && DICT[q]) return q;
    var saved = store("bs-lang");
    if (saved && DICT[saved]) return saved;
    var list = navigator.languages || [navigator.language || ""];
    for (var i = 0; i < list.length; i++) {
      var code = String(list[i] || "").slice(0, 2).toLowerCase();
      if (DICT[code]) return code;
    }
    return "tr";
  }

  function t(key) {
    var s = (DICT[lang] && DICT[lang][key]) || DICT.tr[key] || "";
    return s.replace(/\{days\}/g, PRICES.trialDays).replace(/\{videos\}/g, PRICES.trialVideos);
  }

  function apply() {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) { el.textContent = t(el.getAttribute("data-i18n")); });
    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) { el.alt = t(el.getAttribute("data-i18n-alt")); });
    var doc = document.body.getAttribute("data-legal"), page = document.body.getAttribute("data-page");
    if (doc) {
      renderLegal(doc);
    } else if (page) {
      document.title = t(page + ".title") + " | Belnovia Studio Pro";
    } else {
      document.title = t("meta.title");
      var md = document.querySelector('meta[name="description"]');
      if (md) md.setAttribute("content", t("meta.desc"));
      renderPrices();
      setShot(currentShot);
      renderSample();
    }
    setBuyLinks();
  }

  /* ---------- prices ---------- */
  function renderPrices() {
    document.querySelectorAll("[data-price]").forEach(function (el) {
      var k = el.getAttribute("data-price");
      var v = PRICES[k];
      // a value may also be {"tr":"...","en":"..."} to show different text per language
      if (v && typeof v === "object") v = v[lang] || v.en || v.tr || "";
      if (k === "creatorMonthly" || k === "proMonthly") {
        el.textContent = v || t("price.unknown");
        el.classList.toggle("is-unknown", !v);
      } else {
        el.textContent = v || "";
        el.hidden = !v;
      }
    });
  }

  function loadPrices() {
    if (!window.fetch) return;
    fetch("prices.json", { cache: "no-cache" })
      .then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); })
      .then(function (p) {
        if (p && typeof p === "object") {
          Object.keys(PRICES).forEach(function (k) { if (p[k] !== undefined && p[k] !== null) PRICES[k] = p[k]; });
        }
        apply();
      })
      .catch(function () { /* keep defaults: prices read "shown in the app" */ });
  }

  function setBuyLinks() {
    var url = lang === "tr" ? (CHECKOUT.tr || CHECKOUT.intl) : (CHECKOUT.intl || CHECKOUT.tr);
    document.querySelectorAll("a.buy").forEach(function (a) {
      if (url) { a.href = url; a.rel = "noopener"; } else { a.href = (document.body.getAttribute("data-legal") ? "index.html" : "") + "#download"; }
    });
    var dl = document.getElementById("dl-btn");
    if (dl) dl.href = DOWNLOAD_URL;
  }

  /* ---------- screenshots ---------- */
  // screenshots come in Turkish and English; other languages see the English ones
  var SHOT_IDS = ["new", "trend", "voice", "labs", "cal"];
  function shotLang() { return lang === "tr" ? "tr" : "en"; }
  function shotSrc(id) { return "img/shots/" + shotLang() + "/" + id + ".webp"; }
  var SHOTS = {};
  SHOT_IDS.forEach(function (k) { SHOTS[k] = k; });
  var currentShot = "new";
  function setShot(id) {
    var img = document.getElementById("shot-img");
    if (!img) return;
    currentShot = id;
    if (img.getAttribute("src") !== shotSrc(id)) img.src = shotSrc(id);
    document.querySelectorAll("[data-langsrc]").forEach(function (el) { var u = el.getAttribute("data-langsrc").replace("{l}", shotLang()); if (el.tagName === "SOURCE") { if (el.getAttribute("srcset") !== u) el.setAttribute("srcset", u); } else if (el.getAttribute("src") !== u) el.src = u; });
    img.alt = t("shots." + id + "Alt");
    document.getElementById("shot-cap").textContent = t("shots." + id + "Cap");
    var tabs = document.querySelectorAll('[role="tab"][data-shot]');
    tabs.forEach(function (b) {
      var on = b.getAttribute("data-shot") === id;
      b.setAttribute("aria-selected", on ? "true" : "false");
      b.tabIndex = on ? 0 : -1;
      if (on) document.getElementById("p-shot").setAttribute("aria-labelledby", b.id);
    });
  }
  function initTabs() {
    var tabs = Array.prototype.slice.call(document.querySelectorAll('[role="tab"][data-shot]'));
    if (!tabs.length) return;
    tabs.forEach(function (b, i) {
      b.addEventListener("click", function () { setShot(b.getAttribute("data-shot")); });
      b.addEventListener("keydown", function (e) {
        var n = null;
        if (e.key === "ArrowRight") n = (i + 1) % tabs.length;
        if (e.key === "ArrowLeft") n = (i - 1 + tabs.length) % tabs.length;
        if (e.key === "Home") n = 0;
        if (e.key === "End") n = tabs.length - 1;
        if (n !== null) { e.preventDefault(); tabs[n].focus(); setShot(tabs[n].getAttribute("data-shot")); }
      });
    });
    // warm the cache for the other screenshots once the page is idle
    window.addEventListener("load", function () {
      setTimeout(function () { SHOT_IDS.forEach(function (k) { var i = new Image(); i.src = shotSrc(k); }); }, 1500);
    });
  }

  /* ---------- sample video (js/site-config.js) ---------- */
  function byLang(v) {
    if (!v) return "";
    if (typeof v === "string") return v.trim();
    return String(v[lang] || v.en || v[Object.keys(v)[0]] || "").trim();
  }
  var samplePlaying = false, sampleFile = "";
  function renderSample() {
    var sec = document.getElementById("sample");
    if (!sec) return;
    var id = String(window.SAMPLE_VIDEO_ID || "").trim();
    if (!/^[A-Za-z0-9_-]{6,20}$/.test(id)) id = "";
    var file = id ? "" : byLang(window.DEMO_VIDEO);
    sec.hidden = !id && !file;
    if (sec.hidden) return;
    var box = document.getElementById("sample-box");
    var note = document.getElementById("sample-note");
    if (note) note.hidden = !id;
    if (file) {
      if (file === sampleFile) return; // keep playback when only the language of other texts changed
      sampleFile = file;
      var v = document.createElement("video");
      v.controls = true; v.preload = "none"; v.playsInline = true;
      var poster = byLang(window.DEMO_POSTER);
      if (poster) v.poster = poster;
      v.src = file;
      v.setAttribute("aria-label", t("sample.title"));
      box.innerHTML = ""; box.appendChild(v);
      return;
    }
    if (samplePlaying) { var f = box.querySelector("iframe"); if (f) f.title = t("sample.title"); return; }
    var p = document.getElementById("sample-poster");
    var img = String(window.SAMPLE_POSTER || "").trim();
    if (p && img) p.style.backgroundImage = "url(\"" + img.replace(/"/g, "") + "\")";
    var btn = document.getElementById("sample-play");
    if (btn && !btn.dataset.bound) {
      btn.dataset.bound = "1";
      btn.addEventListener("click", function () {
        samplePlaying = true;
        var f = document.createElement("iframe");
        f.src = "https://www.youtube-nocookie.com/embed/" + encodeURIComponent(id) + "?autoplay=1&rel=0&modestbranding=1";
        f.title = t("sample.title");
        f.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
        f.allowFullscreen = true;
        f.referrerPolicy = "strict-origin-when-cross-origin";
        box.innerHTML = ""; box.appendChild(f);
        f.focus();
      });
    }
  }

  /* ---------- legal pages ---------- */
  function esc(s) { return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
  function linkify(s) {
    return s.replace(/servicescriptorium@gmail\.com/g, '<a href="mailto:servicescriptorium@gmail.com">servicescriptorium@gmail.com</a>');
  }
  function renderLegal(doc) {
    var L = window.LEGAL || {};
    var entry = (L[lang] && L[lang][doc]) || (L.tr && L.tr[doc]);
    if (!entry) return;
    document.title = entry[0] + " | Belnovia Studio Pro";
    document.getElementById("legal-title").textContent = entry[0];
    var html = [];
    entry[1].split(/\n+/).forEach(function (line, idx) {
      line = line.trim();
      if (!line) return;
      var safe = esc(line);
      // contract articles such as "MADDE 1 – TARAFLAR" / "ARTICLE 1 – PARTIES"
      if (/^[A-ZÇĞİÖŞÜ][A-Za-zÇĞİÖŞÜçğıöşü]+ \d+\s[–-]\s/.test(line) && line.length < 80) { html.push("<h2>" + safe + "</h2>"); return; }
      // whole-line headings such as "3) CANCELLATION"
      if (/^\d+\)\s/.test(line) && line.length < 70 && line === line.toLocaleUpperCase()) {
        html.push("<h2>" + safe.replace(/^(\d+)\)\s*/, "$1. ") + "</h2>");
        return;
      }
      // inline headings such as "1) ACCEPTANCE. text"
      var m = safe.match(/^(\d+\)\s[^.:]+?[.:])\s(.*)$/);
      var head = m && m[1].slice(0, 14);
      if (m && head === head.toLocaleUpperCase()) {
        html.push("<p><strong>" + m[1] + "</strong> " + linkify(m[2]) + "</p>");
        return;
      }
      if (idx === 0) { html.push('<p class="legal-sum">' + linkify(safe) + "</p>"); return; }
      if (/^-\s/.test(line)) { html.push('<p class="li">' + linkify(safe.slice(2)) + "</p>"); return; }
      html.push("<p>" + linkify(safe) + "</p>");
    });
    // (the texts end with their own "the Turkish version prevails" line)
    document.getElementById("legal-body").innerHTML = html.join("");
  }

  /* ---------- language switcher ---------- */
  function initLang() {
    var sel = document.getElementById("lang-select");
    if (!sel) return;
    LANGS.forEach(function (l) {
      var o = document.createElement("option");
      o.value = l[0]; o.textContent = l[1]; o.lang = l[0];
      sel.appendChild(o);
    });
    sel.value = lang;
    sel.addEventListener("change", function () {
      lang = sel.value;
      store("bs-lang", lang);
      apply();
    });
  }

  lang = pickLang();
  initLang();
  initTabs();
  apply();
  loadPrices();
  document.querySelectorAll(".year").forEach(function (el) { el.textContent = new Date().getFullYear(); });
  document.documentElement.classList.add("js");
})();
