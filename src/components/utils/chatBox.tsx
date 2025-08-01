"use client";
import { ReactNode, useEffect } from "react";

const ChatBox = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/688d00308ba539192ec9a532/1j1jchfed";
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);
  }, []);

  return <>{children}</>;
};

export default ChatBox;
