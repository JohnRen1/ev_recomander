import { CheckCircle } from "lucide-react"

const stats = [
  { number: "50万+", label: "服务用户" },
  { number: "200+", label: "合作品牌" },
  { number: "95%", label: "满意度" },
  { number: "24/7", label: "在线服务" },
]

const highlights = [
  "基于大数据的智能分析算法",
  "覆盖全国主流新能源汽车品牌",
  "实时更新的市场价格和政策信息",
  "专业的汽车行业专家团队支持",
]

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* Left */}
          <div>
            <p className="text-sm font-medium text-gray-400 tracking-widest uppercase mb-4">关于我们</p>
            <h2 className="text-5xl font-bold tracking-tight text-gray-900 leading-tight mb-8">
              专为您打造的<br />智能选车体验
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed mb-10">
              我们致力于通过人工智能技术，为每一位用户提供最专业、最个性化的新能源汽车购买建议。
              AI 助手经过数百万真实用户数据训练，能够精准理解您的需求并提供最适合的推荐。
            </p>
            <ul className="space-y-4 mb-12">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-600">
                  <CheckCircle className="w-5 h-5 text-gray-900 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#features"
              className="inline-flex items-center text-sm font-medium text-gray-900 border border-gray-300 hover:border-gray-900 transition-colors px-6 py-3 rounded-full"
            >
              了解更多 →
            </a>
          </div>

          {/* Right — stats grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="bg-gray-50 rounded-3xl p-10 flex flex-col justify-between aspect-square">
                <div className="text-4xl font-bold text-gray-900">{s.number}</div>
                <div className="text-sm text-gray-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
