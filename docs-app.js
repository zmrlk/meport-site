/* ============================================
   MEPORT DOCS — Adaptive content, navigation,
   and full EN/PL translation system
   ============================================ */

// ─── Translation dictionary ────────────────────────────

const T = {
  // Level selector
  level_label:      { en: 'I am a...', pl: 'Jestem...' },
  level_beginner:   { en: 'Beginner', pl: 'Początkujący' },
  level_power:      { en: 'Power User', pl: 'Zaawansowany' },
  level_dev:        { en: 'Developer', pl: 'Developer' },

  // Sidebar nav groups
  nav_start:        { en: 'Getting Started', pl: 'Pierwsze kroki' },
  nav_reference:    { en: 'Reference', pl: 'Referencja' },
  nav_advanced:     { en: 'Advanced', pl: 'Zaawansowane' },
  nav_internals:    { en: 'Internals', pl: 'Architektura' },
  nav_help:         { en: 'Help', pl: 'Pomoc' },

  // Sidebar nav items
  nav_what:         { en: 'What is Meport?', pl: 'Czym jest Meport?' },
  nav_install:      { en: 'Installation', pl: 'Instalacja' },
  nav_quickstart:   { en: 'Quick Start', pl: 'Szybki start' },
  nav_glossary:     { en: 'Glossary', pl: 'Słownik' },
  nav_commands:     { en: 'Commands', pl: 'Komendy' },
  nav_packs:        { en: 'Question Packs', pl: 'Pakiety pytań' },
  nav_exports:      { en: 'Export Formats', pl: 'Formaty eksportu' },
  nav_scanning:     { en: 'Scanning', pl: 'Skanowanie' },
  nav_ai:           { en: 'AI Providers', pl: 'Dostawcy AI' },
  nav_profile_mgmt: { en: 'Profile Management', pl: 'Zarządzanie profilem' },
  nav_deployment:   { en: 'Deployment', pl: 'Wdrażanie' },
  nav_config:       { en: 'Configuration', pl: 'Konfiguracja' },
  nav_privacy:      { en: 'Privacy & Security', pl: 'Prywatność' },
  nav_shell:        { en: 'Interactive Shell', pl: 'Tryb interaktywny' },
  nav_architecture: { en: 'Architecture', pl: 'Architektura' },
  nav_profile_arch: { en: 'Profile Architecture', pl: 'Architektura profilu' },
  nav_schema:       { en: 'Schema Reference', pl: 'Schemat' },
  nav_inference:    { en: 'Inference Engine', pl: 'Silnik inferencji' },
  nav_compilers:    { en: 'Compiler System', pl: 'System kompilatorów' },
  nav_contributing: { en: 'Contributing', pl: 'Współtworzenie' },
  nav_faq:          { en: 'FAQ', pl: 'FAQ' },
  nav_issues:       { en: 'Common Issues', pl: 'Częste problemy' },
  nav_home:         { en: 'Home', pl: 'Strona główna' },

  // Table headers
  tbl_flag:  { en: 'Flag', pl: 'Flaga' },
  tbl_type:  { en: 'Type', pl: 'Typ' },
  tbl_desc:  { en: 'Description', pl: 'Opis' },

  // ═══════ SECTION: WHAT IS MEPORT ═══════
  s_what_title:   { en: 'What is Meport?', pl: 'Czym jest Meport?' },

  // Beginner
  s_what_b_p1:    { en: 'Meport is a free tool that teaches your AI how to talk to <em>you</em>. Right now, every AI assistant (ChatGPT, Claude, Copilot, and others) treats you like a stranger. Meport fixes that.', pl: 'Meport to darmowe narzędzie, które uczy Twoje AI, jak rozmawiać z <em>Tobą</em>. Teraz każdy asystent AI (ChatGPT, Claude, Copilot i inne) traktuje Cię jak obcą osobę. Meport to naprawia.' },
  s_what_b_p2:    { en: 'You answer a few questions (takes about 5-15 minutes), and Meport creates a <strong>personality profile</strong> that you paste into any AI platform. After that, the AI knows your name, how you like to communicate, what you work on, and how to help you best.', pl: 'Odpowiadasz na kilka pytań (zajmuje ok. 5-15 minut), a Meport tworzy <strong>profil osobowości</strong>, który wklejasz do dowolnej platformy AI. Po tym AI zna Twoje imię, wie jak lubisz się komunikować, czym się zajmujesz i jak najlepiej Ci pomóc.' },
  s_what_callout_title: { en: 'How it works in 4 steps', pl: 'Jak to działa w 4 krokach' },
  s_what_callout_body:  { en: '1. Answer questions (or let AI interview you) &rarr; 2. Meport builds a profile with 30+ personality dimensions &rarr; 3. Export to any AI platform &rarr; 4. Your AI finally knows how to talk to you.', pl: '1. Odpowiedz na pytania (lub pozwól AI przeprowadzić wywiad) &rarr; 2. Meport buduje profil z 30+ wymiarami osobowości &rarr; 3. Eksportuj na dowolną platformę AI &rarr; 4. Twoje AI wreszcie wie, jak z Tobą rozmawiać.' },
  s_what_b_p3:    { en: 'Meport works with <strong>ChatGPT, Claude, Cursor, Copilot, Windsurf, Ollama, Gemini, Grok, Perplexity</strong> and more. One profile, all platforms.', pl: 'Meport działa z <strong>ChatGPT, Claude, Cursor, Copilot, Windsurf, Ollama, Gemini, Grok, Perplexity</strong> i innymi. Jeden profil, wszystkie platformy.' },

  // Power
  s_what_p_p1:    { en: 'Meport is a CLI tool (v0.1.5) that creates structured AI personality profiles and compiles them into platform-specific custom instructions. It replaces manual prompt engineering with a standardized, portable profile format.', pl: 'Meport to narzędzie CLI (v0.1.5), które tworzy ustrukturyzowane profile osobowości AI i kompiluje je do instrukcji specyficznych dla każdej platformy. Zastępuje ręczne prompt engineering standaryzowanym, przenośnym formatem profilu.' },
  s_what_p_p2:    { en: 'Key capabilities: <strong>9 question packs</strong> covering communication, work, cognition, personality, and more. <strong>14 export compilers</strong> (ChatGPT, Claude, Cursor, Copilot, Windsurf, Ollama, Gemini, Grok, Perplexity, AGENTS.md, OpenClaw, generic, JSON). <strong>3-layer inference engine</strong> (explicit answers, behavioral signals, compound patterns). <strong>Rule-based exports</strong> generating actionable IF/THEN instructions instead of vague descriptions.', pl: 'Kluczowe możliwości: <strong>9 pakietów pytań</strong> obejmujących komunikację, pracę, kognitywistykę, osobowość i więcej. <strong>14 kompilatorów eksportu</strong> (ChatGPT, Claude, Cursor, Copilot, Windsurf, Ollama, Gemini, Grok, Perplexity, AGENTS.md, OpenClaw, generic, JSON). <strong>3-warstwowy silnik inferencji</strong> (jawne odpowiedzi, sygnały behawioralne, wzorce złożone). <strong>Eksporty oparte na regułach</strong> generujące akcjonalne instrukcje IF/THEN zamiast ogólnych opisów.' },

  // Dev
  s_what_d_p1:    { en: 'Meport is a TypeScript monorepo (pnpm workspaces) with three packages: <code>@meport/core</code> (schema, profiler, compilers, inference), <code>@meport/cli</code> (Commander.js CLI with 23 commands), and <code>@meport/app</code> (future Electron app).', pl: 'Meport to monorepo TypeScript (pnpm workspaces) z trzema pakietami: <code>@meport/core</code> (schemat, profiler, kompilatory, inferencja), <code>@meport/cli</code> (CLI Commander.js z 23 komendami), oraz <code>@meport/app</code> (przyszła aplikacja Electron).' },
  s_what_d_p2:    { en: 'The core innovation is the <strong>rule-based compiler system</strong>. Instead of generating descriptions ("User prefers brevity" ~50% compliance), Meport generates actionable rules ("Max 5 lines for simple questions" ~85% compliance). Each question option carries an <code>export_rule</code> field that becomes a concrete AI behavior instruction.', pl: 'Kluczową innowacją jest <strong>system kompilatorów opartych na regułach</strong>. Zamiast generować opisy ("Użytkownik preferuje zwięzłość" ~50% skuteczności), Meport generuje akcjonalne reguły ("Max 5 linii na proste pytania" ~85% skuteczności). Każda opcja pytania ma pole <code>export_rule</code>, które staje się konkretną instrukcją zachowania AI.' },

  // ═══════ SECTION: INSTALLATION ═══════
  s_install_title:  { en: 'Installation', pl: 'Instalacja' },
  s_install_b_p1:   { en: 'Meport requires <strong>Node.js 18 or newer</strong>. If you don\'t have Node.js, download it from <a href="https://nodejs.org">nodejs.org</a>. Once you have Node.js, no installation is needed. Just run this in your terminal:', pl: 'Meport wymaga <strong>Node.js 18 lub nowszego</strong>. Jeśli nie masz Node.js, pobierz go ze strony <a href="https://nodejs.org">nodejs.org</a>. Gdy masz Node.js, nie trzeba nic instalować. Uruchom to w terminalu:' },
  s_install_b_p2:   { en: 'If you plan to use Meport regularly, you can install it globally:', pl: 'Jeśli planujesz używać Meport regularnie, możesz zainstalować go globalnie:' },
  s_install_tip_title: { en: 'What is a terminal?', pl: 'Co to jest terminal?' },
  s_install_tip_body:  { en: 'The terminal (also called command line) is a text-based interface on your computer. On Mac, open "Terminal" from Applications. On Windows, search for "PowerShell" or "Command Prompt".', pl: 'Terminal (zwany też linią poleceń) to tekstowy interfejs na Twoim komputerze. Na Macu otwórz "Terminal" z Aplikacji. Na Windows wyszukaj "PowerShell" lub "Wiersz poleceń".' },

  s_install_pw_p1:  { en: 'Requires <strong>Node.js 18+</strong>. Use <code>npx</code> for zero-install runs or install globally with <code>npm</code>.', pl: 'Wymaga <strong>Node.js 18+</strong>. Użyj <code>npx</code> do uruchomienia bez instalacji lub zainstaluj globalnie przez <code>npm</code>.' },

  s_install_d_p1:   { en: 'Requires <strong>Node.js 18+</strong> and <strong>pnpm</strong> for building from source.', pl: 'Wymaga <strong>Node.js 18+</strong> i <strong>pnpm</strong> do budowania ze źródeł.' },
  s_install_d_p2:   { en: 'The monorepo uses pnpm workspaces. TypeScript with strict mode, vitest for testing.', pl: 'Monorepo używa pnpm workspaces. TypeScript z strict mode, vitest do testów.' },

  // ═══════ SECTION: QUICK START ═══════
  s_quick_title:    { en: 'Quick Start', pl: 'Szybki start' },
  s_quick_b_intro:  { en: 'Create your first AI profile in 5 minutes. Here\'s what to do:', pl: 'Stwórz swój pierwszy profil AI w 5 minut. Oto co zrobić:' },
  s_quick_b_step1:  { en: '<strong>Open your terminal</strong> and run this command. Meport\'s interactive shell will start.', pl: '<strong>Otwórz terminal</strong> i wpisz tę komendę. Uruchomi się interaktywna powłoka Meport.' },
  s_quick_b_step2:  { en: '<strong>Meport scans your system</strong> automatically. It detects your language, timezone, and tech tools. Nothing personal is read without your permission.', pl: '<strong>Meport skanuje Twój system</strong> automatycznie. Wykrywa język, strefę czasową i narzędzia. Nic osobistego nie jest czytane bez Twojej zgody.' },
  s_quick_b_step3:  { en: '<strong>Answer the questions.</strong> Start with <code>meport profile</code>. You\'ll get about 20-30 questions about how you like to communicate, work, and think. You can skip any question you don\'t want to answer.', pl: '<strong>Odpowiedz na pytania.</strong> Zacznij od <code>meport profile</code>. Dostaniesz ok. 20-30 pytań o to, jak lubisz się komunikować, pracować i myśleć. Możesz pominąć każde pytanie.' },
  s_quick_b_step4:  { en: '<strong>Export your profile.</strong> When you\'re done, export to any AI platform. For example, to get instructions for ChatGPT:', pl: '<strong>Eksportuj swój profil.</strong> Gdy skończysz, eksportuj na dowolną platformę AI. Na przykład, aby uzyskać instrukcje dla ChatGPT:' },
  s_quick_b_step5:  { en: '<strong>Paste the result</strong> into your AI\'s custom instructions (Settings in ChatGPT, System prompt in Claude, etc.). That\'s it!', pl: '<strong>Wklej wynik</strong> do niestandardowych instrukcji AI (Ustawienia w ChatGPT, Prompt systemowy w Claude, itp.). To wszystko!' },
  s_quick_b_output_title: { en: 'What you\'ll see', pl: 'Co zobaczysz' },
  s_quick_b_output_body:  { en: 'After profiling, Meport creates a file called <code>meport-profile.json</code> in your current folder. This is your profile. The export command generates platform-specific text that you paste into your AI tool.', pl: 'Po profilowaniu Meport tworzy plik <code>meport-profile.json</code> w bieżącym folderze. To jest Twój profil. Komenda export generuje tekst specyficzny dla platformy, który wklejasz do narzędzia AI.' },

  s_quick_pw_intro: { en: 'Multiple ways to create and use a profile:', pl: 'Wiele sposobów na stworzenie i wykorzystanie profilu:' },
  s_quick_d_intro:  { en: 'Key workflows for development and automation:', pl: 'Kluczowe przepływy pracy do rozwoju i automatyzacji:' },

  // ═══════ SECTION: GLOSSARY ═══════
  s_glossary_title: { en: 'Glossary', pl: 'Słownik' },
  s_glossary_intro: { en: 'Key terms you\'ll see throughout Meport:', pl: 'Kluczowe pojęcia, które zobaczysz w Meport:' },

  // ═══════ SECTION: COMMANDS ═══════
  s_cmd_title:      { en: 'Commands Reference', pl: 'Komendy' },
  s_cmd_intro:      { en: 'All Meport commands with flags, types, and examples. Default profile path is <code>./meport-profile.json</code> for all commands.', pl: 'Wszystkie komendy Meport z flagami, typami i przykładami. Domyślna ścieżka profilu to <code>./meport-profile.json</code> dla wszystkich komend.' },
  s_cmd_dev_intro:  { en: 'Complete command list. All 23 commands registered in <code>packages/cli/src/index.ts</code>. Hidden commands (<code>sync</code>, <code>update</code>, <code>continue</code>, <code>profile-legacy</code>) are deprecated.', pl: 'Pełna lista komend. Wszystkie 23 komendy zarejestrowane w <code>packages/cli/src/index.ts</code>. Ukryte komendy (<code>sync</code>, <code>update</code>, <code>continue</code>, <code>profile-legacy</code>) są przestarzałe.' },
  s_cmd_dev_all_label: { en: 'All 23 commands', pl: 'Wszystkie 23 komendy' },

  // Command descriptions
  cmd_profile_desc: { en: 'Start profiling. Creates a comprehensive AI personality profile through interactive questions. If an AI provider is configured, offers AI-driven conversational mode.', pl: 'Rozpocznij profilowanie. Tworzy kompleksowy profil osobowości AI przez interaktywne pytania. Jeśli dostawca AI jest skonfigurowany, oferuje tryb konwersacyjny napędzany AI.' },
  cmd_profile_o:    { en: 'Output file path (default: ./meport-profile.json)', pl: 'Ścieżka pliku wyjściowego (domyślnie: ./meport-profile.json)' },
  cmd_profile_e:    { en: 'Auto-export to this directory after profiling', pl: 'Auto-eksport do tego katalogu po profilowaniu' },
  cmd_profile_l:    { en: 'Language for questions: en or pl', pl: 'Język pytań: en lub pl' },
  cmd_profile_s:    { en: 'Scan files or folders for profile data before questions', pl: 'Skanuj pliki lub foldery w poszukiwaniu danych profilowych przed pytaniami' },
  cmd_profile_q:    { en: 'Quick mode — key questions only, ~5 min profile', pl: 'Tryb szybki — tylko kluczowe pytania, profil w ~5 min' },
  cmd_profile_ai:   { en: 'AI-driven conversational profiling (requires API key via meport config)', pl: 'Profilowanie konwersacyjne z AI (wymaga klucza API przez meport config)' },

  cmd_export_desc:    { en: 'Export your profile to a specific platform or all platforms at once. Uses rule-based compilers that generate actionable AI instructions.', pl: 'Eksportuj profil na konkretną platformę lub wszystkie platformy naraz. Używa kompilatorów opartych na regułach generujących akcjonalne instrukcje AI.' },
  cmd_export_platform: { en: 'Target: chatgpt, claude, claude-code, cursor, copilot, windsurf, ollama, gemini, grok, perplexity, agents-md, openclaw, generic, json', pl: 'Cel: chatgpt, claude, claude-code, cursor, copilot, windsurf, ollama, gemini, grok, perplexity, agents-md, openclaw, generic, json' },
  cmd_export_o:     { en: 'Output file path', pl: 'Ścieżka pliku wyjściowego' },
  cmd_export_a:     { en: 'Export to all available platforms', pl: 'Eksportuj na wszystkie dostępne platformy' },
  cmd_export_c:     { en: 'Copy export to clipboard (single platform)', pl: 'Skopiuj eksport do schowka (jedna platforma)' },
  cmd_export_legacy: { en: 'Use legacy description-based compilers', pl: 'Użyj starszych kompilatorów opisowych' },
  cmd_common_profile: { en: 'Profile JSON path (default: ./meport-profile.json)', pl: 'Ścieżka JSON profilu (domyślnie: ./meport-profile.json)' },
  cmd_common_lang:  { en: 'Language for UI: en or pl', pl: 'Język interfejsu: en lub pl' },

  cmd_deploy_desc:  { en: 'Push profile to all platforms automatically. Writes files directly to Cursor, Claude Code, Copilot, Windsurf, AGENTS.md, and Ollama. Shows clipboard instructions for ChatGPT, Claude web, Gemini, Grok, and Perplexity.', pl: 'Wypchnij profil na wszystkie platformy automatycznie. Zapisuje pliki bezpośrednio do Cursor, Claude Code, Copilot, Windsurf, AGENTS.md i Ollama. Pokazuje instrukcje kopiowania dla ChatGPT, Claude web, Gemini, Grok i Perplexity.' },
  cmd_deploy_a:     { en: 'Deploy to all targets without asking', pl: 'Wdróż na wszystkie cele bez pytania' },
  cmd_deploy_g:     { en: 'Deploy to ALL tracked projects (from meport projects)', pl: 'Wdróż do WSZYSTKICH śledzonych projektów (z meport projects)' },

  cmd_view_desc:    { en: 'View a visual summary of your profile — dimensions, completeness, and key personality traits.', pl: 'Wyświetl wizualne podsumowanie profilu — wymiary, kompletność i kluczowe cechy osobowości.' },
  cmd_edit_desc:    { en: 'Edit individual profile dimensions interactively. Select a dimension and change its value.', pl: 'Edytuj poszczególne wymiary profilu interaktywnie. Wybierz wymiar i zmień jego wartość.' },
  cmd_deepen_desc:  { en: 'Go deeper — targeted questions about shallow or unexplored areas of your profile. Requires AI provider.', pl: 'Zagłęb się — celowane pytania o płytkie lub niezbadane obszary profilu. Wymaga dostawcy AI.' },
  cmd_refresh_desc: { en: 'Refresh your profile — re-scan system, detect changes, update dimensions, and re-export to all platforms.', pl: 'Odśwież profil — ponownie skanuj system, wykryj zmiany, zaktualizuj wymiary i ponownie eksportuj na wszystkie platformy.' },
  cmd_history_desc: { en: 'Show profile version history and changes over time. Track how your profile evolved.', pl: 'Pokaż historię wersji profilu i zmiany w czasie. Śledź ewolucję profilu.' },
  cmd_config_desc:  { en: 'Configure AI provider and API keys. 6 providers: Claude (Anthropic), OpenAI, Gemini (Google), Grok (xAI), OpenRouter, or Ollama (local, free). Config stored in ~/.meport/config.json.', pl: 'Skonfiguruj dostawcę AI i klucze API. 6 dostawców: Claude (Anthropic), OpenAI, Gemini (Google), Grok (xAI), OpenRouter lub Ollama (lokalny, darmowy). Konfiguracja w ~/.meport/config.json.' },
  cmd_scan_desc:    { en: 'Scan files or folders to preview what Meport can detect without modifying your profile. Shows detected dimensions and their sources.', pl: 'Skanuj pliki lub foldery, aby zobaczyć co Meport może wykryć bez modyfikowania profilu. Pokazuje wykryte wymiary i ich źródła.' },
  cmd_packs_desc:   { en: 'Manage question packs. List shows available packs and their status (active/inactive). Add enables a pack and asks its questions. Remove deactivates a pack (dimensions already collected are kept).', pl: 'Zarządzaj pakietami pytań. List pokazuje dostępne pakiety i ich status. Add aktywuje pakiet i zadaje pytania. Remove dezaktywuje pakiet (zebrane wymiary są zachowane).' },
  cmd_import_desc:  { en: 'Import and upgrade existing custom instructions from ChatGPT, Claude, or Cursor into a Meport profile. Analyzes your existing instructions and maps them to Meport dimensions.', pl: 'Importuj i ulepsz istniejące niestandardowe instrukcje z ChatGPT, Claude lub Cursor do profilu Meport. Analizuje Twoje istniejące instrukcje i mapuje je na wymiary Meport.' },
  cmd_import_f:     { en: 'Import from file instead of clipboard', pl: 'Importuj z pliku zamiast ze schowka' },
  cmd_discover_desc: { en: 'Find existing AI config files (CLAUDE.md, .cursorrules, .github/copilot-instructions.md, etc.) on your computer and optionally import them.', pl: 'Znajdź istniejące pliki konfiguracyjne AI (CLAUDE.md, .cursorrules, .github/copilot-instructions.md, itp.) na komputerze i opcjonalnie zaimportuj je.' },
  cmd_projects_desc: { en: 'Manage tracked projects for multi-deploy. Add, remove, or list project directories. Used with <code>meport deploy --global</code>.', pl: 'Zarządzaj śledzonymi projektami do multi-deploy. Dodawaj, usuwaj lub listuj katalogi projektów. Używane z <code>meport deploy --global</code>.' },
  cmd_card_desc:    { en: 'Generate a visual ASCII personality card from your profile. Shows your key dimensions, archetype, and communication style at a glance.', pl: 'Generuj wizualną kartę osobowości ASCII z Twojego profilu. Pokazuje kluczowe wymiary, archetyp i styl komunikacji na pierwszy rzut oka.' },
  cmd_report_desc:  { en: 'Generate an AI-powered personal insights report. Analyzes your profile to reveal patterns, strengths, blind spots, and predictions. Requires AI provider configured via <code>meport config</code>.', pl: 'Generuj raport osobistych spostrzeżeń oparty na AI. Analizuje Twój profil, by ujawnić wzorce, mocne strony, ślepe punkty i przewidywania. Wymaga skonfigurowanego dostawcy AI przez <code>meport config</code>.' },
  cmd_report_o:     { en: 'Save report to file', pl: 'Zapisz raport do pliku' },
  cmd_demo_desc:    { en: 'Compare how AI responds with and without your profile. Requires AI provider configured via <code>meport config</code>.', pl: 'Porównaj jak AI odpowiada z Twoim profilem i bez niego. Wymaga skonfigurowanego dostawcy AI przez <code>meport config</code>.' },
  cmd_feedback_desc: { en: 'Rate how well AI responds with your profile. Helps track profile quality over time. Scores are saved in your profile metadata.', pl: 'Oceń jak dobrze AI odpowiada z Twoim profilem. Pomaga śledzić jakość profilu w czasie. Oceny są zapisywane w metadanych profilu.' },
  cmd_shell_desc:   { en: 'Launch the interactive shell — a menu-driven interface where you can run any Meport command without remembering flags. This is the default when you run <code>npx meport</code> with no arguments.', pl: 'Uruchom interaktywną powłokę — interfejs z menu, w którym możesz uruchomić dowolną komendę Meport bez pamiętania flag. To domyślne zachowanie gdy uruchomisz <code>npx meport</code> bez argumentów.' },

  // ═══════ SECTION: QUESTION PACKS ═══════
  s_packs_title:    { en: 'Question Packs', pl: 'Pakiety pytań' },
  s_packs_intro:    { en: 'Meport organizes questions into <strong>9 packs</strong>. During profiling you choose which packs to complete. Two packs are required (Micro Setup and Communication DNA), the rest are optional.', pl: 'Meport organizuje pytania w <strong>9 pakietów</strong>. Podczas profilowania wybierasz, które pakiety ukończyć. Dwa pakiety są wymagane (Micro Setup i Communication DNA), reszta jest opcjonalna.' },
  s_packs_manage_title: { en: 'Managing packs', pl: 'Zarządzanie pakietami' },
  s_packs_manage_body:  { en: 'You can add or remove packs anytime after initial profiling:', pl: 'Możesz dodawać lub usuwać pakiety w dowolnym momencie po profilowaniu:' },

  s_packs_dev_intro: { en: 'Packs are JSON files in <code>packages/core/questions/packs/</code>. Each has an English version and a Polish translation in the <code>pl/</code> subdirectory. Question types: <code>select</code>, <code>multi_select</code>, <code>open_text</code>, <code>scale</code>, <code>scenario</code>, <code>spectrum</code>, <code>ranking</code>, <code>matrix</code>.', pl: 'Pakiety to pliki JSON w <code>packages/core/questions/packs/</code>. Każdy ma wersję angielską i polskie tłumaczenie w podkatalogu <code>pl/</code>. Typy pytań: <code>select</code>, <code>multi_select</code>, <code>open_text</code>, <code>scale</code>, <code>scenario</code>, <code>spectrum</code>, <code>ranking</code>, <code>matrix</code>.' },
  s_packs_dev_types: { en: 'Key pack fields: <code>meta_profiling</code> enables behavioral signal capture (e.g., response_time). <code>export_rule</code> on each option becomes a concrete AI instruction. <code>maps_to</code> defines which profile dimension the answer fills. <code>skip_if</code> skips the question when a scan already detected the dimension with high confidence. <code>sensitive</code> marks packs with personal data (health, finance).', pl: 'Kluczowe pola pakietu: <code>meta_profiling</code> włącza przechwytywanie sygnałów behawioralnych (np. response_time). <code>export_rule</code> na każdej opcji staje się konkretną instrukcją AI. <code>maps_to</code> definiuje, który wymiar profilu wypełnia odpowiedź. <code>skip_if</code> pomija pytanie gdy skan już wykrył wymiar z wysoką pewnością. <code>sensitive</code> oznacza pakiety z danymi osobistymi (zdrowie, finanse).' },

  // ═══════ SECTION: EXPORT FORMATS ═══════
  s_export_title:       { en: 'Export Formats', pl: 'Formaty eksportu' },
  s_export_intro:       { en: 'Meport compiles your profile into <strong>14 platform-specific formats</strong>. Each compiler respects the platform\'s character limits, file format, and instruction style.', pl: 'Meport kompiluje Twój profil do <strong>14 formatów specyficznych dla platform</strong>. Każdy kompilator respektuje limity znaków platformy, format pliku i styl instrukcji.' },
  s_export_auto_title:  { en: 'Auto-deploy targets', pl: 'Cele auto-deploy' },
  s_export_auto_body:   { en: '<code>meport deploy</code> writes files directly for: <strong>Cursor</strong> (.cursor/rules/meport.mdc), <strong>Claude Code</strong> (CLAUDE.md), <strong>Copilot</strong> (.github/copilot-instructions.md), <strong>Windsurf</strong> (.windsurfrules), <strong>AGENTS.md</strong> (project root), <strong>Ollama</strong> (Modelfile + ollama create).', pl: '<code>meport deploy</code> zapisuje pliki bezpośrednio dla: <strong>Cursor</strong> (.cursor/rules/meport.mdc), <strong>Claude Code</strong> (CLAUDE.md), <strong>Copilot</strong> (.github/copilot-instructions.md), <strong>Windsurf</strong> (.windsurfrules), <strong>AGENTS.md</strong> (root projektu), <strong>Ollama</strong> (Modelfile + ollama create).' },
  s_export_manual_title: { en: 'Manual targets (clipboard)', pl: 'Cele ręczne (schowek)' },
  s_export_manual_body:  { en: 'For platforms without config files, use <code>meport export &lt;platform&gt; --copy</code> and paste into the platform\'s custom instructions: <strong>ChatGPT</strong> (Settings > Personalization > Custom instructions), <strong>Claude</strong> (Account > Profile), <strong>Gemini</strong>, <strong>Grok</strong>, <strong>Perplexity</strong>.', pl: 'Dla platform bez plików konfiguracyjnych użyj <code>meport export &lt;platform&gt; --copy</code> i wklej do instrukcji niestandardowych platformy: <strong>ChatGPT</strong> (Ustawienia > Personalizacja), <strong>Claude</strong> (Konto > Profil), <strong>Gemini</strong>, <strong>Grok</strong>, <strong>Perplexity</strong>.' },

  s_export_dev_intro:   { en: 'The compiler system uses a two-phase architecture: <strong>collect</strong> (gather rules from all sources) and <strong>format</strong> (platform-specific output). All 14 compilers extend <code>BaseCompiler</code> and are registered in <code>packages/core/src/compiler/index.ts</code>.', pl: 'System kompilatorów używa dwufazowej architektury: <strong>collect</strong> (zbierz reguły ze wszystkich źródeł) i <strong>format</strong> (wyjście specyficzne dla platformy). Wszystkie 14 kompilatorów rozszerza <code>BaseCompiler</code> i jest zarejestrowanych w <code>packages/core/src/compiler/index.ts</code>.' },

  // ═══════ SECTION: SCANNING ═══════
  s_scan_title:         { en: 'Scanning', pl: 'Skanowanie' },
  s_scan_intro:         { en: 'Meport can automatically detect information about you from your system and files. This pre-fills profile dimensions so you answer fewer questions.', pl: 'Meport może automatycznie wykryć informacje o Tobie z systemu i plików. To wypełnia wcześniej wymiary profilu, dzięki czemu odpowiadasz na mniej pytań.' },
  s_scan_sys_title:     { en: 'System scan (automatic)', pl: 'Skan systemowy (automatyczny)' },
  s_scan_sys_body:      { en: 'Runs automatically when you start profiling. No consent needed. Detects: <strong>language</strong> (from system locale), <strong>timezone</strong>, <strong>name and email</strong> (from ~/.gitconfig), <strong>tech stack</strong> (from project files like package.json, Cargo.toml), <strong>AI tools in use</strong> (by checking if ~/.claude, ~/.cursor, ~/.ollama and similar config directories exist). No file contents are read — only existence checks and config values.', pl: 'Uruchamiany automatycznie przy profilowaniu. Nie wymaga zgody. Wykrywa: <strong>język</strong> (z ustawień regionalnych), <strong>strefę czasową</strong>, <strong>imię i email</strong> (z ~/.gitconfig), <strong>tech stack</strong> (z plików projektu jak package.json, Cargo.toml), <strong>narzędzia AI</strong> (sprawdzając czy katalogi ~/.claude, ~/.cursor, ~/.ollama i podobne istnieją). Zawartość plików nie jest czytana — tylko sprawdzanie istnienia i wartości konfiguracyjne.' },
  s_scan_file_title:    { en: 'File scan (opt-in)', pl: 'Skan plików (opt-in)' },
  s_scan_file_body:     { en: 'Only runs when you explicitly provide file paths or a directory with <code>--scan</code>. Requires your consent. Supported extensions: .txt, .md, .json, .csv, .html, .htm, .ics. Maximum file size: 1MB per file. When scanning a directory, only top-level files are checked (not recursive). Classified file types: resume/CV, LinkedIn export, bio, calendar (.ics), browser bookmarks, notes/todos. All extraction uses local regex patterns — no data is sent anywhere.', pl: 'Uruchamiany tylko gdy jawnie podasz ścieżki plików lub katalog z <code>--scan</code>. Wymaga Twojej zgody. Obsługiwane rozszerzenia: .txt, .md, .json, .csv, .html, .htm, .ics. Maksymalny rozmiar pliku: 1MB. Przy skanowaniu katalogu sprawdzane są tylko pliki najwyższego poziomu (nie rekurencyjnie). Klasyfikowane typy: resume/CV, eksport LinkedIn, bio, kalendarz (.ics), zakładki przeglądarki, notatki i listy todo. Cała ekstrakcja używa lokalnych wyrażeń regularnych — żadne dane nie są wysyłane.' },
  s_scan_privacy_title: { en: 'Privacy note', pl: 'Informacja o prywatności' },
  s_scan_privacy_body:  { en: 'File scanning never uploads your data. All extraction uses local regex patterns. Files over 1MB are skipped. You always see what was detected and can reject any value.', pl: 'Skanowanie plików nigdy nie wysyła Twoich danych. Cała ekstrakcja używa lokalnych wyrażeń regularnych. Pliki powyżej 1MB są pomijane. Zawsze widzisz co zostało wykryte i możesz odrzucić każdą wartość.' },
  s_scan_dev_intro:     { en: 'Scanner architecture in <code>packages/core/src/profiler/scanner.ts</code>. Two main functions: <code>runSystemScan()</code> and <code>runFileScan()</code>. Both return a <code>ScanContext</code> with a Map of detected dimensions (with confidence scores). The profiling engine uses confidence thresholds to decide: >0.8 = skip question, 0.5-0.8 = confirm mode, <0.5 = ask full question.', pl: 'Architektura skanera w <code>packages/core/src/profiler/scanner.ts</code>. Dwie główne funkcje: <code>runSystemScan()</code> i <code>runFileScan()</code>. Obie zwracają <code>ScanContext</code> z Mapą wykrytych wymiarów (ze współczynnikami pewności). Silnik profilowania używa progów pewności: >0.8 = pomiń pytanie, 0.5-0.8 = tryb potwierdzenia, <0.5 = zadaj pełne pytanie.' },

  // ═══════ SECTION: AI PROVIDERS ═══════
  s_ai_title:       { en: 'AI Providers', pl: 'Dostawcy AI' },
  s_ai_intro:       { en: 'Meport can use AI for conversational profiling (instead of fixed questions). Six providers are supported: Claude (Anthropic), OpenAI, Gemini (Google), Grok (xAI), OpenRouter, and Ollama (local). AI is optional — pack-based profiling works without any AI configuration.', pl: 'Meport może używać AI do konwersacyjnego profilowania (zamiast stałych pytań). Sześciu dostawców jest obsługiwanych: Claude (Anthropic), OpenAI, Gemini (Google), Grok (xAI), OpenRouter i Ollama (lokalny). AI jest opcjonalne — profilowanie pakietowe działa bez konfiguracji AI.' },
  s_ai_claude:      { en: 'Best quality. Get an API key from <a href="https://console.anthropic.com">console.anthropic.com</a>. Paid usage (charged per token).', pl: 'Najlepsza jakość. Pobierz klucz API z <a href="https://console.anthropic.com">console.anthropic.com</a>. Płatne użycie (opłata za token).' },
  s_ai_openai:      { en: 'Good quality. Get an API key from <a href="https://platform.openai.com">platform.openai.com</a>. Paid usage.', pl: 'Dobra jakość. Pobierz klucz API z <a href="https://platform.openai.com">platform.openai.com</a>. Płatne użycie.' },
  s_ai_ollama:      { en: '<strong>Free and 100% private.</strong> Ollama runs AI models locally on your machine. Nothing is sent to any server. Great for privacy-conscious users. Requires: <a href="https://ollama.com">Ollama</a> installed, a model downloaded (llama3.1 recommended).', pl: '<strong>Darmowe i 100% prywatne.</strong> Ollama uruchamia modele AI lokalnie na Twoim komputerze. Nic nie jest wysyłane na żaden serwer. Świetne dla osób dbających o prywatność. Wymaga: <a href="https://ollama.com">Ollama</a> zainstalowane, pobrany model (zalecany llama3.1).' },
  s_ai_dev_intro:   { en: 'Config stored in <code>~/.meport/config.json</code> with restrictive file permissions (0o600). The config directory is created with 0o700 permissions.', pl: 'Konfiguracja w <code>~/.meport/config.json</code> z restrykcyjnymi uprawnieniami pliku (0o600). Katalog konfiguracyjny jest tworzony z uprawnieniami 0o700.' },

  // ═══════ SECTION: PROFILE MANAGEMENT ═══════
  s_mgmt_title:     { en: 'Profile Management', pl: 'Zarządzanie profilem' },
  s_mgmt_intro:     { en: 'Your profile is a living document. It evolves as you use Meport. Here are the tools to manage it:', pl: 'Twój profil to żywy dokument. Ewoluuje w miarę używania Meport. Oto narzędzia do zarządzania nim:' },

  // ═══════ SECTION: DEPLOYMENT ═══════
  s_deploy_title:          { en: 'Deployment', pl: 'Wdrażanie' },
  s_deploy_intro:          { en: '<code>meport deploy</code> makes Meport the management center for all your AI profiles. One command pushes your personality to every tool you use.', pl: '<code>meport deploy</code> czyni Meport centrum zarządzania wszystkimi profilami AI. Jedna komenda wypycha Twoją osobowość do każdego narzędzia.' },
  s_deploy_auto_title:     { en: 'Auto-deploy (writes files)', pl: 'Auto-deploy (zapisuje pliki)' },
  s_deploy_auto_body:      { en: 'Deploy writes config files directly to your project or home directory. Each platform has a specific file path and format that Meport knows about.', pl: 'Deploy zapisuje pliki konfiguracyjne bezpośrednio do katalogu projektu lub domowego. Każda platforma ma konkretną ścieżkę pliku i format, który Meport zna.' },
  s_deploy_projects_title: { en: 'Multi-project deploy', pl: 'Deploy do wielu projektów' },
  s_deploy_projects_body:  { en: 'Track multiple projects with <code>meport projects</code>, then deploy to all of them at once with <code>meport deploy --global</code>. Every project gets updated Cursor rules, CLAUDE.md, Copilot instructions, etc.', pl: 'Śledź wiele projektów za pomocą <code>meport projects</code>, a następnie wdróż do wszystkich naraz z <code>meport deploy --global</code>. Każdy projekt otrzymuje zaktualizowane reguły Cursor, CLAUDE.md, instrukcje Copilot, itp.' },
  s_deploy_manual_title:   { en: 'Manual deploy (clipboard)', pl: 'Ręczny deploy (schowek)' },
  s_deploy_manual_body:    { en: 'For web-based AI platforms (ChatGPT, Claude, Gemini, Grok, Perplexity), deploy shows the export content and copies it to your clipboard. You then paste it into the platform\'s custom instructions settings.', pl: 'Dla webowych platform AI (ChatGPT, Claude, Gemini, Grok, Perplexity) deploy pokazuje treść eksportu i kopiuje ją do schowka. Następnie wklejasz ją w ustawieniach instrukcji niestandardowych platformy.' },

  // ═══════ SECTION: CONFIGURATION ═══════
  s_config_title:      { en: 'Configuration', pl: 'Konfiguracja' },
  s_config_intro:      { en: 'Meport stores configuration in two files:', pl: 'Meport przechowuje konfigurację w dwóch plikach:' },
  s_config_file1:      { en: 'AI provider settings and API keys', pl: 'Ustawienia dostawcy AI i klucze API' },
  s_config_file2:      { en: 'Your personality profile (current directory)', pl: 'Twój profil osobowości (bieżący katalog)' },
  s_config_dev_intro:  { en: 'All config operations are in <code>packages/cli/src/commands/config.ts</code>. The <code>loadConfig()</code> and <code>saveConfig()</code> functions handle file I/O with proper permissions.', pl: 'Wszystkie operacje konfiguracyjne są w <code>packages/cli/src/commands/config.ts</code>. Funkcje <code>loadConfig()</code> i <code>saveConfig()</code> obsługują I/O pliku z właściwymi uprawnieniami.' },

  // ═══════ SECTION: PRIVACY & SECURITY ═══════
  s_privacy_title:   { en: 'Privacy & Security', pl: 'Prywatność i bezpieczeństwo' },

  // Beginner
  s_privacy_b_p1:    { en: 'Meport is designed with privacy as a priority. Here is exactly what happens with your data:', pl: 'Meport jest zaprojektowany z priorytetem prywatności. Oto dokładnie co się dzieje z Twoimi danymi:' },
  s_privacy_b_read_title: { en: 'What Meport reads', pl: 'Co Meport czyta' },
  s_privacy_b_read_body:  { en: '<strong>Automatically:</strong> your system language, timezone, and whether you have certain developer tools installed. It does NOT read your browser history, emails, messages, or any personal files. <strong>Only if you ask:</strong> files you specifically point to with the <code>--scan</code> flag (like a CV or notes file).', pl: '<strong>Automatycznie:</strong> język systemowy, strefę czasową i czy masz zainstalowane określone narzędzia deweloperskie. NIE czyta historii przeglądarki, e-maili, wiadomości ani żadnych osobistych plików. <strong>Tylko gdy poprosisz:</strong> pliki, które jawnie wskażesz flagą <code>--scan</code> (jak CV lub plik notatek).' },
  s_privacy_b_send_title: { en: 'What leaves your computer', pl: 'Co opuszcza Twój komputer' },
  s_privacy_b_send_body:  { en: '<strong>Without AI mode:</strong> nothing. All questions are local, all processing is local. <strong>With AI mode (--ai):</strong> your answers to interview questions are sent to the AI provider you chose (Claude, OpenAI, or Ollama). If you use Ollama, even this stays on your machine.', pl: '<strong>Bez trybu AI:</strong> nic. Wszystkie pytania są lokalne, całe przetwarzanie jest lokalne. <strong>Z trybem AI (--ai):</strong> Twoje odpowiedzi na pytania wywiadu są wysyłane do wybranego dostawcy AI (Claude, OpenAI lub Ollama). Jeśli używasz Ollama, nawet to zostaje na Twoim komputerze.' },
  s_privacy_b_store_title: { en: 'Where data is stored', pl: 'Gdzie dane są przechowywane' },
  s_privacy_b_store_body:  { en: 'Your profile is saved as a file (<code>meport-profile.json</code>) on your computer, in the folder where you ran the command. Your AI API key (if configured) is stored in <code>~/.meport/config.json</code> with restricted permissions so only you can read it. Meport has <strong>no cloud, no accounts, no telemetry, no analytics</strong>.', pl: 'Twój profil jest zapisywany jako plik (<code>meport-profile.json</code>) na komputerze, w folderze w którym uruchomiłeś komendę. Klucz API AI (jeśli skonfigurowany) jest w <code>~/.meport/config.json</code> z ograniczonymi uprawnieniami, więc tylko Ty możesz go odczytać. Meport <strong>nie ma chmury, kont, telemetrii ani analityki</strong>.' },
  s_privacy_b_ollama_title: { en: '100% offline option', pl: 'Opcja 100% offline' },
  s_privacy_b_ollama_body:  { en: 'If you use Ollama as your AI provider, absolutely nothing leaves your computer. Ollama runs AI models locally. Combined with pack-based profiling (no --ai flag), Meport works entirely offline.', pl: 'Jeśli używasz Ollama jako dostawcy AI, absolutnie nic nie opuszcza Twojego komputera. Ollama uruchamia modele AI lokalnie. W połączeniu z profilowaniem pakietowym (bez flagi --ai), Meport działa całkowicie offline.' },

  // Power
  s_privacy_pw_p1:       { en: 'Detailed breakdown of data handling:', pl: 'Szczegółowy opis obsługi danych:' },
  s_privacy_pw_sys_title: { en: 'System scan (automatic, no consent)', pl: 'Skan systemowy (automatyczny, bez zgody)' },
  s_privacy_pw_sys1:     { en: '<code>LANG</code> / <code>LC_ALL</code> env vars &rarr; language detection', pl: '<code>LANG</code> / <code>LC_ALL</code> zmienne env &rarr; wykrywanie języka' },
  s_privacy_pw_sys2:     { en: '<code>Intl.DateTimeFormat</code> API &rarr; timezone', pl: '<code>Intl.DateTimeFormat</code> API &rarr; strefa czasowa' },
  s_privacy_pw_sys3:     { en: '<code>~/.gitconfig</code> &rarr; name, email domain (personal emails filtered)', pl: '<code>~/.gitconfig</code> &rarr; imię, domena email (osobiste emaile filtrowane)' },
  s_privacy_pw_sys4:     { en: 'Project config files (package.json, Cargo.toml, etc.) &rarr; tech stack', pl: 'Pliki konfiguracyjne projektu (package.json, Cargo.toml, itp.) &rarr; tech stack' },
  s_privacy_pw_sys5:     { en: 'AI tool directories existence check (~/.claude, ~/.cursor, ~/.ollama) &rarr; tools used', pl: 'Sprawdzenie istnienia katalogów narzędzi AI (~/.claude, ~/.cursor, ~/.ollama) &rarr; używane narzędzia' },

  s_privacy_pw_file_title: { en: 'File scan (opt-in only)', pl: 'Skan plików (tylko opt-in)' },
  s_privacy_pw_file1:    { en: 'Only processes paths you explicitly provide with <code>--scan</code>', pl: 'Przetwarza tylko ścieżki jawnie podane z <code>--scan</code>' },
  s_privacy_pw_file2:    { en: 'Max file size: 1MB (larger files silently skipped)', pl: 'Max rozmiar pliku: 1MB (większe pliki cicho pomijane)' },
  s_privacy_pw_file3:    { en: 'Extraction uses local regex patterns — no AI is involved in file scanning', pl: 'Ekstrakcja używa lokalnych wyrażeń regularnych — AI nie jest zaangażowane w skanowaniu plików' },

  s_privacy_pw_net_title: { en: 'Network activity', pl: 'Aktywność sieciowa' },
  s_privacy_pw_net1:     { en: 'Without <code>--ai</code>: zero network requests. Everything is local.', pl: 'Bez <code>--ai</code>: zero żądań sieciowych. Wszystko jest lokalne.' },
  s_privacy_pw_net2:     { en: 'With <code>--ai</code>: sends questions + answers to chosen provider (Claude, OpenAI, Gemini, Grok, OpenRouter). Does NOT send file contents or scan results.', pl: 'Z <code>--ai</code>: wysyła pytania + odpowiedzi do wybranego dostawcy (Claude, OpenAI, Gemini, Grok, OpenRouter). NIE wysyła zawartości plików ani wyników skanowania.' },
  s_privacy_pw_net3:     { en: 'Ollama: all AI processing runs on localhost:11434. Zero external connections.', pl: 'Ollama: całe przetwarzanie AI działa na localhost:11434. Zero połączeń zewnętrznych.' },

  s_privacy_pw_store_title: { en: 'Storage & permissions', pl: 'Przechowywanie i uprawnienia' },
  s_privacy_pw_store1:   { en: '<code>~/.meport/config.json</code> — API keys, file permissions 0o600 (owner read/write only)', pl: '<code>~/.meport/config.json</code> — klucze API, uprawnienia pliku 0o600 (tylko odczyt/zapis właściciela)' },
  s_privacy_pw_store2:   { en: '<code>~/.meport/</code> directory — permissions 0o700 (owner only)', pl: '<code>~/.meport/</code> katalog — uprawnienia 0o700 (tylko właściciel)' },
  s_privacy_pw_store3:   { en: 'No telemetry, no analytics, no usage tracking, no cloud sync, no accounts', pl: 'Brak telemetrii, analityki, śledzenia użycia, synchronizacji chmurowej, kont' },

  s_privacy_dev_intro:   { en: 'Full privacy architecture for code audit:', pl: 'Pełna architektura prywatności do audytu kodu:' },

  // ═══════ SECTION: ARCHITECTURE (Dev) ═══════
  s_arch_title:     { en: 'Architecture', pl: 'Architektura' },
  s_arch_intro:     { en: 'Meport is a TypeScript monorepo using pnpm workspaces. The project is structured into three packages with clear boundaries:', pl: 'Meport to monorepo TypeScript używające pnpm workspaces. Projekt jest podzielony na trzy pakiety z jasnymi granicami:' },

  // ═══════ SECTION: SCHEMA (Dev) ═══════
  s_schema_title:       { en: 'Schema Reference', pl: 'Schemat' },
  s_schema_intro:       { en: 'The <code>PersonaProfile</code> type (schema v1.0) is the core data structure. It has 5 data layers and a meta section:', pl: 'Typ <code>PersonaProfile</code> (schemat v1.0) to główna struktura danych. Ma 5 warstw danych i sekcję meta:' },
  s_schema_weights_title: { en: 'Dimension weights', pl: 'Wagi wymiarów' },
  s_schema_weights_body:  { en: 'Every dimension has a weight (1-10) that determines its priority in exports. Higher-weight dimensions are always included; lower-weight ones may be dropped to fit character limits:', pl: 'Każdy wymiar ma wagę (1-10) określającą priorytet w eksportach. Wymiary o wyższej wadze są zawsze uwzględniane; niższej wagi mogą być pomijane aby zmieścić się w limitach znaków:' },

  // ═══════ SECTION: INFERENCE (Dev) ═══════
  s_inference_title:      { en: 'Inference Engine', pl: 'Silnik inferencji' },
  s_inference_intro:      { en: 'Meport builds profiles through three inference layers. Each layer adds increasing depth with decreasing confidence:', pl: 'Meport buduje profile przez trzy warstwy inferencji. Każda warstwa dodaje rosnącą głębokość z malejącą pewnością:' },
  s_inference_l1_title:   { en: 'Layer 1: Explicit (confidence: 1.0)', pl: 'Warstwa 1: Jawna (pewność: 1.0)' },
  s_inference_l1_body:    { en: 'Direct answers from the user. Each question option has a <code>maps_to</code> field that maps to a profile dimension. Explicit values always have confidence 1.0 and can never be overridden by inference.', pl: 'Bezpośrednie odpowiedzi użytkownika. Każda opcja pytania ma pole <code>maps_to</code> mapujące na wymiar profilu. Jawne wartości zawsze mają pewność 1.0 i nigdy nie mogą być nadpisane przez inferencję.' },
  s_inference_l2a_title:  { en: 'Layer 2A: Behavioral (confidence: 0.5-0.7)', pl: 'Warstwa 2A: Behawioralna (pewność: 0.5-0.7)' },
  s_inference_l2a_body:   { en: 'Observes HOW the user answered (timing, text length, emoji usage, skip patterns). Fully deterministic, no AI needed. 6 behavioral signals in <code>packages/core/src/inference/behavioral.ts</code>:', pl: 'Obserwuje JAK użytkownik odpowiedział (czas, długość tekstu, użycie emoji, wzorce pomijania). W pełni deterministyczne, bez AI. 6 sygnałów behawioralnych w <code>packages/core/src/inference/behavioral.ts</code>:' },
  s_inference_l2b_title:  { en: 'Layer 2B: Compound (confidence: 0.5-0.95)', pl: 'Warstwa 2B: Złożona (pewność: 0.5-0.95)' },
  s_inference_l2b_body:   { en: 'Cross-tier pattern matching. Fires AFTER all explicit answers are collected. Combines multiple dimensions to detect composite patterns. 9 compound rules in <code>packages/core/src/inference/compound.ts</code>:', pl: 'Wykrywanie wzorców międzywarstwowych. Uruchamiane PO zebraniu wszystkich jawnych odpowiedzi. Łączy wiele wymiarów aby wykryć złożone wzorce. 9 reguł złożonych w <code>packages/core/src/inference/compound.ts</code>:' },
  s_inference_l3_title:   { en: 'Layer 3: Emergent (confidence: 0.3-0.7)', pl: 'Warstwa 3: Emergentna (pewność: 0.3-0.7)' },
  s_inference_l3_body:    { en: 'AI-generated observations that require user review before becoming active. Categories: personality_pattern, cognitive_pattern, behavioral_pattern, compound_signal, contradiction, hidden_strength, risk_flag. Status tracking: pending_review, accepted, edited, removed.', pl: 'Obserwacje generowane przez AI wymagające przeglądu użytkownika przed aktywacją. Kategorie: personality_pattern, cognitive_pattern, behavioral_pattern, compound_signal, contradiction, hidden_strength, risk_flag. Śledzenie statusu: pending_review, accepted, edited, removed.' },

  // ═══════ SECTION: COMPILER SYSTEM (Dev) ═══════
  s_compiler_title:         { en: 'Compiler System', pl: 'System kompilatorów' },
  s_compiler_intro:         { en: 'The compiler system is the critical component that turns profile data into actionable AI instructions. The key insight: generating rules ("Max 5 lines for simple questions" ~85% compliance) outperforms descriptions ("User prefers brevity" ~50% compliance).', pl: 'System kompilatorów to krytyczny komponent zamieniający dane profilu w akcjonalne instrukcje AI. Kluczowy insight: generowanie reguł ("Max 5 linii na proste pytania" ~85% skuteczności) przewyższa opisy ("Użytkownik preferuje zwięzłość" ~50% skuteczności).' },
  s_compiler_pipeline_title: { en: 'Rule compilation pipeline', pl: 'Pipeline kompilacji reguł' },
  s_compiler_generic_title: { en: 'Generic rule filtering', pl: 'Filtrowanie reguł generycznych' },
  s_compiler_generic_body:  { en: 'The compiler filters out generic rules ("be helpful", "be accurate", "use clear language") that every AI does by default. Rules are kept only if they contain specificity signals: IF/THEN patterns, concrete numbers, tool names, occupation references, or strong directives (NEVER/ALWAYS/MUST). Near-duplicates are detected using Jaccard similarity (threshold >= 0.45) on keyword overlap.', pl: 'Kompilator filtruje generyczne reguły ("bądź pomocny", "bądź dokładny", "używaj jasnego języka") które każde AI robi domyślnie. Reguły są zachowywane tylko jeśli zawierają sygnały specyficzności: wzorce IF/THEN, konkretne liczby, nazwy narzędzi, odniesienia do zawodu lub silne dyrektywy (NEVER/ALWAYS/MUST). Duplikaty wykrywane są za pomocą podobieństwa Jaccarda (próg >= 0.45) na nakładce słów kluczowych.' },
  s_compiler_add_title:     { en: 'Adding a new compiler', pl: 'Dodawanie nowego kompilatora' },
  s_compiler_add_body:      { en: 'To add support for a new platform, create a new compiler class, extend <code>BaseCompiler</code>, and register it in the <code>ruleCompilerRegistry</code>:', pl: 'Aby dodać obsługę nowej platformy, stwórz nową klasę kompilatora, rozszerz <code>BaseCompiler</code> i zarejestruj ją w <code>ruleCompilerRegistry</code>:' },

  // ═══════ SECTION: CONTRIBUTING (Dev) ═══════
  s_contrib_title:       { en: 'Contributing', pl: 'Współtworzenie' },
  s_contrib_intro:       { en: 'Meport is open source. Here\'s how to set up a development environment:', pl: 'Meport jest open source. Oto jak skonfigurować środowisko deweloperskie:' },
  s_contrib_areas_title: { en: 'Key contribution areas', pl: 'Kluczowe obszary współpracy' },
  s_contrib_area1:       { en: '<strong>New compilers</strong> — add export support for more AI platforms', pl: '<strong>Nowe kompilatory</strong> — dodaj obsługę eksportu dla nowych platform AI' },
  s_contrib_area2:       { en: '<strong>Question packs</strong> — create new packs or translate existing ones to more languages', pl: '<strong>Pakiety pytań</strong> — twórz nowe pakiety lub tłumacz istniejące na więcej języków' },
  s_contrib_area3:       { en: '<strong>Inference rules</strong> — add new behavioral signals or compound patterns', pl: '<strong>Reguły inferencji</strong> — dodaj nowe sygnały behawioralne lub wzorce złożone' },
  s_contrib_area4:       { en: '<strong>Scanner detectors</strong> — add new file types or system scan targets', pl: '<strong>Detektory skanera</strong> — dodaj nowe typy plików lub cele skanowania systemowego' },
  s_contrib_area5:       { en: '<strong>Fallback rules</strong> — expand the FALLBACK_RULES map in rules.ts for better dimension coverage', pl: '<strong>Reguły zapasowe</strong> — rozszerz mapę FALLBACK_RULES w rules.ts dla lepszego pokrycia wymiarów' },

  // ═══════ SECTION: FAQ ═══════
  s_faq_title:      { en: 'FAQ', pl: 'FAQ' },

  // ═══════ SECTION: COMMON ISSUES ═══════
  s_issues_title:   { en: 'Common Issues', pl: 'Częste problemy' },
};

