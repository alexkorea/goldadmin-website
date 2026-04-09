const steps = [
  {
    number: "01",
    title: "상담 신청",
    description: "전화, 이메일, 또는 온라인 폼을 통해 무료 상담을 신청합니다. 24시간 내 전문 상담사가 연락드립니다.",
    duration: "당일"
  },
  {
    number: "02",
    title: "상황 분석",
    description: "고객님의 상황을 면밀히 분석하고, 필요한 서류와 예상 기간, 비용을 상세히 안내해 드립니다.",
    duration: "1-2일"
  },
  {
    number: "03",
    title: "계약 및 착수",
    description: "투명한 계약 후 즉시 업무에 착수합니다. 서류 준비부터 제출까지 전 과정을 대행합니다.",
    duration: "계약 당일"
  },
  {
    number: "04",
    title: "진행 관리",
    description: "업무 진행 상황을 실시간으로 공유합니다. 추가 요청사항이나 보완 서류가 필요시 즉시 안내드립니다.",
    duration: "수시"
  },
  {
    number: "05",
    title: "완료 및 안내",
    description: "업무 완료 후 결과를 상세히 안내해 드리며, 향후 필요한 사항에 대해서도 조언을 드립니다.",
    duration: "업무별 상이"
  }
]

export function ProcessSection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-gold" />
            <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium">
              진행 절차
            </span>
            <div className="w-8 h-px bg-gold" />
          </div>
          <h2 className="font-serif text-3xl lg:text-4xl font-medium text-foreground mb-6 text-balance">
            체계적인 프로세스로<br />
            정확하게 진행합니다
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            모든 업무는 표준화된 프로세스에 따라 진행되며,<br className="hidden md:block" />
            각 단계별 진행 상황을 투명하게 공유합니다.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line - desktop only */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-border" />
          
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Mobile connector line */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute left-4 top-16 w-px h-full bg-border" />
                )}
                
                {/* Step marker */}
                <div className="relative z-10 flex lg:flex-col items-start lg:items-center gap-4 lg:gap-0">
                  <div className="w-8 h-8 bg-gold text-charcoal font-medium text-sm flex items-center justify-center shrink-0">
                    {step.number}
                  </div>
                  
                  <div className="lg:text-center lg:mt-8">
                    <h3 className="font-serif text-lg font-medium text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      {step.description}
                    </p>
                    <span className="inline-block px-3 py-1 bg-secondary text-xs text-muted-foreground">
                      {step.duration}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
