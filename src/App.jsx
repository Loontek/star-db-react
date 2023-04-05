import './App.module.scss'
import StarDbApp from './components/StarDbApp/StarDbApp'
import SwapiService from './services/SwapiService'

function App() {
  // const swapi = new SwapiService;

  // swapi.getCharacter(3).then(data => console.log(data))

  return (
    <>
      <StarDbApp/>
    </>
  )
}

export default App