// ─── Glossary items (beginner only) ─────────────────────

const GLOSSARY = [
  { term: { en: 'Profile', pl: 'Profil' }, def: { en: 'A JSON file containing your personality dimensions, preferences, and communication style. Created by answering questions.', pl: 'Plik JSON zawierający Twoje wymiary osobowości, preferencje i styl komunikacji. Tworzony przez odpowiadanie na pytania.' } },
  { term: { en: 'Dimension', pl: 'Wymiar' }, def: { en: 'A single trait about you, like "communication.verbosity_preference" or "work.energy_archetype". Your profile can have 30+ dimensions.', pl: 'Pojedyncza cecha o Tobie, jak "preferencja zwięzłości" lub "archetyp energii pracy". Twój profil może mieć 30+ wymiarów.' } },
  { term: { en: 'Pack', pl: 'Pakiet' }, def: { en: 'A group of related questions. For example, the "Work Patterns" pack asks about deadlines, energy, and focus. You pick which packs to answer.', pl: 'Grupa powiązanych pytań. Na przykład pakiet "Wzorce pracy" pyta o terminy, energię i skupienie. Wybierasz które pakiety odpowiedzieć.' } },
  { term: { en: 'Export', pl: 'Eksport' }, def: { en: 'Converting your profile into instructions for a specific AI platform. Meport speaks ChatGPT, Claude, Cursor, and 11 other formats.', pl: 'Konwersja profilu do instrukcji dla konkretnej platformy AI. Meport mówi w formacie ChatGPT, Claude, Cursor i 11 innych.' } },
  { term: { en: 'Compiler', pl: 'Kompilator' }, def: { en: 'The code that converts your profile into a platform-specific format. Each platform has its own compiler that knows the right format and limits.', pl: 'Kod konwertujący profil do formatu specyficznego dla platformy. Każda platforma ma swój kompilator znający właściwy format i limity.' } },
  { term: { en: 'Deploy', pl: 'Wdrożenie' }, def: { en: 'Automatically writing your profile to AI tool config files (like .cursorrules or CLAUDE.md) so they pick it up immediately.', pl: 'Automatyczne zapisywanie profilu do plików konfiguracyjnych narzędzi AI (jak .cursorrules lub CLAUDE.md) aby natychmiast go podchwyciły.' } },
];

