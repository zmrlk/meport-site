/* ============================================
   MEPORT — app.js
   Animations, typing terminal, i18n (EN/PL)
   ============================================ */

// ---- i18n TRANSLATIONS ----
const i18n = {
  en: {
    'nav.how': 'How it works',
    'nav.platforms': 'Platforms',
    'nav.pricing': 'Pricing',
    'nav.docs': 'Docs',
    'nav.quickstart': 'Quick Start',
    'nav.download': 'Download',
    'nav.coffee_title': 'Buy us a coffee',

    'hero.eyebrow': 'Open source \u00b7 Local-first \u00b7 Free forever',
    'hero.title1': 'Teach every AI',
    'hero.title2': 'who you are.',
    'hero.sub': 'Drop your files, answer a few questions, and Meport creates your personal ruleset for 15+ AI tools. Five minutes. One profile. Every AI finally gets you.',
    'hero.cta': 'Get Started',
    'hero.cta_dl': 'Download App',
    'hero.scan.label': 'Getting to know you...',
    'hero.scan.files': 'files',
    'hero.scan.folders': 'folders',
    'hero.scan.docs': 'documents',
    'hero.scan.projects': 'projects',
    'hero.q.text': 'How direct should AI be with you?',
    'hero.q.o1': 'Very direct \u2713',
    'hero.q.o2': 'Balanced',
    'hero.q.o3': 'Gentle',
    'hero.export.label': 'Export to your AI tools',
    'hero.export.ready': 'Ready',
    'hero.export.ollama': 'Local, runs offline',
    'hero.done.title': 'Profile ready',
    'hero.done.sub': '7 rules generated from your answers',
    'hero.done.copy': 'Copy rules',

    'trust.label': 'Works with the tools you already use',

    'diff.eyebrow': 'Before & After',
    'diff.heading': 'The difference is <em>instant</em>',
    'diff.sub': 'Same person. Same question. Same AI.',
    'diff.without': 'Without Meport',
    'diff.with': 'With Meport',
    'diff.q': '\u201cPlan me a weekend trip with my dog\u201d',
    'diff.a_bad': 'I\u2019d love to help! \ud83c\udf89 Where are you traveling from? What\u2019s your budget? Mountains or sea? What breed is your dog?<br><br>Here are 10 popular dog-friendly destinations...<br><br>Let me know! \ud83d\ude0a\ud83d\udc3e',
    'diff.a_good': '<em>Krak\u00f3w, mountains, labrador</em> \u2014 budget ~$120.<br><br><strong>Szczawnica</strong>, 2h drive. No crowds.<br>Cabin with garden, dogs OK, $70/night.<br>Saturday: river rafting + easy trail \u2014 dog friendly.<br>Sunday: terrace breakfast, walk, drive home.<br><br><strong>~$115 total.</strong> Book it?',
    'diff.verdict_bad': 'Questions instead of answers. Generic list.',
    'diff.verdict_good': 'Knows you, your dog, your budget. Just answers.',

    'how.eyebrow': 'How it works',
    'how.heading': 'Three steps. <em>Five minutes.</em>',
    'how.s1.title': 'Drop your files',
    'how.s1.desc': 'CV, notes, bookmarks, chat exports \u2014 anything you have about yourself. Meport reads them on your machine and builds your profile. Nothing is uploaded.',
    'how.s2.title': 'Answer a few questions',
    'how.s2.desc': "Your files fill most of it automatically. Meport only asks about what\u2019s missing \u2014 a few quick questions, not a long survey.",
    'how.s3.title': 'Export everywhere',
    'how.s3.desc': 'Pick the AI tools you use. Meport sends your profile in the right format for each one. ChatGPT, Claude, Cursor, Copilot \u2014 all supported.',

    'qs.eyebrow': 'Quick Start',
    'qs.heading': 'Choose your <em>path.</em>',
    'qs.sub': 'Whether you\'ve never touched a terminal or you live in one \u2014 Meport has you covered.',
    'qs.app.badge': 'No experience needed',
    'qs.app.title': 'Desktop App',
    'qs.app.desc': 'Download, open, drag your files. That\'s it. No terminal, no config, no technical knowledge required.',
    'qs.app.s1': 'Download the app',
    'qs.app.s2': 'Drag your files (CV, notes, anything)',
    'qs.app.s3': 'Pick your AI \u2014 done',
    'qs.app.cta': 'Download App',
    'qs.cli.badge': 'For developers',
    'qs.cli.title': 'CLI',
    'qs.cli.desc': 'One command. Scans your files, builds your profile, exports everywhere. Pipe-friendly, scriptable.',
    'qs.cli.s2': 'Scan files or answer questions',

    'plat.eyebrow': 'Platforms',
    'plat.heading': 'One profile. <em>Every AI.</em>',
    'plat.chat': 'Chat AI',
    'plat.dev': 'Developer Tools',
    'plat.local': 'Local AI',
    'plat.universal': 'Universal',

    'feat.eyebrow': 'Features',
    'feat.heading': 'Built different. <em>On purpose.</em>',
    'feat.f1.title': 'Dimensions',
    'feat.f1.desc': 'Communication style, thinking patterns, work habits, personal preferences. The full picture of who you are.',
    'feat.f2.title': 'Auto-filled',
    'feat.f2.desc': 'Drop your files. AI extracts your profile automatically. Only 7 questions for the rest.',
    'feat.f3.title': 'Not 85',
    'feat.f3.desc': 'Competitors ask 555 questions. Meport scans your files and asks what\u2019s missing.',
    'feat.f4.title': 'Exports',
    'feat.f4.desc': 'Native formats for every platform. Not copy-paste text. Real integration files.',
    'feat.f5.p1': 'Zero servers',
    'feat.f5.p2': 'Zero accounts',
    'feat.f5.p3': 'Zero tracking',
    'feat.f5.title': 'Your machine. Your data. Your choice.',
    'feat.f5.desc': "We don\u2019t have servers. Profiling runs locally. When AI helps build your profile, it talks directly to your chosen provider (Claude, OpenAI) or Ollama for fully offline mode. No middleman.",
    'feat.f6.p0': 'Human-first',
    'feat.f6.p1': 'Living profile',
    'feat.f6.title': 'Built for real people. Open source. Evolving.',
    'feat.f6.desc': 'No lengthy questionnaires. No overwhelming setup. Full source code. Your profile grows with you \u2014 not a one-time quiz.',

    'tracks.eyebrow': 'Pricing',
    'tracks.heading': 'For you. <em>And your business.</em>',
    'tracks.p.title': 'Make AI actually get you',
    'tracks.p.l1': '143 personality dimensions',
    'tracks.p.l2': 'Designed for real people',
    'tracks.p.l3': 'File scanning (CV, notes, bookmarks)',
    'tracks.p.l4': '15+ platform exports',
    'tracks.p.l5': 'Progressive profile \u2014 grows with you',
    'tracks.p.l6': 'Ollama \u2014 fully offline',
    'tracks.p.price': 'Free forever',
    'tracks.p.cta': 'Get Started',
    'tracks.b.title': 'Train any AI with your brand',
    'tracks.b.l1': 'Company profiling from docs & website',
    'tracks.b.l2': 'Brand voice extraction',
    'tracks.b.l3': 'Product catalog + FAQ scanning',
    'tracks.b.l4': 'Chatbot & AI agent exports',
    'tracks.b.l5': 'Customer profile (ICP) generation',
    'tracks.b.l6': 'RAG-ready knowledge base',
    'tracks.b.price_note': 'one-time',
    'tracks.b.cta': 'Get Business',

    'price.eyebrow': 'Pricing',
    'price.heading': 'Every feature. <em>$0.</em>',
    'price.p.note': 'Free forever. Not a trial.',
    'price.p.l1': 'Full 143-dimension profiling',
    'price.p.l2': 'All 15+ platform exports',
    'price.p.l3': 'File-based scanning',
    'price.p.l4': 'CLI + Desktop App',
    'price.p.l5': 'Ollama offline support',
    'price.p.l6': 'Open source (MIT)',
    'price.p.cta': 'Get Started',
    'price.b.popular': 'Most popular',
    'price.b.note': 'One-time. Per company.',
    'price.b.l1': 'Everything in Personal',
    'price.b.l2': 'Company profiling (docs + web)',
    'price.b.l3': 'Brand voice extraction',
    'price.b.l4': 'Chatbot & agent exports',
    'price.b.l5': 'Multi-company profiles',
    'price.b.l6': 'Commercial license',
    'price.b.cta': 'Get Business',

    'story.eyebrow': 'Origin',
    'story.heading': 'Why I built <em>Meport</em>',
    'story.p1': 'I use 5 AI tools every day. ChatGPT, Claude, Cursor, Copilot, Gemini.',
    'story.p2': 'Every single one treats me like a stranger.',
    'story.p3': "I need short responses, bullet points, no fluff. I\u2019m a developer \u2014 I want code, not explanations. I think in systems \u2014 give me architecture, not tutorials.",
    'story.p4': 'I spent 30 minutes writing custom instructions for ChatGPT. Then did it again for Claude. And Cursor. And Copilot. Different formats. Different limits. Different rules.',
    'story.p5': 'When I switched tools, I started from zero. Again.',
    'story.p6': 'So I built Meport.',
    'story.p7': 'One command. Drop your files. 143 dimensions of who you are. Export to 15+ platforms. Everything local. Everything free. Everything open source.',
    'story.role': 'Creator of Meport \u00b7 ISIKO',

    'compare.eyebrow': 'Choose your way',
    'compare.heading': 'CLI, Desktop, Web, <em>or MCP.</em>',
    'compare.sub': 'Same engine. Same profile. Pick the interface you prefer.',
    'compare.feature': 'Feature',
    'compare.r1': 'Profiling (questions)',
    'compare.r2': 'File scanning',
    'compare.r3': 'AI interview',
    'compare.r4': 'Export to 15+ platforms',
    'compare.r5': 'Auto-deploy to tools',
    'compare.r6': 'Profile editing',
    'compare.r7': 'Question packs',
    'compare.r8': 'Inference engine',
    'compare.r9': 'Offline mode (Ollama)',
    'compare.r10': 'GUI / drag & drop',
    'compare.r11': 'Works without terminal',
    'compare.r12': 'Business track',
    'compare.r13': 'Read profile via API',
    'compare.r14': 'Serve profile to AI tools',
    'compare.r15': 'Live profile updates',
    'compare.limited': 'Limited',

    'nav.compare': 'Compare',

    'priv.eyebrow': 'Privacy',
    'priv.heading': 'Your data stays <em>yours.</em>',
    'priv.sub': 'No servers. No accounts. No tracking. Here\u2019s exactly what happens with your data.',
    'priv.local.title': '100% local processing',
    'priv.local.desc': 'Meport runs entirely on your machine. Your profile, your files, your answers \u2014 everything stays in a local JSON file. We don\u2019t have servers to send data to.',
    'priv.scan.title': 'What we read',
    'priv.scan.desc': 'When you drop files (CV, notes, bookmarks), Meport reads them locally to extract profile dimensions. It looks for: occupation, skills, interests, communication patterns. Files are never uploaded anywhere.',
    'priv.filter.title': 'Privacy filter',
    'priv.filter.desc': 'Before any AI processing, a built-in filter blocks sensitive patterns: passwords, financial data, medical records, legal documents, identity numbers. This runs automatically \u2014 you can\u2019t disable it.',
    'priv.ai.title': 'When AI is used',
    'priv.ai.desc': 'AI is optional \u2014 only used if you choose AI interview mode or Layer 3 insights. When used, filtered profile data goes directly to YOUR chosen provider (Claude, OpenAI, or Ollama for fully offline). Meport is never a middleman.',
    'priv.export.title': 'What exports contain',
    'priv.export.desc': 'Exports are plain text rules like "Max 5 lines for simple questions" or "Skip praise." They contain behavioral preferences, not personal data. No names, addresses, or sensitive info goes into exports.',
    'priv.offline.title': 'Fully offline option',
    'priv.offline.desc': 'Use Ollama as your AI provider and nothing ever leaves your machine. Zero network requests. Zero telemetry. The entire profiling pipeline runs without internet.',

    'dl.title': 'Meport yourself.',
    'dl.sub': 'Five minutes. One profile. Every AI finally gets you.',
    'dl.app.title': 'Desktop App',
    'dl.app.desc': 'Drag & drop. Zero setup. For everyone. No terminal needed.',
    'dl.cli.title': 'CLI',
    'dl.cli.desc': 'For developers. Full power. One command.',
    'dl.cli.sub': '23 commands \u00b7 9 question packs \u00b7 15+ exports',
    'dl.web.title': 'Web App',
    'dl.web.desc': 'Profile creation in the browser. Nothing to install.',
    'dl.coming': 'Coming soon',
    'dl.docs': 'Documentation',
    'dl.coffee': 'Buy us a coffee',

    'footer.tagline': 'Your AI identity. Portable. Private. Free.',
    'footer.product': 'Product',
    'footer.developers': 'Developers',
    'footer.community': 'Community',
    'footer.coffee': 'Buy us a coffee',
    'footer.bottom': 'Created by <a href="https://isiko.pl" target="_blank" rel="noopener">ISIKO</a> with <a href="https://github.com/zmrlk/bOS" target="_blank" rel="noopener">bOS CLI</a> \u00b7 meport.app \u00b7 2026',
  },

  pl: {
    'nav.how': 'Jak to dzia\u0142a',
    'nav.platforms': 'Platformy',
    'nav.pricing': 'Cennik',
    'nav.docs': 'Dokumentacja',
    'nav.quickstart': 'Szybki start',
    'nav.download': 'Pobierz',
    'nav.coffee_title': 'Postaw nam kaw\u0119',

    'hero.eyebrow': 'Open source \u00b7 Lokalne \u00b7 Zawsze za darmo',
    'hero.title1': 'Naucz ka\u017cde AI',
    'hero.title2': 'kim jeste\u015b.',
    'hero.sub': 'Wrzu\u0107 pliki, odpowiedz na kilka pyta\u0144, a Meport stworzy Tw\u00f3j osobisty zestaw regu\u0142 dla 20+ narz\u0119dzi AI. Pi\u0119\u0107 minut. Jeden profil. Ka\u017cde AI wreszcie Ci\u0119 rozumie.',
    'hero.cta': 'Zacznij',
    'hero.cta_dl': 'Pobierz apk\u0119',
    'hero.scan.label': 'Poznaję Cię...',
    'hero.scan.files': 'plik\u00f3w',
    'hero.scan.folders': 'folder\u00f3w',
    'hero.scan.docs': 'dokument\u00f3w',
    'hero.scan.projects': 'projekty',
    'hero.q.text': 'Jak bezpo\u015brednio AI ma z Tob\u0105 rozmawia\u0107?',
    'hero.q.o1': 'Bardzo bezpo\u015brednio \u2713',
    'hero.q.o2': 'Zbalansowanie',
    'hero.q.o3': 'Delikatnie',
    'hero.export.label': 'Eksportuj do swoich narz\u0119dzi AI',
    'hero.export.ready': 'Gotowe',
    'hero.export.ollama': 'Lokalny, dzia\u0142a offline',
    'hero.done.title': 'Profil gotowy',
    'hero.done.sub': '7 regu\u0142 wygenerowanych z Twoich odpowiedzi',
    'hero.done.copy': 'Kopiuj regu\u0142y',

    'trust.label': 'Dzia\u0142a z narz\u0119dziami, kt\u00f3rych ju\u017c u\u017cywasz',

    'diff.eyebrow': 'Przed i po',
    'diff.heading': 'R\u00f3\u017cnica jest <em>natychmiastowa</em>',
    'diff.sub': 'Ta sama osoba. To samo pytanie. To samo AI.',
    'diff.without': 'Bez Meport',
    'diff.with': 'Z Meport',
    'diff.q': '\u201eZaplanuj mi wyjazd z psem na weekend\u201d',
    'diff.a_bad': 'Ch\u0119tnie pomog\u0119! \ud83c\udf89 Sk\u0105d wyje\u017cd\u017casz? Jaki bud\u017cet? G\u00f3ry czy morze? Jaka rasa psa?<br><br>Oto 10 popularnych miejsc dog-friendly...<br><br>Daj zna\u0107! \ud83d\ude0a\ud83d\udc3e',
    'diff.a_good': '<em>Krak\u00f3w, g\u00f3ry, labrador</em> \u2014 bud\u017cet ~500 z\u0142.<br><br><strong>Szczawnica</strong>, 2h autem. Zero t\u0142um\u00f3w.<br>Domek z ogr\u00f3dkiem, psy OK, 280 z\u0142/noc.<br>Sobota: sp\u0142yw Dunajcem + szlak \u2014 pies wejdzie.<br>Niedziela: \u015bniadanie na tarasie, spacer, powr\u00f3t.<br><br><strong>~480 z\u0142 z paliwem.</strong> Zarezerwowa\u0107?',
    'diff.verdict_bad': 'Pytania zamiast odpowiedzi. Generyczna lista.',
    'diff.verdict_good': 'Zna Ciebie, Twojego psa, Tw\u00f3j bud\u017cet. Po prostu odpowiada.',

    'how.eyebrow': 'Jak to dzia\u0142a',
    'how.heading': 'Trzy kroki. <em>Pi\u0119\u0107 minut.</em>',
    'how.s1.title': 'Wrzu\u0107 pliki',
    'how.s1.desc': 'CV, notatki, zak\u0142adki, eksporty czat\u00f3w \u2014 cokolwiek masz o sobie. Meport czyta je na Twoim komputerze i buduje profil. Nic nie jest wysy\u0142ane.',
    'how.s2.title': 'Odpowiedz na kilka pyta\u0144',
    'how.s2.desc': 'Pliki wype\u0142niaj\u0105 wi\u0119kszo\u015b\u0107 automatycznie. Meport pyta tylko o brakuj\u0105ce \u2014 kilka szybkich pyta\u0144, nie d\u0142uga ankieta.',
    'how.s3.title': 'Eksportuj wsz\u0119dzie',
    'how.s3.desc': 'Wybierz narz\u0119dzia AI, kt\u00f3rych u\u017cywasz. Meport wy\u015ble profil w odpowiednim formacie. ChatGPT, Claude, Cursor, Copilot \u2014 wspierane.',

    'qs.eyebrow': 'Szybki start',
    'qs.heading': 'Wybierz swoj\u0105 <em>\u015bcie\u017ck\u0119.</em>',
    'qs.sub': 'Niezale\u017cnie czy nigdy nie u\u017cywa\u0142e\u015b terminala, czy \u017cyjesz w nim \u2014 Meport jest dla Ciebie.',
    'qs.app.badge': 'Zero do\u015bwiadczenia',
    'qs.app.title': 'Aplikacja',
    'qs.app.desc': 'Pobierz, otw\u00f3rz, wrzu\u0107 pliki. To wszystko. Bez terminala, bez konfiguracji, bez wiedzy technicznej.',
    'qs.app.s1': 'Pobierz aplikacj\u0119',
    'qs.app.s2': 'Wrzu\u0107 pliki (CV, notatki, cokolwiek)',
    'qs.app.s3': 'Wybierz swoje AI \u2014 gotowe',
    'qs.app.cta': 'Pobierz apk\u0119',
    'qs.cli.badge': 'Dla developer\u00f3w',
    'qs.cli.title': 'CLI',
    'qs.cli.desc': 'Jedno polecenie. Skanuje pliki, buduje profil, eksportuje wsz\u0119dzie. Pipe-friendly, skryptowalny.',
    'qs.cli.s2': 'Skanuj pliki lub odpowiadaj na pytania',

    'plat.eyebrow': 'Platformy',
    'plat.heading': 'Jeden profil. <em>Ka\u017cde AI.</em>',
    'plat.chat': 'Chat AI',
    'plat.dev': 'Narz\u0119dzia programistyczne',
    'plat.local': 'Lokalne AI',
    'plat.universal': 'Uniwersalne',

    'feat.eyebrow': 'Funkcje',
    'feat.heading': 'Inny z za\u0142o\u017cenia. <em>Celowo.</em>',
    'feat.f1.title': 'Wymiar\u00f3w',
    'feat.f1.desc': 'Styl komunikacji, wzorce my\u015blenia, nawyki pracy, osobiste preferencje. Pe\u0142ny obraz tego, kim jeste\u015b.',
    'feat.f2.title': 'Automatycznie',
    'feat.f2.desc': 'Wrzu\u0107 pliki. AI tworzy profil automatycznie. Tylko 7 pyta\u0144 na reszt\u0119.',
    'feat.f3.title': 'Nie 85',
    'feat.f3.desc': 'Konkurencja pyta 555 pyta\u0144. Meport skanuje pliki i pyta o brakuj\u0105ce.',
    'feat.f4.title': 'Eksport\u00f3w',
    'feat.f4.desc': 'Natywne formaty dla ka\u017cdej platformy. Nie copy-paste. Prawdziwe pliki integracji.',
    'feat.f5.p1': 'Zero serwer\u00f3w',
    'feat.f5.p2': 'Zero kont',
    'feat.f5.p3': 'Zero \u015bledzenia',
    'feat.f5.title': 'Tw\u00f3j komputer. Twoje dane. Tw\u00f3j wyb\u00f3r.',
    'feat.f5.desc': 'Nie mamy serwer\u00f3w. Profilowanie dzia\u0142a lokalnie. Gdy AI pomaga budowa\u0107 profil, rozmawia bezpo\u015brednio z Twoim dostawc\u0105 (Claude, OpenAI) lub Ollama w trybie pe\u0142nego offline.',
    'feat.f6.p0': 'Human-first',
    'feat.f6.p1': '\u017bywy profil',
    'feat.f6.title': 'Dla prawdziwych ludzi. Open source. Ewoluuj\u0105ce.',
    'feat.f6.desc': 'Bez d\u0142ugich ankiet. Zero przyt\u0142oczenia. Pe\u0142ny kod \u017ar\u00f3d\u0142owy. Profil ro\u015bnie z Tob\u0105 \u2014 to nie jednorazowy quiz.',

    'tracks.eyebrow': 'Cennik',
    'tracks.heading': 'Dla Ciebie. <em>I Twojej firmy.</em>',
    'tracks.p.title': 'Niech AI wreszcie Ci\u0119 zrozumie',
    'tracks.p.l1': '143 wymiary osobowo\u015bci',
    'tracks.p.l2': 'Dla prawdziwych ludzi',
    'tracks.p.l3': 'Skanowanie plik\u00f3w (CV, notatki, zak\u0142adki)',
    'tracks.p.l4': '20+ eksport\u00f3w',
    'tracks.p.l5': 'Profil ro\u015bnie z Tob\u0105',
    'tracks.p.l6': 'Ollama \u2014 pe\u0142ny offline',
    'tracks.p.price': 'Za darmo. Zawsze.',
    'tracks.p.cta': 'Zacznij',
    'tracks.b.title': 'Naucz AI swojej marki',
    'tracks.b.l1': 'Profilowanie firmy z dok\u00f3w i strony',
    'tracks.b.l2': 'Ekstrakcja g\u0142osu marki',
    'tracks.b.l3': 'Katalog produkt\u00f3w + FAQ',
    'tracks.b.l4': 'Eksport do chatbot\u00f3w i agent\u00f3w AI',
    'tracks.b.l5': 'Profil klienta (ICP)',
    'tracks.b.l6': 'Baza wiedzy pod RAG',
    'tracks.b.price_note': 'jednorazowo',
    'tracks.b.cta': 'Business',

    'price.eyebrow': 'Cennik',
    'price.heading': 'Wszystkie funkcje. <em>$0.</em>',
    'price.p.note': 'Za darmo. Na zawsze. Nie trial.',
    'price.p.l1': 'Pe\u0142ne profilowanie 143 wymiar\u00f3w',
    'price.p.l2': 'Wszystkie 20+ eksport\u00f3w',
    'price.p.l3': 'Skanowanie plik\u00f3w',
    'price.p.l4': 'CLI + Aplikacja desktopowa',
    'price.p.l5': 'Ollama offline',
    'price.p.l6': 'Open source (MIT)',
    'price.p.cta': 'Zacznij',
    'price.b.popular': 'Najpopularniejszy',
    'price.b.note': 'Jednorazowo. Na firm\u0119.',
    'price.b.l1': 'Wszystko z Personal',
    'price.b.l2': 'Profilowanie firmy (docs + web)',
    'price.b.l3': 'Ekstrakcja g\u0142osu marki',
    'price.b.l4': 'Eksport do chatbot\u00f3w i agent\u00f3w',
    'price.b.l5': 'Wiele profili firm',
    'price.b.l6': 'Licencja komercyjna',
    'price.b.cta': 'Business',

    'story.eyebrow': 'Historia',
    'story.heading': 'Dlaczego zbudowa\u0142em <em>Meport</em>',
    'story.p1': 'U\u017cywam 5 narz\u0119dzi AI dziennie. ChatGPT, Claude, Cursor, Copilot, Gemini.',
    'story.p2': 'Ka\u017cde z nich traktuje mnie jak obcego.',
    'story.p3': 'Potrzebuj\u0119 kr\u00f3tkich odpowiedzi, punkt\u00f3w, zero lania wody. Jestem programist\u0105 \u2014 chc\u0119 kod, nie t\u0142umaczenie co to kod. My\u015bl\u0119 systemami \u2014 dajcie architektur\u0119, nie tutoriale.',
    'story.p4': 'Sp\u0119dzi\u0142em 30 minut pisz\u0105c custom instructions dla ChatGPT. Potem powtarzaj\u0105c to dla Claude. I Cursor. I Copilot. R\u00f3\u017cne formaty. R\u00f3\u017cne limity. R\u00f3\u017cne zasady.',
    'story.p5': 'Gdy zmieni\u0142em narz\u0119dzie, zaczyna\u0142em od zera. Znowu.',
    'story.p6': 'Wi\u0119c zbudowa\u0142em Meport.',
    'story.p7': 'Jedno polecenie. Wrzu\u0107 pliki. 143 wymiary tego, kim jeste\u015b. Eksport na 15+ platform. Wszystko lokalne. Wszystko za darmo. Wszystko open source.',
    'story.role': 'Tw\u00f3rca Meport \u00b7 ISIKO',

    'compare.eyebrow': 'Wybierz sw\u00f3j spos\u00f3b',
    'compare.heading': 'CLI, Desktop, Web <em>czy MCP.</em>',
    'compare.sub': 'Ten sam silnik. Ten sam profil. Wybierz interfejs.',
    'compare.feature': 'Funkcja',
    'compare.r1': 'Profilowanie (pytania)',
    'compare.r2': 'Skanowanie plik\u00f3w',
    'compare.r3': 'Wywiad AI',
    'compare.r4': 'Eksport na 15+ platform',
    'compare.r5': 'Auto-deploy do narz\u0119dzi',
    'compare.r6': 'Edycja profilu',
    'compare.r7': 'Paczki pyta\u0144',
    'compare.r8': 'Silnik wnioskowania',
    'compare.r9': 'Tryb offline (Ollama)',
    'compare.r10': 'GUI / drag & drop',
    'compare.r11': 'Dzia\u0142a bez terminala',
    'compare.r12': 'Profil biznesowy',
    'compare.r13': 'Odczyt profilu przez API',
    'compare.r14': 'Serwowanie profilu do narz\u0119dzi AI',
    'compare.r15': 'Aktualizacje profilu na \u017cywo',
    'compare.limited': 'Ograniczone',

    'nav.compare': 'Por\u00f3wnaj',

    'priv.eyebrow': 'Prywatno\u015b\u0107',
    'priv.heading': 'Twoje dane zostaj\u0105 <em>u Ciebie.</em>',
    'priv.sub': 'Bez serwer\u00f3w. Bez kont. Bez \u015bledzenia. Oto dok\u0142adnie, co dzieje si\u0119 z Twoimi danymi.',
    'priv.local.title': '100% lokalne przetwarzanie',
    'priv.local.desc': 'Meport dzia\u0142a ca\u0142kowicie na Twoim komputerze. Tw\u00f3j profil, pliki, odpowiedzi \u2014 wszystko zostaje w lokalnym pliku JSON. Nie mamy serwer\u00f3w, na kt\u00f3re mogliby\u015bmy cokolwiek wys\u0142a\u0107.',
    'priv.scan.title': 'Co czytamy',
    'priv.scan.desc': 'Gdy wrzucasz pliki (CV, notatki, zak\u0142adki), Meport czyta je lokalnie, szukaj\u0105c: zawodu, umiej\u0119tno\u015bci, zainteresowa\u0144, styl\u00f3w komunikacji. Pliki nigdy nie s\u0105 nigdzie wysy\u0142ane.',
    'priv.filter.title': 'Filtr prywatno\u015bci',
    'priv.filter.desc': 'Przed jakimkolwiek przetwarzaniem AI, wbudowany filtr blokuje wra\u017cliwe wzorce: has\u0142a, dane finansowe, dokumenty medyczne, prawne, numery identyfikacyjne. Dzia\u0142a automatycznie \u2014 nie mo\u017cna go wy\u0142\u0105czy\u0107.',
    'priv.ai.title': 'Kiedy u\u017cywamy AI',
    'priv.ai.desc': 'AI jest opcjonalne \u2014 u\u017cywane tylko w trybie wywiadu AI lub wgl\u0105d\u00f3w Layer 3. Przefiltrowane dane id\u0105 bezpo\u015brednio do TWOJEGO dostawcy (Claude, OpenAI lub Ollama do pe\u0142nego offline). Meport nigdy nie jest po\u015brednikiem.',
    'priv.export.title': 'Co zawieraj\u0105 eksporty',
    'priv.export.desc': 'Eksporty to regu\u0142y tekstowe jak \u201eMax 5 linijek\u201d czy \u201eBez pochwa\u0142\u201d. Zawieraj\u0105 preferencje behawioralne, nie dane osobowe. \u017badnych imion, adres\u00f3w ani wra\u017cliwych informacji.',
    'priv.offline.title': 'Pe\u0142ny tryb offline',
    'priv.offline.desc': 'U\u017cyj Ollama jako dostawcy AI i nic nigdy nie opu\u015bci Twojego komputera. Zero zapyta\u0144 sieciowych. Zero telemetrii. Ca\u0142y pipeline profilowania dzia\u0142a bez internetu.',

    'dl.title': 'Meportuj si\u0119.',
    'dl.sub': 'Pi\u0119\u0107 minut. Jeden profil. Ka\u017cde AI wreszcie Ci\u0119 rozumie.',
    'dl.app.title': 'Aplikacja desktopowa',
    'dl.app.desc': 'Drag & drop. Zero konfiguracji. Dla ka\u017cdego. Bez terminala.',
    'dl.cli.title': 'CLI',
    'dl.cli.desc': 'Dla developer\u00f3w. Pe\u0142na moc. Jedno polecenie.',
    'dl.cli.sub': '23 komendy \u00b7 9 paczek pyta\u0144 \u00b7 15+ eksport\u00f3w',
    'dl.web.title': 'Aplikacja webowa',
    'dl.web.desc': 'Tworzenie profilu w przegl\u0105darce. Nic do instalacji.',
    'dl.coming': 'Wkr\u00f3tce',
    'dl.docs': 'Dokumentacja',
    'dl.coffee': 'Postaw nam kaw\u0119',

    'footer.tagline': 'Twoja to\u017csamo\u015b\u0107 AI. Przeno\u015bna. Prywatna. Darmowa.',
    'footer.product': 'Produkt',
    'footer.developers': 'Developerzy',
    'footer.community': 'Spo\u0142eczno\u015b\u0107',
    'footer.coffee': 'Postaw nam kaw\u0119',
    'footer.bottom': 'Stworzone przez <a href="https://isiko.pl" target="_blank" rel="noopener">ISIKO</a> z pomoc\u0105 <a href="https://github.com/zmrlk/bOS" target="_blank" rel="noopener">bOS CLI</a> \u00b7 meport.app \u00b7 2026',
  }
};

