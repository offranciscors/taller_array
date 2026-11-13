// Arreglo de objetos con los datos de los estudiantes
const estudiantes = [
  { nombre: "Ana Torres", edad: 14, curso: "9A" },
  { nombre: "Mateo Ruiz", edad: 15, curso: "10B" },
  { nombre: "Lucía Gómez", edad: 13, curso: "8A" },
  { nombre: "Samuel Díaz", edad: 16, curso: "11A" },
  { nombre: "Valentina Cruz", edad: 14, curso: "9B" },
];

// Función propia para realizar la búsqueda
function buscarEstudiante() {
  // 1. Obtener referencias de los elementos del HTML
  const input = document.getElementById("inputNombre");
  const contenedorResultado = document.getElementById("resultado");

  // 2. Limpiar el texto ingresado (quitar espacios al inicio/final y pasar a minúsculas)
  const nombreBuscado = input.value.trim().toLowerCase();

  // 3. Limpiar cualquier resultado anterior para evitar confusiones
  contenedorResultado.innerHTML = "";

  // 4. Validar si el campo está vacío
  if (nombreBuscado === "") {
    contenedorResultado.innerHTML =
      "<p style='color: #d9534f;'>Por favor, escribe el nombre de un estudiante.</p>";
    return;
  }

  // 5. Buscar coincidencia en el arreglo
  let estudianteEncontrado = null;

  for (let i = 0; i < estudiantes.length; i++) {
    if (estudiantes[i].nombre.toLowerCase() === nombreBuscado) {
      estudianteEncontrado = estudiantes[i];
      break; // Detiene el ciclo al encontrarlo
    }
  }

  // 6. Mostrar los datos o el mensaje de no encontrado
  if (estudianteEncontrado !== null) {
    contenedorResultado.innerHTML = `
            <h3>Ficha del Estudiante</h3>
            <p><strong>Nombre:</strong> ${estudianteEncontrado.nombre}</p>
            <p><strong>Edad:</strong> ${estudianteEncontrado.edad} años</p>
            <p><strong>Curso:</strong> ${estudianteEncontrado.curso}</p>
        `;
  } else {
    contenedorResultado.innerHTML =
      "<p style='color: #d9534f;'>El estudiante no fue encontrado.</p>";
  }
}
