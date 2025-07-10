type ToastType = "success" | "error" | "default";

let showToast: (
  msg: string | string[],
  type: ToastType,
  duration?: number
) => void = () => {};

export const toast = {
  success: (msg: string | string[], duration?: number) =>
    showToast(msg, "success", duration),
  error: (msg: string | string[], duration?: number) =>
    showToast(msg, "error", duration),
  default: (msg: string | string[], duration?: number) =>
    showToast(msg, "default", duration),
};

export const setToastHandler = (fn: typeof showToast) => {
  showToast = fn;
};
