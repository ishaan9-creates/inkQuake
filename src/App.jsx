import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Components
import Home from './components/home';
import Header from './components/header';

//CSS
import './styles/app.scss';



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
