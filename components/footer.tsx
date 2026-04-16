import { Phone, Mail, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-4">
            <span className="text-base font-semibold text-gray-900">新能源AI助手</span>
            <p className="text-sm text-gray-400 leading-relaxed">
              通过 AI 智能技术，为您提供最专业的新能源汽车购买建议。
            </p>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900">服务项目</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              {["车型推荐", "性价比分析", "充电方案", "政策咨询"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-gray-900 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900">客户支持</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              {["使用指南", "常见问题", "联系客服", "意见反馈"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-gray-900 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-900">联系我们</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                400-888-9999
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                service@evai.com
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                北京市朝阳区科技园
              </li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="border-t border-gray-100 pt-16 mb-16 text-center">
          <h3 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
            准备好找到您的理想新能源汽车了吗？
          </h3>
          <p className="text-gray-400 mb-8">几分钟内获得专业的个性化推荐。</p>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-700 text-white text-sm font-medium px-8 py-4 rounded-full transition-colors"
          >
            立即开始 →
          </a>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© 2024 新能源AI助手. 保留所有权利.</p>
          <div className="flex gap-6">
            {["隐私政策", "服务条款", "Cookie政策"].map((item) => (
              <a key={item} href="#" className="hover:text-gray-900 transition-colors">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
