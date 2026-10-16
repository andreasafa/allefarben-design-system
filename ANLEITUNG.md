# AlleFarben Design System – Installation auf einem anderen Account

Stand: 16.10.2026 · Quelle: Design-System-Artefakt „AlleFarben Design System-neu“ (Claude Design, migriert am 19.09.2026)

## Inhalt des Pakets

| Datei | Zweck |
|---|---|
| `allefarben-design-system-skill.zip` | Skill zum Hochladen (Fotos auf 1.600 px verkleinert, ca. 11 MB, ohne Deck und PDF) |
| `allefarben-design-system/` (im Vollpaket) | Alle Originaldateien: README, Tokens, CSS, 4 Fonts, Logos, 11 Fotos in Originalgröße, 22 Vorschaukarten, 4 React-Komponenten, Website-UI-Kit, Beispieldeck, Referenz-PDF |

Nicht enthalten, weil account- oder migrationsgebunden: Migrationsbericht, Datei-Map, automatisch generierte API-Karten, doppelte Upload-Kopien und Screenshots. Inhaltlich fehlt dadurch nichts.

## Weg 1: Als Skill installieren (empfohlen, funktioniert überall)

1. Auf dem anderen Account in Claude: **Einstellungen → Fähigkeiten (Capabilities) → Skills → Skill hochladen**.
2. `allefarben-design-system-skill.zip` auswählen. Die ZIP enthält den Ordner `allefarben-design-system/` mit `SKILL.md` auf oberster Ebene.
3. Skill aktivieren. Danach greift Claude bei Anfragen wie „Mach eine Landingpage im AlleFarben-Design“ automatisch darauf zu.

Hinweis: Die genaue Menübezeichnung kann je nach App-Version abweichen. Ob es eine Größengrenze für Skill-Uploads gibt, ist mir nicht verbindlich bekannt; falls der Upload abgelehnt wird, die Fotos im Ordner `assets/` weiter verkleinern.

## Weg 2: Als Design System (Claude Design / Artifact-Typ „Design System“) neu anlegen

1. Auf dem anderen Account einen neuen Chat (Cowork oder Claude) öffnen.
2. Die Vollpaket-ZIP anhängen.
3. Diesen Prompt verwenden:

> Erstelle aus den angehängten Dateien ein neues Design System (Artifact-Typ „Design System“) mit dem Titel „AlleFarben Design System“. Übernimm README.md als Brand Book, tokens.json als Tokens, die vier Fonts aus fonts/, Logos und Fotos aus assets/ als Asset-Gruppen „Logos“ und „Fotografie“ sowie die Komponenten Button, Pill, RainbowBar und ServiceCard mit Vorschau unter components/<Name>/preview.html (bundle.js, Namespace AlleFarbenDesignSystem_c7c21e, React 18 aus components/lib/). Ergänze ein Cover. Werte exakt übernehmen, nichts erfinden.

Danach steht das Design System auf dem neuen Account als Standard für Slides und Designs zur Verfügung (ggf. dort als Standard markieren).

## Weg 3: Nur teilen statt kopieren

Wenn der andere Account das System nur nutzen, nicht besitzen soll: Im ursprünglichen Artefakt auf **Teilen** gehen und den anderen Account einladen. Dann bleibt eine einzige Quelle, Änderungen kommen automatisch an.

## Offene Punkte aus dem Original

- Das Foto `IMG_1092.heic` war im Original erwähnt, aber nie hochgeladen.
- Lucide wird als Ersatz-Iconset genutzt, ein eigenes Iconset gibt es nicht.
- Komponenten haben noch keine eigenen Nutzungsrichtlinien (README je Komponente).
