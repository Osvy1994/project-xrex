import { Footer } from "../components/Footer";
import { MediaSelector } from "../components/MediaSelector";
import { NavComp } from "../components/NavComp";
import "./App.css";
import { Outlet } from "react-router-dom";

export function App() {
	return (
		<div className='app'>
			<NavComp />
			<div className='landing-title-bar'>Popular Titles</div>
			<Outlet />
			<div className="selector-box-container">
				<MediaSelector name='series' />
				<MediaSelector name='movies' />
			</div>
			<Footer />
		</div>
	);
}