// ─── Pack descriptions ──────────────────────────────────

const PACKS = [
  { id: 'micro-setup', name: { en: 'Micro Setup', pl: 'Micro Setup' }, desc: { en: 'Quick setup: name, language, what you use AI for, which packs to add.', pl: 'Szybka konfiguracja: imię, język, do czego używasz AI, jakie pakiety dodać.' }, required: true, sensitive: false },
  { id: 'core', name: { en: 'Communication DNA', pl: 'DNA Komunikacji' }, desc: { en: 'Communication style, AI relationship, how you like feedback and corrections.', pl: 'Styl komunikacji, relacja z AI, jak lubisz feedback i korekty.' }, required: true, sensitive: false },
  { id: 'story', name: { en: 'Your Story', pl: 'Twoja historia' }, desc: { en: 'Your background, motivations, identity. What shaped who you are.', pl: 'Twoje tło, motywacje, tożsamość. Co ukształtowało kim jesteś.' }, required: false, sensitive: false },
  { id: 'context', name: { en: 'Life Context', pl: 'Kontekst życiowy' }, desc: { en: 'Current life context: occupation, location, priorities, life stage.', pl: 'Aktualny kontekst życia: zawód, lokalizacja, priorytety, etap życia.' }, required: false, sensitive: false },
  { id: 'work', name: { en: 'Work Patterns', pl: 'Wzorce pracy' }, desc: { en: 'Work habits, energy patterns, task preferences, deadlines.', pl: 'Nawyki pracy, wzorce energii, preferencje zadań, deadliny.' }, required: false, sensitive: false },
  { id: 'lifestyle', name: { en: 'Lifestyle', pl: 'Styl życia' }, desc: { en: 'Daily routines, hobbies, social preferences.', pl: 'Codzienne rutyny, hobby, preferencje społeczne.' }, required: false, sensitive: false },
  { id: 'health', name: { en: 'Health & Wellbeing', pl: 'Zdrowie' }, desc: { en: 'Health context, neurodivergent traits, wellness habits. All answers optional.', pl: 'Kontekst zdrowotny, cechy neuroróżnorodne, nawyki wellness. Wszystkie odpowiedzi opcjonalne.' }, required: false, sensitive: true },
  { id: 'finance', name: { en: 'Financial Context', pl: 'Kontekst finansowy' }, desc: { en: 'Financial context, budget awareness, spending style. All answers optional.', pl: 'Kontekst finansowy, świadomość budżetu, styl wydatków. Wszystkie odpowiedzi opcjonalne.' }, required: false, sensitive: true },
  { id: 'learning', name: { en: 'Learning Style', pl: 'Styl uczenia' }, desc: { en: 'How you learn, what you\'re studying, preferred learning format.', pl: 'Jak się uczysz, co studiujesz, preferowany format nauki.' }, required: false, sensitive: false },
];

