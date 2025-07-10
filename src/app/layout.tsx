import { Metadata } from "next";
import { Lexend } from "next/font/google";

// global css import
import "./global.css";
// import "../global.css";
import { ReduxProvider } from "@/store/provider";
import { ToastProvider } from "@/components/shared/Tost/ToastProvider";

// font family

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});
// Metadata
export const metadata: Metadata = {
  title: "real estate",
  description: "",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lexend.className}`}>
      <body>
        <ToastProvider>
          <ReduxProvider>
            <main>{children}</main>
          </ReduxProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
