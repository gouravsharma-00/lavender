"use client";
import { GIF } from "@constant";
type Props = {
  show: boolean;
};

export function LoadingOverlay({ show }: Props) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-9999">
      <img
        src={GIF.LOAD}
        alt="Loading..."
        className="w-20 h-20"
      />
    </div>
  );
}
