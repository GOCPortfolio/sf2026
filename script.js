/* =====================================================================
   SONIA & FRANCIS WEDDING INVITATION
   ---------------------------------------------------------------------
   EVERYTHING you may want to change is in the CONFIG object below.
   The code underneath it never needs editing.
   ===================================================================== */
const CONFIG = {
  site: {
    // The address where the website will live (needed for WhatsApp link previews and sharing).
    url: 'https://gocportfolio.github.io/sf2026/',
    ogImage: 'assets/og-image-2.jpg'
  },

  couple: {
    hashtag: '#SOFIZZY2026',
    tagline: 'A chapter written in love',
    seal: 'S & F',
    names: 'Sonia & Francis',
    bride: { title: 'Miss', given: 'Sonia Chidinma', surname: 'Osademe', hero: 'Sonia',
             parents: 'Daughter of Mr & Late Mrs Augustine Onyebuchukwu Osademe' },
    groom: { title: 'Mr', given: 'Francis Chibueze', surname: 'Francis', hero: 'Francis',
             parents: 'Son of Mr & Deaconess Charles Chukwudi Francis' }
  },

  event: {
    startISO: '2026-12-03T09:00:00+01:00',   // 3 Dec 2026, 9:00 AM Lagos time (UTC+1)
    hours: 5,                                 // length of the calendar entry
    dateLong: 'Thursday, 3rd December 2026',
    city: 'Omoku, Rivers State',
    calendarTitle: 'Sonia & Francis: Wedding',
    icsName: 'Sonia-and-Francis-Wedding.ics'
  },

  venues: [
    { label: 'Church Wedding', time: '9:00 AM prompt',
      name: 'Power of God Evangelistic Outreach', sub: 'a.k.a. Dunamis Chapel',
      address: 'Plot 6 Iyasara Street, Omoku, Onelga, Rivers State',
      mapQuery: 'Power of God Evangelistic outreach Dunamis Chapel, Plot 6 Iyasara street omoku Onelga, Rivers state',
      mapsUrl: '' },   // optional: paste a Google Maps share link here to override the search
    { label: 'Traditional Marriage & Reception', time: '2:00 PM',
      name: 'Kins Comprehensive College', sub: '',
      address: 'Kriegani Road, Omoku, Onelga, Rivers State',
      mapQuery: 'Kins Comprehensive college, Kriegani road omoku, Onelga, Rivers state',
      mapsUrl: '' }
  ],

  // Colours of the day (first ones shown on the card and in the FAQ). metal:true gives the gold shine.
  colours: [
    { name: 'White', hex: '#FFFFFF' },
    { name: 'Burgundy', hex: '#6B1232' },
    { name: 'Coffee brown', hex: '#5B3A29' },
    { name: 'Gold', hex: '#C9A24B', metal: true }
  ],

  contact: {
    callRsvp: '09071349133',            // shown on the "Call to RSVP" button
    callTel: '+2349071349133',          // same number in international format
    whatsapp: '2348138317877',          // WhatsApp number, international format, no +
    whatsappDisplay: '0813 831 7877',
    person: 'Stanley',
    personRole: 'the wedding coordinator'
  },

  // Leave names empty ('') to hide the whole section.
  fatherOfDay: { names: '', role: '' },

  vendors: [
    { role: 'Event planner', name: 'SoFizzy' },
    { role: 'Decorator', name: 'Vick Deco' },
    { role: 'Cake & dessert', name: 'De Exquisite' },
    { role: 'Make-up artist', name: 'Sauvity' },
    { role: 'Photography & videography', name: 'Globa Marvel & OBD' },
    { role: "Bride's outfit", name: 'Itohans Signature' },
    { role: "Groom's outfit", name: 'Fashion Killa Luxury' },
    { role: 'Website', name: 'G&C' }          // developer credit (kept as the last item)
  ],

  gifts: {
    bank: 'United Bank for Africa (UBA)',
    accountName: 'Francis Chibueze',
    accountNumber: '2224459930',
    message: 'Your presence is the greatest gift. Should you wish to bless us further, you may do so with the account below.'
  },

  story: {
    intro: 'May our love be stronger than every storm, deeper than every ocean, and sweeter with every passing year.',
    moments: [
      { label: 'Where it began', title: 'Coursemates', text: 'We met in school as coursemates.', photo: 'gallery-04', tw: 480, th: 719, alt: 'Sonia smiling in white and coral beads, with Francis smiling behind her' },
      { label: 'Friends first', title: 'Just friends', text: 'We were just friends for about 5 months.', photo: 'gallery-07', tw: 480, th: 705, alt: 'Francis adjusting his red cap while Sonia smiles behind him' },
      { label: 'Five years of love', title: 'Dating', text: 'We dated for 5 years.', photo: 'gallery-03', tw: 480, th: 614, alt: 'Sonia and Francis holding hands in a bright hallway' }
    ],
    closing: "It's been a chapter written in love"
  },

  // Gallery: portrait and landscape photos are interleaved. "photo" is the file name in assets/ (a -sm thumbnail is used in the grid).
  gallery: [
    { photo: 'gallery-02', w: 854, h: 1280, tw: 480, th: 719, alt: 'Sonia and Francis sharing a joyful look, holding a hand-painted fan' },
    { photo: 'gallery-08', w: 880, h: 670, tw: 560, th: 426, alt: 'Sonia and Francis smiling together in black and gold lion-print attire' },
    { photo: 'gallery-04', w: 854, h: 1280, tw: 480, th: 719, alt: 'Sonia in white and coral beads, with Francis smiling behind her' },
    { photo: 'gallery-09', w: 880, h: 660, tw: 560, th: 420, alt: 'Sonia and Francis face to face in warm golden light' },
    { photo: 'gallery-03', w: 900, h: 1152, tw: 480, th: 614, alt: 'Sonia and Francis facing each other and holding hands in white traditional attire' },
    { photo: 'gallery-06', w: 854, h: 1280, tw: 480, th: 719, alt: 'Francis holding a decorated fan while Sonia smiles behind him' },
    { photo: 'gallery-07', w: 872, h: 1280, tw: 480, th: 705, alt: 'Francis adjusting his red cap while Sonia smiles at the camera' }
  ],
  photoCredit: 'Photography: Globa Marvel',

  toast: [
    'May our love be stronger than every storm,',
    'deeper than every ocean,',
    'and sweeter with every passing year.',
    'May nothing quench the love God has planted in our hearts.',
    "Here's to forever,",
    'together in love and faith. Amen.'
  ],

  faq: [
    { q: 'Dress code', a: ['Please dress in the colours of the day: gold, burgundy and brown, with touches of white.'], swatches: true },
    { q: 'Parking', a: ['Parking is limited, so please arrive early.'] },
    { q: 'Accommodation', a: ['The marriage team is lodging at The Palms Hotel. Some guests can also lodge at Kings Resort.'] },
    { q: 'Contact person', contact: true }
  ],

  rsvp: {
    // Paste your Google Apps Script Web App URL here (see README.md). Empty = friendly fallback message.
    endpoint: 'https://script.google.com/macros/s/AKfycbwLL5CmmqIIMTt5-Y3Cs-GlyfTEZOdewK4jzVUKFCebA79o4ze-4wS7n01xAmHwJEzG/exec',
    maxGuests: 10
  },

  footer: {
    thanks: 'Thank you for celebrating with us. Your love and prayers mean the world to us.'
  },

  share: {
    message: 'You are invited to celebrate the union of Sonia & Francis in marriage. #SOFIZZY2026'
  },

  music: { src: 'assets/music.mp3', volume: 0.55 }
};

