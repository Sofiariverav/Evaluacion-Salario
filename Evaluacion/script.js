let nombre;
let categoria;
let Unidad = 0;
let Total;
const Porcentaje1 = 75000;
const Porcentaje2 = 105000;
const Porcentaje3 = 150000;
const Porcentaje4 = 225000;
const SalarioB = 1500000;
const Salario1 = 2000000;
const Salario2 = 2100000;
const Salario3 = 2200000;
const Salario4 = 2400000;

let formulario = document.getElementById('form');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    LeerDatos()
})

function LeerDatos() {
    categoria = Number(document.getElementById('Categoria').value)
    nombre = document.getElementById('Nombre').value
    Unidad = Number(document.getElementById('Unidades').value)
    ValidarData(nombre, Unidad)
}

function ValidarData(nombre, Unidad) {
    if (isNaN(nombre) == false || isNaN(Unidad) == true || nombre.length == 0 || categoria < 0 || categoria >= 4) {
        alert("error");
    }
    else {
        calcular(Unidad)
    }
}

function calcular(Unidad) {

    if (Unidad <= 50) {
        Total = SalarioB;
        document.getElementById('Salario').value = SalarioB;
        document.getElementById('Porcentaje').value = 0;
        document.getElementById('Total').value = Total;
    } else if (categoria == 1 && Unidad > 50) {
        Total = Salario1 + Porcentaje1;
        document.getElementById('Salario').value = Salario1;
        document.getElementById('Porcentaje').value = Porcentaje1;
        document.getElementById('Total').value = Total;
    } else if (categoria == 2 && Unidad > 50) {
        Total = Salario2 + Porcentaje2;
        document.getElementById('Salario').value = Salario2;
        document.getElementById('Porcentaje').value = Porcentaje2;
        document.getElementById('Total').value = Total;
    } else if (categoria == 3 && Unidad > 50) {
        Total = Salario3 + Porcentaje3;
        document.getElementById('Salario').value = Salario3;
        document.getElementById('Porcentaje').value = Porcentaje3;
        document.getElementById('Total').value = Total;
    } else if (categoria == 4 && Unidad > 50) {
        Total = Salario4 + Porcentaje4;
        document.getElementById('Salario').value = Salario4;
        document.getElementById('Porcentaje').value = Porcentaje4;
        document.getElementById('Total').value = Total;

    } else {
        alert("error")
    }
}
