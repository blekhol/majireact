import ChocolateCard from "./components/ChocolateCard"
import Fejlec from "./components/Fejlec"
import Lablec from "./components/Lablec"
import "./csokiformazas.css"

function App() {
  return (
    <>
      <Fejlec></Fejlec>
      <ChocolateCard
        name = "asd"
        brand = "asd"
        isDark = {true}
        cocoaPercentage = {50}
        ingredients = {["a", "b", "c"]}
      ></ChocolateCard>
      <ChocolateCard
        name = "aaaaaaaaaaa"
        brand = "aaaaa"
        isDark = {false}
        cocoaPercentage = {70}
        ingredients = {["a", "b"]}
      ></ChocolateCard>
      <Lablec></Lablec>
    </>
  )
}

export default App
