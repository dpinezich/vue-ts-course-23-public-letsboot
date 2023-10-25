# Schulungsvorbereitung VueJS 3 + TypeScript

Bitte gehen Sie die Vorbereitungsübung durch, um sicherzustellen, dass Ihre Umgebung für die Schulung bereit ist und kontaktieren Sie mich möglichst schnell ([david.pinezich@apigenio.ch](mailto:david.pinezich@apigenio.ch)), sollten Probleme auftreten. Ich helfe Ihnen gerne. Zeitbedarf: Max. 20min.

## Benötigte Software

Die folgende Software ist wichtig für die Schulung. Bitte stellen Sie sicher, dass diese installiert ist und funktioniert. Dort wo eine Installation nicht notwendig ist, wurde (Optional) angehängt. Selbstverständlich obliegt die Konfiguration der Software ihnen selbst und kann auch noch während der Schulung optimiert werden.

Haftungsausschluss: Es kann zu Konflikten mit vorhandener Software, Konfiguration oder Richtlinien kommen - jede Installation, Konfiguration oder jeder andere in diesem Dokument beschriebene Schritt liegt in Ihrem eigenen Ermessen und dessen Ihrer Firma. Unsere Tests weisen jedoch bisher nicht auf Probleme hin.

- Node.js - Long Term Support (LTS) (v18.17.1 / v16.20.2) Version
    - Download und Installation von: https://nodejs.org/en/
- Wir empfehlen die Verwendung eines Node-Versionsmanagers, wenn Sie vorhaben, node.js/npm häufiger zu verwenden und zu wechseln:
    - Für MacOS, Linux, Unix und Windows mit WSL https://github.com/nvm-sh/nvm
    - Für Windows ohne WSL: https://github.com/coreybutler/nvm-windows
    - Installieren Sie die LTS Node.js Version mit `nvm install` und `nvm use`
- npm - Package manager
    - Wird üblicherweise direkt mit Node.js installiert (npm sollte danach auf der Kommandozeile verfügbar sein).
- yarn - Package manager (optional) `npm install --global yarn`
- GIT für version control - https://git-scm.com/
- @vue/cli
    - Installiert mittels folgendem Kommando: `npm init vue@latest`
- npm install -g typescript
- Option 1: WebStorm oder PhpStorm
    - Extensions
        - Vue.js
        - IntelliVue (Incompatible with newest Version of IntelliJ an update is expected)
        - Vue Component Creator
        - Prettier
        - Optional: Emmet Everywhere
        - Optional: Run Configuration for TypeScript
- Option 2: Visual Studio Code - https://code.visualstudio.com/
    - Das "code" Kommando in der PATH-Variable installieren
        - Für macOS und Linux cmd+shift+p oder ctrl+shift+p drücken und danach in vscode 'Shell Command: install "code" in PATH' selektieren und akzeptieren.
        - Unter Windows passiert dies direkt bei der Installation
    - Extensions:
        - Volar, https://marketplace.visualstudio.com/items?itemName=vue.volar
        - ESLint (automatisches Linting von Code): https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
        - LiveServer (automatische Anzeige von Webinhalten) https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer
        - Veraltet: Vetur (rather for Vue2, can be ommitted for Vue3), https://marketplace.visualstudio.com/items?itemName=octref.vetur
        - Optional: Vue VSCode Snippets, https://marketplace.visualstudio.com/items?itemName=sdras.vue-vscode-snippets
        - Optional: Chrome Debugger (öffnet Chrome und erlaubt im Editor “Break Points”)
        - Optional: vscode-icons (leichtere Trennung von Symbolen für verschiedene Dateitypen mit derselben Erweiterung, z. B. für Tests)
- Chrome Browser (optional)
    - Extensions
        - [Vue.js DevTools](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en)
- Nur für Windows:
    - Alternativ der GitBash anstelle von PowerShell / WSL: https://gitforwindows.org/

## Vorbereitungsaufgabe

Nachdem Sie die oben beschriebene Software installiert haben, führen Sie bitte diese Übung auf Ihrem Gerät durch, um sicherzustellen, dass Sie ein Vue-Projekt erstellen, bearbeiten und ausführen können:

1. Installieren Sie die erforderliche Software wie oben beschrieben nach Ihren Wünschen
2. Erzeugen Sie eine minimale Vue-App, um Ihr Setup zu testen:
    1. Öffnen Sie die Befehlszeile und gehen Sie zu einem Ordner, in dem Sie Ihre Projekte erstellen möchten (ie. `cd ~/Desktop/`) nun führen Sie folgende Befehle aus:
    2. Führen Sie in ihrer  GitBash/WSL/Terminal-Konsole folgenden Befehl aus `npm init vue@latest`
    3. Erstellen Sie ein neues Projekt mit dem Namen `example`
    4. Selektieren Sie
    - `Add TypeScript: Yes`,
    - `Add JSX Support: No`,
    - `Add Vue Router for Single Page Application development?: Yes`,
    - `Add Pinia for state management?: Yes`,
    - `Add Vitest for Unit Testing?: Yes`,
    - `Add an End-to-End Testing Solution?: No`,
    - `Add ESLint for code quality?: Yes`,
    - `Add Prettier for code formatting?: Yes`,
3. Öffnen Sie nun das erstellte Projekt mit Ihrer gewählten IDE
4. Verwenden Sie die eingebaute Shell (oder Ihre GitBash/WSL/Terminal-Konsole): `npm install`
5. Als ersten Test führen Sie die Standard-Unit-Tests mit dem Befehl: `npm run test:unit`
6. Im gleichen Verzeichnis führen Sie bitte folgendes Kommando aus: `npm run format` und `npm run dev` um das neue Projekt auf einem lokalen Entwicklungs-Webserver bereitzustellen
7. Öffnen Sie die erstellte App üblicherweise unter: http://127.0.0.1:5173/ (Der Port ist evtl. unterschiedlich)
8. Wir werden nun einige Änderungen vornehmen, um zu sehen, wie die Anwendung in Ihrem Browser aktualisiert wird:
    1. Öffnen Sie die Datei: `src/components/HelloWorld.vue`
    2. Entfernen Sie allen Code innerhalb der `<template></template>` Tags
    3. Fügen Sie folgende Zeile hinzu `<h1>{{title}}</h1>` innerhalb des `<template></template>` Blocks
    4. Ändern Sie nun `defineProps msg` in`defineProps title`
    5. Öffnen Sie nun die Datei HelloWorld.spec.ts und ändern Sie `msg` in`title`
    6. Öffnen Sie nun die Datei `App.vue` und ändern Sie den Inhalt der msg property welches innerhalb der `<HelloWorld>` Komponente in `title="My first Vue app"` (bitte testen Sie auch, ob die automatischen Vorschläge, IntelliSense funktioniert)
    7. Laden Sie nun die Webseite unter http://127.0.0.1:5173/ (Der Port ist evtl. unterschiedlich) und kontrollieren Sie die Ausgabe. Zusätzlich kann auch noch `npm run test:unit` ausgeführt werden, um die Tests zu kontrollieren.
9. Schliessen Sie ihre IDE und beenden Sie die noch laufende `npm run dev` Session
10. Ende, vielen Dank!