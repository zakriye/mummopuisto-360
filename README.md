# Mummopuisto 360

360 asteen kuva- ja videokatselin. Kuvan katseluun käytetään Pannellumia ja
videon katseluun Video.js:ää sekä Pannellumin Video.js-liitännäistä.

## Käyttö omalla koneella

Asenna ensin [Git LFS](https://git-lfs.com/) sekä Python 3 ja suorita:

```sh
git lfs install
git clone https://github.com/zakriye/mummopuisto-360.git
cd mummopuisto-360
git lfs pull
python -m http.server 8000
```

Windowsissa voit käyttää viimeisellä rivillä myös komentoa `py -m http.server 8000`.
Avaa selaimessa <http://localhost:8000/>. Älä avaa HTML-tiedostoa suoraan
`file://`-osoitteella. Pidä palvelin käynnissä katselun ajan; lopeta se
painamalla Ctrl+C.

Katsele ympärillesi vetämällä hiirellä tai sormella. Videon voi käynnistää
sen toistopainikkeesta. Video on suuri, joten latautuminen voi kestää.
Kirjastot ladataan CDN-palveluista, joten katselu vaatii verkkoyhteyden.
Git LFS käyttää GitHubin tallennustilaa ja tiedonsiirtokiintiötä.

GitHub Pages ei tarjoile Git LFS -objekteja mediatiedostoina. Paikallinen
palvelin toimii, kun video on ensin ladattu Git LFS:llä yllä olevien ohjeiden
mukaisesti.
