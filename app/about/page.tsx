import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import {
  Target,
  Eye,
  Award,
  Users,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "사무소 소개 | 금빛행정사사무소",
  description: "비자/출입국, 인허가, 법인설립, 기업인증 등 행정 전문가 김호순 행정사가 운영하는 금빛행정사사무소입니다.",
}

const strengths = [
  {
    icon: Target,
    title: "정확성",
    description: "꼼꼼한 서류 검토와 철저한 업무 처리로 오류 없는 행정 서비스를 제공합니다.",
  },
  {
    icon: Eye,
    title: "투명성",
    description: "모든 업무 진행 과정을 고객에게 투명하게 공개하고 소통합니다.",
  },
  {
    icon: Users,
    title: "전문성",
    description: "비자, 인허가, 법인설립, 기업인증 등 다양한 분야의 전문 행정 서비스를 제공합니다.",
  },
  {
    icon: Award,
    title: "신뢰성",
    description: "오랜 경험과 고객과의 신뢰를 바탕으로 장기적인 파트너십을 추구합니다.",
  },
]

const timeline = [
  { year: "2010", event: "행정사 자격 취득", description: "행정사 시험 합격 및 실무 경력 시작" },
  { year: "2015", event: "ISO 심사원 자격 취득", description: "기업인증 분야 전문성 확보" },
  { year: "2018", event: "비자/출입국 업무 전문화", description: "D-8, F-2, F-4 비자 전문 서비스 시작" },
  { year: "2020", event: "금빛행정사사무소 설립", description: "서울시 중구에서 개업" },
  { year: "2023", event: "조달/인허가 업무 확장", description: "국가계약법 기반 조달 업무 및 인허가 대리 서비스 강화" },
  { year: "2026", event: "누적 상담 1,000건 돌파", description: "다양한 분야의 신뢰받는 행정 파트너로 성장" },
]

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-secondary py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-secondary-foreground sm:text-5xl">
                사무소 소개
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-secondary-foreground/80">
                금빛행정사사무소는 풍부한 경험과 전문성을 바탕으로
                <br className="hidden sm:block" />
                고객의 행정 문제를 명쾌하게 해결하는 신뢰받는 파트너입니다.
              </p>
            </div>
          </div>
        </section>

        {/* CEO & Mission Section */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  About CEO
                </p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  김호순 대표 행정사
                </h2>
                <div className="mt-6">
                  <img
                    src="/ceo-photo.jpg"
                    alt="김호순 대표 행정사"
                    className="w-full max-w-sm rounded-2xl shadow-lg"
                  />
                </div>
                <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                  복잡한 행정 문제, 금빛행정사가 명쾌한 해답을 찾아드립니다.
                  혼자 고민하면 막막하지만, 전문가와 10분만 대화하면 길이 보입니다.
                  편하게 카톡 하세요.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  비자/출입국, 외국인 사범 업무, 조달 업무, 법인 설립, 행정기관 인허가 대리,
                  기업인증(ISO 심사원), 국가유공자 등록 등 다양한 행정 분야에서
                  고객의 든든한 파트너가 되겠습니다.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {strengths.map((item) => (
                  <Card key={item.title} className="border-border bg-card">
                    <CardContent className="p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <item.icon className="h-6 w-6" />
                      </div>
                      <h3 className="mt-4 font-semibold text-card-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="bg-secondary py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                Our Journey
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-secondary-foreground sm:text-4xl">
                금빛행정사의 발자취
              </h2>
              <p className="mt-4 text-lg text-secondary-foreground/80">
                전문성을 쌓아온 성장의 역사
              </p>
            </div>

            <div className="mt-16">
              <div className="relative">
                <div className="absolute left-4 top-0 h-full w-0.5 bg-primary/20 md:left-1/2 md:-translate-x-1/2" />

                <div className="space-y-8">
                  {timeline.map((item, index) => (
                    <div
                      key={item.year}
                      className={`relative flex items-start gap-6 md:items-center ${
                        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                      }`}
                    >
                      <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"} hidden md:block`}>
                        <div className={`${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                          <span className="text-sm font-semibold text-primary">{item.year}</span>
                          <h3 className="mt-1 text-lg font-semibold text-secondary-foreground">
                            {item.event}
                          </h3>
                          <p className="mt-1 text-sm text-secondary-foreground/70">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      <div className="absolute left-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground md:static md:left-auto md:z-10">
                        <CheckCircle2 className="h-4 w-4" />
                      </div>

                      <div className="flex-1 pl-12 md:hidden">
                        <span className="text-sm font-semibold text-primary">{item.year}</span>
                        <h3 className="mt-1 text-lg font-semibold text-secondary-foreground">
                          {item.event}
                        </h3>
                        <p className="mt-1 text-sm text-secondary-foreground/70">
                          {item.description}
                        </p>
                      </div>

                      <div className="hidden flex-1 md:block" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section id="contact" className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Contact Us
                </p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  상담 신청
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  행정 관련 문의사항이 있으시면 언제든 연락 주세요.
                  <br />
                  김호순 행정사가 친절하게 상담해 드립니다.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">전화 상담</p>
                      <a
                        href="tel:010-6562-0710"
                        className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
                      >
                        010-6562-0710
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">이메일 문의</p>
                      <a
                        href="mailto:opkim1876@gmail.com"
                        className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
                      >
                        opkim1876@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">오시는 길</p>
                      <p className="text-lg font-semibold text-foreground">
                        서울시 중구 퇴계로 324
                      </p>
                      <p className="text-sm text-muted-foreground">
                        성우빌딩 3층
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <p className="text-sm text-muted-foreground">운영 시간</p>
                  <p className="mt-1 font-medium text-foreground">
                    평일 09:00 - 18:00 (점심시간 12:00 - 13:00)
                  </p>
                </div>
              </div>

              <Card className="border-border bg-card">
                <CardContent className="p-6 lg:p-8">
                  <h3 className="text-xl font-semibold text-card-foreground">
                    온라인 상담 신청
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    아래 양식을 작성해 주시면 빠른 시일 내에 연락드리겠습니다.
                  </p>

                  <form className="mt-6 space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="name"
                          className="mb-2 block text-sm font-medium text-card-foreground"
                        >
                          성함 <span className="text-destructive">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                          placeholder="홍길동"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="mb-2 block text-sm font-medium text-card-foreground"
                        >
                          연락처 <span className="text-destructive">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                          placeholder="010-1234-5678"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-card-foreground"
                      >
                        이메일
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="example@email.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="service"
                        className="mb-2 block text-sm font-medium text-card-foreground"
                      >
                        관심 서비스
                      </label>
                      <select
                        id="service"
                        name="service"
                        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                      >
                        <option value="">선택해 주세요</option>
                        <option value="비자출입국">비자/출입국 (D-8, F-2, F-4)</option>
                        <option value="외국인사범">외국인 사범 업무</option>
                        <option value="조달">조달 업무 (국가계약법)</option>
                        <option value="법인설립">법인 설립</option>
                        <option value="인허가">행정기관 인허가 대리</option>
                        <option value="기업인증">기업인증 (ISO)</option>
                        <option value="국가유공자">국가유공자 등록</option>
                        <option value="기타">기타</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-medium text-card-foreground"
                      >
                        문의 내용
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className="w-full resize-none rounded-lg border border-input bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        placeholder="문의하실 내용을 자유롭게 작성해 주세요."
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      상담 신청하기
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>

                    <p className="text-center text-xs text-muted-foreground">
                      신청 후 영업일 기준 24시간 내에 연락드립니다
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
