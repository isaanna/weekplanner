# content – Inhalte des Küchenbuchs

Sicherung der Datenbank der App als JSON. Die App liest **nicht** aus diesem Ordner, sondern aus ihrer Datenbank; dieser Ordner ist die versionierte Kopie davon.

| Ordner | Inhalt |
| --- | --- |
| `recipes/` | ein Rezept pro Datei (`<id>.json`) |
| `plans/` | gespeicherte Wochenpläne |
| `settings/` | `brain.json`: verbotene Lebensmittel, Vorlieben, Regeln |

Nicht gesichert: `profiles` und `tracking` (persönliche Daten).
