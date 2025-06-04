import { BrowserRouter, Routes, Route } from "react-router-dom"
import InitLangPage from "./pages/InitLangPage"
import IntroPage from "./pages/IntroPage"
import ChatbotPage from "./pages/ChatbotPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InitLangPage />} />
        <Route path="/intro" element={<IntroPage />} />
        <Route path="/chat" element={<ChatbotPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
