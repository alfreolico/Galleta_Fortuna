//`` son mi anotación, no las encontraba en mi teclado, lo explico aqui, por si olvido borrar esto//

// import { useState } from 'react';
// import { FaQuoteLeft } from 'react-icons/fa';
// import { FaQuoteRight } from 'react-icons/fa';
// import phrases from './phrases.json';
// import { bg1, bg2, bg3, bg4 } from './assets/images';
// import './App.css';

// const images = [bg1, bg2, bg3, bg4];

// function getRandomIndex(arr) {
// 	return Math.floor(Math.random() * arr.length);
// }

// function App() {
// 	const [phrase, setPhrase] = useState(phrases[getRandomIndex(phrases)].phrase);
// 	const [bgRandom, setBgRandom] = useState(images[getRandomIndex(images)]);

// 	const handleClick = () => {
// 		setPhrase(phrases[getRandomIndex(phrases)].phrase);
// 		setBgRandom(images[getRandomIndex(images)]);
// 	};

// 	const bgStyle = `url('${bgRandom}')`;

// 	return (
// 		<div className="wrapper" style={{ backgroundImage: bgStyle }}>
// 			<div className="container">
// 				<h1 className="title">Galleta de la Fortuna</h1>
// 				<blockquote className="card">
// 					<div className="card__body">
// 						<p className="card__text">
// 							<FaQuoteLeft className="card__quote" /> {phrase}{' '}
// 							<FaQuoteRight className="card__quote" />
// 						</p>
// 					</div>
// 				</blockquote>

// 				<button className="btn" onClick={handleClick}>
// 					Tomar Otra
// 				</button>
// 			</div>
// 		</div>
// 	);
// }

// export default App;

import { useState } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { FaQuoteRight } from 'react-icons/fa';
import phrases from './phrases.json';
import { bg1, bg2, bg3, bg4 } from './assets/images';
import './App.css';

const images = [bg1, bg2, bg3, bg4];

function getRandomIndex(arr) {
	return Math.floor(Math.random() * arr.length);
}

function App() {
	const initialPhrase = phrases[getRandomIndex(phrases)];
	const [phrase, setPhrase] = useState(initialPhrase.phrase);
	const [author, setAuthor] = useState(initialPhrase.author);
	const [bgRandom, setBgRandom] = useState(images[getRandomIndex(images)]);
	const [key, setKey] = useState(0);

	const handleClick = () => {
		const newPhrase = phrases[getRandomIndex(phrases)];
		setPhrase(newPhrase.phrase);
		setAuthor(newPhrase.author);
		setBgRandom(images[getRandomIndex(images)]);
		setKey(key + 1); // Cambiar la clave para forzar la re-renderización
	};

	const bgStyle = `url('${bgRandom}')`;

	return (
		<div className="wrapper" style={{ backgroundImage: bgStyle }}>
			<div className="container">
				<h1 className="title">Galleta de la Fortuna</h1>
				<blockquote className="card">
					<div className="card__body animate" key={key}>
						<p className="card__text">
							<FaQuoteLeft className="card__quote" /> {phrase}{' '}
							<FaQuoteRight className="card__quote" />
						</p>
						<footer className="blockquote-footer">{author}</footer>
					</div>
				</blockquote>

				<button className="btn" onClick={handleClick}>
					Tomar Otra
				</button>
			</div>
		</div>
	);
}

export default App;
