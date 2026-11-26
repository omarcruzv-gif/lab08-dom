// TAREA: Gestor interactivo de tareas

class Tarea {

    constructor(nombre, estado = false) {

        this.nombre = nombre;

        this.estado = estado;

    }

    descripcion() {

        return this.nombre;

    }

    completar() {

        this.estado = true;

    }

}

const formulario = document.querySelector("#formularioTarea");

const nombreTarea = document.querySelector("#nombreTarea");

const listaTareas = document.querySelector("#listaTareas");

const contadorTareas = document.querySelector("#contadorTareas");

let tareas = [];

function actualizarContador() {

    const pendientes = tareas.filter(tarea => !tarea.estado).length;

    contadorTareas.textContent = "Tareas pendientes: " + pendientes;

}

function mostrarTarea(obj) {

    const li = document.createElement("li");

    const texto = document.createElement("span");

    texto.textContent = obj.descripcion();

    if (obj.estado) {

        texto.classList.add("completada");

    }

    const btnCompletar = document.createElement("button");

    btnCompletar.textContent = obj.estado ? "Completada" : "Completar";

    btnCompletar.classList.add("completar");

    btnCompletar.addEventListener("click", () => {

        if (!obj.estado) {

            obj.completar();

            texto.classList.add("completada");

            btnCompletar.textContent = "Completada";

            actualizarContador();

        }

    });

    const btnBorrar = document.createElement("button");

    btnBorrar.textContent = "Borrar";

    btnBorrar.classList.add("borrar");

    btnBorrar.addEventListener("click", () => {

        tareas = tareas.filter(tarea => tarea !== obj);

        li.remove();

        actualizarContador();

    });

    li.appendChild(texto);

    li.appendChild(btnCompletar);

    li.appendChild(btnBorrar);

    listaTareas.appendChild(li);

}

formulario.addEventListener("submit", (evento) => {

    evento.preventDefault();

    const nombre = nombreTarea.value.trim();

    if (nombre === "") {

        return;

    }

    const nuevaTarea = new Tarea(nombre);

    tareas.push(nuevaTarea);

    mostrarTarea(nuevaTarea);

    nombreTarea.value = "";

    actualizarContador();

});

console.log("Gestor de tareas iniciado correctamente");

# PASO 5. Publicar la tarea

En la terminal ejecuta:

Primer commit:

```bash
git add .
git commit -m "Tarea: clase y objetos en la pagina"
git push origin main
