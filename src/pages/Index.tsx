import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeTab, setActiveTab] = useState('services');

  const services = [
    {
      title: 'Индивидуальная терапия',
      description: 'Работа с личными запросами: тревожность, самооценка, отношения',
      icon: 'User',
      duration: '50 минут',
    },
    {
      title: 'Семейная терапия',
      description: 'Помощь в решении семейных конфликтов и укреплении отношений',
      icon: 'Users',
      duration: '60 минут',
    },
    {
      title: 'Детская психология',
      description: 'Работа с детьми и подростками, помощь родителям',
      icon: 'Baby',
      duration: '40 минут',
    },
    {
      title: 'Групповая терапия',
      description: 'Групповые сессии для работы с общими темами',
      icon: 'Users2',
      duration: '90 минут',
    },
  ];

  const formats = [
    {
      title: 'Очная встреча',
      description: 'В уютном кабинете нашего центра',
      icon: 'Home',
    },
    {
      title: 'Онлайн-сессия',
      description: 'Через Zoom или другую удобную платформу',
      icon: 'Video',
    },
    {
      title: 'Выездная консультация',
      description: 'Для корпоративных клиентов и особых случаев',
      icon: 'MapPin',
    },
  ];

  const principles = [
    {
      title: 'Конфиденциальность',
      description: 'Всё, что обсуждается на сессии, остаётся между вами и терапевтом',
      icon: 'Shield',
    },
    {
      title: 'Профессионализм',
      description: 'Наши специалисты имеют профильное образование и регулярно повышают квалификацию',
      icon: 'Award',
    },
    {
      title: 'Индивидуальный подход',
      description: 'Мы подбираем методы и темп работы под каждого клиента',
      icon: 'Heart',
    },
    {
      title: 'Эффективность',
      description: 'Работаем с доказанными методами и отслеживаем прогресс',
      icon: 'TrendingUp',
    },
  ];

  const testimonials = [
    {
      name: 'Анна М.',
      text: 'Центр "Дофамин" помог мне справиться с тревожностью. Спасибо за профессионализм!',
      rating: 5,
      date: 'Октябрь 2024',
    },
    {
      name: 'Дмитрий К.',
      text: 'Отличные специалисты, комфортная атмосфера. Рекомендую всем, кто ищет качественную помощь.',
      rating: 5,
      date: 'Сентябрь 2024',
    },
    {
      name: 'Елена В.',
      text: 'Работа с психологом центра помогла наладить отношения в семье. Очень благодарна!',
      rating: 5,
      date: 'Август 2024',
    },
  ];

  const certificates = [
    { id: 1, title: 'Диплом МГУ по клинической психологии', image: 'https://cdn.poehali.dev/projects/f0f42338-b2ff-462f-a2f1-4825ee8e73c1/files/903fc9dc-ba1f-4f39-b774-420dd5a71b13.jpg' },
    { id: 2, title: 'Сертификат когнитивно-поведенческой терапии', image: 'https://cdn.poehali.dev/projects/f0f42338-b2ff-462f-a2f1-4825ee8e73c1/files/903fc9dc-ba1f-4f39-b774-420dd5a71b13.jpg' },
    { id: 3, title: 'Сертификат семейного консультирования', image: 'https://cdn.poehali.dev/projects/f0f42338-b2ff-462f-a2f1-4825ee8e73c1/files/903fc9dc-ba1f-4f39-b774-420dd5a71b13.jpg' },
    { id: 4, title: 'Повышение квалификации по детской психологии', image: 'https://cdn.poehali.dev/projects/f0f42338-b2ff-462f-a2f1-4825ee8e73c1/files/903fc9dc-ba1f-4f39-b774-420dd5a71b13.jpg' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-indigo-50/30">
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center">
              <Icon name="Sparkles" size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-indigo-900">Дофамин</h1>
              <p className="text-xs text-amber-600 font-medium">это по любви</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="text-sm hover:text-indigo-600 transition-colors">
              Услуги
            </a>
            <a href="#formats" className="text-sm hover:text-indigo-600 transition-colors">
              Форматы
            </a>
            <a href="#principles" className="text-sm hover:text-indigo-600 transition-colors">
              Принципы
            </a>
            <a href="#testimonials" className="text-sm hover:text-indigo-600 transition-colors">
              Отзывы
            </a>
            <a href="#certificates" className="text-sm hover:text-indigo-600 transition-colors">
              Специалисты
            </a>
            <a href="#contacts" className="text-sm hover:text-indigo-600 transition-colors">
              Контакты
            </a>
          </nav>
          <Button size="sm" className="bg-amber-500 hover:bg-amber-600 text-white">
            Записаться
          </Button>
        </div>
      </header>

      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://cdn.poehali.dev/projects/f0f42338-b2ff-462f-a2f1-4825ee8e73c1/files/85722547-2776-4583-96e0-32062adb2d26.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto text-center max-w-4xl animate-fade-in relative z-10">
          <Badge className="mb-4 bg-amber-100 text-amber-700 hover:bg-amber-100">
            Центр психологии
          </Badge>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-indigo-800 bg-clip-text text-transparent">
            Дофамин
          </h2>
          <p className="text-2xl md:text-3xl text-amber-600 font-medium mb-8">это по любви</p>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Профессиональная психологическая помощь для тех, кто ценит заботу о себе.
            Работаем с уважением, теплом и искренним желанием помочь.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white">
              <Icon name="Calendar" size={20} className="mr-2" />
              Записаться на консультацию
            </Button>
            <Button size="lg" variant="outline" className="border-amber-500 text-amber-700 hover:bg-amber-50">
              <Icon name="Phone" size={20} className="mr-2" />
              Позвонить нам
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-indigo-900">Наши услуги</h3>
            <p className="text-gray-600">Помощь для каждого запроса</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-2 hover:border-indigo-300 transition-all hover:shadow-lg animate-scale-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={service.icon} size={24} className="text-white" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-indigo-900">{service.title}</h4>
                  <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                  <Badge variant="secondary" className="bg-amber-100 text-amber-700">
                    {service.duration}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="formats" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-indigo-900">Форматы работы</h3>
            <p className="text-gray-600">Выберите удобный для вас формат</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {formats.map((format, index) => (
              <Card
                key={index}
                className="border-2 hover:border-amber-300 transition-all hover:shadow-lg"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Icon name={format.icon} size={28} className="text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-3 text-indigo-900">{format.title}</h4>
                  <p className="text-gray-600">{format.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="principles" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-indigo-900">
              Принципы нашей работы
            </h3>
            <p className="text-gray-600">На чём строится наш подход</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {principles.map((principle, index) => (
              <Card
                key={index}
                className="border-2 hover:border-indigo-300 transition-all hover:shadow-lg"
              >
                <CardContent className="p-8 flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name={principle.icon} size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2 text-indigo-900">{principle.title}</h4>
                    <p className="text-gray-600">{principle.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-indigo-900">Отзывы клиентов</h3>
            <p className="text-gray-600">Что говорят о нас наши клиенты</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-2 hover:border-amber-300 transition-all hover:shadow-lg"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex justify-between items-center">
                    <p className="font-semibold text-indigo-900">{testimonial.name}</p>
                    <p className="text-xs text-gray-500">{testimonial.date}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" className="border-indigo-500 text-indigo-700 hover:bg-indigo-50">
              Оставить отзыв
            </Button>
          </div>
        </div>
      </section>

      <section id="certificates" className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 animate-fade-in">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-indigo-900">
              Дипломы и сертификаты
            </h3>
            <p className="text-gray-600">Квалификация наших специалистов</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificates.map((cert) => (
              <Card
                key={cert.id}
                className="border-2 hover:border-amber-300 transition-all hover:shadow-lg cursor-pointer group"
              >
                <CardContent className="p-6">
                  <div className="aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-4 overflow-hidden group-hover:scale-105 transition-transform">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-sm text-gray-700 text-center">{cert.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-indigo-900">Контакты</h3>
            <p className="text-gray-600">Свяжитесь с нами удобным способом</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2">
              <CardContent className="p-8">
                <h4 className="text-xl font-semibold mb-6 text-indigo-900">Наши контакты</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" size={20} className="text-indigo-600 mt-1" />
                    <div>
                      <p className="font-medium text-indigo-900">Адрес</p>
                      <p className="text-gray-600">г. Москва, ул. Примерная, д. 123</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Phone" size={20} className="text-indigo-600 mt-1" />
                    <div>
                      <p className="font-medium text-indigo-900">Телефон</p>
                      <p className="text-gray-600">+7 (999) 123-45-67</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Mail" size={20} className="text-indigo-600 mt-1" />
                    <div>
                      <p className="font-medium text-indigo-900">Email</p>
                      <p className="text-gray-600">info@dofamin-center.ru</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Clock" size={20} className="text-indigo-600 mt-1" />
                    <div>
                      <p className="font-medium text-indigo-900">Режим работы</p>
                      <p className="text-gray-600">Пн-Пт: 9:00 - 21:00</p>
                      <p className="text-gray-600">Сб-Вс: 10:00 - 18:00</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-white">
              <CardContent className="p-8">
                <h4 className="text-xl font-semibold mb-6 text-indigo-900">Оплата услуг</h4>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    Мы принимаем оплату через систему ЮMONEY
                  </p>
                  <div className="bg-white p-4 rounded-lg border-2 border-amber-300">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="Wallet" size={20} className="text-amber-600" />
                      <p className="font-medium text-indigo-900">ЮMONEY</p>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                      Безопасная и быстрая оплата онлайн
                    </p>
                    <Button className="w-full bg-amber-500 hover:bg-amber-600 text-white">
                      Оплатить консультацию
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500 text-center">
                    Также принимаем наличные и банковские карты
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-indigo-900 text-white py-12 px-4 mt-16">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-600 rounded-xl flex items-center justify-center">
                  <Icon name="Sparkles" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">Дофамин</h3>
                  <p className="text-xs text-amber-400">это по любви</p>
                </div>
              </div>
              <p className="text-indigo-200 text-sm">
                Центр психологии для тех, кто ценит заботу о себе
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Навигация</h4>
              <ul className="space-y-2 text-sm text-indigo-200">
                <li>
                  <a href="#services" className="hover:text-amber-400 transition-colors">
                    Услуги
                  </a>
                </li>
                <li>
                  <a href="#formats" className="hover:text-amber-400 transition-colors">
                    Форматы работы
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="hover:text-amber-400 transition-colors">
                    Отзывы
                  </a>
                </li>
                <li>
                  <a href="#contacts" className="hover:text-amber-400 transition-colors">
                    Контакты
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Мы в соцсетях</h4>
              <div className="flex gap-3">
                <Button
                  size="icon"
                  variant="outline"
                  className="border-indigo-700 hover:bg-indigo-800 hover:border-amber-400"
                >
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="border-indigo-700 hover:bg-indigo-800 hover:border-amber-400"
                >
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button
                  size="icon"
                  variant="outline"
                  className="border-indigo-700 hover:bg-indigo-800 hover:border-amber-400"
                >
                  <Icon name="MessageCircle" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-indigo-800 pt-6 text-center text-sm text-indigo-300">
            <p>&copy; 2024 Центр психологии "Дофамин". Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}