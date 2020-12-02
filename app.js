function personnalise(id, texte) {
    let chercher = document.getElementById(id);
    let rien = " ";
    let para = rien.replace(" ", texte);
    chercher.innerHTML = para;
}

let id = 'p1';
let texte = "Je suis le paragraphe 1";
personnalise(id, texte);

let id2 = 'p2';
let texte2 = "Je suis le paragraphe 2";
personnalise(id2, texte2);

let id3 = 'p3';
let texte3 = "Je suis le paragraphe 3";
personnalise(id3, texte3);

let id4 = 'p4';
let texte4 = "Je suis le paragraphe 4";
personnalise(id4, texte4);

let id5 = 'p5';
let texte5 = "Je suis le paragraphe 5";
personnalise(id5, texte5);