/* eslint-disable react/prop-types */
import { NavComp } from "../components/NavComp";
import { Link } from "react-router-dom";
import { useMedia } from "../hooks/useMedia";
import "./Media.css";
import { Footer } from "../components/Footer";

export function Media({ content }) {
	const { data, isLoading } = useMedia();

	const dataType = data.filter(
		(program) => program.programType === `${content}`,
	);

	const headerTitle = content.charAt(0).toUpperCase() + content.slice(1);

	return (
		<div className='media-container'>
			<NavComp />
			<div className='landing-title-bar'>
				{content === "series"
					? `Popular ${headerTitle}`
					: `Popular ${headerTitle}s`}
			</div>
			{isLoading ? (
				""
			) : (
				<Link className='navigation-button' to='/'>
					Go Home
				</Link>
			)}

			{isLoading ? (
				<p>Loading...</p>
			) : (
				<ul className='media-grid-container'>
					{dataType.slice(0, 21).map((element) => (
						<li className='media-box-container' key={element.title}>
							<div className='grid-image-container'>
								<img
									src={element.images["Poster Art"].url}
									alt={`${content} Image`}
								/>
							</div>
							<p>{element.title}</p>
						</li>
					))}
				</ul>
			)}
			<Footer />
		</div>
	);
}
