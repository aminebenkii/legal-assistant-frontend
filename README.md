# ✈️ Flight Sniper — AI Flight Deals Chatbot

**Flight Sniper** is a modern, multilingual, AI-powered chatbot interface that helps users find the cheapest flights in real time. It features a clean UI built with **React**, **Vite**, **Tailwind CSS**, and **shadcn/ui** — backed by a conversational assistant that interacts via natural language.

## 🌐 Features

- 🎯 **Natural Language Flight Search** (one-way or round trip)
- 🧠 Smart replies powered by your backend API
- 🌍 English / French language support
- 💱 Selectable currency (EUR, USD, MAD, GBP)
- 💡 Quick suggestions to help users get started
- 💬 Beautiful chat bubbles with Markdown rendering
- 🪄 Typing indicator animation
- 📱 Fully responsive, mobile-friendly layout

## 📸 Preview

<img src="https://user-images.githubusercontent.com/example/flight-sniper-preview.png" alt="Flight Sniper Preview" width="600" />

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/yourusername/flight-sniper-frontend.git
cd flight-sniper-frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure the backend API

Update the API endpoint in `/src/lib/api.ts`:

```ts
const res = await fetch("http://127.0.0.1:8000/chat", {
```

Or use a dynamic config (e.g. via `.env` or a `config.json` if supported).

### 4. Start the dev server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## 🧠 Architecture

```
src/
├── components/        # UI components (ChatHeader, ChatFooter, etc.)
├── context/           # LanguageContext for i18n
├── data/              # Static chatbot content (suggestions, welcome messages)
├── hooks/             # Custom React hooks (useChatbot)
├── lib/               # API helper for flight replies
├── pages/             # Fullscreen pages (InitLangPage, ChatbotPage)
├── index.html         # Entry HTML
├── main.tsx           # App entrypoint
└── App.tsx            # Mounts ChatbotPage
```

## ✍️ How It Works

- Chatbot state and messages managed via `useChatbot.ts`
- Language stored in `localStorage` and handled globally by `LanguageContext`
- API calls to the backend include `sessionId`, `query`, and `currency`
- Suggestions and initial message pulled from `ChatbotConfig.ts`
- Components are styled using Tailwind + `shadcn/ui`

## 🛠️ Technologies Used

- **React 18 + Vite**
- **Tailwind CSS + shadcn/ui**
- **Lucide Icons**
- **React Markdown**
- **TypeScript**
- **i18n via Context + LocalStorage**

## 📦 Build for production

```bash
npm run build
```

## 🧑‍💻 Author

Made with ❤️ by **Amine Benkirane**  
[LinkedIn](https://www.linkedin.com/in/aminebenkirane-ml) · [Email](mailto:aminebenkirane.pro@gmail.com)

## 🪪 License

MIT — free to use, modify, and share.
