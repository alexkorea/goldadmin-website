"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  Calendar,
  Clock,
  Search,
  ChevronRight,
  ChevronLeft,
  BookOpen,
} from "lucide-react"

const categories = [
  { id: "all", name: "전체", count: 18 },
  { id: "visa", name: "비자/출입국", count: 6 },
  { id: "corporate", name: "법인 설립", count: 3 },
  { id: "permit", name: "인허가", count: 3 },
  { id: "procurement", name: "조달 업무", count: 2 },
  { id: "certification", name: "기업인증", count: 2 },
  { id: "veteran", name: "국가유공자", count: 2 },
]

const featuredPost = {
  category: "비자/출입국",
  categoryId: "visa",
  title: "2026년 F-4 비자 자격요건 변경사항 총정리",
  excerpt:
    "올해 변경된 F-4 비자 자격요건과 신청 시 주의사항을 상세히 정리했습니다. 재외동포 비자의 대상자 확대, 제출 서류 변경, 심사 기간 단축 등 핵심 내용을 확인하세요.",
  date: "2026.03.15",
  readTime: "8분",
  author: "김호순 행정사",
}

const blogPosts = [
  {
    id: 1,
    category: "비자/출입국",
    categoryId: "visa",
    title: "D-8 투자비자 신청 완벽 가이드",
    excerpt:
      "외국인 투자자를 위한 D-8 비자 신청 절차와 필요 서류를 상세히 안내합니다. 투자금액 기준, 사업계획서 작성법까지 정리했습니다.",
    date: "2026.03.08",
    readTime: "7분",
    author: "김호순 행정사",
  },
  {
    id: 2,
    category: "법인 설립",
    categoryId: "corporate",
    title: "외국인 투자법인 설립 절차 A to Z",
    excerpt:
      "외국인이 한국에서 법인을 설립하는 전체 절차를 안내합니다. D-8 비자와 연계한 투자법인 설립의 핵심 포인트를 확인하세요.",
    date: "2026.02.28",
    readTime: "9분",
    author: "김호순 행정사",
  },
  {
    id: 3,
    category: "인허가",
    categoryId: "permit",
    title: "행정기관 인허가 신청 시 자주 묻는 질문",
    excerpt:
      "인허가 신청 과정에서 자주 발생하는 문의사항과 해결 방법을 정리했습니다. 신청 전 체크리스트도 함께 확인하세요.",
    date: "2026.02.20",
    readTime: "6분",
    author: "김호순 행정사",
  },
  {
    id: 4,
    category: "비자/출입국",
    categoryId: "visa",
    title: "F-2 거주비자 점수제 완벽 분석",
    excerpt:
      "F-2 비자 점수제 항목별 배점과 고득점 전략을 소개합니다. 학력, 소득, 나이 등 각 항목의 점수 계산법을 정리했습니다.",
    date: "2026.02.15",
    readTime: "8분",
    author: "김호순 행정사",
  },
  {
    id: 5,
    category: "조달 업무",
    categoryId: "procurement",
    title: "국가계약법 기반 조달 입찰 참여 가이드",
    excerpt:
      "나라장터를 통한 조달 입찰 참여 절차와 주의사항을 안내합니다. 입찰 자격, 서류 준비, 낙찰 기준을 정리했습니다.",
    date: "2026.02.10",
    readTime: "7분",
    author: "김호순 행정사",
  },
  {
    id: 6,
    category: "기업인증",
    categoryId: "certification",
    title: "ISO 인증 취득 절차와 준비사항",
    excerpt:
      "ISO 9001, 14001 등 주요 인증의 취득 절차와 준비해야 할 서류를 상세히 안내합니다.",
    date: "2026.02.05",
    readTime: "6분",
    author: "김호순 행정사",
  },
  {
    id: 7,
    category: "국가유공자",
    categoryId: "veteran",
    title: "국가유공자 등록 신청 절차 안내",
    excerpt:
      "국가유공자 등록 신청 자격요건과 신청 절차, 필요 서류를 안내합니다. 보훈급여금 및 지원 혜택도 함께 정리했습니다.",
    date: "2026.01.28",
    readTime: "5분",
    author: "김호순 행정사",
  },
  {
    id: 8,
    category: "비자/출입국",
    categoryId: "visa",
    title: "외국인 사범 사건 대응 방법",
    excerpt:
      "출입국관리법 위반 시 대응 방법과 절차를 안내합니다. 과태료 처분, 출국명령, 강제퇴거 등 각 상황별 대응 전략을 정리했습니다.",
    date: "2026.01.20",
    readTime: "7분",
    author: "김호순 행정사",
  },
  {
    id: 9,
    category: "인허가",
    categoryId: "permit",
    title: "영업 인허가 변경 및 갱신 절차",
    excerpt:
      "기존 인허가의 변경 신청 및 갱신 절차를 안내합니다. 기한 관리와 서류 준비의 핵심 포인트를 확인하세요.",
    date: "2026.01.15",
    readTime: "5분",
    author: "김호순 행정사",
  },
]

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory =
      activeCategory === "all" || post.categoryId === activeCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-secondary py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-secondary-foreground sm:text-5xl">
                행정 인사이트
              </h1>
              <p className="mt-4 text-lg text-secondary-foreground/80">
                최신 행정 정보와 실무 노하우를 공유합니다
              </p>
            </div>

            {/* Search Bar */}
            <div className="mx-auto mt-8 max-w-xl">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="검색어를 입력하세요"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-full border border-input bg-card px-12 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Card className="overflow-hidden border-border bg-card">
              <CardContent className="grid gap-6 p-0 lg:grid-cols-2">
                <div className="flex items-center justify-center bg-primary/10 p-8 lg:p-12">
                  <div className="text-center">
                    <BookOpen className="mx-auto h-24 w-24 text-primary opacity-80" />
                    <p className="mt-4 text-sm font-medium text-primary">
                      Featured Article
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-center p-6 lg:p-10">
                  <span className="w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {featuredPost.category}
                  </span>
                  <h2 className="mt-4 text-2xl font-bold text-card-foreground lg:text-3xl">
                    {featuredPost.title}
                  </h2>
                  <p className="mt-4 leading-relaxed text-muted-foreground">
                    {featuredPost.excerpt}
                  </p>
                  <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime} 읽기
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {featuredPost.author}
                  </p>
                  <Button className="mt-6 w-fit">
                    자세히 보기
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Categories & Posts */}
        <section className="border-t border-border bg-muted/30 py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Category Filters */}
            <div className="mb-10 flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    activeCategory === category.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-card text-muted-foreground hover:bg-muted hover:text-foreground border border-border"
                  }`}
                >
                  {category.name}
                  <span className="ml-1.5 text-xs opacity-70">
                    ({category.count})
                  </span>
                </button>
              ))}
            </div>

            {/* Blog Grid */}
            {filteredPosts.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredPosts.map((post) => (
                  <Card
                    key={post.id}
                    className="group border-border bg-card transition-all hover:border-primary/30 hover:shadow-lg"
                  >
                    <CardContent className="flex h-full flex-col p-6">
                      <div className="flex items-center gap-3">
                        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                          {post.category}
                        </span>
                      </div>
                      <h3 className="mt-4 text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3.5 w-3.5" />
                            {post.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3.5 w-3.5" />
                            {post.readTime}
                          </span>
                        </div>
                      </div>
                      <p className="mt-2 text-xs text-muted-foreground">
                        {post.author}
                      </p>
                      <span className="mt-4 inline-flex items-center text-sm font-medium text-primary">
                        자세히 보기
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <Search className="h-12 w-12 text-muted-foreground/50" />
                <p className="mt-4 text-lg font-medium text-muted-foreground">
                  검색 결과가 없습니다
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  다른 검색어나 카테고리를 선택해 보세요
                </p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    setSearchQuery("")
                    setActiveCategory("all")
                  }}
                >
                  전체 글 보기
                </Button>
              </div>
            )}

            {/* Pagination */}
            {filteredPosts.length > 0 && (
              <div className="mt-12 flex items-center justify-center gap-2">
                <Button variant="outline" size="icon" disabled>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  1
                </Button>
                <Button variant="outline" size="sm">
                  2
                </Button>
                <Button variant="outline" size="icon">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="bg-primary py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold text-primary-foreground sm:text-3xl">
                행정 뉴스레터 구독
              </h2>
              <p className="mt-4 text-primary-foreground/80">
                최신 행정 정보와 실무 팁을 이메일로 받아보세요
              </p>
              <form className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-2">
                <input
                  type="email"
                  placeholder="이메일 주소를 입력하세요"
                  className="flex-1 rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-3 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary-foreground/20"
                />
                <Button variant="secondary" size="lg">
                  구독하기
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
              <p className="mt-4 text-xs text-primary-foreground/60">
                구독은 무료이며, 언제든 해지할 수 있습니다
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