// ─── Platform list ──────────────────────────────────────

const PLATFORMS = [
  { id: 'chatgpt', name: 'ChatGPT', file: { en: 'Custom instructions text', pl: 'Tekst instrukcji' }, type: 'clipboard' },
  { id: 'claude', name: 'Claude', file: { en: 'Profile text for claude.ai', pl: 'Tekst profilu dla claude.ai' }, type: 'clipboard' },
  { id: 'claude-code', name: 'Claude Code', file: 'CLAUDE.md', type: 'auto' },
  { id: 'cursor', name: 'Cursor', file: '.cursor/rules/meport.mdc', type: 'auto' },
  { id: 'copilot', name: 'GitHub Copilot', file: '.github/copilot-instructions.md', type: 'auto' },
  { id: 'windsurf', name: 'Windsurf', file: '.windsurfrules', type: 'auto' },
  { id: 'agents-md', name: 'AGENTS.md', file: 'AGENTS.md', type: 'auto' },
  { id: 'ollama', name: 'Ollama', file: 'Modelfile', type: 'auto' },
  { id: 'gemini', name: 'Gemini', file: { en: 'Custom instructions text', pl: 'Tekst instrukcji' }, type: 'clipboard' },
  { id: 'grok', name: 'Grok', file: { en: 'Custom instructions text', pl: 'Tekst instrukcji' }, type: 'clipboard' },
  { id: 'perplexity', name: 'Perplexity', file: { en: 'Custom instructions text', pl: 'Tekst instrukcji' }, type: 'clipboard' },
  { id: 'openclaw', name: 'OpenClaw', file: { en: 'SOUL.md + AGENTS.md', pl: 'SOUL.md + AGENTS.md' }, type: 'auto' },
  { id: 'generic', name: 'Generic', file: 'meport-rules.md', type: 'clipboard' },
  { id: 'json', name: 'JSON', file: 'meport-profile.json', type: 'clipboard' },
];

