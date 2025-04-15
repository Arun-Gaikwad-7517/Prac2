import CreditCard from "./components/CreditCard";
import Loader from "./components/Loader";
import { Menu } from "./components/Menu";



const App = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', height: '100vh' }}>
      {/* <Loader />
      <Menu/> */}
      <Loader />

      <div style={{ display: 'flex',gap: '10', justifyContent: 'center', alignItems: 'center',margin:'30px'}}>
        <CreditCard />
        <CreditCard />
        <CreditCard />
        <CreditCard />
      </div>
    </div>
  )
}


export default App;