import { Providers } from "@/Store/provider";
import "./globals.css";
import MyRoot from "@/components/Root";
import { ThemeProvider } from "next-themes"

export const metadata = {
  title: "MUI APP",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Providers>
          <MyRoot>
            {children}
          </MyRoot>
        </Providers>
      </body>
    </html>
  )
}