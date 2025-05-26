//let nom=prompt("Etrer votre nom");
//document.getElementById("bjr2").textContent=nom;
//function f(x){
//    console.log(x+1);
//}
//f(1);

//function entrer(){
 //   nombre1=prompt("Entrer nombre 1");
 //   console.log(nombre1);
 //   console.log(typeof(nombre1));
  //  nb1=parseFloat(nombre1);
  //  console.log(typeof(nb1));

//}
//entrer();
//function bonjour(){
//    const name=document.getElementById("nom");
//    let name2=name.value;
//    console.log(name2); 
//}

function addition(){
const nb1=parseFloat(document.getElementById("entrer1").value);
console.log(nb1);
const nb2=parseFloat( document.getElementById("entrer2").value );
console.log(nb2);
const somme=nb1+nb2;
console.log(somme);
document.getElementById("resultat").innerText=somme;
}

