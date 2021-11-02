# juegoFantavision
proyecto módulo primero Ironhack

# Proyecto

Juego FANTAVISION

## Descripción del juego:

Jugeo de scroll lateral en el que el jugador controlará un unicornio que deberá recoger items por el recorrido al mismo tiempo que esquiva obstáculos en el camino. Cada item que se recoja aumentará la puntucación y la velocidad a la que se desplaza el jugador, incrementando así la dificultad del juego.

## MVP:

- Jugador
- Obstáculos
- Pantalla de inicio
- Pantalla Game Over y puntuación

## Backlog:

- Fondo
- Música
- Items a recoger
- Efectos de sonido
- Item invulneravilidad
- Incremento de velocidad
- Vidas/contador
- Opción música/sonido on/off
- Pantalla de instrucciones

## Data Structure:

```javascript
class Jugador {
    propiedades: altura, velocidad, vida, invulnerabilidad
    metodos: goUp, goDown 
}

class obstaculo {
    propiedades: altura
}

class item {
    propiedades: puntos adquiridos, aumento velocidad
}
```

## States & States Transitions:

- Intro Screen - Pantalla inicial de título "Press start"
- How to play - Instrucciones para jugar
- Game Screen - Pantalla de juego
- Game Over/Ranking Screen - Cuándo el jugador choca contra un obstáculo, se muestra el game over y la puntuación/velocidad adquirida
 
 ### Links:

 [Link Repo](https://github.com/mikapikas/juegoFantavision)
