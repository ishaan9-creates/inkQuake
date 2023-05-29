import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Header from "./components/header";

export default function App() {
  return (
		<Router>
			<Header />
			<Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
		</Router>
  )
}
