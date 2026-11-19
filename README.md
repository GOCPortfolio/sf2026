# Sonia & Francis wedding invitation website

Thursday 3rd December 2026 · #SOFIZZY2026 · Omoku, Rivers State

This is a normal website (no app, no installation). You only edit two kinds of things: **text and settings** (in one block at the top of `script.js`) and **photos** (in `assets/`).

---

## 1. What is in the folder

| File | What it is |
|---|---|
| `index.html` | The page structure and the link-preview tags (WhatsApp, Facebook, Twitter). |
| `styles.css` | Colours (top of the file), fonts and layout. |
| `script.js` | **The CONFIG block at the top holds every name, date, venue, phone number, story line, toast line, bank detail, FAQ answer and vendor.** The code below it never needs editing. |
| `google-apps-script.gs` | The small script that saves RSVPs into a Google Sheet (section 4). |
| `set-address.py` | Optional helper that puts your final web address in the right places (section 6). |
| `assets/` | Photos, florals, icons, music and the link-preview picture. |

## 2. How to change text

1. Open `script.js` in any text editor (Notepad is fine).
2. Edit only what is **between the quote marks**, for example `accountNumber: '2224459930'`. Do not delete commas or quote marks.
3. Save, then refresh the page.

## 3. Things still to fill in or confirm

- [ ] Final web address: already set to https://gocportfolio.github.io/sf2026/ (change it if you move to another host).
- [ ] **RSVP Google Sheet link** (`rsvp.endpoint`). See section 4. Until then the form politely sends guests to the WhatsApp and Call buttons.
- [ ] **Music**: `assets/music.mp3` is "Running to You" supplied by the couple (55 sec, loops). Make sure you hold the rights to it.
- [ ] **Father of the Day**: left empty, so that section is hidden. Fill `fatherOfDay: { names: '...', role: '...' }` to show it.
- [ ] **Gift message**: a warm default is used. Change `gifts.message` if you prefer your own.
- [ ] **Coordinator's number**: the FAQ "Contact person" shows Stanley with the RSVP call number and the WhatsApp number. If Stanley has his own number, change `contact`.
- [ ] **Start time**: set to **9:00 AM** (as printed on the invitation card). To use 9:01, change `startISO` to `2026-12-03T09:01:00+01:00` and `time` in `venues`.
- [ ] Check the **bride and groom names** on the card. They follow your printed card: *Sonia Chidinma Osademe* and *Francis Chibueze Francis*.

## 4. RSVPs into a Google Sheet (step by step)

1. Go to sheets.google.com and create a blank sheet. Name it "Sonia & Francis RSVPs".
2. Click **Extensions → Apps Script**.
3. Delete everything there, open `google-apps-script.gs`, copy all of it, paste it in, and click Save.
4. Click **Deploy → New deployment**. Click the gear icon and choose **Web app**.
5. Set **Execute as: Me** and **Who has access: Anyone**. Click Deploy and approve the permissions Google asks for.
6. Copy the **Web app URL** (it ends in `/exec`).
7. In `script.js`, paste it here: `rsvp: { endpoint: 'PASTE-HERE', ...`.
8. Open your live website, send a real test RSVP, and check that a row appears in the sheet (a tab called **RSVPs** is created automatically).
9. If you ever change `google-apps-script.gs`: **Deploy → Manage deployments → pencil icon → Version: New version → Deploy**.

Phone numbers keep their leading zero, and any text starting with `=`, `+`, `-` or `@` is made safe.

## 5. Photos and music

- Photos live in `assets/`. `hero.webp` is the first photo guests see. `envelope-card.webp` is the photo that slides out of the envelope (crop about 6:7). Gallery photos are `gallery-02.webp` etc., each with a small `-sm` version for the grid.
- To replace a photo, save the new one under **the same name** in WebP format. Free tool: squoosh.app (choose WebP, quality about 70, width about 900).
- To add a gallery photo, add its full and `-sm` files, then add one line in `gallery:` inside `script.js` (copy an existing line and change the file name, size and description).
- **Music**: use a song you have the right to use. Compress it to a small file with:
  `ffmpeg -i yoursong.mp3 -t 150 -b:a 96k -ac 2 assets/music.mp3`
  Keep it under about 1.5 MB. Music starts when a guest taps the seal, and the speaker button (top right) mutes it and remembers the choice.

## 6. Link preview (WhatsApp, Facebook, Twitter)

The preview picture is `assets/og-image-2.jpg` (sealed envelope with S & F). The description is exactly: *"You are invited to celebrate our union in marriage."*

Link previews need your **real, full web address** in 4 places inside `index.html` (`canonical`, `og:url`, `og:image`, `twitter:image`), plus one in `script.js` (`site.url`, used by the Share button). They currently say `__SITE_URL__`.

Easiest way: once you know your address, run `python3 set-address.py https://your-address/` in this folder. Or send the address to Claude and ask for the finished files.

**If WhatsApp shows an old or missing picture:** rename the picture (for example to `og-image-3.jpg`, and change the name in the two `og:image` / `twitter:image` lines), or share the link with `?v=2` at the end. Then open the Facebook Sharing Debugger (developers.facebook.com/tools/debug) and press **Scrape Again**.

## 7. Free hosting

- **GitHub Pages**: create a repository, upload everything in this folder, then **Settings → Pages → Branch: main, folder: / (root) → Save**. Your address will be `https://USERNAME.github.io/REPO/`.
- **Netlify**: go to app.netlify.com/drop and drag the whole folder in. It gives you an address immediately (you can rename it under Site settings).
- **Vercel**: import the folder or repository at vercel.com/new. No build settings are needed.

**Own domain (optional):** in your domain provider, add the records your host tells you (usually four `A` records for the main domain on GitHub Pages and a `CNAME` for `www`). Then run `set-address.py` again with the new address.

## 8. Personal guest links

Add `?guest=Name` to the address to greet a guest on the envelope and the card, and pre-fill their RSVP name.
Example: `https://your-address/?guest=Mr%20and%20Mrs%20Okafor`
Write a space as `%20` and `&` as `%26`. Add `?nointro` (or `&nointro`) to skip the envelope while testing.

## 9. Before you send the link to guests

1. All placeholders above are settled. 2. A real test RSVP shows up in your Google Sheet. 3. The music file is licensed. 4. The 5 web-address spots are set and the preview picture opens in a browser. 5. The Facebook debugger shows the envelope picture, and a fresh WhatsApp chat previews the link. 6. Open it on a real iPhone (Safari), an Android phone (Chrome) and a laptop.
