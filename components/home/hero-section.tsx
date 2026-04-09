import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      {/* Gold accent line */}
      <div className="absolute left-0 top-1/3 w-px h-32 bg-gold/30 hidden lg:block" />
      <div className="absolute right-0 top-1/2 w-px h-32 bg-gold/30 hidden lg:block" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-3 mb-8 animate-fade-up">
            <div className="w-8 h-px bg-gold" />
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-medium">
              금빛행정사사무소
            </span>
            <div className="w-8 h-px bg-gold" />
          </div>

          {/* Main headline */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium leading-[1.1] mb-8 text-balance animate-fade-up" style={{ animationDelay: '0.1s' }}>
            복잡한 행정 문제,<br />
            <span className="text-charcoal-light">금빛행정사가 명쾌한 해답을 찾아드립니다</span>
          </h1>

          {/* Supporting text */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
            비자(D-8, F-2, F-4), 외국인 사범, 조달, 법인설립, 인허가 대리, 기업인증(ISO), 국가유공자 등록까지.<br className="hidden md:block" />
            김호순 행정사가 신속하고 정확하게 처리해 드립니다.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-charcoal text-primary-foreground font-medium hover:bg-charcoal-light transition-all"
            >
              무료 상담 신청
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center px-8 py-4 border border-border text-foreground font-medium hover:bg-secondary transition-colors"
            >
              사무소 소개
            </Link>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-24 lg:mt-32 animate-fade-up" style={{ animationDelay: '0.4s' }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {[
              { value: "20+", label: "년 경력" },
              { value: "3,000+", label: "성공 사례" },
              { value: "98%", label: "고객 만족도" },
              { value: "24h", label: "신속 응대" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="font-serif text-3xl lg:text-4xl font-medium text-foreground mb-2">
                  {item.value}
                </div>
                <div className="text-sm text-muted-foreground tracking-wider">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: '0.6s' }}>
        <span className="text-xs text-muted-foreground tracking-wider uppercase">Scroll</span>
        <div className="w-px h-8 bg-border relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gold animate-pulse" />
        </div>
      </div>
    </section>
  )
}