/* =====================================================================
   APP CODE (no need to edit below this line)
   ===================================================================== */
(function () {
  'use strict';
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const C = CONFIG;
  const params = new URLSearchParams(location.search);

  function get(path) {
    return path.split('.').reduce((o, k) => (o == null ? o : o[k]), C);
  }
  function el(tag, cls, text) {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } }
  function siteUrl() {
    const u = C.site.url;
    return (u && u.indexOf('__') !== 0) ? u : (location.origin + location.pathname);
  }
  function toast(msg) {
    const t = $('#toast');
    t.textContent = msg; t.classList.add('show');
    clearTimeout(toast._t); toast._t = setTimeout(() => t.classList.remove('show'), 2400);
  }

  /* ---------- fill simple text ---------- */
  function fill() {
    $$('[data-cfg]').forEach(n => { const v = get(n.getAttribute('data-cfg')); if (v != null) n.textContent = v; });
    const b = C.couple.bride, g = C.couple.groom;
    $('#brideTitle').textContent = b.title; $('#brideGiven').textContent = b.given;
    $('#brideSurname').textContent = b.surname; $('#brideParents').textContent = b.parents;
    $('#groomTitle').textContent = g.title; $('#groomGiven').textContent = g.given;
    $('#groomSurname').textContent = g.surname; $('#groomParents').textContent = g.parents;
    $('#giftMsg').textContent = C.gifts.message;
    $('#photoCredit').textContent = C.photoCredit || '';
    if (!C.photoCredit) $('#photoCredit').hidden = true;
  }

  function swatchItem(c, withLabel) {
    const li = el('li');
    const s = el('span', 'sw' + (c.metal ? ' metal' : ''));
    s.style.background = c.hex; s.setAttribute('role', 'img'); s.setAttribute('aria-label', c.name);
    li.appendChild(s);
    if (withLabel !== false) li.appendChild(document.createTextNode(c.name));
    return li;
  }

  /* ---------- sections ---------- */
  function renderSwatches() {
    const ul = $('#cardSwatches');
    C.colours.forEach(c => ul.appendChild(swatchItem(c)));
  }
  function mapsLinks(v) {
    const q = encodeURIComponent(v.mapQuery);
    return {
      open: v.mapsUrl || ('https://www.google.com/maps/search/?api=1&query=' + q),
      dir: 'https://www.google.com/maps/dir/?api=1&destination=' + q
    };
  }
  function renderVenues() {
    const box = $('#venues');
    C.venues.forEach(v => {
      const card = el('article', 'venue reveal');
      card.appendChild(el('p', 'v-label', v.label));
      card.appendChild(el('p', 'v-time', v.time));
      card.appendChild(el('h3', 'v-name', v.name));
      if (v.sub) card.appendChild(el('p', 'v-sub', v.sub));
      card.appendChild(el('p', 'v-addr', v.address));
      const row = el('div', 'v-btns');
      const L = mapsLinks(v);
      const a1 = el('a', 'btn btn-sm btn-map', 'Open in Google Maps'); a1.href = L.open;
      const a2 = el('a', 'btn btn-sm btn-dir', 'Get directions'); a2.href = L.dir;
      [a1, a2].forEach(a => { a.target = '_blank'; a.rel = 'noopener'; a.setAttribute('aria-label', a.textContent + ': ' + v.name); row.appendChild(a); });
      card.appendChild(row);
      box.appendChild(card);
    });
  }
  function renderFather() {
    const f = C.fatherOfDay;
    if (!f || !f.names) return;
    $('#fatherName').textContent = f.names;
    $('#fatherRole').textContent = f.role || '';
    $('#fatherRole').hidden = !f.role;
    $('#fatherSec').hidden = false;
  }
  function renderStory() {
    const ol = $('#timeline');
    C.story.moments.forEach(m => {
      const li = el('li', 'moment reveal');
      const fig = el('div', 'm-photo');
      const img = el('img'); img.src = 'assets/' + m.photo + '-sm.webp'; img.alt = m.alt; img.width = m.tw; img.height = m.th; img.loading = 'lazy'; img.decoding = 'async';
      fig.appendChild(img); li.appendChild(fig);
      li.appendChild(el('p', 'm-label', m.label));
      li.appendChild(el('h3', 'm-title', m.title));
      li.appendChild(el('p', 'm-text', m.text));
      ol.appendChild(li);
    });
  }
  function renderToast() {
    const box = $('#toastLines');
    C.toast.forEach((t, i) => box.appendChild(el('p', (i === C.toast.length - 1 ? 'last reveal' : 'reveal'), t)));
  }
  function renderVendors() {
    const ul = $('#vendors');
    if (!C.vendors.length) { $('#vendorsSec').hidden = true; return; }
    C.vendors.forEach(v => {
      const li = el('li');
      li.appendChild(el('span', 'v-role', v.role));
      li.appendChild(el('span', 'v-who', v.name));
      ul.appendChild(li);
    });
  }

  /* ---------- gallery + lightbox ---------- */
  let lbIndex = 0, lbOpener = null;
  function renderGallery() {
    const box = $('#gallery');
    C.gallery.forEach((g, i) => {
      const b = el('button', 'g-item'); b.type = 'button';
      b.setAttribute('aria-label', 'View photo ' + (i + 1) + ' of ' + C.gallery.length + ': ' + g.alt);
      const img = el('img'); img.src = 'assets/' + g.photo + '-sm.webp'; img.alt = g.alt;
      img.width = g.tw; img.height = g.th; img.loading = 'lazy'; img.decoding = 'async';
      b.appendChild(img);
      b.addEventListener('click', () => openLb(i, b));
      box.appendChild(b);
    });
  }
  function showLb(i) {
    const n = C.gallery.length;
    lbIndex = (i + n) % n;
    const g = C.gallery[lbIndex];
    const img = $('#lbImg');
    img.src = 'assets/' + g.photo + '.webp'; img.alt = g.alt; img.width = g.w; img.height = g.h;
    $('#lbCap').textContent = g.alt;
    $('#lbCount').textContent = (lbIndex + 1) + ' / ' + n;
    [1, -1].forEach(d => { const p = new Image(); p.src = 'assets/' + C.gallery[(lbIndex + d + n) % n].photo + '.webp'; });
  }
  function openLb(i, opener) {
    lbOpener = opener || document.activeElement;
    $('#lightbox').hidden = false;
    document.documentElement.classList.add('lb-open');
    $('#page').setAttribute('inert', '');
    showLb(i);
    $('#lbClose').focus();
  }
  function closeLb() {
    $('#lightbox').hidden = true;
    document.documentElement.classList.remove('lb-open');
    $('#page').removeAttribute('inert');
    if (lbOpener && lbOpener.focus) lbOpener.focus();
  }
  function initLightbox() {
    const lb = $('#lightbox');
    $('#lbClose').addEventListener('click', closeLb);
    $('#lbPrev').addEventListener('click', () => showLb(lbIndex - 1));
    $('#lbNext').addEventListener('click', () => showLb(lbIndex + 1));
    document.addEventListener('keydown', e => {
      if (lb.hidden) return;
      if (e.key === 'Escape') { e.preventDefault(); closeLb(); }
      else if (e.key === 'ArrowLeft') showLb(lbIndex - 1);
      else if (e.key === 'ArrowRight') showLb(lbIndex + 1);
      else if (e.key === 'Tab') {
        const f = [$('#lbClose'), $('#lbPrev'), $('#lbNext')];
        const i = f.indexOf(document.activeElement);
        e.preventDefault();
        f[(i + (e.shiftKey ? -1 : 1) + f.length) % f.length].focus();
      }
    });
    let sx = null, sy = 0;
    lb.addEventListener('pointerdown', e => { if (e.target.closest('button')) return; sx = e.clientX; sy = e.clientY; });
    lb.addEventListener('pointerup', e => {
      if (sx == null) return;
      const dx = e.clientX - sx, dy = e.clientY - sy; sx = null;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.3) showLb(lbIndex + (dx < 0 ? 1 : -1));
    });
    lb.addEventListener('pointercancel', () => { sx = null; });
    lb.addEventListener('click', e => { if (e.target === lb) closeLb(); });
  }

  /* ---------- FAQ ---------- */
  function renderFaq() {
    const box = $('#faq');
    C.faq.forEach((f, i) => {
      const item = el('div', 'faq-item');
      const h = el('h3'); h.style.margin = '0';
      const btn = el('button', 'faq-q'); btn.type = 'button';
      btn.id = 'faqq' + i; btn.setAttribute('aria-expanded', 'false'); btn.setAttribute('aria-controls', 'faqa' + i);
      btn.appendChild(el('span', null, f.q)); btn.appendChild(el('span', 'pm'));
      h.appendChild(btn);
      const panel = el('div', 'faq-a'); panel.id = 'faqa' + i; panel.setAttribute('role', 'region'); panel.setAttribute('aria-labelledby', btn.id);
      panel.setAttribute('inert', '');
      const inner = el('div', 'faq-a-in');
      (f.a || []).forEach(t => inner.appendChild(el('p', null, t)));
      if (f.swatches) {
        const row = el('ul', 'faq-swatches swatches'); row.style.padding = '0'; row.style.listStyle = 'none';
        C.colours.forEach(c => row.appendChild(swatchItem(c)));
        inner.appendChild(row);
      }
      if (f.contact) {
        const k = C.contact;
        const p = el('p'); p.appendChild(document.createTextNode('For anything on the day, please contact ' + k.person + ', ' + k.personRole + ', on '));
        const a = el('a', null, k.callRsvp); a.href = 'tel:' + k.callTel; p.appendChild(a); p.appendChild(document.createTextNode('.'));
        inner.appendChild(p);
        if (k.whatsapp && k.whatsappDisplay.replace(/\s/g, '') !== k.callRsvp) {
          const p2 = el('p'); p2.appendChild(document.createTextNode('You can also reach us on WhatsApp: '));
          const w = el('a', null, k.whatsappDisplay); w.href = 'https://wa.me/' + k.whatsapp; w.target = '_blank'; w.rel = 'noopener';
          p2.appendChild(w); p2.appendChild(document.createTextNode('.')); inner.appendChild(p2);
        }
      }
      panel.appendChild(inner);
      item.appendChild(h); item.appendChild(panel); box.appendChild(item);
      btn.addEventListener('click', () => toggleFaq(btn, panel));
    });
  }
  function setFaq(btn, panel, open) {
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (open) {
      panel.removeAttribute('inert');
      panel.style.height = panel.scrollHeight + 'px';
      const done = () => { if (btn.getAttribute('aria-expanded') === 'true') panel.style.height = 'auto'; panel.removeEventListener('transitionend', done); };
      reduced ? done() : panel.addEventListener('transitionend', done);
    } else {
      panel.setAttribute('inert', '');
      panel.style.height = panel.scrollHeight + 'px';
      void panel.offsetHeight;
      panel.style.height = '0px';
    }
  }
  function toggleFaq(btn, panel) {
    const willOpen = btn.getAttribute('aria-expanded') !== 'true';
    $$('.faq-q').forEach(b => { if (b !== btn && b.getAttribute('aria-expanded') === 'true') setFaq(b, $('#' + b.getAttribute('aria-controls')), false); });
    setFaq(btn, panel, willOpen);
  }

  /* ---------- countdown + calendar ---------- */
  const startMs = new Date(C.event.startISO).getTime();
  const endMs = startMs + C.event.hours * 3600 * 1000;
  function utcStamp(ms) { return new Date(ms).toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, ''); }
  function icsEscape(s) { return String(s).replace(/\\/g, '\\\\').replace(/;/g, '\\;').replace(/,/g, '\\,').replace(/\r?\n/g, '\\n'); }
  function calDescription() {
    return C.venues.map(v => v.label + ' (' + v.time + '): ' + v.name + (v.sub ? ' ' + v.sub : '') + ', ' + v.address).join('\n') + '\n' + C.couple.hashtag;
  }
  function calLocation() { const v = C.venues[0]; return v.name + ', ' + v.address; }
  function initCalendar() {
    const g = 'https://calendar.google.com/calendar/render?action=TEMPLATE'
      + '&text=' + encodeURIComponent(C.event.calendarTitle)
      + '&dates=' + utcStamp(startMs) + '/' + utcStamp(endMs)
      + '&details=' + encodeURIComponent(calDescription())
      + '&location=' + encodeURIComponent(calLocation());
    $('#gcalBtn').href = g;
    $('#icsBtn').addEventListener('click', () => {
      const lines = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Sonia and Francis//Wedding//EN', 'CALSCALE:GREGORIAN', 'METHOD:PUBLISH', 'BEGIN:VEVENT',
        'UID:' + utcStamp(startMs) + '-sofizzy2026@wedding', 'DTSTAMP:' + utcStamp(Date.now()),
        'DTSTART:' + utcStamp(startMs), 'DTEND:' + utcStamp(endMs),
        'SUMMARY:' + icsEscape(C.event.calendarTitle), 'LOCATION:' + icsEscape(calLocation()), 'DESCRIPTION:' + icsEscape(calDescription()),
        'BEGIN:VALARM', 'TRIGGER:-P1D', 'ACTION:DISPLAY', 'DESCRIPTION:Wedding tomorrow', 'END:VALARM', 'END:VEVENT', 'END:VCALENDAR'];
      const blob = new Blob([lines.join('\r\n')], { type: 'text/calendar;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = el('a'); a.href = url; a.download = C.event.icsName; document.body.appendChild(a); a.click();
      setTimeout(() => { URL.revokeObjectURL(url); a.remove(); }, 1500);
      toast('Calendar file ready');
    });
  }
  function initCountdown() {
    const ids = { d: '#cdD', h: '#cdH', m: '#cdM', s: '#cdS' };
    const last = {};
    function set(k, v) {
      const n = $(ids[k]); const s = String(v).padStart(2, '0');
      if (last[k] !== s) { n.textContent = s; if (last[k] != null && !reduced) { n.classList.remove('flip'); void n.offsetWidth; n.classList.add('flip'); } last[k] = s; }
    }
    function tick() {
      const now = Date.now(), diff = startMs - now;
      if (now >= endMs) { $('#countdown').hidden = true; $('#married').hidden = false; $('#married').textContent = 'We are married!'; return false; }
      if (diff <= 0) { $('#countdown').hidden = true; $('#married').hidden = false; $('#married').textContent = 'Today is the day!'; return true; }
      $('#countdown').hidden = false; $('#married').hidden = true;
      const s = Math.floor(diff / 1000);
      set('d', Math.floor(s / 86400)); set('h', Math.floor(s % 86400 / 3600)); set('m', Math.floor(s % 3600 / 60)); set('s', s % 60);
      return true;
    }
    if (tick()) { const t = setInterval(() => { if (!tick()) clearInterval(t); }, 1000); }
  }

  /* ---------- RSVP ---------- */
  function waRsvpLink() {
    const f = $('#rsvpForm');
    const name = f.name.value.trim();
    const att = (f.querySelector('input[name=attending]:checked') || {}).value;
    const guests = f.guests.value;
    let m = (name ? 'Hello, this is ' + name + '. ' : 'Hello! ') + "I would like to RSVP for " + C.couple.names + "'s wedding on " + C.event.dateLong + '.';
    if (att) m += ' ' + att + '.';
    if (att === 'Joyfully accept' && guests) m += ' Number of guests: ' + guests + '.';
    return 'https://wa.me/' + C.contact.whatsapp + '?text=' + encodeURIComponent(m);
  }
  function initRsvp() {
    const f = $('#rsvpForm');
    const sel = $('#rGuests');
    const ph = el('option', null, 'Select'); ph.value = ''; sel.appendChild(ph);
    for (let i = 1; i <= C.rsvp.maxGuests; i++) { const o = el('option', null, i === 1 ? '1 (just me)' : String(i)); o.value = String(i); sel.appendChild(o); }
    const call = $('#callRsvp'); call.href = 'tel:' + C.contact.callTel;
    const wa = $('#waRsvp'); wa.href = waRsvpLink();
    const refresh = () => { wa.href = waRsvpLink(); };
    f.addEventListener('input', refresh); f.addEventListener('change', refresh);
    wa.addEventListener('click', refresh); wa.addEventListener('pointerdown', refresh);
    f.addEventListener('change', e => {
      if (e.target.name === 'attending') {
        const declining = e.target.value === 'Regretfully decline';
        $('#guestsField').hidden = declining;
        if (declining) sel.value = '';
      }
    });
    const guest = (params.get('guest') || '').trim().slice(0, 60);
    if (guest) f.name.value = guest;

    function setErr(id, input, msg) {
      const p = $('#' + id); p.textContent = msg || '';
      if (input) { if (msg) input.setAttribute('aria-invalid', 'true'); else input.removeAttribute('aria-invalid'); }
      return !msg;
    }
    function validate() {
      const bad = [];
      const att = f.querySelector('input[name=attending]:checked');
      if (!setErr('rNameErr', f.name, f.name.value.trim().length < 2 ? 'Please enter your name.' : '')) bad.push(f.name);
      const digits = f.phone.value.replace(/\D/g, '');
      if (!setErr('rPhoneErr', f.phone, digits.length < 7 ? 'Please enter a phone number we can reach you on.' : '')) bad.push(f.phone);
      if (!setErr('rAttErr', null, att ? '' : 'Please choose one option.')) bad.push(f.querySelector('input[name=attending]'));
      if (att && att.value === 'Joyfully accept') {
        if (!setErr('rGuestsErr', sel, sel.value ? '' : 'Please select how many guests.')) bad.push(sel);
      } else setErr('rGuestsErr', sel, '');
      return bad;
    }
    f.addEventListener('submit', async e => {
      e.preventDefault();
      const note = $('#rsvpNote'); note.textContent = ''; note.classList.remove('bad');
      const bad = validate();
      if (bad.length) { bad[0].focus(); note.textContent = 'Please check the highlighted fields.'; note.classList.add('bad'); return; }
      const att = f.querySelector('input[name=attending]:checked').value;
      const accepted = att === 'Joyfully accept';
      const payload = {
        name: f.name.value.trim(), phone: f.phone.value.trim(), attending: att,
        guests: accepted ? Number(sel.value) : 0, message: f.message.value.trim(),
        website: f.website.value, submittedAt: new Date().toISOString(), page: location.href
      };
      const done = () => {
        f.hidden = true;
        $('#rsvpDoneText').textContent = accepted
          ? 'We have your RSVP, ' + payload.name.split(' ')[0] + '. We cannot wait to celebrate with you!'
          : 'We have your reply, ' + payload.name.split(' ')[0] + '. You will be missed, and we are grateful for your love.';
        $('#rsvpDone').hidden = false;
        $('#rsvpDone').scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'center' });
      };
      if (payload.website) { done(); return; }               // honeypot: pretend success, send nothing
      if (!C.rsvp.endpoint) {
        note.textContent = 'Online RSVP is not switched on yet. Please use the WhatsApp or Call buttons below. Thank you!';
        note.classList.add('bad'); return;
      }
      const btn = $('#rsvpSubmit'); btn.disabled = true; btn.textContent = 'Sending...';
      try {
        await fetch(C.rsvp.endpoint, { method: 'POST', mode: 'no-cors', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify(payload) });
        done();
      } catch (err) {
        note.textContent = 'Sorry, that did not go through. Please try again, or use the WhatsApp or Call buttons below.';
        note.classList.add('bad');
      } finally { btn.disabled = false; btn.textContent = 'Send my RSVP'; }
    });
  }

  /* ---------- gifts + share ---------- */
  function initCopy() {
    $('#copyBtn').addEventListener('click', async () => {
      const text = C.gifts.accountNumber;
      let ok = false;
      try { if (navigator.clipboard && window.isSecureContext) { await navigator.clipboard.writeText(text); ok = true; } } catch (e) { ok = false; }
      if (!ok) {
        const ta = el('textarea'); ta.value = text; ta.setAttribute('readonly', ''); ta.style.cssText = 'position:fixed;top:0;left:0;opacity:0';
        document.body.appendChild(ta); ta.select(); ta.setSelectionRange(0, 99);
        try { ok = document.execCommand('copy'); } catch (e) { ok = false; }
        ta.remove();
      }
      toast(ok ? 'Account number copied' : 'Press and hold the number to copy it');
    });
  }
  function initShare() {
    $('#shareWa').addEventListener('click', () => {
      const text = C.share.message + ' ' + siteUrl();
      window.open('https://wa.me/?text=' + encodeURIComponent(text), '_blank', 'noopener');
    });
  }

  /* ---------- reveal on scroll ---------- */
  function initReveal() {
    const targets = $$('.sec-title,.divider,.sec-sub,.story-intro,.bank-card,.faq,.vendors li,.form,.script-label,.countdown,.gallery,.thanks,.arch,.foot-names');
    targets.forEach(t => t.classList.add('reveal'));
    const all = $$('.reveal');
    if (!('IntersectionObserver' in window) || reduced) { all.forEach(n => n.classList.add('in')); return; }
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    all.forEach(n => io.observe(n));
  }

  /* ---------- guest greeting ---------- */
  function initGuest() {
    const g = (params.get('guest') || '').trim().slice(0, 60);
    if (!g) return;
    const a = $('#introGuest'); a.textContent = 'Dear ' + g; a.hidden = false;
    const b = $('#cardGuest'); b.textContent = 'Dear ' + g + ',';  b.hidden = false;
  }

  /* ---------- music ---------- */
  let audio = null, muted = store('sf-muted') === '1', fadeT = null;
  function paintSound() {
    const b = $('#soundBtn');
    b.classList.toggle('is-muted', muted);
    b.setAttribute('aria-pressed', muted ? 'false' : 'true');
    b.setAttribute('aria-label', 'Background music');
  }
  function fadeTo(target, ms) {
    clearInterval(fadeT);
    if (!audio) return;
    const steps = 20, from = audio.volume, d = (target - from) / steps;
    let i = 0;
    fadeT = setInterval(() => {
      i++; audio.volume = Math.min(1, Math.max(0, from + d * i));
      if (i >= steps) { clearInterval(fadeT); if (target === 0) audio.pause(); }
    }, ms / steps);
  }
  function playMusic() {
    if (muted) return;
    try {
      if (!audio) { audio = new Audio(C.music.src); audio.loop = true; audio.preload = 'auto'; audio.volume = 0; }
      const p = audio.play();
      if (p && p.catch) p.catch(() => {});
      fadeTo(C.music.volume, 2000);
    } catch (e) { /* music is optional */ }
  }
  function initSound() {
    paintSound();
    $('#soundBtn').addEventListener('click', () => {
      muted = !muted; store('sf-muted', muted ? '1' : '0'); paintSound();
      if (muted) fadeTo(0, 400); else playMusic();
    });
  }

  /* ---------- envelope intro ---------- */
  function initIntro() {
    const intro = $('#intro'), page = $('#page'), main = $('#main');
    const seal = $('#seal'), env = $('#env'), flap = $('#flap'), card = $('#envCard');
    const timers = [], anims = [];
    let started = false, finished = false;
    const at = (ms, fn) => timers.push(setTimeout(fn, ms));
    const anim = (node, kf, opt) => { const a = node.animate(kf, Object.assign({ fill: 'forwards', easing: 'ease' }, opt)); anims.push(a); return a; };

    page.setAttribute('inert', '');
    document.documentElement.classList.add('intro-lock');

    function finish() {
      if (finished) return; finished = true;
      timers.forEach(clearTimeout);
      anims.forEach(a => { try { a.cancel(); } catch (e) {} });
      intro.remove();
      page.removeAttribute('inert');
      document.documentElement.classList.remove('intro-lock');
      document.body.classList.remove('intro-lock');
      page.classList.add('is-ready');
      window.scrollTo(0, 0);
      try { main.focus({ preventScroll: true }); } catch (e) {}
    }

    if (params.has('nointro')) { finish(); return; }
    try { intro.focus({ preventScroll: true }); } catch (e) {}

    function skip() {
      if (finished) return;
      playMusic();
      timers.forEach(clearTimeout); started = true;
      page.classList.add('is-ready');
      if (reduced) { finish(); return; }
      intro.animate([{ opacity: parseFloat(getComputedStyle(intro).opacity) || 1 }, { opacity: 0 }], { duration: 350, fill: 'forwards' }).finished.then(finish, finish);
    }
    $('#skipBtn').addEventListener('click', skip);
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && !finished && $('#lightbox').hidden) skip(); });

    function sparkle() {
      const box = $('#sparkles'); const n = 16;
      for (let i = 0; i < n; i++) {
        const s = document.createElement('i'); box.appendChild(s);
        const ang = (Math.PI * 2 * i) / n + Math.random() * 0.4;
        const dist = (env.offsetWidth * 0.12) + Math.random() * env.offsetWidth * 0.16;
        anim(s, [
          { transform: 'translate(0,0) scale(.4)', opacity: 0 },
          { opacity: 1, offset: 0.25 },
          { transform: 'translate(' + Math.cos(ang) * dist + 'px,' + Math.sin(ang) * dist + 'px) scale(1.2)', opacity: 0 }
        ], { duration: 650 + Math.random() * 450, delay: 160 + Math.random() * 120, easing: 'cubic-bezier(.2,.7,.3,1)' });
      }
    }

    function open() {
      if (started || finished) return; started = true;
      playMusic();
      seal.setAttribute('aria-label', 'Opening the invitation');
      seal.classList.add('opened');
      $('#introHint').style.animation = 'none';
      if (reduced) {
        intro.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 600, fill: 'forwards' }).finished.then(finish, finish);
        page.classList.add('is-ready');
        return;
      }
      anim($('#introHint'), [{ opacity: .9 }, { opacity: 0 }], { duration: 300 });
      // 1. seal presses in, then cracks into two halves + sparkle burst
      anim(seal, [{ transform: 'translate(-50%,-50%) scale(1)' }, { transform: 'translate(-50%,-50%) scale(.88)' }, { transform: 'translate(-50%,-50%) scale(.96)' }], { duration: 200 });
      anim($('.seal-l', seal), [{ transform: 'none', opacity: 1 }, { transform: 'translate(-30%,14%) rotate(-16deg)', opacity: 0 }], { duration: 560, delay: 180 });
      anim($('.seal-r', seal), [{ transform: 'none', opacity: 1 }, { transform: 'translate(30%,14%) rotate(16deg)', opacity: 0 }], { duration: 560, delay: 180 });
      sparkle();
      // 2. flap opens in 3D (drops behind the card once it passes vertical)
      anim(flap, [{ transform: 'rotateX(0deg)' }, { transform: 'rotateX(-180deg)' }], { duration: 850, delay: 380, easing: 'cubic-bezier(.45,.05,.25,1)' });
      at(380 + 440, () => { flap.style.zIndex = '1'; });
      // 3. photo card slides up out of the envelope
      const ch = card.offsetHeight;
      anim(card, [{ transform: 'translateX(-50%) translateY(0)' }, { transform: 'translateX(-50%) translateY(' + (-ch * 0.56) + 'px)' }], { duration: 800, delay: 1050, easing: 'cubic-bezier(.3,.6,.2,1)' });
      // 4. card flies to fill the screen, envelope drops away
      at(1900, () => {
        const r = card.getBoundingClientRect();
        const w = r.width, h = r.height;
        const clone = card.cloneNode(true);
        clone.removeAttribute('id'); clone.classList.add('fly');
        clone.style.cssText = 'left:' + r.left + 'px;top:' + r.top + 'px;width:' + w + 'px;height:' + h + 'px;';
        intro.appendChild(clone);
        card.style.visibility = 'hidden';
        const s = Math.min(window.innerWidth * 0.94 / w, window.innerHeight * 0.8 / h);
        const dx = window.innerWidth / 2 - (r.left + w / 2), dy = window.innerHeight / 2 - (r.top + h / 2);
        anim(clone, [{ transform: 'translate(0,0) scale(1)' }, { transform: 'translate(' + dx + 'px,' + dy + 'px) scale(' + s + ')' }], { duration: 850, easing: 'cubic-bezier(.5,0,.2,1)' });
        anim(env, [{ transform: 'translateY(0)' }, { transform: 'translateY(115vh)' }], { duration: 800, delay: 60, easing: 'cubic-bezier(.5,0,.9,.5)' });
        anim($('.intro-title'), [{ opacity: 1 }, { opacity: 0 }], { duration: 400 });
        anim($('#introGuest'), [{ opacity: 1 }, { opacity: 0 }], { duration: 400 });
        $('#skipBtn').style.visibility = 'hidden';
      });
      // 5. cross-fade into the page
      at(2800, () => {
        page.classList.add('is-ready');
        anim(intro, [{ opacity: 1 }, { opacity: 0 }], { duration: 700, easing: 'ease-in-out' });
      });
      at(3500, finish);
    }
    seal.addEventListener('click', open);
  }

  /* ---------- go ---------- */
  function init() {
    fill(); renderSwatches(); renderVenues(); renderFather(); renderStory(); renderGallery();
    renderToast(); renderFaq(); renderVendors();
    initLightbox(); initCalendar(); initCountdown(); initRsvp(); initCopy(); initShare(); initGuest();
    initSound(); initReveal(); initIntro();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
