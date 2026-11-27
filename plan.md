# Plan: Mein Lebenskompass (früher „Mein Küchenbuch“)

Stand: 26.11.2026 – umgesetzt bis auf die offenen Kästchen (Bring!-Format prüfen, Instagram über Chat, Punkt 9) · Kochbuch: https://claude.ai/artifact/NEMo2yd7AXeyKKwiYcJ9Hb
Aktueller Inhalt: 83 Rezepte (20 Frühstück, 50 Hauptgerichte, 10 Snacks, 3 eigene), noch keine Wochenpläne.

---

## 0. Grundlage schaffen

- [x] Quellcode (`kuechenbuch.html`) dauerhaft ablegen, am besten in einem eigenen Git-Repository. Im Moment liegt er nur im temporären Arbeitsordner dieser Sitzung.
- [x] Ordnerstruktur festlegen: `kuechenbuch.html`, `README.md`, `CLAUDE.md`, `plan.md`

## 1. Dokumentation

### README.md
- [x] Was das Küchenbuch ist und wo es liegt (Link)
- [x] Wie Rezepte reinkommen (WhatsApp/E-Mail kopieren, Foto, Instagram-Link, über Claude im Chat)
- [x] Wie Wochenplaner, Tracking und Einkaufsliste funktionieren
- [x] Datenmodell kurz beschreiben: `recipes`, `plans`, neu `profiles`, `tracking`
- [x] Wie man die Seite aktualisiert und veröffentlicht

### CLAUDE.md (das „Gehirn“)
- [x] **Verbotene Lebensmittel:** Zwiebeln (auch Schalotten, Frühlingszwiebeln), Blumenkohl, Gurke, Brokkoli, Fenchel
- [x] **Vorlieben:** viel Kartoffeln, mit Fleisch, gesund oder proteinreich, jedes Rezept herzhaft *oder* süß
- [x] **Stil:** einfache Rezepte, höchstens ca. 7 Zutaten; Snacks in höchstens 10–15 Minuten fertig (Fernsehabend)
- [x] **Meal-Prep-Regeln:** vorgekochte Gerichte müssen bis zum letzten Esstag halten; Haltbarkeit in Tagen angeben
- [x] **Datenregeln:** Kapitel, erlaubte Tags, Nährwerte immer pro Portion
- [x] **Design:** Farbschema Beige/Braun (siehe Punkt 7)
- [x] Diese Regeln zusätzlich **in der App speichern**, damit der Wochenplaner und das „Mit Claude ordnen“ sie automatisch beachten (heute weiß der Planer nichts von den Ausschlüssen)

## 2. Hauptansicht (Startseite)

- [x] Startseite mit zwei großen Knöpfen: **Rezepte** und **Wochenplan**
- [x] Darunter eine kurze Übersicht: heutiger Tag aus dem Tracking (kcal bisher / Ziel), aktuelle Woche
- [x] Schnellzugriff „+ Rezept einfügen“
- [x] Startseite am Handy gut bedienbar (große Knöpfe)

## 3. Rezepte hinzufügen über Instagram-Link

- [x] Feld „Instagram-Link einfügen“ im Formular
- **Einschränkung:** Die Seite selbst darf keine fremden Webseiten abrufen, und Instagram sperrt automatische Abrufe meist sowieso. Mögliche Wege:
  - [x] **A (zuverlässig):** Link plus kopierte Bildunterschrift einfügen, Claude ordnet den Text; der Link wird als Quelle gespeichert
  - [x] **B:** Screenshot(s) des Posts hochladen, Claude liest Text und Bild ab (geht heute schon über „Fotos“)
  - [ ] **C:** Link hier im Chat schicken; Claude versucht die Seite abzurufen und trägt das Rezept ein (klappt nur bei öffentlichen Posts, nicht garantiert)
- [ ] Entscheiden: A und B in der App, C als Zusatz im Chat

## 4. Profil und Nährwertziele

- [x] Profil pro Person: Name, Geschlecht, Alter, Größe, Gewicht, Aktivität, Ziel (halten / abnehmen / aufbauen)
- [x] Tagesbedarf automatisch ausrechnen:
  - Grundumsatz nach Mifflin-St-Jeor × Aktivitätsfaktor (1,2–1,9)
  - Ziel-Anpassung (z. B. −15 % zum Abnehmen, +10 % zum Aufbauen)
  - Eiweiß 1,6–2,0 g pro kg Körpergewicht, Ballaststoffe mind. 30 g, Fett ca. 30 % der kcal, Rest Kohlenhydrate
