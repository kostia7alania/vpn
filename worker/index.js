const PAGE = String.raw`<!doctype html>
<html lang="ru">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex,nofollow,noarchive">
  <meta name="referrer" content="no-referrer">
  <meta name="theme-color" content="#f4f7fb">
  <title>VPN для своих: подключение и маршруты</title>
  <style>
    :root{color-scheme:light;--ink:#14223b;--muted:#53627b;--blue:#2455d6;--blue-dark:#183da8;--teal:#147e70;--line:#dce4ee;--paper:#fff;--wash:#f3f6fb;--yellow:#fff5d8}
    *{box-sizing:border-box}
    html{scroll-behavior:smooth}
    body{margin:0;background:var(--wash);color:var(--ink);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;line-height:1.55}
    a{color:var(--blue-dark);text-underline-offset:3px}
    a:focus-visible,button:focus-visible,summary:focus-visible,textarea:focus-visible{outline:3px solid #ef9e28;outline-offset:3px}
    button{font:inherit;cursor:pointer}
    .wrap{width:min(1120px,calc(100% - 40px));margin:0 auto}
    .top{border-bottom:1px solid var(--line);background:rgba(255,255,255,.88)}
    .top-inner{min-height:72px;display:flex;align-items:center;justify-content:space-between;gap:20px}
    .brand{display:flex;align-items:center;gap:10px;color:var(--ink);font-weight:800;text-decoration:none;letter-spacing:-.025em}
    .mark{width:32px;height:32px;display:grid;place-items:center;background:var(--blue);border-radius:10px;color:white;font-size:18px}
    nav{display:flex;gap:24px;align-items:center;font-size:.9rem;font-weight:650}
    nav a{text-decoration:none;color:var(--muted)}
    .hero{display:grid;grid-template-columns:minmax(0,1.12fr) minmax(0,.88fr);gap:58px;align-items:center;padding:76px 0 70px}
    .eyebrow{display:inline-flex;align-items:center;gap:8px;color:var(--blue-dark);font-size:.75rem;font-weight:800;letter-spacing:.09em;text-transform:uppercase}
    .eyebrow:before{content:"";width:9px;height:9px;border-radius:50%;background:#48aa9b}
    h1,h2,h3,p{margin-top:0}
    h1{font-size:clamp(2.65rem,5.3vw,4.7rem);line-height:1.02;letter-spacing:-.058em;margin:19px 0 20px;max-width:700px}
    .lead{font-size:1.12rem;color:var(--muted);max-width:560px;margin-bottom:27px}
    .actions{display:flex;flex-wrap:wrap;gap:10px;align-items:center}
    .button{min-height:46px;display:inline-flex;align-items:center;justify-content:center;gap:8px;border:1px solid transparent;border-radius:11px;padding:10px 16px;font-weight:750;text-decoration:none;line-height:1.2}
    .button.primary{background:var(--blue);color:#fff}.button.primary:hover{background:var(--blue-dark)}
    .button.light{background:white;color:var(--ink);border-color:var(--line)}.button.light:hover{border-color:#aab8cc}
    .hero-note{margin:17px 0 0;color:var(--muted);font-size:.86rem}
    .map{background:#122441;color:white;border-radius:24px;padding:28px;box-shadow:0 24px 55px #1f355a1a;overflow:hidden}
    .map-top{display:flex;justify-content:space-between;align-items:start;gap:12px;margin-bottom:27px}
    .map-kicker{color:#9eb1d1;font-size:.72rem;text-transform:uppercase;letter-spacing:.1em;font-weight:750}
    .map h2{font-size:1.22rem;letter-spacing:-.02em;margin:5px 0 0}
    .map-label{background:#ffffff12;border:1px solid #ffffff22;color:#cbd8eb;border-radius:999px;padding:5px 10px;font-size:.72rem;white-space:nowrap}
    .route{display:grid;grid-template-columns:24px minmax(0,1fr);gap:13px;position:relative;min-height:67px}
    .route:not(:last-child):before{content:"";position:absolute;width:2px;background:#526789;left:11px;top:21px;bottom:-3px}
    .dot{position:relative;z-index:1;width:24px;height:24px;border:6px solid #5d9cfa;background:#fff;border-radius:50%}
    .route:nth-last-child(2) .dot{border-color:#65ccba}
    .route:last-child .dot{border-color:#f4c35c}
    .route strong{display:block;line-height:1.15}.route small{display:block;color:#aebfda;margin-top:5px}
    .map-foot{color:#b9cbe5;font-size:.79rem;border-top:1px solid #ffffff20;padding-top:17px;margin:1px 0 0}
    section{padding:70px 0;border-top:1px solid var(--line);scroll-margin-top:16px}
    .section-head{display:flex;justify-content:space-between;gap:24px;align-items:end;margin-bottom:28px}
    .section-head h2{font-size:clamp(1.8rem,3vw,2.55rem);letter-spacing:-.045em;line-height:1.1;margin:8px 0 0}
    .section-head p{color:var(--muted);max-width:420px;margin:0}
    .step-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}
    .step{background:var(--paper);border:1px solid var(--line);border-radius:17px;padding:23px;min-width:0}
    .number{display:grid;place-items:center;width:36px;height:36px;border-radius:11px;background:#eaf0ff;color:var(--blue-dark);font-weight:800;margin-bottom:22px}
    .step h3{font-size:1.06rem;letter-spacing:-.02em;margin-bottom:8px}.step p{color:var(--muted);font-size:.93rem;margin:0}
    .tip{margin-top:16px;padding:15px 17px;border:1px solid #eadbb0;background:var(--yellow);border-radius:13px;font-size:.91rem;color:#5b4b24}
    .platforms{display:flex;flex-wrap:wrap;gap:8px;margin:17px 0 0}
    .platforms span,.badge{border-radius:999px;padding:5px 10px;background:#edf2fa;color:#405373;font-size:.75rem;font-weight:750}
    .profile-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:15px}
    .profile{display:flex;flex-direction:column;min-width:0;background:#fff;border:1px solid var(--line);border-radius:17px;padding:23px}
    .profile.featured{border:2px solid #6990f3;background:#fbfcff;padding:22px}
    .profile-top{display:flex;justify-content:space-between;gap:10px;align-items:start;margin-bottom:12px}
    .profile h3{font-size:1.17rem;line-height:1.2;letter-spacing:-.025em;margin:0}
    .badge{background:#e7efff;color:#234db9;white-space:nowrap}
    .badge.secondary{background:#e4f4ef;color:#116d5d}
    .profile p{font-size:.91rem;color:var(--muted);margin:0 0 15px}
    .trace{display:flex;flex-wrap:wrap;gap:5px;align-items:center;font-size:.78rem;font-weight:750;color:#485b79;margin-bottom:19px}
    .trace span{background:#f1f5fa;border-radius:7px;padding:5px 8px}.trace i{font-style:normal;color:#92a1b7}
    .profile-actions{display:flex;align-items:center;flex-wrap:wrap;gap:9px;margin-top:auto}
    .copy{min-width:150px}.open{font-size:.88rem;font-weight:700;padding:9px 5px}
    .copy-status{min-height:1.3em;flex-basis:100%;font-size:.82rem;color:var(--teal)}
    details.key{margin-top:8px;font-size:.85rem;color:var(--muted)}
    summary{cursor:pointer;font-weight:650}
    details.key textarea{width:100%;min-height:90px;margin-top:10px;padding:10px;border:1px solid #bdcbdb;border-radius:9px;font:12px/1.4 ui-monospace,monospace;overflow-wrap:anywhere;resize:vertical}
    .legend{margin-top:16px;color:var(--muted);font-size:.9rem}
    .diagram-grid{display:grid;grid-template-columns:1fr 1fr;gap:15px}
    .diagram{background:#fff;border:1px solid var(--line);border-radius:17px;padding:23px}
    .diagram h3{font-size:1.05rem;margin-bottom:8px}.diagram p{color:var(--muted);font-size:.9rem;margin-bottom:17px}
    .flow{display:flex;align-items:center;flex-wrap:wrap;gap:7px}
    .node{background:#edf2ff;border:1px solid #dce6ff;color:#23469c;border-radius:10px;padding:9px 11px;font-size:.84rem;font-weight:750}
    .node.green{background:#eaf7f3;border-color:#d2eee6;color:#176f61}.arrow{color:#8a9ab1;font-weight:800}
    .detail-grid{display:grid;grid-template-columns:1fr 1fr;gap:15px;margin-top:15px}
    .detail-grid details{background:#fff;border:1px solid var(--line);border-radius:15px;padding:18px 20px}
    .detail-grid summary{color:var(--ink)}.detail-grid p{font-size:.9rem;color:var(--muted);margin:12px 0 0}
    .footer{padding:28px 0 46px;color:var(--muted);font-size:.83rem;border-top:1px solid var(--line)}
    .footer p{margin:0}
    @media(max-width:760px){.wrap{width:min(100% - 32px,560px)}.top-inner{min-height:64px}nav{gap:14px;font-size:.8rem}.hero{grid-template-columns:1fr;gap:30px;padding:52px 0 48px}.hero h1{font-size:clamp(2.7rem,10vw,4rem)}section{padding:49px 0}.section-head{display:block}.section-head p{margin-top:12px}.step-grid,.profile-grid,.diagram-grid,.detail-grid{grid-template-columns:1fr}.step{padding:20px}.number{margin-bottom:13px}.map{padding:23px}.profile{padding:20px}.profile.featured{padding:19px}}
    @media(max-width:380px){nav a:first-child{display:none}.button{width:100%}.profile-actions .open{width:auto}.copy-status{width:100%}}
    @media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}}
  </style>
</head>
<body>
  <header class="top"><div class="wrap top-inner">
    <a class="brand" href="#top"><span class="mark" aria-hidden="true">↗</span> VPN для своих</a>
    <nav aria-label="Навигация"><a href="#start">Как подключиться</a><a href="#profiles">Профили</a><a href="#how">Как это работает</a></nav>
  </div></header>
  <main id="top">
    <div class="wrap hero">
      <div>
        <div class="eyebrow">Простое подключение</div>
        <h1>Интернет, который выбирает маршрут</h1>
        <p class="lead">Установите приложение, скопируйте ключ и подключитесь. Если один путь работает плохо, попробуйте другой.</p>
        <div class="actions"><a class="button primary" href="#start">Подключиться <span aria-hidden="true">↗</span></a><a class="button light" href="#profiles">Выбрать профиль</a></div>
        <p class="hero-note">Для iPhone, Android, Windows и Mac</p>
      </div>
      <div class="map" aria-label="Пример маршрута: ваше устройство, российский сервер, дальше сайт напрямую или через зарубежный узел">
        <div class="map-top"><div><div class="map-kicker">Как проходит соединение</div><h2>Один ключ, несколько путей</h2></div><span class="map-label">Схема</span></div>
        <div class="route"><span class="dot"></span><div><strong>Ваше устройство</strong><small>Телефон или компьютер</small></div></div>
        <div class="route"><span class="dot"></span><div><strong>Сервер в России</strong><small>Получает соединение и выбирает путь</small></div></div>
        <div class="route"><span class="dot"></span><div><strong>Российский сервис</strong><small>Домены из списка идут напрямую</small></div></div>
        <div class="route"><span class="dot"></span><div><strong>Или зарубежный узел</strong><small>Сингапур или Таиланд, затем сайт</small></div></div>
        <p class="map-foot">Схема для профилей через РФ. Прямые профили обходят российский сервер.</p>
      </div>
    </div>
    <section id="start"><div class="wrap">
      <div class="section-head"><div><div class="eyebrow">Начните здесь</div><h2>Подключение в три шага</h2></div><p>Для профилей VLESS ниже подойдёт AmneziaVPN. Обычно хватает нескольких нажатий.</p></div>
      <div class="step-grid">
        <article class="step"><span class="number">1</span><h3>Установите AmneziaVPN</h3><p>Скачайте приложение для своего устройства с <a href="https://amnezia.org/ru/downloads" target="_blank" rel="noopener noreferrer">официальной страницы Amnezia</a>.</p><div class="platforms"><span>iPhone</span><span>Android</span><span>Windows</span><span>Mac</span></div></article>
        <article class="step"><span class="number">2</span><h3>Скопируйте ключ</h3><p>Ниже выберите профиль <strong>Авто</strong> и нажмите <strong>Скопировать ключ</strong>. Другие профили можно добавить так же.</p></article>
        <article class="step"><span class="number">3</span><h3>Добавьте и включите</h3><p>Откройте AmneziaVPN, нажмите <strong>+</strong> или <strong>Начать</strong>, вставьте ключ, продолжите настройку и нажмите <strong>Подключить</strong>. Разрешите создание VPN, если устройство попросит.</p></article>
      </div>
      <p class="tip">На iPhone доступность приложения зависит от региона App Store. Если не находится, проверьте <a href="https://docs.amnezia.org/ru/documentation/instructions/amnezia-on-ios-in-russia/" target="_blank" rel="noopener noreferrer">официальную инструкцию для iOS</a>. Подробная <a href="https://docs.amnezia.org/ru/documentation/instructions/connect-via-text-key/" target="_blank" rel="noopener noreferrer">инструкция по импорту ключа</a>.</p>
    </div></section>
    <section id="profiles"><div class="wrap">
      <div class="section-head"><div><div class="eyebrow">Ключи подключения</div><h2>Выберите свой путь</h2></div><p>Начните с автоматического маршрута. Если не подключается или работает медленно, попробуйте другой профиль.</p></div>
      <div class="profile-grid">
        <article class="profile featured" data-profile="auto">
          <div class="profile-top"><h3>Авто</h3><span class="badge">Начните с него</span></div>
          <p>Через Россию. Доступные зарубежные пути проверяются, между ними выбирается работающий и быстрый.</p>
          <div class="trace" aria-label="Вы, Россия, автоматический выбор Сингапура или Таиланда"><span>Вы</span><i>→</i><span>Россия</span><i>→</i><span>Сингапур / Таиланд</span></div>
          <div class="profile-actions"><button class="button primary copy" type="button" disabled>Скопировать ключ</button><a class="open" hidden>Открыть в приложении ↗</a><span class="copy-status" role="status" aria-live="polite"></span></div>
          <details class="key"><summary>Показать ключ</summary><textarea readonly aria-label="Ключ профиля Авто"></textarea></details>
        </article>
        <article class="profile" data-profile="cascade_sg">
          <div class="profile-top"><h3>Россия → Сингапур</h3><span class="badge">VLESS</span></div>
          <p>Фиксированный маршрут через российский сервер и далее через Сингапур.</p>
          <div class="trace"><span>Вы</span><i>→</i><span>Россия</span><i>→</i><span>Сингапур</span></div>
          <div class="profile-actions"><button class="button primary copy" type="button" disabled>Скопировать ключ</button><a class="open" hidden>Открыть в приложении ↗</a><span class="copy-status" role="status" aria-live="polite"></span></div>
          <details class="key"><summary>Показать ключ</summary><textarea readonly aria-label="Ключ профиля Россия Сингапур"></textarea></details>
        </article>
        <article class="profile" data-profile="thai">
          <div class="profile-top"><h3>Россия → Таиланд</h3><span class="badge secondary">Альтернативный путь</span></div>
          <p>Фиксированный маршрут через российский сервер и далее через узел в Таиланде.</p>
          <div class="trace"><span>Вы</span><i>→</i><span>Россия</span><i>→</i><span>Таиланд</span></div>
          <div class="profile-actions"><button class="button primary copy" type="button" disabled>Скопировать ключ</button><a class="open" hidden>Открыть в приложении ↗</a><span class="copy-status" role="status" aria-live="polite"></span></div>
          <details class="key"><summary>Показать ключ</summary><textarea readonly aria-label="Ключ профиля Россия Таиланд"></textarea></details>
        </article>
        <article class="profile" data-profile="direct_sg">
          <div class="profile-top"><h3>Сингапур напрямую</h3><span class="badge">VLESS</span></div>
          <p>Подключение сразу к Сингапуру, без российского сервера и его списка исключений.</p>
          <div class="trace"><span>Вы</span><i>→</i><span>Сингапур</span></div>
          <div class="profile-actions"><button class="button primary copy" type="button" disabled>Скопировать ключ</button><a class="open" hidden>Открыть в приложении ↗</a><span class="copy-status" role="status" aria-live="polite"></span></div>
          <details class="key"><summary>Показать ключ</summary><textarea readonly aria-label="Ключ профиля Сингапур напрямую"></textarea></details>
        </article>
        <article class="profile" data-profile="russia">
          <div class="profile-top"><h3>Россия</h3><span class="badge">Российский выход</span></div>
          <p>Выход в интернет с российского сервера. Может пригодиться для сервисов, которым нужен российский адрес.</p>
          <div class="trace"><span>Вы</span><i>→</i><span>Россия</span></div>
          <div class="profile-actions"><button class="button primary copy" type="button" disabled>Скопировать ключ</button><a class="open" hidden>Открыть в приложении ↗</a><span class="copy-status" role="status" aria-live="polite"></span></div>
          <details class="key"><summary>Показать ключ</summary><textarea readonly aria-label="Ключ профиля Россия"></textarea></details>
        </article>
        <article class="profile" data-profile="hysteria">
          <div class="profile-top"><h3>Сингапур · Hysteria 2</h3><span class="badge secondary">Запасной протокол</span></div>
          <p>Прямой запасной путь. Нужен клиент с поддержкой Hysteria 2 и проверки отпечатка сертификата <strong>pinSHA256</strong>. Совместимость с AmneziaVPN не проверена.</p>
          <div class="trace"><span>Вы</span><i>→</i><span>Сингапур</span><i>·</i><span>Hysteria 2</span></div>
          <div class="profile-actions"><button class="button primary copy" type="button" disabled>Скопировать ключ</button><a class="open" hidden>Открыть в приложении ↗</a><span class="copy-status" role="status" aria-live="polite"></span></div>
          <details class="key"><summary>Показать ключ</summary><textarea readonly aria-label="Ключ профиля Hysteria 2"></textarea></details>
        </article>
      </div>
      <p class="legend">Если открытие в приложении не сработало, скопируйте ключ и вставьте его вручную. Для Hysteria 2 не удаляйте отпечаток сертификата из ключа.</p>
      <noscript><p class="tip">Для отображения и копирования ключей включите JavaScript в браузере.</p></noscript>
    </div></section>
    <section id="how"><div class="wrap">
      <div class="section-head"><div><div class="eyebrow">Без сложных слов</div><h2>Как выбирается маршрут</h2></div><p>В профилях через Россию решение принимается на сервере. На устройствах друзей ничего дополнительно настраивать не нужно.</p></div>
      <div class="diagram-grid">
        <article class="diagram"><h3>Российский сайт из списка</h3><p>Если домен есть в списке исключений, запрос выходит в интернет из России.</p><div class="flow" aria-label="Устройство, сервер в России, российский сайт"><span class="node">Устройство</span><span class="arrow" aria-hidden="true">→</span><span class="node">Сервер в РФ</span><span class="arrow" aria-hidden="true">→</span><span class="node green">Сайт в РФ</span></div></article>
        <article class="diagram"><h3>Остальные сайты</h3><p>В профиле Авто запрос идёт через один из доступных зарубежных узлов.</p><div class="flow" aria-label="Устройство, сервер в России, Сингапур или Таиланд, сайт"><span class="node">Устройство</span><span class="arrow" aria-hidden="true">→</span><span class="node">Сервер в РФ</span><span class="arrow" aria-hidden="true">→</span><span class="node green">Сингапур / Таиланд</span><span class="arrow" aria-hidden="true">→</span><span class="node">Сайт</span></div></article>
      </div>
      <div class="detail-grid">
        <details><summary>Как работает Авто?</summary><p>Сервер регулярно проверяет доступность узлов и примерно раз в 10 минут сравнивает скорость. Переключение происходит после повторных проверок, если другой путь устойчиво лучше или текущий недоступен. При смене пути внешний IP может измениться, а активное соединение прерваться.</p></details>
        <details><summary>Все ли российские сайты идут напрямую?</summary><p>Нет. Напрямую идут российские домены, которые попали в обновляемый список исключений. Если нужного домена нет в списке, он может пойти через зарубежный узел. Прямой профиль Сингапура и Hysteria 2 этот список не используют.</p></details>
        <details><summary>Что делать, если не работает?</summary><p>Отключите VPN и включите снова. Затем попробуйте другой профиль, например Россия → Сингапур или Сингапур напрямую. Проверьте работу через мобильную сеть и Wi-Fi: условия у провайдеров различаются.</p></details>
        <details><summary>Кто может использовать ключи?</summary><p>Страница открывается без пароля. Любой, у кого есть ссылка на неё или скопированный ключ, сможет попробовать подключиться. Делитесь ею с теми, кому доверяете.</p></details>
      </div>
    </div></section>
  </main>
  <footer class="footer"><div class="wrap"><p>VPN для своих · Ключи и инструкция в одном месте</p></div></footer>
  <script id="profile-data" type="application/json">__PROFILE_DATA__</script>
  <script>
    (function () {
      var profiles = JSON.parse(document.getElementById('profile-data').textContent);
      document.querySelectorAll('[data-profile]').forEach(function (card) {
        var value = profiles[card.dataset.profile];
        if (!value) return;
        var button = card.querySelector('.copy');
        var status = card.querySelector('.copy-status');
        var detail = card.querySelector('details.key');
        var field = card.querySelector('textarea');
        var open = card.querySelector('.open');
        field.value = value;
        open.href = value;
        open.hidden = false;
        button.disabled = false;
        button.addEventListener('click', async function () {
          try {
            if (!navigator.clipboard || !navigator.clipboard.writeText) throw new Error('Clipboard unavailable');
            await navigator.clipboard.writeText(value);
            status.textContent = 'Ключ скопирован. Вставьте его в приложение.';
          } catch (_) {
            detail.open = true;
            field.focus();
            field.select();
            status.textContent = 'Выделите ключ ниже и скопируйте вручную.';
          }
        });
      });
    }());
  </script>
</body>
</html>`;

