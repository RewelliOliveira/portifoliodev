import type { Localized } from "@/lib/localized";
import type { StackId } from "./stacks";

export type Repo = {
  url: string;
  part?: "frontend" | "backend";
};

export type Highlight = {
  title: Localized;
  text: Localized;
};

export type Project = {
  slug: string;
  name: string;
  description: Localized;
  image?: string;
  url?: string;
  repos: Repo[];
  stacks: StackId[];
  overview: Localized[];
  highlights: Highlight[];
  internals: Localized[];
};

export const projects: Project[] = [
  {
    slug: "renvest",
    name: "Renvest",
    description: {
      pt: "Plataforma de educação financeira para investidores iniciantes, com trilhas de aprendizado, simulações e dados oficiais da B3 e da CVM. Meu TCC na UFC.",
      en: "A financial education platform for beginner investors, with learning paths, simulations and official data from B3 and CVM. My undergraduate thesis at UFC.",
      es: "Una plataforma de educación financiera para inversores principiantes, con rutas de aprendizaje, simulaciones y datos oficiales de B3 y CVM. Mi trabajo de grado en la UFC.",
    },
    image: "/projects/renvest.png",
    url: "https://renvest-eight.vercel.app",
    repos: [],
    stacks: [
      "react",
      "typescript",
      "tailwind",
      "python",
      "fastapi",
      "langchain",
      "rag",
      "openai",
      "supabase",
      "docker",
      "vercel",
    ],
    overview: [
      {
        pt: "O Renvest é meu TCC em Engenharia de Software na UFC Quixadá. A ideia é tirar o investidor iniciante da “tela em branco”: em vez de um chat genérico, ele percorre uma trilha de missões guiado pelo Rev, um tutor que conversa e desafia.",
        en: "Renvest is my Software Engineering thesis at UFC Quixadá. The goal is to get beginner investors past the “blank screen”: instead of a generic chat, they follow a trail of missions guided by Rev, a tutor that talks and challenges.",
        es: "Renvest es mi trabajo de grado en Ingeniería de Software en la UFC Quixadá. La idea es sacar al inversor principiante de la “pantalla en blanco”: en lugar de un chat genérico, recorre una ruta de misiones guiado por Rev, un tutor que conversa y desafía.",
      },
      {
        pt: "Cada resposta é ancorada em documentos oficiais do Banco Central, da CVM, da B3 e do FGC, com a fonte exibida junto. O aprendizado fica rastreável e longe das alucinações comuns em IAs genéricas.",
        en: "Every answer is grounded in official documents from Brazil's Central Bank, CVM, B3 and FGC, with the source shown alongside it. Learning stays traceable and away from the hallucinations common in generic AIs.",
        es: "Cada respuesta se basa en documentos oficiales del Banco Central de Brasil, la CVM, B3 y el FGC, con la fuente a la vista. El aprendizaje queda rastreable y lejos de las alucinaciones comunes en IAs genéricas.",
      },
    ],
    highlights: [
      {
        title: { pt: "Trilha de missões", en: "Mission trail", es: "Ruta de misiones" },
        text: {
          pt: "Três módulos progressivos (renda fixa e proteção, bolsa e governança, regulação da CVM) com lições, quizzes, baús de recompensa e um desafio final em cada etapa.",
          en: "Three progressive modules (fixed income and protection, stock market and governance, CVM regulation) with lessons, quizzes, reward chests and a final challenge at each stage.",
          es: "Tres módulos progresivos (renta fija y protección, bolsa y gobernanza, regulación de la CVM) con lecciones, quizzes, cofres de recompensa y un desafío final en cada etapa.",
        },
      },
      {
        title: { pt: "Tutor com fontes", en: "A tutor that cites", es: "Tutor con fuentes" },
        text: {
          pt: "O Rev tira dúvidas no meio da missão e no chat livre, sempre mostrando o documento oficial consultado.",
          en: "Rev answers questions mid-mission and in free chat, always showing the official document it consulted.",
          es: "Rev resuelve dudas en plena misión y en el chat libre, mostrando siempre el documento oficial consultado.",
        },
      },
      {
        title: { pt: "Perguntas sugeridas", en: "Suggested questions", es: "Preguntas sugeridas" },
        text: {
          pt: "Chips com perguntas prontas ajudam quem ainda não sabe o que perguntar.",
          en: "Ready-made question chips help people who don't know what to ask yet.",
          es: "Chips con preguntas listas ayudan a quien todavía no sabe qué preguntar.",
        },
      },
      {
        title: { pt: "Conta e progresso", en: "Account and progress", es: "Cuenta y progreso" },
        text: {
          pt: "Login com e-mail ou Google, sessão via JWT e onboarding exibido só no primeiro acesso.",
          en: "Sign-in with email or Google, JWT sessions and onboarding shown only on the first visit.",
          es: "Inicio de sesión con correo o Google, sesión vía JWT y onboarding solo en el primer acceso.",
        },
      },
    ],
    internals: [
      {
        pt: "Frontend em React 19, TypeScript e Tailwind CSS 4, com páginas carregadas sob demanda pelo React Router 7.",
        en: "Frontend in React 19, TypeScript and Tailwind CSS 4, with pages loaded on demand through React Router 7.",
        es: "Frontend en React 19, TypeScript y Tailwind CSS 4, con páginas cargadas bajo demanda mediante React Router 7.",
      },
      {
        pt: "Backend em Python com FastAPI e arquitetura RAG. A base de conhecimento é formada por PDFs oficiais registrados em um manifesto, e só eles são indexados.",
        en: "Python backend with FastAPI and a RAG architecture. The knowledge base is made of official PDFs registered in a manifest, and only those get indexed.",
        es: "Backend en Python con FastAPI y arquitectura RAG. La base de conocimiento está formada por PDFs oficiales registrados en un manifiesto, y solo esos se indexan.",
      },
      {
        pt: "A taxa Selic é consultada em tempo real na API do Banco Central.",
        en: "The Selic rate is fetched in real time from the Central Bank API.",
        es: "La tasa Selic se consulta en tiempo real en la API del Banco Central.",
      },
      {
        pt: "Deploy com Docker (build multi-stage e Nginx) ou na Vercel.",
        en: "Deployed with Docker (multi-stage build and Nginx) or on Vercel.",
        es: "Deploy con Docker (build multi-stage y Nginx) o en Vercel.",
      },
    ],
  },
  {
    slug: "nexo",
    name: "Nexo Assist",
    description: {
      pt: "Agent de IA para o service desk de TI: consulta a central de ajuda, abre chamados com confirmação e transfere para um analista quando precisa.",
      en: "An AI agent for an IT service desk: it searches the help center, opens tickets with confirmation and hands off to an analyst when needed.",
      es: "Un agent de IA para el service desk de TI: consulta el centro de ayuda, abre tickets con confirmación y transfiere a un analista cuando hace falta.",
    },
    image: "/projects/nexo.png",
    url: "https://nexo-theta-kohl.vercel.app",
    repos: [{ url: "https://github.com/RewelliOliveira/nexo" }],
    stacks: ["nextjs", "react", "typescript", "tailwind", "openai", "vercel"],
    overview: [
      {
        pt: "O funcionário descreve o problema num chat e o Nexo Assist resolve o que dá: busca na central de ajuda, mostra o status dos chamados sem pedir o número e monta um rascunho de chamado para ele conferir antes de criar.",
        en: "Employees describe the problem in a chat and Nexo Assist handles what it can: it searches the help center, shows ticket status without asking for the number and drafts a ticket for them to review before it's created.",
        es: "El empleado describe el problema en un chat y Nexo Assist resuelve lo que puede: busca en el centro de ayuda, muestra el estado de los tickets sin pedir el número y arma un borrador de ticket para revisarlo antes de crearlo.",
      },
      {
        pt: "No console, o analista vê as conversas transferidas com resumo, motivo e cada decisão do agent, assume o atendimento e devolve a conversa ao agent ou a encerra. Foi meu desafio técnico no processo seletivo Beyond the Bytes.",
        en: "In the console, analysts see handed-off conversations with a summary, the reason and every decision the agent made, take over the case and then hand it back to the agent or close it. It was my technical challenge for the Beyond the Bytes hiring process.",
        es: "En la consola, el analista ve las conversaciones transferidas con resumen, motivo y cada decisión del agent, asume la atención y luego devuelve la conversación al agent o la cierra. Fue mi desafío técnico en el proceso de selección Beyond the Bytes.",
      },
    ],
    highlights: [
      {
        title: { pt: "Regras no código", en: "Rules in code", es: "Reglas en el código" },
        text: {
          pt: "Confirmação antes de criar, sem duplicidade, prazo calculado pelo serviço e privacidade entre funcionários valem mesmo se o modelo errar.",
          en: "Confirmation before creating, no duplicates, deadlines computed by the service and privacy between employees hold even when the model gets it wrong.",
          es: "Confirmación antes de crear, sin duplicados, plazo calculado por el servicio y privacidad entre empleados se cumplen aunque el modelo se equivoque.",
        },
      },
      {
        title: { pt: "Decisões transparentes", en: "Transparent decisions", es: "Decisiones transparentes" },
        text: {
          pt: "Cada ação registra intenção, confiança e motivo. O funcionário vê isso no chat e o analista no console, sem precisar perguntar tudo de novo.",
          en: "Every action records intent, confidence and reason. Employees see it in the chat and analysts in the console, without asking everything again.",
          es: "Cada acción registra intención, confianza y motivo. El empleado lo ve en el chat y el analista en la consola, sin tener que preguntar todo de nuevo.",
        },
      },
      {
        title: { pt: "Transferência para analista", en: "Analyst handoff", es: "Transferencia a analista" },
        text: {
          pt: "Chamados críticos são transferidos na hora, e chamados vencidos geram a oferta de um analista. Com o analista na conversa, o agent fica calado.",
          en: "Critical tickets are handed off right away and overdue ones trigger an offer to talk to an analyst. While an analyst is in the conversation, the agent stays quiet.",
          es: "Los tickets críticos se transfieren al instante y los vencidos generan la oferta de un analista. Con el analista en la conversación, el agent se queda callado.",
        },
      },
      {
        title: { pt: "Resiliência", en: "Resilience", es: "Resiliencia" },
        text: {
          pt: "O sistema de chamados simulado cai de vez em quando. As ferramentas tentam de novo com backoff e, se continuar fora, o agent explica que nada foi perdido.",
          en: "The simulated ticket system goes down now and then. Tools retry with backoff and, if it stays down, the agent explains that nothing was lost.",
          es: "El sistema de tickets simulado se cae de vez en cuando. Las herramientas reintentan con backoff y, si sigue caído, el agent explica que no se perdió nada.",
        },
      },
    ],
    internals: [
      {
        pt: "Next.js 16 com App Router, Tailwind CSS v4 e AI SDK no streaming do chat. O agent roda no Mastra com GPT-5.4 mini, configurável para outros provedores.",
        en: "Next.js 16 with the App Router, Tailwind CSS v4 and the AI SDK for chat streaming. The agent runs on Mastra with GPT-5.4 mini, configurable for other providers.",
        es: "Next.js 16 con App Router, Tailwind CSS v4 y AI SDK para el streaming del chat. El agent corre en Mastra con GPT-5.4 mini, configurable para otros proveedores.",
      },
      {
        pt: "libSQL com Drizzle guarda funcionários, chamados, conversas e o log de decisões, em arquivo local no desenvolvimento e Turso no deploy.",
        en: "libSQL with Drizzle stores employees, tickets, conversations and the decision log, as a local file in development and Turso in production.",
        es: "libSQL con Drizzle guarda empleados, tickets, conversaciones y el registro de decisiones, en un archivo local en desarrollo y Turso en el deploy.",
      },
      {
        pt: "As dependências só descem: interface, agent e serviços de domínio. O agent nunca toca no banco, e os serviços não sabem que existe um agent.",
        en: "Dependencies only point down: interface, agent and domain services. The agent never touches the database, and the services don't know an agent exists.",
        es: "Las dependencias solo bajan: interfaz, agent y servicios de dominio. El agent nunca toca la base de datos, y los servicios no saben que existe un agent.",
      },
      {
        pt: "Testes com Vitest cobrem regras, ferramentas e cenários do agent com um modelo roteirizado, inclusive com o modelo errando de propósito.",
        en: "Vitest tests cover the rules, the tools and agent scenarios with a scripted model, including the model making mistakes on purpose.",
        es: "Tests con Vitest cubren reglas, herramientas y escenarios del agent con un modelo guionizado, incluso con el modelo equivocándose a propósito.",
      },
    ],
  },
  {
    slug: "your-menu",
    name: "Your Menu",
    description: {
      pt: "Plataforma de pedidos para restaurantes: cardápio digital, checkout com Pix e painel de pedidos em tempo real.",
      en: "An ordering platform for restaurants: digital menu, Pix checkout and a real-time order dashboard.",
      es: "Una plataforma de pedidos para restaurantes: menú digital, checkout con Pix y panel de pedidos en tiempo real.",
    },
    image: "/projects/your-menu.png",
    url: "https://your-menu-zeta.vercel.app",
    repos: [{ url: "https://github.com/RewelliOliveira/your-menu" }],
    stacks: ["react", "typescript", "tailwind", "vercel"],
    overview: [
      {
        pt: "Uma plataforma de pedidos para pequenos restaurantes. Cada loja ganha um cardápio digital público e um painel para acompanhar pedidos em tempo real, editar o cardápio e configurar a operação.",
        en: "An ordering platform for small restaurants. Each store gets a public digital menu and a dashboard to follow orders in real time, edit the menu and set up how it runs.",
        es: "Una plataforma de pedidos para restaurantes pequeños. Cada local tiene un menú digital público y un panel para seguir pedidos en tiempo real, editar el menú y configurar la operación.",
      },
      {
        pt: "O foco foi deixar o caminho do cliente curto, do prato ao Pix em uma página, e o do restaurante claro, com cada pedido passando por etapas bem definidas.",
        en: "The focus was keeping the customer's path short, from dish to Pix on a single page, and the restaurant's clear, with every order moving through well-defined steps.",
        es: "El foco fue que el camino del cliente fuera corto, del plato al Pix en una sola página, y el del restaurante claro, con cada pedido pasando por etapas bien definidas.",
      },
    ],
    highlights: [
      {
        title: { pt: "Cardápio digital", en: "Digital menu", es: "Menú digital" },
        text: {
          pt: "Categorias com busca, navegação fixa que destaca a seção visível e pratos com tamanhos, quantidade e observação.",
          en: "Searchable categories, sticky navigation that highlights the visible section, and dishes with sizes, quantity and notes.",
          es: "Categorías con búsqueda, navegación fija que resalta la sección visible y platos con tamaños, cantidad y observaciones.",
        },
      },
      {
        title: { pt: "Checkout em uma página", en: "One-page checkout", es: "Checkout en una página" },
        text: {
          pt: "Entrega ou retirada, CEP com preenchimento automático e pagamento por Pix, cartão ou dinheiro com troco. O QR Code Pix é gerado no próprio navegador.",
          en: "Delivery or pickup, postcode autofill and payment by Pix, card or cash with change. The Pix QR code is generated right in the browser.",
          es: "Entrega o retiro, código postal con autocompletado y pago con Pix, tarjeta o efectivo con cambio. El QR de Pix se genera en el propio navegador.",
        },
      },
      {
        title: { pt: "Painel de pedidos", en: "Order board", es: "Panel de pedidos" },
        text: {
          pt: "Quadro Novo → Em preparo → Em entrega, aviso de novos pedidos, métricas do dia e histórico.",
          en: "A New → Preparing → Out for delivery board, new-order alerts, daily metrics and history.",
          es: "Tablero Nuevo → En preparación → En camino, aviso de pedidos nuevos, métricas del día e historial.",
        },
      },
      {
        title: { pt: "Gestão da loja", en: "Store settings", es: "Gestión del local" },
        text: {
          pt: "Horários por dia, bairros atendidos, logo e capa, pausa rápida de itens e um botão para abrir e fechar a loja.",
          en: "Daily hours, delivery areas, logo and cover, quick item pausing and a switch to open and close the store.",
          es: "Horarios por día, barrios atendidos, logo y portada, pausa rápida de platos y un botón para abrir y cerrar el local.",
        },
      },
    ],
    internals: [
      {
        pt: "React 19, Vite, TypeScript, Tailwind CSS v4, shadcn/ui e Motion.",
        en: "React 19, Vite, TypeScript, Tailwind CSS v4, shadcn/ui and Motion.",
        es: "React 19, Vite, TypeScript, Tailwind CSS v4, shadcn/ui y Motion.",
      },
      {
        pt: "Uma camada de serviços é a única que conhece a origem dos dados. Hoje ela usa um backend simulado, pronto para dar lugar à API real sem mudar as telas.",
        en: "A service layer is the only part that knows where data comes from. Today it runs on a mock backend, ready to be swapped for the real API without touching the screens.",
        es: "Una capa de servicios es la única que conoce el origen de los datos. Hoy usa un backend simulado, listo para dar paso a la API real sin cambiar las pantallas.",
      },
      {
        pt: "As regras de servidor já valem: preços e total recalculados a partir do cardápio, pedidos aceitos só com a loja aberta e transições de status validadas.",
        en: "Server rules already apply: prices and totals recalculated from the menu, orders accepted only while the store is open, and validated status transitions.",
        es: "Las reglas de servidor ya se aplican: precios y total recalculados desde el menú, pedidos aceptados solo con el local abierto y transiciones de estado validadas.",
      },
      {
        pt: "O acompanhamento do pedido usa um código aleatório, não o número sequencial.",
        en: "Order tracking uses a random code, not the sequential order number.",
        es: "El seguimiento del pedido usa un código aleatorio, no el número secuencial.",
      },
    ],
  },
  {
    slug: "mybag",
    name: "MyBag",
    description: {
      pt: "App de finanças pessoais: contas, transações recorrentes e parceladas, orçamentos mensais e relatórios.",
      en: "A personal finance app: accounts, recurring and installment transactions, monthly budgets and reports.",
      es: "Una app de finanzas personales: cuentas, transacciones recurrentes y en cuotas, presupuestos mensuales e informes.",
    },
    image: "/projects/mybag.png",
    url: "https://my-bag-psi.vercel.app",
    repos: [{ url: "https://github.com/RewelliOliveira/MyBag" }],
    stacks: ["react", "typescript", "tailwind", "vercel"],
    overview: [
      {
        pt: "Um app para organizar o dinheiro do mês. A tela inicial responde logo a pergunta principal, quanto você tem e em quantas contas, e mostra o que entrou, o que saiu e quais orçamentos estão perto do limite.",
        en: "An app for keeping the month's money in order. The home screen answers the main question right away, how much you have and across how many accounts, and shows what came in, what went out and which budgets are close to the limit.",
        es: "Una app para organizar el dinero del mes. La pantalla inicial responde de entrada la pregunta principal, cuánto tienes y en cuántas cuentas, y muestra lo que entró, lo que salió y qué presupuestos están cerca del límite.",
      },
      {
        pt: "O foco foi tornar o registro de gastos rápido o bastante para virar hábito, com o formulário lembrando a última conta usada e mostrando o impacto no orçamento antes de salvar.",
        en: "The focus was making expense logging fast enough to become a habit, with the form remembering the last account used and showing the budget impact before saving.",
        es: "El foco fue que registrar gastos fuera lo bastante rápido para volverse un hábito, con el formulario recordando la última cuenta usada y mostrando el impacto en el presupuesto antes de guardar.",
      },
    ],
    highlights: [
      {
        title: { pt: "Transações recorrentes", en: "Recurring transactions", es: "Transacciones recurrentes" },
        text: {
          pt: "Lançamentos únicos, fixos ou parcelados, repetindo todo dia, toda semana, todo mês ou no último dia do mês, agrupados por dia e com filtros.",
          en: "One-off, fixed or installment entries, repeating daily, weekly, monthly or on the last day of the month, grouped by day and filterable.",
          es: "Movimientos únicos, fijos o en cuotas, que se repiten cada día, cada semana, cada mes o el último día del mes, agrupados por día y con filtros.",
        },
      },
      {
        title: { pt: "Orçamentos", en: "Budgets", es: "Presupuestos" },
        text: {
          pt: "Metas mensais por categoria, com aviso a partir de 80% do valor e alerta quando o limite é ultrapassado.",
          en: "Monthly targets per category, with a warning from 80% of the amount and an alert once the limit is passed.",
          es: "Metas mensuales por categoría, con aviso a partir del 80% del valor y alerta cuando se supera el límite.",
        },
      },
      {
        title: { pt: "Relatórios", en: "Reports", es: "Informes" },
        text: {
          pt: "Gastos por categoria, receitas contra despesas, histórico de saldo, ritmo de gastos no mês e gastos por dia da semana.",
          en: "Spending by category, income versus expenses, balance history, monthly spending pace and spending by weekday.",
          es: "Gastos por categoría, ingresos frente a gastos, historial de saldo, ritmo de gasto del mes y gastos por día de la semana.",
        },
      },
      {
        title: { pt: "Modo privacidade", en: "Privacy mode", es: "Modo privacidad" },
        text: {
          pt: "Um botão esconde todos os valores da tela, para abrir o app em público sem expor o saldo.",
          en: "One button hides every amount on screen, so the app can be opened in public without showing the balance.",
          es: "Un botón oculta todos los valores de la pantalla, para abrir la app en público sin mostrar el saldo.",
        },
      },
    ],
    internals: [
      {
        pt: "React 19, Vite, TypeScript, Tailwind CSS v4, shadcn/ui e Motion, com TanStack Query no estado do servidor e React Hook Form com Zod nos formulários.",
        en: "React 19, Vite, TypeScript, Tailwind CSS v4, shadcn/ui and Motion, with TanStack Query for server state and React Hook Form with Zod for forms.",
        es: "React 19, Vite, TypeScript, Tailwind CSS v4, shadcn/ui y Motion, con TanStack Query para el estado del servidor y React Hook Form con Zod en los formularios.",
      },
      {
        pt: "Gráficos em Chart.js, com cores que acompanham o tema claro ou escuro.",
        en: "Charts in Chart.js, with colors that follow the light or dark theme.",
        es: "Gráficos en Chart.js, con colores que siguen el tema claro u oscuro.",
      },
      {
        pt: "Cada funcionalidade tem seus próprios serviços, hooks e schemas. Hoje os serviços usam um backend simulado com latência e sessão, pronto para dar lugar à API real sem mudar as telas.",
        en: "Each feature has its own services, hooks and schemas. Today the services run on a mock backend with latency and sessions, ready to be swapped for the real API without touching the screens.",
        es: "Cada funcionalidad tiene sus propios servicios, hooks y schemas. Hoy los servicios usan un backend simulado con latencia y sesión, listo para dar paso a la API real sin cambiar las pantallas.",
      },
      {
        pt: "Contas são arquivadas em vez de excluídas, para não apagar o histórico, e transações excluídas podem ser desfeitas na hora.",
        en: "Accounts are archived instead of deleted so their history is kept, and deleted transactions can be undone on the spot.",
        es: "Las cuentas se archivan en lugar de eliminarse, para no borrar el historial, y las transacciones eliminadas se pueden deshacer al instante.",
      },
    ],
  },
  {
    slug: "abyss",
    name: "Abyss",
    description: {
      pt: "Mergulho por rolagem até o ponto mais fundo da Terra, a 10.935 m.",
      en: "A scroll-driven dive to the deepest known point on Earth, 10,935 m down.",
      es: "Un descenso con scroll hasta el punto más profundo de la Tierra, a 10.935 m.",
    },
    image: "/projects/abyss-hero.png",
    url: "https://abyss-one-phi.vercel.app",
    repos: [{ url: "https://github.com/RewelliOliveira/Abyss" }],
    stacks: ["react", "typescript", "tailwind", "vercel"],
    overview: [
      {
        pt: "Uma landing page interativa em que rolar a página é o mergulho: da superfície iluminada pelo sol até o Challenger Deep, na Fossa das Marianas, a 10.935 m de profundidade.",
        en: "An interactive landing page where scrolling is the dive: from the sunlit surface down to the Challenger Deep, in the Mariana Trench, 10,935 m below.",
        es: "Una landing page interactiva en la que hacer scroll es el descenso: desde la superficie iluminada por el sol hasta el Challenger Deep, en la Fosa de las Marianas, a 10.935 m de profundidad.",
      },
      {
        pt: "No caminho, as zonas do oceano mudam de cor, a luz some e as criaturas de cada profundidade aparecem quando o mergulho chega até elas.",
        en: "Along the way the ocean zones change color, the light fades out and the creatures of each depth show up as the dive reaches them.",
        es: "En el camino, las zonas del océano cambian de color, la luz desaparece y las criaturas de cada profundidad aparecen cuando el descenso llega a ellas.",
      },
    ],
    highlights: [
      {
        title: { pt: "Rolagem como mergulho", en: "Scrolling as diving", es: "El scroll como descenso" },
        text: {
          pt: "A profundidade é calculada a partir do scroll e alimenta o painel de instrumentos, os faróis do submarino e as partículas.",
          en: "Depth is derived from the scroll and drives the instrument panel, the submarine's headlights and the particles.",
          es: "La profundidad se calcula a partir del scroll y alimenta el panel de instrumentos, los faros del submarino y las partículas.",
        },
      },
      {
        title: { pt: "Escuridão e lanterna", en: "Darkness and a lantern", es: "Oscuridad y linterna" },
        text: {
          pt: "Nas zonas sem luz, só um feixe que segue o cursor ou o toque revela o cenário, e as partes bioluminescentes das criaturas brilham no escuro.",
          en: "In the lightless zones only a beam that follows the cursor or touch reveals the scene, and the creatures' bioluminescent parts glow in the dark.",
          es: "En las zonas sin luz, solo un haz que sigue al cursor o al toque revela el escenario, y las partes bioluminiscentes de las criaturas brillan en la oscuridad.",
        },
      },
      {
        title: { pt: "Céu vivo", en: "A living sky", es: "Cielo vivo" },
        text: {
          pt: "Sol, raios de luz, gaivotas e o navio de pesquisa se movem antes da descida começar.",
          en: "The sun, light rays, seagulls and the research ship move before the descent begins.",
          es: "El sol, los rayos de luz, las gaviotas y el barco de investigación se mueven antes de que empiece el descenso.",
        },
      },
      {
        title: { pt: "Criaturas ilustradas", en: "Illustrated creatures", es: "Criaturas ilustradas" },
        text: {
          pt: "Mais de vinte ilustrações vetorizadas, de cachalotes a peixes-lanterna, cada uma entrando em cena na sua profundidade.",
          en: "More than twenty vectorized illustrations, from sperm whales to lanternfish, each one entering at its own depth.",
          es: "Más de veinte ilustraciones vectorizadas, de cachalotes a peces linterna, cada una entrando en escena a su profundidad.",
        },
      },
    ],
    internals: [
      {
        pt: "React 19, TypeScript e Tailwind CSS v4, com GSAP (ScrollTrigger, ScrollSmoother, SplitText e DrawSVG) em todo o movimento.",
        en: "React 19, TypeScript and Tailwind CSS v4, with GSAP (ScrollTrigger, ScrollSmoother, SplitText and DrawSVG) behind all the motion.",
        es: "React 19, TypeScript y Tailwind CSS v4, con GSAP (ScrollTrigger, ScrollSmoother, SplitText y DrawSVG) en todo el movimiento.",
      },
      {
        pt: "Ilustrações originais vetorizadas e otimizadas com SVGO, importadas como componentes.",
        en: "Original illustrations vectorized and optimized with SVGO, imported as components.",
        es: "Ilustraciones originales vectorizadas y optimizadas con SVGO, importadas como componentes.",
      },
      {
        pt: "O brilho nunca é um filtro SVG animado: os halos são gradientes radiais animados só em opacidade, para a rolagem continuar fluida.",
        en: "Glow is never an animated SVG filter: halos are radial gradients animated only in opacity, so scrolling stays smooth.",
        es: "El brillo nunca es un filtro SVG animado: los halos son gradientes radiales animados solo en opacidad, para que el scroll siga fluido.",
      },
      {
        pt: "Os movimentos ambientes são determinísticos, rodam num único ticker por cena e pausam fora da tela. Com movimento reduzido, ficam desligados.",
        en: "Ambient motion is deterministic, runs on a single ticker per scene and pauses off-screen. With reduced motion it is turned off.",
        es: "Los movimientos ambientales son deterministas, corren en un único ticker por escena y se pausan fuera de pantalla. Con movimiento reducido, se desactivan.",
      },
    ],
  },
  {
    slug: "hollowcrest",
    name: "Hollowcrest",
    description: {
      pt: "Site de um RPG de ação em pixel art 16-bit, com seis heróis animados em GSAP e sprites tratados em Python.",
      en: "A site for a 16-bit pixel art action RPG, with six heroes animated in GSAP and sprites processed in Python.",
      es: "Sitio de un RPG de acción en pixel art 16-bit, con seis héroes animados en GSAP y sprites procesados en Python.",
    },
    image: "/projects/hollowcrest.png",
    url: "https://hollowcrest-rho.vercel.app",
    repos: [{ url: "https://github.com/RewelliOliveira/Hollowcrest" }],
    stacks: ["react", "typescript", "tailwind", "python", "vercel"],
    overview: [
      {
        pt: "O site de apresentação de um RPG de ação medieval em pixel art 16-bit: seis heróis, um reino sem luz e as últimas tochas acesas.",
        en: "The landing site for a medieval action RPG in 16-bit pixel art: six heroes, a kingdom without light and the last torches still burning.",
        es: "El sitio de presentación de un RPG de acción medieval en pixel art 16-bit: seis héroes, un reino sin luz y las últimas antorchas encendidas.",
      },
      {
        pt: "Os sprites nasceram como artes geradas por IA e passaram por um tratamento em Python até virarem pixel art de verdade, com grade, paleta e linha de base iguais entre todos os personagens.",
        en: "The sprites started as AI-generated art and went through a Python pipeline until they became real pixel art, with the same grid, palette and baseline across every character.",
        es: "Los sprites nacieron como arte generado por IA y pasaron por un tratamiento en Python hasta convertirse en pixel art de verdad, con la misma cuadrícula, paleta y línea base en todos los personajes.",
      },
    ],
    highlights: [
      {
        title: { pt: "Seleção de classe", en: "Class selection", es: "Selección de clase" },
        text: {
          pt: "Arqueiro, assassino, berserker, lanceiro, mago e paladino, cada um com ficha própria e sprite animado.",
          en: "Archer, assassin, berserker, lancer, mage and paladin, each with its own sheet and animated sprite.",
          es: "Arquero, asesino, berserker, lancero, mago y paladín, cada uno con su ficha y sprite animado.",
        },
      },
      {
        title: { pt: "Três mundos", en: "Three worlds", es: "Tres mundos" },
        text: {
          pt: "Bosque, Hollowcrest e Skarn, com cenários tratados no mesmo estilo dos personagens.",
          en: "Bosque, Hollowcrest and Skarn, with backdrops processed in the same style as the characters.",
          es: "Bosque, Hollowcrest y Skarn, con escenarios tratados en el mismo estilo que los personajes.",
        },
      },
      {
        title: { pt: "Clima de jogo", en: "Game atmosphere", es: "Clima de juego" },
        text: {
          pt: "Brasas, neve, janelas piscando, texto digitado e transições em blocos de pixel, tudo animado com GSAP.",
          en: "Embers, snow, flickering windows, typed text and pixel-block transitions, all animated with GSAP.",
          es: "Brasas, nieve, ventanas parpadeantes, texto tipeado y transiciones en bloques de píxel, todo animado con GSAP.",
        },
      },
    ],
    internals: [
      {
        pt: "React 19, TypeScript e Tailwind CSS v4, com GSAP nas animações.",
        en: "React 19, TypeScript and Tailwind CSS v4, with GSAP for the animations.",
        es: "React 19, TypeScript y Tailwind CSS v4, con GSAP en las animaciones.",
      },
      {
        pt: "Scripts em Python estimam o tamanho do bloco de pixel, limpam a transparência, reduzem a paleta para até 32 cores e alinham os pés dos personagens na mesma linha.",
        en: "Python scripts estimate the pixel block size, clean up transparency, cut the palette down to 32 colors and line up every character's feet.",
        es: "Scripts en Python estiman el tamaño del bloque de píxel, limpian la transparencia, reducen la paleta a 32 colores y alinean los pies de los personajes.",
      },
      {
        pt: "Os pixels tratados também viram dados tipados, usados para desenhar e animar os sprites.",
        en: "The processed pixels also become typed data used to draw and animate the sprites.",
        es: "Los píxeles tratados también se convierten en datos tipados, usados para dibujar y animar los sprites.",
      },
    ],
  },
];