// ---- HERO QUESTIONS (7 questions + rules, i18n) ----
const heroQuestionsI18n = {
  en: [
    { q: 'How direct should AI be with you?',
      opts: ['Very direct', 'Balanced', 'Gentle'],
      rules: ['Be extremely direct. No softening.', 'Be direct but diplomatic.', 'Be gentle and considerate.'] },
    { q: 'How should AI format responses?',
      opts: ['Bullet points', 'Short paragraphs', 'Detailed'],
      rules: ['Use bullet points. Keep it scannable.', 'Use short paragraphs. Clear and readable.', 'Give detailed explanations with examples.'] },
    { q: 'When you ask for help, what first?',
      opts: ['The answer', 'Context first', 'Options to choose'],
      rules: ['Give the answer first, explain after.', 'Provide context before the solution.', 'Present options. Let me decide.'] },
    { q: 'How should AI handle mistakes?',
      opts: ['Tell me immediately', 'Suggest gently', 'Ask first'],
      rules: ['Point out errors immediately. No sugar-coating.', 'Suggest corrections diplomatically.', 'Ask before correcting anything.'] },
    { q: 'What tone works best for you?',
      opts: ['Professional', 'Casual', 'Match my tone'],
      rules: ['Keep a professional tone.', 'Be casual and friendly.', 'Match my tone and energy.'] },
    { q: 'Code or explanation?',
      opts: ['Code first', 'Explain first', 'Both equally'],
      rules: ['Show code first. Explain only if asked.', 'Explain the concept, then show code.', 'Balance code and explanation equally.'] },
    { q: 'How long should answers be?',
      opts: ['As short as possible', 'Medium length', 'As detailed as needed'],
      rules: ['Keep responses under 5 lines for simple questions.', 'Aim for medium-length responses.', 'Be thorough. Cover edge cases.'] },
  ],
  pl: [
    { q: 'Jak bezpo\u015brednio AI ma z Tob\u0105 rozmawia\u0107?',
      opts: ['Bardzo bezpo\u015brednio', 'Zbalansowanie', 'Delikatnie'],
      rules: ['B\u0105d\u017a ekstremalnie bezpo\u015bredni. Bez zmi\u0119kczania.', 'B\u0105d\u017a bezpo\u015bredni, ale dyplomatyczny.', 'B\u0105d\u017a delikatny i taktowny.'] },
    { q: 'Jak AI powinno formatowa\u0107 odpowiedzi?',
      opts: ['Punktory', 'Kr\u00f3tkie akapity', 'Szczeg\u00f3\u0142owo'],
      rules: ['U\u017cywaj punkt\u00f3w. Zwi\u0119\u017ale.', 'U\u017cywaj kr\u00f3tkich akapit\u00f3w. Czytelnie.', 'Dawaj szczeg\u00f3\u0142owe wyja\u015bnienia z przyk\u0142adami.'] },
    { q: 'Gdy prosisz o pomoc, co najpierw?',
      opts: ['Odpowied\u017a', 'Najpierw kontekst', 'Opcje do wyboru'],
      rules: ['Daj odpowied\u017a od razu, wyja\u015bnij potem.', 'Daj kontekst przed rozwi\u0105zaniem.', 'Przedstaw opcje. Ja zdecyduj\u0119.'] },
    { q: 'Jak AI powinno reagowa\u0107 na b\u0142\u0119dy?',
      opts: ['Powiedz od razu', 'Zasugeruj delikatnie', 'Zapytaj najpierw'],
      rules: ['Wska\u017c b\u0142\u0119dy natychmiast. Bez owijania.', 'Sugeruj poprawki dyplomatycznie.', 'Zapytaj zanim cokolwiek poprawisz.'] },
    { q: 'Jaki ton Ci odpowiada?',
      opts: ['Profesjonalny', 'Swobodny', 'Dopasuj si\u0119'],
      rules: ['Utrzymuj profesjonalny ton.', 'B\u0105d\u017a swobodny i przyjazny.', 'Dopasuj si\u0119 do mojego tonu.'] },
    { q: 'Kod czy wyja\u015bnienie?',
      opts: ['Najpierw kod', 'Najpierw wyja\u015bnienie', 'Oba r\u00f3wno'],
      rules: ['Poka\u017c kod. Wyja\u015bniaj tylko je\u015bli zapytam.', 'Wyja\u015bnij koncept, potem poka\u017c kod.', 'Balansuj kod i wyja\u015bnienia r\u00f3wno.'] },
    { q: 'Jak d\u0142ugie powinny by\u0107 odpowiedzi?',
      opts: ['Jak najkr\u00f3tsze', '\u015arednie', 'Tak szczeg\u00f3\u0142owe jak trzeba'],
      rules: ['Odpowiedzi poni\u017cej 5 linii na proste pytania.', 'Celuj w \u015bredni\u0105 d\u0142ugo\u015b\u0107 odpowiedzi.', 'B\u0105d\u017a dok\u0142adny. Pokryj edge case\u2019y.'] },
  ]
};
function getHeroQuestions() {
  const lang = localStorage.getItem('meport-lang') || 'en';
  return heroQuestionsI18n[lang] || heroQuestionsI18n.en;
}

