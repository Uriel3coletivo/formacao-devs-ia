import './globals.css'

export const metadata = {
  title: 'Formação de Devs nativos em IA | Agibank',
  description: 'A sua oportunidade de se tornar um DEV habilitado em IA',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
