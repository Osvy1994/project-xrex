import "./Footer.css";

export function Footer() {
	return (
		<footer>
			<div className='footer-links'>
				<a href=''>Home</a>
				<p>|</p>
				<a href=''>Terms and Conditions</a>
				<p>|</p>
				<a href=''>Privacy Policy</a>
				<p>|</p>
				<a href=''>Collection Statement</a>
				<p>|</p>
				<a href=''>Help</a>
				<p>|</p>
				<a href=''>Manage Account</a>
				<p>|</p>
			</div>
			<div>
				<p>Copyright © 2016 DEMO Streaming. All Rights Reserved.</p>
			</div>
			<div className='footer-logos-container'>
				<div className='footer-logo-social'>
					<a href=''>
						<img src='assets/social/facebook-white.svg' alt='Facebook Logo' />
					</a>
					<a href=''>
						<img src='assets/social/twitter-white.svg' alt='Twitter Logo' />
					</a>
					<a href=''>
						<img src='assets/social/instagram-white.svg' alt='Instagram Logo' />
					</a>
				</div>
				<div className='footer-logo-store'>
					<a href=''>
						<img src='assets/store/app-store.svg' alt='App Store Logo' />
					</a>
					<a href=''>
						<img src='assets/store/play-store.svg' alt='Play Store Logo' />
					</a>
					<a href=''>
						<img src='assets/store/windows-store.svg' alt='Windows Store Logo' />
					</a>
				</div>
			</div>
		</footer>
	);
}
