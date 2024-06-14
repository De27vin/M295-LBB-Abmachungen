# Abmachungen
In diesem Projekt kann man neue abmachungen erstellen, abfangen, ändern und löschen.
Die Abmachungen beinhalten einen Titel, eine Beschreibung, ein Fälligkeitsdatum und
ein Datum, bei dem sie abgeschlossen wurden, solange sie offen sind ist jenes Datum "null".
## Autor: Devin de Spindler

# Alle Pakete installieren:

## Node.js Framework
npm i express

## Middleware
npm i body-parser

## Session verwaltung
npm i express-session

## Path tools
npm i path

## ESLint aufsetzen
npm init @eslint/config@latest

## Auto restart ddes Servers
npm i nodemon (optional)

## Swagger Dokumentations-tool
npm i swagger-autogen swagger-ui-express

npm run swagger-autogen

## Um den Server zu starten
nodemon index.js

(oder node index.js, falls nodemon nicht installiert)
