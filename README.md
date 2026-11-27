# weekplanner – Mein Lebenskompass

Persönliches Kochbuch mit Wochenplaner, Meal-Prep-Ablauf, Einkaufsliste und Ernährungs-Tracking.
Die App ist eine einzelne HTML-Seite, die als Artifact auf claude.ai läuft:

**App:** https://claude.ai/artifact/NEMo2yd7AXeyKKwiYcJ9Hb

## Bereiche

| Reiter | Was er kann |
| --- | --- |
| **Start** | „Hoi, Name“, darunter was heute jede Person schon gegessen hat (alle fünf Nährwerte gegen das Ziel) und Isas aktuelle Zyklusphase mit einem Satz zur Stimmung. |
| **Rezepte** | Große Suche oben: Lebensmittel eingeben, Treffer erscheinen als Kacheln mit Titel. Ohne Suche: Kapitel als Kacheln und der Zufallsgenerator „Was koche ich heute?“. Filter nach Eigenschaften. Pro Rezept: Portionsrechner, Nährwerttabelle, Haltbarkeit, Knopf zum Tracken. |
| **Wochenplan** | Vorgaben in eigenen Worten eingeben (wann vorkochen, für wen). Claude plant Frühstück, Mittag- und Abendessen (keine Snacks) mit Vorkoch-Ablauf, Nährwerten pro Person, Einkaufsliste und schlägt bei Bedarf neue Rezepte vor. Der ganze Plan lässt sich ins Tracking übernehmen. |
| **Tracking** | Wochenraster Montag–Sonntag × Frühstück/Mittagessen/Abendessen/Snack. Per Klick Rezept oder freien Eintrag hinzufügen, Tagessumme gegen Profilziel. „Ganze Woche löschen“ leert die angezeigte Woche. |
| **Zyklus** | Monatskalender mit Phasen in Pastellfarben (Menstruation, Follikel, Eisprung, Luteal, PMS), Eintrag pro Tag (Tage mit/ohne Blutung, Eisprung gespürt, Notiz), Vorhersage der nächsten Tage und des Eisprungs aus den letzten 3 Zyklen. Keine Verhütungsmethode. |
| **Profil & Regeln** | Profile pro Person (Geburtsdatum, Größe, Gewicht, Aktivität, Ziel, optional kcal-Maximum) mit berechnetem Tagesbedarf. Regeln für Claude: verbotene Lebensmittel, Vorlieben, weitere Regeln. |

## Rezepte hinzufügen

- **WhatsApp / E-Mail:** Text kopieren → „+ Rezept einfügen“ → einfügen → „Mit Claude ordnen“.
- **Instagram / Website:** Link ins Feld „Link zum Original“ eintragen und zusätzlich die Bildunterschrift einfügen oder Screenshots hochladen. Die Seite kann fremde Webseiten nicht selbst öffnen; der Link wird als Quelle gespeichert.
- **Foto:** Kochbuchseite, Zettel oder Screenshot hochladen.
- **Über Claude im Chat:** Rezepte schicken, Claude trägt sie direkt in die Datenbank ein.

## Einkaufsliste in Bring!

Im Wochenplan **„In Bring! öffnen“**: Alle noch nicht abgehakten Artikel gehen an die Bring!-App.
Dafür braucht es einmalig einen kleinen Helfer (kostenloser Cloudflare Worker), weil Bring! nur öffentliche Seiten lesen kann und die App privat ist. Code und Anleitung: [`integrations/`](integrations/BRING.md). Die Adresse des Helfers wird in der App unter „Profil & Regeln“ → „Bring!“ eingetragen.

## Tagesbedarf

- Im Profil: Gewicht jetzt, Zielgewicht und Tempo (0,25 – 1 kg pro Woche)
- Grundumsatz nach Mifflin-St Jeor: `10 × kg + 6,25 × cm − 5 × Alter + 5` (Männer) bzw. `− 161` (Frauen), × Aktivitätsfaktor (1,2 – 1,9)
- Abnehmen/Zunehmen: pro 1 kg pro Woche täglich 1.100 kcal weniger bzw. mehr (7.700 kcal pro kg), nie unter den Grundumsatz
- Eiweiß 1,8 g pro kg Zielgewicht (Halten: 1,6 g pro kg), Fett 30 % der kcal, Ballaststoffe mind. 30 g, Rest Kohlenhydrate
- Ein eingetragenes **kcal-Maximum** ersetzt den berechneten Wert
- Tracking und Wochenplan zeigen pro Person und Tag alle fünf Werte mit Balken (gelb = zu wenig, rot = zu viel)

## Ordner

```
app/        Programm – lebenskompass.html, enthält keine Inhalte
content/    Teilbare Inhalte – Rezepte als JSON (ein Rezept pro Datei)
personal/   Persönlich – Regeln/Allergien und Wochenpläne, nie weitergeben
scripts/    weitergeben.sh – packt Programm + Rezepte als ZIP
integrations/ bring-worker.js + BRING.md – Bring!-Helfer (Cloudflare Worker)
```

Gesundheitsdaten (Profile, Tracking, Zyklus) liegen nur in der Datenbank der App und nirgends im Repository.

## Weitergeben

- **Aus dem Repository:** `./scripts/weitergeben.sh` → `dist/lebenskompass-weitergabe-<datum>.zip` mit `lebenskompass.html`, `lebenskompass-rezepte.json` und einer Anleitung ([WEITERGEBEN.md](WEITERGEBEN.md))
- **Aus der App:** „Profil & Regeln“ → „App weitergeben“ → „Rezepte exportieren“ bzw. „Rezepte importieren“
- In beiden Fällen gehen nur Programm und Rezepte mit – keine Profile, kein Tracking, kein Zyklus, keine Wochenpläne, keine Regeln oder Allergien

## Daten

Die App selbst enthält keine Inhalte. Alles liegt in der Datenbank des Artifacts; `content/` (Rezepte) und `personal/` (Regeln, Pläne) sind Sicherungen davon:

| Sammlung | Inhalt |
| --- | --- |
| `recipes` | Rezepte: `title, category, tags[], servings, time, shelfLifeDays, ingredients[], steps[], notes, source, sourceUrl, nutrition{kcal, protein, carbs, fat, fiber}` (pro Portion) |
| `plans` | Wochenpläne: `title, summary, brief, newRecipes[], cook[], prep[], days[{day, meals[{slot, ref, portions, portionsByPerson{}, note}]}], shopping[], pantry[], tips[], checked{}` |
| `profiles` | Personen: `name, sex, birthDate, height, weight, targetWeight, pace, activity, kcalMax` (Alter wird aus `birthDate` berechnet) |
| `tracking` | Einträge: `date (YYYY-MM-DD), slot, profileId, recipeId, title, portions, nut{}` |
| `settings/brain` | Regeln: `forbidden[], preferences, rules` |
| `settings/cycle` | Stimmungstexte je Phase: `moods{mens, foll, ov, lut, pms}` |
| `cycle` | Zyklus (Gesundheitsdaten): `config` {profileId, contraception, periodLength}, `d-YYYY-MM-DD` {bleeding, felt, ovulation, note} |
| `data/users/<id>/me` | Welches Profil zum angemeldeten Konto gehört (für „Hoi, Name“) |

## Entwicklung

- Quellcode: `app/lebenskompass.html` (eine Datei, kein Build-Schritt)
- Veröffentlichen: Datei als Artifact auf dieselbe URL publizieren (Capabilities `db` und `sample` bleiben bestehen)
- Ausbauplan: [`plan.md`](plan.md)
