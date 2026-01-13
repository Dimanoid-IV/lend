'use client'

import { motion } from 'framer-motion'

export default function AdditionalServices() {
  const additionalServices = [
    {
      title: "Поддержка сайта",
      price: "20 €/мес",
      description: "Регулярное обслуживание, обновления, мониторинг работоспособности"
    },
    {
      title: "Срочные изменения",
      price: "50 €",
      description: "Экспресс внесение изменений и исправлений в существующие сайты"
    },
    {
      title: "Настройка домена",
      price: "20 €",
      description: "Подключение и настройка доменного имени для вашего сайта"
    }
  ]

  return (
    <section id="additional" className="py-20 bg-gradient-to-br from-secondary-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Дополнительные услуги
          </h2>
          <p className="text-lg text-secondary-600">
            Расширьте возможности вашего сайта с нашими дополнительными сервисами
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {additionalServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-secondary-100"
            >
              <div className="text-center">
                <h3 className="text-xl font-bold text-secondary-900 mb-2">
                  {service.title}
                </h3>
                <div className="text-2xl font-bold text-primary-600 mb-3">
                  {service.price}
                </div>
                <p className="text-secondary-600">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <div className="bg-primary-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              Почему выбирают нас?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="bg-white/20 rounded-lg p-2 mt-1">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Качество и надежность</h4>
                  <p className="text-primary-100 text-sm">Каждый сайт проходит тщательное тестирование перед сдачей</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-white/20 rounded-lg p-2 mt-1">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Соблюдение сроков</h4>
                  <p className="text-primary-100 text-sm">Четко соблюдаем оговоренные дедлайны без задержек</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-white/20 rounded-lg p-2 mt-1">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Индивидуальный подход</h4>
                  <p className="text-primary-100 text-sm">Учитываем все ваши пожелания и специфику бизнеса</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-white/20 rounded-lg p-2 mt-1">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Постоянная поддержка</h4>
                  <p className="text-primary-100 text-sm">Оказываем техническую поддержку даже после завершения проекта</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}