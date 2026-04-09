import { FileText, Building2, Users, Briefcase } from "lucide-react"

const services = [
  {
    icon: FileText,
    title: "비자 업무",
    description: "D-8 투자비자, F-2 거주비자, F-4 재외동포비자 등 전문 비자 업무를 신속하고 정확하게 처리합니다.",
    details: ["D-8 투자비자", "F-2 거주비자", "F-4 재외동포비자", "비자 연장 및 변경"]
  },
  {
    icon: Users,
    title: "외국인 사범 / 조달",
    description: "외국인 사범 관련 행정 업무와 국가계약법에 따른 조달 업무를 전문적으로 처리합니다.",
    details: ["외국인 사범 대리", "조달(국가계약법)", "출입국 행정", "체류자격 변경"]
  },
  {
    icon: Building2,
    title: "법인설립 / 인허가 대리",
    description: "법인 설립부터 각종 인허가 대리까지, 사업에 필요한 모든 행정 업무를 지원합니다.",
    details: ["법인설립 대행", "인허가 대리", "사업자등록", "변경등기"]
  },
  {
    icon: Briefcase,
    title: "기업인증 / 국가유공자",
    description: "ISO 등 기업인증 취득 지원과 국가유공자 등록 절차를 전문적으로 대행합니다.",
    details: ["기업인증(ISO)", "국가유공자 등록", "각종 인증 취득", "보훈 행정"]
  }
]

export function ServicesSection() {
  return (
    <section className="py-24 lg:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-gold" />
            <span className="text-gold text-sm tracking-[0.2em] uppercase font-medium">
              전문 분야
            </span>
          </div>
          <h2 className="font-serif text-3xl lg:text-4xl font-medium text-foreground mb-6 text-balance">
            축적된 경험과 전문성으로<br />
            최상의 결과를 약속합니다
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            각 분야별 전문 인력이 체계적인 프로세스로 업무를 진행하며, 
            최신 법규와 행정 동향을 반영한 맞춤형 솔루션을 제공합니다.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card p-8 lg:p-10 border border-border hover:border-gold/30 transition-all duration-300 premium-hover"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-secondary flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors">
                <service.icon className="w-6 h-6 text-charcoal group-hover:text-gold transition-colors" />
              </div>

              {/* Content */}
              <h3 className="font-serif text-2xl font-medium text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Details */}
              <ul className="grid grid-cols-2 gap-2">
                {service.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1 h-1 bg-gold rounded-full" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
