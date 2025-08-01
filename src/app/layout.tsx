import { Metadata } from "next";
import { Lexend } from "next/font/google";

// global css import
import "./global.css";
// import "../global.css";
import { ReduxProvider } from "@/store/provider";
import { ToastProvider } from "@/components/shared/Tost/ToastProvider";
import ChatBox from "@/components/utils/chatBox";

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
            <ChatBox>
              <main>{children}</main>
            </ChatBox>
          </ReduxProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
