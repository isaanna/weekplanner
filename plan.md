# Plan: Mein Küchenbuch – nächster Ausbau

Stand: 26.11.2026 · Kochbuch: https://claude.ai/artifact/NEMo2yd7AXeyKKwiYcJ9Hb
Aktueller Inhalt: 83 Rezepte (20 Frühstück, 50 Hauptgerichte, 10 Snacks, 3 eigene), noch keine Wochenpläne.

---

## 0. Grundlage schaffen

- [ ] Quellcode (`kuechenbuch.html`) dauerhaft ablegen, am besten in einem eigenen Git-Repository. Im Moment liegt er nur im temporären Arbeitsordner dieser Sitzung.
- [ ] Ordnerstruktur festlegen: `kuechenbuch.html`, `README.md`, `CLAUDE.md`, `plan.md`

## 1. Dokumentation

### README.md
- [ ] Was das Küchenbuch ist und wo es liegt (Link)
- [ ] Wie Rezepte reinkommen (WhatsApp/E-Mail kopieren, Foto, Instagram-Link, über Claude im Chat)
- [ ] Wie Wochenplaner, Tracking und Einkaufsliste funktionieren
- [ ] Datenmodell kurz beschreiben: `recipes`, `plans`, neu `profiles`, `tracking`
- [ ] Wie man die Seite aktualisiert und veröffentlicht

### CLAUDE.md (das „Gehirn“)
- [ ] **Verbotene Lebensmittel:** Zwiebeln (auch Schalotten, Frühlingszwiebeln), Blumenkohl, Gurke, Brokkoli, Fenchel
- [ ] **Vorlieben:** viel Kartoffeln, mit Fleisch, gesund oder proteinreich, jedes Rezept herzhaft *oder* süß
- [ ] **Stil:** einfache Rezepte, höchstens ca. 7 Zutaten; Snacks in höchstens 10–15 Minuten fertig (Fernsehabend)
- [ ] **Meal-Prep-Regeln:** vorgekochte Gerichte müssen bis zum letzten Esstag halten; Haltbarkeit in Tagen angeben
- [ ] **Datenregeln:** Kapitel, erlaubte Tags, Nährwerte immer pro Portion
- [ ] **Design:** Farbschema Beige/Braun (siehe Punkt 7)
- [ ] Diese Regeln zusätzlich **in der App speichern**, damit der Wochenplaner und das „Mit Claude ordnen“ sie automatisch beachten (heute weiß der Planer nichts von den Ausschlüssen)

## 2. Hauptansicht (Startseite)

- [ ] Startseite mit zwei großen Knöpfen: **Rezepte** und **Wochenplan**
- [ ] Darunter eine kurze Übersicht: heutiger Tag aus dem Tracking (kcal bisher / Ziel), aktuelle Woche
- [ ] Schnellzugriff „+ Rezept einfügen“
- [ ] Startseite am Handy gut bedienbar (große Knöpfe)

## 3. Rezepte hinzufügen über Instagram-Link

- [ ] Feld „Instagram-Link einfügen“ im Formular
- **Einschränkung:** Die Seite selbst darf keine fremden Webseiten abrufen, und Instagram sperrt automatische Abrufe meist sowieso. Mögliche Wege:
  - [ ] **A (zuverlässig):** Link plus kopierte Bildunterschrift einfügen, Claude ordnet den Text; der Link wird als Quelle gespeichert
  - [ ] **B:** Screenshot(s) des Posts hochladen, Claude liest Text und Bild ab (geht heute schon über „Fotos“)
  - [ ] **C:** Link hier im Chat schicken; Claude versucht die Seite abzurufen und trägt das Rezept ein (klappt nur bei öffentlichen Posts, nicht garantiert)
- [ ] Entscheiden: A und B in der App, C als Zusatz im Chat

## 4. Profil und Nährwertziele

