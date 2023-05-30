import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Components
import Home from './components/home';
import Header from './components/header';

//CSS
import './styles/App.scss';
import './styles/Header.scss';
import './styles/Hero.scss';




export default function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</Router>
	);
}
