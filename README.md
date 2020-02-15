# CODEME-E9-APP

### Zadanie:

Przy użyciu SingleImage API: https://unsplash.com/developers, napisz aplikację do przeglądania obrazów.

Aplikacja ma posiadać następujące widoki:

* **Lista sekcji**, zawierająca kilka wybranych sekcji z bazy zdjęć z miniaturami 10 najnowszych obrazów.
* **Sekcja**, wyświetlająca listę miniatur wszystkich dostępnych obrazów z danej sekcji z infinite scrollem (opcja). Użytkownik ma mieć możliwość wyboru sortowania: po najnowszych lub popularnych. Po najechaniu myszą przy każdej miniaturze powinna pokazywać się liczba ściągnięć, lików oraz państwo (jeśli jest dostępne).
* **Pojedyncze zdjęcie**, wyświetlenie w dużym rozmiarze, wraz z dodatkowymi informacjami udostępnianymi przez api. Zdjęcie powinno się dać likować / sharować za pomocą Facebooka.

Aplikacja powinna zawierać routing i być responsywna. Zalecany stack technologiczny: ES6+, Node.js, React.js, React Router, Webpack, Babel, Styled Components / Sass, inne.
Wszelkie dodatkowe pomysły są mile widziane.


### Praca:

* Cztery zespoły G1, G2, G3, G4
* Kazdy zespół ma swoją tablice w trello
  * https://trello.com/b/wYPfr8vz/codemee9-g1
  * https://trello.com/b/wYPfr8vz/codemee9-g2
  * https://trello.com/b/wYPfr8vz/codemee9-g3
  * https://trello.com/b/wYPfr8vz/codemee9-g4
* Zespoły pracują w metodologi "ala" scrum
* Projekt przygotowany w github:  https://github.com/kaluznymarcin/CODEME-E9-APP/

### Git

* Kazdy zespol ma swoj branch oznaczony jako GRUPA_{NR_GRUPY}
* Zaciągnij projekt na swoj dysk:

    `git clone https://github.com/kaluznymarcin/CODEME-E9-APP.git`

* Przełącz się na swój branch

    `git checkout GRUPA_{NR_GRUPY}`

* Kazde zadanie wykonywane przez członka zespołu powinno byc wykonywane w nowym branchu utworzonym przez osobę wykonującą zadanie:

    `git checkout -b {NAZWA_NOWEGO_BRANCHA}`

    lub

    ```
    git branch {NAZWA_NOWEGO_BRANCHA}
    git checkout {NAZWA_NOWEGO_BRANCHA}
    ```
