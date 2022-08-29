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
localStorage.setItem('panier', JSON. stringify([]));
$('#AjouterProduit').livequery('click', function(e){
  var nom = "";
  var quantite = "";
  var prix_total = ""; 
  document.getElementById("entree").innerHTML = nom;
  document.getElementById("quantity").innerHTML = quantite;
  document.getElementById("prix_total").innerHTML = prix_total;
  var panier = localStorage.getItem('panier');
  panier.push({
    nom, quantite, prix_total
  });
  console.log(panier);
  

})

