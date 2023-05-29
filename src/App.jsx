import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";

export default function App() {
  return (
		<Router>
			<header />
			<Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
		</Router>
  )
}
