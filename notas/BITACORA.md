# Bitacora de JavaScript interactivo

Laboratorio 08: JavaScript Interactivo - DOM, Eventos y Objetos.

Navegador usado: Google Chrome.

## Ejercicio 2: Seleccionar y modificar el DOM

| Instruccion | Que cambio en la pantalla | Se mantiene al recargar |
|-------------|---------------------------|-------------------------|
| textContent desde app.js | El titulo cambio a Hola TECSUP | Si |
| style.color | El titulo cambio a color azul | Si |
| classList.add | El parrafo obtuvo fondo amarillo | Si |
| createElement | Se agrego JavaScript a la lista | Si |

## Ejercicio 3: Evento click

## Ejercicio 3: Evento click

| Tipo de evento | Que accion lo dispara | Cuanto suma por accion |
|----------------|-----------------------|------------------------|
| click | Un clic del mouse | 1 |
| dblclick | Dos clics seguidos | 1 |
| mouseover | Pasar el mouse sobre el boton | 1 |

evento.type muestra el tipo de evento que se produjo.
evento.target muestra el elemento HTML que recibio el evento.

## Ejercicio 4: Eventos input y submit

| Prueba | Que paso en la pantalla | Se recargo la pagina |
|--------|-------------------------|----------------------|
| Escribir en el campo nombre | Aparecio Hola, Omar | No |
| Enviar sin preventDefault | El navegador recargo la pagina | Si |
| Correo sin @ | Aparecio mensaje de error en rojo | No |
| Correo con @ | Aparecio mensaje Enviado | No |

## Ejercicio 5: Clases y objetos

| Objeto | nombre | precio | conDescuento(0.25) |
|--------|--------|--------|--------------------|
| laptop | Laptop | 2500 | 1875 |
| mouse | Mouse | 45 | 33.75 |
| teclado | Teclado | 120 | 90 |
| monitor | Monitor | 680 | 510 |

La clase permite crear varios objetos utilizando una misma estructura.
Esto facilita organizar los datos y reutilizar los metodos sin escribir
cada producto manualmente en el HTML.
