import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import {
  FileText,
  Scale,
  Building2,
  FileCheck,
  ShieldCheck,
  Award,
  ArrowRight,
  CheckCircle2,
  Users,
  Clock,
  TrendingUp,
  ChevronRight,
  Globe,
} from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "비자/출입국",
    description: "D-8, F-2, F-4 비자 등 외국인 체류자격 관련 업무를 전문적으로 처리합니다.",
  },
  {
    icon: ShieldCheck,
    title: "외국인 사범 업무",
    description: "출입국관리법 위반 등 외국인 사범 관련 행정 업무를 대리합니다.",
  },
  {
    icon: FileCheck,
    title: "조달 업무",
    description: "국가계약법에 따른 조달 입찰, 계약 관련 행정 업무를 지원합니다.",
  },
  {
    icon: Building2,
    title: "법인 설립",
    description: "법인 설립 절차부터 등기까지 원스톱으로 행정 업무를 대행합니다.",
  },
  {
    icon: FileText,
    title: "행정기관 인허가 대리",
    description: "각종 행정기관 인허가 신청 및 변경, 갱신 업무를 전문적으로 대리합니다.",
  },
  {
    icon: Award,
    title: "기업인증 (ISO 심사원)",
    description: "ISO 인증 등 기업인증 취득을 위한 컨설팅과 심사 업무를 수행합니다.",
  },
  {
    icon: Scale,
    title: "국가유공자 등록",
    description: "국가유공자 등록 신청 및 관련 행정 절차를 대리합니다.",
  },
]

const stats = [
  { value: "15+", label: "년 경력", icon: Clock },
  { value: "1,000+", label: "누적 상담 건수", icon: Users },
  { value: "98%", label: "고객 만족도", icon: TrendingUp },
  { value: "7+", label: "전문 서비스 분야", icon: Award },
]

const processSteps = [
  {
    step: "01",
    title: "카톡/전화 상담",
    description: "편하게 카톡이나 전화로 상담을 신청하세요.",
  },
  {
    step: "02",
    title: "현황 분석",
    description: "고객님의 상황과 필요한 행정 업무를 면밀히 분석합니다.",
  },
  {
    step: "03",
    title: "맞춤 안내",
    description: "분석 결과를 바탕으로 최적의 해결 방안을 안내합니다.",
  },
  {
    step: "04",
    title: "업무 진행",
    description: "김호순 행정사가 직접 담당하여 업무를 진행합니다.",
  },
]

const whyChooseUs = [
  {
    title: "행정사 직접 담당",
    description: "김호순 대표 행정사가 직접 고객을 담당하여 일관된 서비스를 제공합니다.",
  },
  {
    title: "신속하고 정확한 대응",
    description: "행정 이슈 발생 시 빠른 커뮤니케이션과 정확한 해결책을 제시합니다.",
  },
  {
    title: "합리적인 수수료 체계",
    description: "업무 범위에 맞는 투명하고 합리적인 수수료를 적용합니다.",
  },
  {
    title: "다양한 전문 분야",
    description: "비자, 인허가, 법인설립, 기업인증 등 폭넓은 행정 업무를 처리합니다.",
  },
]

const insights = [
  {
    category: "비자 가이드",
    title: "2026년 F-4 비자 자격요건 변경사항 총정리",
    excerpt: "올해 변경된 F-4 비자 자격요건과 신청 시 주의사항을 정리했습니다.",
    date: "2026.03.15",
  },
  {
    category: "법인 설립",
    title: "외국인 투자법인 설립 절차 A to Z",
    excerpt: "D-8 비자와 연계한 외국인 투자법인 설립 절차를 안내합니다.",
    date: "2026.03.08",
  },
  {
    category: "인허가",
    title: "행정기관 인허가 신청 시 자주 묻는 질문",
    excerpt: "인허가 신청 과정에서 자주 발생하는 문의사항과 해결 방법을 안내합니다.",
    date: "2026.02.28",
  },
]

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-secondary py-20 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-4 inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                복잡한 행정 문제, 명쾌한 해답
              </p>
              <h1 className="text-balance text-4xl font-bold tracking-tight text-secondary-foreground sm:text-5xl lg:text-6xl">
                복잡한 행정 문제,
                <span className="block text-primary">금빛행정사가 명쾌한 해답을 찾아드립니다</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-secondary-foreground/80">
                혼자 고민하면 막막하지만, 전문가와 10분만 대화하면 길이 보입니다.
                <br className="hidden sm:block" />
                편하게 카톡 하세요.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" asChild>
                  <Link href="/about#contact">
                    무료 상담 신청
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/5">
                  <Link href="/about">사무소 소개</Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute -top-1/2 left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-primary/5" />
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                Services
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                전문 행정 서비스
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                비자, 인허가, 법인설립 등 다양한 행정 업무를 전문적으로 처리합니다
              </p>
            </div>

            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Card
                  key={service.title}
                  className="group border-border bg-card transition-all hover:border-primary/30 hover:shadow-lg"
                >
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-card-foreground">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="border-y border-border bg-muted/50 py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <p className="text-4xl font-bold text-foreground">{stat.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                Process
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                업무 진행 프로세스
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                체계적인 프로세스로 정확하고 신속한 서비스를 제공합니다
              </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {processSteps.map((item, index) => (
                <div key={item.step} className="relative">
                  {index < processSteps.length - 1 && (
                    <div className="absolute left-1/2 top-8 hidden h-px w-full bg-border lg:block" />
                  )}
                  <div className="relative flex flex-col items-center text-center">
                    <div className="z-10 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                      {item.step}
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="bg-secondary py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Why Choose Us
                </p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-secondary-foreground sm:text-4xl">
                  금빛행정사사무소를
                  <br />
                  선택해야 하는 이유
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-secondary-foreground/80">
                  풍부한 경험과 전문성, 고객 중심의 서비스로
                  든든한 행정 파트너가 되겠습니다.
                </p>
                <Button className="mt-8" asChild>
                  <Link href="/about">
                    사무소 자세히 보기
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {whyChooseUs.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl bg-card p-6 shadow-sm"
                  >
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                    <h3 className="mt-4 font-semibold text-card-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Insights Preview Section */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Insights
                </p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  행정 인사이트
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  최신 행정 정보와 실무 노하우를 확인하세요
                </p>
              </div>
              <Button variant="ghost" asChild className="hidden sm:flex">
                <Link href="/blog">
                  전체 보기
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {insights.map((post) => (
                <Link key={post.title} href="/blog" className="group">
                  <Card className="h-full border-border bg-card transition-all hover:border-primary/30 hover:shadow-lg">
                    <CardContent className="flex h-full flex-col p-6">
                      <div className="flex items-center gap-3">
                        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                          {post.category}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {post.date}
                        </span>
                      </div>
                      <h3 className="mt-4 font-semibold text-card-foreground group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {post.excerpt}
                      </p>
                      <span className="mt-4 inline-flex items-center text-sm font-medium text-primary">
                        자세히 보기
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center sm:hidden">
              <Button variant="outline" asChild>
                <Link href="/blog">전체 보기</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="bg-primary py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
                지금 바로 상담을 신청하세요
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/80">
                김호순 행정사가 고객님의 행정 문제에 최적의 해결책을 제안해 드립니다
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  size="lg"
                  variant="secondary"
                  asChild
                >
                  <Link href="/about#contact">
                    무료 상담 신청
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <a
                  href="tel:010-6562-0710"
                  className="flex items-center gap-2 text-primary-foreground/90 hover:text-primary-foreground transition-colors"
                >
                  <span className="text-lg font-semibold">010-6562-0710</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
