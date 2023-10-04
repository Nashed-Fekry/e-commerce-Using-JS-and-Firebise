function afficherProduit() {
    var Produit = JSON.parse(localStorage.getItem('Produit'))
    let i = localStorage.getItem('indexProduitView');
    document.getElementById('name').innerHTML = Produit[i].Nom;
    document.getElementById('prix').innerHTML = Produit[i].Prix + ' DT';
    document.getElementById('description').innerHTML = Produit[i].Description;
    document.getElementById("product-imgs").innerHTML = '<div class="product-preview"><img src="' + Produit[i].img + '" alt=""></div>';
    document.getElementById("product-main-img").innerHTML = '<div class="product-preview"><img src="' + Produit[i].img + '" alt=""></div>';

}
function Add() {


    var Produit = JSON.parse(localStorage.getItem('Produit'))
    var Panier1 = JSON.parse(localStorage.getItem('prodPanier1'))
    let i = localStorage.getItem('indexProduitView');

    const object = {
        produit: Produit[i],
        totalproduit: Produit[i].Prix,
        quantité: document.getElementById('number').value
    }
    Panier1.push(object)
    localStorage.setItem('prodPanier1', JSON.stringify(Panier1))

}
function choice() {
    var Panier1 = JSON.parse(localStorage.getItem('prodPanier1'))
    let i = localStorage.getItem('indexProduitView');
    let Qte= 0 ;
    html = ""
    for (let i = 0; i < Panier1.length; i++) {
        html = html + "<div class='product-widget'><div class='product-img'><img src='" + Panier1[i].produit.img + "'></div><div class='product-body'><h3 class='product-name'><a href='#'>" + Panier1[i].produit.Nom + "</a></h3><h4 class='product-price'><span class='qty'>" + Panier1[i].quantité + "X" + "</span>" + Panier1[i].totalproduit + "DT" + "</h4></div><button class='delete' onclick='supprimer(" + i + ")'><i class='fa fa-close'></i></button></div>"
        document.getElementById('panier').innerHTML = html;
        document.getElementById('Qty').innerHTML = Qte;


    }
     
}
function supprimer(i) {
    var del = JSON.parse(localStorage.getItem('prodPanier1'))
    del.splice(i, 1);
    localStorage.setItem('prodPanier1', JSON.stringify(del));
    choice();
    }