// ─── FAQ items ──────────────────────────────────────────

const FAQ_BEGINNER = [
  { q: { en: 'Is Meport free?', pl: 'Czy Meport jest darmowy?' }, a: { en: 'Yes. Meport is completely free and open source. The AI-driven interview mode requires an API key from Claude, OpenAI, or a free local Ollama setup, but pack-based profiling (the default) needs nothing.', pl: 'Tak. Meport jest całkowicie darmowy i open source. Tryb wywiadu z AI wymaga klucza API od Claude, OpenAI lub darmowej lokalnej instalacji Ollama, ale profilowanie pakietowe (domyślne) nie wymaga niczego.' } },
  { q: { en: 'Do I need to be technical to use it?', pl: 'Czy muszę być techniczny aby używać?' }, a: { en: 'You need to be comfortable opening a terminal and typing commands. But the questions themselves are about you — no technical knowledge needed. If you can copy and paste text, you can use Meport.', pl: 'Musisz umieć otworzyć terminal i wpisywać komendy. Ale same pytania dotyczą Ciebie — nie jest potrzebna wiedza techniczna. Jeśli umiesz kopiować i wklejać tekst, możesz używać Meport.' } },
  { q: { en: 'How long does profiling take?', pl: 'Ile trwa profilowanie?' }, a: { en: 'Quick mode: about 5 minutes. Full profiling: 15-30 minutes depending on how many packs you choose. You can stop anytime and continue later.', pl: 'Tryb szybki: ok. 5 minut. Pełne profilowanie: 15-30 minut w zależności od liczby wybranych pakietów. Możesz przerwać w dowolnym momencie i kontynuować później.' } },
  { q: { en: 'What happens to my data?', pl: 'Co się dzieje z moimi danymi?' }, a: { en: 'Your profile stays on your computer as a local file. Nothing is uploaded to any cloud. If you use Ollama, even the AI processing is local. There are no accounts, no analytics, no tracking.', pl: 'Twój profil zostaje na Twoim komputerze jako plik lokalny. Nic nie jest wysyłane do chmury. Jeśli używasz Ollama, nawet przetwarzanie AI jest lokalne. Nie ma kont, analityki ani śledzenia.' } },
  { q: { en: 'Can I change my profile later?', pl: 'Czy mogę później zmienić profil?' }, a: { en: 'Yes! Use <code>meport edit</code> to change individual answers, <code>meport deepen</code> to add more detail, or <code>meport refresh</code> to update everything and re-export.', pl: 'Tak! Użyj <code>meport edit</code> aby zmienić pojedyncze odpowiedzi, <code>meport deepen</code> aby dodać więcej szczegółów, lub <code>meport refresh</code> aby wszystko zaktualizować i ponownie eksportować.' } },
  { q: { en: 'Which AI platforms are supported?', pl: 'Które platformy AI są obsługiwane?' }, a: { en: 'ChatGPT, Claude (web + Code), Cursor, GitHub Copilot, Windsurf, Ollama, Gemini, Grok, Perplexity, AGENTS.md, OpenClaw — 14 platforms total, with more coming.', pl: 'ChatGPT, Claude (web + Code), Cursor, GitHub Copilot, Windsurf, Ollama, Gemini, Grok, Perplexity, AGENTS.md, OpenClaw — 14 platform łącznie, więcej w drodze.' } },
];

