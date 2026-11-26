# CLAUDE.md – Gehirn des Küchenbuchs

Anweisungen für Claude bei der Arbeit an diesem Repository und an den Daten des Küchenbuchs.

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
- Nährwerte im Wochenplan müssen pro Person und Tag zum Profil passen (kcal ±10 %, Eiweiß ≥ 90 %), ausgeglichen nur über diese drei Mahlzeiten und Portionsgrößen

## Programm und Inhalt trennen

```
app/        Code: kuechenbuch.html (die App, ohne Inhalte)
content/    Inhalte: Sicherung der Datenbank als JSON (recipes/, plans/, settings/)
```

- `app/kuechenbuch.html` enthält **keine Inhalte**: keine Rezepte, keine Profile, keine Regeln, keine Beispieltexte mit Rezeptdaten
- Alle Inhalte liegen in der Datenbank des Artifacts (`recipes`, `plans`, `profiles`, `tracking`, `settings/brain`)
- Die Datenbank ist die Quelle. `content/` ist eine Sicherung: nach dem Eintragen oder Ändern von Rezepten, Plänen oder Regeln neu exportieren (ArtifactData `list` mit `out_dir: content`) und committen
- `profiles` und `tracking` werden **nicht** exportiert (persönliche Daten wie Gewicht, Alter, Essprotokoll)
- Die Regeln oben sind in `settings/brain` gespeichert und dort die Quelle für die App. Bei Änderungen **beides** aktualisieren: diese Datei und `settings/brain`

## Design

- Farbpalette (12 Töne, hell → dunkel): `#FAF6F1 #EAE1D8 #DACCBF #C7B9AC` · `#BAA99A #A69482 #957A69 #79685A` · `#6B5747 #5A473A #47362E #2F2320`. Nur diese Töne verwenden
- Seitenhintergrund `#DACCBF`, alle Kacheln einheitlich `#A69482` mit Schrift `#47362E`; Flächen `#FAF6F1`, Text `#2F2320`, Knöpfe `#5A473A`
- Kein Dunkelmodus: Die App zeigt immer die helle Palette, auch wenn das Handy im Dunkelmodus ist
- Schriften: Young Serif (Überschriften), Figtree (Text und Bedienung)
- Keine Bilder: Rezepte und Kapitel erscheinen als einfache Kacheln mit Titel, alle in derselben Farbe
- Rezeptbereich: Suche oben, Treffer erst nach Eingabe; ohne Suche nur Kapitel-Kacheln und Zufallsgenerator

## Arbeitsweise

- App-URL: https://claude.ai/artifact/NEMo2yd7AXeyKKwiYcJ9Hb
- Nach Änderungen an `app/kuechenbuch.html`: auf dieselbe URL publizieren, committen und selbstständig pushen
- Commits ohne Co-Author- oder Session-Zeilen, kein Hinweis auf Claude als Mitautor
- Commit-Nachrichten auf Deutsch
