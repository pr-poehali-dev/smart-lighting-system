import { Button } from "@/components/ui/button"

export function Hero() {
  const handleBookSession = () => {
    const bookingSection = document.getElementById("booking")
    bookingSection?.scrollIntoView({ behavior: "smooth" })
  }

  const handleLearnMore = () => {
    const benefitsSection = document.getElementById("benefits")
    benefitsSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full w-fit">
              <span className="w-2 h-2 bg-accent rounded-full"></span>
              <span className="text-sm font-medium">Апитерапия и натуропатия · 35 лет практики</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Беспокоит спина? Шея не двигается? Немеют руки?
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              И вы ходите по врачам, но ничего не помогает? Убираю причину боли через спину и восстановление кровообращения в мозге. Без пожизненного приёма таблеток и обезболивающих уколов.
            </p>

            <blockquote className="border-l-4 border-accent pl-4 italic text-muted-foreground">
              «Врач лечит, природа излечивает» — Гиппократ
            </blockquote>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                onClick={handleBookSession}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground text-base"
              >
                Узнать, смогу ли я вам помочь
              </Button>
              <Button
                onClick={handleLearnMore}
                size="lg"
                variant="outline"
                className="border-border text-foreground hover:bg-muted bg-transparent"
              >
                О методе лечения
              </Button>
            </div>

            <div className="flex gap-8 pt-4 text-sm">
              <div>
                <p className="font-semibold text-foreground">1200+</p>
                <p className="text-muted-foreground">Пациентов</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">35 лет</p>
                <p className="text-muted-foreground">Практики</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">Москва</p>
                <p className="text-muted-foreground">Приём очно</p>
              </div>
            </div>

            <div className="text-sm text-muted-foreground border border-border rounded-lg p-4 bg-muted/30 space-y-1">
              <p>📍 Приём в Москве. Живая очередь — предупреждаем сразу.</p>
              <p>⏳ Не ограничиваю временем. Работаю, пока не решим задачу.</p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 md:h-full min-h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl"></div>
            <img
              src="/professional-woman-smiling.png"
              alt="Макашова Зоя Викторовна — апитерапевт"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