const FAQ_POWER = [
  { q: { en: 'Rule-based vs description-based exports?', pl: 'Eksporty oparte na regułach vs opisowe?' }, a: { en: 'Rule-based (default, recommended) generates actionable IF/THEN instructions like "Max 5 lines for simple questions" (~85% AI compliance). Description-based (--legacy) generates prose descriptions like "User prefers brevity" (~50% compliance). Always use rule-based unless debugging.', pl: 'Oparte na regułach (domyślne, zalecane) generują akcjonalne instrukcje IF/THEN jak "Max 5 linii na proste pytania" (~85% skuteczności). Opisowe (--legacy) generują opisy prozą jak "Użytkownik preferuje zwięzłość" (~50% skuteczności). Zawsze używaj reguł chyba że debugujesz.' } },
  { q: { en: 'How does AI-driven profiling differ from pack-based?', pl: 'Jak profilowanie z AI różni się od pakietowego?' }, a: { en: 'Pack-based uses fixed questions with predefined options — fast, deterministic, works offline. AI-driven is conversational — the AI asks follow-up questions based on your answers, resulting in richer profiles but requiring an API key.', pl: 'Pakietowe używa stałych pytań z predefiniowanymi opcjami — szybkie, deterministyczne, działa offline. Z AI jest konwersacyjne — AI zadaje pytania uzupełniające na podstawie Twoich odpowiedzi, dając bogatsze profile ale wymagając klucza API.' } },
  { q: { en: 'Can I use Meport in CI/CD?', pl: 'Czy mogę używać Meport w CI/CD?' }, a: { en: 'Yes. Export with <code>meport export cursor -o .cursor/rules/meport.mdc</code> in your pipeline. The profile JSON can be committed to your repo (it contains no secrets). Deploy with <code>meport deploy --all</code>.', pl: 'Tak. Eksportuj z <code>meport export cursor -o .cursor/rules/meport.mdc</code> w pipeline. JSON profilu może być commitowany do repo (nie zawiera sekretów). Wdróż z <code>meport deploy --all</code>.' } },
  { q: { en: 'What if I use multiple AI tools?', pl: 'Co jeśli używam wielu narzędzi AI?' }, a: { en: 'That\'s the whole point. One profile, 14 exports. Run <code>meport deploy --all</code> and every tool gets your personality. Use <code>meport projects</code> to track multiple project directories.', pl: 'O to właśnie chodzi. Jeden profil, 14 eksportów. Uruchom <code>meport deploy --all</code> i każde narzędzie dostaje Twoją osobowość. Użyj <code>meport projects</code> do śledzenia wielu katalogów projektów.' } },
  { q: { en: 'What are sensitive packs?', pl: 'Co to są wrażliwe pakiety?' }, a: { en: 'Health and Finance packs are marked sensitive. Their dimensions are stored in your profile but excluded from exports by default. You must explicitly opt-in to include them in platform exports.', pl: 'Pakiety Zdrowie i Finanse są oznaczone jako wrażliwe. Ich wymiary są przechowywane w profilu ale domyślnie wyłączone z eksportów. Musisz jawnie wyrazić zgodę na ich uwzględnienie w eksportach platformowych.' } },
];

