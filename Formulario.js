function obtenerValorInput(input) {

    switch (input.tagName) {
      case "INPUT":
        return manejarInputs(input);
      case "SELECT":
        const indiceSeleccionado = input.selectedIndex;
        if (indiceSeleccionado >= 0) {
          return input.options[indiceSeleccionado].value;
        }
  
        return undefined;
  
      default:
        return undefined;
    }
  }
  
  function manejarInputs(input) {
    switch (input.type) {
      case "text":
        if (input.value.trim() === "") {
          return false;
        }
  
        return input.value;

      case "date":
        if (input.value === "") {
          return false;
        }
  
        return new Date(input.value);
  
      case "email":
        return input.value;
  
      default:
        return input.value;
    }
  }

function agregarListenerAForm() {
    const formulario = document.getElementById("formulario-prestamo");
  
    formulario.addEventListener(
      "submit",
      (evento) => {
        let datos = {};
        const inputs = formulario.querySelectorAll(
          "input, select"
        );
  
        inputs.forEach((input) => {
          let valor = obtenerValorInput(input);
          if (valor) {
            datos[input.name] = valor;
          } else {
            alert(`Por favor llenar los datos del campo ${input.name}`);
          }
        });
  
            evento.preventDefault();
      },
      false
    );
  }

  function validarDisableBoton(valor) {
    const boton = document.getElementById("boton-enviar");
    console.log("EsValid", valor);
    console.log("Disabled", boton.disabled);
  
    if (valor !== boton.disabled) {
      boton.disabled = valor;
    }
  }
  
  function validarOnBlur(inputs) {
    let esValido = true;
    inputs.forEach((input) => {
      const valor = obtenerValorInput(input);
      if (!valor) {
        esValido = false;
      }
    });
  
    validarDisableBoton(!esValido);
  }
  
  function agregarOnBlurListener() {
    const formulario = document.getElementById("formulario-prestamo");
    const inputs = formulario.querySelectorAll(
      "input, select"
    );
  
    inputs.forEach((input) => {
      input.addEventListener("blur", (evento) => {
        validarOnBlur(inputs);
      });
    });
  }

window.onload = function (){
    agregarListenerAForm();
}