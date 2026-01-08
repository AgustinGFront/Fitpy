// src/lib/exercises.ts

export type Exercise = {
  id: string;
  name: string;
};

export const EXERCISES_BY_MUSCLE: Record<string, any[]> = {
  pecho: [
    // 🟢 PRINCIPIANTE
    {
      id: 4,
      name: "Flexiones",
      difficulty: "Principiante",
      equipment: ["Peso Corporal"],
    },
    {
      id: 6,
      name: "Aperturas con Mancuernas",
      difficulty: "Principiante",
      equipment: ["Mancuernas"],
    },

    // 🟡 INTERMEDIO
    {
      id: 1,
      name: "Press de Banca",
      difficulty: "Intermedio",
      equipment: ["Barra", "Mancuernas", "Máquina"],
    },
    {
      id: 2,
      name: "Press Inclinado",
      difficulty: "Intermedio",
      equipment: ["Barra", "Mancuernas", "Máquina"],
    },
    {
      id: 3,
      name: "Press Declinado",
      difficulty: "Intermedio",
      equipment: ["Barra", "Mancuernas", "Máquina"],
    },
    {
      id: 7,
      name: "Aperturas en Poleas",
      difficulty: "Intermedio",
      equipment: ["Poleas"],
    },
    {
      id: 8,
      name: "Pec Deck",
      difficulty: "Intermedio",
      equipment: ["Máquina"],
    },

    // 🔴 AVANZADO
    {
      id: 5,
      name: "Fondos en Paralelas (enfocado en Pecho)",
      difficulty: "Avanzado",
      equipment: ["Peso Corporal"],
    },
  ],

  espalda: [
    // 🟢 PRINCIPIANTE
    {
      id: 10,
      name: "Dominadas Asistidas",
      difficulty: "Principiante",
      equipment: ["Máquina", "Banda"],
    },
    {
      id: 11,
      name: "Jalón al Pecho",
      difficulty: "Principiante",
      equipment: ["Máquina"],
    },
    {
      id: 12,
      name: "Jalón al Pecho con Agarre Cerrado",
      difficulty: "Principiante",
      equipment: ["Máquina"],
    },
    {
      id: 15,
      name: "Remo en Polea Baja",
      difficulty: "Principiante",
      equipment: ["Poleas"],
    },
    {
      id: 16,
      name: "Remo en Máquina",
      difficulty: "Principiante",
      equipment: ["Máquina"],
    },
    {
      id: 19,
      name: "Face Pull",
      difficulty: "Principiante",
      equipment: ["Poleas"],
    },

    // 🟡 INTERMEDIO
    {
      id: 13,
      name: "Remo con Barra",
      difficulty: "Intermedio",
      equipment: ["Barra"],
    },
    {
      id: 14,
      name: "Remo con Mancuerna a Una Mano",
      difficulty: "Intermedio",
      equipment: ["Mancuernas"],
    },
    {
      id: 18,
      name: "Peso Muerto Rumano",
      difficulty: "Intermedio",
      equipment: ["Barra", "Mancuernas"],
    },
    {
      id: 20,
      name: "Remo Invertido",
      difficulty: "Intermedio",
      equipment: ["Peso Corporal", "Barra"],
    },

    // 🔴 AVANZADO
    {
      id: 9,
      name: "Dominadas",
      difficulty: "Avanzado",
      equipment: ["Peso Corporal"],
    },
    {
      id: 17,
      name: "Peso Muerto",
      difficulty: "Avanzado",
      equipment: ["Barra"],
    },
  ],
  hombros: [
    // 🟢 PRINCIPIANTE
    {
      id: 21,
      name: "Elevaciones Laterales con Mancuernas",
      difficulty: "Principiante",
      equipment: ["Mancuernas"],
    },
    {
      id: 22,
      name: "Elevaciones Frontales con Mancuernas",
      difficulty: "Principiante",
      equipment: ["Mancuernas"],
    },
    {
      id: 23,
      name: "Press de Hombros en Máquina",
      difficulty: "Principiante",
      equipment: ["Máquina"],
    },
    {
      id: 24,
      name: "Pájaros en Máquina (Deltoide Posterior)",
      difficulty: "Principiante",
      equipment: ["Máquina"],
    },

    // 🟡 INTERMEDIO
    {
      id: 25,
      name: "Press Militar con Barra",
      difficulty: "Intermedio",
      equipment: ["Barra"],
    },
    {
      id: 26,
      name: "Press de Hombros con Mancuernas",
      difficulty: "Intermedio",
      equipment: ["Mancuernas"],
    },
    {
      id: 27,
      name: "Elevaciones Laterales en Poleas",
      difficulty: "Intermedio",
      equipment: ["Poleas"],
    },
    {
      id: 28,
      name: "Face Pull",
      difficulty: "Intermedio",
      equipment: ["Poleas"],
    },

    // 🔴 AVANZADO
    {
      id: 29,
      name: "Press Militar de Pie",
      difficulty: "Avanzado",
      equipment: ["Barra"],
    },
    {
      id: 30,
      name: "Arnold Press",
      difficulty: "Avanzado",
      equipment: ["Mancuernas"],
    },
    {
      id: 31,
      name: "Elevaciones Laterales con Pausa",
      difficulty: "Avanzado",
      equipment: ["Mancuernas"],
    },
  ],
  biceps: [
  {
    id: 32,
    name: "Curl de Bíceps con Barra",
    difficulty: "Principiante",
    equipment: "Barra",
  },
  {
    id: 33,
    name: "Curl de Bíceps con Mancuernas",
    difficulty: "Principiante",
    equipment: "Mancuernas",
  },
  {
    id: 34,
    name: "Curl Alternado",
    difficulty: "Principiante",
    equipment: "Mancuernas",
  },
  {
    id: 35,
    name: "Curl Martillo",
    difficulty: "Principiante",
    equipment: "Mancuernas",
  },
  {
    id: 36,
    name: "Curl en Banco Scott",
    difficulty: "Intermedio",
    equipment: "Barra",
  },
  {
    id: 37,
    name: "Curl Concentrado",
    difficulty: "Intermedio",
    equipment: "Mancuernas",
  },
  {
    id: 38,
    name: "Curl en Polea Baja",
    difficulty: "Intermedio",
    equipment: "Polea",
  },
  {
    id: 39,
    name: "Curl con Barra Z",
    difficulty: "Intermedio",
    equipment: "Barra",
  },
  {
    id: 40,
    name: "Curl Inclinado con Mancuernas",
    difficulty: "Avanzado",
    equipment: "Mancuernas",
  },
  {
    id: 41,
    name: "Curl 21",
    difficulty: "Avanzado",
    equipment: "Barra",
  },
  {
    id: 42,
    name: "Curl en Polea con Cuerda",
    difficulty: "Avanzado",
    equipment: "Polea",
  },
],
triceps: [
  // 🟢 PRINCIPIANTE
  {
    id: 43,
    name: "Extensión de Tríceps en Polea",
    difficulty: "Principiante",
    equipment: "Polea",
  },
  {
    id: 44,
    name: "Extensión de Tríceps con Cuerda",
    difficulty: "Principiante",
    equipment: "Polea",
  },
  {
    id: 45,
    name: "Patada de Tríceps",
    difficulty: "Principiante",
    equipment: "Mancuernas",
  },

  // 🟡 INTERMEDIO
  {
    id: 46,
    name: "Fondos en Banco",
    difficulty: "Intermedio",
    equipment: "Peso Corporal",
  },
  {
    id: 47,
    name: "Extensión de Tríceps por Encima de la Cabeza",
    difficulty: "Intermedio",
    equipment: "Mancuernas",
  },
  {
    id: 48,
    name: "Extensión de Tríceps con Barra Z",
    difficulty: "Intermedio",
    equipment: "Barra",
  },
  {
    id: 49,
    name: "Press Francés",
    difficulty: "Intermedio",
    equipment: "Barra",
  },

  // 🔴 AVANZADO
  {
    id: 50,
    name: "Fondos en Paralelas",
    difficulty: "Avanzado",
    equipment: "Peso Corporal",
  },
  {
    id: 51,
    name: "Press de Banca con Agarre Cerrado",
    difficulty: "Avanzado",
    equipment: "Barra",
  },
  {
    id: 52,
    name: "Extensión de Tríceps en Polea Alta a Una Mano",
    difficulty: "Avanzado",
    equipment: "Polea",
  },
],
gluteos: [
  // 🟢 PRINCIPIANTE
  {
    id: 53,
    name: "Puente de Glúteos en el Suelo",
    difficulty: "Principiante",
    equipment: ["Peso Corporal"],
  },
  {
    id: 54,
    name: "Patada de Glúteo en Máquina",
    difficulty: "Principiante",
    equipment: ["Máquina"],
  },
  {
    id: 55,
    name: "Abducción de Cadera en Máquina",
    difficulty: "Principiante",
    equipment: ["Máquina"],
  },

  // 🟡 INTERMEDIO
  {
    id: 56,
    name: "Hip Thrust con Barra",
    difficulty: "Intermedio",
    equipment: ["Barra"],
  },
  {
    id: 57,
    name: "Zancada Inversa",
    difficulty: "Intermedio",
    equipment: ["Mancuernas"],
  },
  {
    id: 58,
    name: "Step Up al Cajón",
    difficulty: "Intermedio",
    equipment: ["Mancuernas"],
  },

  // 🔴 AVANZADO
  {
    id: 59,
    name: "Hip Thrust a Una Pierna",
    difficulty: "Avanzado",
    equipment: ["Barra"],
  },
  {
    id: 60,
    name: "Sentadilla Búlgara Inclinada",
    difficulty: "Avanzado",
    equipment: ["Mancuernas"],
  },
  {
    id: 61,
    name: "Peso Muerto con Enfoque en Glúteos",
    difficulty: "Avanzado",
    equipment: ["Barra"],
  },
],
abdomen: [
  // 🟢 PRINCIPIANTE
  {
    id: 62,
    name: "Crunch en el Suelo",
    difficulty: "Principiante",
    equipment: ["Peso Corporal"],
  },
  {
    id: 63,
    name: "Elevaciones de Rodillas Acostado",
    difficulty: "Principiante",
    equipment: ["Peso Corporal"],
  },
  {
    id: 64,
    name: "Plancha Frontal",
    difficulty: "Principiante",
    equipment: ["Peso Corporal"],
  },

  // 🟡 INTERMEDIO
  {
    id: 65,
    name: "Crunch en Polea",
    difficulty: "Intermedio",
    equipment: ["Poleas"],
  },
  {
    id: 66,
    name: "Elevaciones de Piernas Colgado",
    difficulty: "Intermedio",
    equipment: ["Barra"],
  },
  {
    id: 67,
    name: "Plancha con Elevación de Pierna",
    difficulty: "Intermedio",
    equipment: ["Peso Corporal"],
  },

  // 🔴 AVANZADO
  {
    id: 68,
    name: "Dragon Flag",
    difficulty: "Avanzado",
    equipment: ["Peso Corporal"],
  },
  {
    id: 69,
    name: "Rueda Abdominal",
    difficulty: "Avanzado",
    equipment: ["Rueda"],
  },
  {
    id: 70,
    name: "Toes to Bar",
    difficulty: "Avanzado",
    equipment: ["Barra"],
  },
],


};



