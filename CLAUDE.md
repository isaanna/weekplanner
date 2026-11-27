# CLAUDE.md – Gehirn von „Mein Lebenskompass“

Anweisungen für Claude bei der Arbeit an diesem Repository und an den Daten von „Mein Lebenskompass“ (App mit Kochbuch, Wochenplaner, Tracking und bald Zyklus).

## Verbotene Lebensmittel

Niemals in Rezepten, Plänen oder Vorschlägen verwenden:

- Zwiebeln (auch Schalotten, Frühlingszwiebeln). Können einfach weggelassen werden
- Blumenkohl
- Gurke
- Brokkoli
- Fenchel
- **Bananen** (starke Allergie, auch Bananenmus, Bananenchips, Bananenbrot)

Vor jedem Eintragen von Rezepten automatisch gegen diese Liste prüfen (Zutaten, Schritte, Notizen).

## Vorlieben

- Hauptsächlich Kartoffeln, mit Fleisch
- Gesund oder proteinreich
- Jedes Rezept ist entweder **herzhaft** oder **süß** (genau eins der beiden Tags)
- Viel Gemüse, gesunde Kohlenhydrate (Kartoffeln, Vollkorn, Hülsenfrüchte)

## Regeln für Rezepte

- Einfach: höchstens ca. **7 Zutaten** (Salz, Pfeffer, Öl zählen nicht)
- **Snacks:** in höchstens 10–15 Minuten fertig, schnell vor dem Fernsehabend
- Zutaten: eine pro Zeile, Menge zuerst, Ziffern statt Wörter
- Nährwerte immer **pro Portion** schätzen: `kcal, protein, carbs, fat, fiber` (ganze Zahlen)
- `shelfLifeDays` angeben (Tage im Kühlschrank)
- Tags nur aus der festen Liste: herzhaft, süß, gesund, leicht, viel Gemüse, proteinreich, Vollkorn, low carb, vegetarisch, vegan, schnell, meal-prep-tauglich, einfrierbar
- Kapitel nur aus: Frühstück, Vorspeisen & Salate, Suppen, Hauptgerichte, Beilagen, Snacks, Backen, Desserts, Getränke, Sonstiges

## Meal-Prep

- Vorgekochte Gerichte müssen bis zum letzten Esstag halten
- Sonst einfrieren, getrennt lagern oder Mitte der Woche nachkochen
- Der Wochenplan enthält nur **Frühstück, Mittagessen und Abendessen**. Snacks werden nicht eingeplant und zählen nicht zur Woche
- Nährwerte im Wochenplan müssen pro Person und Tag **alle** Zielwerte treffen: Kalorien ±10 %, Eiweiß ≥ 90 %, Kohlenhydrate ±15 %, Fett ±15 %, Ballaststoffe ≥ 90 %. Ausgeglichen über die drei Mahlzeiten und Portionsgrößen
- **Nur ganze Rezepte:** pro Mahlzeit ein vollständiges Rezept, keine Beilagen oder Einzelzutaten zum Auffüllen. Die Zielwerte werden über die Rezeptauswahl und Portionsgrößen erreicht
- Fehlen passende Rezepte, schreibt der Planer neue, ausgewogene Rezepte (die man ins Kochbuch übernehmen kann). Neue Rezepte im Kochbuch sollen pro 500 kcal ca. 35–45 g Eiweiß und mind. 10 g Ballaststoffe haben
- **Kurze Einkaufsliste:** Gerichte mit gemeinsamen Grundzutaten wählen, Gerichte lieber wiederholen, Ziel höchstens ca. 20 Artikel (ohne Vorrat)
- **Abwechslung zwischen Wochen:** andere Gerichte als in den letzten zwei Wochen, aber gern ähnliche Grundzutaten

## Profile und Tagesbedarf

