import Link from "next/link"
import { ArrowRight } from "lucide-react"

const featuredPosts = [
  {
    category: "비자",
    title: "2024년 E-7 전문직 비자 발급 조건 완화 안내",
    excerpt: "2024년부터 시행되는 E-7 비자 발급 조건 완화 내용과 신청 시 유의사항을 상세히 안내해 드립니다.",
    date: "2024.03.15",
    slug: "e7-visa-2024-update"
  },
  {
    category: "법인설립",
    title: "외국인 투자법인 설립 절차 A to Z",
    excerpt: "외국인이 한국에서 법인을 설립할 때 필요한 모든 절차와 준비 서류를 단계별로 안내합니다.",
    date: "2024.03.10",
    slug: "foreign-investment-corporation"
  },
  {
    category: "인허가",
    title: "음식점 영업허가 신청 시 자주 하는 실수 5가지",
    excerpt: "음식점 영업허가를 처음 신청하시는 분들이 자주 범하는 실수와 해결 방법을 알려드립니다.",
    date: "2024.03.05",
    slug: "restaurant-license-mistakes"
  }
]

export function BlogPreviewSection() {
  return (
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div>
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium">
                블로그
              </span>
            </div>
            <h2 className="font-serif text-3xl lg:text-4xl font-medium text-foreground text-balance">
              전문가의 인사이트를<br />
              공유합니다
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-gold transition-colors group"
          >
            모든 글 보기
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Posts grid */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredPosts.map((post, index) => (
            <Link
              key={index}
              href={`/blog/${post.slug}`}
              className="group bg-card p-8 border border-border hover:border-gold/30 transition-all premium-hover"
            >
              {/* Category & date */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs tracking-wider text-gold uppercase font-medium">
                  {post.category}
                </span>
                <span className="text-xs text-muted-foreground">
                  {post.date}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl font-medium text-foreground mb-4 group-hover:text-charcoal-light transition-colors leading-relaxed">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {post.excerpt}
              </p>

              {/* Read more */}
              <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-gold transition-colors">
                자세히 보기
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