- [x] **kcal-Maximum selbst eintragbar**, das überschreibt den berechneten Wert
- [x] Mehrere Profile (z. B. 2 Personen) mit unterschiedlichen Zielen

## 5. Wochenplan mit stimmenden Nährwerten

- [x] Planer bekommt die Profile und plant so, dass **jeder Tag pro Person** zu kcal, Eiweiß usw. passt
- [x] Unterschiedliche Bedarfe über **Portionsgrößen** ausgleichen (z. B. Person A 1 Portion, Person B 1,3 Portionen) statt über verschiedene Gerichte
- [x] Pro Tag und Person anzeigen: Soll / Ist mit Ampel (passt / zu wenig / zu viel)
- [x] Wenn ein Tag nicht passt: Vorschlag (z. B. „Snack ergänzen: Schoko-Skyr, +160 kcal, +20 g Eiweiß“)
- [x] Verbotene Lebensmittel und Vorlieben aus dem „Gehirn“ automatisch mitgeben

## 6. Wochenübersicht zum Tracken

- [x] Wochenraster Montag–Sonntag × Frühstück / Mittagessen / Abendessen / Snack
- [x] **Per Klick eintragen:** Rezept auswählen → als Frühstück, Mittag- oder Abendessen tracken (auch direkt von der Rezeptseite aus: „Heute gegessen als …“)
- [x] Portion anpassbar (½, 1, 1,5 …), freie Einträge ohne Rezept möglich (z. B. „Apfel, 80 kcal“)
- [x] **Ganzen Wochenplan übernehmen:** Knopf „Plan in diese Woche übernehmen“ füllt alle Mahlzeiten auf einmal, danach einzeln änderbar
- [x] Tagessumme pro Person gegen das Profilziel
- [x] Wochenrückblick: Durchschnitt kcal und Eiweiß
- [x] Getrennt pro Person (wer hat was gegessen)

## 7. Einkaufsliste in die Bring!-App

- [x] Export-Knopf „An Bring! senden“
- **Zu prüfen, wie Bring! Daten annimmt:**
  - [ ] Bring! hat einen Import über Rezept-Links (Webseite mit Rezept-Strukturdaten). Unsere Seite ist privat und hinter Anmeldung, das klappt deshalb wahrscheinlich nicht direkt.
  - [ ] Prüfen, ob Bring! eine kopierte Liste (ein Artikel pro Zeile) beim Einfügen in mehrere Artikel aufteilt. Dann reicht „Liste für Bring! kopieren“ mit einem passenden Format.
  - [ ] Eventuell eine öffentliche Export-Seite pro Woche mit Strukturdaten, die Bring! importieren kann
- [x] Format: „Artikel“ und „Menge“ getrennt (Bring! kennt Artikel + Beschreibung), bereits abgehakte Artikel weglassen

## 8. Farbschema Beige und Braun

- [x] Neue Farben: Hintergrund Beige/Sand, Seiten helles Creme, Schrift Dunkelbraun, Akzent Karamell/Haselnuss, Zweitfarbe Olive oder Terrakotta für Eigenschaften
- [x] Dunkelmodus: Espresso-Braun als Hintergrund, helles Beige als Schrift
- [x] Nährwert-Ampel muss in beiden Modi gut lesbar bleiben

## 9. Offen

- [ ] *(letzter Punkt deiner Liste war leer – was fehlt noch?)*

---

## Vorschlag zur Reihenfolge

1. Grundlage, CLAUDE.md, README (Punkte 0–1): schnell erledigt, und alles Weitere baut darauf auf
2. Farbschema und Hauptansicht (Punkte 8 und 2): sichtbarer Umbau in einem Schritt
3. Profil (Punkt 4), Voraussetzung für 5 und 6
4. Tracking-Wochenübersicht inkl. „Plan übernehmen“ (Punkt 6)
5. Wochenplan mit Nährwert-Zielen (Punkt 5)
6. Bring!-Export (Punkt 7), nach Prüfung des Formats
7. Instagram (Punkt 3)

## Fragen an dich

