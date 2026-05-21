export function AboutTrainer() {
  return (
    <section id="about" className="bg-muted/30 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative h-96 md:h-full min-h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl"></div>
            <img src="/professional-woman-smiling.png" alt="Макашова Зоя Викторовна" className="w-full h-full object-cover rounded-2xl" />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-accent font-semibold text-sm uppercase tracking-wide">О специалисте</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
                Макашова Зоя Викторовна
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Специалист в области апитерапии и натуропат. Более 35 лет практики, свыше 1200 пациентов.
              Я не спрашиваю «на что жалуетесь» — я исследую вашу спину и определяю зоны, где есть зажимы, блоки, спазмы и нарушено кровоснабжение мозга, а также работа внутренних органов.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Убираю причину боли, а не симптом — через спину и восстановление кровообращения в мозге.
              Без пожизненного приёма таблеток, гормонов и обезболивающих уколов.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent text-sm">&#10003;</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Врач-апитерапевт</p>
                  <p className="text-sm text-muted-foreground">Специалист по естественному восстановлению организма</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent text-sm">&#10003;</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">1200+ пациентов</p>
                  <p className="text-sm text-muted-foreground">35 лет клинической практики</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent text-sm">&#10003;</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Работаю с причиной</p>
                  <p className="text-sm text-muted-foreground">Не ограничиваю по времени — работаю, пока не решим задачу</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
