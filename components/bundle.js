/* @ds-bundle: {"format":4,"namespace":"AlleFarbenDesignSystem_c7c21e","components":[{"name":"Button","sourcePath":"components/Button.jsx"},{"name":"Pill","sourcePath":"components/Pill.jsx"},{"name":"RainbowBar","sourcePath":"components/RainbowBar.jsx"},{"name":"ServiceCard","sourcePath":"components/ServiceCard.jsx"}],"sourceHashes":{"components/Button.jsx":"0038fe518532","components/Pill.jsx":"54d82ecd76a0","components/RainbowBar.jsx":"60c3f85f0ae9","components/ServiceCard.jsx":"05ce8992fd29","slides/deck-stage.js":"522102a1c71e","ui_kits/website/BookingSheet.jsx":"9de862397b43","ui_kits/website/CTABlock.jsx":"51bf58800f6e","ui_kits/website/Footer.jsx":"071d4c19b353","ui_kits/website/FounderBlock.jsx":"1e6b8db6c399","ui_kits/website/Hero.jsx":"062c3a0f1ef9","ui_kits/website/Navbar.jsx":"7afef55c6c24","ui_kits/website/Primitives.jsx":"4f6e4a016286","ui_kits/website/ServiceCards.jsx":"e06d70add1a3","ui_kits/website/Testimonial.jsx":"5ffbd41839f0"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AlleFarbenDesignSystem_c7c21e = window.AlleFarbenDesignSystem_c7c21e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/Button.jsx
try { (() => {
function Button({
  variant = "primary",
  size = "md",
  children,
  onClick,
  arrow
}) {
  const sizes = {
    sm: {
      padding: "8px 16px",
      fontSize: 13
    },
    md: {
      padding: "12px 22px",
      fontSize: 15
    },
    lg: {
      padding: "16px 30px",
      fontSize: 18
    }
  };
  const variants = {
    primary: {
      background: "#ffe28d",
      color: "#1d1d1d",
      boxShadow: "0 2px 6px rgba(77,54,30,0.10)"
    },
    secondary: {
      background: "transparent",
      color: "#1d1d1d",
      border: "1.5px solid #1d1d1d"
    },
    ghost: {
      background: "#fef3e8",
      color: "#1d1d1d"
    },
    dark: {
      background: "#1d1d1d",
      color: "#fffaf6"
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      fontFamily: "Dosis, system-ui, sans-serif",
      fontWeight: 700,
      border: "none",
      borderRadius: 999,
      cursor: "pointer",
      transition: "all 200ms cubic-bezier(0.22,1,0.36,1)",
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      ...sizes[size],
      ...variants[variant]
    }
  }, children, arrow && /*#__PURE__*/React.createElement("span", null, "\u2192"));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Button.jsx", error: String((e && e.message) || e) }); }

