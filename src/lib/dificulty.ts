export type DifficultyKey = "Principiante" | "Intermedio" | "Avanzado";

export const DIFFICULTY_INFO: Record<
  DifficultyKey,
  {
    title: string;
    shortLabel: string;
    description: string;
    factors: string[];
    recommendation: string;
  }
> = {
  Principiante: {
    title: "Nivel Principiante",
    shortLabel: "Principiante",
    description:
      "Ejercicios de ejecución simple y bajo riesgo. Los movimientos suelen ser guiados, estables o asistidos, lo que permite aprender la técnica correcta desde cero. Son ideales para fortalecer los músculos sin exigir altos niveles de coordinación, equilibrio o control corporal.",
    factors: [
      "Movimiento simple y predecible",
      "Alta estabilidad (máquinas o apoyo externo)",
      "Bajo riesgo de error técnico",
      "Poca exigencia del core y estabilizadores",
    ],
    recommendation:
      "Recomendado para personas que recién comienzan, retoman el entrenamiento o buscan mejorar la técnica básica.",
  },

  Intermedio: {
    title: "Nivel Intermedio",
    shortLabel: "Intermedio",
    description:
      "Ejercicios que requieren mayor control del movimiento y una participación activa de músculos estabilizadores. Combinan libertad de movimiento con una técnica más exigente, demandando coordinación, equilibrio y control corporal.",
    factors: [
      "Movimiento parcialmente libre",
      "Mayor control y coordinación",
      "Participación activa de estabilizadores",
      "Riesgo moderado si la técnica falla",
    ],
    recommendation:
      "Ideal para personas con experiencia previa que ya dominan la técnica básica y buscan progresar en fuerza y control.",
  },

  Avanzado: {
    title: "Nivel Avanzado",
    shortLabel: "Avanzado",
    description:
      "Ejercicios técnicamente demandantes que requieren altos niveles de fuerza, estabilidad y control corporal. Suelen involucrar múltiples grupos musculares, movimientos libres y complejos, con un margen de error reducido.",
    factors: [
      "Movimiento libre y complejo",
      "Alta demanda de estabilidad y core",
      "Elevada coordinación neuromuscular",
      "Riesgo alto con mala técnica",
    ],
    recommendation:
      "Recomendado solo para personas con amplia experiencia, buena técnica y control corporal avanzado.",
  },
};
