//  https://www.youtube.com/watch?v=goCeqBn15Ls



    function capturar() {
        // console.log("capturar");

        //solo funciona cuando se le pone la propiedad new en otra función
        function Personas(nombre, edad) {
            this.nombre = nombre;
            this.edad = edad;
        }
        var nombreCapturar = document.getElementById("nombre").value;
        // console.log(nombreCapturar);
        var edadCapturar = document.getElementById("edad").value;
        // console.log(edadCapturar);

        nuevoSujeto = new Personas(nombreCapturar, edadCapturar);
        console.log(nuevoSujeto);
        
        // sirve para agregar la funcion de abajo
        agregar();
    }

    var baseDatos = [];
    
    // sirve para meter dentro de la variable baseDatos la variable de la otra funcion nuevoSujeto
    function agregar() {
        //console.log("capturado");
        baseDatos.push(nuevoSujeto);
        console.log(baseDatos);
        document.getElementById("tabla").innerHTML += `
        <tr>
            <td>${nuevoSujeto.nombre}</td>
            <td>${nuevoSujeto.edad}</td>
        </tr>
    `
        // '<tbody><tr><td>'+nuevoSujeto.nombre+'</td><td>'+nuevoSujeto.edad+'</td></tr></tbody>';
    };