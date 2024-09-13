// Función para calcular los puntos de un predicción
function calcularPuntos(prediccion) {
  const puntosPorAcierto = {
    resultado: 2,
    golesLocal: 1,
    golesVisitante: 1,
    diferenciaGoles: 1,
    marcador: 3,
    amarillas: 1,
    posesionLocal: 1,
  };

  let puntos = 0;

  // Acertar resultado
  if (prediccion.resultado === prediccion.marcador.resultado) {
    puntos += puntosPorAcierto.resultado;
  }

  // Acertar goles equipo local y visitante
  if (prediccion.golesLocal === prediccion.marcador.golesLocal) {
    puntos += puntosPorAcierto.golesLocal;
  }
  if (prediccion.golesVisitante === prediccion.marcador.golesVisitante) {
    puntos += puntosPorAcierto.golesVisitante;
  }

  // Acertar diferencia de goles en el marcador
  if (Math.abs(prediccion.golesLocal - prediccion.golesVisitante) === Math.abs(prediccion.marcador.golesLocal - prediccion.marcador.golesVisitante)) {
    puntos += puntosPorAcierto.diferenciaGoles;
  }

  // Acertar marcador
  if (prediccion.golesLocal === prediccion.marcador.golesLocal && prediccion.golesVisitante === prediccion.marcador.golesVisitante) {
    puntos += puntosPorAcierto.marcador;
  }

  // Acertar equipo con más amarillas
  if (prediccion.amarillas === prediccion.marcador.amarillas) {
    puntos += puntosPorAcierto.amarillas;
  }

  // Acertar equipo con mayor posesión de balón
  if (prediccion.posesionLocal === prediccion.marcador.posesionLocal) {
    puntos += puntosPorAcierto.posesionLocal;
  }

  return puntos;
}