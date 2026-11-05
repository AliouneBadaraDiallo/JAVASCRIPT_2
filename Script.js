function inverserUneChaine(chaine) {
    return chaine.split("").reverse().join("");
}
    console.log(inverserUneChaine("bonjour"));

function compterLesCaractères(chaine) {
    return chaine.length;
}
    console.log(compterLesCaractères("bonjour"));

function motsEnMajuscules(phrase) {
    return phrase
    .split(" ")
    .map(mot=>mot.charAt(0).toUpperCase()+mot.slice(1))
    .join(" ");
    }
    console.log(motsEnMajuscules("bonjour tout le monde"));

   
   
   
function trouverMax(tableau) {
        return Math.max(...tableau);
        }

function trouverMin(tableau) {
    return Math.min(...tableau);
    }

function sommeTableau(tableau) {
    return tableau.reduce((total, nombre) =>total+nombre,0);
    }

function filtrerTableau(tableau) {
    return tableau.filter(nombre=>nombre>10);
    }

    const nombres= [4,15,8,23,12];
console.log(trouverMax(nombres));
console.log(trouverMin(nombres));
console.log(sommeTableau(nombres));
console.log(filtrerTableau(nombres));



function factorielle(n) {
    let resultat=1;
    for (let i = 2; i <= n; i++) {
        resultat *=i;
         }
         return resultat
    }

function nombrePremier(n) {
    if (n<2) {
        return false;
    }
for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n%i===0) {
        return false;
    }
}
 return true;   
}

function fibonacci(nbTermes) {
    const suite =[]
    let a=0;
    let b=1;
    for (let i = 0; i<nbTermes; i++) {
        suite.push(a);
        [a,b]=[b,a+b];
        }
        return suite
    }

console.log(factorielle(5));
console.log(nombrePremier(7));
console.log(nombrePremier(10));
console.log(fibonacci(8));
