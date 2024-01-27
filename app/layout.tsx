import Header from "@/components/Header";
import "./globals.css";


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
        <Header/>
        {children}
      </body>
    </html>
  )
}