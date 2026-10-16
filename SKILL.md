---
name: allefarben-design-system
description: Design System von AlleFarben Alltagshilfe (Berlins queerer Alltagshilfedienst) – Farben, Typografie, Fonts, Logos, Fotos, Komponenten und Tonalität. Nutze diesen Skill immer, wenn Webseiten, Mockups, Präsentationen, Social-Media-Grafiken, Flyer oder UI-Prototypen im AlleFarben-Design entstehen sollen.
---

# AlleFarben Alltagshilfe – Design System

Lies zuerst `README.md`. Dort stehen Markenkontext, Tonalität (Du-Form, Gender-Doppelpunkt, ermächtigend statt fürsorglich), visuelle Grundlagen (warme Pastelltöne, nie reines Weiß, Regenbogenverlauf als zentrales Motiv) und Ikonografie.

## Dateien

- `README.md` – Brand Book (Inhalt, Farbe, Typo, Abstände, Radien, Schatten, Bildsprache, Bewegung)
- `colors_and_type.css` – CSS-Variablen für Farben, Typografie, Abstände, Schatten, Motion inkl. `@font-face`
- `tokens.json` / `tokens.css` – dieselben Tokens als JSON (Design-System-Format) und als generiertes CSS
- `fonts/` – Dosis (Headlines), Open Sans (Fließtext, normal + kursiv), Caveat (Handschrift-Akzent), alle selbst gehostet
- `assets/` – Logos (`logo-horizontal.png`, `logo-square.png`), Markenfotografie, Porträts
- `preview/` – kleine HTML-Karten zu jedem Token- und Komponentenbereich
- `components/` – React-Komponenten Button, Pill, RainbowBar, ServiceCard (JSX, Typen, `bundle.js` → `window.AlleFarbenDesignSystem_c7c21e`)
- `ui_kits/website/` – lauffähige React-Nachbildung der Marketing-Website
- `slides/` – Beispieldeck „Queersensible Pflege“ (nur im Vollpaket)

## Vorgehen

Visuelle Artefakte (Slides, Mockups, Landingpages, Social Posts): Fonts aus `fonts/` und Logos aus `assets/` übernehmen, `colors_and_type.css` einbinden, statisches HTML schreiben, das sich darauf bezieht.

Produktivcode: Assets kopieren, Regeln aus `README.md` anwenden; die JSX-Dateien in `ui_kits/website/` und `components/` sind Referenz und werden an das Ziel-Framework angepasst.

Ohne weitere Vorgaben: fragen, was entstehen soll (Zielgruppe, Ton, Umfang, Leistungsbereich), dann als Designer:in HTML-Artefakte oder Code liefern.

## Unverhandelbar

- Primärfarbe `#ffe28d`, Text `#1d1d1d`, Seitenhintergrund `#fffaf6` – nie reines Weiß.
- Regenbogenverlauf: `#e39f9a → #f4b896 → #ffe28d → #98d7c2 → #78a5dc → #b89bca`.
- Dosis Bold für Headlines, Open Sans für Fließtext, Caveat für den Handschrift-Akzent (immer die echte Datei, nie ein Cursive-Fallback).
- Du-Form. Gender-Doppelpunkt (`Kund:innen`, nie `KundInnen` oder `Kund*innen`).
- Claim: „Für alle, die Vielfalt l(i)eben!“ – die `(i)`-Schreibweise nicht verändern.
- Keine Emojis in Texten. Lucide-Icons, 2px Strichstärke.
- Nie Ecken mit Radius 0; Schatten mit warmem Braunton `rgba(77, 54, 30, …)`.
