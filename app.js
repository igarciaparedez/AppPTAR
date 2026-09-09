const formulario =
    document.getElementById("formPTAR");

const tabla =
    document.getElementById("tablaPTAR");

const totalPTAR =
    document.getElementById("totalPTAR");


let ptars =
    JSON.parse(localStorage.getItem("ptars")) || [];


formulario.addEventListener(
    "submit",
    function (evento) {

        evento.preventDefault();


        const nombre =
            document.getElementById("nombre").value;

        const departamento =
            document.getElementById("departamento").value;

        const prestador =
            document.getElementById("prestador").value;

        const estado =
            document.getElementById("estado").value;


        const nuevaPTAR = {

            id: Date.now(),

            nombre: nombre,

            departamento: departamento,

            prestador: prestador,

            estado: estado

        };


        ptars.push(nuevaPTAR);

        guardarPTAR();
        mostrarPTAR();


        formulario.reset();

    }
);

function guardarPTAR() {

    localStorage.setItem(
        "ptars",
        JSON.stringify(ptars)
    );

}
function mostrarPTAR() {

    tabla.innerHTML = "";


    ptars.forEach(
        function (ptar, indice) {

            const fila =
                document.createElement("tr");


            fila.innerHTML = `

                <td>
                    ${indice + 1}
                </td>

                <td>
                    ${ptar.nombre}
                </td>

                <td>
                    ${ptar.departamento}
                </td>

                <td>
                    ${ptar.prestador}
                </td>

                <td>
                    ${ptar.estado}
                </td>

                <td>

                    <button
                        class="boton-eliminar"
                        onclick="eliminarPTAR(${ptar.id})"
                    >
                        Eliminar
                    </button>

                </td>

            `;


            tabla.appendChild(fila);

        }
    );


    totalPTAR.textContent =
        ptars.length;

}


function eliminarPTAR(id) {

    ptars =
        ptars.filter(
            function (ptar) {

                return ptar.id !== id;

            }
        );

guardarPTAR();
    mostrarPTAR();

}
    mostrarPTAR();