const FAQ_DEV = [
  { q: { en: 'How do compound signals work?', pl: 'Jak działają sygnały złożone?' }, a: { en: 'Compound signals fire after all explicit answers are collected. Each rule checks multiple question answers (using countMatching) and triggers when a threshold is met (usually 2-3 matching signals). Example: compound_adhd checks 16 different questions from multiple packs and fires when 2+ match. The confidence is based on match count, not ratio, so adding more checks doesn\'t penalize confidence.', pl: 'Sygnały złożone uruchamiają się po zebraniu wszystkich jawnych odpowiedzi. Każda reguła sprawdza wiele odpowiedzi na pytania (używając countMatching) i wyzwala się gdy próg jest osiągnięty (zwykle 2-3 pasujące sygnały). Przykład: compound_adhd sprawdza 16 różnych pytań z wielu pakietów i wyzwala się gdy 2+ pasuje. Pewność oparta jest na liczbie dopasowań, nie proporcji.' } },
  { q: { en: 'How does rule deduplication work?', pl: 'Jak działa deduplikacja reguł?' }, a: { en: 'Two-pass filtering: (1) generic rule removal — checks against GENERIC_RULE_PATTERNS regex list, but keeps rules with specificity signals (IF/THEN, concrete numbers, tool names). (2) Near-duplicate removal — extracts keywords (>3 chars, stop words removed), computes Jaccard similarity between all rule pairs, drops duplicates with similarity >= 0.45.', pl: 'Dwuprzejściowe filtrowanie: (1) usuwanie generycznych reguł — sprawdzanie z listą regex GENERIC_RULE_PATTERNS, ale zachowanie reguł z sygnałami specyficzności (IF/THEN, konkretne liczby, nazwy narzędzi). (2) Usuwanie bliskich duplikatów — ekstrakcja słów kluczowych (>3 znaki, stop words usunięte), obliczanie podobieństwa Jaccarda, usuwanie duplikatów z podobieństwem >= 0.45.' } },
  { q: { en: 'How do I add a new question pack?', pl: 'Jak dodać nowy pakiet pytań?' }, a: { en: 'Create a JSON file in <code>packages/core/questions/packs/</code> following the existing pack format. Add the pack ID to <code>getAvailablePackIds()</code> in the pack loader. Create a Polish translation in the <code>pl/</code> subdirectory. Each question needs: id, pack, question, type, dimension, skippable, and options with maps_to and export_rule fields.', pl: 'Stwórz plik JSON w <code>packages/core/questions/packs/</code> zgodnie z istniejącym formatem pakietów. Dodaj ID pakietu do <code>getAvailablePackIds()</code> w loaderze pakietów. Stwórz polskie tłumaczenie w podkatalogu <code>pl/</code>. Każde pytanie wymaga: id, pack, question, type, dimension, skippable oraz options z polami maps_to i export_rule.' } },
  { q: { en: 'What testing framework is used?', pl: 'Jaki framework testowy jest używany?' }, a: { en: 'Vitest. Run <code>pnpm test</code> from the monorepo root. Tests are co-located with source files.', pl: 'Vitest. Uruchom <code>pnpm test</code> z roota monorepo. Testy są umieszczone obok plików źródłowych.' } },
];

// ─── Issue items (beginner only) ────────────────────────

const ISSUES = [
  { title: { en: '"command not found: meport"', pl: '"command not found: meport"' }, fix: { en: 'Use <code>npx meport</code> instead, or install globally with <code>npm install -g meport</code>. Make sure Node.js 18+ is installed.', pl: 'Użyj <code>npx meport</code> zamiast tego, lub zainstaluj globalnie z <code>npm install -g meport</code>. Upewnij się że Node.js 18+ jest zainstalowany.' } },
  { title: { en: '"No profile found"', pl: '"No profile found" / "Brak profilu"' }, fix: { en: 'You need to create a profile first with <code>meport profile</code>. The profile file (<code>meport-profile.json</code>) is created in the folder where you run the command. Make sure you\'re in the same folder when running other commands.', pl: 'Musisz najpierw stworzyć profil komendą <code>meport profile</code>. Plik profilu (<code>meport-profile.json</code>) jest tworzony w folderze, w którym uruchamiasz komendę. Upewnij się że jesteś w tym samym folderze przy innych komendach.' } },
  { title: { en: 'AI mode not working', pl: 'Tryb AI nie działa' }, fix: { en: 'Run <code>meport config</code> first to set up your AI provider. For Claude/OpenAI, you need a valid API key. For Ollama, make sure Ollama is running (<code>ollama serve</code>) and you have a model downloaded (<code>ollama pull llama3.1</code>).', pl: 'Uruchom najpierw <code>meport config</code> aby skonfigurować dostawcę AI. Dla Claude/OpenAI potrzebujesz prawidłowego klucza API. Dla Ollama upewnij się że Ollama działa (<code>ollama serve</code>) i masz pobrany model (<code>ollama pull llama3.1</code>).' } },
  { title: { en: 'Export looks different than expected', pl: 'Eksport wygląda inaczej niż oczekiwany' }, fix: { en: 'Make sure you\'re not using <code>--legacy</code> flag. The default rule-based export generates actionable instructions. If your profile is thin (few answers), try <code>meport deepen</code> to add more dimensions.', pl: 'Upewnij się że nie używasz flagi <code>--legacy</code>. Domyślny eksport oparty na regułach generuje akcjonalne instrukcje. Jeśli profil jest cienki (mało odpowiedzi), spróbuj <code>meport deepen</code> aby dodać więcej wymiarów.' } },
];

// ─── Navigation structure ───────────────────────────────