- [ ] Profil pro Person: Name, Geschlecht, Alter, Größe, Gewicht, Aktivität, Ziel (halten / abnehmen / aufbauen)
- [ ] Tagesbedarf automatisch ausrechnen:
  - Grundumsatz nach Mifflin-St-Jeor × Aktivitätsfaktor (1,2–1,9)
  - Ziel-Anpassung (z. B. −15 % zum Abnehmen, +10 % zum Aufbauen)
  - Eiweiß 1,6–2,0 g pro kg Körpergewicht, Ballaststoffe mind. 30 g, Fett ca. 30 % der kcal, Rest Kohlenhydrate
- [ ] **kcal-Maximum selbst eintragbar**, das überschreibt den berechneten Wert
- [ ] Mehrere Profile (z. B. 2 Personen) mit unterschiedlichen Zielen

## 5. Wochenplan mit stimmenden Nährwerten

- [ ] Planer bekommt die Profile und plant so, dass **jeder Tag pro Person** zu kcal, Eiweiß usw. passt
- [ ] Unterschiedliche Bedarfe über **Portionsgrößen** ausgleichen (z. B. Person A 1 Portion, Person B 1,3 Portionen) statt über verschiedene Gerichte
- [ ] Pro Tag und Person anzeigen: Soll / Ist mit Ampel (passt / zu wenig / zu viel)
- [ ] Wenn ein Tag nicht passt: Vorschlag (z. B. „Snack ergänzen: Schoko-Skyr, +160 kcal, +20 g Eiweiß“)
- [ ] Verbotene Lebensmittel und Vorlieben aus dem „Gehirn“ automatisch mitgeben

## 6. Wochenübersicht zum Tracken

- [ ] Wochenraster Montag–Sonntag × Frühstück / Mittagessen / Abendessen / Snack
- [ ] **Per Klick eintragen:** Rezept auswählen → als Frühstück, Mittag- oder Abendessen tracken (auch direkt von der Rezeptseite aus: „Heute gegessen als …“)
- [ ] Portion anpassbar (½, 1, 1,5 …), freie Einträge ohne Rezept möglich (z. B. „Apfel, 80 kcal“)
- [ ] **Ganzen Wochenplan übernehmen:** Knopf „Plan in diese Woche übernehmen“ füllt alle Mahlzeiten auf einmal, danach einzeln änderbar
- [ ] Tagessumme pro Person gegen das Profilziel
- [ ] Wochenrückblick: Durchschnitt kcal und Eiweiß
- [ ] Getrennt pro Person (wer hat was gegessen)

## 7. Einkaufsliste in die Bring!-App

- [ ] Export-Knopf „An Bring! senden“
- **Zu prüfen, wie Bring! Daten annimmt:**
  - [ ] Bring! hat einen Import über Rezept-Links (Webseite mit Rezept-Strukturdaten). Unsere Seite ist privat und hinter Anmeldung, das klappt deshalb wahrscheinlich nicht direkt.
  - [ ] Prüfen, ob Bring! eine kopierte Liste (ein Artikel pro Zeile) beim Einfügen in mehrere Artikel aufteilt. Dann reicht „Liste für Bring! kopieren“ mit einem passenden Format.
  - [ ] Eventuell eine öffentliche Export-Seite pro Woche mit Strukturdaten, die Bring! importieren kann
- [ ] Format: „Artikel“ und „Menge“ getrennt (Bring! kennt Artikel + Beschreibung), bereits abgehakte Artikel weglassen

## 8. Farbschema Beige und Braun

- [ ] Neue Farben: Hintergrund Beige/Sand, Seiten helles Creme, Schrift Dunkelbraun, Akzent Karamell/Haselnuss, Zweitfarbe Olive oder Terrakotta für Eigenschaften
- [ ] Dunkelmodus: Espresso-Braun als Hintergrund, helles Beige als Schrift
- [ ] Nährwert-Ampel muss in beiden Modi gut lesbar bleiben

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
