import "./globals.css";
import MyRoot from "@/components/Root";


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
        <MyRoot>
          {children}
        </MyRoot>
      </body>
    </html>
  )
}