- Pro Person: Gewicht jetzt, **Zielgewicht** und **Tempo** (0,25 / 0,5 / 0,75 / 1 kg pro Woche)
- Kalorien = Grundumsatz (Mifflin-St Jeor) × Aktivität ± Tempo × 1.100 kcal pro Tag, nie unter den Grundumsatz
- Eiweiß 1,8 g pro kg Zielgewicht (beim Halten 1,6 g pro kg), Fett 30 % der Kalorien, Ballaststoffe mind. 30 g, Rest Kohlenhydrate
- Ein eingetragenes Kalorien-Maximum ersetzt die Berechnung

## Programm, Inhalte und persönliche Daten trennen

Drei Teile, streng getrennt:

```
app/        Programm: lebenskompass.html – keine Inhalte, keine persönlichen Daten
content/    Teilbare Inhalte: nur Rezepte (recipes/<id>.json)
personal/   Persönlich, nie weitergeben: Regeln/Allergien (settings/brain.json), Wochenpläne (plans/)
```

**Gesundheitsdaten** – `profiles` (Gewicht, Größe, Alter), `tracking` (Essprotokoll), `cycle` (Zyklus) – liegen **nur** in der Datenbank der App. Sie werden nie exportiert, nie ins Repository geschrieben und nie in ein Weitergabe-Paket gepackt.

- `app/lebenskompass.html` enthält keine Rezepte, Profile, Regeln oder Beispieltexte mit Rezeptdaten. Im Code steht die Einteilung als `DATA_GROUPS` (content / personal / health)
- Die Datenbank ist die Quelle. Nach Änderungen an Rezepten nach `content/recipes/` exportieren, nach Änderungen an Regeln oder Plänen nach `personal/` – und committen
- Die Regeln oben stehen zusätzlich in `settings/brain` (App) und `personal/settings/brain.json`. Bei Änderungen alle drei aktualisieren
- Weitergeben: `scripts/weitergeben.sh` erzeugt `dist/lebenskompass-weitergabe-<datum>.zip` mit Programm + Rezepten (ohne Originaltexte). `dist/` ist nicht im Repository
- In der App: „Profil & Regeln“ → „App weitergeben“ exportiert/importiert nur Rezepte
- Diese Datei (CLAUDE.md) enthält persönliche Regeln und wird nicht weitergegeben

## Design

- Farbpalette (12 Töne, hell → dunkel): `#FAF6F1 #EAE1D8 #DACCBF #C7B9AC` · `#BAA99A #A69482 #957A69 #79685A` · `#6B5747 #5A473A #47362E #2F2320`. Nur diese Töne verwenden
- Seitenhintergrund `#DACCBF`, Kategorie-Kacheln `#BAA99A`, Startkacheln `#A69482`, Schrift auf Kacheln `#47362E`; Flächen `#FAF6F1`, Text `#2F2320`, Knöpfe `#5A473A`
- Kein Dunkelmodus: Die App zeigt immer die helle Palette, auch wenn das Handy im Dunkelmodus ist
- Schriften: Young Serif (Überschriften), Figtree (Text und Bedienung)
- Keine Bilder: Kapitel als Kacheln, Rezepte als Liste über die ganze Breite (nur Titel, Trennstrich unter jedem Rezept)
- Reiterleiste ohne Scrollleiste: Reiter brechen bei wenig Platz um
- Eingabefelder (Text, Suche, Auswahl) immer hell `#FAF6F1` mit Rahmen `#79685A`, beim Schreiben Rahmen `#5A473A`
- Rezeptbereich: Suche oben, Treffer erst nach Eingabe; ohne Suche nur Kapitel-Kacheln und Zufallsgenerator

## Arbeitsweise

- App-URL: https://claude.ai/artifact/NEMo2yd7AXeyKKwiYcJ9Hb
- Nach Änderungen an `app/lebenskompass.html`: auf dieselbe URL publizieren, committen und selbstständig pushen
- Commits ohne Co-Author- oder Session-Zeilen, kein Hinweis auf Claude als Mitautor
- Commit-Nachrichten auf Deutsch
