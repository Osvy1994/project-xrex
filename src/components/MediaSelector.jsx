/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./MediaSelector.css";

export function MediaSelector(props) {
	const title = props.name.toUpperCase()
	return (
		<div className='media-selector'>
			<div className='selector-box'>
				<img src='assets/placeholder.png' alt='' />
				<h3>{title}</h3>
			</div>
			<Link to={props.name} >Popular {props.name}</Link>
		</div>
	);
}
