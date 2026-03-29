# OfferMatch — Воркфлоу проекта

## Структура репозитория

```
/                          ← корень проекта
├── Screens/               ← HTML-прототипы экранов (рабочая зона)
├── design-system.md       ← токены, правила, компоненты (источник правды)
├── design-system.html     ← визуальный справочник дизайн-системы
├── 01-light-landing*.html ← версии лендинга (история итераций)
├── Liblary/               ← ассеты (логотипы, изображения)
└── nextjs-landing/        ← продакшен Next.js приложение (Next 16 + Tailwind 4)
    ├── src/app/           ← страницы (App Router)
    ├── src/components/    ← React-компоненты
    ├── public/            ← статические файлы
    └── out/               ← билд (static export → деплой через rsync)
```

## Воркфлоу: от прототипа до продакшена

### Этап 1 — Прототип (HTML)

1. Пользователь присылает HTML-файл экрана (или описание)
2. Файл сохраняется в `Screens/` с номером экрана: `02-new-loading.html`, `03-results.html` и т.д.
3. Адаптируем под дизайн-систему:
   - **Токены**: только переменные из `design-system.md` (цвета, радиусы, шрифты)
   - **Компоненты**: навигация 60px, кнопки с `--r8`, карточки с `--r20`, инпуты с `--r12`
   - **Типографика**: висячие предлоги через `&nbsp;`, размеры по шкале из ДС
   - **Без теней**: карточки выделяются фоном и обводкой
4. Итерируем в HTML пока дизайн не утверждён

### Этап 2 — Портирование в Next.js

Когда экран утверждён:

1. Создать/обновить компоненты в `nextjs-landing/src/components/`
2. Создать/обновить страницу в `nextjs-landing/src/app/`
3. Перенести ассеты в `nextjs-landing/public/`
4. Убедиться что CSS-токены из дизайн-системы используются через CSS-переменные или Tailwind

### Этап 3 — Сборка и проверка

```bash
cd nextjs-landing
npm run build        # static export в out/
npm run dev          # локальная проверка
```

Проверить:
- Все страницы рендерятся без ошибок
- Стили соответствуют утверждённому HTML-прототипу
- Нет ошибок в консоли
- Навигация между экранами работает

### Этап 4 — Деплой

```bash
git add .
git commit -m "описание изменений"
git push origin main
```

CI/CD pipeline (`.github/workflows/deploy.yml`) автоматически:
- Устанавливает зависимости → собирает `out/` → деплоит через rsync на сервер

## Правила

- **Не редактировать** `design-system.md` без явного согласования — это источник правды
- **HTML-прототипы** — рабочие файлы, можно свободно менять
- **Next.js код** — продакшен, коммитить только проверенное
- **Ветка main** — деплоится автоматически, пушить только рабочий код
- Перед портированием в Next.js: прочитать `nextjs-landing/AGENTS.md` (Next 16 имеет breaking changes)

## Аналитика и трекинг

### Яндекс.Метрика

- **ID счётчика:** 108295793
- **Код:** `nextjs-landing/src/app/layout.tsx` (inline script в `<head>`)
- **Возможности:** webvisor, clickmap, accurateTrackBounce, trackLinks
- **UTM-метки:** автоматически читаются Метрикой из URL

### UTM → Telegram-бот (deep linking)

Все кнопки "Попробовать бесплатно" ведут на бот через `BotLinkButton` компонент (`src/components/BotLink.tsx`).

Логика формирования ссылки (`src/lib/botLink.ts`):

```
Вход:  offermatch.ru/?utm_source=vc&utm_campaign=launch
Клик:  "Попробовать бесплатно" в hero
Выход: t.me/OfferMatch_resume_helper_bot?start=site_hero_vc_launch
```

**Формат `?start=` параметра:** `{section}_{utm_source}_{utm_campaign}`

Части опциональны — если UTM нет, передаётся только section.

### Секции (section)

| Кнопка | section | Что видит бот |
|---|---|---|
| Навбар CTA | `site_nav` | `/start site_nav` |
| Hero CTA | `site_hero` | `/start site_hero` |
| Тариф "Старт" | `site_pricing` | `/start site_pricing` |

### Готовые ссылки для публикаций

Шаблон: `https://offermatch.ru/?utm_source={площадка}&utm_medium=article&utm_campaign={название}`

| Площадка | Пример ссылки |
|---|---|
| VC.ru | `https://offermatch.ru/?utm_source=vc&utm_medium=article&utm_campaign=launch` |
| Habr | `https://offermatch.ru/?utm_source=habr&utm_medium=article&utm_campaign=launch` |
| Telegram-канал | `https://offermatch.ru/?utm_source=tg&utm_medium=post&utm_campaign=launch` |
| VK | `https://offermatch.ru/?utm_source=vk&utm_medium=post&utm_campaign=launch` |
| Прямая в бот | `https://t.me/OfferMatch_resume_helper_bot?start=direct_{площадка}` |

### Что нужно в боте (для разработчика бота)

В хендлере `/start` парсить параметр: `message.text.split(' ')[1]`. Сохранять в базу:
- `user_id` — Telegram user ID
- `source` — значение параметра (например `site_hero_vc_launch`)
- `timestamp` — время перехода