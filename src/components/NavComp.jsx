import "./NavComp.css"
import { Link } from "react-router-dom";

export function NavComp() {
	return (
		<nav>
			<div className="nav-title-container">
				<Link to='./'>DEMO Streaming</Link>
			</div>
			<div className='nav-links-container'>
				<div className='nav-login'>
					<a href='#'>Login</a>
				</div>
				<div className='nav-free-trial'>
					<a href='#'>Start your free trial</a>
				</div>
			</div>
		</nav>
	);
}
