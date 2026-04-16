import { Battery, Zap, Shield, Smartphone, MapPin, DollarSign } from "lucide-react"

const features = [
  {
    icon: Battery,
    title: "续航里程分析",
    description: "根据您的日常出行需求，精准匹配最适合的续航里程车型。",
  },
  {
    icon: Zap,
    title: "充电便利性评估",
    description: "分析您周边充电设施分布，推荐充电最便利的车型。",
  },
  {
    icon: DollarSign,
    title: "性价比优化",
    description: "综合购车成本与使用成本，为您找到最具性价比的选择。",
  },
  {
    icon: Shield,
    title: "安全性能评级",
    description: "基于权威安全测试数据，为您筛选最安全的新能源车型。",
  },
  {
    icon: Smartphone,
    title: "智能科技配置",
    description: "根据您的科技偏好，匹配最符合需求的智能化配置。",
  },
  {
    icon: MapPin,
    title: "本地化服务",
    description: "结合您所在地区的政策优惠和服务网点，提供本地化建议。",
  },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-gray-50 py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-sm font-medium text-gray-400 tracking-widest uppercase mb-4">核心功能</p>
          <h2 className="text-5xl font-bold tracking-tight text-gray-900">为什么选择我们</h2>
          <p className="mt-6 text-xl text-gray-500 max-w-2xl mx-auto">
            AI 助手结合大数据分析，为您提供最专业、最个性化的新能源汽车推荐服务。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 rounded-3xl overflow-hidden">
          {features.map((f) => (
            <div key={f.title} className="bg-gray-50 hover:bg-white transition-colors p-10 group">
              <div className="w-10 h-10 flex items-center justify-center rounded-2xl bg-gray-900 mb-6">
                <f.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{f.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
