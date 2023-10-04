var filter = [];
function getProduct() {
  var Produit = JSON.parse(localStorage.getItem('Produit'))

  var html = ""
  for (let i = 0; i < Produit.length; i++) {
    html = html + "<div class='col-md-4 col-xs-6'><div class='product'><div class='product-img'><img style='max-width:80%!important' src='" + Produit[i].img + "' ></img><div class='product-label'></div></div><div class='product-body'><p class='product-category' id='catégorie'>" + Produit[i].Catégorie + "</p><h2 class='product-Brand' id='marque'><a href='#'>" + Produit[i].Marque + "</a></h2><h3 class='product-name' id='produit'><a href='#'>" + Produit[i].Nom + "</a></h3><h4 class='product-price' id='price'>" + Produit[i].Prix + "TND" + "</h4><div class='product-btns'><button class='quick-view'><i class='fa fa-eye'></i><span class='tooltipp'  onclick= 'view(" + i + ")'>quick view</span></button></div></div><div class='add-to-cart'><button onclick='AddToCart(" + i + ")' class='add-to-cart-btn'><i class='fa fa-shopping-cart'></i> add to cart</button></div></div></div>"

    document.getElementById('produits').innerHTML = html;

  }

}
function AddToCart(i) {
  var Produit = JSON.parse(localStorage.getItem('Produit'))
  var Panier = JSON.parse(localStorage.getItem('prodPanier'))
  const object = {
    produit: Produit[i],
    quantite: 1,
    totalproduit: Produit[i].prix
  }
  Panier.push(object)
  localStorage.setItem('prodPanier', JSON.stringify(Panier))
}
function view(i) {
  localStorage.setItem('indexProduitView', i)
  window.location.href = "./product1.html"
}
function filterProduct(value) {
  if (filter.includes(value)) {
    const index = filter.indexOf(value);
    filter.splice(index, 1);
  } else {
    filter.push(value);
  }
  var Produit = JSON.parse(localStorage.getItem('Produit'));
  if (filter.length !== 0) {
    const prod = Produit.filter(produit => {
      if (filter.includes(produit.Catégorie)) {
        return true;
      } else {
        return false;
      }
    });
    getFilteredProduct(prod);
  } else {
    getFilteredProduct(Produit);

  }
}
function getFilteredProduct(Produit) {
  var html = ""
  for (let i = 0; i < Produit.length; i++) {
    html = html + "<div class='col-md-4 col-xs-6'><div class='product'><div class='product-img'><img style='max-width:80%!important' src='" + Produit[i].img + "' ></img><div class='product-label'></div></div><div class='product-body'><p class='product-category' id='catégorie'>" + Produit[i].Catégorie + "</p><h2 class='product-Brand' id='marque'><a href='#'>" + Produit[i].Marque + "</a></h2><h3 class='product-name' id='produit'><a href='#'>" + Produit[i].Nom + "</a></h3><h4 class='product-price' id='price'>" + Produit[i].Prix + "TND" + "</h4><div class='product-btns'><button class='quick-view'><i class='fa fa-eye'></i><span class='tooltipp'  onclick= 'view(" + i + ")'>quick view</span></button></div></div><div class='add-to-cart'><button onclick='AddToCart(" + i + ")' class='add-to-cart-btn'><i class='fa fa-shopping-cart'></i> add to cart</button></div></div></div>"

    document.getElementById('produits').innerHTML = html;

  }

}