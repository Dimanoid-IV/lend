'use client'

import { motion } from 'framer-motion'

export default function Services() {
  const services = [
    {
      title: "Одностраничный сайт - лендинг",
      price: "150 €",
      timeframe: "5 рабочих дней",
      revisions: "2 раунда правок",
      features: [
        "Мобильная оптимизация",
        "Форма обратной связи",
        "Google Maps интеграция",
        "Ссылки на социальные сети",
        "Полностью готов за 5 дней"
      ],
      popular: false
    },
    {
      title: "До 5 подстраниц",
      price: "350 €",
      timeframe: "до 10 рабочих дней",
      revisions: "3 раунда правок",
      features: [
        "Базовая SEO-настройка",
        "Профессиональные тексты",
        "Страница галереи/портфолио",
        "Система бронирования",
        "1 месяц бесплатной поддержки",
        "Полностью готов за 10 дней"
      ],
      popular: true
    }
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Наши пакеты услуг
          </h2>
          <p className="text-lg text-secondary-600">
            Все сайты создаются с нуля под ваши конкретные задачи и цели
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                service.popular 
                  ? 'border-2 border-primary-500 bg-gradient-to-br from-primary-50 to-white' 
                  : 'border border-secondary-200 bg-white'
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Популярный выбор
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-secondary-900 mb-2">
                  {service.title}
                </h3>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
                  <span className="text-4xl font-bold text-primary-600">{service.price}</span>
                  <div className="text-center sm:text-left">
                    <div className="text-secondary-600">{service.timeframe}</div>
                    <div className="text-sm text-secondary-500">{service.revisions}</div>
                  </div>
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featIndex) => (
                  <li key={featIndex} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span className="text-secondary-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-200 ${
                  service.popular
                    ? 'bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-xl'
                    : 'bg-secondary-100 hover:bg-secondary-200 text-secondary-700'
                }`}
              >
                Заказать этот пакет
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6">
              <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-secondary-600">Гарантия качества</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-primary-600 mb-2">Быстро</div>
              <div className="text-secondary-600">Соблюдение сроков</div>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-secondary-600">Техподдержка</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}