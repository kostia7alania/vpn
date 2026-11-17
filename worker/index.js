const PAGE = String.raw`<!doctype html>
<html lang="ru">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex,nofollow,noarchive">
  <meta name="referrer" content="no-referrer">
  <meta name="theme-color" content="#0d1728">
  <title>VPN для своих: подключение и маршруты</title>
  <style>
    :root{color-scheme:dark;--ink:#eef3ff;--muted:#b5c5dd;--blue:#9bb8ff;--blue-dark:#b8cbff;--action:#365ac7;--teal:#83e1ca;--line:#30425e;--paper:#15243a;--wash:#0d1728;--yellow:#3d3320}
    *{box-sizing:border-box}
    html{scroll-behavior:smooth}
    body{margin:0;background:var(--wash);color:var(--ink);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;line-height:1.55}
    a{color:var(--blue-dark);text-underline-offset:3px}
    a:focus-visible,button:focus-visible,summary:focus-visible,textarea:focus-visible{outline:3px solid #ffd384;outline-offset:3px}
    button{font:inherit;cursor:pointer}
    .wrap{width:min(1120px,calc(100% - 40px));margin:0 auto}
    .top{border-bottom:1px solid var(--line);background:#101c2f}
    .top-inner{min-height:72px;display:flex;align-items:center;justify-content:space-between;gap:20px}
    .brand{display:flex;align-items:center;gap:10px;color:var(--ink);font-weight:800;text-decoration:none;letter-spacing:-.025em}
    .mark{width:32px;height:32px;display:grid;place-items:center;background:var(--action);border-radius:10px;color:white;font-size:18px}
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
    .button.primary{background:var(--action);color:#fff}.button.primary:hover{background:#4c70db}
    .button.light{background:#1a2941;color:var(--ink);border-color:var(--line)}.button.light:hover{border-color:#7c91b5}
    .hero-note{margin:17px 0 0;color:var(--muted);font-size:.86rem}
    .map{background:#132238;color:white;border:1px solid #304761;border-radius:24px;padding:28px;box-shadow:0 24px 55px #0003;overflow:hidden}
    .map-top{display:flex;justify-content:space-between;align-items:start;gap:12px;margin-bottom:27px}
    .map-kicker{color:#9eb1d1;font-size:.72rem;text-transform:uppercase;letter-spacing:.1em;font-weight:750}
    .map h2{font-size:1.22rem;letter-spacing:-.02em;margin:5px 0 0}
    .map-label{background:#ffffff12;border:1px solid #ffffff22;color:#cbd8eb;border-radius:999px;padding:5px 10px;font-size:.72rem;white-space:nowrap}
    .icon{display:block;width:22px;height:22px;flex:none;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
    .route-node{display:flex;align-items:center;gap:12px;background:#ffffff0c;border:1px solid #ffffff20;border-radius:13px;padding:12px 14px}
    .route-node .icon{color:#91baff;width:25px;height:25px}.route-node strong,.route-branch strong{display:block;line-height:1.2}
    .route-node small,.route-branch small{display:block;color:#b9cbe5;line-height:1.35;margin-top:4px}
    .route-line{height:19px;border-left:2px solid #6c86ad;margin-left:26px}
    .route-branches{position:relative;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px;padding-top:22px}
    .route-branches:before{content:"";position:absolute;top:9px;left:25%;right:25%;height:13px;border:2px solid #6c86ad;border-bottom:0;border-radius:8px 8px 0 0}
    .route-branches:after{content:"";position:absolute;left:50%;top:0;height:11px;border-left:2px solid #6c86ad}
    .route-branch{background:#ffffff0c;border:1px solid #ffffff20;border-radius:13px;padding:12px;min-width:0}
    .route-branch .icon{color:#7dd8c3;margin-bottom:8px}.route-branch.foreign .icon{color:#f3ca78}
    .map-foot{color:#b9cbe5;font-size:.79rem;border-top:1px solid #ffffff20;padding-top:17px;margin:17px 0 0}
    section{padding:70px 0;border-top:1px solid var(--line);scroll-margin-top:16px}
    .section-head{display:flex;justify-content:space-between;gap:24px;align-items:end;margin-bottom:28px}
    .section-head h2{font-size:clamp(1.8rem,3vw,2.55rem);letter-spacing:-.045em;line-height:1.1;margin:8px 0 0}
    .section-head p{color:var(--muted);max-width:420px;margin:0}
    .step-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}
    .step{background:var(--paper);border:1px solid var(--line);border-radius:17px;padding:23px;min-width:0}
    .number{display:flex;align-items:center;justify-content:space-between;width:100%;height:36px;color:var(--blue-dark);font-weight:800;margin-bottom:22px}
    .number b{display:grid;place-items:center;width:36px;height:36px;border-radius:11px;background:#253657}.number .icon{width:25px;height:25px;color:#a5bcff}
    .step h3{font-size:1.06rem;letter-spacing:-.02em;margin-bottom:8px}.step p{color:var(--muted);font-size:.93rem;margin:0}
    .tip{margin-top:16px;padding:15px 17px;border:1px solid #806d42;background:var(--yellow);border-radius:13px;font-size:.91rem;color:#f4dba5}
    .platforms{display:flex;flex-wrap:wrap;gap:8px;margin:17px 0 0}
    .platforms a,.badge{border-radius:999px;padding:5px 10px;background:#253657;color:#d8e3fc;font-size:.75rem;font-weight:750}
    .platforms a{display:inline-flex;align-items:center;min-height:44px;text-decoration:none}
    .downloads{margin-top:20px;background:#101d30;border:1px solid var(--line);border-radius:18px;padding:24px}
    .downloads-head{display:flex;justify-content:space-between;align-items:start;gap:18px;margin-bottom:18px}
    .downloads h3{font-size:1.3rem;letter-spacing:-.03em;margin:0 0 5px}.downloads-head p{color:var(--muted);font-size:.88rem;margin:0;max-width:560px}
    .download-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px}
    .download-item{background:var(--paper);border:1px solid var(--line);border-radius:14px;padding:18px;min-width:0}
    .download-title{display:flex;align-items:center;gap:9px;margin-bottom:10px}.download-title .icon{color:var(--blue)}
    .download-title h4{font-size:1rem;margin:0}.download-item p{font-size:.88rem;color:var(--muted);margin:0 0 12px}
    .download-item a{font-weight:700;overflow-wrap:anywhere}.download-item .download-link{display:inline-flex;min-height:44px;align-items:center;gap:6px}
    .download-meta{font-size:.8rem;color:var(--muted);margin:15px 0 0}
    .profile-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:15px;align-items:start}
    .profile{display:flex;flex-direction:column;min-width:0;background:var(--paper);border:1px solid var(--line);border-radius:17px;padding:23px}
    .profile.featured{border:2px solid #769bff;background:#192d4b;padding:22px}
    .profile-top{display:flex;justify-content:space-between;gap:10px;align-items:start;margin-bottom:12px}
    .profile h3{font-size:1.17rem;line-height:1.2;letter-spacing:-.025em;margin:0}
    .badge{background:#253c60;color:#c4d5ff;white-space:nowrap}
    .badge.secondary{background:#153b3a;color:#a1eddc}
    .profile p{font-size:.91rem;color:var(--muted);margin:0 0 15px}
    .trace{display:flex;flex-wrap:wrap;gap:5px;align-items:center;font-size:.78rem;font-weight:750;color:#d0ddf1;margin-bottom:19px}
    .trace span{background:#263b5c;border-radius:7px;padding:5px 8px}.trace i{font-style:normal;color:#a5bad9}
    .profile-actions{display:flex;align-items:center;flex-wrap:wrap;gap:9px;margin-top:auto}
    .copy{min-width:150px}.open{font-size:.88rem;font-weight:700;padding:9px 5px}
    .copy-status{min-height:1.3em;flex-basis:100%;font-size:.82rem;color:var(--teal)}
    details.key{margin-top:8px;font-size:.85rem;color:var(--muted)}
    summary{cursor:pointer;font-weight:650;padding:10px 0}
    details.key textarea{width:100%;min-height:90px;margin-top:10px;padding:10px;background:#0d1829;color:var(--ink);border:1px solid #476383;border-radius:9px;font:12px/1.4 ui-monospace,monospace;overflow-wrap:anywhere;resize:vertical}
    .legend{margin-top:16px;color:var(--muted);font-size:.9rem}
    .diagram-grid{display:grid;grid-template-columns:1fr 1fr;gap:15px;align-items:start}
    .diagram{background:var(--paper);border:1px solid var(--line);border-radius:17px;padding:23px}
    .diagram h3{font-size:1.05rem;margin-bottom:8px}.diagram p{color:var(--muted);font-size:.9rem;margin-bottom:17px}
    .flow{display:flex;align-items:center;flex-wrap:wrap;gap:7px}
    .node{display:inline-flex;align-items:center;gap:7px;background:#263b5c;border:1px solid #3a547a;color:#c5d7ff;border-radius:10px;padding:9px 11px;font-size:.84rem;font-weight:750}
    .node .icon{width:18px;height:18px}
    .node.green{background:#163c38;border-color:#296052;color:#a4ead8}.arrow{color:#a5bad9;font-weight:800}
    .detail-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:15px;margin-top:15px;align-items:start}
    .detail-column{display:flex;flex-direction:column;gap:15px;min-width:0}
    .detail-grid details{background:var(--paper);border:1px solid var(--line);border-radius:15px;padding:8px 20px}
    .detail-grid summary{color:var(--ink)}.detail-grid p{font-size:.9rem;color:var(--muted);margin:2px 0 10px}
    .footer{padding:28px 0 46px;color:var(--muted);font-size:.83rem;border-top:1px solid var(--line)}
    .footer p{margin:0}
    @media(max-width:760px){.wrap{width:min(100% - 32px,560px)}.top-inner{min-height:64px}.brand{white-space:nowrap;font-size:.95rem}nav{gap:10px;font-size:.8rem}nav a:first-child{display:none}.hero{grid-template-columns:1fr;gap:30px;padding:52px 0 48px}.hero h1{font-size:clamp(2.7rem,10vw,4rem)}section{padding:49px 0}.section-head{display:block}.section-head p{margin-top:12px}.step-grid,.download-grid,.profile-grid,.diagram-grid,.detail-grid{grid-template-columns:1fr}.step{padding:20px}.number{margin-bottom:13px}.map,.downloads{padding:20px}.profile{padding:20px}.profile.featured{padding:19px}}
    @media(max-width:380px){nav a:last-child{display:none}.button{width:100%}.profile-actions .open{width:auto}.copy-status{width:100%}}
    @media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}}
  </style>
</head>
<body>
  <svg aria-hidden="true" focusable="false" width="0" height="0" style="position:absolute">
    <symbol id="icon-device" viewBox="0 0 24 24"><rect x="7" y="2.5" width="10" height="19" rx="2"></rect><path d="M11 18.5h2"></path></symbol>
    <symbol id="icon-server" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="7" rx="2"></rect><rect x="3" y="14" width="18" height="7" rx="2"></rect><path d="M7 6.5h.01M7 17.5h.01M11 6.5h6M11 17.5h6"></path></symbol>
    <symbol id="icon-home" viewBox="0 0 24 24"><path d="M3 11 12 4l9 7M6 10v9h12v-9M10 19v-5h4v5"></path></symbol>
    <symbol id="icon-globe" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"></circle><path d="M3 12h18M12 3c3 3 4 6 4 9s-1 6-4 9c-3-3-4-6-4-9s1-6 4-9Z"></path></symbol>
    <symbol id="icon-download" viewBox="0 0 24 24"><path d="M12 3v12m-4-4 4 4 4-4M4 17v3h16v-3"></path></symbol>
    <symbol id="icon-key" viewBox="0 0 24 24"><circle cx="8" cy="9" r="4"></circle><path d="m11 12 7 7m-2-2 2-2m-4 0 2-2"></path></symbol>
    <symbol id="icon-check" viewBox="0 0 24 24"><path d="m4 12 5 5L20 6"></path></symbol>
    <symbol id="icon-laptop" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="12" rx="2"></rect><path d="M2 20h20l-2-4H4l-2 4Z"></path></symbol>
  </svg>
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
      <div class="map">
        <div class="map-top"><div><div class="map-kicker">Как проходит соединение</div><h2>Один ключ, несколько путей</h2></div><span class="map-label">Схема</span></div>
        <div role="img" aria-label="Устройство подключается к серверу в России. Сайты из списка исключений открываются напрямую, остальные через узел в Сингапуре или Таиланде.">
          <div class="route-node"><svg class="icon" aria-hidden="true"><use href="#icon-device"></use></svg><div><strong>Ваше устройство</strong><small>Телефон или компьютер</small></div></div>
          <div class="route-line"></div>
          <div class="route-node"><svg class="icon" aria-hidden="true"><use href="#icon-server"></use></svg><div><strong>Сервер в России</strong><small>Выбирает, куда направить запрос</small></div></div>
          <div class="route-branches">
            <div class="route-branch"><svg class="icon" aria-hidden="true"><use href="#icon-home"></use></svg><strong>Сайты из списка</strong><small>Напрямую из России</small></div>
            <div class="route-branch foreign"><svg class="icon" aria-hidden="true"><use href="#icon-globe"></use></svg><strong>Остальные сайты</strong><small>Через Сингапур или Таиланд</small></div>
          </div>
        </div>
        <p class="map-foot">Схема для Авто и маршрутов РФ → Сингапур / Таиланд. Прямые профили Сингапура обходят российский сервер.</p>
      </div>
    </div>
    <section id="start"><div class="wrap">
      <div class="section-head"><div><div class="eyebrow">Начните здесь</div><h2>Подключение в три шага</h2></div><p>Для профилей VLESS подойдёт AmneziaVPN. На iPhone с российским App Store есть запасной вариант.</p></div>
      <div class="step-grid">
        <article class="step"><span class="number"><b>1</b><svg class="icon" aria-hidden="true"><use href="#icon-download"></use></svg></span><h3>Установите приложение</h3><p>Выберите своё устройство ниже и скачайте AmneziaVPN или предложенный вариант для iPhone.</p><div class="platforms"><a href="#download-ios">iPhone</a><a href="#download-android">Android</a><a href="#download-desktop">Windows</a><a href="#download-desktop">Mac</a></div></article>
        <article class="step"><span class="number"><b>2</b><svg class="icon" aria-hidden="true"><use href="#icon-key"></use></svg></span><h3>Скопируйте ключ</h3><p>Ниже выберите профиль <strong>Авто</strong> и нажмите <strong>Скопировать ключ</strong>. Другие профили можно добавить так же.</p></article>
        <article class="step"><span class="number"><b>3</b><svg class="icon" aria-hidden="true"><use href="#icon-check"></use></svg></span><h3>Добавьте и включите</h3><p>Откройте приложение, нажмите <strong>+</strong> или <strong>Приступим</strong>, затем <strong>Вставить</strong>, <strong>Продолжить</strong> и <strong>Подключиться</strong>. Разрешите создание VPN, если устройство попросит.</p></article>
      </div>
      <div class="downloads">
        <div class="downloads-head"><div><h3>Где скачать без VPN</h3><p>Сайт и приложение Amnezia могут быть недоступны в России. Здесь официальное зеркало, GitHub разработчика и вариант для российского App Store.</p></div><svg class="icon" aria-hidden="true"><use href="#icon-download"></use></svg></div>
        <div class="download-grid">
          <article class="download-item" id="download-ios">
            <div class="download-title"><svg class="icon" aria-hidden="true"><use href="#icon-device"></use></svg><h4>iPhone и iPad</h4></div>
            <p>В российском App Store AmneziaVPN может быть недоступна. Попробуйте DefaultVPN от той же команды: разработчик указывает поддержку VLESS. Требуется iOS 16 или новее.</p>
            <a class="download-link" href="https://apps.apple.com/ru/app/defaultvpn/id6744725017" target="_blank" rel="noopener noreferrer">DefaultVPN в App Store ↗</a>
            <p>Импорт именно наших ключей в DefaultVPN на iPhone пока не проверен. Если AmneziaVPN уже установлена, можно использовать её.</p>
          </article>
          <article class="download-item" id="download-android">
            <div class="download-title"><svg class="icon" aria-hidden="true"><use href="#icon-device"></use></svg><h4>Android</h4></div>
            <p>Откройте официальное зеркало Amnezia. Если оно не работает, скачайте APK со страницы релизов разработчика. Нужна Android 9 или новее.</p>
            <a class="download-link" href="https://storage.googleapis.com/amnezia/amnezia.org?m-path=%2Fru%2Fdownloads" target="_blank" rel="noopener noreferrer">Официальное зеркало ↗</a><br>
            <a class="download-link" href="https://github.com/amnezia-vpn/amnezia-client/releases/latest" target="_blank" rel="noopener noreferrer">Релизы на GitHub ↗</a>
            <p>На GitHub откройте Assets. Для большинства телефонов нужен APK с arm64-v8a и версией Android вашего устройства. При установке Android может попросить разрешение для браузера.</p>
          </article>
          <article class="download-item" id="download-desktop">
            <div class="download-title"><svg class="icon" aria-hidden="true"><use href="#icon-laptop"></use></svg><h4>Windows и Mac</h4></div>
            <p>Скачайте AmneziaVPN через официальное зеркало или на странице релизов. В Assets выберите установщик для своей системы: Windows 10/11 или macOS 14 и новее.</p>
            <a class="download-link" href="https://storage.googleapis.com/amnezia/amnezia.org?m-path=%2Fru%2Fdownloads" target="_blank" rel="noopener noreferrer">Официальное зеркало ↗</a><br>
            <a class="download-link" href="https://github.com/amnezia-vpn/amnezia-client/releases/latest" target="_blank" rel="noopener noreferrer">Релизы на GitHub ↗</a>
          </article>
        </div>
        <p class="download-meta">Основные ссылки на скачивание отвечали при проверке через российский сервер 18 ноября 2026 года. У разных провайдеров доступность может отличаться и со временем меняться. <a href="https://docs.amnezia.org/ru/documentation/instructions/connect-via-text-key/" target="_blank" rel="noopener noreferrer">Официальная инструкция по импорту ключа</a>.</p>
      </div>
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
        <article class="diagram"><h3>Российский сайт из списка</h3><p>Если домен есть в списке исключений, запрос выходит в интернет из России.</p><div class="flow" role="img" aria-label="Устройство, сервер в России, российский сайт"><span class="node"><svg class="icon" aria-hidden="true"><use href="#icon-device"></use></svg>Устройство</span><span class="arrow" aria-hidden="true">→</span><span class="node"><svg class="icon" aria-hidden="true"><use href="#icon-server"></use></svg>Сервер в РФ</span><span class="arrow" aria-hidden="true">→</span><span class="node green"><svg class="icon" aria-hidden="true"><use href="#icon-home"></use></svg>Сайт в РФ</span></div></article>
        <article class="diagram"><h3>Остальные сайты</h3><p>В профиле Авто запрос идёт через один из доступных зарубежных узлов.</p><div class="flow" role="img" aria-label="Устройство, сервер в России, Сингапур или Таиланд, сайт"><span class="node"><svg class="icon" aria-hidden="true"><use href="#icon-device"></use></svg>Устройство</span><span class="arrow" aria-hidden="true">→</span><span class="node"><svg class="icon" aria-hidden="true"><use href="#icon-server"></use></svg>Сервер в РФ</span><span class="arrow" aria-hidden="true">→</span><span class="node green"><svg class="icon" aria-hidden="true"><use href="#icon-globe"></use></svg>Сингапур / Таиланд</span><span class="arrow" aria-hidden="true">→</span><span class="node">Сайт</span></div></article>
      </div>
      <div class="detail-grid" role="group" aria-label="Ответы на частые вопросы">
        <div class="detail-column">
          <details><summary>Как работает Авто?</summary><p>Сервер регулярно проверяет доступность узлов и примерно раз в 10 минут сравнивает скорость. Переключение происходит после повторных проверок, если другой путь устойчиво лучше или текущий недоступен. При смене пути внешний IP может измениться, а активное соединение прерваться.</p></details>
          <details><summary>Все ли российские сайты идут напрямую?</summary><p>Нет. Напрямую идут российские домены, которые попали в обновляемый список исключений. Если нужного домена нет в списке, он может пойти через зарубежный узел. Прямой профиль Сингапура и Hysteria 2 этот список не используют.</p></details>
          <details><summary>Что делать, если не работает?</summary><p>Отключите VPN и включите снова. Затем попробуйте другой профиль, например Россия → Сингапур или Сингапур напрямую. Проверьте работу через мобильную сеть и Wi-Fi: условия у провайдеров различаются.</p></details>
        </div>
        <div class="detail-column">
          <details><summary>Кто может использовать ключи?</summary><p>Страница открывается без пароля. Любой, у кого есть ссылка на неё или скопированный ключ, сможет попробовать подключиться. Делитесь ею с теми, кому доверяете.</p></details>
          <details><summary>Что помогает обходить блокировки?</summary><p>В пяти основных профилях используется VLESS с Reality: он старается сделать соединение похожим на обычный защищённый трафик. Amnezia также предлагает свой протокол AmneziaWG, но здесь его нет. Ни один способ не гарантирует работу во всех сетях. <a href="https://docs.amnezia.org/ru/documentation/protocols-info/" target="_blank" rel="noopener noreferrer">Как протоколы описывает Amnezia</a>.</p></details>
          <details><summary>Как попробовать запасной Hysteria 2?</summary><p>Можно попробовать <a href="https://github.com/hiddify/hiddify-app" target="_blank" rel="noopener noreferrer">Hiddify</a>: скопируйте ключ, откройте приложение, нажмите + и добавьте профиль из буфера обмена. Поддержка этого ключа и проверка отпечатка сертификата в приложении пока не проверены. Если не получается убедиться, что отпечаток проверяется, используйте один из профилей VLESS.</p></details>
        </div>
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
