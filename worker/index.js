const PAGE = String.raw`<!doctype html>
<html lang="ru">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex,nofollow,noarchive">
  <meta name="referrer" content="no-referrer">
  <meta name="theme-color" content="#0e0e11">
  <title>VPN для своих</title>
  <style>
    :root {
      color-scheme: dark;
      --bg: #0e0e11;
      --panel: #1b1b20;
      --raised: #25252c;
      --line: #36363e;
      --ink: #f5f4f3;
      --muted: #b5b4ba;
      --accent: #ffb670;
      --green: #c7de9f;
      --wire: #8c8480;
    }
    *, *::before, *::after { box-sizing: border-box; }
    html { scroll-behavior: smooth; }
    body { margin: 0; background: var(--bg); color: var(--ink); font: 1rem/1.55 system-ui, sans-serif; }
    a { color: #ffbf88; text-underline-offset: 4px; }
    [hidden] { display: none !important; }
    :focus-visible { outline: 2px solid #ffd5a7; outline-offset: 4px; }
    h1, h2, h3, p { margin-top: 0; }
    button { font: inherit; cursor: pointer; }
    .wrap { width: min(1080px, calc(100% - 48px)); margin-inline: auto; }
    .sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }
    .icon { display: block; width: 21px; height: 21px; flex: none; fill: none; stroke: currentColor; stroke-width: 1.65; stroke-linecap: round; stroke-linejoin: round; }
    .top { border-bottom: 1px solid #27272d; }
    .top-inner, nav { display: flex; align-items: center; flex-wrap: wrap; }
    .top-inner { justify-content: space-between; gap: 8px 24px; min-height: 66px; padding-block: 12px; }
    .brand { display: inline-flex; align-items: center; gap: 9px; color: var(--ink); font-weight: 760; text-decoration: none; }
    .brand .icon { color: var(--accent); }
    nav { gap: 16px 24px; font-size: .9rem; }
    nav a { color: var(--muted); text-decoration: none; }
    nav a:hover { color: var(--ink); }
    .hero { padding: 76px 0 34px; text-align: center; }
    .hero h1 {
      display: inline-block;
      margin: 0;
      color: var(--accent);
      font-size: clamp(2.625rem, 1.5rem + 4.8vw, 5.125rem);
      line-height: 1.02;
      letter-spacing: -.055em;
      text-wrap: balance;
    }
    @supports (background-clip: text) {
      .hero h1 {
        background: linear-gradient(102deg, #ffae69 4%, #f5da73 58%, #b2d863 96%);
        background-clip: text;
        color: transparent;
      }
    }
    section { padding-block: 58px; border-top: 1px solid #29292f; scroll-margin-top: 16px; }
    #start { padding: 0 0 56px; border: 0; }
    .section-head { margin-bottom: 23px; }
    .section-head h2, .faq h2 { margin: 0; font-size: clamp(1.85rem, 1.45rem + 1vw, 2.45rem); line-height: 1.12; letter-spacing: -.035em; }
    .section-head p { max-width: 58ch; margin: 10px 0 0; color: var(--muted); }
    .downloads {
      max-width: 880px;
      margin-inline: auto;
      padding: 26px 24px 24px;
      border: 1px solid var(--line);
      border-radius: 24px;
      background: linear-gradient(130deg, #202025, #19191e);
      text-align: center;
    }
    .downloads h2 { margin: 0 0 20px; font-size: 1.125rem; }
    .os-picker { display: grid; grid-template-columns: repeat(6, minmax(0, 96px)); justify-content: center; gap: 7px; min-width: 0; margin: 0; padding: 0; border: 0; }
    .os-choice { position: relative; cursor: pointer; }
    .os-tile { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 7px; min-height: 80px; padding: 7px 2px; border: 1px solid transparent; border-radius: 15px; color: #e4ba99; font-size: .9rem; font-weight: 650; }
    .os-tile .icon { width: 27px; height: 27px; }
    .os-choice:hover .os-tile { background: #ffffff0a; }
    .os-choice input:checked + .os-tile { border-color: var(--accent); background: #ffb6700d; color: #ffd2a8; }
    .os-choice input:focus-visible + .os-tile { outline: 2px solid #ffd5a7; outline-offset: 3px; }
    .install-action { display: flex; justify-content: center; align-items: center; flex-wrap: wrap; gap: 9px 16px; margin-top: 23px; }
    .button { display: inline-flex; justify-content: center; align-items: center; gap: 8px; min-height: 44px; padding: 9px 15px; border: 1px solid var(--line); border-radius: 11px; background: var(--raised); color: var(--ink); font-weight: 720; line-height: 1.2; text-decoration: none; }
    .button:hover { background: #323239; }
    .button.primary { background: var(--accent); border-color: transparent; color: #2b1708; }
    .button.primary:hover { background: #ffc792; }
    .button:disabled { opacity: .5; cursor: default; }
    .install-action .button { min-height: 50px; padding-inline: 20px; }
    .install-caption { margin: 0; color: var(--muted); font-size: .9rem; }
    .install-caption a { margin-inline-start: .65em; }
    .mirror-link { display: inline-block; margin-top: 15px; font-size: .88rem; }
    .profile-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; align-items: start; }
    .profile {
      min-width: 0;
      padding: 19px 21px;
      border: 1px solid var(--line);
      border-radius: 15px;
      background: var(--panel);
    }
    .profile:last-child { grid-column: 1 / -1; }
    .profile.featured { grid-column: 1 / -1; border-color: #98704e; background: #241f1c; }
    .profile-top { display: flex; align-items: baseline; justify-content: space-between; flex-wrap: wrap; gap: 4px 12px; margin-bottom: 7px; }
    .profile h3 { margin: 0; font-size: 1.125rem; line-height: 1.25; letter-spacing: -.02em; }
    .profile .protocol { color: var(--muted); font-size: .8rem; }
    .profile.featured h3 { color: #ffd0a3; }
    .profile p { margin: 0 0 13px; color: var(--muted); font-size: .92rem; }
    .profile-actions { display: flex; align-items: center; flex-wrap: wrap; gap: 4px 12px; }
    .copy-status { color: var(--green); font-size: .82rem; }
    .copy-status:empty { margin: 0; width: 0; }
    .key { margin-top: 6px; }
    .key summary { padding-block: 7px; color: var(--muted); cursor: pointer; font-size: .85rem; }
    .key textarea { display: block; width: 100%; min-height: 92px; margin-block: 5px 8px; padding: 10px; border: 1px solid #575760; border-radius: 9px; background: #121216; color: var(--ink); font: 12px/1.45 ui-monospace, monospace; overflow-wrap: anywhere; resize: vertical; }
    .key a { font-size: .86rem; }
    .key a + a { margin-inline-start: .65em; }
    .route-map { margin: 0; padding: 28px; border: 1px solid var(--line); border-radius: 20px; background: var(--panel); }
    .route-flow { --join: 40px; --branch-gap: 14px; display: grid; grid-template-columns: minmax(0, 1fr) var(--join) minmax(0, 1.1fr) var(--join) minmax(0, 1.65fr); align-items: center; }
    .route-point, .route-result { display: flex; align-items: center; gap: 11px; min-width: 0; padding: 13px 15px; border: 1px solid #44444c; border-radius: 12px; background: var(--raised); }
    .route-point { font-weight: 700; }
    .route-point .icon { color: var(--accent); }
    .route-link, .route-joint { position: relative; height: 2px; background: var(--wire); }
    .route-link::after { content: ""; position: absolute; right: 1px; top: -3px; width: 8px; height: 8px; border-top: 2px solid var(--wire); border-right: 2px solid var(--wire); transform: rotate(45deg); }
    .route-joint { width: 50%; }
    .route-results { display: grid; grid-template-rows: repeat(2, 1fr); gap: var(--branch-gap); position: relative; }
    .route-result { position: relative; border-color: #47513d; background: #222820; }
    .route-result::before, .route-result::after { content: ""; position: absolute; left: calc(var(--join) / -2 - 1px); }
    .route-result::before { top: 50%; width: calc(var(--join) / 2); border-top: 2px solid var(--wire); }
    .route-result::after { border-left: 2px solid var(--wire); }
    .route-result:first-child::after { top: 50%; bottom: calc(var(--branch-gap) / -2 - 1px); }
    .route-result:last-child::after { top: calc(var(--branch-gap) / -2 - 1px); bottom: 50%; }
    .route-result .icon, .route-result strong { color: var(--green); }
    .route-result strong, .route-result small { display: block; }
    .route-result small { margin-top: 2px; color: var(--muted); font-size: .83rem; }
    .faq { display: grid; grid-template-columns: minmax(0, .9fr) minmax(0, 2fr); gap: 22px; align-items: start; }
    .faq details { border-top: 1px solid var(--line); }
    .faq details:last-child { border-bottom: 1px solid var(--line); }
    .faq summary { display: flex; align-items: center; justify-content: space-between; gap: 14px; min-height: 55px; cursor: pointer; font-weight: 680; list-style: none; }
    .faq summary::-webkit-details-marker { display: none; }
    .faq summary::after { content: ""; flex: none; width: 8px; height: 8px; margin-right: 3px; border-right: 2px solid var(--accent); border-bottom: 2px solid var(--accent); transform: rotate(45deg); }
    .faq details[open] summary::after { transform: rotate(225deg); }
    .faq p { max-width: 58ch; margin: 0 0 16px; color: var(--muted); font-size: .93rem; }
    .footer { padding-block: 22px 34px; border-top: 1px solid #29292f; color: var(--muted); font-size: .82rem; }
    .footer-inner, .build { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 4px 15px; }
    .footer p, .build { margin: 0; }
    .build time { font-variant-numeric: tabular-nums; }
    @media (max-width: 760px) {
      .wrap { width: min(560px, calc(100% - 32px)); }
      nav { gap: 10px 15px; }
      .hero { padding: 51px 0 26px; }
      section { padding-block: 44px; }
      #start { padding-bottom: 44px; }
      .downloads { padding: 23px 15px 19px; }
      .os-picker { grid-template-columns: repeat(3, minmax(0, 96px)); }
      .os-tile { min-height: 68px; }
      .install-action { margin-top: 19px; }
      .profile-grid, .faq { grid-template-columns: 1fr; }
      .section-head { margin-bottom: 18px; }
      .route-map { padding: 17px; }
      .route-flow { display: flex; flex-direction: column; align-items: stretch; }
      .route-link, .route-joint { width: 2px; height: 21px; align-self: center; }
      .route-link::after { right: -3px; top: auto; bottom: 1px; transform: rotate(135deg); }
      .route-results { grid-template-columns: repeat(2, minmax(0, 1fr)); grid-template-rows: auto; gap: 9px; padding-top: 13px; }
      .route-results::before { content: ""; position: absolute; inset: 0 25% auto; height: 13px; border: 2px solid var(--wire); border-bottom: 0; border-radius: 7px 7px 0 0; }
      .route-result::before, .route-result::after { display: none; }
      .route-result { align-items: flex-start; flex-direction: column; gap: 6px; padding: 11px; font-size: .92rem; }
      .route-result small { line-height: 1.35; }
    }
    @media (max-width: 420px) {
      .install-action { flex-direction: column; }
    }
    @media (prefers-reduced-motion: reduce) {
      html { scroll-behavior: auto; }
    }
  </style>
</head>
<body>
  <svg aria-hidden="true" focusable="false" width="0" height="0" style="position:absolute">
    <symbol id="icon-device" viewBox="0 0 24 24"><rect x="7" y="2.5" width="10" height="19" rx="2"></rect><path d="M11 18.5h2"></path></symbol>
    <symbol id="icon-server" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="7" rx="2"></rect><rect x="3" y="14" width="18" height="7" rx="2"></rect><path d="M7 6.5h.01M7 17.5h.01M11 6.5h6M11 17.5h6"></path></symbol>
    <symbol id="icon-home" viewBox="0 0 24 24"><path d="M3 11 12 4l9 7M6 10v9h12v-9M10 19v-5h4v5"></path></symbol>
    <symbol id="icon-globe" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"></circle><path d="M3 12h18M12 3c3 3 4 6 4 9s-1 6-4 9c-3-3-4-6-4-9s1-6 4-9Z"></path></symbol>
    <symbol id="icon-download" viewBox="0 0 24 24"><path d="M12 3v12m-4-4 4 4 4-4M4 17v3h16v-3"></path></symbol>
    <symbol id="icon-route" viewBox="0 0 24 24"><circle cx="5" cy="12" r="2.5"></circle><circle cx="19" cy="5" r="2.5"></circle><circle cx="19" cy="19" r="2.5"></circle><path d="M7.5 12H11m0 0 5-5m-5 5 5 5"></path></symbol>
    <symbol id="icon-windows" viewBox="0 0 24 24"><path d="m3 5.5 18-3v19l-18-3V5.5Zm0 6.5h18M11 4.2v15.6"></path></symbol>
    <symbol id="icon-macos" viewBox="0 0 24 24"><path d="M12 7c-.4-2.4 1.2-4.4 3.8-4.7-.1 2.2-1.5 4.2-3.8 4.7Zm6.7 2.1c-2-2.5-4.7-1-6.7-1-1.6 0-3.2-1.1-5.1-.3-2 .9-2.9 3.1-2.7 5.3.2 2.7 2 6.2 3.8 7.6 1.3 1 2.5-.5 4.3-.5 1.9 0 3.1 1.5 4.4.4 1.1-.9 2.1-2.5 2.9-4.6-3.6-1.4-4-4.8-.9-6.9Z"></path></symbol>
    <symbol id="icon-android" viewBox="0 0 24 24"><path d="m7 5 1.5 2m8.5-2-1.5 2M5 12h14M4 12v5m16-5v5m-12 1v3m8-3v3M6 11a6 6 0 1 1 12 0v7H6v-7Zm3.5-1.5h.01m5 0h.01"></path></symbol>
    <symbol id="icon-linux" viewBox="0 0 24 24"><path d="M6 18c.4-5 1.3-6.7 2-8.8.5-1.6.3-3.4 1.3-4.6 1.3-1.6 4.1-1.6 5.4 0 1 1.2.8 3 1.3 4.6.7 2.1 1.6 3.8 2 8.8m-8-9.5h.01m4 0h.01M10.5 11 12 12l1.5-1M8.5 18c-.3-2 1.1-4 3.5-4s3.8 2 3.5 4m-3.5 2h1.8m-2.3.5c-1.7.9-4.1 1-6.3-.1.4-1.6 2-2.7 3.7-2.4l2.6 2.5Zm1 0c1.7.9 4.1 1 6.3-.1-.4-1.6-2-2.7-3.7-2.4l-2.6 2.5Z"></path></symbol>
    <symbol id="icon-code" viewBox="0 0 24 24"><rect x="3.5" y="3.5" width="17" height="17" rx="4"></rect><path d="m9.5 9-3 3 3 3m5-6 3 3-3 3"></path></symbol>
    <symbol id="icon-copy" viewBox="0 0 24 24"><rect x="9" y="9" width="12" height="12" rx="2"></rect><path d="M15 6V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h1"></path></symbol>
  </svg>
  <header class="top">
    <div class="wrap top-inner">
      <a class="brand" href="#top"><svg class="icon" aria-hidden="true"><use href="#icon-route"></use></svg>VPN для своих</a>
      <nav aria-label="Навигация">
        <a href="#start">Установка</a><a href="#profiles">Профили</a><a href="#how">Маршрут</a>
      </nav>
    </div>
  </header>
  <main id="top">
    <div class="wrap hero"><h1>Подключите VPN</h1></div>
    <section id="start" aria-labelledby="install-heading">
      <div class="wrap">
        <div class="downloads">
          <h2 id="install-heading">Установите приложение</h2>
          <fieldset class="os-picker" hidden>
            <legend class="sr-only">Устройство</legend>
            <label class="os-choice">
              <input class="sr-only" type="radio" name="platform" value="windows" checked>
              <span class="os-tile"><svg class="icon" aria-hidden="true"><use href="#icon-windows"></use></svg>Windows</span>
            </label>
            <label class="os-choice">
              <input class="sr-only" type="radio" name="platform" value="macos">
              <span class="os-tile"><svg class="icon" aria-hidden="true"><use href="#icon-macos"></use></svg>macOS</span>
            </label>
            <label class="os-choice">
              <input class="sr-only" type="radio" name="platform" value="ios">
              <span class="os-tile"><svg class="icon" aria-hidden="true"><use href="#icon-device"></use></svg>iOS</span>
            </label>
            <label class="os-choice">
              <input class="sr-only" type="radio" name="platform" value="android">
              <span class="os-tile"><svg class="icon" aria-hidden="true"><use href="#icon-android"></use></svg>Android</span>
            </label>
            <label class="os-choice">
              <input class="sr-only" type="radio" name="platform" value="linux">
              <span class="os-tile"><svg class="icon" aria-hidden="true"><use href="#icon-linux"></use></svg>Linux</span>
            </label>
            <label class="os-choice">
              <input class="sr-only" type="radio" name="platform" value="github">
              <span class="os-tile"><svg class="icon" aria-hidden="true"><use href="#icon-code"></use></svg>GitHub</span>
            </label>
          </fieldset>
          <div class="install-action">
            <a class="button primary" id="install-link" href="https://storage.googleapis.com/amnezia/amnezia.org?m-path=/ru/downloads" target="_blank" rel="noopener noreferrer">
              <svg class="icon" aria-hidden="true"><use href="#icon-download"></use></svg><span>Скачать AmneziaVPN</span>
            </a>
            <p class="install-caption" id="install-caption" hidden>
              <span id="install-note" aria-live="polite"></span><a id="install-extra" href="https://github.com/amnezia-vpn/amnezia-client/releases/latest" target="_blank" rel="noopener noreferrer" hidden>APK на GitHub</a>
            </p>
          </div>
          <a class="mirror-link" href="https://storage.googleapis.com/amnezia/amnezia.org?m-path=/ru/downloads" target="_blank" rel="noopener noreferrer" hidden>Официальное зеркало Amnezia</a>
        </div>
      </div>
    </section>

    <section id="profiles" aria-labelledby="profiles-heading">
      <div class="wrap">
        <div class="section-head">
          <h2 id="profiles-heading">Профили подключения</h2>
          <p>Скопируйте ключ «Авто». В приложении нажмите <strong>+</strong>, вставьте ключ и подключитесь.</p>
        </div>
        <div class="profile-grid">
__PROFILE_CARDS__
        </div>
        <noscript><p>Откройте «Показать ключ» и скопируйте строку.</p></noscript>
      </div>
    </section>

    <section id="how" aria-labelledby="route-heading">
      <div class="wrap">
        <div class="section-head"><h2 id="route-heading">Маршрут профиля «Авто»</h2></div>
        <figure class="route-map" role="img" aria-label="Устройство подключается к серверу в России. Запросы к сайтам из списка исключений выходят из России. Остальные идут через Сингапур или Таиланд.">
          <div class="route-flow">
            <div class="route-point"><svg class="icon" aria-hidden="true"><use href="#icon-device"></use></svg>Устройство</div>
            <span class="route-link" aria-hidden="true"></span>
            <div class="route-point"><svg class="icon" aria-hidden="true"><use href="#icon-server"></use></svg>Сервер в России</div>
            <span class="route-joint" aria-hidden="true"></span>
            <div class="route-results">
              <div class="route-result">
                <svg class="icon" aria-hidden="true"><use href="#icon-home"></use></svg>
                <div><strong>Сайты из списка</strong><small>Выход из России</small></div>
              </div>
              <div class="route-result">
                <svg class="icon" aria-hidden="true"><use href="#icon-globe"></use></svg>
                <div><strong>Остальные сайты</strong><small>Через Сингапур или Таиланд</small></div>
              </div>
            </div>
          </div>
        </figure>
      </div>
    </section>

    <section aria-labelledby="faq-heading">
      <div class="wrap faq">
        <h2 id="faq-heading">Частые вопросы</h2>
        <div>
          <details>
            <summary>Когда «Авто» меняет маршрут?</summary>
            <p>Когда текущий узел недоступен или другой стабильно быстрее. При переключении внешний IP может измениться, а соединение прерваться.</p>
          </details>
          <details>
            <summary>Все ли российские сайты идут напрямую?</summary>
            <p>Из России открываются сайты из списка исключений. Если российский IP нужен для всех сайтов, выберите профиль «Россия».</p>
          </details>
          <details>
            <summary>Что делать, если VPN не подключается?</summary>
            <p>Попробуйте «Сингапур напрямую». Если не помогло, попробуйте подключиться через другую сеть, например через мобильную вместо Wi-Fi.</p>
          </details>
        </div>
      </div>
    </section>
  </main>
  <footer class="footer">
    <div class="wrap footer-inner">
      <p>© __BUILD_YEAR__ VPN для своих</p>
      __BUILD_LABEL__
    </div>
  </footer>
  <script id="installer-data" type="application/json">__INSTALLER_DATA__</script>
  <script>
    (function () {
      var installers = JSON.parse(document.getElementById('installer-data').textContent);
      var picker = document.querySelector('.os-picker');
      var install = document.getElementById('install-link');
      var installNote = document.getElementById('install-note');
      var extra = document.getElementById('install-extra');
      var mirror = document.querySelector('.mirror-link');

      function showInstaller() {
        var choice = picker.querySelector('input:checked').value;
        var option = installers[choice];
        install.href = option.url || mirror.href;
        install.querySelector('span').textContent = option.label;
        installNote.textContent = option.note;
        extra.hidden = choice !== 'android';
        mirror.hidden = install.href === mirror.href;
      }

      var ua = navigator.userAgent;
      var ios = /iPhone|iPad|iPod/i.test(ua) || (/Macintosh/i.test(ua) && navigator.maxTouchPoints > 1);
      var platform = ios ? 'ios' : /Android/i.test(ua) ? 'android' : /Macintosh/i.test(ua) ? 'macos' : /Linux/i.test(ua) ? 'linux' : 'windows';
      picker.querySelector('input[value="' + platform + '"]').checked = true;
      picker.addEventListener('change', showInstaller);
      showInstaller();
      picker.hidden = false;
      document.getElementById('install-caption').hidden = false;

      document.querySelectorAll('[data-profile]').forEach(function (card) {
        var button = card.querySelector('.copy');
        var status = card.querySelector('.copy-status');
        var detail = card.querySelector('.key');
        var field = detail.querySelector('textarea');
        var open = detail.querySelector('.open');
        if (/^(vless|hysteria2|hy2):\/\//.test(field.value)) {
          open.href = field.value;
          open.hidden = false;
        }
        button.hidden = false;

        button.addEventListener('click', async function () {
          try {
            await navigator.clipboard.writeText(field.value);
            status.textContent = 'Ключ скопирован';
          } catch {
            detail.open = true;
            field.focus();
            field.select();
            status.textContent = 'Скопируйте выделенный ключ';
          }
        });
      });
    }());
  </script>
</body>
</html>`;

