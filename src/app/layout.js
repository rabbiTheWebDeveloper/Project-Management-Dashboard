import { Inter } from "next/font/google";
import "./globals.css";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import QueryProvider from "@/provider/QueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Management Dashboard",
  description: "The management dashboard for your projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryProvider>
        <AntdRegistry>{children}</AntdRegistry>
        </QueryProvider>
      </body>
    </html>
  );
}
