"use client"

import { useState } from "react"
import { ArrowRight, X } from "lucide-react"

export default function HeroSection() {
  const [showModal, setShowModal] = useState(false)

  return (
    <section className="min-h-screen bg-white flex flex-col">
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-gray-100">
        <span className="text-lg font-semibold tracking-tight text-gray-900">新能源AI助手</span>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-500">
          <a href="#features" className="hover:text-gray-900 transition-colors">功能</a>
          <a href="#about" className="hover:text-gray-900 transition-colors">关于</a>
          <a href="#testimonials" className="hover:text-gray-900 transition-colors">评价</a>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="text-sm font-medium text-white bg-gray-900 hover:bg-gray-700 transition-colors px-5 py-2 rounded-full"
        >
          开始寻找
        </button>
      </nav>

      {/* Hero */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-24 max-w-4xl mx-auto w-full">
        <p className="text-sm font-medium text-gray-400 tracking-widest uppercase mb-6">AI 驱动的选车体验</p>
        <h1 className="text-6xl lg:text-8xl font-bold tracking-tight text-gray-900 leading-none mb-8">
          找到您的<br />
          <span className="text-gray-400">理想座驾</span>
        </h1>
        <p className="text-xl text-gray-500 leading-relaxed max-w-2xl mb-12">
          告诉我们您的需求，AI 助手将从数百款新能源车型中，为您精准匹配最合适的选择。
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button
            onClick={() => setShowModal(true)}
            className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-700 text-white text-base font-medium px-8 py-4 rounded-full transition-colors group"
          >
            开始寻找
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
          <a href="#features" className="text-base font-medium text-gray-500 hover:text-gray-900 transition-colors px-8 py-4">
            了解更多 →
          </a>
        </div>
      </div>

      {/* Stats bar */}
      <div className="border-t border-gray-100 grid grid-cols-3 divide-x divide-gray-100">
        {[
          { number: "50万+", label: "服务用户" },
          { number: "200+", label: "合作品牌" },
          { number: "95%", label: "用户满意度" },
        ].map((s) => (
          <div key={s.label} className="py-8 text-center">
            <div className="text-2xl font-bold text-gray-900">{s.number}</div>
            <div className="text-sm text-gray-400 mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          onClick={() => setShowModal(false)}
        >
          <div
            className="relative bg-white rounded-3xl overflow-hidden shadow-2xl"
            style={{ width: "70vw", height: "70vh" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <span className="text-sm font-semibold text-gray-900">AI 选车助手</span>
              <button
                onClick={() => setShowModal(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors text-gray-500"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <iframe
              src="https://udify.app/chatbot/oQ4A4IX0mqll0UGj"
              style={{ width: "100%", height: "calc(100% - 57px)" }}
              frameBorder="0"
              allow="microphone"
            />
          </div>
        </div>
      )}
    </section>
  )
}
