import { Button } from "@/components/ui/button"

export function Booking() {
  const handleConsultClick = () => {
    alert("Оставьте заявку — Зоя Викторовна свяжется с вами для записи на приём.")
  }

  return (
    <section id="booking" className="bg-muted/30 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">Первый шаг</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">Узнайте, смогу ли я вам помочь</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Расскажите о своей ситуации — я изучу её и честно скажу, подойдёт ли мой метод именно вам
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* How it works */}
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6">Как проходит приём</h3>
            <div className="space-y-5">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold flex-shrink-0">1</div>
                <div>
                  <p className="font-semibold text-foreground">Исследование спины</p>
                  <p className="text-sm text-muted-foreground">Определяю зоны зажимов, блоков и нарушенного кровоснабжения</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold flex-shrink-0">2</div>
                <div>
                  <p className="font-semibold text-foreground">Нахожу первопричину</p>
                  <p className="text-sm text-muted-foreground">Не симптом, а то, что за ним стоит</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold flex-shrink-0">3</div>
                <div>
                  <p className="font-semibold text-foreground">Лечение апитерапией</p>
                  <p className="text-sm text-muted-foreground">Натуральный метод — без таблеток и операций</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold flex-shrink-0">4</div>
                <div>
                  <p className="font-semibold text-foreground">Работаю до результата</p>
                  <p className="text-sm text-muted-foreground">Не ограничиваю приём по времени</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-card border border-border rounded-xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Записаться на приём</h3>
              <div className="bg-muted/50 rounded-lg p-5 space-y-3 mb-6">
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-muted-foreground">Формат</span>
                  <span className="font-semibold text-foreground">Очно, Москва</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-border">
                  <span className="text-muted-foreground">Очередь</span>
                  <span className="font-semibold text-foreground">Живая запись</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Время приёма</span>
                  <span className="font-semibold text-foreground">Без ограничений</span>
                </div>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-amber-800">⏳ Живая очередь — предупреждаем сразу. Работаю, пока не решим вашу задачу.</p>
              </div>
            </div>

            <Button
              onClick={handleConsultClick}
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-base py-6"
            >
              Узнать, смогу ли я вам помочь
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
