/* ============================================
   MEPORT DOCS — Adaptive content, navigation,
   and full EN/PL translation system
   ============================================ */

// ─── Translation dictionary ────────────────────────────

const T = {
  // Level selector
  level_label:      { en: 'I am a...', pl: 'Jestem...' },
  level_beginner:   { en: 'Beginner', pl: 'Poczatkujacy' },
  level_power:      { en: 'Power User', pl: 'Zaawansowany' },
  level_dev:        { en: 'Developer', pl: 'Developer' },

  // Sidebar nav
  nav_start:        { en: 'Getting Started', pl: 'Pierwsze kroki' },
  nav_what:         { en: 'What is Meport?', pl: 'Czym jest Meport?' },
  nav_install:      { en: 'Installation', pl: 'Instalacja' },
  nav_first:        { en: 'Your first profile', pl: 'Pierwszy profil' },
  nav_commands:     { en: 'Commands Reference', pl: 'Komendy' },
  nav_packs:        { en: 'Question Packs', pl: 'Pakiety pytan' },
  nav_packs_overview: { en: 'Overview', pl: 'Przeg\u0142ad' },
  nav_packs_list:   { en: 'All packs', pl: 'Wszystkie pakiety' },
  nav_export:       { en: 'Export Formats', pl: 'Formaty eksportu' },
  nav_export_all:   { en: 'All platforms', pl: 'Wszystkie platformy' },
  nav_export_auto:  { en: 'Auto-deploy', pl: 'Auto-deploy' },
  nav_export_manual:{ en: 'Manual (clipboard)', pl: 'Reczne (schowek)' },
  nav_scanning:     { en: 'Scanning', pl: 'Skanowanie' },
  nav_scan_how:     { en: 'How scanning works', pl: 'Jak dzia\u0142a skanowanie' },
  nav_ai:           { en: 'AI Providers', pl: 'Dostawcy AI' },
  nav_ai_setup:     { en: 'Setup', pl: 'Konfiguracja' },
  nav_profile_mgmt: { en: 'Profile Management', pl: 'Zarzadzanie profilem' },
  nav_profile_lifecycle: { en: 'Lifecycle', pl: 'Cykl zycia' },
  nav_deployment:   { en: 'Deployment', pl: 'Wdrazanie' },
  nav_deploy_how:   { en: 'How deploy works', pl: 'Jak dzia\u0142a deploy' },
  nav_config_section: { en: 'Configuration', pl: 'Konfiguracja' },
  nav_config_files: { en: 'Config files', pl: 'Pliki konfiguracyjne' },
  nav_faq:          { en: 'Questions', pl: 'Pytania' },
  nav_home:         { en: 'Home', pl: 'Strona g\u0142owna' },

  // Section: What is Meport
  s_what_title:     { en: 'What is Meport?', pl: 'Czym jest Meport?' },
  s_what_p1:        { en: 'Meport is a CLI tool that creates a comprehensive AI personality profile through a single conversation. Your AI doesn\'t know you \u2014 Meport fixes that in 30 minutes.', pl: 'Meport to narzedzie CLI, ktore tworzy kompleksowy profil osobowo\u015bci AI w jednej rozmowie. Twoje AI Cie nie zna \u2014 Meport naprawi to w 30 minut.' },
  s_what_p2:        { en: 'It generates personalized instructions for <strong>ChatGPT, Claude, Cursor, Copilot, Windsurf, Ollama, Gemini, Grok, Perplexity</strong> and more \u2014 all from one profile.', pl: 'Generuje spersonalizowane instrukcje dla <strong>ChatGPT, Claude, Cursor, Copilot, Windsurf, Ollama, Gemini, Grok, Perplexity</strong> i innych \u2014 wszystko z jednego profilu.' },
  s_what_callout_title: { en: 'How it works', pl: 'Jak to dzia\u0142a' },
  s_what_callout_body:  { en: '1. Answer questions (or let AI interview you) \u2192 2. Meport builds a profile with 30+ dimensions \u2192 3. Export to any AI platform \u2192 4. Your AI finally knows how to talk to you.', pl: '1. Odpowiedz na pytania (lub pozwol AI przeprowadzic wywiad) \u2192 2. Meport buduje profil z 30+ wymiarami \u2192 3. Eksportuj na dowolna platforme AI \u2192 4. Twoje AI wreszcie wie, jak z Toba rozmawiac.' },

  // Section: Installation
  s_install_title:  { en: 'Installation', pl: 'Instalacja' },
  s_install_p1:     { en: 'Meport requires <strong>Node.js 18+</strong>. No installation needed \u2014 run directly with npx:', pl: 'Meport wymaga <strong>Node.js 18+</strong>. Nie trzeba instalowac \u2014 uruchom bezposrednio przez npx:' },
  s_install_p2:     { en: 'Or install globally:', pl: 'Lub zainstaluj globalnie:' },
  s_install_tip_title: { en: 'Tip', pl: 'Wskaz\u00f3wka' },
  s_install_tip_body:  { en: 'Running <code>meport</code> with no arguments opens the interactive shell \u2014 a menu-driven interface for all features.', pl: 'Uruchomienie <code>meport</code> bez argument\u00f3w otwiera interaktywna pow\u0142oke \u2014 menu z doste\u0308pem do wszystkich funkcji.' },

  // Section: First profile
  s_first_title:    { en: 'Your First Profile', pl: 'Tw\u00f3j pierwszy profil' },
  s_first_p1:       { en: 'The fastest way to get started:', pl: 'Najszybszy spos\u00f3b na start:' },
  s_first_step1:    { en: 'Run <code>meport profile</code>. If AI is configured, it starts an AI-driven interview. Otherwise, it uses the quiz mode.', pl: 'Uruchom <code>meport profile</code>. Jesli AI jest skonfigurowane, rozpocznie sie wywiad AI. W przeciwnym razie tryb quiz.' },
  s_first_step2:    { en: 'Answer the questions. Meport auto-detects your system (OS, timezone, tools, languages) and skips what it already knows.', pl: 'Odpowiedz na pytania. Meport automatycznie wykrywa Tw\u00f3j system (OS, strefe czasowa, narzedzia, jezyki) i pomija to, co juz wie.' },
  s_first_step3:    { en: 'Review your profile and confirm. Meport auto-exports to all platforms and shows you how to apply each one.', pl: 'Przejrzyj profil i potwierdz. Meport automatycznie eksportuje na wszystkie platformy i pokazuje, jak kazda zastosowac.' },

  // Common headings
  h_options:        { en: 'Options', pl: 'Opcje' },
  h_examples:       { en: 'Examples', pl: 'Przyk\u0142ady' },
  h_arguments:      { en: 'Arguments', pl: 'Argumenty' },
  h_subcommands:    { en: 'Subcommands', pl: 'Podkomendy' },
  h_actions:        { en: 'Actions', pl: 'Akcje' },
  h_sources:        { en: 'Supported sources', pl: 'Obs\u0142ugiwane zr\u00f3d\u0142a' },
  h_auto_targets:   { en: 'Auto-deploy targets', pl: 'Cele auto-deploy' },
  h_manual_targets: { en: 'Manual targets (clipboard)', pl: 'Reczne (schowek)' },
  h_categories:     { en: 'Depth categories', pl: 'Kategorie g\u0142e\u0308bokosci' },
  h_scanned_locations: { en: 'Scanned locations', pl: 'Skanowane lokalizacje' },
  h_report_sections: { en: 'Report sections', pl: 'Sekcje raportu' },
  h_config_actions: { en: 'Available actions', pl: 'Dost\u0119pne akcje' },
  h_shell_menu:     { en: 'Main menu items', pl: 'Pozycje menu g\u0142\u00f3wnego' },
  h_rule_compilers: { en: 'Rule-based compilers (14 platforms)', pl: 'Kompilatory (14 platform)' },
  h_system_scan:    { en: 'System scan (automatic)', pl: 'Skan systemu (automatyczny)' },
  h_file_scan:      { en: 'File scan (opt-in via --scan)', pl: 'Skan plik\u00f3w (opcjonalny via --scan)' },
  h_privacy_filter: { en: 'Privacy filter', pl: 'Filtr prywatno\u015bci' },
  h_deploy_flow:    { en: 'Deploy flow', pl: 'Przebieg deploy' },
  h_deploy_global:  { en: 'Global deploy', pl: 'Deploy globalny' },
  h_config_structure: { en: 'Config structure', pl: 'Struktura konfiguracji' },
  h_config_env:     { en: 'Environment variables', pl: 'Zmienne srodowiskowe' },
  h_config_locations: { en: 'File locations', pl: 'Lokalizacje plik\u00f3w' },
  h_pm_files:       { en: 'Key files', pl: 'Kluczowe pliki' },

  // Command descriptions
  cmd_profile_desc: { en: 'Start profiling \u2014 one conversation, full AI profile. This is the main command. It runs system scan, asks questions via packs, shows a summary, and auto-exports to all platforms.', pl: 'Rozpocznij profilowanie \u2014 jedna rozmowa, pe\u0142ny profil AI. To g\u0142\u00f3wna komenda. Uruchamia skan systemu, zadaje pytania przez pakiety, pokazuje podsumowanie i automatycznie eksportuje na wszystkie platformy.' },
  cmd_profile_flow_title: { en: 'Profiling flow', pl: 'Przebieg profilowania' },
  cmd_profile_flow_body:  { en: 'Phase 0: System scan (silent) \u2192 Phase 1: Intro \u2192 Phase 2: File scan (if --scan) \u2192 Phase 3: Pack questions \u2192 Phase 4: Final summary + AI rules preview \u2192 Phase 5: Auto-export to all platforms. Press Ctrl+C at any time \u2014 session is auto-saved. Resume with <code>meport continue</code>.', pl: 'Faza 0: Skan systemu (cichy) \u2192 Faza 1: Intro \u2192 Faza 2: Skan plik\u00f3w (jesli --scan) \u2192 Faza 3: Pytania z pakiet\u00f3w \u2192 Faza 4: Podsumowanie + podglad regu\u0142 AI \u2192 Faza 5: Auto-eksport. Naci\u015bnij Ctrl+C w dowolnym momencie \u2014 sesja jest automatycznie zapisywana. Wznowienie: <code>meport continue</code>.' },

  cmd_export_desc:  { en: 'Export your profile to a specific platform format. Uses rule-based compilers by default (14 platforms). Falls back to legacy compilers with <code>--legacy</code>.', pl: 'Eksportuj profil na konkretna platforme. Domyslnie uzywa kompilator\u00f3w regul (14 platform). Legacy mode z <code>--legacy</code>.' },
  cmd_deploy_desc:  { en: 'Push your profile to all platforms automatically. Auto-writes files for Cursor, Claude Code, Copilot, Windsurf, AGENTS.md. Copies ChatGPT to clipboard. Shows instructions for web platforms.', pl: 'Wgraj profil na wszystkie platformy automatycznie. Zapisuje pliki dla Cursor, Claude Code, Copilot, Windsurf, AGENTS.md. Kopiuje ChatGPT do schowka. Pokazuje instrukcje dla platform webowych.' },
  cmd_deploy_merge_title: { en: 'Smart merge', pl: 'Inteligentne \u0142\u0105czenie' },
  cmd_deploy_merge_body:  { en: 'When deploying to CLAUDE.md, meport doesn\'t overwrite your existing content. It appends a <code># --- meport profile ---</code> section. On subsequent deploys, only that section is updated.', pl: 'Przy deploy do CLAUDE.md, meport nie nadpisuje Twojej istniej\u0105cej tre\u015bci. Dodaje sekcj\u0119 <code># --- meport profile ---</code>. Przy kolejnych deployach aktualizuje tylko t\u0119 sekcj\u0119.' },
  cmd_view_desc:    { en: 'View your profile summary. Shows all dimensions organized by category, compound AI signals, and completeness bar.', pl: 'Podglad profilu. Pokazuje wszystkie wymiary wg kategorii, sygna\u0142y z\u0142ozone AI i pasek kompletno\u015bci.' },
  cmd_edit_desc:    { en: 'Edit individual profile dimensions interactively. Pick any dimension, change its value, add new dimensions, or delete existing ones. Auto-saves and creates a history snapshot.', pl: 'Edytuj wymiary profilu interaktywnie. Wybierz dowolny wymiar, zmien warto\u015bc, dodaj nowe lub usun istniej\u0105ce. Auto-zapis i tworzenie snapshotu historii.' },
  cmd_refresh_desc: { en: 'Refresh your profile \u2014 re-scans your system, detects changes, asks about life updates, and re-exports. Use this periodically to keep your profile current.', pl: 'Od\u015bwie\u017c profil \u2014 ponownie skanuje system, wykrywa zmiany, pyta o aktualizacje \u017cyciowe i re-eksportuje. U\u017cywaj okresowo.' },
  cmd_refresh_tip_title:  { en: 'Living profile', pl: '\u017bywy profil' },
  cmd_refresh_tip_body:   { en: 'Refresh compares your current system with your saved profile and highlights what changed. If you have AI configured, it can also analyze free-text life updates and map them to profile dimensions.', pl: 'Refresh por\u00f3wnuje Tw\u00f3j system z zapisanym profilem i podkre\u015bla zmiany. Je\u015bli masz skonfigurowane AI, mo\u017ce te\u017c analizowa\u0107 tekstowe aktualizacje \u017cyciowe i mapowa\u0107 je na wymiary profilu.' },
  cmd_deepen_desc:  { en: 'Go deeper \u2014 targeted AI interview about shallow areas of your profile. Each session focuses on the 3 shallowest categories. Requires AI configuration.', pl: 'Pog\u0142\u0119bianie \u2014 celowany wywiad AI o p\u0142ytkich obszarach profilu. Ka\u017cda sesja skupia si\u0119 na 3 najp\u0142ytszych kategoriach. Wymaga konfiguracji AI.' },
  cmd_deepen_tip_title:   { en: 'Progressive deepening', pl: 'Progresywne pog\u0142\u0119bianie' },
  cmd_deepen_tip_body:    { en: 'Run <code>meport deepen</code> multiple times. Session 1 covers broad gaps. Session 2+ targets specific shallow areas. Each session adds 5-15 new dimensions. Type <code>/done</code> to finish early.', pl: 'Uruchom <code>meport deepen</code> kilka razy. Sesja 1 pokrywa szerokie luki. Sesja 2+ celuje w konkretne p\u0142ytkie obszary. Ka\u017cda sesja dodaje 5-15 wymiar\u00f3w. Wpisz <code>/done</code> aby zakonczyc wczesniej.' },
  cmd_import_desc:  { en: 'Import and upgrade existing custom instructions from ChatGPT, Claude, Cursor, or any AI. Meport analyzes what you have, identifies gaps, and offers to fill them via scan + targeted questions.', pl: 'Importuj i ulepsz istniej\u0105ce custom instructions z ChatGPT, Claude, Cursor lub innego AI. Meport analizuje co masz, identyfikuje luki i oferuje ich uzupe\u0142nienie przez skan + celowane pytania.' },
  import_any:       { en: 'Any text file or pasted content', pl: 'Dowolny plik tekstowy lub wklejony tekst' },
  cmd_discover_desc:{ en: 'Find existing AI config files on your computer. Scans common project directories for CLAUDE.md, .cursorrules, .windsurfrules, AGENTS.md, copilot-instructions.md. Offers to track found projects for global deploy.', pl: 'Znajdz istniej\u0105ce pliki konfiguracyjne AI na komputerze. Skanuje katalogi projekt\u00f3w w poszukiwaniu CLAUDE.md, .cursorrules, .windsurfrules, AGENTS.md, copilot-instructions.md.' },
  discover_cwd:     { en: 'Current working directory', pl: 'Bie\u017c\u0105cy katalog roboczy' },
  cmd_demo_desc:    { en: 'See how AI responds with vs without your profile. Sends the same prompt twice \u2014 once as generic AI, once with your personalization rules \u2014 and shows a side-by-side comparison. Requires AI configuration.', pl: 'Zobacz jak AI odpowiada z profilem vs bez. Wysy\u0142a ten sam prompt dwa razy \u2014 raz jako generyczne AI, raz z Twoimi regu\u0142ami \u2014 i pokazuje por\u00f3wnanie. Wymaga konfiguracji AI.' },
  cmd_demo_prompts: { en: 'Choose from built-in test prompts or type your own. Available in both English and Polish.', pl: 'Wybierz z wbudowanych prompt\u00f3w testowych lub wpisz w\u0142asny. Dost\u0119pne po angielsku i polsku.' },
  cmd_report_desc:  { en: 'Generate a Me Report \u2014 AI-powered personal insights. Shows who you are, your superpowers, behavioral patterns, blind spots, and actionable suggestions. Works with or without AI (AI version is much richer).', pl: 'Generuj Me Report \u2014 osobiste wnioski wspierane AI. Pokazuje kim jestes, Twoje supermoce, wzorce zachowan, slepe punkty i sugestie. Dzia\u0142a z AI lub bez (wersja AI jest bogatsza).' },
  report_s1:        { en: '<strong>Who You Are</strong> \u2014 narrative summary', pl: '<strong>Kim jeste\u015b</strong> \u2014 podsumowanie narracyjne' },
  report_s2:        { en: '<strong>Your Superpowers</strong> \u2014 what makes you unique', pl: '<strong>Twoje supermoce</strong> \u2014 co Ci\u0119 wyr\u00f3\u017cnia' },
  report_s3:        { en: '<strong>Your Patterns</strong> \u2014 work + communication + energy patterns', pl: '<strong>Twoje wzorce</strong> \u2014 praca + komunikacja + energia' },
  report_s4:        { en: '<strong>Blind Spots</strong> \u2014 things to watch out for', pl: '<strong>\u015alepe punkty</strong> \u2014 na co uwa\u017ca\u0107' },
  report_s5:        { en: '<strong>How AI Should Work With You</strong> \u2014 top 5 rules', pl: '<strong>Jak AI powinno z Tob\u0105 pracowa\u0107</strong> \u2014 top 5 regu\u0142' },
  report_s6:        { en: '<strong>One Thing to Try</strong> \u2014 actionable suggestion', pl: '<strong>Jedna rzecz do wyprobowania</strong> \u2014 konkretna sugestia' },
  cmd_card_desc:    { en: 'Show your visual personality card in the terminal. An ASCII art summary of your profile including name, occupation, tech stack, energy type, communication style, achievements, and completeness bar. Great for screenshots.', pl: 'Pokaz karte osobowosci w terminalu. ASCII art z podsumowaniem profilu: imie, zawod, tech stack, typ energii, styl komunikacji, osiagniecia i pasek kompletnosci.' },
  cmd_config_desc:  { en: 'Configure AI provider and API keys. Supports Claude (Anthropic), OpenAI (GPT), and Ollama (local). Config is stored securely in <code>~/.meport/config.json</code> with restricted file permissions (600).', pl: 'Konfiguruj dostawce AI i klucze API. Wspiera Claude (Anthropic), OpenAI (GPT) i Ollama (lokalne). Konfiguracja w <code>~/.meport/config.json</code> z ograniczonymi uprawnieniami (600).' },
  config_a1:        { en: 'Set up AI provider (Claude / OpenAI / Ollama)', pl: 'Skonfiguruj dostawce AI (Claude / OpenAI / Ollama)' },
  config_a2:        { en: 'Show current configuration', pl: 'Pokaz bie\u017c\u0105c\u0105 konfiguracj\u0119' },
  config_a3:        { en: 'Reset configuration', pl: 'Resetuj konfiguracj\u0119' },
  cmd_config_test:  { en: 'After configuring, meport tests the connection automatically.', pl: 'Po konfiguracji meport automatycznie testuje po\u0142\u0105czenie.' },
  cmd_packs_desc:   { en: 'Manage profile question packs. Packs are modular sets of questions that target specific areas of your personality. You can add, remove, and list packs after initial profiling.', pl: 'Zarz\u0105dzaj pakietami pytan. Pakiety to modulowe zestawy pytan celujace w konkretne obszary Twojej osobowo\u015bci. Mozesz dodawac, usuwac i listowac pakiety po profilowaniu.' },
  packs_list_desc:  { en: 'Show all packs and their active/available status', pl: 'Pokaz wszystkie pakiety i ich status' },
  packs_add_desc:   { en: 'Run a pack\'s questions and merge into profile', pl: 'Uruchom pytania pakietu i scal z profilem' },
  packs_remove_desc:{ en: 'Remove a pack\'s dimensions from profile', pl: 'Usun wymiary pakietu z profilu' },
  cmd_projects_desc:{ en: 'Manage tracked projects for multi-deploy. Every time you run <code>meport deploy</code>, the current directory is auto-tracked. Use <code>meport deploy --global</code> to push to all tracked projects at once.', pl: 'Zarz\u0105dzaj sledzonymi projektami. Za ka\u017cdym razem gdy uruchomisz <code>meport deploy</code>, bie\u017c\u0105cy katalog jest automatycznie sledzony. <code>meport deploy --global</code> pushuje do wszystkich naraz.' },
  projects_a1:      { en: 'Add current directory', pl: 'Dodaj bie\u017c\u0105cy katalog' },
  projects_a2:      { en: 'Add another directory by path', pl: 'Dodaj inny katalog po \u015bcie\u017cce' },
  projects_a3:      { en: 'Remove a tracked project', pl: 'Usun sledzony projekt' },
  cmd_projects_storage: { en: 'Projects list is stored in <code>~/.meport/projects.json</code>.', pl: 'Lista projekt\u00f3w w <code>~/.meport/projects.json</code>.' },
  cmd_history_desc: { en: 'Show profile version history and changes over time. Every profile save, refresh, and edit creates a snapshot. Shows a timeline with diffs \u2014 dimensions added, changed, and removed.', pl: 'Pokaz historie wersji profilu i zmiany w czasie. Ka\u017cdy zapis, refresh i edycja tworzy snapshot. Pokazuje timeline z diffami \u2014 wymiary dodane, zmienione i usuniete.' },
  cmd_history_storage: { en: 'History snapshots are stored in <code>~/.meport/history/</code>. Shows up to 10 most recent entries.', pl: 'Snapshoty w <code>~/.meport/history/</code>. Pokazuje do 10 najnowszych.' },
  cmd_feedback_desc:{ en: 'Rate how well AI responds with your profile. Quick 1-10 rating with an optional note. Feedback is saved in your profile and tracked over time. Low scores trigger suggestions to run <code>meport deepen</code>.', pl: 'Ocen jak dobrze AI odpowiada z Twoim profilem. Szybka ocena 1-10 z opcjonaln\u0105 notatk\u0105. Feedback zapisywany w profilu i sledzony w czasie.' },
  cmd_scan_desc:    { en: 'Scan files and folders to preview what meport can detect \u2014 without creating a profile. Useful for checking what data is available before running <code>meport profile --scan</code>.', pl: 'Skanuj pliki i foldery aby podejrzec co meport moze wykryc \u2014 bez tworzenia profilu. Przydatne przed uruchomieniem <code>meport profile --scan</code>.' },
  cmd_continue_desc:{ en: 'Resume an interrupted profiling session. If you press Ctrl+C during <code>meport profile</code>, your progress is auto-saved to <code>.meport-session.json</code>. This command picks up exactly where you left off.', pl: 'Wznow przerwan\u0105 sesje profilowania. Jesli nacisniesz Ctrl+C podczas <code>meport profile</code>, postep jest zapisywany do <code>.meport-session.json</code>. Ta komenda zaczyna dokladnie tam gdzie skonczyles.' },
  cmd_sync_desc:    { en: 'Sync profile to file-based platform configs (Claude Code, Cursor, Ollama). Also supports clipboard copy for web platforms. This is a lower-level alternative to <code>meport deploy</code>.', pl: 'Synchronizuj profil z plikami konfiguracyjnymi platform (Claude Code, Cursor, Ollama). Wsparcie dla schowka dla platform webowych. Niskopoziomowa alternatywa dla <code>meport deploy</code>.' },
  cmd_update_desc:  { en: 'Quick tune-up \u2014 confirm key settings (verbosity, directness, anti-patterns, name), then re-sync all exports. Faster than a full refresh when you just want to tweak settings.', pl: 'Szybkie dostrojenie \u2014 potwierdz kluczowe ustawienia (gadatliwosc, bezposredniosc, anty-wzorce, imie), potem re-sync eksportow. Szybsze niz pe\u0142ny refresh.' },
  cmd_shell_desc:   { en: 'Running <code>meport</code> with no arguments opens the interactive shell. This is the default command. It detects whether you have a profile and shows the appropriate menu: first-time setup or the main menu with all available actions.', pl: 'Uruchomienie <code>meport</code> bez argument\u00f3w otwiera interaktywn\u0105 pow\u0142ok\u0119. To domyslna komenda. Wykrywa czy masz profil i pokazuje odpowiednie menu.' },

  // Deepen categories
  cat_identity:     { en: 'Name, background, achievements, vision', pl: 'Imie, t\u0142o, osi\u0105gniecia, wizja' },
  cat_comm:         { en: 'Verbosity, directness, anti-patterns, pet peeves', pl: 'Gadatliwosc, bezposredniosc, anty-wzorce' },
  cat_work:         { en: 'Energy, deadlines, perfectionism, collaboration', pl: 'Energia, deadline\'y, perfekcjonizm, wsp\u00f3\u0142praca' },
  cat_cognitive:    { en: 'Learning style, decision style, attention span', pl: 'Styl uczenia, decydowania, skupienie' },
  cat_context:      { en: 'Occupation, industry, life stage, focus', pl: 'Zaw\u00f3d, bran\u017ca, etap \u017cycia, fokus' },
  cat_motivation:   { en: 'Drives, fears, vision, primary need', pl: 'Motywacje, obawy, wizja, potrzeba' },
  cat_ai:           { en: 'Relationship model, correction style, proactivity', pl: 'Model relacji, styl korekty, proaktywnosc' },
  cat_lifestyle:    { en: 'Routine, social energy, risk tolerance', pl: 'Rutyna, energia spo\u0142eczna, tolerancja ryzyka' },

  // Packs
  s_packs_title:    { en: 'Question Packs', pl: 'Pakiety pytan' },
  s_packs_p1:       { en: 'Packs are modular question sets that target specific areas of your personality and preferences. During profiling, you choose which packs to answer. You can add or remove packs at any time.', pl: 'Pakiety to modulowe zestawy pytan celuj\u0105ce w konkretne obszary Twojej osobowo\u015bci. Podczas profilowania wybierasz, kt\u00f3re pakiety odpowiedziec. Mo\u017cesz dodawac i usuwac pakiety w dowolnym momencie.' },
  s_packs_p2:       { en: 'Each pack contains 5-10 scenario-based questions with multiple choice answers. Questions are designed to reveal behavioral patterns, not just preferences.', pl: 'Ka\u017cdy pakiet zawiera 5-10 pytan scenariuszowych z odpowiedziami wielokrotnego wyboru. Pytania s\u0105 zaprojektowane aby ujawnic wzorce zachowan, nie tylko preferencje.' },
  s_packslist_title: { en: 'All Packs', pl: 'Wszystkie pakiety' },
  pack_micro:       { en: 'Auto-loaded. Name, intro, pack selection. Always runs first.', pl: 'Auto-ladowany. Imie, intro, wyb\u00f3r pakiet\u00f3w. Zawsze uruchamiany pierwszy.' },
  pack_core:        { en: 'Communication DNA \u2014 how you like AI to talk to you. Verbosity, directness, anti-patterns, feedback style.', pl: 'DNA komunikacji \u2014 jak lubisz \u017ceby AI z Tob\u0105 m\u00f3wi\u0142o. Gadatliwo\u015b\u0107, bezpo\u015bredninosc, anty-wzorce, styl feedbacku.' },
  pack_context:     { en: 'Life Context \u2014 job, location, current focus, tools, industry.', pl: 'Kontekst \u017cyciowy \u2014 praca, lokalizacja, fokus, narz\u0119dzia, bran\u017ca.' },
  pack_work:        { en: 'Work Style \u2014 energy patterns, deadline behavior, perfectionism, task preferences.', pl: 'Styl pracy \u2014 wzorce energii, zachowanie przy deadline\'ach, perfekcjonizm.' },
  pack_lifestyle:   { en: 'Lifestyle \u2014 daily rhythm, social energy, routine preference, travel, food.', pl: 'Styl \u017cycia \u2014 rytm dnia, energia spo\u0142eczna, rutyna, podr\u00f3\u017ce, jedzenie.' },
  pack_health:      { en: 'Health (sensitive) \u2014 fitness level, sleep patterns, conditions. Data is privacy-filtered.', pl: 'Zdrowie (wra\u017cliwe) \u2014 kondycja, sen, schorzenia. Dane filtrowane pod k\u0105tem prywatno\u015bci.' },
  pack_finance:     { en: 'Finance (sensitive) \u2014 money style, budgeting, financial goals. Data is privacy-filtered.', pl: 'Finanse (wra\u017cliwe) \u2014 styl pieni\u0119\u017cny, bud\u017cet, cele finansowe. Dane filtrowane.' },
  pack_learning:    { en: 'Learning \u2014 how you learn, study preferences, format preference, time commitment.', pl: 'Uczenie si\u0119 \u2014 jak si\u0119 uczysz, preferencje, format, zaanga\u017cowanie czasowe.' },
  packs_sensitive_title: { en: 'Sensitive packs', pl: 'Wra\u017cliwe pakiety' },
  packs_sensitive_body:  { en: 'Health and Finance packs are marked as sensitive. They show privacy notes before questions and their data goes through privacy filtering in exports. You can skip individual questions or entire packs.', pl: 'Pakiety Zdrowie i Finanse s\u0105 oznaczone jako wra\u017cliwe. Pokazuj\u0105 informacje o prywatno\u015bci przed pytaniami, a dane przechodz\u0105 filtrowanie w eksportach. Mo\u017cesz pomijac pojedyncze pytania lub ca\u0142e pakiety.' },

  // Export formats
  s_export_title:   { en: 'Export Formats', pl: 'Formaty eksportu' },
  s_export_p1:      { en: 'Meport compiles your profile into platform-specific formats. Each compiler understands the target platform\'s constraints (character limits, format requirements, feature support).', pl: 'Meport kompiluje profil do format\u00f3w specyficznych dla platform. Ka\u017cdy kompilator rozumie ograniczenia platformy docelowej (limity znak\u00f3w, wymagania formatu).' },
  s_export_auto_title: { en: 'Auto-deploy Platforms', pl: 'Platformy auto-deploy' },
  s_export_auto_p1: { en: 'These platforms support file-based configuration. Meport writes the file directly to the correct location in your project:', pl: 'Te platformy wspieraj\u0105 konfiguracj\u0119 plikow\u0105. Meport zapisuje plik bezpo\u015brednio we w\u0142a\u015bciwej lokalizacji w projekcie:' },
  s_export_manual_title: { en: 'Manual Platforms (Clipboard)', pl: 'Platformy r\u0119czne (schowek)' },
  s_export_manual_p1: { en: 'Web-based platforms require manual pasting. Meport copies the content to your clipboard and shows where to paste:', pl: 'Platformy webowe wymagaj\u0105 r\u0119cznego wklejania. Meport kopiuje tre\u015b\u0107 do schowka i pokazuje gdzie wklei\u0107:' },

  // Scanning
  s_scan_title:     { en: 'Scanning', pl: 'Skanowanie' },
  s_scan_p1:        { en: 'Meport can auto-detect information about you from your system and files. This happens automatically during profiling (Phase 0) and can also be triggered manually.', pl: 'Meport mo\u017ce automatycznie wykrywa\u0107 informacje o Tobie z systemu i plik\u00f3w. Dzieje si\u0119 to automatycznie podczas profilowania (Faza 0) i mo\u017ce by\u0107 te\u017c uruchomione r\u0119cznie.' },
  s_scan_system:    { en: 'Runs silently at the start of every profiling session. Detects:', pl: 'Uruchamia si\u0119 cicho na pocz\u0105tku ka\u017cdej sesji profilowania. Wykrywa:' },
  scan_os:          { en: 'Operating system, timezone, locale', pl: 'System operacyjny, strefa czasowa, j\u0119zyk' },
  scan_name:        { en: 'Username / preferred name (from git config or OS)', pl: 'Nazwa u\u017cytkownika / preferowane imi\u0119 (z git config lub OS)' },
  scan_tools:       { en: 'Installed tools (editors, languages, frameworks)', pl: 'Zainstalowane narz\u0119dzia (edytory, j\u0119zyki, frameworki)' },
  scan_stack:       { en: 'Tech stack (from package.json, Cargo.toml, etc.)', pl: 'Tech stack (z package.json, Cargo.toml, itp.)' },
  scan_ai:          { en: 'AI tools in use (Cursor, Claude Code, Copilot, etc.)', pl: 'U\u017cywane narz\u0119dzia AI (Cursor, Claude Code, Copilot, itp.)' },
  s_scan_file:      { en: 'Scan specific files or directories for additional profile data. Useful for resumes, portfolios, project files.', pl: 'Skanuj konkretne pliki lub katalogi w poszukiwaniu dodatkowych danych. Przydatne dla CV, portfolio, plik\u00f3w projekt\u00f3w.' },
  s_scan_privacy:   { en: 'Sensitive data (health conditions, financial details) is marked as sensitive and goes through privacy filtering before export. Dimensions starting with <code>_</code> are internal and never exported. You can review all detected dimensions with <code>meport view</code>.', pl: 'Wra\u017cliwe dane (zdrowie, finanse) s\u0105 oznaczane i przechodz\u0105 filtrowanie prywatno\u015bci przed eksportem. Wymiary zaczynaj\u0105ce si\u0119 od <code>_</code> s\u0105 wewn\u0119trzne i nigdy nie eksportowane. Przejrzyj wykryte wymiary: <code>meport view</code>.' },

  // AI Providers
  s_ai_title:       { en: 'AI Providers', pl: 'Dostawcy AI' },
  s_ai_p1:          { en: 'Meport uses AI for three features: conversational profiling (<code>--ai</code>), deepening sessions, and report generation. Configure via <code>meport config</code>.', pl: 'Meport u\u017cywa AI do trzech funkcji: profilowanie konwersacyjne (<code>--ai</code>), sesje pog\u0142\u0119biania i generowanie raport\u00f3w. Konfiguracja przez <code>meport config</code>.' },
  s_ai_claude:      { en: 'Best quality. Requires an Anthropic API key. Default model: <code>claude-sonnet-4-20250514</code>.', pl: 'Najlepsza jako\u015b\u0107. Wymaga klucza API Anthropic. Domy\u015blny model: <code>claude-sonnet-4-20250514</code>.' },
  s_ai_openai:      { en: 'Good quality. Requires an OpenAI API key. Default model: <code>gpt-4o-mini</code>.', pl: 'Dobra jako\u015b\u0107. Wymaga klucza API OpenAI. Domy\u015blny model: <code>gpt-4o-mini</code>.' },
  s_ai_ollama:      { en: 'Free, runs on your machine. No API key needed. Default model: <code>llama3.1</code>. Default URL: <code>http://localhost:11434</code>.', pl: 'Darmowe, dzia\u0142a na Twoim komputerze. Bez klucza API. Domy\u015blny model: <code>llama3.1</code>. URL: <code>http://localhost:11434</code>.' },
  s_ai_tip_title:   { en: 'Without AI', pl: 'Bez AI' },
  s_ai_tip_body:    { en: 'Meport works fine without any AI provider. Quiz mode (<code>meport profile</code>) uses pre-built question packs with multiple choice answers. AI just unlocks conversational interviews, deeper reports, and smarter gap-filling.', pl: 'Meport dzia\u0142a dobrze bez AI. Tryb quiz (<code>meport profile</code>) u\u017cywa gotowych pakiet\u00f3w pytan z odpowiedziami wielokrotnego wyboru. AI odblokowuje wywiady konwersacyjne, g\u0142\u0119bsze raporty i sprytniejsze uzupe\u0142nianie luk.' },

  // Profile Management
  s_pm_title:       { en: 'Profile Management', pl: 'Zarz\u0105dzanie profilem' },
  s_pm_p1:          { en: 'Your profile is a living document. Here is the recommended lifecycle:', pl: 'Tw\u00f3j profil to \u017cywy dokument. Oto zalecany cykl \u017cycia:' },
  pm_create:        { en: 'Create', pl: 'Stw\u00f3rz' },
  pm_create_desc:   { en: '\u2014 <code>meport profile</code> to build your initial profile.', pl: '\u2014 <code>meport profile</code> aby zbudowa\u0107 pocz\u0105tkowy profil.' },
  pm_deploy_step:   { en: 'Deploy', pl: 'Wdro\u017c' },
  pm_deploy_desc:   { en: '\u2014 <code>meport deploy</code> to push to all your AI tools.', pl: '\u2014 <code>meport deploy</code> aby wgra\u0107 do wszystkich narz\u0119dzi AI.' },
  pm_deepen:        { en: 'Deepen', pl: 'Pog\u0142\u0119b' },
  pm_deepen_desc:   { en: '\u2014 <code>meport deepen</code> to fill shallow areas (run 2-3 times).', pl: '\u2014 <code>meport deepen</code> aby wype\u0142ni\u0107 p\u0142ytkie obszary (uruchom 2-3 razy).' },
  pm_refresh:       { en: 'Refresh', pl: 'Od\u015bwie\u017c' },
  pm_refresh_desc:  { en: '\u2014 <code>meport refresh</code> periodically to keep your profile current.', pl: '\u2014 <code>meport refresh</code> okresowo aby profil by\u0142 aktualny.' },
  pm_feedback:      { en: 'Feedback', pl: 'Ocen' },
  pm_feedback_desc: { en: '\u2014 <code>meport feedback</code> to rate and track improvement over time.', pl: '\u2014 <code>meport feedback</code> aby oceniac i sledzic popraw\u0119 w czasie.' },
  file_profile:     { en: 'Your profile (in project directory)', pl: 'Tw\u00f3j profil (w katalogu projektu)' },
  file_exports:     { en: 'All platform exports', pl: 'Eksporty wszystkich platform' },
  file_config:      { en: 'AI provider config', pl: 'Konfiguracja dostawcy AI' },
  file_history:     { en: 'Version history snapshots', pl: 'Snapshoty historii wersji' },
  file_projects:    { en: 'Tracked projects list', pl: 'Lista sledzonych projekt\u00f3w' },
  file_session:     { en: 'Interrupted session state', pl: 'Stan przerwanej sesji' },

  // Deployment section
  s_deploy_title:   { en: 'Deployment', pl: 'Wdra\u017canie' },
  s_deploy_p1:      { en: 'Meport is your <strong>management center</strong> for all AI profiles. Update once, deploy everywhere.', pl: 'Meport to Twoje <strong>centrum zarz\u0105dzania</strong> profilami AI. Zaktualizuj raz, wdro\u017c wsz\u0119dzie.' },
  deploy_s1:        { en: 'Compiles profile to all 14 platform formats', pl: 'Kompiluje profil do 14 format\u00f3w platform' },
  deploy_s2:        { en: 'Auto-writes to file-based platforms (Cursor, Claude Code, Copilot, Windsurf, AGENTS.md)', pl: 'Auto-zapisuje do platform plikowych (Cursor, Claude Code, Copilot, Windsurf, AGENTS.md)' },
  deploy_s3:        { en: 'Copies ChatGPT export to clipboard', pl: 'Kopiuje eksport ChatGPT do schowka' },
  deploy_s4:        { en: 'Shows instructions for web platforms (Claude, Gemini, Grok, Perplexity)', pl: 'Pokazuje instrukcje dla platform webowych (Claude, Gemini, Grok, Perplexity)' },
  deploy_s5:        { en: 'Auto-tracks the project directory for future global deploys', pl: 'Auto-sledzi katalog projektu dla przysz\u0142ych globalnych deploy\u00f3w' },
  s_deploy_global:  { en: 'Use <code>meport deploy --global</code> to push your profile to ALL tracked projects at once. Combine with <code>meport discover</code> to find and track existing projects first.', pl: 'U\u017cyj <code>meport deploy --global</code> aby wgra\u0107 profil do WSZYSTKICH sledzonych projekt\u00f3w naraz. Po\u0142\u0105cz z <code>meport discover</code> aby najpierw znale\u017a\u0107 i doda\u0107 projekty.' },

  // Configuration section
  s_config_title:   { en: 'Configuration', pl: 'Konfiguracja' },
  s_config_p1:      { en: 'Meport stores configuration in <code>~/.meport/config.json</code>. The file has restricted permissions (mode 600) so only you can read it.', pl: 'Meport przechowuje konfiguracj\u0119 w <code>~/.meport/config.json</code>. Plik ma ograniczone uprawnienia (mode 600), wi\u0119c tylko Ty mo\u017cesz go czyta\u0107.' },
  config_env_lang:  { en: 'Auto-detected for language. Set to <code>pl</code> prefix for Polish.', pl: 'Auto-wykrywany dla j\u0119zyka. Ustaw prefix <code>pl</code> dla polskiego.' },
  config_loc_config:  { en: 'AI provider settings', pl: 'Ustawienia dostawcy AI' },
  config_loc_history: { en: 'Profile version history', pl: 'Historia wersji profilu' },
  config_loc_projects:{ en: 'Tracked project directories', pl: 'Sledzone katalogi projekt\u00f3w' },
  config_loc_profile: { en: 'Profile data (per project)', pl: 'Dane profilu (per projekt)' },
  config_loc_exports: { en: 'Generated platform files', pl: 'Wygenerowane pliki platform' },
  config_loc_session: { en: 'Auto-saved interrupted session', pl: 'Auto-zapisana przerwana sesja' },

  // FAQ
  faq_q1:  { en: 'Do I need an API key to use meport?', pl: 'Czy potrzebuj\u0119 klucza API?' },
  faq_a1:  { en: 'No. Quiz mode works without any API key. AI features (conversational interview, deepening, reports, demo) require an API key from Claude, OpenAI, or a local Ollama installation.', pl: 'Nie. Tryb quiz dzia\u0142a bez klucza API. Funkcje AI (wywiad konwersacyjny, pog\u0142\u0119bianie, raporty, demo) wymagaj\u0105 klucza od Claude, OpenAI lub lokalnej instalacji Ollama.' },
  faq_q2:  { en: 'Is my data sent anywhere?', pl: 'Czy moje dane s\u0105 gdzies wysy\u0142ane?' },
  faq_a2:  { en: 'Your profile stays on your machine in <code>meport-profile.json</code>. If you use AI features, your answers are sent to the configured AI provider (Claude/OpenAI/Ollama). With Ollama, everything stays local.', pl: 'Tw\u00f3j profil zostaje na Twoim komputerze w <code>meport-profile.json</code>. Je\u015bli u\u017cywasz funkcji AI, odpowiedzi s\u0105 wysy\u0142ane do skonfigurowanego dostawcy (Claude/OpenAI/Ollama). Z Ollam\u0105 wszystko zostaje lokalnie.' },
  faq_q3:  { en: 'How long does profiling take?', pl: 'Jak d\u0142ugo trwa profilowanie?' },
  faq_a3:  { en: 'Quick mode: 5 minutes. Full profiling: 15-30 minutes. AI-driven interview: 10-20 minutes. You can interrupt at any time (Ctrl+C) and resume later with <code>meport continue</code>.', pl: 'Quick mode: 5 minut. Pe\u0142ne profilowanie: 15-30 minut. Wywiad AI: 10-20 minut. Mo\u017cesz przerwa\u0107 w dowolnym momencie (Ctrl+C) i wznaowi\u0107 p\u00f3\u017aniej: <code>meport continue</code>.' },
  faq_q4:  { en: 'Can I use meport for work and personal profiles?', pl: 'Czy mog\u0119 u\u017cywa\u0107 meport do profili roboczych i osobistych?' },
  faq_a4:  { en: 'Yes. Use <code>-o</code> to save to different files: <code>meport profile -o work-profile.json</code> and <code>meport profile -o personal.json</code>. Then export each separately.', pl: 'Tak. U\u017cyj <code>-o</code> aby zapisywa\u0107 do r\u00f3\u017cnych plik\u00f3w: <code>meport profile -o work-profile.json</code> i <code>meport profile -o personal.json</code>.' },
  faq_q5:  { en: 'How often should I refresh my profile?', pl: 'Jak cz\u0119sto od\u015bwie\u017ca\u0107 profil?' },
  faq_a5:  { en: 'Run <code>meport refresh</code> every 2-4 weeks, or whenever something significant changes (new job, new tools, new goals). Meport will detect changes and ask for confirmation.', pl: 'Uruchom <code>meport refresh</code> co 2-4 tygodnie lub gdy zmieni si\u0119 co\u015b wa\u017cnego (nowa praca, nowe narz\u0119dzia, nowe cele). Meport wykryje zmiany i poprosi o potwierdzenie.' },
  faq_q6:  { en: 'What happens if I skip questions?', pl: 'Co je\u015bli pomin\u0119 pytania?' },
  faq_a6:  { en: 'Skipped questions reduce profile completeness but don\'t break anything. You can always come back later with <code>meport deepen</code> or <code>meport packs add &lt;pack&gt;</code> to fill gaps.', pl: 'Pomini\u0119te pytania zmniejszaj\u0105 kompletno\u015b\u0107 profilu, ale nic nie psuj\u0105. Mo\u017cesz wr\u00f3ci\u0107 p\u00f3\u017aniej: <code>meport deepen</code> lub <code>meport packs add &lt;pack&gt;</code>.' },
  faq_q7:  { en: 'Can I manually edit the profile JSON?', pl: 'Czy mog\u0119 r\u0119cznie edytowa\u0107 JSON profilu?' },
  faq_a7:  { en: 'Yes, but use <code>meport edit</code> instead \u2014 it validates changes and auto-saves snapshots. If you edit the JSON directly, run <code>meport refresh</code> afterward to recompute derived signals.', pl: 'Tak, ale u\u017cyj <code>meport edit</code> \u2014 waliduje zmiany i auto-zapisuje snapshoty. Je\u015bli edytujesz JSON r\u0119cznie, uruchom <code>meport refresh</code> aby przeliczy\u0107 sygna\u0142y pochodne.' },
  faq_q8:  { en: 'What is the difference between deploy and export?', pl: 'Jaka jest r\u00f3\u017cnica mi\u0119dzy deploy a export?' },
  faq_a8:  { en: '<code>meport export</code> generates files. <code>meport deploy</code> generates files AND writes them to the correct locations in your project (Cursor rules, CLAUDE.md, etc.). Deploy is the recommended workflow.', pl: '<code>meport export</code> generuje pliki. <code>meport deploy</code> generuje pliki I zapisuje je we w\u0142a\u015bciwych lokalizacjach w projekcie (regu\u0142y Cursor, CLAUDE.md, itp.). Deploy to zalecany workflow.' },
  faq_q9:  { en: 'How does the smart merge work for CLAUDE.md?', pl: 'Jak dzia\u0142a smart merge dla CLAUDE.md?' },
  faq_a9:  { en: 'When deploying to a file that already has content, meport appends a <code># --- meport profile ---</code> section. On subsequent deploys, only that section is replaced. Your custom content above it is preserved.', pl: 'Przy deploy do pliku z istniej\u0105c\u0105 tre\u015bci\u0105, meport dodaje sekcj\u0119 <code># --- meport profile ---</code>. Przy kolejnych deployach tylko ta sekcja jest podmieniana. Twoja w\u0142asna tre\u015b\u0107 powy\u017cej jest zachowana.' },
  faq_q10: { en: 'Which AI provider is best?', pl: 'Kt\u00f3ry dostawca AI jest najlepszy?' },
  faq_a10: { en: 'Claude (Anthropic) gives the best quality for interviews and reports. GPT-4o-mini is a good budget option. Ollama is free but quality depends on the model. For profiling without AI, quiz mode is excellent.', pl: 'Claude (Anthropic) daje najlepsz\u0105 jako\u015b\u0107 wywiad\u00f3w i raport\u00f3w. GPT-4o-mini to dobra opcja bud\u017cetowa. Ollama jest darmowa ale jako\u015b\u0107 zale\u017cy od modelu. Do profilowania bez AI tryb quiz jest doskona\u0142y.' },
};

