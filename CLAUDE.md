# CLAUDE.md – Gehirn des Küchenbuchs

Anweisungen für Claude bei der Arbeit an diesem Repository und an den Daten des Küchenbuchs.

## Verbotene Lebensmittel

Niemals in Rezepten, Plänen oder Vorschlägen verwenden:

- Zwiebeln (auch Schalotten, Frühlingszwiebeln). Können einfach weggelassen werden
- Blumenkohl
- Gurke
- Brokkoli
- Fenchel

Vor jedem Eintragen von Rezepten automatisch gegen diese Liste prüfen (Zutaten, Schritte, Notizen).

## Vorlieben

- Viel Kartoffeln, mit Fleisch
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
- Nährwerte im Wochenplan müssen pro Person und Tag zum Profil passen (kcal ±10 %, Eiweiß ≥ 90 %)

## Programm und Inhalt trennen

- `kuechenbuch.html` enthält **keine Inhalte**: keine Rezepte, keine Profile, keine Regeln, keine Beispieltexte mit Rezeptdaten
- Alle Inhalte liegen in der Datenbank des Artifacts (`recipes`, `plans`, `profiles`, `tracking`, `settings/brain`)
- Die Regeln oben sind in `settings/brain` gespeichert und dort die Quelle für die App. Bei Änderungen **beides** aktualisieren: diese Datei und `settings/brain`

## Design

- Farbschema Beige / Braun (Akzent Karamell-Braun, Zweitfarbe Olive), mit Dunkelmodus in Espresso-Tönen
- Schriften: Bricolage Grotesque (Überschriften, Bedienelemente), Literata (Text)

## Arbeitsweise

- App-URL: https://claude.ai/artifact/NEMo2yd7AXeyKKwiYcJ9Hb
- Nach Änderungen an `kuechenbuch.html`: auf dieselbe URL publizieren, committen und selbstständig pushen
- Commits ohne Co-Author- oder Session-Zeilen, kein Hinweis auf Claude als Mitautor
- Commit-Nachrichten auf Deutsch
