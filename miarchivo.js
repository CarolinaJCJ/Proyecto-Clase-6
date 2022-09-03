let nombreUsuario = prompt("Ingrese su Usuario para calcular su ganancia diaria");
    let contrasena = prompt("Password");
    if(nombreUsuario.toLowerCase() === "carolina" && contrasena.toLowerCase() === "paladin"){
      alert("Iniciando sesion");
    }else {
      alert("no puedes ingresar");
      
    }

const suma  = (a,b) => a + b;
const resta = (a,b) => a - b;
const iva   = x => x * 0.21;
    
    let ganancias = parseInt(prompt("Ingresar el valor total de los Tattoos realizados:"));
    let insumos = parseInt(prompt("Gastos de insumos"));
   
    let total = ((ganancias - iva(ganancias)) - insumos);

    alert(total);

    

    const materiales = [
      { nombre: "Set agujas", valor: 10000},
      { nombre: "guantes", valor: 2500 },
      { nombre: "kit tintas", valor: 60000},
      { nombre: "cubre boca", valor: 2000},

    ];
      for (let i = 0; i < 2; i++) {
        let nombre = prompt("Ingrese el nuevo insumo a pedir");
        let valor = prompt("ingrese el valor");
        let obj = { nombre: nombre, valor: valor };
        materiales.push(obj);
      }
      console.log(materiales);