const profiles = [
  { id: 'auto', secret: 'VPN_AUTO', title: 'Авто', description: 'Сайты из списка открываются из России. Для остальных сервер выбирает Сингапур или Таиланд.' },
  { id: 'cascade_sg', secret: 'VPN_CASCADE_SG', title: 'Россия → Сингапур', description: 'Фиксированный выход через Сингапур для сайтов вне списка исключений.' },
  { id: 'thai', secret: 'VPN_THAI', title: 'Россия → Таиланд', description: 'Фиксированный выход через Таиланд для сайтов вне списка исключений.' },
  { id: 'direct_sg', secret: 'VPN_DIRECT_SG', title: 'Сингапур напрямую', description: 'Подключение к Сингапуру без российского сервера.' },
  { id: 'russia', secret: 'VPN_RUSSIA', title: 'Россия', description: 'Российский IP для всех сайтов.' },
  { id: 'hysteria', secret: 'VPN_HYSTERIA', title: 'Сингапур напрямую', description: 'Запасной протокол. Нужен клиент с проверкой отпечатка сертификата (pinSHA256).' },
];

const moscow = { timeZone: 'Europe/Moscow' };

function renderProfile({ id, title, description }, value) {
  const isAuto = id === 'auto';
  const isHysteria = id === 'hysteria';
  const protocol = isHysteria ? 'Hysteria 2' : 'VLESS';
  const safeValue = value.replace(/&/g, '&amp;').replace(/</g, '&lt;');
  const clientLink = isHysteria
    ? '<a href="https://github.com/apernet/hysteria/releases/latest" target="_blank" rel="noopener noreferrer">Скачать клиент Hysteria 2</a>'
    : '';
  return `          <article class="profile${isAuto ? ' featured' : ''}" data-profile="${id}">
            <div class="profile-top"><h3>${title}</h3><span class="protocol">${protocol}</span></div>
            <p>${description}</p>
            <div class="profile-actions">
              <button class="button copy${isAuto ? ' primary' : ''}" type="button" hidden><svg class="icon" aria-hidden="true"><use href="#icon-copy"></use></svg>Скопировать ключ</button>
              <span class="copy-status" role="status"></span>
            </div>
            <details class="key">
              <summary>Показать ключ</summary>
              <textarea readonly aria-label="Ключ профиля ${title}, ${protocol}">${safeValue}</textarea>
              <a class="open" hidden>Открыть в приложении</a>
              ${clientLink}
            </details>
          </article>`;
}