export const EXERCISES_BY_SUBMUSCLE_LEG: Record<string, any[]> = {
 cuadriceps: [
  // 🟢 PRINCIPIANTE
  {
    id: 101,
    name: "Extensión de Cuádriceps en Máquina",
    difficulty: "Principiante",
    equipment: ["Máquina"],
  },
  {
    id: 102,
    name: "Prensa de Piernas",
    difficulty: "Principiante",
    equipment: ["Máquina"],
  },
  {
    id: 103,
    name: "Sentadilla en Máquina Smith",
    difficulty: "Principiante",
    equipment: ["Máquina"],
  },

  // 🟡 INTERMEDIO
  {
    id: 104,
    name: "Sentadilla con Barra",
    difficulty: "Intermedio",
    equipment: ["Barra"],
  },
  {
    id: 105,
    name: "Sentadilla Frontal",
    difficulty: "Intermedio",
    equipment: ["Barra"],
  },
  {
    id: 106,
    name: "Zancadas con Mancuernas",
    difficulty: "Intermedio",
    equipment: ["Mancuernas"],
  },
  {
    id: 107,
    name: "Sentadilla Búlgara",
    difficulty: "Intermedio",
    equipment: ["Mancuernas"],
  },

  // 🔴 AVANZADO
  {
    id: 108,
    name: "Sentadilla Pistol",
    difficulty: "Avanzado",
    equipment: ["Peso Corporal"],
  },
  {
    id: 109,
    name: "Sentadilla con Pausa",
    difficulty: "Avanzado",
    equipment: ["Barra"],
  },
],


  isquiotibiales: [
  // 🟢 PRINCIPIANTE
  {
    id: 201,
    name: "Curl Femoral Acostado",
    difficulty: "Principiante",
    equipment: ["Máquina"],
  },
  {
    id: 202,
    name: "Curl Femoral Sentado",
    difficulty: "Principiante",
    equipment: ["Máquina"],
  },

  // 🟡 INTERMEDIO
  {
    id: 203,
    name: "Peso Muerto Rumano",
    difficulty: "Intermedio",
    equipment: ["Barra", "Mancuernas"],
  },
  {
    id: 204,
    name: "Buenos Días",
    difficulty: "Intermedio",
    equipment: ["Barra"],
  },
  {
    id: 205,
    name: "Peso Muerto a Una Pierna",
    difficulty: "Intermedio",
    equipment: ["Mancuernas"],
  },

  // 🔴 AVANZADO
  {
    id: 206,
    name: "Peso Muerto Convencional",
    difficulty: "Avanzado",
    equipment: ["Barra"],
  },
  {
    id: 207,
    name: "Nordic Curl",
    difficulty: "Avanzado",
    equipment: ["Peso Corporal"],
  },
  {
    id: 208,
    name: "Glute Ham Raise",
    difficulty: "Avanzado",
    equipment: ["Máquina"],
  },
],


  abductores: [
  // 🟢 PRINCIPIANTE
  {
    id: 301,
    name: "Abducción de Cadera en Máquina",
    difficulty: "Principiante",
    equipment: ["Máquina"],
  },
  {
    id: 302,
    name: "Abducción de Cadera Acostado",
    difficulty: "Principiante",
    equipment: ["Peso Corporal"],
  },

  // 🟡 INTERMEDIO
  {
    id: 303,
    name: "Abducción con Banda Elástica",
    difficulty: "Intermedio",
    equipment: ["Bandas"],
  },
  {
    id: 304,
    name: "Step Lateral",
    difficulty: "Intermedio",
    equipment: ["Peso Corporal"],
  },

  // 🔴 AVANZADO
  {
    id: 305,
    name: "Sentadilla Lateral Profunda",
    difficulty: "Avanzado",
    equipment: ["Barra"],
  },
],


  pantorrillas: [
    // 🟢 PRINCIPIANTE
    {
      id: 401,
      name: "Elevación de Talones Sentado",
      difficulty: "Principiante",
      equipment: ["Máquina"],
    },
    {
      id: 402,
      name: "Elevación de Talones en Máquina",
      difficulty: "Principiante",
      equipment: ["Máquina"],
    },

    // 🟡 INTERMEDIO
    {
      id: 403,
      name: "Elevación de Talones de Pie con Barra",
      difficulty: "Intermedio",
      equipment: ["Barra"],
    },
    {
      id: 404,
      name: "Elevación de Talones en Prensa",
      difficulty: "Intermedio",
      equipment: ["Máquina"],
    },

    // 🔴 AVANZADO
    {
      id: 405,
      name: "Elevación de Talones a Una Pierna",
      difficulty: "Avanzado",
      equipment: ["Peso Corporal", "Mancuernas"],
    },
    {
      id: 406,
      name: "Saltos de Pantorrilla con Peso",
      difficulty: "Avanzado",
      equipment: ["Barra"],
    },
  ],
};
  export const TOTAL_LEG_EXERCISES = Object.values(
   EXERCISES_BY_SUBMUSCLE_LEG
  ).reduce((acc, exercises) => acc + exercises.length, 0);
