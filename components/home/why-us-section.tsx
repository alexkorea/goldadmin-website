import { Shield, Clock, Award, HeartHandshake } from "lucide-react"

const reasons = [
  {
    icon: Shield,
    number: "01",
    title: "검증된 전문성",
    description: "20년간 3,000건 이상의 행정 업무를 성공적으로 처리한 검증된 전문성을 보유하고 있습니다. 각 분야별 최신 법규와 판례를 지속적으로 연구합니다."
  },
  {
    icon: Clock,
    number: "02",
    title: "신속한 처리",
    description: "체계적인 업무 프로세스와 풍부한 경험을 바탕으로 최단 시간 내 업무를 처리합니다. 24시간 내 초기 상담 응대를 약속드립니다."
  },
  {
    icon: Award,
    number: "03",
    title: "투명한 진행",
    description: "업무 진행 상황을 실시간으로 공유하며, 예상 비용과 소요 기간을 사전에 명확히 안내합니다. 숨겨진 비용 없이 투명하게 진행됩니다."
  },
  {
    icon: HeartHandshake,
    number: "04",
    title: "맞춤형 솔루션",
    description: "고객의 상황과 목표를 정확히 파악하여 최적의 해결책을 제시합니다. 단순 대행이 아닌 전략적 자문 서비스를 제공합니다."
  }
]

export function WhyUsSection() {
  return (
    <section className="py-24 lg:py-32 bg-charcoal text-primary-foreground overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-gold" />
            <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium">
              왜 의뢰해야 하는가
            </span>
          </div>
          <h2 className="font-serif text-3xl lg:text-4xl font-medium mb-6 text-balance">
            차원이 다른 행정 서비스,<br />
            금빛행정사사무소입니다
          </h2>
          <p className="text-primary-foreground/70 text-lg leading-relaxed">
            단순한 서류 대행을 넘어, 고객의 성공적인 결과를 위해<br className="hidden lg:block" />
            전략적 파트너로서 함께합니다.
          </p>
        </div>

        {/* Reasons */}
        <div className="grid md:grid-cols-2 gap-px bg-primary-foreground/10">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-charcoal p-8 lg:p-12 group"
            >
              <div className="flex items-start gap-6">
                {/* Number */}
                <span className="font-serif text-5xl font-light text-gold/30 shrink-0">
                  {reason.number}
                </span>
                
                <div>
                  {/* Icon */}
                  <div className="w-12 h-12 border border-gold/30 flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors">
                    <reason.icon className="w-5 h-5 text-gold" />
                  </div>

                  {/* Content */}
                  <h3 className="font-serif text-xl font-medium mb-4">
                    {reason.title}
                  </h3>
                  <p className="text-primary-foreground/60 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
