let articles = JSON.parse(localStorage.getItem("articles")).data;
let panier = JSON.parse(localStorage.getItem("panier"));
console.log("article");
console.log(articles);
console.log("fin");
console.log("panier");
console.log(panier);
console.log("fin");
$.each(panier, function(key, value){
    $('tbody').append(`<tr>
    <th class="nom"></th>
    <th class="nom">${articles.ID_PRODUIT}</th>
    <th class="quantite">${articles.QUANTITE}</th>
    <th class="prix">${articles.prix_total}</th>
  </tr>`)
})
   