import React, { useRef, useState } from "react";

/* =========================
   Types
========================= */

type SpinnerImage = {
  id: string;
  src: string; // path from /public
};

type HalfCircleImageSpinnerProps = {
  images: SpinnerImage[];
  selected: SpinnerImage[];
  setSelected: React.Dispatch<React.SetStateAction<SpinnerImage[]>>;
  radius?: number;
};

/* =========================
   Helpers
========================= */

const degToRad = (deg: number) => (deg * Math.PI) / 180;

const normalize = (deg: number) => ((deg % 360) + 360) % 360;

/* =========================
   Spinner Component
========================= */

export const HalfCircleImageSpinner: React.FC<HalfCircleImageSpinnerProps> = ({
  images,
  selected,
  setSelected,
  radius = 160,
}) => {
  const [rotation, setRotation] = useState(0);

  const isDragging = useRef(false);
  const lastX = useRef(0);

  const step = 180 / (images.length - 1);

  /* -------------------------
     Pointer / Touch Handlers
  --------------------------*/
  const onPointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    lastX.current = e.clientX;
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    const delta = e.clientX - lastX.current;
    setRotation((r) => r + delta * 0.6); // spin sensitivity
    lastX.current = e.clientX;
  };

  const onPointerUp = () => {
    isDragging.current = false;
  };

  /* -------------------------
     Selection Logic
  --------------------------*/
  const addImage = (img: SpinnerImage) => {
    setSelected((prev) =>
      prev.some((i) => i.id === img.id) ? prev : [...prev, img]
    );
  };

  return (
    <div
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
      style={{
        position: "relative",
        width: radius * 2,
        height: radius,
        overflow: "hidden",
        touchAction: "none",
        userSelect: "none",
      }}
    >
      {images.map((img, index) => {
        const baseAngle = -90 + index * step;
        const angle = normalize(baseAngle + rotation);

        const x = radius + radius * Math.cos(degToRad(angle));
        const y = radius + radius * Math.sin(degToRad(angle));

        const isSelected = selected.some((i) => i.id === img.id);

        return (
          <button
            key={img.id}
            onClick={() => addImage(img)}
            style={{
              position: "absolute",
              left: x,
              top: y,
              transform: "translate(-50%, -50%)",
              width: 64,
              height: 64,
              padding: 4,
              borderRadius: "50%",
              background: "#fff",
              border: isSelected
                ? "3px solid #1976d2"
                : "2px solid #ccc",
              cursor: "pointer",
            }}
          >
            <img
              src={img.src}
              alt=""
              draggable={false}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                objectFit: "cover",
                pointerEvents: "none",
              }}
            />
          </button>
        );
      })}
    </div>
  );
};

/* =========================
   Example Usage (Default Export)
========================= */

const IMAGES: SpinnerImage[] = [
  { id: "1", src: "1.png" },
  { id: "2", src: "2.png" },
  { id: "3", src: "3.png" },
  { id: "4", src: "4.png" },
  { id: "5", src: "5.png" },
  { id: "6", src: "6.png" },
  { id: "7", src: "7.png" },
  { id: "8", src: "8.png" },
];

export default function HalfCircleSpinnerDemo() {
  const [selected, setSelected] = useState<SpinnerImage[]>([]);

  return (
    <div style={{ padding: 24 }}>
      <HalfCircleImageSpinner
        images={IMAGES}
        selected={selected}
        setSelected={setSelected}
      />
    </div>
  );
}