const NAV_STRUCTURE = {
  beginner: [
    { group: 'nav_start', items: [
      { key: 'nav_what', href: '#what' },
      { key: 'nav_install', href: '#install' },
      { key: 'nav_quickstart', href: '#quickstart' },
      { key: 'nav_shell', href: '#shell' },
      { key: 'nav_glossary', href: '#glossary' },
    ]},
    { group: 'nav_help', items: [
      { key: 'nav_privacy', href: '#privacy' },
      { key: 'nav_faq', href: '#faq' },
      { key: 'nav_issues', href: '#issues' },
    ]},
  ],
  power: [
    { group: 'nav_start', items: [
      { key: 'nav_what', href: '#what' },
      { key: 'nav_install', href: '#install' },
      { key: 'nav_quickstart', href: '#quickstart' },
      { key: 'nav_shell', href: '#shell' },
    ]},
    { group: 'nav_reference', items: [
      { key: 'nav_commands', href: '#commands' },
      { key: 'nav_packs', href: '#packs' },
      { key: 'nav_exports', href: '#exports' },
    ]},
    { group: 'nav_advanced', items: [
      { key: 'nav_scanning', href: '#scanning' },
      { key: 'nav_ai', href: '#ai-providers' },
      { key: 'nav_profile_mgmt', href: '#profile-mgmt' },
      { key: 'nav_deployment', href: '#deployment' },
      { key: 'nav_config', href: '#configuration' },
    ]},
    { group: 'nav_help', items: [
      { key: 'nav_privacy', href: '#privacy' },
      { key: 'nav_faq', href: '#faq' },
    ]},
  ],
  dev: [
    { group: 'nav_start', items: [
      { key: 'nav_what', href: '#what' },
      { key: 'nav_install', href: '#install' },
      { key: 'nav_quickstart', href: '#quickstart' },
    ]},
    { group: 'nav_reference', items: [
      { key: 'nav_commands', href: '#commands' },
      { key: 'nav_packs', href: '#packs' },
      { key: 'nav_exports', href: '#exports' },
      { key: 'nav_scanning', href: '#scanning' },
      { key: 'nav_ai', href: '#ai-providers' },
      { key: 'nav_config', href: '#configuration' },
    ]},
    { group: 'nav_internals', items: [
      { key: 'nav_architecture', href: '#architecture' },
      { key: 'nav_profile_arch', href: '#profile-architecture' },
      { key: 'nav_schema', href: '#schema' },
      { key: 'nav_inference', href: '#inference' },
      { key: 'nav_compilers', href: '#compilers' },
      { key: 'nav_contributing', href: '#contributing' },
    ]},
    { group: 'nav_help', items: [
      { key: 'nav_privacy', href: '#privacy' },
      { key: 'nav_faq', href: '#faq' },
    ]},
  ],
};

// ─── State ──────────────────────────────────────────────

let currentLang = 'en';
let currentLevel = 'beginner';

// ─── Init ───────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  // Detect language from URL hash or browser
  const params = new URLSearchParams(window.location.search);
  if (params.get('lang') === 'pl') currentLang = 'pl';
  else if (navigator.language?.startsWith('pl')) currentLang = 'pl';

  // Detect level from URL hash
  if (params.get('level')) currentLevel = params.get('level');

  applyAll();
  setupListeners();
});

// ─── Apply everything ───────────────────────────────────

function applyAll() {
  document.documentElement.setAttribute('data-lang', currentLang);
  document.documentElement.setAttribute('data-level', currentLevel);

  applyTranslations();
  buildNav();
  buildGlossary();
  buildPacksList();
  buildPlatformList();
  buildFAQs();
  buildIssues();
  applyLevelContent();
  applySectionVisibility();
  updateLangSwitch();
  updateLevelPills();
}

// ─── Translation ────────────────────────────────────────

function applyTranslations() {
  // data-i18n (text content)
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (T[key]) el.textContent = T[key][currentLang] || T[key].en;
  });
  // data-i18n-html (innerHTML)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (T[key]) el.innerHTML = T[key][currentLang] || T[key].en;
  });
}

// ─── Level content ──────────────────────────────────────

function applyLevelContent() {
  document.querySelectorAll('.level-content').forEach(el => {
    const forLevel = el.getAttribute('data-for');
    el.classList.toggle('visible', forLevel === currentLevel);
  });
}

function applySectionVisibility() {
  document.querySelectorAll('.doc-section').forEach(section => {
    const levels = section.getAttribute('data-levels');
    if (!levels) return;
    const levelList = levels.split(' ');
    section.style.display = levelList.includes(currentLevel) ? '' : 'none';
  });
}

// ─── Navigation ─────────────────────────────────────────

function buildNav() {
  const nav = document.getElementById('docs-nav');
  const structure = NAV_STRUCTURE[currentLevel] || NAV_STRUCTURE.beginner;
  let html = '';

  for (const group of structure) {
    const groupLabel = T[group.group]?.[currentLang] || T[group.group]?.en || group.group;
    html += `<div class="docs-nav-group"><h4>${groupLabel}</h4>`;
    for (const item of group.items) {
      const label = T[item.key]?.[currentLang] || T[item.key]?.en || item.key;
      html += `<a href="${item.href}" class="docs-link" data-section="${item.href.slice(1)}">${label}</a>`;
    }
    html += '</div>';
  }

  nav.innerHTML = html;

  // Attach click handlers
  nav.querySelectorAll('.docs-link').forEach(link => {
    link.addEventListener('click', (e) => {
      nav.querySelectorAll('.docs-link').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      // Close mobile sidebar
      document.getElementById('sidebar')?.classList.remove('open');
    });
  });

  // Set first item active
  const first = nav.querySelector('.docs-link');
  if (first) first.classList.add('active');
}

// ─── Glossary ───────────────────────────────────────────

function buildGlossary() {
  const grid = document.getElementById('glossary-grid');
  if (!grid) return;

  grid.innerHTML = GLOSSARY.map(item => `
    <div class="doc-file-item">
      <strong>${item.term[currentLang] || item.term.en}</strong>
      <span>${item.def[currentLang] || item.def.en}</span>
    </div>
  `).join('');
}

// ─── Packs list ─────────────────────────────────────────

function buildPacksList() {
  const container = document.getElementById('packs-list');
  if (!container) return;

  container.innerHTML = PACKS.map(pack => {
    let badge = '';
    if (pack.required) badge = `<span class="doc-badge doc-badge-required">${currentLang === 'pl' ? 'Wymagany' : 'Required'}</span>`;
    else if (pack.sensitive) badge = `<span class="doc-badge doc-badge-sensitive">${currentLang === 'pl' ? 'Wrażliwy' : 'Sensitive'}</span>`;
    else badge = `<span class="doc-badge doc-badge-optional">${currentLang === 'pl' ? 'Opcjonalny' : 'Optional'}</span>`;

    return `<div class="doc-plat-row">
      <strong>${pack.name[currentLang] || pack.name.en} ${badge}</strong>
      <span>${pack.desc[currentLang] || pack.desc.en}</span>
    </div>`;
  }).join('');
}

// ─── Platform list ──────────────────────────────────────

function buildPlatformList() {
  const container = document.getElementById('platform-list');
  if (!container) return;

  container.innerHTML = PLATFORMS.map(p => {
    const file = typeof p.file === 'object' ? (p.file[currentLang] || p.file.en) : p.file;
    const typeLabel = p.type === 'auto'
      ? `<span style="color:var(--accent);font-weight:600">${currentLang === 'pl' ? 'Auto-deploy' : 'Auto-deploy'}</span>`
      : `<span>${currentLang === 'pl' ? 'Schowek' : 'Clipboard'}</span>`;

    return `<div class="doc-plat-row">
      <strong>${p.name}</strong>
      <span>${file} &middot; ${typeLabel}</span>
    </div>`;
  }).join('');
}

// ─── FAQ ────────────────────────────────────────────────

function buildFAQs() {
  buildFAQ('faq-beginner', FAQ_BEGINNER);
  buildFAQ('faq-power', FAQ_POWER);
  buildFAQ('faq-dev', FAQ_DEV);
}

function buildFAQ(containerId, items) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = items.map(item => `
    <details class="doc-faq-item">
      <summary>${item.q[currentLang] || item.q.en}</summary>
      <p>${item.a[currentLang] || item.a.en}</p>
    </details>
  `).join('');
}

// ─── Issues ─────────────────────────────────────────────

function buildIssues() {
  const container = document.getElementById('issues-list');
  if (!container) return;

  container.innerHTML = ISSUES.map(issue => `
    <div class="doc-cmd-block">
      <h4>${issue.title[currentLang] || issue.title.en}</h4>
      <p>${issue.fix[currentLang] || issue.fix.en}</p>
    </div>
  `).join('');
}

// ─── UI state ───────────────────────────────────────────

function updateLangSwitch() {
  document.querySelectorAll('.lang-option').forEach(el => {
    el.classList.toggle('active', el.getAttribute('data-lang') === currentLang);
  });
}

function updateLevelPills() {
  document.querySelectorAll('.level-pill').forEach(pill => {
    pill.classList.toggle('active', pill.getAttribute('data-level') === currentLevel);
  });
}

// ─── Listeners ──────────────────────────────────────────

function setupListeners() {
  // Language switch
  document.querySelectorAll('.lang-option').forEach(el => {
    el.addEventListener('click', () => {
      currentLang = el.getAttribute('data-lang');
      applyAll();
    });
  });

  // Level pills
  document.querySelectorAll('.level-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      currentLevel = pill.getAttribute('data-level');
      applyAll();
      // Scroll to top
      document.getElementById('docs-main')?.scrollTo(0, 0);
    });
  });

  // Mobile toggle
  const toggle = document.getElementById('nav-toggle');
  const sidebar = document.getElementById('sidebar');
  if (toggle && sidebar) {
    toggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
    });
  }

  // Scroll spy
  const main = document.getElementById('docs-main');
  if (main) {
    main.addEventListener('scroll', debounce(() => {
      const sections = document.querySelectorAll('.doc-section');
      let activeId = '';
      for (const section of sections) {
        if (section.style.display === 'none') continue;
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100) activeId = section.id;
      }
      if (activeId) {
        document.querySelectorAll('.docs-link').forEach(link => {
          link.classList.toggle('active', link.getAttribute('data-section') === activeId);
        });
      }
    }, 100));
  }

  // Also listen to window scroll for non-scrollable main
  window.addEventListener('scroll', debounce(() => {
    const sections = document.querySelectorAll('.doc-section');
    let activeId = '';
    for (const section of sections) {
      if (section.style.display === 'none') continue;
      const rect = section.getBoundingClientRect();
      if (rect.top <= 100) activeId = section.id;
    }
    if (activeId) {
      document.querySelectorAll('.docs-link').forEach(link => {
        link.classList.toggle('active', link.getAttribute('data-section') === activeId);
      });
    }
  }, 100));
}

function debounce(fn, ms) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), ms);
  };
}
