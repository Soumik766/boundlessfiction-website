/* Boundless Fiction — homepage interactions (v2)
   Vanilla, dependency-free. English lives in the HTML; this file holds ONLY
   the Bangla dictionary. With JS off the page is fully readable. */
(function () {
  "use strict";
  document.documentElement.classList.add("js");

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ── Bangla dictionary ─────────────────────────────────────────────── */
  var BN = {
    "nav.home": "হোম",
    "nav.why": "কেন আমরা",
    "nav.guide": "প্রকাশের গাইড",
    "nav.about": "আমাদের কথা",
    "nav.contact": "যোগাযোগ",
    "nav.privacy": "প্রাইভেসি",
    "nav.delete": "অ্যাকাউন্ট মুছুন",
    "foot.privacy": "প্রাইভেসি পলিসি",
    "foot.terms": "সেবার শর্তাবলি",

    "hero.badge": "গুগল প্লে-তে এখন লাইভ",
    "hero.h1a": "পড়ো। লেখো।",
    "hero.h1b": "প্রকাশ করো।",
    "hero.lede": "অরিজিনাল মাঙ্গা, কমিক আর উপন্যাস — বাংলা ও ইংরেজিতে, অ্যান্ড্রয়েডে সম্পূর্ণ ফ্রি। বাংলাদেশে তৈরি, পড়া যায় সারা পৃথিবীতে।",
    "hero.geton": "ডাউনলোড করো",
    "hero.geton2": "ডাউনলোড করো",
    "hero.how": "প্রকাশ করা শেখো",
    "hero.orbitNote": "সত্যিকারের ক্রিয়েটরদের সত্যিকারের সিরিজ — এই মুহূর্তে অ্যাপে লাইভ।",

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
      btn.textContent = bn ? "EN" : "বাং";
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
            // Replay the snake draw + stop reveals for the shown track.
            var snake = panel.querySelector(".snake");
            if (snake) {
              snake.classList.remove("in");
              void snake.offsetWidth; /* restart transitions */
              snake.classList.add("in");
            }
          }
        }
      });
    });
  });

  /* ── Scroll reveals + snake draw ───────────────────────────────────── */
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
    document.querySelectorAll(".rv, .snake").forEach(function (el) {
      io.observe(el);
    });
  } else {
    // Motion off or ancient browser: show everything.
    document.querySelectorAll(".rv, .snake").forEach(function (el) {
      el.classList.add("in");
    });
  }
})();
