# Tarea: Mi componente interactivo

## Componente elegido

Gestor interactivo de tareas.

Desarrolle una aplicación que permite registrar actividades,
marcarlas como completadas y eliminarlas mediante botones.

## Codigo principal

```js
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