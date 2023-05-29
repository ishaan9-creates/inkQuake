import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import home from "./Components/home";
import header from "./Components/header";

export default function App() {
  return (
		<Router>
			<header />
			<Routes>
        <Route path="/" element={<home />} />
        
      </Routes>
		</Router>
  )
}
