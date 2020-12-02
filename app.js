function personnalise(id, texte) {
    let chercher = document.getElementById(id);
    let para = texte;
    chercher.innerHTML = para;
}
personnalise('p1', "Je suis le paragraphe 1");
personnalise('p2', "Je suis le paragraphe 2");
personnalise('p3', "Je suis le paragraphe 3");
personnalise('p4', "Je suis le paragraphe 4");
personnalise('p5', "Je suis le paragraphe5");