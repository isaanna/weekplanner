# weekplanner – Mein Küchenbuch

Persönliches Kochbuch mit Wochenplaner, Meal-Prep-Ablauf, Einkaufsliste und Ernährungs-Tracking.
Die App ist eine einzelne HTML-Seite, die als Artifact auf claude.ai läuft:

**App:** https://claude.ai/artifact/NEMo2yd7AXeyKKwiYcJ9Hb

## Bereiche

| Reiter | Was er kann |
| --- | --- |
| **Start** | Zwei Wege: *Rezepte* oder *Wochenplan*, der Zufallsgenerator und darunter, was heute pro Person schon gegessen wurde, verglichen mit dem Tagesbedarf. |
| **Rezepte** | Große Suche oben: Lebensmittel eingeben, Treffer erscheinen als Kacheln mit Titel. Ohne Suche: Kapitel als Kacheln und der Zufallsgenerator „Was koche ich heute?“. Filter nach Eigenschaften. Pro Rezept: Portionsrechner, Nährwerttabelle, Haltbarkeit, Knopf zum Tracken. |
| **Wochenplan** | Vorgaben in eigenen Worten eingeben (wann vorkochen, für wen). Claude plant Frühstück, Mittag- und Abendessen (keine Snacks) mit Vorkoch-Ablauf, Nährwerten pro Person, Einkaufsliste und schlägt bei Bedarf neue Rezepte vor. Der ganze Plan lässt sich ins Tracking übernehmen. |
| **Tracking** | Wochenraster Montag–Sonntag × Frühstück/Mittagessen/Abendessen/Snack. Per Klick Rezept oder freien Eintrag hinzufügen, Tagessumme gegen Profilziel. „Ganze Woche löschen“ leert die angezeigte Woche. |
| **Profil & Regeln** | Profile pro Person (Alter, Größe, Gewicht, Aktivität, Ziel, optional kcal-Maximum) mit berechnetem Tagesbedarf. Regeln für Claude: verbotene Lebensmittel, Vorlieben, weitere Regeln. |

## Rezepte hinzufügen

- **WhatsApp / E-Mail:** Text kopieren → „+ Rezept einfügen“ → einfügen → „Mit Claude ordnen“.
- **Instagram / Website:** Link ins Feld „Link zum Original“ eintragen und zusätzlich die Bildunterschrift einfügen oder Screenshots hochladen. Die Seite kann fremde Webseiten nicht selbst öffnen; der Link wird als Quelle gespeichert.
- **Foto:** Kochbuchseite, Zettel oder Screenshot hochladen.
- **Über Claude im Chat:** Rezepte schicken, Claude trägt sie direkt in die Datenbank ein.

## Einkaufsliste in Bring!

Im Wochenplan „Für Bring! kopieren“ wählen. Kopiert wird jeder noch nicht abgehakte Artikel in einer eigenen Zeile (`Artikel, Menge`). In Bring! ins Eingabefeld einfügen.
Ein „Teilen“-Knopf mit Auswahl der Bring!-App ist in claude.ai nicht möglich: Die App läuft in einem geschützten Rahmen, der das Teilen-Menü des Handys sperrt.
*Noch zu prüfen:* ob Bring! mehrere Zeilen beim Einfügen in einzelne Artikel aufteilt.

## Tagesbedarf

- Grundumsatz nach Mifflin-St Jeor: `10 × kg + 6,25 × cm − 5 × Alter + 5` (Männer) bzw. `− 161` (Frauen)
- × Aktivitätsfaktor (1,2 – 1,9)
- Ziel: Abnehmen −15 %, Halten ±0, Aufbauen +10 %
- Ein eingetragenes **kcal-Maximum** ersetzt den berechneten Wert
- Eiweiß 1,6 g/kg (halten) bzw. 2,0 g/kg, Fett 30 % der kcal, Ballaststoffe mind. 30 g, Rest Kohlenhydrate

## Ordner

```
app/        Code – kuechenbuch.html, enthält keine Inhalte
content/    Inhalte – Sicherung der Datenbank als JSON
            recipes/   ein Rezept pro Datei
            plans/     gespeicherte Wochenpläne
            settings/  Regeln (verbotene Lebensmittel, Vorlieben)
```

Profile und Tracking werden nicht in `content/` gesichert, weil sie persönliche Daten enthalten.

## Daten

Die App selbst enthält keine Inhalte. Alles liegt in der Datenbank des Artifacts; `content/` ist eine Sicherung davon:

| Sammlung | Inhalt |
| --- | --- |
| `recipes` | Rezepte: `title, category, tags[], servings, time, shelfLifeDays, ingredients[], steps[], notes, source, sourceUrl, nutrition{kcal, protein, carbs, fat, fiber}` (pro Portion) |
| `plans` | Wochenpläne: `title, summary, brief, newRecipes[], cook[], prep[], days[{day, meals[{slot, ref, portions, portionsByPerson{}, note}]}], shopping[], pantry[], tips[], checked{}` |
| `profiles` | Personen: `name, sex, age, height, weight, activity, goal, kcalMax` |
| `tracking` | Einträge: `date (YYYY-MM-DD), slot, profileId, recipeId, title, portions, nut{}` |
| `settings/brain` | Regeln: `forbidden[], preferences, rules` |

## Entwicklung

- Quellcode: `app/kuechenbuch.html` (eine Datei, kein Build-Schritt)
- Veröffentlichen: Datei als Artifact auf dieselbe URL publizieren (Capabilities `db` und `sample` bleiben bestehen)
- Ausbauplan: [`plan.md`](plan.md)