// components/Pill.jsx
try { (() => {
function Pill({
  tone = "ghost",
  children
}) {
  const tones = {
    yellow: {
      background: "#ffe28d",
      color: "#1d1d1d"
    },
    peach: {
      background: "#f4b896",
      color: "#1d1d1d"
    },
    mint: {
      background: "#98d7c2",
      color: "#1d1d1d"
    },
    blue: {
      background: "#78a5dc",
      color: "#1d1d1d"
    },
    lavender: {
      background: "#b89bca",
      color: "#1d1d1d"
    },
    ghost: {
      background: "#fef3e8",
      color: "#1d1d1d"
    },
    outline: {
      background: "transparent",
      color: "#1d1d1d",
      boxShadow: "inset 0 0 0 1.5px #1d1d1d"
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "Open Sans, system-ui, sans-serif",
      fontSize: 13,
      fontWeight: 700,
      padding: "6px 14px",
      borderRadius: 999,
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      ...tones[tone]
    }
  }, children);
}
Object.assign(__ds_scope, { Pill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Pill.jsx", error: String((e && e.message) || e) }); }

// components/RainbowBar.jsx
try { (() => {
function RainbowBar({
  height = 6,
  soft = false
}) {
  const g = soft ? "linear-gradient(90deg,#e39f9a33 0%,#ffe28d33 40%,#98d7c233 60%,#b89bca33 100%)" : "linear-gradient(90deg,#e39f9a 0%,#f4b896 20%,#ffe28d 40%,#98d7c2 60%,#78a5dc 80%,#b89bca 100%)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height,
      background: g,
      borderRadius: 999
    }
  });
}
Object.assign(__ds_scope, { RainbowBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/RainbowBar.jsx", error: String((e && e.message) || e) }); }

// components/ServiceCard.jsx
try { (() => {
function ServiceCard({
  accent = "#ffe28d",
  title = "Haushalt",
  body = "",
  price = "",
  bullets = []
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fffdfa",
      borderRadius: 24,
      padding: "28px 24px",
      boxShadow: "0 6px 18px rgba(77,54,30,0.08)",
      display: "flex",
      flexDirection: "column",
      gap: 14,
      position: "relative",
      overflow: "hidden",
      minHeight: 260
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: 5,
      background: accent
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "Dosis, sans-serif",
      fontWeight: 700,
      fontSize: 28,
      color: "#1d1d1d",
      margin: "6px 0 0",
      letterSpacing: "-0.01em"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "Open Sans, sans-serif",
      fontSize: 15,
      lineHeight: 1.6,
      color: "#4a4846",
      margin: 0
    }
  }, body), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, bullets.map(b => /*#__PURE__*/React.createElement("li", {
    key: b,
    style: {
      fontFamily: "Open Sans, sans-serif",
      fontSize: 13,
      color: "#1d1d1d",
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: accent,
      fontWeight: 700
    }
  }, "\u2713"), b))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      paddingTop: 10,
      borderTop: "1px solid #ecdfce",
      fontFamily: "Open Sans, sans-serif",
      fontSize: 13,
      fontWeight: 700,
      color: "#1d1d1d"
    }
  }, price));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// slides/deck-stage.js
try { (() => {
/**
 * <deck-stage> — reusable web component for HTML decks.
 *
 * Handles:
 *  (a) speaker notes — reads <script type="application/json" id="speaker-notes">
 *      and posts {slideIndexChanged: N} to the parent window on nav.
 *  (b) keyboard navigation — ←/→, PgUp/PgDn, Space, Home/End, number keys.
 *  (c) press R to reset to slide 0 (with a tasteful keyboard hint).
 *  (d) bottom-center overlay showing slide count + hints, fades out on idle.
 *  (e) auto-scaling — inner canvas is a fixed design size (default 1920×1080)
 *      scaled with `transform: scale()` to fit the viewport, letterboxed.
 *      Set the `noscale` attribute to render at authored size (1:1) — the
 *      PPTX exporter sets this so its DOM capture sees unscaled geometry.
 *  (f) print — `@media print` lays every slide out as its own page at the
 *      design size, so the browser's Print → Save as PDF produces a clean
 *      one-page-per-slide PDF with no extra setup.
 *
 * Slides are HIDDEN, not unmounted. Non-active slides stay in the DOM with
 * `visibility: hidden` + `opacity: 0`, so their state (videos, iframes,
 * form inputs, React trees) is preserved across navigation.
 *
 * Lifecycle event — the component dispatches a `slidechange` CustomEvent on
 * itself whenever the active slide changes (including the initial mount).
 * The event bubbles and composes out of shadow DOM, so you can listen on
 * the <deck-stage> element or on document:
 *
 *   document.querySelector('deck-stage').addEventListener('slidechange', (e) => {
 *     e.detail.index         // new 0-based index
 *     e.detail.previousIndex // previous index, or -1 on init
 *     e.detail.total         // total slide count
 *     e.detail.slide         // the new active slide element
 *     e.detail.previousSlide // the prior slide element, or null on init
 *     e.detail.reason        // 'init' | 'keyboard' | 'click' | 'tap' | 'api'
 *   });
 *
 * Persistence: current slide index is saved to localStorage keyed by the
 * document path, so refresh returns you to the same place.
 *
 * Usage:
 *   <deck-stage width="1920" height="1080">
 *     <section data-label="Title">...</section>
 *     <section data-label="Agenda">...</section>
 *   </deck-stage>
 *
 * Slides are the direct element children of <deck-stage>. Each slide is
 * automatically tagged with:
 *   - data-screen-label="NN Label"   (1-indexed, for comment flow)
 *   - data-om-validate="no_overflowing_text,no_overlapping_text,slide_sized_text"
 */

(() => {
  const DESIGN_W_DEFAULT = 1920;
  const DESIGN_H_DEFAULT = 1080;
  const STORAGE_PREFIX = 'deck-stage:slide:';
  const OVERLAY_HIDE_MS = 1800;
  const VALIDATE_ATTR = 'no_overflowing_text,no_overlapping_text,slide_sized_text';
  const pad2 = n => String(n).padStart(2, '0');
  const stylesheet = `
    :host {
      position: fixed;
      inset: 0;
      display: block;
      background: #000;
      color: #fff;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif;
      overflow: hidden;
    }

    .stage {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .canvas {
      position: relative;
      transform-origin: center center;
      flex-shrink: 0;
      background: #fff;
      will-change: transform;
    }

    /* Slides live in light DOM (via <slot>) so authored CSS still applies.
       We absolutely position each slotted child to stack them. */
    ::slotted(*) {
      position: absolute !important;
      inset: 0 !important;
      width: 100% !important;
      height: 100% !important;
      box-sizing: border-box !important;
      overflow: hidden;
      opacity: 0;
      pointer-events: none;
      visibility: hidden;
    }
    ::slotted([data-deck-active]) {
      opacity: 1;
      pointer-events: auto;
      visibility: visible;
    }

    /* Tap zones for mobile — back/forward thirds like Stories.
       Transparent, no visible UI, don't block the overlay. */
    .tapzones {
      position: fixed;
      inset: 0;
      display: flex;
      z-index: 2147482000;
      pointer-events: none;
    }
    .tapzone {
      flex: 1;
      pointer-events: auto;
      -webkit-tap-highlight-color: transparent;
    }
    /* Only activate tap zones on coarse pointers (touch devices). */
    @media (hover: hover) and (pointer: fine) {
      .tapzones { display: none; }
    }

    .overlay {
      position: fixed;
      left: 50%;
      bottom: 22px;
      transform: translate(-50%, 6px) scale(0.92);
      filter: blur(6px);
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 4px;
      background: #000;
      color: #fff;
      border-radius: 999px;
      font-size: 12px;
      font-feature-settings: "tnum" 1;
      letter-spacing: 0.01em;
      opacity: 0;
      pointer-events: none;
      transition: opacity 260ms ease, transform 260ms cubic-bezier(.2,.8,.2,1), filter 260ms ease;
      transform-origin: center bottom;
      z-index: 2147483000;
      user-select: none;
    }
    .overlay[data-visible] {
      opacity: 1;
      pointer-events: auto;
      transform: translate(-50%, 0) scale(1);
      filter: blur(0);
    }

    .btn {
      appearance: none;
      -webkit-appearance: none;
      background: transparent;
      border: 0;
      margin: 0;
      padding: 0;
      color: inherit;
      font: inherit;
      cursor: default;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 28px;
      min-width: 28px;
      border-radius: 999px;
      color: rgba(255,255,255,0.72);
      transition: background 140ms ease, color 140ms ease;
      -webkit-tap-highlight-color: transparent;
    }
    .btn:hover { background: rgba(255,255,255,0.12); color: #fff; }
    .btn:active { background: rgba(255,255,255,0.18); }
    .btn:focus { outline: none; }
    .btn:focus-visible { outline: none; }
    .btn::-moz-focus-inner { border: 0; }
    .btn svg { width: 14px; height: 14px; display: block; }
    .btn.reset {
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 0.02em;
      padding: 0 10px 0 12px;
      gap: 6px;
      color: rgba(255,255,255,0.72);
    }
    .btn.reset .kbd {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 16px;
      height: 16px;
      padding: 0 4px;
      font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
      font-size: 10px;
      line-height: 1;
      color: rgba(255,255,255,0.88);
      background: rgba(255,255,255,0.12);
      border-radius: 4px;
    }

    .count {
      font-variant-numeric: tabular-nums;
      color: #fff;
      font-weight: 500;
      padding: 0 8px;
      min-width: 42px;
      text-align: center;
      font-size: 12px;
    }
    .count .sep { color: rgba(255,255,255,0.45); margin: 0 3px; font-weight: 400; }
    .count .total { color: rgba(255,255,255,0.55); }

    .divider {
      width: 1px;
      height: 14px;
      background: rgba(255,255,255,0.18);
      margin: 0 2px;
    }

    /* ── Print: one page per slide, no chrome ────────────────────────────
       The screen layout stacks every slide at inset:0 inside a scaled
       canvas; for print we want them in document flow at the authored
       design size so the browser paginates one slide per sheet. The
       @page size is set from the width/height attributes via the inline
       <style id="deck-stage-print-page"> that connectedCallback injects
       into <head> (the @page at-rule has no effect inside shadow DOM). */
    @media print {
      :host {
        position: static;
        inset: auto;
        background: none;
        overflow: visible;
        color: inherit;
      }
      .stage { position: static; display: block; }
      .canvas {
        transform: none !important;
        width: auto !important;
        height: auto !important;
        background: none;
        will-change: auto;
      }
      ::slotted(*) {
        position: relative !important;
        inset: auto !important;
        width: var(--deck-design-w) !important;
        height: var(--deck-design-h) !important;
        box-sizing: border-box !important;
        opacity: 1 !important;
        visibility: visible !important;
        pointer-events: auto;
        break-after: page;
        page-break-after: always;
        break-inside: avoid;
        overflow: hidden;
      }
      ::slotted(*:last-child) {
        break-after: auto;
        page-break-after: auto;
      }
      .overlay, .tapzones { display: none !important; }
    }
  `;
  class DeckStage extends HTMLElement {
    static get observedAttributes() {
      return ['width', 'height', 'noscale'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._index = 0;
      this._slides = [];
      this._notes = [];
      this._hideTimer = null;
      this._mouseIdleTimer = null;
      this._storageKey = STORAGE_PREFIX + (location.pathname || '/');
      this._onKey = this._onKey.bind(this);
      this._onResize = this._onResize.bind(this);
      this._onSlotChange = this._onSlotChange.bind(this);
      this._onMouseMove = this._onMouseMove.bind(this);
      this._onTapBack = this._onTapBack.bind(this);
      this._onTapForward = this._onTapForward.bind(this);
    }
    get designWidth() {
      return parseInt(this.getAttribute('width'), 10) || DESIGN_W_DEFAULT;
    }
    get designHeight() {
      return parseInt(this.getAttribute('height'), 10) || DESIGN_H_DEFAULT;
    }
    connectedCallback() {
      this._render();
      this._loadNotes();
      this._syncPrintPageRule();
      window.addEventListener('keydown', this._onKey);
      window.addEventListener('resize', this._onResize);
      window.addEventListener('mousemove', this._onMouseMove, {
        passive: true
      });
      // Initial collection + layout happens via slotchange, which fires on mount.
    }
    disconnectedCallback() {
      window.removeEventListener('keydown', this._onKey);
      window.removeEventListener('resize', this._onResize);
      window.removeEventListener('mousemove', this._onMouseMove);
      if (this._hideTimer) clearTimeout(this._hideTimer);
      if (this._mouseIdleTimer) clearTimeout(this._mouseIdleTimer);
    }
    attributeChangedCallback() {
      if (this._canvas) {
        this._canvas.style.width = this.designWidth + 'px';
        this._canvas.style.height = this.designHeight + 'px';
        this._canvas.style.setProperty('--deck-design-w', this.designWidth + 'px');
        this._canvas.style.setProperty('--deck-design-h', this.designHeight + 'px');
        this._fit();
        this._syncPrintPageRule();
      }
    }
    _render() {
      const style = document.createElement('style');
      style.textContent = stylesheet;
      const stage = document.createElement('div');
      stage.className = 'stage';
      const canvas = document.createElement('div');
      canvas.className = 'canvas';
      canvas.style.width = this.designWidth + 'px';
      canvas.style.height = this.designHeight + 'px';
      canvas.style.setProperty('--deck-design-w', this.designWidth + 'px');
      canvas.style.setProperty('--deck-design-h', this.designHeight + 'px');
      const slot = document.createElement('slot');
      slot.addEventListener('slotchange', this._onSlotChange);
      canvas.appendChild(slot);
      stage.appendChild(canvas);

      // Tap zones (mobile): left third = back, right third = forward.
      const tapzones = document.createElement('div');
      tapzones.className = 'tapzones export-hidden';
      tapzones.setAttribute('aria-hidden', 'true');
      const tzBack = document.createElement('div');
      tzBack.className = 'tapzone tapzone--back';
      const tzMid = document.createElement('div');
      tzMid.className = 'tapzone tapzone--mid';
      tzMid.style.pointerEvents = 'none';
      const tzFwd = document.createElement('div');
      tzFwd.className = 'tapzone tapzone--fwd';
      tzBack.addEventListener('click', this._onTapBack);
      tzFwd.addEventListener('click', this._onTapForward);
      tapzones.append(tzBack, tzMid, tzFwd);

      // Overlay: compact, solid black, with clickable controls.
      const overlay = document.createElement('div');
      overlay.className = 'overlay export-hidden';
      overlay.setAttribute('role', 'toolbar');
      overlay.setAttribute('aria-label', 'Deck controls');
      overlay.innerHTML = `
        <button class="btn prev" type="button" aria-label="Previous slide" title="Previous (←)">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 3L5 8l5 5"/></svg>
        </button>
        <span class="count" aria-live="polite"><span class="current">1</span><span class="sep">/</span><span class="total">1</span></span>
        <button class="btn next" type="button" aria-label="Next slide" title="Next (→)">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 3l5 5-5 5"/></svg>
        </button>
        <span class="divider"></span>
        <button class="btn reset" type="button" aria-label="Reset to first slide" title="Reset (R)">Reset<span class="kbd">R</span></button>
      `;
      overlay.querySelector('.prev').addEventListener('click', () => this._go(this._index - 1, 'click'));
      overlay.querySelector('.next').addEventListener('click', () => this._go(this._index + 1, 'click'));
      overlay.querySelector('.reset').addEventListener('click', () => this._go(0, 'click'));
      this._root.append(style, stage, tapzones, overlay);
      this._canvas = canvas;
      this._slot = slot;
      this._overlay = overlay;
      this._countEl = overlay.querySelector('.current');
      this._totalEl = overlay.querySelector('.total');
    }

    /** @page must live in the document stylesheet — it's a no-op inside
     *  shadow DOM. Inject/update a single <head> style tag so the print
     *  sheet matches the design size and Save-as-PDF yields one slide per
     *  page with no margins. */
    _syncPrintPageRule() {
      const id = 'deck-stage-print-page';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
        document.head.appendChild(tag);
      }
      tag.textContent = '@page { size: ' + this.designWidth + 'px ' + this.designHeight + 'px; margin: 0; } ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; overflow: visible !important; height: auto !important; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; } }';
    }
    _onSlotChange() {
      this._collectSlides();
      this._restoreIndex();
      this._applyIndex({
        showOverlay: false,
        broadcast: true,
        reason: 'init'
      });
      this._fit();
    }
    _collectSlides() {
      const assigned = this._slot.assignedElements({
        flatten: true
      });
      this._slides = assigned.filter(el => {
        // Skip template/style/script nodes even if someone slots them.
        const tag = el.tagName;
        return tag !== 'TEMPLATE' && tag !== 'SCRIPT' && tag !== 'STYLE';
      });
      this._slides.forEach((slide, i) => {
        const n = i + 1;
        // Determine a label for comment flow: prefer explicit data-label,
        // then an existing data-screen-label, then first heading, else "Slide".
        let label = slide.getAttribute('data-label');
        if (!label) {
          const existing = slide.getAttribute('data-screen-label');
          if (existing) {
            // Strip any leading number the author may have included.
            label = existing.replace(/^\s*\d+\s*/, '').trim() || existing;
          }
        }
        if (!label) {
          const h = slide.querySelector('h1, h2, h3, [data-title]');
          if (h) label = (h.textContent || '').trim().slice(0, 40);
        }
        if (!label) label = 'Slide';
        slide.setAttribute('data-screen-label', `${pad2(n)} ${label}`);

        // Validation attribute for comment flow / auto-checks.
        if (!slide.hasAttribute('data-om-validate')) {
          slide.setAttribute('data-om-validate', VALIDATE_ATTR);
        }
        slide.setAttribute('data-deck-slide', String(i));
      });
      if (this._totalEl) this._totalEl.textContent = String(this._slides.length || 1);
      if (this._index >= this._slides.length) this._index = Math.max(0, this._slides.length - 1);
    }
    _loadNotes() {
      const tag = document.getElementById('speaker-notes');
      if (!tag) {
        this._notes = [];
        return;
      }
      try {
        const parsed = JSON.parse(tag.textContent || '[]');
        if (Array.isArray(parsed)) this._notes = parsed;
      } catch (e) {
        console.warn('[deck-stage] Failed to parse #speaker-notes JSON:', e);
        this._notes = [];
      }
    }
    _restoreIndex() {
      try {
        const raw = localStorage.getItem(this._storageKey);
        if (raw != null) {
          const n = parseInt(raw, 10);
          if (Number.isFinite(n) && n >= 0 && n < this._slides.length) {
            this._index = n;
          }
        }
      } catch (e) {/* ignore */}
    }
    _persistIndex() {
      try {
        localStorage.setItem(this._storageKey, String(this._index));
      } catch (e) {/* ignore */}
    }
    _applyIndex({
      showOverlay = true,
      broadcast = true,
      reason = 'init'
    } = {}) {
      if (!this._slides.length) return;
      const prev = this._prevIndex == null ? -1 : this._prevIndex;
      const curr = this._index;
      this._slides.forEach((s, i) => {
        if (i === curr) s.setAttribute('data-deck-active', '');else s.removeAttribute('data-deck-active');
      });
      if (this._countEl) this._countEl.textContent = String(curr + 1);
      this._persistIndex();
      if (broadcast) {
        // (1) Legacy: host-window postMessage for speaker-notes renderers.
        try {
          window.postMessage({
            slideIndexChanged: curr
          }, '*');
        } catch (e) {}

        // (2) In-page CustomEvent on the <deck-stage> element itself.
        //     Bubbles and composes out of shadow DOM so slide code can listen:
        //       document.querySelector('deck-stage').addEventListener('slidechange', e => {
        //         e.detail.index, e.detail.previousIndex, e.detail.total, e.detail.slide, e.detail.reason
        //       });
        const detail = {
          index: curr,
          previousIndex: prev,
          total: this._slides.length,
          slide: this._slides[curr] || null,
          previousSlide: prev >= 0 ? this._slides[prev] || null : null,
          reason: reason // 'init' | 'keyboard' | 'click' | 'tap' | 'api'
        };
        this.dispatchEvent(new CustomEvent('slidechange', {
          detail,
          bubbles: true,
          composed: true
        }));
      }
      this._prevIndex = curr;
      if (showOverlay) this._flashOverlay();
    }
    _flashOverlay() {
      if (!this._overlay) return;
      this._overlay.setAttribute('data-visible', '');
      if (this._hideTimer) clearTimeout(this._hideTimer);
      this._hideTimer = setTimeout(() => {
        this._overlay.removeAttribute('data-visible');
      }, OVERLAY_HIDE_MS);
    }
    _fit() {
      if (!this._canvas) return;
      // PPTX export sets noscale so the DOM capture sees authored-size
      // geometry — the scaled canvas is in shadow DOM, so the exporter's
      // resetTransformSelector can't reach .canvas.style.transform directly.
      if (this.hasAttribute('noscale')) {
        this._canvas.style.transform = 'none';
        return;
      }
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const s = Math.min(vw / this.designWidth, vh / this.designHeight);
      this._canvas.style.transform = `scale(${s})`;
    }
    _onResize() {
      this._fit();
    }
    _onMouseMove() {
      // Keep overlay visible while mouse moves; hide after idle.
      this._flashOverlay();
    }
    _onTapBack(e) {
      e.preventDefault();
      this._go(this._index - 1, 'tap');
    }
    _onTapForward(e) {
      e.preventDefault();
      this._go(this._index + 1, 'tap');
    }
    _onKey(e) {
      // Ignore when the user is typing.
      const t = e.target;
      if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const key = e.key;
      let handled = true;
      if (key === 'ArrowRight' || key === 'PageDown' || key === ' ' || key === 'Spacebar') {
        this._go(this._index + 1, 'keyboard');
      } else if (key === 'ArrowLeft' || key === 'PageUp') {
        this._go(this._index - 1, 'keyboard');
      } else if (key === 'Home') {
        this._go(0, 'keyboard');
      } else if (key === 'End') {
        this._go(this._slides.length - 1, 'keyboard');
      } else if (key === 'r' || key === 'R') {
        this._go(0, 'keyboard');
      } else if (/^[0-9]$/.test(key)) {
        // 1..9 jump to that slide; 0 jumps to 10.
        const n = key === '0' ? 9 : parseInt(key, 10) - 1;
        if (n < this._slides.length) this._go(n, 'keyboard');
      } else {
        handled = false;
      }
      if (handled) {
        e.preventDefault();
        this._flashOverlay();
      }
    }
    _go(i, reason = 'api') {
      if (!this._slides.length) return;
      const clamped = Math.max(0, Math.min(this._slides.length - 1, i));
      if (clamped === this._index) {
        this._flashOverlay();
        return;
      }
      this._index = clamped;
      this._applyIndex({
        showOverlay: true,
        broadcast: true,
        reason
      });
    }

    // Public API ------------------------------------------------------------

    /** Current slide index (0-based). */
    get index() {
      return this._index;
    }
    /** Total slide count. */
    get length() {
      return this._slides.length;
    }
    /** Programmatically navigate. */
    goTo(i) {
      this._go(i, 'api');
    }
    next() {
      this._go(this._index + 1, 'api');
    }
    prev() {
      this._go(this._index - 1, 'api');
    }
    reset() {
      this._go(0, 'api');
    }
  }
  if (!customElements.get('deck-stage')) {
    customElements.define('deck-stage', DeckStage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "slides/deck-stage.js", error: String((e && e.message) || e) }); }

// ui_kits/website/BookingSheet.jsx
try { (() => {
const {
  useState
} = React;
window.BookingSheet = function BookingSheet({
  open,
  onClose
}) {
  const [step, setStep] = useState(1);
  const [service, setService] = useState("Haushalt");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  if (!open) return null;
  const reset = () => {
    setStep(1);
    setDone(false);
    setName("");
    setEmail("");
    onClose();
  };
  return /*#__PURE__*/React.createElement("div", {
    onClick: reset,
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(29,29,29,0.5)",
      backdropFilter: "blur(4px)",
      zIndex: 100,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: "#fffdfa",
      borderRadius: 28,
      width: "100%",
      maxWidth: 520,
      padding: 36,
      position: "relative",
      overflow: "hidden",
      boxShadow: "0 24px 60px rgba(77,54,30,0.30)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: 5,
      background: "linear-gradient(90deg, #e39f9a 0%, #f4b896 20%, #ffe28d 40%, #98d7c2 60%, #78a5dc 80%, #b89bca 100%)"
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: reset,
    style: {
      position: "absolute",
      top: 18,
      right: 18,
      background: "transparent",
      border: "none",
      fontSize: 24,
      cursor: "pointer",
      color: "#4a4846",
      lineHeight: 1
    }
  }, "\xD7"), done ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Caveat, cursive",
      fontSize: 36,
      color: "#1d1d1d"
    }
  }, "Danke, ", name || "du", "!"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "Dosis, sans-serif",
      fontSize: 28,
      color: "#1d1d1d",
      margin: "8px 0 12px",
      letterSpacing: "-0.01em"
    }
  }, "Wir melden uns zur\xFCck."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "Open Sans, sans-serif",
      fontSize: 15,
      color: "#4a4846",
      lineHeight: 1.6
    }
  }, "In der Regel innerhalb von 24 Stunden, immer werktags. Dein Anliegen: ", /*#__PURE__*/React.createElement("strong", null, service), "."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: reset
  }, "Schlie\xDFen"))) : step === 1 ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Open Sans, sans-serif",
      fontSize: 12,
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "0.12em",
      color: "#7a736c"
    }
  }, "Schritt 1 von 2"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "Dosis, sans-serif",
      fontSize: 30,
      color: "#1d1d1d",
      margin: "6px 0 8px",
      letterSpacing: "-0.01em"
    }
  }, "Was brauchst du?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "Open Sans, sans-serif",
      fontSize: 14,
      color: "#4a4846",
      marginBottom: 20
    }
  }, "W\xE4hl einfach \u2014 wir kl\xE4ren Details im Gespr\xE4ch."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      flexWrap: "wrap",
      marginBottom: 28
    }
  }, ["Haushalt", "Begleitung", "Pflegefachwissen", "Mehreres"].map(s => /*#__PURE__*/React.createElement(Pill, {
    key: s,
    active: service === s,
    onClick: () => setService(s)
  }, s))), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    icon: "arrow",
    onClick: () => setStep(2)
  }, "Weiter")) : /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Open Sans, sans-serif",
      fontSize: 12,
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "0.12em",
      color: "#7a736c"
    }
  }, "Schritt 2 von 2"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "Dosis, sans-serif",
      fontSize: 30,
      color: "#1d1d1d",
      margin: "6px 0 16px",
      letterSpacing: "-0.01em"
    }
  }, "Wie erreichen wir dich?"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontFamily: "Open Sans, sans-serif",
      fontSize: 12,
      fontWeight: 700,
      color: "#1d1d1d",
      display: "block",
      marginBottom: 4
    }
  }, "Dein Name"), /*#__PURE__*/React.createElement("input", {
    value: name,
    onChange: e => setName(e.target.value),
    placeholder: "Vor- und Nachname",
    style: {
      fontFamily: "Open Sans, sans-serif",
      fontSize: 15,
      background: "#fffdfa",
      border: "1.5px solid #ecdfce",
      borderRadius: 12,
      padding: "12px 14px",
      color: "#1d1d1d",
      width: "100%",
      outline: "none"
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: {
      fontFamily: "Open Sans, sans-serif",
      fontSize: 12,
      fontWeight: 700,
      color: "#1d1d1d",
      display: "block",
      marginBottom: 4
    }
  }, "E-Mail oder Telefon"), /*#__PURE__*/React.createElement("input", {
    value: email,
    onChange: e => setEmail(e.target.value),
    placeholder: "du@example.de",
    style: {
      fontFamily: "Open Sans, sans-serif",
      fontSize: 15,
      background: "#fffdfa",
      border: "1.5px solid #ecdfce",
      borderRadius: 12,
      padding: "12px 14px",
      color: "#1d1d1d",
      width: "100%",
      outline: "none"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => setStep(1)
  }, "Zur\xFCck"), /*#__PURE__*/React.createElement(Button, {
    icon: "arrow",
    onClick: () => setDone(true)
  }, "Absenden")))));
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/BookingSheet.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/CTABlock.jsx
try { (() => {
window.CTABlock = function CTABlock({
  onBook
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "#fffaf6",
      padding: "40px 24px 80px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1160,
      margin: "0 auto",
      background: "#ffe28d",
      borderRadius: 32,
      padding: "64px 56px",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: 6,
      background: "linear-gradient(90deg, #e39f9a 0%, #f4b896 20%, #ffe28d 40%, #98d7c2 60%, #78a5dc 80%, #b89bca 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr",
      gap: 48,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Caveat, cursive",
      fontSize: 28,
      color: "#1d1d1d",
      marginBottom: 4
    }
  }, "Bereit?"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "Dosis, sans-serif",
      fontWeight: 700,
      fontSize: 52,
      lineHeight: 1.05,
      letterSpacing: "-0.01em",
      color: "#1d1d1d",
      margin: 0,
      textWrap: "balance"
    }
  }, "Erz\xE4hl uns, was du brauchst. Wir melden uns zur\xFCck."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "Open Sans, sans-serif",
      fontSize: 18,
      lineHeight: 1.55,
      color: "#1d1d1d",
      marginTop: 16,
      maxWidth: "48ch"
    }
  }, "Kostenloses Erstgespr\xE4ch, kein Kleingedrucktes, keine Bindung. Du kannst jederzeit wieder aufh\xF6ren."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginTop: 28,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "dark",
    size: "lg",
    icon: "arrow",
    onClick: onBook
  }, "Termin buchen"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg"
  }, "030 1234 5678"))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-square.png",
    alt: "",
    style: {
      width: 220,
      height: 220,
      objectFit: "contain"
    }
  })))));
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/CTABlock.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
window.Footer = function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "#1d1d1d",
      color: "#fffaf6",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 4,
      background: "linear-gradient(90deg, #e39f9a 0%, #f4b896 20%, #ffe28d 40%, #98d7c2 60%, #78a5dc 80%, #b89bca 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "64px 24px 32px",
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-square.png",
    alt: "",
    style: {
      width: 40,
      height: 40,
      filter: "brightness(0) invert(1) drop-shadow(0 0 0 transparent)",
      display: "none"
    }
  }), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-square.png",
    alt: "",
    style: {
      width: 40,
      height: 40
    }
  }), /*#__PURE__*/React.createElement(Wordmark, {
    size: 20,
    onDark: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Caveat, cursive",
      fontSize: 24,
      color: "#ffe28d",
      marginTop: 6
    }
  }, "F\xFCr alle, die Vielfalt l(i)eben!"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "Open Sans, sans-serif",
      fontSize: 14,
      color: "#fffaf6cc",
      marginTop: 14,
      lineHeight: 1.6,
      maxWidth: "38ch"
    }
  }, "Queere Alltagshilfe in Berlin. Haushalt \xB7 Begleitung \xB7 Pflegefachwissen. Seit 2023.")), [{
    title: "Leistungen",
    items: ["Haushalt", "Begleitung", "Pflegefachwissen", "Preise"]
  }, {
    title: "Über uns",
    items: ["Team", "Jobs", "Presse", "Blog"]
  }, {
    title: "Kontakt",
    items: ["hallo@allefarben.de", "030 1234 5678", "Mo–Fr · 9–18 Uhr", "Friedrichshain"]
  }].map(col => /*#__PURE__*/React.createElement("div", {
    key: col.title
  }, /*#__PURE__*/React.createElement("h5", {
    style: {
      fontFamily: "Dosis, sans-serif",
      fontSize: 13,
      textTransform: "uppercase",
      letterSpacing: "0.1em",
      color: "#fffaf6aa",
      marginBottom: 14,
      fontWeight: 700
    }
  }, col.title), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: 0
    }
  }, col.items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      fontFamily: "Open Sans, sans-serif",
      fontSize: 14,
      lineHeight: 2,
      color: "#fffaf6"
    }
  }, i)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "20px 24px",
      borderTop: "1px solid #ffffff1f",
      display: "flex",
      justifyContent: "space-between",
      fontFamily: "Open Sans, sans-serif",
      fontSize: 12,
      color: "#fffaf699"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 AlleFarben Alltagshilfe"), /*#__PURE__*/React.createElement("span", null, "Impressum \xB7 Datenschutz \xB7 Barrierefreiheit")));
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/FounderBlock.jsx
try { (() => {
window.FounderBlock = function FounderBlock() {
  return /*#__PURE__*/React.createElement(Section, {
    id: "team",
    bg: "#fffaf6"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.1fr",
      gap: 64,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 24,
      overflow: "hidden",
      aspectRatio: "4/5",
      boxShadow: "0 14px 36px rgba(77,54,30,0.14)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/img-andreas-portrait.png",
    alt: "Andreas, Gr\xFCnder",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: -18,
      right: -18,
      background: "#ffe28d",
      borderRadius: "50%",
      width: 110,
      height: 110,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      fontFamily: "Caveat, cursive",
      fontSize: 20,
      fontWeight: 700,
      color: "#1d1d1d",
      lineHeight: 1.1,
      padding: 14,
      transform: "rotate(8deg)",
      boxShadow: "0 6px 18px rgba(77,54,30,0.14)"
    }
  }, "Hi, ich bin Andreas!")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Open Sans, sans-serif",
      fontSize: 13,
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "0.12em",
      color: "#7a736c",
      marginBottom: 12
    }
  }, "Warum es uns gibt"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "Dosis, sans-serif",
      fontWeight: 700,
      fontSize: 42,
      lineHeight: 1.1,
      letterSpacing: "-0.01em",
      color: "#1d1d1d",
      margin: 0,
      textWrap: "balance"
    }
  }, "Niemand sollte erkl\xE4ren m\xFCssen, wer er ist \u2014 schon gar nicht in der eigenen K\xFCche."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "Open Sans, sans-serif",
      fontSize: 17,
      lineHeight: 1.7,
      color: "#1d1d1d",
      marginTop: 20,
      maxWidth: "56ch"
    }
  }, "Als examinierter Pfleger habe ich zu oft gesehen, wie queere Menschen im Alter wieder in den Schrank zur\xFCck mussten, nur um Hilfe zu bekommen. Deshalb gibt es ", /*#__PURE__*/React.createElement("strong", null, "AlleFarben"), ": Alltagshilfe in Berlin von Kolleg:innen, bei denen du du sein kannst."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "Open Sans, sans-serif",
      fontSize: 17,
      lineHeight: 1.7,
      color: "#4a4846",
      marginTop: 16,
      maxWidth: "56ch"
    }
  }, "Wir sind klein, wir sind solidarisch, und wir sind genau so bunt wie unser Name."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginTop: 28,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Pill, {
    color: "#ffe28d"
  }, "Examinierter Pfleger"), /*#__PURE__*/React.createElement(Pill, {
    color: "#98d7c2"
  }, "Berlin \xB7 seit 2023"), /*#__PURE__*/React.createElement(Pill, {
    color: "#b89bca"
  }, "Team von 8")))));
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/FounderBlock.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
window.Hero = function Hero({
  onBook
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "#fffaf6",
      padding: "80px 24px 96px",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1160,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1.05fr 1fr",
      gap: 56,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Open Sans, sans-serif",
      fontSize: 13,
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "0.12em",
      color: "#7a736c",
      marginBottom: 18
    }
  }, "Berlins erste queere Alltagshilfe"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "Dosis, sans-serif",
      fontWeight: 700,
      fontSize: 68,
      lineHeight: 1.05,
      letterSpacing: "-0.01em",
      color: "#1d1d1d",
      margin: 0,
      textWrap: "balance"
    }
  }, "F\xFCr alle, die Vielfalt", " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#e39f9a"
    }
  }, "l(i)eben"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "Open Sans, sans-serif",
      fontSize: 20,
      lineHeight: 1.55,
      color: "#4a4846",
      marginTop: 24,
      maxWidth: "32ch",
      textWrap: "pretty"
    }
  }, "Haushalt, Begleitung und Pflegefachwissen \u2014 von Kolleg:innen, die dich nicht erkl\xE4ren lassen, was Community hei\xDFt."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginTop: 32,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    icon: "arrow",
    onClick: onBook
  }, "Termin buchen"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "secondary"
  }, "So arbeiten wir")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 20,
      marginTop: 32,
      alignItems: "center",
      color: "#4a4846",
      fontFamily: "Open Sans, sans-serif",
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u2713 Berlin-weit"), /*#__PURE__*/React.createElement("span", null, "\u2713 Du-Form, immer"), /*#__PURE__*/React.createElement("span", null, "\u2713 Ab 18 \u20AC/h"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 28,
      overflow: "hidden",
      boxShadow: "0 14px 36px rgba(77,54,30,0.14)",
      aspectRatio: "4/5"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/img-shopping-help.png",
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: -24,
      left: -24,
      background: "#ffe28d",
      padding: "18px 22px",
      borderRadius: 20,
      fontFamily: "Caveat, cursive",
      fontSize: 28,
      fontWeight: 700,
      color: "#1d1d1d",
      boxShadow: "0 6px 18px rgba(77,54,30,0.14)",
      transform: "rotate(-3deg)",
      maxWidth: 240,
      lineHeight: 1.1
    }
  }, "Alltagshilfe, die dich versteht."))));
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Navbar.jsx
try { (() => {
window.Navbar = function Navbar({
  active = "start",
  onNav,
  onBook
}) {
  const links = [{
    id: "start",
    label: "Start"
  }, {
    id: "leistungen",
    label: "Leistungen"
  }, {
    id: "team",
    label: "Über uns"
  }, {
    id: "jobs",
    label: "Jobs"
  }, {
    id: "kontakt",
    label: "Kontakt"
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: "rgba(255, 250, 246, 0.88)",
      backdropFilter: "blur(10px)",
      WebkitBackdropFilter: "blur(10px)",
      borderBottom: "1px solid #ecdfce"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      padding: "14px 24px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#start",
    onClick: e => {
      e.preventDefault();
      onNav?.("start");
    },
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-square.png",
    alt: "",
    style: {
      width: 36,
      height: 36
    }
  }), /*#__PURE__*/React.createElement(Wordmark, {
    size: 18
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 26
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.id,
    href: `#${l.id}`,
    onClick: e => {
      e.preventDefault();
      onNav?.(l.id);
    },
    style: {
      fontFamily: "Dosis, sans-serif",
      fontWeight: 600,
      fontSize: 15,
      color: "#1d1d1d",
      textDecoration: active === l.id ? "underline" : "none",
      textDecorationColor: "#ffe28d",
      textDecorationThickness: 3,
      textUnderlineOffset: 6,
      paddingBottom: 2
    }
  }, l.label))), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: onBook
  }, "Termin buchen")), /*#__PURE__*/React.createElement(RainbowBar, {
    height: 3
  }));
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Navbar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Primitives.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;

