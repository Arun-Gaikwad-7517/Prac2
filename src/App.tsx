import Loader from "./components/Loader";
import { Menu } from "./components/Menu";



const App = () => {
  return(
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Loader />
      <Menu/>
    </div>
  )
}


export default App;