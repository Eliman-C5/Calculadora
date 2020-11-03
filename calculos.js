const d = document,
  $display = d.getElementById("display"),
  $numeros = d.querySelectorAll(".number");

let primerResultado, segundoResultado, operador;

const validarTermino = (signo) => {
  if (primerResultado) {
    $display.textContent = "Math error";
    segundoResultado = 5;
  } else {
    primerResultado = Number($display.textContent);
    operador = signo;
    $display.textContent = "";
  }
};

const calcularResultado = () => {
  segundoResultado = Number($display.textContent);
  let resultadoFinal;
  if (operador === "suma") {
    resultadoFinal = primerResultado + segundoResultado;
  }
  if (operador === "resta") {
    resultadoFinal = primerResultado - segundoResultado;
  }
  if (operador === "multiplicacion") {
    resultadoFinal = primerResultado * segundoResultado;
  }
  if (operador === "division") {
    resultadoFinal = primerResultado / segundoResultado;
  }

  $display.textContent = resultadoFinal;
};

d.addEventListener("click", (e) => {
  let numeroActual;

  if (e.target.matches(".number")) {
    if (segundoResultado) {
      operador = "";
      primerResultado = "";
      segundoResultado = "";
      $display.textContent = "";
    }

    $numeros.forEach((element) => {
      if (e.target.id === element.id && e.target.matches("#suma"))
        return validarTermino("suma");

      if (e.target.id === element.id && e.target.matches("#resta"))
        return validarTermino("resta");

      if (e.target.id === element.id && e.target.matches("#division"))
        return validarTermino("division");

      if (e.target.id === element.id && e.target.matches("#multiplicacion"))
        return validarTermino("multiplicacion");

      if (
        e.target.id === element.id &&
        e.target.matches("#resultado") &&
        primerResultado
      )
        return calcularResultado();

      if (e.target.id === element.id && element.id !== "resultado") {
        numeroActual = element.id;
        $display.textContent
          ? ($display.textContent += numeroActual)
          : ($display.textContent = numeroActual);
      }
    });
  }
});