// ---- INIT ----
document.addEventListener('DOMContentLoaded', () => {

  // -- Language --
  let lang = localStorage.getItem('meport-lang') || 'en';
  setLang(lang, false);

  document.getElementById('lang-switch').addEventListener('click', (e) => {
    const option = e.target.closest('.lang-option');
    if (!option) return;
    const newLang = option.dataset.lang;
    if (newLang && newLang !== lang) {
      lang = newLang;
      localStorage.setItem('meport-lang', lang);
      setLang(lang, true);
    }
  });

  // -- Reveal on scroll --
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  reveals.forEach(el => observer.observe(el));

  // -- Nav scroll --
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  // -- Mobile nav --
  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');
  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
    toggle.classList.toggle('active');
  });

  // close mobile nav on link click
  links.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.classList.remove('active');
    });
  });

  // -- Smooth scroll --
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // -- CLI copy --
  document.querySelectorAll('.cli-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      const code = pill.querySelector('code').textContent;
      navigator.clipboard.writeText(code).then(() => {
        pill.classList.add('copied');
        setTimeout(() => pill.classList.remove('copied'), 1500);
      });
    });
  });

  // ---- HERO TERMINAL ANIMATION (looping) ----
  const ptBody = document.getElementById('pt-body');
  if (ptBody) {
    const lines = [
      { html: '<span class="tc-g">$</span> npx meport', d: 0 },
      { html: '&nbsp;', d: 300 },
      { html: '<span class="tc-a">M\u2192</span> <span class="tc-w">Meport v0.1.0</span>', d: 500 },
      { html: '&nbsp;', d: 700 },
      { html: '<span class="tc-d">Scanning files...</span>', d: 900 },
      { html: '<span class="tc-ok">\u2713</span> CV.pdf \u2014 23 dimensions extracted', d: 1400 },
      { html: '<span class="tc-ok">\u2713</span> notes.md \u2014 14 dimensions extracted', d: 1900 },
      { html: '<span class="tc-ok">\u2713</span> bookmarks.html \u2014 8 dimensions extracted', d: 2400 },
      { html: '&nbsp;', d: 2600 },
      { html: '<span class="tc-d">Profiling... 5 questions remaining</span>', d: 2800 },
      { html: '<span class="tc-ok">\u2713</span> Profile complete \u2014 <span class="tc-w">118 / 143 dimensions</span>', d: 3600 },
      { html: '&nbsp;', d: 3800 },
      { html: '<span class="tc-d">Exporting...</span>', d: 4000 },
      { html: '<span class="tc-ok">\u2713</span> ChatGPT \u00b7 Claude \u00b7 Cursor \u00b7 Copilot \u00b7 <span class="tc-d">+16 more</span>', d: 4400 },
      { html: '&nbsp;', d: 4600 },
      { html: '<span class="tc-ok">\u2713</span> <span class="tc-w">Done.</span> <span class="tc-d">Your AI knows you now.</span>', d: 5000 },
    ];

    function runTerminal() {
      ptBody.innerHTML = '';
      lines.forEach(l => {
        const div = document.createElement('div');
        div.className = 'tl';
        div.innerHTML = l.html;
        div.style.animationDelay = l.d + 'ms';
        ptBody.appendChild(div);
      });
      // Loop after last line + pause
      setTimeout(runTerminal, 8000);
    }

    // Start when visible
    let termStarted = false;
    const termObs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !termStarted) {
        termStarted = true;
        runTerminal();
      }
    }, { threshold: 0.2 });
    termObs.observe(ptBody);
  }

  // ---- HERO APP: Count-up stats + Interactive questions ----
  const paScan = document.getElementById('pa-scan');
  const paQuestions = document.getElementById('pa-questions');

  if (paScan && paQuestions) {
    // Count-up animation
    function countUp(el, target, duration) {
      let start = 0;
      const step = target / (duration / 16);
      function tick() {
        start += step;
        if (start >= target) { el.textContent = target; return; }
        el.textContent = Math.floor(start);
        requestAnimationFrame(tick);
      }
      tick();
    }

    // Start counting when visible
    let countStarted = false;
    const countObs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !countStarted) {
        countStarted = true;
        countUp(document.getElementById('stat-files'), 825, 2000);
        countUp(document.getElementById('stat-folders'), 461, 2000);
        countUp(document.getElementById('stat-docs'), 105, 1800);
        countUp(document.getElementById('stat-projects'), 3, 800);

        // After count, switch to questions
        setTimeout(() => {
          paScan.style.display = 'none';
          paQuestions.style.display = 'block';
          showQuestion(0);
        }, 3500);
      }
    }, { threshold: 0.3 });
    countObs.observe(paScan);

    // Questions — track user choices for success screen
    const userRules = [];
    let currentQ = 0;

    function showQuestion(idx) {
      // All questions answered → show success
      const heroQuestions = getHeroQuestions();
      if (idx >= heroQuestions.length) {
        paQuestions.style.display = 'none';
        showSuccess();
        return;
      }
      currentQ = idx;
      const q = heroQuestions[idx];

      // Dots
      const dotsEl = document.getElementById('pa-dots');
      dotsEl.innerHTML = '';
      for (let i = 0; i < heroQuestions.length; i++) {

        const d = document.createElement('span');
        d.className = 'pa-dot' + (i < idx ? ' done' : '') + (i === idx ? ' on' : '');
        dotsEl.appendChild(d);
      }

      // Question text
      document.getElementById('pa-q').textContent = q.q;

      // Options
      const optsEl = document.getElementById('pa-opts');
      optsEl.innerHTML = '';
      q.opts.forEach((opt, i) => {
        const btn = document.createElement('button');
        btn.className = 'pa-opt';
        btn.textContent = opt;
        btn.addEventListener('click', () => {
          // Mark selected
          optsEl.querySelectorAll('.pa-opt').forEach(b => { b.classList.remove('on'); b.disabled = true; });
          btn.classList.add('on');
          btn.textContent = opt + ' \u2713';
          // Save the rule
          userRules.push(q.rules[i]);
          // Next question
          setTimeout(() => showQuestion(idx + 1), 600);
        });
        optsEl.appendChild(btn);
      });

      // Re-animate card
      const qcard = document.getElementById('pa-qcard');
      qcard.style.animation = 'none';
      qcard.offsetHeight;
      qcard.style.animation = 'sIn .35s var(--ease)';
    }

    // Success screen — show generated rules from user's answers
    function showSuccess() {
      const successEl = document.getElementById('pa-success');
      const rulesEl = document.getElementById('pa-rules');
      successEl.style.display = 'block';

      // Display the rules the user "generated"
      rulesEl.innerHTML = '';
      userRules.forEach((rule, i) => {
        const div = document.createElement('div');
        div.className = 'pa-rule';
        div.innerHTML = '<span class="pa-rule-n">' + (i + 1) + '</span>' + rule;
        div.style.opacity = '0';
        div.style.transform = 'translateY(6px)';
        div.style.transition = 'all .3s var(--ease)';
        div.style.transitionDelay = (i * 80) + 'ms';
        rulesEl.appendChild(div);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            div.style.opacity = '1';
            div.style.transform = 'none';
          });
        });
      });

      // Copy button
      const copyBtn = document.getElementById('pa-copy-btn');
      if (copyBtn) {
        copyBtn.addEventListener('click', () => {
          const text = userRules.map((r, i) => (i + 1) + '. ' + r).join('\n');
          navigator.clipboard.writeText(text).then(() => {
            copyBtn.classList.add('copied');
            copyBtn.innerHTML = '<svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8l3 3 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg> Copied!';
            setTimeout(() => {
              copyBtn.classList.remove('copied');
              copyBtn.innerHTML = '<svg width="14" height="14" viewBox="0 0 16 16" fill="none"><rect x="5" y="5" width="9" height="9" rx="1.5" stroke="currentColor" stroke-width="1.5"/><path d="M11 5V3.5A1.5 1.5 0 009.5 2h-6A1.5 1.5 0 002 3.5v6A1.5 1.5 0 003.5 11H5" stroke="currentColor" stroke-width="1.5"/></svg> Copy rules';
            }, 2000);
          });
        });
      }
    }
  }
});

// ---- SET LANGUAGE ----
function setLang(lang, animate) {
  document.documentElement.setAttribute('data-lang', lang);
  document.documentElement.setAttribute('lang', lang);

  // update lang switch active state
  document.querySelectorAll('.lang-option').forEach(el => {
    el.classList.toggle('active', el.dataset.lang === lang);
  });

  const dict = i18n[lang] || i18n.en;

  // data-i18n (textContent)
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      if (animate) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(4px)';
        setTimeout(() => {
          el.textContent = dict[key];
          el.style.transition = 'opacity .3s, transform .3s';
          el.style.opacity = '1';
          el.style.transform = 'none';
        }, 80);
      } else {
        el.textContent = dict[key];
      }
    }
  });

  // data-i18n-html (innerHTML)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key] !== undefined) {
      if (animate) {
        el.style.opacity = '0';
        setTimeout(() => {
          el.innerHTML = dict[key];
          el.style.transition = 'opacity .3s';
          el.style.opacity = '1';
        }, 80);
      } else {
        el.innerHTML = dict[key];
      }
    }
  });
}

// ---- (old terminal removed) ----