- Für wie viele Personen soll es Profile geben, und sollen beide getrennt tracken?
- Soll das Tracking nur für dich sichtbar sein oder für alle, mit denen das Kochbuch geteilt ist?
- Snacks im Tracking und im Plan als eigene Mahlzeit führen?
- Hast du die Bring!-App auf dem Handy? Dann kann ich dir sagen, was du einmal ausprobieren musst, um das Importformat zu klären.

---

# Runde 3 – Rezepte finden, Zufall, neues Layout, Bilder

## 10. Bananen-Allergie
- [x] „Bananen“ zu den verbotenen Lebensmitteln (App-Regeln `settings/brain` und CLAUDE.md)
- [x] Rezepte mit Banane löschen (betrifft: Protein-Porridge mit Banane und Erdnussmus)
- [x] Warnhinweis auf Rezeptseiten greift automatisch über die Regeln

## 11. Rezepte: Suche statt langer Liste
- [x] Rezeptbereich als eigene, volle Seite statt Buch mit Seitenleiste
- [x] Große Suchleiste oben: Lebensmittel oder Rezeptname eingeben → Treffer erscheinen darunter als Karten
- [x] Ohne Suchbegriff keine lange Liste, nur die Kapitel als klar getrennte Kacheln
- [x] Klick auf Treffer öffnet das Rezept; „← Zurück zur Suche“ behält den Suchbegriff
- [x] Filter nach Eigenschaften (herzhaft, süß, proteinreich …) als Chips unter der Suche

## 12. Kapitel deutlich abgrenzen
- [x] Jedes Kapitel (Frühstück, Hauptgerichte, Snacks, Desserts …) als eigene Kachel mit eigener Farbe, Anzahl Rezepte und kurzer Beschreibung
- [x] Klick auf Kapitel zeigt nur dessen Rezepte, mit Kapitelfarbe als Kopf

## 13. Zufallsgenerator „Was koche ich heute?“
- [x] Auf der Startseite und im Rezeptbereich
- [x] Auswahl: Frühstück / Mittagessen / Abendessen / Snack, optional herzhaft oder süß, nur schnell
- [x] Zeigt 3 Vorschläge aus dem Kochbuch als Karten, „Neu würfeln“, Klick öffnet das Rezept

## 14. Neues Layout und neue Schriften
- [x] Neue Schriften: Young Serif (Überschriften, Kochbuch-Charakter) und Figtree (Text und Bedienung, gut lesbar)
- [x] Mehr Weißraum, Karten mit Bild statt Textlisten, weichere Ecken
- [x] Beige/Braun bleibt, Kapitelfarben als warme Erdtöne
- [x] Rezeptseite: großes Bild oben, Zutaten und Schritte klar getrennt

## 15. Bilder für Rezepte
- [x] Eigenes Foto pro Rezept hochladen (wird in der App gespeichert)
- [x] Ohne Foto: gestaltetes Platzhalterbild in der Kapitelfarbe mit Anfangsbuchstaben
- **Einschränkung:** Bilder aus dem Internet kann die App nicht laden, und automatisch erzeugte Fotos gibt es hier nicht. Fotos müssen also von dir kommen (Handyfoto beim Kochen, Screenshot vom Instagram-Post)

## Runde 4 – Farbpalette und schlichte Kacheln
- [x] Bilder und Foto-Upload entfernt, Rezepte nur noch als Kacheln mit Titel
- [x] Ganze App in der 12-Ton-Palette (Beige bis Espresso)
- [x] Alle Kacheln gleich: Hintergrund `#DACCBF`, Kachel `#957A69`, Schrift `#47362E`

## Runde 5 – Liste statt Rezeptkacheln
- [x] Rezepte unter den Kategorien als Liste über die ganze Breite, Trennstrich unter jedem Rezept (auch Suchtreffer und Zufallsvorschläge)
- [x] Kategorie-Kacheln in `#BAA99A`
- [x] Reiterleiste ohne Scrollleiste, Reiter brechen bei wenig Platz um

## Runde 6 – Zielgewicht, alle Nährwerte, kurze Einkaufsliste
- [x] Profil: Zielgewicht und Tempo statt −15 %, Dauer bis zum Ziel
- [x] Eiweiß nach Zielgewicht (1,8 g/kg)
- [x] Tracking, Startseite und Wochenplan zeigen Kalorien, Eiweiß, Kohlenhydrate, Fett und Ballaststoffe
- [x] Planer muss alle fünf Werte pro Person und Tag treffen
- [x] ~~16 Bausteine (Beilagen)~~ wieder entfernt: stattdessen 7 Frühstücke und 10 Hauptgerichte mit viel Ballaststoffen und Eiweiß; Planer nutzt nur ganze Rezepte und schreibt bei Lücken neue
- [x] Planer: kurze Einkaufsliste (ca. 20 Artikel), gemeinsame Grundzutaten, andere Gerichte als in den letzten Wochen

