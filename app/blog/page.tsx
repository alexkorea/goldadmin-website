"use client"

import { useState } from "react"
import { Metadata } from "next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const categories = [
  { id: "all", label: "전체" },
  { id: "visa", label: "비자" },
  { id: "permit", label: "인허가" },
  { id: "corporation", label: "법인설립" },
  { id: "foreigner", label: "외국인행정" },
  { id: "practice", label: "행정실무" },
]

const featuredPost = {
  category: "비자",
  categoryId: "visa",
  title: "2024년 E-7 전문직 비자 발급 조건 완화 안내",
  excerpt: "2024년부터 시행되는 E-7 비자 발급 조건 완화 내용과 신청 시 유의사항을 상세히 안내해 드립니다. IT, 엔지니어링, 디자인 등 전문직종 종사자분들께 유용한 정보입니다.",
  date: "2024.03.15",
  readTime: "5분",
  slug: "e7-visa-2024-update"
}

const posts = [
  {
    category: "법인설립",
    categoryId: "corporation",
    title: "외국인 투자법인 설립 절차 A to Z",
    excerpt: "외국인이 한국에서 법인을 설립할 때 필요한 모든 절차와 준비 서류를 단계별로 안내합니다.",
    date: "2024.03.10",
    readTime: "7분",
    slug: "foreign-investment-corporation"
  },
  {
    category: "인허가",
    categoryId: "permit",
    title: "음식점 영업허가 신청 시 자주 하는 실수 5가지",
    excerpt: "음식점 영업허가를 처음 신청하시는 분들이 자주 범하는 실수와 해결 방법을 알려드립니다.",
    date: "2024.03.05",
    readTime: "4분",
    slug: "restaurant-license-mistakes"
  },
  {
    category: "외국인행정",
    categoryId: "foreigner",
    title: "영주권(F-5) 신청 자격 요건 총정리",
    excerpt: "대한민국 영주권 신청을 위한 자격 요건과 필요 서류, 심사 기준을 상세히 정리했습니다.",
    date: "2024.02.28",
    readTime: "6분",
    slug: "f5-permanent-residence"
  },
  {
    category: "비자",
    categoryId: "visa",
    title: "D-8 투자비자 발급을 위한 사업계획서 작성법",
    excerpt: "투자비자 신청 시 가장 중요한 사업계획서 작성 요령과 심사관이 중점적으로 보는 포인트를 공유합니다.",
    date: "2024.02.20",
    readTime: "8분",
    slug: "d8-business-plan"
  },
  {
    category: "인허가",
    categoryId: "permit",
    title: "건설업 면허 취득 절차와 필요 자격",
    excerpt: "건설업 면허 취득을 위한 자본금 요건, 기술인력 기준, 신청 절차를 상세히 안내합니다.",
    date: "2024.02.15",
    readTime: "6분",
    slug: "construction-license"
  },
  {
    category: "행정실무",
    categoryId: "practice",
    title: "행정심판 청구 시 알아야 할 핵심 사항",
    excerpt: "행정처분에 불복할 때 활용할 수 있는 행정심판 청구 절차와 준비사항을 안내합니다.",
    date: "2024.02.10",
    readTime: "5분",
    slug: "administrative-appeal"
  },
  {
    category: "법인설립",
    categoryId: "corporation",
    title: "주식회사 vs 유한회사, 어떤 것을 선택해야 할까?",
    excerpt: "두 법인 형태의 차이점과 장단점을 비교하여 사업에 적합한 선택을 돕습니다.",
    date: "2024.02.05",
    readTime: "5분",
    slug: "corporation-types"
  },
  {
    category: "외국인행정",
    categoryId: "foreigner",
    title: "귀화 신청 절차와 한국어능력시험 준비 가이드",
    excerpt: "대한민국 국적 취득을 위한 귀화 절차와 필수 시험인 종합평가 준비 방법을 안내합니다.",
    date: "2024.01.30",
    readTime: "7분",
    slug: "naturalization-guide"
  },
  {
    category: "비자",
    categoryId: "visa",
    title: "F-6 결혼비자 신청 시 필요한 서류 체크리스트",
    excerpt: "국제결혼 후 배우자 비자를 신청할 때 필요한 모든 서류와 준비사항을 정리했습니다.",
    date: "2024.01.25",
    readTime: "4분",
    slug: "f6-marriage-visa"
  }
]

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredPosts = activeCategory === "all" 
    ? posts 
    : posts.filter(post => post.categoryId === activeCategory)

  const showFeatured = activeCategory === "all" || featuredPost.categoryId === activeCategory

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
                  블로그
                </span>
              </div>
              <h1 className="font-serif text-4xl lg:text-5xl font-medium text-foreground mb-6 text-balance">
                전문가의 인사이트
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                행정 업무에 필요한 최신 정보와 실무 노하우를 공유합니다.<br className="hidden md:block" />
                비자, 인허가, 법인설립 등 분야별 전문 콘텐츠를 확인하세요.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="sticky top-20 z-40 bg-background border-b border-border">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center gap-2 py-4 overflow-x-auto scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-5 py-2.5 text-sm font-medium whitespace-nowrap transition-colors ${
                    activeCategory === category.id
                      ? "bg-charcoal text-primary-foreground"
                      : "bg-secondary text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        {showFeatured && (
          <section className="py-12 lg:py-16 bg-secondary">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
              <Link href={`/blog/${featuredPost.slug}`} className="group block">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  {/* Image placeholder */}
                  <div className="aspect-[16/10] bg-card border border-border flex items-center justify-center group-hover:border-gold/30 transition-colors">
                    <div className="text-center">
                      <span className="text-muted-foreground text-sm">Featured Article</span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-xs tracking-wider text-gold uppercase font-medium">
                        {featuredPost.category}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {featuredPost.date}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        읽기 {featuredPost.readTime}
                      </span>
                    </div>
                    
                    <h2 className="font-serif text-2xl lg:text-3xl font-medium text-foreground mb-4 group-hover:text-charcoal-light transition-colors leading-relaxed">
                      {featuredPost.title}
                    </h2>
                    
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {featuredPost.excerpt}
                    </p>
                    
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-gold transition-colors">
                      자세히 읽기
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        )}

        {/* Posts Grid */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <Link
                  key={index}
                  href={`/blog/${post.slug}`}
                  className="group"
                >
                  <article className="h-full flex flex-col">
                    {/* Image placeholder */}
                    <div className="aspect-[16/10] bg-secondary border border-border mb-6 flex items-center justify-center group-hover:border-gold/30 transition-colors">
                      <span className="text-muted-foreground text-xs">Article Image</span>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 flex flex-col">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="text-xs tracking-wider text-gold uppercase font-medium">
                          {post.category}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {post.date}
                        </span>
                      </div>
                      
                      <h3 className="font-serif text-xl font-medium text-foreground mb-3 group-hover:text-charcoal-light transition-colors leading-relaxed">
                        {post.title}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">
                          읽기 {post.readTime}
                        </span>
                        <span className="inline-flex items-center gap-1 text-sm font-medium text-foreground group-hover:text-gold transition-colors">
                          읽기
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>

            {/* Load more */}
            <div className="mt-16 text-center">
              <button className="px-8 py-4 border border-border text-foreground font-medium hover:bg-secondary transition-colors">
                더 많은 글 보기
              </button>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16 lg:py-20 bg-secondary">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-serif text-2xl lg:text-3xl font-medium text-foreground mb-4 text-balance">
                뉴스레터 구독
              </h2>
              <p className="text-muted-foreground mb-8">
                행정 분야의 최신 소식과 유용한 정보를 이메일로 받아보세요.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="이메일 주소를 입력하세요"
                  className="flex-1 px-5 py-3 bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-gold transition-colors"
                />
                <button
                  type="submit"
                  className="px-8 py-3 bg-charcoal text-primary-foreground font-medium hover:bg-charcoal-light transition-colors"
                >
                  구독하기
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
