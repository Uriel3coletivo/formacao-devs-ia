import './globals.css'

export const metadata = {
  title: 'Formação de Devs nativos em IA | Agibank',
  description: 'A sua oportunidade de se tornar um DEV habilitado em IA',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Forçando o celular a baixar as fontes antes de tudo */}
        <link rel="preload" href="/fonts/AgibankSans-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/AgibankSans-Medium.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/AgibankSans-SemiBold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/AgibankSans-Bold.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  )
}
