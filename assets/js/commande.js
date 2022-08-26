//fonction pour ajouter une vente

const path = "http://localhost:5000";


$('#SaveLigneCommande').livequery('submit',   function(e){ e.preventDefault() ; 
    var nom = document.getElementById("entree").value;
    var quantite = document.getElementById("quantity").value;
    var pu = document.getElementById("prix_unitaire").value;
    
    var formData = new FormData();
    formData.append('id_produit', nom);
    formData.append('prix', pu);
    formData.append('quantite', quantite);
    formData.append('id_vente', "1");    
    var data  = {id_produit: nom, id_vente: "1", quantite: quantite};
    console.log(data);
  
  $.post("http://localhost:5000/lignecommande/new", data, function(puerto){
    console.log(puerto.data[0]) ;
   
  }, 'json');

  return false;

});

