/* script.js - Inserta dinámicamente los datos del curso en el HTML */

document.addEventListener("DOMContentLoaded", () => {
if (!secciones || !Array.isArray(secciones)) {
console.error("No se encontró el arreglo 'secciones' o no es válido.");
return;
}


secciones.forEach(sec => {
const bloque = document.getElementById(sec.id);
if (!bloque) return;


const contenedor = bloque.querySelector(".contenido");
if (!contenedor) return;


contenedor.innerHTML = `
<p><strong>Contenidos del bimestre:</strong></p>
<ul>
${sec.contenidos.map(c => `<li>${c}</li>`).join("")}
</ul>


<p><strong>Temas relevantes / contenidos nodales:</strong></p>
<ul>
${sec.nodales.map(n => `<li>${n}</li>`).join("")}
</ul>


<p><strong>Fechas de evaluaciones:</strong> ${sec.evaluaciones}</p>
<p><strong>Entrega de trabajos prácticos:</strong> ${sec.trabajos}</p>


<p><strong>Video de apoyo:</strong> <a href="${sec.video}" target="_blank">Ver en YouTube</a></p>
`;
});
});


function cargarCalificaciones() {
  const container = document.getElementById("grades-container");
  container.innerHTML = "";

  for (const bim in calificaciones) {
    const block = document.createElement("div");
    block.className = "grade-block";

    block.innerHTML = `
      <h3>${bim.charAt(0).toUpperCase() + bim.slice(1)} Bimestre</h3>
      <table class="grade-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Calificación</th>
            <th>Observaciones</th>
          </tr>
        </thead>
        <tbody>
          ${calificaciones[bim]
            .map(
              (alumno) => `
            <tr>
              <td>${alumno.nombre}</td>
              <td>${alumno.nota}</td>
              <td>${alumno.obs}</td>
            </tr>
          `
            )
            .join("")}
        </tbody>
      </table>
    `;

    container.appendChild(block);
  }
}

cargarCalificaciones();