// Reusable Button
window.Button = function Button({
  variant = "primary",
  size = "md",
  children,
  onClick,
  icon,
  ...rest
}) {
  const base = {
    fontFamily: "Dosis, system-ui, sans-serif",
    fontWeight: 700,
    border: "none",
    borderRadius: 999,
    cursor: "pointer",
    transition: "all 200ms cubic-bezier(0.22, 1, 0.36, 1)",
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    letterSpacing: "0.005em",
    textDecoration: "none"
  };
  const sizes = {
    sm: {
      padding: "8px 16px",
      fontSize: 13
    },
    md: {
      padding: "12px 22px",
      fontSize: 15
    },
    lg: {
      padding: "16px 30px",
      fontSize: 18
    }
  };
  const variants = {
    primary: {
      background: "#ffe28d",
      color: "#1d1d1d",
      boxShadow: "0 2px 6px rgba(77,54,30,0.10)"
    },
    secondary: {
      background: "transparent",
      color: "#1d1d1d",
      border: "1.5px solid #1d1d1d"
    },
    ghost: {
      background: "#fef3e8",
      color: "#1d1d1d"
    },
    dark: {
      background: "#1d1d1d",
      color: "#fffaf6"
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    onClick: onClick,
    style: {
      ...base,
      ...sizes[size],
      ...variants[variant]
    },
    onMouseEnter: e => {
      if (variant === "primary") {
        e.currentTarget.style.background = "#fcd66b";
        e.currentTarget.style.boxShadow = "0 10px 28px rgba(77,54,30,0.16)";
        e.currentTarget.style.transform = "translateY(-1px)";
      }
    },
    onMouseLeave: e => {
      if (variant === "primary") {
        e.currentTarget.style.background = "#ffe28d";
        e.currentTarget.style.boxShadow = "0 2px 6px rgba(77,54,30,0.10)";
        e.currentTarget.style.transform = "translateY(0)";
      }
    }
  }, rest), children, icon === "arrow" && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700
    }
  }, "\u2192"));
};

