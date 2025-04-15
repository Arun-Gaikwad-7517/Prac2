import CreditCard from "./components/CreditCard";
import Loader from "./components/Loader";
import { Menu } from "./components/Menu";



const App = () => {
  return(
    <div style={{ display: 'flex', justifyContent: 'center',flexDirection:'column', alignItems: 'center', height: '100vh' }}>
      {/* <Loader />
      <Menu/> */}
      <Loader />
      <CreditCard />
    </div>
  )
}


export default App;