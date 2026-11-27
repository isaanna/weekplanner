# Bring!-Helfer einrichten (einmalig, ca. 10 Minuten)

Bring! kann Artikel nur von einer **öffentlich erreichbaren Seite** übernehmen. Der Lebenskompass ist privat, deshalb braucht es einen kleinen Helfer: einen kostenlosen Cloudflare Worker. Er bekommt die Einkaufsliste im Link übergeben und zeigt sie als Seite im Rezeptformat, das Bring! liest. Er speichert nichts.

## 1. Worker anlegen

1. Im Cloudflare-Dashboard links **Compute** → **Workers & Pages** öffnen (je nach Ansicht auch „Workers & Pages“ direkt in der Liste).
2. **Create** bzw. **Erstellen** → **Worker** → **Start with Hello World!** wählen.
3. Als Namen `bring-liste` eintragen → **Deploy**.
4. Danach **Edit code** wählen.
5. Den gesamten Inhalt von `bring-worker.js` (in diesem Ordner) einfügen und den vorhandenen Code damit ersetzen.
6. Oben rechts **Deploy** klicken.
7. Die Adresse des Workers kopieren, z. B. `https://bring-liste.<dein-name>.workers.dev`.

Test: Die Adresse mit `?t=Test&i=1%20kg%20Kartoffeln` im Browser öffnen. Es erscheint eine schlichte Seite mit „Test“ und „1 kg Kartoffeln“.

## 2. In der App eintragen

1. **Profil & Regeln** → **Bring!** → Adresse einfügen → **Speichern**.
2. Mit **Helfer testen** prüfen, dass die Testseite erscheint.

## 3. Benutzen

**Wochenplan** → Einkaufsliste → **In Bring! öffnen**. Alle noch nicht abgehakten Artikel gehen an Bring!. Auf dem Handy öffnet sich die Bring!-App mit den Artikeln zum Hinzufügen.

## Datenschutz

- Übertragen werden nur die Artikel der Einkaufsliste und der Titel der Woche.
- Der Helfer speichert nichts. Bring! ruft die Seite einmal ab, um die Artikel zu lesen.
- Profile, Tracking und Zyklus verlassen die App nie.
