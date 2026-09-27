(function () {
  "use strict";

  var data = window.SITE_DATA;
  var TABS = ["profile", "research", "publications", "contact"];

  function $(sel, root) { return (root || document).querySelector(sel); }
  function $all(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function themeById(id) {
    for (var i = 0; i < data.themes.length; i++) if (data.themes[i].id === id) return data.themes[i];
    return null;
  }
  function papersOfTheme(id) {
    return data.papers.filter(function (p) { return p.theme === id; });
  }
  function groupByYear(items) {
    var groups = {};
    items.forEach(function (it) { (groups[it.year] = groups[it.year] || []).push(it); });
    return Object.keys(groups).sort(function (a, b) { return b - a; }).map(function (y) {
      return { year: y, items: groups[y] };
    });
  }

  var OA_BADGE = '<span class="badge badge--oa" title="Open Access">Open Access</span>';

  function linkButtons(p) {
    var html = '<a class="btn btn--primary" href="' + p.url + '" target="_blank" rel="noopener">論文を読む</a>';
    (p.links || []).forEach(function (l) {
      html += '<a class="btn" href="' + l.url + '" target="_blank" rel="noopener">' + l.label + '</a>';
    });
    return html;
  }

  /* ---------- Hero: ランダム画像 ---------- */
  var HERO_IMAGES = [
    "img/スポッテッドガー.JPG",
    "img/アホロートル.JPG",
    "img/エイ.jpg",
    "img/ポリプテルスセネガルス.JPG",
    "img/ハイギョ.JPG",
    "img/シーラカンス.JPG",
    "img/ポリプテルスデルヘッジ.JPG"
  ];
  var hero = $("#hero-img");
  if (hero) hero.src = HERO_IMAGES[Math.floor(Math.random() * HERO_IMAGES.length)];

  /* ---------- Profile: 最新論文 ---------- */
  function renderLatest() {
    var el = $("#latest-paper");
    var p = data.papers[0];
    if (!el || !p) return;
    el.innerHTML =
      '<h3 class="card__title">Latest paper</h3>' +
      '<p class="latest__headline">' + p.headline + '</p>' +
      '<p class="latest__meta">' + p.title + ' — <i>' + p.journal + '</i> (' + p.year + ')</p>' +
      '<a class="btn btn--primary" href="#paper-' + p.id + '">解説を読む →</a>';
  }

  /* ---------- Research: テーマカード ---------- */
  function renderThemes() {
    var grid = $("#theme-grid");
    if (!grid) return;
    grid.innerHTML = data.themes.filter(function (t) { return !t.hidden; }).map(function (t) {
      var n = papersOfTheme(t.id).length;
      return '<article class="theme card">' +
        '<button type="button" class="theme__media' + (t.imageFit === "contain" ? ' theme__media--contain' : '') + '" data-zoom="' + t.image + '" data-caption="' + t.title + '">' +
          '<img src="' + t.image + '" alt="' + t.imageAlt + '" loading="lazy"></button>' +
        '<div class="theme__body">' +
          '<p class="theme__en">' + t.en + '</p>' +
          '<h4 class="theme__title">' + t.title + '</h4>' +
          '<p class="theme__lead">' + t.lead + '</p>' +
          '<details class="more"><summary>詳しく読む</summary>' +
            t.body.map(function (b) { return '<p>' + b + '</p>'; }).join("") +
          '</details>' +
          (n ? '<button type="button" class="btn btn--ghost" data-show-theme="' + t.id + '">関連論文 ' + n + '本を見る ↓</button>' : '') +
        '</div></article>';
    }).join("");
  }

  /* ---------- Research: 論文解説 ---------- */
  var currentTheme = "all";

  function renderFilter() {
    var el = $("#paper-filter");
    if (!el) return;
    var used = data.themes.filter(function (t) { return papersOfTheme(t.id).length; });
    var html = '<button type="button" class="chip chip--btn" data-theme="all" aria-pressed="true">すべて <span>' + data.papers.length + '</span></button>';
    used.forEach(function (t) {
      html += '<button type="button" class="chip chip--btn" data-theme="' + t.id + '" aria-pressed="false">' +
        t.title + ' <span>' + papersOfTheme(t.id).length + '</span></button>';
    });
    el.innerHTML = html;
  }

  function renderExplainers() {
    var el = $("#explainers");
    if (!el) return;
    el.innerHTML = data.papers.map(function (p) {
      var theme = themeById(p.theme);
      var fig = p.figure
        ? '<figure class="explainer__fig"><button type="button" data-zoom="' + p.figure.src + '" data-caption="' + (p.figure.caption || "") + '">' +
            '<img src="' + p.figure.src + '" alt="' + p.figure.alt + '" loading="lazy"></button>' +
            (p.figure.caption ? '<figcaption>' + p.figure.caption + '</figcaption>' : '') + '</figure>'
        : '';
      return '<article class="explainer card' + (p.figure ? '' : ' explainer--nofig') + '" id="paper-' + p.id + '" data-theme="' + p.theme + '">' +
        fig +
        '<div class="explainer__body">' +
          '<p class="explainer__meta"><span class="badge">' + p.year + '</span>' +
            (theme && !theme.hidden ? '<span class="badge badge--theme">' + theme.title + '</span>' : '') +
            (p.oa ? OA_BADGE : '') +
            (p.award ? '<a class="badge badge--award" href="' + p.award.url + '" target="_blank" rel="noopener">🏆 ' + p.award.label + '</a>' : '') +
          '</p>' +
          '<h4 class="explainer__headline">' + p.headline + '</h4>' +
          '<p class="explainer__title">' + p.title + ' <span class="explainer__journal">— ' + p.journal + '</span></p>' +
          (p.points ? '<ul class="points">' + p.points.map(function (x) { return '<li>' + x + '</li>'; }).join("") + '</ul>' : '') +
          '<details class="more"><summary>解説を読む</summary>' +
            p.summary.map(function (s) { return '<p>' + s + '</p>'; }).join("") +
            '<p class="explainer__authors">' + p.authors + ' (' + p.year + ')</p>' +
          '</details>' +
          '<div class="btn-row">' + linkButtons(p) + '</div>' +
        '</div></article>';
    }).join("");
  }

  function applyThemeFilter(id) {
    currentTheme = id;
    $all("#paper-filter [data-theme]").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-theme") === id));
    });
    $all("#explainers .explainer").forEach(function (a) {
      a.hidden = !(id === "all" || a.getAttribute("data-theme") === id);
    });
  }

  /* ---------- Publications ---------- */
  function renderPublications() {
    var stats = $("#pub-stats");
    if (stats) {
      var firstAuthor = data.papers.filter(function (p) { return p.authors.indexOf("<b>Kimura") === 0; }).length;
      stats.innerHTML =
        stat(data.papers.length, "論文") +
        stat(firstAuthor, "筆頭著者") +
        stat(data.presentations.length, "学会発表") +
        stat(data.software.length, "ソフトウェア");
    }
    var el = $("#pub-lists");
    if (!el) return;

    var papers = groupByYear(data.papers).map(function (g) {
      return '<h4 class="year">' + g.year + '</h4><ol class="pub-list">' + g.items.map(function (p) {
        return '<li class="pub">' +
          '<p class="pub__title"><a href="' + p.url + '" target="_blank" rel="noopener">' + p.title + '</a></p>' +
          '<p class="pub__authors">' + p.authors + '</p>' +
          '<p class="pub__journal"><i>' + p.journal + '</i>' + (p.volume ? ', ' + p.volume : '') + '</p>' +
          '<p class="pub__badges">' + (p.oa ? OA_BADGE : '') +
            (p.award ? '<a class="badge badge--award" href="' + p.award.url + '" target="_blank" rel="noopener">🏆 ' + p.award.label + '</a>' : '') +
            (p.links || []).map(function (l) { return '<a class="badge badge--link" href="' + l.url + '" target="_blank" rel="noopener">' + l.label + '</a>'; }).join("") +
            '<a class="badge badge--link" href="#paper-' + p.id + '">図付き解説 →</a>' +
          '</p></li>';
      }).join("") + '</ol>';
    }).join("");

    var simple = function (items) {
      return groupByYear(items).map(function (g) {
        return '<h4 class="year">' + g.year + '</h4><ol class="pub-list pub-list--simple">' +
          g.items.map(function (x) { return '<li class="pub">' + x.text + '</li>'; }).join("") + '</ol>';
      }).join("");
    };

    el.innerHTML =
      '<section class="pub-group" data-pub-group="papers"><h3 class="sub-title">論文 <small>Peer-reviewed papers</small></h3>' + papers + '</section>' +
      '<section class="pub-group" data-pub-group="presentations"><h3 class="sub-title">学会発表 <small>Presentations</small></h3>' + simple(data.presentations) + '</section>' +
      '<section class="pub-group" data-pub-group="software"><h3 class="sub-title">ソフトウェア・制作物 <small>Software</small></h3>' + simple(data.software) + '</section>';

    function stat(n, label) {
      return '<div class="stat"><span class="stat__num">' + n + '</span><span class="stat__label">' + label + '</span></div>';
    }
  }

  function applyPubFilter(kind) {
    $all("[data-pub-filter]").forEach(function (b) {
      b.classList.toggle("is-active", b.getAttribute("data-pub-filter") === kind);
    });
    $all("[data-pub-group]").forEach(function (s) {
      s.hidden = !(kind === "all" || s.getAttribute("data-pub-group") === kind);
    });
  }

  /* ---------- Tabs & routing ---------- */
  function showTab(name, focusTab) {
    TABS.forEach(function (t) {
      var panel = document.getElementById(t);
      var tab = document.getElementById("tab-" + t);
      var active = t === name;
      panel.hidden = !active;
      tab.setAttribute("aria-selected", String(active));
      tab.setAttribute("tabindex", active ? "0" : "-1");
      if (active && focusTab) tab.focus();
    });
  }

  function route() {
    var hash = decodeURIComponent(location.hash.replace(/^#/, ""));
    if (hash.indexOf("paper-") === 0) {
      showTab("research");
      var target = document.getElementById(hash);
      if (target) {
        if (target.hidden) applyThemeFilter("all");
        var det = target.querySelector("details");
        if (det) det.open = true;
        requestAnimationFrame(function () { target.scrollIntoView({ block: "start" }); });
        target.classList.add("is-flash");
        setTimeout(function () { target.classList.remove("is-flash"); }, 1600);
      }
      return;
    }
    if (TABS.indexOf(hash) === -1) hash = "profile";
    showTab(hash);
    window.scrollTo(0, 0);
  }

  // 矢印キーでタブ移動（WAI-ARIA Tabs pattern）
  $(".tabs__list").addEventListener("keydown", function (e) {
    var i = TABS.indexOf(document.activeElement.getAttribute("data-tab"));
    if (i === -1) return;
    var next = null;
    if (e.key === "ArrowRight") next = (i + 1) % TABS.length;
    if (e.key === "ArrowLeft") next = (i - 1 + TABS.length) % TABS.length;
    if (e.key === "Home") next = 0;
    if (e.key === "End") next = TABS.length - 1;
    if (next === null) return;
    e.preventDefault();
    history.pushState(null, "", "#" + TABS[next]);
    showTab(TABS[next], true);
  });

  /* ---------- Lightbox ---------- */
  var lightbox = $("#lightbox");
  function openLightbox(src, caption) {
    if (!lightbox || typeof lightbox.showModal !== "function") { window.open(src, "_blank"); return; }
    $("#lightbox-img").src = src;
    $("#lightbox-img").alt = caption || "";
    $("#lightbox-caption").textContent = caption || "";
    lightbox.showModal();
  }
  if (lightbox) {
    lightbox.addEventListener("click", function (e) { if (e.target === lightbox) lightbox.close(); });
  }

  /* ---------- Event delegation ---------- */
  document.addEventListener("click", function (e) {
    var t = e.target.closest("[data-theme], [data-show-theme], [data-pub-filter], [data-zoom], [data-copy]");
    if (!t) return;
    if (t.hasAttribute("data-zoom")) {
      openLightbox(t.getAttribute("data-zoom"), t.getAttribute("data-caption"));
    } else if (t.hasAttribute("data-show-theme")) {
      applyThemeFilter(t.getAttribute("data-show-theme"));
      $("#paper-explainers").scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (t.hasAttribute("data-theme") && t.closest("#paper-filter")) {
      applyThemeFilter(t.getAttribute("data-theme"));
    } else if (t.hasAttribute("data-pub-filter")) {
      applyPubFilter(t.getAttribute("data-pub-filter"));
    } else if (t.hasAttribute("data-copy")) {
      var text = t.getAttribute("data-copy");
      var done = function () {
        var orig = t.textContent;
        t.textContent = "コピーしました";
        setTimeout(function () { t.textContent = orig; }, 1500);
      };
      if (navigator.clipboard) navigator.clipboard.writeText(text).then(done, function () {});
    }
  });

  renderLatest();
  renderThemes();
  renderFilter();
  renderExplainers();
  renderPublications();
  window.addEventListener("hashchange", route);
  route();
})();
