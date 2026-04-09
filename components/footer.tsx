import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg">
                금
              </div>
              <span className="text-lg font-bold">금빛행정사사무소</span>
            </Link>
            <p className="mt-4 text-sm text-secondary-foreground/80 leading-relaxed">
              복잡한 행정 문제, 금빛행정사가 명쾌한 해답을 찾아드립니다.
              김호순 행정사가 직접 상담하고 처리합니다.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-secondary-foreground/60">
              서비스
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/#services" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  비자/출입국
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  법인 설립
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  인허가 대리
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  기업인증 (ISO)
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-secondary-foreground/60">
              바로가기
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/about" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  사무소 소개
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  행정 인사이트
                </Link>
              </li>
              <li>
                <Link href="/about#contact" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  상담 신청
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-secondary-foreground/60">
              연락처
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span className="text-sm text-secondary-foreground/80">
                  서울시 중구 퇴계로 324<br />
                  성우빌딩 3층
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-shrink-0 text-primary" />
                <a href="tel:010-6562-0710" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  010-6562-0710
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 flex-shrink-0 text-primary" />
                <a href="mailto:opkim1876@gmail.com" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  opkim1876@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-secondary-foreground/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-secondary-foreground/60">
              &copy; {new Date().getFullYear()} 금빛행정사사무소. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors">
                개인정보처리방침
              </Link>
              <Link href="#" className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors">
                이용약관
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
