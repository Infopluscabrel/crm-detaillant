const path = "http://localhost:5000";

// fonction pour enregister un revendeur
$('#saveRevendeur').livequery('submit',   function(e){ e.preventDefault() ; 
    var client = document.getElementById("client").value;
    var email = document.getElementById("email").value;
    var code = document.getElementById("suffixe").value;
    var telephone = document.getElementById("phone").value;
    var mot_de_passe = document.getElementById("mdp").value;
    var estLimite = document.getElementById("EstLimite");
    var montantLimite = document.getElementById(montantLimite);
    var offre = document.getElementById("offre").value;
    var precompte = document.getElementById("precompte").value;
    var ristourne = document.getElementById("ristourne").value;
    var details = document.getElementById("details").value;
    var engagement = document.getElementById("engagement").value;
    var date_creation = document.getElementById("date").value;
    var etat_signature = document.getElementById("etat").value;
    var date_signature = document.getElementById("dateSignature").value;
    var cni = document.getElementById("cni").value;
    var patente = document.getElementById("patente").value;
    var nui = document.getElementById("nui").value;
    var etat_validation = document.getElementById("etatValidation").value;
    var date_validation = document.getElementById("dateValidation").value;
    var etat_stock = document.getElementById("etatStock").value;
    var date_expedition = document.getElementById("dateExpedition").value;
    var adresse = document.getElementById("Adresse").value;
    var user = JSON.parse( localStorage.getItem('user'));
    	console.log(user);
    var parrain = user.USE_ID_USER;  
 var data  = {parrain: parrain, id_role: 1, nom_user: client, email: email, login: code , telephone: telephone, password: mot_de_passe, est_limite: estLimite,
  montant_limite: montantLimite, offre: offre, details_offre: details, engagement: engagement, etat_signature: etat_signature, date_signature: date_signature,
  cni: cni, patente: patente, nui: nui, etat_validation: etat_validation, date_validation: date_validation, etat_stock: etat_stock, date_expedition: date_expedition, 
  adresse: adresse, precompte: precompte, ristourne: ristourne};
  console.log(data);

  $.post("http://localhost:5000/user/new", data, function(puerto){

   console.log(puerto) ;
  }, 'json');

  return false;

});

//fonction pour recup??rer la liste des revendeurs.
// api url

const api_url = "http://localhost:5000/user/all";
// Defining async function
async function getapi() {
	
	// Storing response
	//const response = await fetch(url);
	
	// Storing data in form of JSON
	var user = JSON.parse( localStorage.getItem('user'));
    console.log(user);
    var parrain = user.ID_USER;
        
   var data  = { parrain: ""+parrain};
    console.log(data);
	$.get("http://localhost:5000/user/all", data, function(puerto){
    var user = JSON.parse( localStorage.getItem('user'));
    console.log(user);
    var user_id = user.ID_USER;
    
    console.log(puerto); 
    console.log(user_id);
	if (puerto) {
		hideloader();
	}
	show(puerto);
  });
}  
  // Calling that async function
  getapi();

  // Function to hide the loader
  function hideloader() {
	
  }
  // Function to define innerHTML for HTML table
  function show(data) {
    console.log(data);

    var user = JSON.parse( localStorage.getItem('user'));
    	console.log(user);
    var user_id = user.ID_USER;      
    var parrain = user.USE_ID_USER 
  if(user_id && id == 2){
	    let tab =
		  `<tr>
        <th>#</th>
		    <th>Vendeur</th>
        <th>Client</th>
        <th>Email</th>
        <th>Code</th>
        <th>Offre</th>
        <th scope="col">Pr??compte</th>
        <th scope="col">Ristourne</th>
        <th>D??tails</th>
        <th>Engagement</th>
        <th>Date cr??ation</th>
        <th>Etat signature</th>
        <th>Date signature</th>
        <th>Identit??</th>
        <th>Patente</th>
        <th>NUI</th>
        <th>Etat validation</th>
        <th>Date validation</th>
        <th>??tat stock</th>
        <th>Date expedition</th>
        <th>Adresse</th>
        <th>Options</th>
		  </tr>`;
	  // Loop to access all rows
	  for (let r of data.data) {
		  tab += 
      `<tr>
        <td>${r.ID_USER} </td> 
        <td>SABC</td>   
	      <td>${r.NOM_USER} </td>
	      <td>${r.EMAIL}</td>s
	      <td>${r.LOGIN} </td>
        <td>${r.offre} </td>
        <td>${r.precompte} </td>
        <td>${r.ristourne} </td>
        <td>${r.details_offre} </td>
        <td>${r.engagement} </td>
        <td>${r.CREATED_AT} </td>
        <td>${r.etat_signature} </td>
        <td>${r.date_signature} </td>
        <td>${r.cni} </td>
        <td>${r.patente} </td>
        <td>${r.nui} </td>
        <td>${r.etat_validation} </td>
        <td>${r.date_validation} </td>
        <td>${r.etat_stock} </td>
        <td>${r.date_expedition} </td>
        <td>${r.adresse} </td>  
        <td>
          <ul class="list-inline m-0">
                      
            <li class="list-inline-item">
              <button class="btn btn-success btn-sm " type="button" data-toggle="modal" data-target="#editerRevendeur" data-placement="top" title="Edit"
              style="margin-bottom: 10px; vertical-align: baseline;"><i class="bi bi-pencil-square"></i>Editer</button>
            </li>
            <li class="list-inline-item">
              <button class="btn btn-danger btn-sm " type="button" data-toggle="tooltip" data-placement="top"
              title="Delete"><i class="bi bi-trash"></i>Supprimer</button>
            </li>
            <li class="list-inline-item" data-toggle="modal" data-target="#plusinfo">
              <button type="button" class="btn btn-warning btn-sm">Voire plus</button>
            </li>
          </ul>
        </td>  
      </tr>`;
    }
    // Setting innerHTML as tab variable
	  document.getElementById("list-revendeur").innerHTML = tab;
  }
  else{

  }
  }   