// ─── App logic ──────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {

  // ---- Level Selector ----
  const levelPills = document.querySelectorAll('.level-pill');
  let currentLevel = localStorage.getItem('meport-docs-level') || 'beginner';
  setLevel(currentLevel);

  levelPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const level = pill.dataset.level;
      if (level !== currentLevel) {
        currentLevel = level;
        localStorage.setItem('meport-docs-level', level);
        setLevel(level);
      }
    });
  });

  function setLevel(level) {
    document.documentElement.setAttribute('data-level', level);

    levelPills.forEach(p => {
      p.classList.toggle('active', p.dataset.level === level);
    });

    // Show/hide level content
    document.querySelectorAll('.level-content').forEach(el => {
      const showFor = el.dataset.show;
      el.classList.toggle('visible', showFor === level);
    });

    // Show/hide min-level sections
    document.querySelectorAll('[data-min-level]').forEach(el => {
      const minLevel = el.dataset.minLevel;
      const levels = ['beginner', 'power', 'dev'];
      const currentIdx = levels.indexOf(level);
      const minIdx = levels.indexOf(minLevel);
      el.style.display = currentIdx >= minIdx ? '' : 'none';
    });
  }

  // ---- Active sidebar link on scroll ----
  const sections = document.querySelectorAll('.doc-section');
  const navLinks = document.querySelectorAll('.docs-link');

  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === '#' + id);
        });
      }
    });
  }, { rootMargin: '-80px 0px -60% 0px', threshold: 0 });

  sections.forEach(s => scrollObserver.observe(s));

  // ---- Smooth scroll for sidebar links ----
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          document.getElementById('sidebar')?.classList.remove('open');
        }
      }
    });
  });

  // ---- Mobile sidebar toggle ----
  const toggle = document.getElementById('nav-toggle');
  const sidebar = document.getElementById('sidebar');

  toggle?.addEventListener('click', () => {
    sidebar?.classList.toggle('open');
  });

  document.addEventListener('click', (e) => {
    if (sidebar?.classList.contains('open') &&
        !sidebar.contains(e.target) &&
        !toggle?.contains(e.target)) {
      sidebar.classList.remove('open');
    }
  });

  // ---- Language switch ----
  const langSwitch = document.getElementById('lang-switch');
  let lang = localStorage.getItem('meport-lang') || 'en';
  applyLang(lang);

  langSwitch?.addEventListener('click', (e) => {
    const option = e.target.closest('.lang-option');
    if (option) {
      const newLang = option.dataset.lang;
      if (newLang && newLang !== lang) {
        lang = newLang;
        localStorage.setItem('meport-lang', lang);
        applyLang(lang);
      }
    }
  });

  function applyLang(l) {
    document.documentElement.setAttribute('data-lang', l);
    document.documentElement.setAttribute('lang', l);

    // Update lang switch UI
    document.querySelectorAll('.lang-option').forEach(el => {
      el.classList.toggle('active', el.dataset.lang === l);
    });

    // Translate all data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const entry = T[key];
      if (entry && entry[l]) {
        el.innerHTML = entry[l];
      }
    });
  }

});
