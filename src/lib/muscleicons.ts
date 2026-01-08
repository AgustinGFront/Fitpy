import { FC } from "react";
import { SvgProps } from "react-native-svg";

// SVGs
import Abdomen from "../../assets/images/muscles/Abdomen_icon.svg";
import Biceps from "../../assets/images/muscles/Biceps_icon.svg";
import Espalda from "../../assets/images/muscles/espalda_icon.svg";
import Gluteos from "../../assets/images/muscles/Gluteos_icon.svg";
import Hombros from "../../assets/images/muscles/Hombro_icon.svg";
import Pecho from "../../assets/images/muscles/Pecho_icon.svg";
import Piernas from "../../assets/images/muscles/Piernas_icon.svg";
import Triceps from "../../assets/images/muscles/Triceps_icon.svg";

// 🔽 SUBMÚSCULOS DE PIERNAS
import Abductores from "../../assets/images/muscles/Abductores_icon.svg";
import Cuadriceps from "../../assets/images/muscles/cuadriceps_icon.svg";
import Isquiotibiales from "../../assets/images/muscles/Isquiotibiales_icon.svg";
import Pantorrillas from "../../assets/images/muscles/Pantorrillas_icon.svg";

// Mapa
export const MUSCLE_ICONS: Record<string, FC<SvgProps>> = {
  // músculos principales
  pecho: Pecho,
  espalda: Espalda,
  hombros: Hombros,
  biceps: Biceps,
  triceps: Triceps,
  abdomen: Abdomen,
  gluteos: Gluteos,
  piernas: Piernas,

  // submúsculos piernas
  cuadriceps: Cuadriceps,
  isquiotibiales: Isquiotibiales,
  abductores: Abductores,
  pantorrillas: Pantorrillas,
};
