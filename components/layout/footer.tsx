import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-charcoal text-primary-foreground">
      {/* CTA Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl">
            <p className="text-gold text-sm tracking-widest uppercase mb-4">
              상담 안내
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl font-medium mb-6 text-balance">
              복잡한 행정, 이제 전문가에게 맡기세요
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-10 max-w-xl leading-relaxed">
              복잡한 행정 문제, 금빛행정사가 명쾌한 해답을 찾아드립니다.
              지금 바로 무료 상담을 신청하세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gold text-charcoal font-medium hover:bg-gold-light transition-colors"
              >
                무료 상담 신청
              </Link>
              <a
                href="tel:010-6562-0710"
                className="inline-flex items-center justify-center px-8 py-4 border border-primary-foreground/30 text-primary-foreground font-medium hover:bg-primary-foreground/5 transition-colors"
              >
                010-6562-0710
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gold flex items-center justify-center">
                <span className="text-charcoal font-serif text-lg font-semibold">
                  금
                </span>
              </div>
              <span className="font-serif text-xl font-semibold">
                금빛행정사사무소
              </span>
            </Link>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              신뢰와 전문성을 바탕으로<br />
              최상의 행정 서비스를 제공합니다.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-6 text-gold">
              전문 분야
            </h3>
            <ul className="space-y-3">
              {["비자(D-8, F-2, F-4)", "외국인 사범", "조달(국가계약법)", "법인설립", "인허가 대리", "기업인증(ISO)", "국가유공자 등록"].map((item) => (
                <li key={item}>
                  <span className="text-primary-foreground/60 text-sm hover:text-primary-foreground transition-colors cursor-default">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-6 text-gold">
              바로가기
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "홈" },
                { href: "/about", label: "사무소소개" },
                { href: "/blog", label: "블로그" },
                { href: "/contact", label: "상담문의" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-primary-foreground/60 text-sm hover:text-primary-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-6 text-gold">
              연락처
            </h3>
            <ul className="space-y-3 text-sm text-primary-foreground/60">
              <li>
                <span className="block text-primary-foreground/40 text-xs mb-1">주소</span>
                서울시 중구 퇴계로 324<br />
                성우빌딩 3층
              </li>
              <li>
                <span className="block text-primary-foreground/40 text-xs mb-1">전화</span>
                <a href="tel:010-6562-0710" className="hover:text-primary-foreground transition-colors">
                  010-6562-0710
                </a>
              </li>
              <li>
                <span className="block text-primary-foreground/40 text-xs mb-1">이메일</span>
                <a href="mailto:opkim1876@gmail.com" className="hover:text-primary-foreground transition-colors">
                  opkim1876@gmail.com
                </a>
              </li>
              <li>
                <span className="block text-primary-foreground/40 text-xs mb-1">영업시간</span>
                평일 09:00 - 18:00
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/40 text-sm">
            © 2024 금빛행정사사무소. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-primary-foreground/40">
            <Link href="/privacy" className="hover:text-primary-foreground/60 transition-colors">
              개인정보처리방침
            </Link>
            <Link href="/terms" className="hover:text-primary-foreground/60 transition-colors">
              이용약관
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
