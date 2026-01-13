'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="pt-20 md:pt-32 pb-16 md:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
              ✨ Создаем сайты с нуля
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 leading-tight">
              Современные сайты{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-blue-600">
                для вашего бизнеса
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-secondary-600 max-w-2xl">
              Профессиональная веб-студия разрабатывает лендинги и многостраничные сайты 
              с полной SEO оптимизацией и мобильной адаптацией. Гарантия качества и быстрые сроки.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold text-center transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Выбрать пакет услуг
              </motion.a>
              
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-8 py-4 rounded-lg font-semibold text-center transition-all duration-200"
              >
                Получить консультацию
              </motion.a>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-secondary-100">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">50+</div>
                <div className="text-sm text-secondary-500">Проектов</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">100%</div>
                <div className="text-sm text-secondary-500">Довольных клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">24/7</div>
                <div className="text-sm text-secondary-500">Поддержка</div>
              </div>
            </div>
          </motion.div>
          
          {/* Right Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary-500 to-blue-600 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="h-4 bg-secondary-200 rounded w-3/4"></div>
                    <div className="h-4 bg-secondary-200 rounded w-1/2"></div>
                    <div className="h-4 bg-secondary-200 rounded w-2/3"></div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 pt-4">
                    <div className="bg-primary-100 rounded-lg p-3">
                      <div className="h-3 bg-primary-300 rounded w-full mb-2"></div>
                      <div className="h-2 bg-primary-200 rounded w-3/4"></div>
                    </div>
                    <div className="bg-blue-100 rounded-lg p-3">
                      <div className="h-3 bg-blue-300 rounded w-full mb-2"></div>
                      <div className="h-2 bg-blue-200 rounded w-3/4"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold shadow-lg"
              >
                ⚡
              </motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center text-white font-bold shadow-lg"
              >
                💡
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}