// Pill
window.Pill = function Pill({
  color = "#fef3e8",
  textColor = "#1d1d1d",
  active,
  children,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      fontFamily: "Open Sans, system-ui, sans-serif",
      fontSize: 13,
      fontWeight: 700,
      padding: "7px 14px",
      borderRadius: 999,
      background: active ? "#1d1d1d" : color,
      color: active ? "#ffe28d" : textColor,
      border: "none",
      cursor: onClick ? "pointer" : "default",
      transition: "all 200ms"
    }
  }, children);
};

// Section wrapper
window.Section = function Section({
  bg = "#fffaf6",
  children,
  style = {},
  id
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    style: {
      background: bg,
      padding: "80px 24px",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1160,
      margin: "0 auto"
    }
  }, children));
};

// Small rainbow bar
window.RainbowBar = function RainbowBar({
  height = 4,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height,
      background: "linear-gradient(90deg, #e39f9a 0%, #f4b896 20%, #ffe28d 40%, #98d7c2 60%, #78a5dc 80%, #b89bca 100%)",
      ...style
    }
  });
};

// AlleFarben colored wordmark
window.Wordmark = function Wordmark({
  size = 18,
  onDark
}) {
  const base = onDark ? "#fffaf6" : "#1d1d1d";
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "Dosis, sans-serif",
      fontWeight: 700,
      fontSize: size,
      letterSpacing: "0.02em",
      whiteSpace: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: base
    }
  }, "ALLE "), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#e39f9a"
    }
  }, "F"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#f4b896"
    }
  }, "A"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#ffe28d"
    }
  }, "R"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#98d7c2"
    }
  }, "B"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#78a5dc"
    }
  }, "E"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#b89bca"
    }
  }, "N"));
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Primitives.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ServiceCards.jsx
try { (() => {
window.ServiceCards = function ServiceCards() {
  const services = [{
    color: "#e39f9a",
    title: "Haushalt",
    body: "Putzen, Einkaufen, Wäsche, Kochen. Wir machen's mit dir oder für dich — so, wie du es magst.",
    bullets: ["Regelmäßig oder einmalig", "Eigene Reinigungsmittel möglich", "Keine Standard-Checkliste"],
    price: "ab 18 €/h"
  }, {
    color: "#98d7c2",
    title: "Begleitung",
    body: "Zum Amt, zum Arzt, ins Café, zum Späti. Wir sind da, damit du nicht allein losziehen musst.",
    bullets: ["Behördengänge & Übersetzung", "Spaziergänge & Ausflüge", "Auch auf Englisch / Spanisch"],
    price: "ab 22 €/h"
  }, {
    color: "#78a5dc",
    title: "Pflegefachwissen",
    body: "Fragen zu Pflegegrad, Anträgen, SGB XI? Wir beraten queer-sensibel und unabhängig.",
    bullets: ["Pflegegrad-Beratung", "Anträge & Widerspruch", "Vermittlung zu Fachstellen"],
    price: "Erstberatung kostenlos"
  }];
  return /*#__PURE__*/React.createElement(Section, {
    id: "leistungen",
    bg: "#fef3e8"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Open Sans, sans-serif",
      fontSize: 13,
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "0.12em",
      color: "#7a736c",
      marginBottom: 12
    }
  }, "Was wir anbieten"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "Dosis, sans-serif",
      fontWeight: 700,
      fontSize: 44,
      lineHeight: 1.05,
      letterSpacing: "-0.01em",
      color: "#1d1d1d",
      margin: 0,
      maxWidth: 780,
      textWrap: "balance"
    }
  }, "Drei S\xE4ulen. Eine Haltung: du sagst, was du brauchst."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 20,
      marginTop: 48
    }
  }, services.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.title,
    style: {
      background: "#fffdfa",
      borderRadius: 24,
      padding: "28px 24px",
      boxShadow: "0 6px 18px rgba(77,54,30,0.08)",
      display: "flex",
      flexDirection: "column",
      gap: 14,
      position: "relative",
      overflow: "hidden",
      transition: "all 200ms cubic-bezier(0.22, 1, 0.36, 1)"
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = "translateY(-3px)";
      e.currentTarget.style.boxShadow = "0 14px 36px rgba(77,54,30,0.14)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "0 6px 18px rgba(77,54,30,0.08)";
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: 5,
      background: s.color
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "Dosis, sans-serif",
      fontWeight: 700,
      fontSize: 28,
      color: "#1d1d1d",
      letterSpacing: "-0.01em",
      margin: 0
    }
  }, s.title)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "Open Sans, sans-serif",
      fontSize: 15,
      lineHeight: 1.6,
      color: "#4a4846",
      margin: 0
    }
  }, s.body), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, s.bullets.map(b => /*#__PURE__*/React.createElement("li", {
    key: b,
    style: {
      fontFamily: "Open Sans, sans-serif",
      fontSize: 13,
      color: "#1d1d1d",
      display: "flex",
      gap: 8,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: s.color,
      fontWeight: 700
    }
  }, "\u2713"), " ", b))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      paddingTop: 10,
      borderTop: "1px solid #ecdfce",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "Open Sans, sans-serif",
      fontSize: 13,
      fontWeight: 700,
      color: "#1d1d1d"
    }
  }, s.price), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontFamily: "Dosis, sans-serif",
      fontSize: 14,
      fontWeight: 700,
      color: "#1d1d1d",
      textDecoration: "underline",
      textDecorationColor: "#ffe28d",
      textDecorationThickness: 2,
      textUnderlineOffset: 3
    }
  }, "Mehr erfahren \u2192"))))));
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ServiceCards.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Testimonial.jsx
try { (() => {
window.Testimonial = function Testimonial() {
  return /*#__PURE__*/React.createElement(Section, {
    bg: "#f7ede2"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1.4fr",
      gap: 56,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 24,
      overflow: "hidden",
      aspectRatio: "1/1",
      boxShadow: "0 14px 36px rgba(77,54,30,0.14)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/img-couch-portrait.png",
    alt: "",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Dosis, sans-serif",
      fontSize: 120,
      lineHeight: 0.6,
      color: "#ffe28d",
      marginBottom: -10
    }
  }, "\u201E"), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: "Dosis, sans-serif",
      fontWeight: 600,
      fontSize: 34,
      lineHeight: 1.25,
      color: "#1d1d1d",
      letterSpacing: "-0.01em",
      textWrap: "balance"
    }
  }, "Zum ersten Mal seit Jahren muss ich nicht entscheiden, welche Bilder ich von der Wand nehme, bevor jemand zum Helfen kommt."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      fontFamily: "Open Sans, sans-serif",
      fontSize: 15,
      color: "#4a4846"
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "#1d1d1d"
    }
  }, "Micha, 71"), " \xB7 seit 8 Monaten Kund:in \xB7 Sch\xF6neberg"))));
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Testimonial.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Pill = __ds_scope.Pill;

__ds_ns.RainbowBar = __ds_scope.RainbowBar;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

})();