---

# Runde 7 – Zykluskalender (Plan, noch nicht umgesetzt)

## 7.1 Datenschutz und Zugriff
- [ ] Isa und Giuli dürfen den Kalender beide sehen. Die Zyklusdaten liegen deshalb in einem gemeinsamen Bereich der Datenbank (`cycle/…`), nicht in einem privaten pro Person
- [ ] **Empfehlung:** Teilen von „Jeder mit dem Link“ auf **nur eingeladene Personen** umstellen und Giuli einladen, sonst kann jeder mit dem Link den Zyklus sehen
- [ ] Zyklusdaten werden **nicht** nach `content/` gesichert und nicht ins Repository geschrieben

## 7.2 Neuer Reiter „Zyklus“
- [ ] Monatsansicht Mo–So, Pfeile für vorigen/nächsten Monat, „Heute“
- [ ] Jeder Tag in der Farbe seiner Phase (pastell):
  - Menstruation: Rosé-Rot
  - Follikelphase: Flieder/Violett
  - Eisprung: Waldgrün (hell)
  - Lutealphase: Hellblau
- [ ] Eingetragene Tage kräftig gefüllt, vorausgesagte Tage nur hell bzw. gestrichelt umrandet
- [ ] Kleine Markierungen im Tag: Punkt = Notiz vorhanden, Tropfen-Symbol = Blutung, Kreis = Eisprung gespürt
- [ ] Oben eine Zeile: „Zyklustag 12 · Follikelphase · Nächste Tage in 16 Tagen (Di 23.12.) · Nächster Eisprung ca. Mo 08.12.“
- [ ] Legende der vier Farben

- [ ] **PMS-Tage:** die 5 Tage vor der nächsten Menstruation, innerhalb der Lutealphase markiert (gleiche blaue Farbe, zusätzlich schraffiert und mit „PMS“ beschriftet)
- [ ] **Stimmungslage je Phase:** unter dem Kalender bzw. beim gewählten Tag ein kurzer, prägnanter Satz, wie es einem in dieser Phase gehen kann (Menstruation, Follikel, Eisprung, Luteal, PMS)
- [ ] Die Stimmungstexte sind Inhalt, nicht Code: Sie liegen in der Datenbank (`settings/cycle`) und lassen sich im Reiter „Zyklus“ anpassen

## 7.3 Eintragen pro Tag (Klick auf einen Tag)
- [ ] „Tage – mit Blutung“
- [ ] „Tage – gespürt, ohne Blutung“ (für Spirale)
- [ ] „Eisprung gespürt“
- [ ] Notiz (freier Text)
- [ ] Mehr nicht

## 7.4 Einstellungen im Reiter
- [ ] Verhütung: Hormonspirale, Kupferspirale, Pille, Ring, Kondom, keine, andere (+ Notiz)
- [ ] Dauer der Tage (Standard 4)
- [ ] Hinweis: Vorhersage ist ein Durchschnitt, **keine Verhütungsmethode** und keine medizinische Beratung

## 7.5 Berechnung
- [ ] Zyklusbeginn = erster Tag einer Reihe von „Tage“-Einträgen (mit oder ohne Blutung)
- [ ] Zykluslänge = Durchschnitt der **letzten 3 Zyklen** (nachgetragen); ohne Daten 28 Tage
- [ ] Lutealphase = Abstand gespürter Eisprung → nächster Zyklusbeginn, Durchschnitt; ohne Daten 14 Tage
- [ ] Eisprung (vorausgesagt) = nächster Zyklusbeginn − Lutealphase; Eisprungphase = Eisprungtag ± 1 Tag
- [ ] Phasen: Menstruation (Tag 1 bis Dauer) → Follikel (bis vor Eisprungphase) → Eisprung (3 Tage) → Luteal (bis zum nächsten Beginn)
- [ ] PMS = die letzten 5 Tage vor dem (vorausgesagten) nächsten Zyklusbeginn
- [ ] Eigene Einträge haben immer Vorrang vor der Rechnung; alles wird nach jedem Eintrag neu berechnet
- [ ] Vorhersage für die nächsten 3 Zyklen sichtbar
- [ ] Nachtragen: in den Vormonaten einfach die Tage und den Eisprung anklicken

