import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Study Habit Tracker — Track and optimize student study patterns',
  description: 'Analytics tool that tracks study sessions, identifies optimal learning times, and provides personalized study recommendations for college students and online learners.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="2239a226-5fbb-488b-9fe5-dab298311ebe"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}
