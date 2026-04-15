const prompt = require("prompt-sync")();

console.log("Estas caminando por un pasillo oscuro y encontrás una puerta...");

let opcion1 = prompt("Ves una puerta y una ventana ¿a donde vas? 1 puerta/ 2 ventana");

if (opcion1 == "1") {

  console.log("Abrís la puerta y hay un pasillo oscuro...");

  let opcion2 = prompt("Escuchas un ruido ¿Avanzas o volves? 1 avanzar/ 2 volver");

  if (opcion2 == "1") {

    console.log("Avanzás, pero aparece una sombra...");

    let opcion3 = prompt("¿Enfrentarla o correr? 1 enfrentarla/ 2 correr");

    if (opcion3 == "1") {
      console.log("La entrentás, pero era un espejo :p");
    } else {
      console.log("Corrés, pero te perdés para siempre dentro de la casa.");
    }

  } else if (opcion2 == "2") {

    console.log("Volvés y la puerta desaparece");

  } else {

    console.log("Opción inválida. Escriba un número.");

  }

} else if (opcion1 == "2") {

  console.log("Saltás por la ventana.");

  let opcion2 = prompt("Caés en un bosque ¿Caminás o te quedás? 1 caminar/ 2 quedarse");

  if (opcion2 == "1") {
    console.log("Encontrás ayuda, te salvaste.");
  } else if (opcion2 == "2") {
    console.log("Te quedás y cae la noche.");
  } else {
    console.log("Opción inválida. Escriba un número.");
  }

} else {

  console.log("Opción inválida. Escriba un número.");

}