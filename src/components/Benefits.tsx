export function Benefits() {
  const checks = [
    "Вам лечат симптом, а причина так и осталась?",
    "Лечите одно, но появляются другие проблемы?",
    "Вы ходили к разным специалистам — но боль вернулась?",
    "У вас немеют конечности, болит пятка или шея, но кроме блокады вам ничего не назначили?",
    "Вас посадили на гормоны, обезболивающие или статины «на всю жизнь»?",
  ]

  const benefits = [
    {
      icon: "🐝",
      title: "Апитерапия",
      description: "Натуральный метод лечения с помощью продуктов пчеловодства. Мощный противовоспалительный и восстанавливающий эффект",
    },
    {
      icon: "🧠",
      title: "Восстановление кровообращения",
      description: "Работаю со спиной для улучшения кровоснабжения мозга и внутренних органов",
    },
    {
      icon: "🎯",
      title: "Причина, не симптом",
      description: "Нахожу и устраняю первопричину боли, а не временно заглушаю её таблетками",
    },
    {
      icon: "🚫",
      title: "Без таблеток",
      description: "Никакого пожизненного приёма обезболивающих, гормонов и статинов",
    },
    {
      icon: "🔍",
      title: "Диагностика спины",
      description: "Исследую зоны зажимов, блоков и спазмов — определяю, где нарушено кровоснабжение",
    },
    {
      icon: "⏳",
      title: "Без ограничения по времени",
      description: "Работаю на приёме столько, сколько нужно. Пока не решим вашу задачу",
    },
  ]

  return (
    <section id="benefits" className="bg-background py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Check section */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <p className="text-accent font-semibold text-sm uppercase tracking-wide">Узнаёте себя?</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
              Проверьте — это про вас?
            </h2>
          </div>
          <div className="max-w-2xl mx-auto space-y-4">
            {checks.map((check, index) => (
              <div key={index} className="flex gap-3 items-start bg-card border border-border rounded-lg p-4">
                <span className="text-xl flex-shrink-0">✅</span>
                <p className="text-foreground">{check}</p>
              </div>
            ))}
            <div className="bg-accent/10 border border-accent/30 rounded-lg p-4 text-center">
              <p className="text-accent font-semibold">2–3 совпадения — вы по адресу</p>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">Мой метод</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
            Как я работаю
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Натуральное восстановление без химии, операций и пожизненной зависимости от лекарств
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-8 hover:shadow-lg transition">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
