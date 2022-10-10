import "./styles.css";

let text = document.getElementById("rotulo");
let btnEn = document.getElementById("btnEnv");

text.innerHTML = "numeros que son multiplos de 2 o 3, del 0 al 100";

btnEn?.addEventListener("click", () => {
  let cadena: string = "";

  for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
      console.log(`este ${i} es multiplo de dos`);
    }
    if (i % 3 === 0) {
      console.log(`este ${i} es multiplo de 3`);
    }
  }
  console.log(cadena);
});