function renderPage(env) {
  const installers = {
    windows: { url: env.SITE_WINDOWS_URL, label: 'Скачать AmneziaVPN', note: 'Windows 10 и 11, 64 бит' },
    macos: { url: env.SITE_MACOS_URL, label: 'Скачать AmneziaVPN', note: 'macOS 13 и новее' },
    ios: { url: 'https://apps.apple.com/ru/app/defaultvpn/id6744725017', label: 'DefaultVPN в App Store', note: 'iOS 16 и новее' },
    android: { url: 'https://play.google.com/store/apps/details?id=org.amnezia.vpn', label: 'AmneziaVPN в Google Play', note: 'Android 9 и новее' },
    linux: { url: env.SITE_LINUX_URL, label: 'Скачать AmneziaVPN', note: 'Linux, 64 бит' },
    github: { url: 'https://github.com/amnezia-vpn/amnezia-client/releases/latest', label: 'Открыть релизы', note: 'Все установщики AmneziaVPN' },
  };
  const buildDate = env.SITE_BUILT_AT && new Date(env.SITE_BUILT_AT);
  const version = /^\d+\.\d+$/.test(env.SITE_VERSION) ? env.SITE_VERSION : 'локальная';
  const year = new Intl.DateTimeFormat('ru-RU', { ...moscow, year: 'numeric' }).format(buildDate || new Date());
  const buildLabel = buildDate
    ? `<p class="build"><span>Версия ${version}</span><span>Сборка <time datetime="${buildDate.toISOString()}">${new Intl.DateTimeFormat('ru-RU', { ...moscow, dateStyle: 'short', timeStyle: 'medium' }).format(buildDate)} МСК</time></span></p>`
    : '';

  const replacements = {
    PROFILE_CARDS: profiles.map(profile => renderProfile(profile, env[profile.secret])).join('\n'),
    INSTALLER_DATA: JSON.stringify(installers).replace(/</g, '\\u003c'),
    BUILD_YEAR: year,
    BUILD_LABEL: buildLabel,
  };
  return PAGE.replace(/__(PROFILE_CARDS|INSTALLER_DATA|BUILD_YEAR|BUILD_LABEL)__/g, (_, key) => replacements[key]);
}

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
    if (profiles.some(profile => !env[profile.secret])) {
      return new Response('Страница готовится. Попробуйте позже.', { status: 503, headers: { ...HEADERS, 'Content-Type': 'text/plain; charset=utf-8' } });
    }
    return new Response(renderPage(env), { headers: { ...HEADERS, 'Content-Type': 'text/html; charset=utf-8' } });
  },
};
