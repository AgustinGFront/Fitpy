import { StyleSheet, View } from "react-native";
import Svg, { Circle } from "react-native-svg";

interface Props {
  size: number;
  strokeWidth: number;
  progress: number; // 0 → 1
  color: string;
  backgroundColor: string;
}

export default function ProgressRing({
  size,
  strokeWidth,
  progress,
  color,
  backgroundColor,
}: Props) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const clampedProgress = Math.min(
    Math.max(progress, 0),
    1
  );

  const strokeDashoffset =
    circumference * (1 - clampedProgress);

  return (
    <View
      style={[
        styles.container,
        { width: size, height: size },
      ]}
    >
      <Svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
      >
        {/* Fondo */}
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={backgroundColor}
          strokeWidth={strokeWidth}
          fill="none"
        />

        {/* Progreso */}
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          rotation="-90"
          origin={`${size / 2}, ${size / 2}`}
        />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});
