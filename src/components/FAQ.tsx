import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "Что такое апитерапия?",
      answer:
        "Апитерапия — лечение с помощью продуктов пчеловодства: пчелиного яда, мёда, прополиса и других натуральных средств. Метод имеет мощный противовоспалительный эффект и применяется для восстановления организма без химии.",
    },
    {
      question: "Вы лечите именно спину или что-то ещё?",
      answer:
        "Я работаю со спиной как с ключом к здоровью всего организма. Через спину восстанавливается кровоснабжение мозга и внутренних органов. Поэтому пациенты приходят с болями в шее, онемением рук, болью в пятке, проблемами с давлением и другими жалобами.",
    },
    {
      question: "Я уже пробовал разных врачей. Почему у вас будет иначе?",
      answer:
        "Большинство врачей лечат симптом. Я ищу и устраняю причину боли. Перед тем как приступить к лечению, исследую спину и нахожу зоны, где нарушено кровоснабжение и есть зажимы — именно там корень проблемы.",
    },
    {
      question: "Нужно ли принимать какие-то таблетки?",
      answer:
        "Нет. Моя задача — помочь вам без пожизненного приёма таблеток, гормонов и обезболивающих. Если вы сейчас что-то принимаете по назначению другого врача, обсудим это на приёме.",
    },
    {
      question: "Где проходит приём?",
      answer:
        "Приём в Москве. Запись живая — уточните текущую очередь при обращении. Я не ограничиваю время приёма — работаю столько, сколько нужно, чтобы решить вашу задачу.",
    },
    {
      question: "Как понять, подойдёт ли мне этот метод?",
      answer:
        "Напишите или оставьте заявку. Я изучу вашу ситуацию и честно скажу, смогу ли помочь. Не берусь за случаи, где мой метод не даст результата.",
    },
  ]

  return (
    <section id="faq" className="bg-muted/30 py-20 md:py-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wide">Вопросы?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
            Частые вопросы
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-foreground font-semibold hover:text-accent">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
