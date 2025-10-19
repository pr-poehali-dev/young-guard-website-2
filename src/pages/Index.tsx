import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navigation = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'bio', label: 'Биография', icon: 'User' },
    { id: 'archive', label: 'Архив', icon: 'FileText' },
    { id: 'memory', label: 'Память', icon: 'Heart' },
    { id: 'heroism', label: 'Подвиги', icon: 'Award' }
  ];

  const timeline = [
    { year: '1924', event: 'Родился в рабочей семье' },
    { year: '1941', event: 'Начало Великой Отечественной войны' },
    { year: '1942', event: 'Вступление в подпольную организацию "Молодая гвардия"' },
    { year: '1942-1943', event: 'Участие в борьбе против оккупантов' },
    { year: '1943', event: 'Арест и героическая гибель' }
  ];

  const archives = [
    { title: 'Оперативная сводка', date: '15 января 1943', type: 'Документ' },
    { title: 'Свидетельство очевидца', date: '12 февраля 1943', type: 'Протокол' },
    { title: 'Наградной лист', date: 'Сентябрь 1943', type: 'Приказ' }
  ];

  const heroicActs = [
    { title: 'Распространение листовок', description: 'Организация печати и распространения антифашистских листовок среди населения' },
    { title: 'Саботаж', description: 'Срыв отправки молодёжи на работу в Германию' },
    { title: 'Диверсии', description: 'Уничтожение вражеской техники и документации' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-bold font-serif text-primary">
              Молодая Гвардия
            </h1>
            <div className="flex gap-2 md:gap-6">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded transition-all ${
                    activeSection === item.id
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-accent'
                  }`}
                >
                  <Icon name={item.icon as any} size={18} />
                  <span className="hidden md:inline text-sm font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12">
        {activeSection === 'home' && (
          <div className="animate-fade-in">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 blur-2xl"></div>
                <img
                  src="https://cdn.poehali.dev/projects/d037542f-237c-4266-a179-9351681e34fc/files/98e90511-bd08-4c1d-afcc-3f8c92095031.jpg"
                  alt="Герой Молодой гвардии"
                  className="relative rounded-sm shadow-2xl border-4 border-accent/30 w-full"
                />
              </div>
              <div>
                <Badge className="mb-4 bg-primary">1942-1943</Badge>
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">
                  Они сражались за Родину
                </h2>
                <blockquote className="border-l-4 border-primary pl-6 italic text-lg text-muted-foreground mb-6">
                  "Мы знали, что идём на смерть. Но разве можно было поступить иначе, когда враг топчет родную землю?"
                </blockquote>
                <p className="text-foreground/80 leading-relaxed">
                  Член подпольной антифашистской комсомольской организации «Молодая гвардия», действовавшей в городе Краснодоне Ворошиловградской области в 1942-1943 годах во время Великой Отечественной войны.
                </p>
              </div>
            </div>

            <Separator className="my-12" />

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 bg-card border-2 hover:border-primary/50 transition-all hover:shadow-lg">
                <Icon name="Users" size={32} className="text-primary mb-4" />
                <h3 className="text-xl font-serif font-bold mb-2">110 членов</h3>
                <p className="text-muted-foreground">Подпольная организация объединяла молодых патриотов</p>
              </Card>
              <Card className="p-6 bg-card border-2 hover:border-primary/50 transition-all hover:shadow-lg">
                <Icon name="Flame" size={32} className="text-primary mb-4" />
                <h3 className="text-xl font-serif font-bold mb-2">6 месяцев</h3>
                <p className="text-muted-foreground">Длительность подпольной борьбы против оккупантов</p>
              </Card>
              <Card className="p-6 bg-card border-2 hover:border-primary/50 transition-all hover:shadow-lg">
                <Icon name="Award" size={32} className="text-primary mb-4" />
                <h3 className="text-xl font-serif font-bold mb-2">Звание Героя</h3>
                <p className="text-muted-foreground">Посмертно удостоены высших наград Родины</p>
              </Card>
            </div>
          </div>
        )}

        {activeSection === 'bio' && (
          <div className="animate-fade-in max-w-4xl">
            <h2 className="text-4xl font-serif font-bold mb-8 text-primary">Биография</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground/90 leading-relaxed mb-6">
                Родился в 1924 году в простой рабочей семье. С детства отличался живым умом, любознательностью и чувством справедливости. Окончил семилетнюю школу с отличием, мечтал продолжить образование.
              </p>
              <p className="text-foreground/90 leading-relaxed mb-6">
                Когда началась война, ему было всего 17 лет. Оккупация родного города стала переломным моментом в его жизни. Не смог остаться в стороне, когда фашисты захватили Краснодон.
              </p>
              <p className="text-foreground/90 leading-relaxed mb-6">
                Вместе с товарищами создал подпольную организацию, которая вела борьбу против захватчиков. Распространял листовки, участвовал в саботаже, помогал военнопленным.
              </p>
              <Card className="p-6 bg-muted border-l-4 border-primary my-8">
                <p className="italic text-foreground/80">
                  "Молодость - это не возраст, а состояние духа. Мы были молоды, но наша решимость была тверда, как сталь."
                </p>
              </Card>
            </div>
          </div>
        )}

        {activeSection === 'archive' && (
          <div className="animate-fade-in">
            <h2 className="text-4xl font-serif font-bold mb-8 text-primary">Хронология событий</h2>
            <div className="space-y-6 mb-12">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-24">
                    <Badge variant="outline" className="font-bold text-base border-primary text-primary">
                      {item.year}
                    </Badge>
                  </div>
                  <div className="flex-1 border-l-2 border-accent pl-6 pb-6">
                    <p className="text-lg text-foreground">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>

            <Separator className="my-12" />

            <h3 className="text-3xl font-serif font-bold mb-6 text-primary">Архивные материалы</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {archives.map((doc, index) => (
                <Card key={index} className="p-6 bg-card border-2 hover:shadow-lg transition-all hover:border-primary/50">
                  <Icon name="FileText" size={28} className="text-primary mb-3" />
                  <Badge className="mb-3 bg-secondary">{doc.type}</Badge>
                  <h4 className="font-serif font-bold text-lg mb-2">{doc.title}</h4>
                  <p className="text-sm text-muted-foreground">{doc.date}</p>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'memory' && (
          <div className="animate-fade-in max-w-4xl">
            <h2 className="text-4xl font-serif font-bold mb-8 text-primary">Вечная память</h2>
            <Card className="p-8 bg-gradient-to-br from-card to-muted border-2 border-primary/30">
              <div className="text-center mb-8">
                <Icon name="Heart" size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-serif font-bold mb-4">Они не вернулись из боя</h3>
                <p className="text-lg text-muted-foreground">
                  В январе 1943 года фашисты раскрыли организацию. Героев пытали, но никто не предал товарищей.
                </p>
              </div>
              <Separator className="my-8" />
              <div className="space-y-6">
                <div>
                  <h4 className="font-serif font-bold text-xl mb-3">Память в камне</h4>
                  <p className="text-foreground/80 leading-relaxed">
                    В Краснодоне установлен мемориальный комплекс. Имена героев носят улицы, школы, предприятия по всей стране.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif font-bold text-xl mb-3">Литературное наследие</h4>
                  <p className="text-foreground/80 leading-relaxed">
                    Роман Александра Фадеева «Молодая гвардия» рассказал всему миру о подвиге краснодонских героев.
                  </p>
                </div>
                <div>
                  <h4 className="font-serif font-bold text-xl mb-3">Живая память</h4>
                  <p className="text-foreground/80 leading-relaxed">
                    Подвиг молодогвардейцев вдохновляет новые поколения на служение Родине и защиту справедливости.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        )}

        {activeSection === 'heroism' && (
          <div className="animate-fade-in">
            <h2 className="text-4xl font-serif font-bold mb-8 text-primary">Боевые действия</h2>
            <div className="space-y-6">
              {heroicActs.map((act, index) => (
                <Card key={index} className="p-8 bg-card border-l-4 border-primary hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon name="Award" size={24} className="text-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-serif font-bold mb-3">{act.title}</h3>
                      <p className="text-foreground/80 leading-relaxed">{act.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <Card className="mt-12 p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-2 border-primary/30">
              <h3 className="text-2xl font-serif font-bold mb-4 text-center">Последняя операция</h3>
              <p className="text-foreground/80 leading-relaxed text-center max-w-3xl mx-auto">
                5 января 1943 года молодогвардейцы провели свою последнюю операцию - подожгли биржу труда, уничтожив списки молодёжи, предназначенной для отправки в Германию. Через несколько дней почти все члены организации были арестованы.
              </p>
            </Card>
          </div>
        )}
      </main>

      <footer className="bg-card border-t border-border mt-16 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground mb-2">
            Посвящается героям подпольной организации «Молодая гвардия»
          </p>
          <p className="text-sm text-muted-foreground/70">1942-1943 • Краснодон • Вечная память</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
