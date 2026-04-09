"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg">
            금
          </div>
          <span className="text-lg font-bold text-foreground">금빛행정사사무소</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            홈
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            사무소 소개
          </Link>
          <Link
            href="/blog"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            행정 인사이트
          </Link>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="tel:010-6562-0710"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground"
          >
            <Phone className="h-4 w-4" />
            010-6562-0710
          </a>
          <Button asChild>
            <Link href="/about#contact">상담 신청</Link>
          </Button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="메뉴 열기"
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-border bg-card md:hidden">
          <nav className="flex flex-col px-4 py-4">
            <Link
              href="/"
              className="rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-muted"
              onClick={() => setIsMenuOpen(false)}
            >
              홈
            </Link>
            <Link
              href="/about"
              className="rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-muted"
              onClick={() => setIsMenuOpen(false)}
            >
              사무소 소개
            </Link>
            <Link
              href="/blog"
              className="rounded-lg px-3 py-2 text-sm font-medium text-foreground hover:bg-muted"
              onClick={() => setIsMenuOpen(false)}
            >
              행정 인사이트
            </Link>
            <div className="mt-4 border-t border-border pt-4">
              <a
                href="tel:010-6562-0710"
                className="mb-3 flex items-center gap-2 px-3 text-sm font-medium text-muted-foreground"
              >
                <Phone className="h-4 w-4" />
                010-6562-0710
              </a>
              <Button asChild className="w-full">
                <Link href="/about#contact" onClick={() => setIsMenuOpen(false)}>
                  상담 신청
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
