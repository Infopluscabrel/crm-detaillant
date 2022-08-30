//fonction pour ajouter une ligne de commande

const path = "http://localhost:5000";


$('#SaveLigneCommande').livequery('submit',   function(e){ e.preventDefault() ; 
    var nom = document.getElementById("entree").value;
    var quantite = document.getElementById("quantity").value;
    var prix = document.getElementById("prix_unitaire").value; 
    var prix_total = document.getElementById("prix_total").value;
    var data  = {id_produit: nom, id_vente: "1", quantite: quantite};
    console.log(data);

  
  $.post("http://localhost:5000/lignecommande/new", data, function(puerto){
    console.log(puerto);
    
  }, 'json');

  return false;

});


$('#entree').livequery('change',   function(e){ 
 id = $('#entree').val(); 
  console.log(id);
  
$.get("http://localhost:5000/article/profile/"+id, function(puerto){
  
  $("#prix_unitaire").val(puerto.data[0].prix) ;
}, 'json');

return false;

});

$('#quantity').livequery('change',   function(e){ 
  id = $('#entree').val(); 
   console.log(id);
  qte = document.getElementById("quantity").value;
  console.log(qte);
 
 $.get("http://localhost:5000/article/profile/"+id, function(puerto){
   
   $("#prix_total").val(puerto.data[0].prix * qte ) ;
   }, 'json');
 return false;
 
 });


$('#AjouterProduit').livequery('click', function(e){
  fetch("http://localhost:5000/article/all") 
  .then(function(response){
  return response.json();
  })
  .then(function(data){
    console.log(data);
  localStorage.setItem("articles", JSON.stringify(data));
    if(!localStorage.getItem("panier")){
    localStorage.setItem("panier", "[]");
    }
  });
  
  
  function addItemeToPanier(articleId){
    let articles = JSON.parse(localStorage.getItem("articles"));
    let panier = JSON.parse(localStorage.getItem("panier"));
    console.log("article");
    console.log(articles);
    console.log("fin");
    let article = articles.data.find(function(item){
      return item.id == articleId;
    });
    if (panier.lenght == 0){
      panier.push("article");
    }else{
      let res = panier.find(element => element.id == articleId);
      if(res === undefined){
        panier.push(article);
      }
    }
    localStorage.setItem("panier", JSON.stringify(articles));
  //  console.log(panier);
  }
  id = $('#entree').val(); 
  addItemeToPanier(id);
  document.getElementById("entree").value ="selectionner le nom de l'article";
  document.getElementById("quantity").value ="";
  document.getElementById("prix_unitaire").value ="";
  document.getElementById("prix_total").value ="";
});

$('#ValiderCommande').livequery('click', function(e){
  window.location.href="file:///C:/Users/dell/Documents/D%C3%A9taillant%20Dashboard/detaillant/crm-paiecash/facture.html";
});