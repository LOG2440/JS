/*
    Les fonctions en JS sont des objets et peuvent être traités comme des objets
    Une fonction retourne toujours une valeur, par défaut, undefined
    Les arguments sont tojours passés par valeur.
        Dans le cas d'un objet, une copie est créé, mais le contenu de l'objet reste des références
*/

/// Passage par valeur des arguments
const obj1 = { contenu: "obj1 initial" };
const obj2 = { contenu: "mon obj2" };
const primitive = 'une simple chaine';

function objectModifier(obj1, obj2, primitive) {
    obj1.contenu = "obj1 modifié";
    obj2 = { contenu: "nouveau obj2" };
    primitive = 'nouvelle chaine';
}
const returnVal = objectModifier(obj1, obj2);

console.log(obj1); // {contenu : 'obj1 modifié'}
console.log(obj2); // {contenu : 'mon obj2'}
console.log(primitive); // une simple chaine
console.log(returnVal); // undefined


/// Fonctions en tant qu'objets
const printer = function (value) {
    console.log(value);
}
function add(a, b) { return a + b; }
function mult(a, b) { return a * b; }

// operation et result sont des fonctions de rappel (callback)
// Un callback est une fonction passée en paramètre et appelé dans la fonction principale
function calculator(a, b, operation, result) {
    return result(operation(a, b));
}

calculator(1, 2, add, printer);  // 3 
calculator(1, 2, mult, printer); // 2 
calculator(3, 2, function (a, b) { return a - b }, printer); // 1