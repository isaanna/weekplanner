#!/usr/bin/env bash
# Packt Programm und Rezepte zum Weitergeben.
# Persönliche Daten (personal/) und Gesundheitsdaten kommen NICHT mit.
set -euo pipefail
cd "$(dirname "$0")/.."
name="kuechenbuch-weitergabe-$(date +%Y-%m-%d)"
out="dist/$name"
rm -rf "$out" "dist/$name.zip"
mkdir -p "$out"
cp app/kuechenbuch.html "$out/"
cp WEITERGEBEN.md "$out/LIESMICH.md"
python3 - "$out/kuechenbuch-rezepte.json" <<'PY'
import json, glob, os, sys
recipes = []
for f in sorted(glob.glob("content/recipes/*.json")):
    r = json.load(open(f, encoding="utf-8"))
    for k in ("raw", "imageId", "imageUrl"):
        r.pop(k, None)
    recipes.append({"id": os.path.basename(f)[:-5], **r})
json.dump({"format": "kuechenbuch-rezepte", "version": 1, "recipes": recipes},
          open(sys.argv[1], "w", encoding="utf-8"), ensure_ascii=False, indent=2)
print(f"{len(recipes)} Rezepte gepackt")
PY
(cd dist && zip -qr "$name.zip" "$name")
rm -rf "$out"
echo "Fertig: dist/$name.zip"
