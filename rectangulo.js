// Ejercicio 3: Objetos y métodos

// Crea un objeto llamado rectangulo que represente un rectángulo y tenga las siguientes propiedades y métodos:

// Propiedades: base y altura.
// Método: calcularArea() que calcule y devuelva el área del rectángulo (base * altura).
// Por favor, házmelo saber cuando estés listo para ver la solución o si necesitas alguna pista.

let rectangulo = {
    base: 4,
    altura:8,
    calcularArea: function() {
        return this.base * this.altura;
    }
};

console.log("El area del rectángulo es:", rectangulo.calcularArea())