## 7.6 Wochenplaner nach Phase
- [ ] Der Zyklus wird einem Profil zugeordnet (Isa)
- [ ] Beim Planen bekommt Claude pro geplantem Tag die Phase mit
- [ ] Bevorzugung je Phase (weiche Regel, die Nährwertziele bleiben vorrangig):
  - Menstruation: eisenreich (Rind, Linsen, Spinat), warme Gerichte, Eintöpfe
  - Follikelphase: leichter, frisch, proteinreich
  - Eisprung: viel Gemüse und Ballaststoffe
  - Lutealphase: komplexe Kohlenhydrate, magnesiumreich (Hülsenfrüchte, Haferflocken, Kartoffeln), sättigend
  - PMS-Tage: zusätzlich wohltuend und sättigend, weniger Salz, warme Gerichte
- [ ] Im Wochenplan steht bei jedem Tag die Phase als kleiner Farbpunkt
- [ ] Gemeinsame Mahlzeiten (für Isa und Giuli) richten sich nach Isas Phase

## 7.7 Neue Startseite
- [ ] Knopf „+ Rezept einfügen“ oben in der Kopfzeile entfernen; er erscheint nur noch im Reiter „Rezepte“ neben der Suche
- [ ] Kacheln „Rezepte“ und „Wochenplan“ sowie „Was koche ich heute?“ fallen auf der Startseite weg (der Zufallsgenerator bleibt im Reiter „Rezepte“)
- [ ] Begrüßung **„Hoi, Isa“** bzw. **„Hoi, Giuli“**: Wer die Seite öffnet, wählt einmal „Das bin ich“ bei seinem Profil; die App merkt sich das pro Konto
- [ ] Darunter die **Tracking-Übersicht von heute für beide** nebeneinander: Kalorien, Eiweiß, Kohlenhydrate, Fett, Ballaststoffe als Balken gegen das Ziel, plus was schon gegessen wurde
- [ ] Ganz unten: **Isas aktuelle Phase** (Farbpunkt, Name der Phase, Zyklustag, ggf. „PMS“) und der kurze Satz, wie es ihr heute gehen könnte
- [ ] Auf dem Handy untereinander, am Computer die beiden Tracking-Karten nebeneinander

## 7.8 Design
- [ ] Die vier Phasenfarben sind die einzige Ausnahme von der 12-Ton-Palette (in CLAUDE.md festhalten)
- [ ] Rest des Reiters in der bestehenden Palette und Schrift

## 7.9 Vorgehen
1. Speicherbereich `cycle/…` und „Das bin ich“ (Konto ↔ Profil) einrichten
2. Reiter mit Monatsansicht und Tageseingabe
3. Berechnung, Vorhersage und PMS, mit Testdaten aus 3 Zyklen lokal prüfen
4. Einstellungen (Verhütung, Dauer, Zuordnung zu Isas Profil) und Stimmungstexte in der Datenbank
5. Neue Startseite (Begrüßung, Tracking beider, Phase und Stimmung)
6. Anbindung an den Wochenplaner
7. Veröffentlichen, README/CLAUDE.md, Commit und Push

## Entschieden
- Giuli darf den Kalender sehen
- Die Phase steht auf der Startseite (mit Stimmung), „Was koche ich heute?“ nur noch bei Rezepten

---

# Runde 8 – Programm, Inhalte und Gesundheitsdaten trennen
- [x] Repository in drei Teile: `app/` (Programm), `content/` (nur Rezepte), `personal/` (Regeln/Allergien, Wochenpläne)
- [x] Gesundheitsdaten (Profile, Tracking, Zyklus) nur in der App-Datenbank, nie im Repository oder in einem Export
- [x] `scripts/weitergeben.sh`: ZIP mit Programm + Rezepten + Anleitung
- [x] In der App: „App weitergeben“ mit Rezept-Export und -Import

# Runde 9 – Umbenennung
- [x] App heißt jetzt „Mein Lebenskompass“ (Titel, Kopfzeile, Programmdatei `app/lebenskompass.html`, Weitergabe-Paket)
- [x] Import nimmt auch alte Rezept-Exporte (`kuechenbuch-rezepte`) an
