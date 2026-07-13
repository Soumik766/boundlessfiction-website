/* Boundless Fiction — homepage interactions (v3)
   Vanilla, dependency-free. English lives in the HTML; this file holds ONLY
   the Bangla dictionary plus the interaction layer (progress bar, magnetic
   CTAs, cursor spotlight/tilt, shelf parallax). With JS off the page is
   fully readable and the shelf still drifts (pure CSS). */
(function () {
  "use strict";
  document.documentElement.classList.add("js");

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var finePointer = window.matchMedia("(pointer: fine)").matches;

  /* ── Shuffle the shelf — every visit hangs the covers differently ────
     All covers are unique across the wall (no repeats on screen). Each
     lane's shuffled set is cloned twice; the CSS loop steps -1/3 (one
     set), so the wrap is seamless and the window is always painted. */
  (function shuffleShelf() {
    var lanes = document.querySelectorAll(".shelf .lane");
    if (!lanes.length) return;
    var pool = [];
    lanes.forEach(function (lane) {
      lane.querySelectorAll(".set .shelf-card").forEach(function (card) {
        pool.push(card);
      });
    });
    if (pool.length < 6) return;
    for (var i = pool.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = pool[i]; pool[i] = pool[j]; pool[j] = tmp;
    }
    var per = Math.floor(pool.length / lanes.length);
    var idx = 0;
    lanes.forEach(function (lane) {
      var track = lane.querySelector(".lane-track");
      if (!track) return;
      var firstSet = track.querySelector(".set");
      if (!firstSet) return;
      /* drop every set, rebuild the first from the shuffled pool */
      track.querySelectorAll(".set").forEach(function (s) {
        while (s.firstChild) s.removeChild(s.firstChild);
        if (s !== firstSet) track.removeChild(s);
      });
      for (var k = 0; k < per && idx < pool.length; k++, idx++) {
        firstSet.appendChild(pool[idx]);
      }
      for (var c = 0; c < 2; c++) {
        var dup = firstSet.cloneNode(true);
        dup.setAttribute("aria-hidden", "true");
        track.appendChild(dup);
      }
    });
  })();

  /* ── Bangla dictionary ─────────────────────────────────────────────── */
  var BN = {
    "nav.home": "হোম",
    "nav.why": "কেন আমরা",
    "nav.guide": "প্রকাশের গাইড",
    "nav.about": "আমাদের কথা",
    "nav.contact": "যোগাযোগ",
    "nav.privacy": "প্রাইভেসি",
    "nav.delete": "অ্যাকাউন্ট মুছুন",
    "dn.features": "ফিচার",
    "dn.app": "অ্যাপ নামাও",
    "foot.privacy": "প্রাইভেসি পলিসি",
    "foot.terms": "সেবার শর্তাবলি",
    "foot.cookies": "কুকিজ",

    "hero.badge": "গুগল প্লে-তে এখন লাইভ",
    "hero.h1a": "পড়ো। লেখো।",
    "hero.h1b": "প্রকাশ করো।",
    "hero.lede": "বাংলাদেশের প্রথম ভিজ্যুয়াল স্টোরি অ্যাপ — মাঙ্গা, কমিক, মানহুয়া, মানহোয়া — সাথে বিশ্বমানের উপন্যাসও। অ্যান্ড্রয়েডে সম্পূর্ণ ফ্রি, বাংলা ও ইংরেজিতে।",
    "hero.geton": "ডাউনলোড করো",
    "hero.geton2": "ডাউনলোড করো",
    "hero.how": "প্রকাশ করা শেখো",
    "hero.note": "সত্যিকারের ক্রিয়েটরদের সত্যিকারের সিরিজ — এই মুহূর্তে অ্যাপে লাইভ।",

    "why.kicker": "কেন Boundless Fiction",
    "why.sub": "গল্পগুলো সবসময়ই ছিল। ছিল না শুধু ওদের একটা ঘর।",
    "why.answerEn": "প্রকাশ এক ট্যাপে, পাঠক নিজেই খুঁজে নেবে তোমাকে, আর বাংলার গল্প পৌঁছে যাবে বিশ্বজুড়ে। কোনো গেটকিপার নেই। সম্পূর্ণ ফ্রি।",

    "map.kicker": "ক্রিয়েটর রোডম্যাপ",
    "map.h2": "আইডিয়া থেকে প্রকাশ — মাত্র পাঁচ ধাপে।",
    "map.lede": "সবকিছু অ্যাপের ভেতরেই। নিচের বারের বেগুনি Write বাটনে চাপ দাও, তারপর রাস্তাটা অনুসরণ করো।",
    "map.tabStory": "গল্প",
    "map.tabVisual": "ভিজ্যুয়াল গল্প",
    "map.storyTitle": "লেখা গল্প প্রকাশ করো",
    "map.visualTitle": "ভিজ্যুয়াল গল্প প্রকাশ করো",

    "s1.t": "Write বাটনে চাপ দাও, তারপর Create New",
    "s1.p": "নিচের বারের মাঝখানের বেগুনি পেন্সিল বাটনটাই তোমার ক্রিয়েটর স্টুডিওর দরজা।",
    "s2.t": "“Story” বেছে নাও, সাথে দৈর্ঘ্য",
    "s2.p": "ছোটগল্প, নভেলা নাকি পুরো উপন্যাস — একটা পথ বেছে নাও, তারপর অধ্যায় ধরে ধরে বড় করো।",
    "s3.t": "বিস্তারিত যোগ করো",
    "s3.p": "নাম, প্রচ্ছদ, সারাংশ, জনরা আর ভাষা — পাঠক প্রথমে এটাই দেখে, তাই যত্ন নিয়ে সাজাও।",
    "s4.t": "এডিটরে অধ্যায় লেখো",
    "s4.p": "ড্রাফটসহ পরিচ্ছন্ন রিচ-টেক্সট এডিটর — বাংলায়, ইংরেজিতে বা দুটোতেই লেখো, শেষ হলেই প্রকাশ করো।",
    "s5.t": "প্রকাশ করো, বাড়তে থাকো",
    "s5.p": "পাবলিশ চাপো আর পাঠক আসা দেখো — রিড, রিভিউ ও ফলোয়ার, সব তোমার ক্রিয়েটর স্টুডিওতে।",

    "v1.t": "Write বাটনে চাপ দাও, তারপর Create New",
    "v1.p": "একই বেগুনি পেন্সিল বাটন — মাঙ্গা, মানহুয়া আর কমিকের শুরুটাও ঠিক এই দরজা থেকেই।",
    "v2.t": "তোমার ফরম্যাট বেছে নাও",
    "v2.p": "মাঙ্গা, মানহুয়া বা কমিক — পড়ার দিক (ডান-থেকে-বাম, ভার্টিকাল স্ক্রল, পেজ ফ্লিপ) নিজে থেকেই ঠিক হয়ে যায়।",
    "v3.t": "বিস্তারিত যোগ করো",
    "v3.p": "নাম, প্রচ্ছদ, সারাংশ, জনরা আর ভাষা — প্রচ্ছদই তোমার পোস্টার, সেরা প্যানেলটা এখানেই দাও।",
    "v4.t": "অধ্যায়ের পাতা আপলোড করো",
    "v4.p": "প্রতিটি অধ্যায়ের পাতার ছবি ক্রমানুসারে যোগ করো — যখন খুশি সাজিয়ে নাও, পাঠক যা দেখবে তার প্রিভিউ দেখো।",
    "v5.t": "প্রকাশ করো, বাড়তে থাকো",
    "v5.p": "লাইভে যাও আর ফ্যানডম গড়ো — র‍্যাংকিং, কমেন্ট ও ফলোয়ার, সব তোমার ক্রিয়েটর স্টুডিওতে।",

    "feat.kicker": "এক অ্যাপ, তিনটি দরজা",
    "feat.h2": "পড়ো সীমাহীন। সৃষ্টি করো বাধাহীন।",
    "feat.readT": "পড়ো সীমাহীন",
    "feat.readP": "মাঙ্গা, মানহুয়া, কমিক আর লেখা গল্প — ভার্টিকাল স্ক্রল বা পেজ-ফ্লিপ, লাইট, ডার্ক ও সেপিয়া মোড, যেকোনো ফোনে দ্রুত চলার মতো করে বানানো।",
    "feat.createT": "লেখো ও প্রকাশ করো",
    "feat.createP": "পকেটেই ক্রিয়েটর স্টুডিও: অধ্যায় লেখো, পাতা আপলোড করো, সিরিজ গড়ো — তোমার গল্প আর পাঠকের মাঝে কোনো প্রকাশক নেই। ",
    "feat.createLink": "রোডম্যাপ দেখো →",
    "feat.growT": "গড়ে তোলো ফ্যানডম",
    "feat.growP": "ফলোয়ার, রিভিউ, কমেন্ট আর র‍্যাংকিং — বাঙালি গল্পকারদের জন্য বানানো কমিউনিটি, যেখানে দেশি ক্রিয়েটররাই আগে।",

    "fmt.kicker": "কী কী প্রকাশ করা যায়",
    "fmt.h2": "গল্প বললেই, জায়গা এখানেই।",
    "fmt.globe": "🌍 বাংলাদেশে তৈরি, পড়া যায় সবখানে — প্রথম দিন থেকেই তোমার সিরিজ বিশ্বজুড়ে পাঠকের কাছে পৌঁছায়, বাংলা ও ইংরেজি দুই ভাষাতেই।",

    "cta.h2": "তোমার গল্প অপেক্ষায়।",
    "cta.p": "অ্যাপ লাইভ, সম্পূর্ণ ফ্রি — প্রথম অধ্যায় মাত্র এক ট্যাপ দূরে।"
  };

  /* ── i18n: snapshot English from the DOM, swap on toggle ───────────── */
  var nodes = document.querySelectorAll("[data-i18n]");
  var EN = new Map();
  nodes.forEach(function (el) {
    EN.set(el, el.textContent);
  });

  function applyLang(lang) {
    var bn = lang === "bn";
    nodes.forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (bn) {
        if (BN[key]) el.textContent = BN[key];
      } else {
        el.textContent = EN.get(el);
      }
    });
    document.documentElement.lang = bn ? "bn" : "en";
    document.documentElement.classList.toggle("lang-bn", bn);
    var btn = document.querySelector(".lang-btn");
    if (btn) {
      var label = btn.querySelector(".lang-label");
      if (label) label.textContent = bn ? "EN" : "বাং";
      btn.setAttribute("aria-label", bn ? "Switch to English" : "বাংলায় দেখুন");
    }
    try { localStorage.setItem("bf-lang", lang); } catch (e) { /* private mode */ }
  }

  var saved = null;
  try { saved = localStorage.getItem("bf-lang"); } catch (e) { /* private mode */ }
  if (saved === "bn") applyLang("bn");

  var langBtn = document.querySelector(".lang-btn");
  if (langBtn) {
    langBtn.addEventListener("click", function () {
      applyLang(document.documentElement.classList.contains("lang-bn") ? "en" : "bn");
    });
  }

  /* close the phone menu when a destination is picked */
  var menuToggle = document.getElementById("menu");
  if (menuToggle) {
    document.querySelectorAll("nav.links a").forEach(function (a) {
      a.addEventListener("click", function () { menuToggle.checked = false; });
    });
  }

  /* ── Scroll-driven snake: the road draws and lights up as you scroll ── */
  var snakes = [];
  document.querySelectorAll(".snake").forEach(function (snake) {
    var stops = [];
    snake.querySelectorAll(".stop").forEach(function (li) {
      stops.push({ el: li, y: parseFloat(li.style.getPropertyValue("--y")) || 0 });
    });
    snakes.push({ el: snake, flow: snake.querySelector(".flow"), stops: stops });
  });
  var mobileTimeline = window.matchMedia("(max-width: 760px)");
  var wideScreen = window.matchMedia("(min-width: 881px)");
  function updateSnakes() {
    var vh = window.innerHeight || 1;
    snakes.forEach(function (s) {
      if (s.el.offsetParent === null) return; /* hidden track */
      var r = s.el.getBoundingClientRect();
      if (mobileTimeline.matches) {
        /* phone: the purple line's tip follows the reader down the list,
           filling node-to-node; each step lights the moment it's reached */
        var fillPx = Math.max(0, Math.min(vh * 0.8 - r.top, r.height));
        s.el.style.setProperty("--mpx", fillPx.toFixed(0) + "px");
        s.stops.forEach(function (st) {
          st.el.classList.toggle("lit", fillPx >= st.el.offsetTop + 24);
        });
      } else {
        var p = (vh * 0.8 - r.top) / (r.height * 0.92 || 1);
        p = Math.max(0, Math.min(1, p));
        if (s.flow) s.flow.style.strokeDashoffset = (100 - p * 100).toFixed(2);
        s.stops.forEach(function (st) {
          st.el.classList.toggle("lit", p * 100 >= st.y - 2);
        });
      }
    });
  }
  function litAllSnakes() {
    snakes.forEach(function (s) {
      if (s.flow) s.flow.style.strokeDashoffset = "0";
      s.el.style.setProperty("--mpx", "9999px");
      s.stops.forEach(function (st) { st.el.classList.add("lit"); });
    });
  }

  /* ── Roadmap tabs ──────────────────────────────────────────────────── */
  var tabs = document.querySelectorAll(".tab");
  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      tabs.forEach(function (t) {
        var selected = t === tab;
        t.setAttribute("aria-selected", selected ? "true" : "false");
        var panel = document.getElementById(t.getAttribute("aria-controls"));
        if (panel) {
          panel.hidden = !selected;
          if (selected) {
            panel.classList.remove("tab-in");
            void panel.offsetWidth; /* restart animations */
            panel.classList.add("tab-in");
          }
        }
      });
      if (reduceMotion) { litAllSnakes(); } else { updateSnakes(); }
    });
  });

  /* ── Scroll reveals ────────────────────────────────────────────────── */
  if (!reduceMotion && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    document.querySelectorAll(".rv").forEach(function (el) {
      io.observe(el);
    });
  } else {
    // Motion off or ancient browser: show everything.
    document.querySelectorAll(".rv").forEach(function (el) {
      el.classList.add("in");
    });
  }

  /* ── Reading progress + header state + scroll-linked motion ───────── */
  var bar = document.createElement("div");
  bar.id = "progress";
  document.body.appendChild(bar);
  var header = document.querySelector("header");
  var shelfTilt = document.querySelector(".shelf-tilt");
  var sky = document.querySelector(".sky");
  var scrollCue = document.querySelector(".scroll-cue");

  /* dot navigation: highlight the section under the reader */
  var dotLinks = [];
  document.querySelectorAll(".dot-nav a").forEach(function (a) {
    var target = document.querySelector(a.getAttribute("href"));
    if (target) dotLinks.push({ a: a, el: target });
  });

  var scrollTick = false;
  function onScroll() {
    if (scrollTick) return;
    scrollTick = true;
    requestAnimationFrame(function () {
      var doc = document.documentElement;
      var top = doc.scrollTop;
      var max = doc.scrollHeight - doc.clientHeight;
      bar.style.transform = "scaleX(" + (max > 0 ? top / max : 0) + ")";
      if (header) header.classList.toggle("scrolled", top > 10);
      if (scrollCue) scrollCue.classList.toggle("off", top > 80);
      if (dotLinks.length) {
        var mark = top + doc.clientHeight * 0.35;
        var current = dotLinks[0];
        dotLinks.forEach(function (s) {
          if (s.el.offsetTop <= mark) current = s;
        });
        dotLinks.forEach(function (s) {
          s.a.classList.toggle("act", s === current);
        });
      }
      if (!reduceMotion) {
        /* the parallax layers are desktop-only — phones skip the extra
           per-frame writes on their largest layers */
        if (wideScreen.matches) {
          if (sky) sky.style.transform = "translate3d(0," + (Math.min(top, 900) * 0.18).toFixed(1) + "px,0)";
          if (shelfTilt) {
            var sy = Math.min(top, 900) * 0.12;
            shelfTilt.style.setProperty("--sy", sy.toFixed(1) + "px");
          }
        }
        updateSnakes();
      }
      scrollTick = false;
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
  if (reduceMotion) { litAllSnakes(); }
  onScroll();

  /* ── Pointer-driven flourishes (desktop, motion-ok only) ───────────── */
  if (finePointer && !reduceMotion) {
    /* trailing cursor glow — accent ring, native cursor untouched */
    var glow = document.createElement("div");
    glow.id = "cursor-glow";
    document.body.appendChild(glow);
    var cx = 0, cy = 0, gx = -100, gy = -100, glowRaf = null;
    function glowTick() {
      glowRaf = requestAnimationFrame(function () {
        gx += (cx - gx) * 0.16;
        gy += (cy - gy) * 0.16;
        glow.style.transform = "translate3d(" + gx.toFixed(1) + "px," + gy.toFixed(1) + "px,0)";
        if (Math.abs(cx - gx) + Math.abs(cy - gy) > 0.4) glowTick();
        else glowRaf = null;
      });
    }
    document.addEventListener("pointermove", function (e) {
      cx = e.clientX; cy = e.clientY;
      if (gx < -50) { gx = cx; gy = cy; }
      glow.classList.add("live");
      if (!glowRaf) glowTick();
    }, { passive: true });
    document.addEventListener("pointerover", function (e) {
      var hot = e.target.closest && e.target.closest("a, button, .chip, .shelf-card, .tab");
      glow.classList.toggle("on", !!hot);
    }, { passive: true });

    /* magnetic CTAs — the button leans toward the cursor */
    document.querySelectorAll(".btn-play, .btn-ghost").forEach(function (btn) {
      btn.addEventListener("pointermove", function (e) {
        var r = btn.getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width - 0.5;
        var y = (e.clientY - r.top) / r.height - 0.5;
        btn.style.setProperty("--tx", (x * 10).toFixed(1) + "px");
        btn.style.setProperty("--ty", (y * 8 - 2).toFixed(1) + "px");
      });
      btn.addEventListener("pointerleave", function () {
        btn.style.setProperty("--tx", "0px");
        btn.style.setProperty("--ty", "0px");
      });
    });

    /* cursor spotlight + gentle 3D tilt on cards */
    document.querySelectorAll(".why-card, .panel, .step").forEach(function (card) {
      var tilts = !card.classList.contains("step");
      card.addEventListener("pointermove", function (e) {
        var r = card.getBoundingClientRect();
        var mx = e.clientX - r.left;
        var my = e.clientY - r.top;
        card.style.setProperty("--mx", mx.toFixed(0) + "px");
        card.style.setProperty("--my", my.toFixed(0) + "px");
        if (tilts) {
          card.style.setProperty("--ry", ((mx / r.width - 0.5) * 5).toFixed(2) + "deg");
          card.style.setProperty("--rx", ((0.5 - my / r.height) * 5).toFixed(2) + "deg");
        }
      });
      card.addEventListener("pointerleave", function () {
        card.style.setProperty("--rx", "0deg");
        card.style.setProperty("--ry", "0deg");
      });
    });

    /* shelf parallax — the cover wall answers the cursor */
    var hero = document.querySelector(".hero");
    var tilt = document.querySelector(".shelf-tilt");
    if (hero && tilt) {
      var px = 0, py = 0, parallaxTick = false;
      hero.addEventListener("pointermove", function (e) {
        px = (e.clientX / window.innerWidth - 0.5) * 2;
        py = (e.clientY / window.innerHeight - 0.5) * 2;
        if (parallaxTick) return;
        parallaxTick = true;
        requestAnimationFrame(function () {
          tilt.style.setProperty("--px", px.toFixed(3));
          tilt.style.setProperty("--py", py.toFixed(3));
          parallaxTick = false;
        });
      });
      hero.addEventListener("pointerleave", function () {
        tilt.style.setProperty("--px", "0");
        tilt.style.setProperty("--py", "0");
      });
    }
  }
})();
