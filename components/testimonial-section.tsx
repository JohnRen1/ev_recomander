import { Star } from "lucide-react"

const testimonials = [
  {
    name: "张先生",
    role: "企业高管",
    content: "通过AI助手的推荐，我找到了完美符合需求的新能源汽车。续航里程、充电便利性都完全符合预期，非常满意。",
    rating: 5,
  },
  {
    name: "李女士",
    role: "自由职业者",
    content: "作为新手，我对新能源汽车一无所知。AI助手耐心地为我分析了各种选项，最终帮我选到了性价比最高的车型。",
    rating: 5,
  },
  {
    name: "王先生",
    role: "IT工程师",
    content: "分析非常专业全面，不仅考虑了我的预算，还分析了使用场景。推荐的车型完全符合我的技术控需求。",
    rating: 5,
  },
]

export default function TestimonialSection() {
  return (
    <section id="testimonials" className="bg-gray-50 py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-sm font-medium text-gray-400 tracking-widest uppercase mb-4">用户评价</p>
          <h2 className="text-5xl font-bold tracking-tight text-gray-900">真实的使用体验</h2>
          <p className="mt-6 text-xl text-gray-500 max-w-2xl mx-auto">
            听听我们的用户如何评价 AI 智能助手服务。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-3xl p-8 flex flex-col gap-6">
              <div className="flex gap-1">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gray-900 text-gray-900" />
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed flex-1">"{t.content}"</p>
              <div>
                <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                <div className="text-xs text-gray-400 mt-0.5">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
