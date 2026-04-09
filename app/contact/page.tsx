import { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "상담문의 | 금빛행정사사무소",
  description: "비자, 인허가, 외국인 행정, 법인설립 관련 무료 상담을 신청하세요. 전문 행정사가 신속하게 답변드립니다.",
}

const contactInfo = [
  {
    icon: Phone,
    label: "전화 상담",
    value: "010-6562-0710",
    href: "tel:010-6562-0710",
    description: "평일 09:00 - 18:00"
  },
  {
    icon: Mail,
    label: "이메일 문의",
    value: "opkim1876@gmail.com",
    href: "mailto:opkim1876@gmail.com",
    description: "24시간 내 답변"
  },
  {
    icon: MapPin,
    label: "사무소 위치",
    value: "서울시 중구 퇴계로 324, 성우빌딩 3층",
    href: "https://maps.google.com",
    description: "성우빌딩 3층"
  },
  {
    icon: Clock,
    label: "영업 시간",
    value: "평일 09:00 - 18:00",
    href: null,
    description: "주말 및 공휴일 휴무"
  }
]

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-gold" />
                <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium">
                  상담문의
                </span>
              </div>
              <h1 className="font-serif text-4xl lg:text-5xl font-medium text-foreground mb-6 text-balance">
                무료 상담을 신청하세요
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                복잡한 행정 업무, 전문가와 상담하면 쉬워집니다.<br className="hidden md:block" />
                24시간 내 전문 행정사가 연락드립니다.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16 lg:py-20 bg-secondary">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Form */}
              <div className="bg-card p-8 lg:p-12 border border-border">
                <h2 className="font-serif text-2xl font-medium text-foreground mb-8">
                  상담 신청서
                </h2>
                
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        성함 <span className="text-gold">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
                        placeholder="홍길동"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        연락처 <span className="text-gold">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        className="w-full px-4 py-3 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
                        placeholder="010-1234-5678"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      이메일
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
                      placeholder="example@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      상담 분야 <span className="text-gold">*</span>
                    </label>
                    <select
                      required
                      className="w-full px-4 py-3 bg-background border border-border text-foreground focus:outline-none focus:border-gold transition-colors appearance-none"
                      defaultValue=""
                    >
                      <option value="" disabled>선택해주세요</option>
                      <option value="visa">비자(D-8, F-2, F-4)</option>
                      <option value="foreigner">외국인 사범</option>
                      <option value="procurement">조달(국가계약법)</option>
                      <option value="corporation">법인설립</option>
                      <option value="permit">인허가 대리</option>
                      <option value="certification">기업인증(ISO)</option>
                      <option value="veteran">국가유공자 등록</option>
                      <option value="other">기타 문의</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      상담 내용 <span className="text-gold">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors resize-none"
                      placeholder="상담받고 싶은 내용을 자세히 적어주세요."
                    />
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="privacy"
                      required
                      className="mt-1 w-4 h-4 border-border"
                    />
                    <label htmlFor="privacy" className="text-sm text-muted-foreground">
                      개인정보 수집 및 이용에 동의합니다. <span className="text-gold">*</span>
                    </label>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full py-4 bg-charcoal text-primary-foreground font-medium hover:bg-charcoal-light transition-colors"
                  >
                    상담 신청하기
                  </button>
                </form>
              </div>
              
              {/* Contact Info */}
              <div>
                <h2 className="font-serif text-2xl font-medium text-foreground mb-8">
                  연락처 안내
                </h2>
                
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-start gap-4 p-6 bg-card border border-border">
                      <div className="w-12 h-12 bg-secondary flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-charcoal" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="font-medium text-foreground hover:text-gold transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-medium text-foreground">{item.value}</p>
                        )}
                        <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Map placeholder */}
                <div className="mt-8 aspect-[4/3] bg-card border border-border flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">지도 영역</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
