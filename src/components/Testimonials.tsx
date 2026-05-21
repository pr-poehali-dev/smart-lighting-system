export function Testimonials() {
  const testimonials = [
    {
      name: "Ирина В.",
      role: "Пациент, Москва",
      image: "/professional-woman-headshot.png",
      quote:
        "Три года мучилась с шеей, прошла кучу врачей. После первого приёма у Зои Викторовны впервые за долгое время почувствовала облегчение. Она нашла причину там, где никто не смотрел.",
    },
    {
      name: "Александр М.",
      role: "Пациент, Москва",
      image: "/professional-man-headshot.png",
      quote:
        "Немели руки, невролог назначил пожизненные таблетки. Зоя Викторовна объяснила, что проблема в спине и кровоснабжении. Через несколько сеансов онемение прошло.",
    },
    {
      name: "Наталья С.",
      role: "Пациент, Москва",
      image: "/professional-woman-smiling.png",
      quote:
        "Приходила с болями в спине и пяткой. Не ограничивает время — работала со мной столько, сколько нужно. Впервые чувствую, что меня лечат, а не гоняют по кабинетам.",
    },
  ]

  return (
    <section id="testimonials" className="bg-background py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">Реальные истории</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">Отзывы пациентов</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card border border-border rounded-xl p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-accent">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
