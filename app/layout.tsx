import type { Metadata } from 'next'
import { Noto_Sans_KR, Noto_Serif_KR, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-sans-kr',
  display: 'swap',
})

const notoSerifKr = Noto_Serif_KR({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-serif-kr',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '금빛행정사사무소 | 복잡한 행정 문제, 명쾌한 해답',
  description: '비자(D-8, F-2, F-4), 외국인 사범, 조달(국가계약법), 법인설립, 인허가 대리, 기업인증(ISO), 국가유공자 등록. 김호순 행정사가 명쾌한 해답을 찾아드립니다.',
  keywords: ['행정사', '비자', '인허가', '외국인 사범', '법인설립', '서울 행정사', '조달', '기업인증', 'ISO', '국가유공자'],
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: '금빛행정사사무소 | 복잡한 행정 문제, 명쾌한 해답',
    description: '비자(D-8, F-2, F-4), 외국인 사범, 조달(국가계약법), 법인설립, 인허가 대리, 기업인증(ISO), 국가유공자 등록. 김호순 행정사가 명쾌한 해답을 찾아드립니다.',
    locale: 'ko_KR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={`${notoSansKr.variable} ${notoSerifKr.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
