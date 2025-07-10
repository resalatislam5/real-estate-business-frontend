"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { setToastHandler } from "./toast";

type ToastType = "success" | "error" | "default";

interface Toast {
  id: number;
  message: string | string[];
  type: ToastType;
}

interface ToastContextType {
  showToast: (message: string, type?: ToastType, duration?: number) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

let toastId = 0;

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const showToast = useCallback(
    (
      message: string | string[],
      type: ToastType = "default",
      duration: number = 3000
    ) => {
      const id = ++toastId;
      const newToast: Toast = { id, message, type };
      setToasts((prev) => [...prev, newToast]);

      setTimeout(() => removeToast(id), duration);
    },
    []
  );

  useEffect(() => {
    setToastHandler(showToast);
  }, [showToast]);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="fixed top-4 right-4 z-50 flex flex-col gap-2">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`animate-slide-in flex flex-col gap-1 px-4 py-3 rounded-lg shadow-md border w-72
      ${
        toast.type === "success"
          ? "bg-green-100 border-green-300 text-green-800"
          : toast.type === "error"
          ? "bg-red-100 border-red-300 text-red-800"
          : "bg-white border-gray-200 text-gray-800"
      }
    `}
          >
            <div className="flex items-center gap-2">
              {toast.type === "success" && <span>✅</span>}
              {toast.type === "error" && <span>❌</span>}
              <span className="font-medium capitalize">{toast.type}</span>
            </div>
            {Array.isArray(toast.message) ? (
              <ul className="pl-5 list-disc text-sm">
                {toast.message.map((msg, idx) => (
                  <li key={idx}>{msg}</li>
                ))}
              </ul>
            ) : (
              <p className="text-sm">{toast.message}</p>
            )}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
