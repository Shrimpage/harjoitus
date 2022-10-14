"use strict";

function laskin(luku1,luku2) {
    let laskettava;

    // tarkistetaan luku ja tulostetaan virheilmoitus,
    // jos se ei ole väliltä 1-1000
    if (luku1 >= 1 && luku1 <=1000 && luku2 >= 1 && luku2 <=1000) {
        let kerrottu = luku1 * luku2;
        let jaettu = luku1 / luku2;
        let plus = parseInt(luku1) + parseInt(luku2);
        let miinus = luku1 - luku2;

        // teksti ja HTML-taulukon alku
        laskettava = "<h2>Laskutoimituksen tulokset luvuilla " + luku1 
            + " ja " + luku2 + "</h2>\n" + "<table>\n";
        laskettava = laskettava + "<tr>\n";

        // otsikko
        laskettava = laskettava + "<th>Laskutoimitus</th>" + "<th>Tulos</th>";
        laskettava = laskettava + "</tr>\n";

        // kertolaskun rivi
        laskettava = laskettava + "<td>" + "Kertolasku" + "</td>" + "<td>" 
            + luku1 + " x " + luku2 + " = " + kerrottu + "</td>\n";
        laskettava = laskettava + "</tr>\n";
        laskettava = laskettava + "<tr>\n";
        
        // jakolaskun rivi
        laskettava = laskettava + "<td>" + "Jakolasku" + "</td>" + "<td>" 
            + luku1 + " / " + luku2 + " = " + jaettu + "</td>\n";
        laskettava = laskettava + "</tr>\n";
        laskettava = laskettava + "<tr>\n";
        
        // summan rivi        
        laskettava = laskettava + "<td>" + "Summa" + "</td>" + "<td>" + luku1 
            + " + " + luku2 + " = " + plus + "</td>\n";
        laskettava = laskettava + "</tr>\n";
        laskettava = laskettava + "<tr>\n";

        // erotuksen rivi
        laskettava = laskettava + "<td>" + "Erotus" + "</td>" + "<td>" + luku1 
            + " - " + luku2 + " = " + miinus + "</td>\n";
        laskettava = laskettava + "</tr>\n";
        laskettava = laskettava + "</table>";
    } else {
        // virheilmoitus
        laskettava = "<p>Molempien lukujen tulee olla väliltä 1-1000!</p>\n";
    }

    // div-elementtiin scriptin tulokset
    document.getElementById('laskin').innerHTML = laskettava;
}