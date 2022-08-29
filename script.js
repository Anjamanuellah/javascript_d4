/*manipulation objet
devoir: type d evenement js + fomba fampiasana 
objet = zavtra rhtr ref manana caractere
programmation orienté obj=manipulation objet iray
ampiasaina ef manoratra zavatra lava b
ageClass.innerText = profil.age;
zavatra maro2 = stockena anaty tab
*/
/*
var anja = {
    taille : "s",
    pointure : 34
}
//console.log(anja);
//ijery zavatra ao am ilay objet
console.log(anja.pointure);
*/

var profil = {
    image : "anja.jpg",
    nom : "RABEMANANJARA",
    prenom : "Anja",
    adress : "Ankatso",
    tel : "0343650241",
    age : "22 ans",
    experiences : [             //tab
        {
            "poste" : "Developpeur front-end",
            "dure" : "5 ans",
            "entreprise" : "P4h",
        }
    ]
}
var imageClass = document.getElementById("image")
var nameClass = document.getElementById("name_container");
var firstnameClass = document.getElementById("firstname_container");
var adressClass = document.getElementById("adress_container");
var telClass = document.getElementById("tel_container");
var ageClass = document.getElementById("age_container");

//imageClass.setAttribute("src", "anja.jpg")
imageClass.setAttribute("src", profil.image)
nameClass.innerText = profil.nom;
firstnameClass.innerText = profil.prenom;
adressClass.innerText = profil.adress;
telClass.innerText = profil.tel;
ageClass.innerText = profil.age;

var listItem = ""
for (let i = 0; i < profil.experiences.length; i++) {
   // console.log(profil.experiences[i]);
    listItem += "<li>" 
    +profil.experiences[i].poste + "<br>" +profil.experiences[i].dure +"<br>"
    +profil.experiences[i].entreprise+ "</li>" 
}
document.getElementById("list_experiences").innerHTML = listItem



