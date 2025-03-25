import "./App.css"
import { useState } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Screen from "./components/Screen"
import { selectScreen } from "./utils/selectScreen"
// import DebounceExample from "./components/Projects/DebounceExample"

function App() {
  const [screen, setScreen] = useState("home")
  const [data, setData] = useState({
    title: "Super Pocket 64",
  })
  // const handleSelectScreen = (newScreen: string, data: Record<string, any>) => {
  //   selectScreen(newScreen, setScreen, data) // Call selectScreen to initialize the screen
  // }
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-slate-900">
      <div className="w-full px-4 sm:px-6 lg:px-8 flex flex-col min-h-screen">
        <Header setScreen={setScreen}/>
        <main className="flex-grow">
          <Screen screen={screen} setScreen={setScreen} data={data} />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