const HEADERS = {
  'X-Robots-Tag': 'noindex, nofollow, noarchive',
  'Cache-Control': 'no-store',
  'Referrer-Policy': 'no-referrer',
  'X-Content-Type-Options': 'nosniff',
  'Content-Security-Policy': "default-src 'none'; script-src 'unsafe-inline'; style-src 'unsafe-inline'; img-src 'self' data:; connect-src 'none'; base-uri 'none'; form-action 'none'; frame-ancestors 'none'",
};

export default {
  async fetch(request, env) {
    const path = new URL(request.url).pathname;
    if (path === '/robots.txt') {
      return new Response('User-agent: *\nAllow: /\n', { headers: { ...HEADERS, 'Content-Type': 'text/plain; charset=utf-8' } });
    }
    if (path === '/favicon.ico') return new Response(null, { status: 204, headers: HEADERS });
    if (path !== '/') return new Response('Not found', { status: 404, headers: HEADERS });
    const profiles = {
      auto: env.VPN_AUTO,
      cascade_sg: env.VPN_CASCADE_SG,
      thai: env.VPN_THAI,
      direct_sg: env.VPN_DIRECT_SG,
      russia: env.VPN_RUSSIA,
      hysteria: env.VPN_HYSTERIA,
    };
    if (Object.values(profiles).some(value => !value)) {
      return new Response('Страница готовится. Попробуйте позже.', { status: 503, headers: { ...HEADERS, 'Content-Type': 'text/plain; charset=utf-8' } });
    }
    const safeJson = JSON.stringify(profiles).replace(/</g, '\\u003c').replace(/>/g, '\\u003e').replace(/&/g, '\\u0026');
    return new Response(PAGE.replace('__PROFILE_DATA__', safeJson), { headers: { ...HEADERS, 'Content-Type': 'text/html; charset=utf-8' } });
  },
};
