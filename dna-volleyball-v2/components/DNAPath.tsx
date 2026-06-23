type DNAPathProps = {
  side: "left" | "right";
};

export default function DNAPath({ side }: DNAPathProps) {
  const startX = side === "left" ? 140 : 280;
  const dir = side === "left" ? 1 : -1;

  const path = `
    M ${startX} 0
    C ${startX + 70 * dir} 60 ${startX + 70 * dir} 120 ${startX} 180
    C ${startX - 70 * dir} 240 ${startX - 70 * dir} 300 ${startX} 360
    C ${startX + 70 * dir} 420 ${startX + 70 * dir} 480 ${startX} 540
    C ${startX - 70 * dir} 600 ${startX - 70 * dir} 660 ${startX} 720
    C ${startX + 70 * dir} 780 ${startX + 70 * dir} 840 ${startX} 900
  `;

  return (
    <path
      d={path}
      stroke="url(#dnaGradient)"
      strokeWidth="6"
      strokeLinecap="round"
      fill="none"
      filter="url(#dnaGlow)"
    />
  );
}