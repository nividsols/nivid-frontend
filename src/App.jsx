import './App.css'
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Companies from "./components/Companies.jsx";
import Services from "./components/Services.jsx";

function App() {

	return (
		<div >
			<div className='bg-gradient-to-r from-[#60BBEE] via-[#0775B4] to-[#0A72AD] h-screen w-screen px-28'>
				<Navbar/>
				<Hero/>
			</div>
			<div className='h-screen'>
				<Companies />
				<Services />
			</div>
		</div>

	)
}

export default App
