"use client";

import { AlertTriangle } from "lucide-react";

interface ConfirmModalProps {
  open: boolean;
  title: string;
  description: string;
  confirmText?: string;
  cancelText?: string;
  loading?: boolean;
  onConfirm: () => void;
  onClose: () => void;
}

export default function ConfirmModal({
  open,
  title,
  description,
  confirmText = "Confirm",
  cancelText = "Cancel",
  loading = false,
  onConfirm,
  onClose,
}: ConfirmModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
          <AlertTriangle
            size={30}
            className="text-red-600"
          />
        </div>

        <h2 className="text-center text-2xl font-bold">
          {title}
        </h2>

        <p className="mt-3 text-center text-slate-500">
          {description}
        </p>

        <div className="mt-8 flex gap-3">
          <button
            onClick={onClose}
            disabled={loading}
            className="flex-1 rounded-xl border border-slate-300 py-3 font-semibold transition hover:bg-slate-100"
          >
            {cancelText}
          </button>

          <button
            onClick={onConfirm}
            disabled={loading}
            className="flex-1 rounded-xl bg-red-600 py-3 font-semibold text-white transition hover:bg-red-500 disabled:opacity-60"
          >
            {loading
              ? "Please wait..."
              : confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}