import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ForoContextProvider } from "./context/apiContext";
import Home from "./pages/home/home";
import Header from "./components/header/header.component";

function App() {
    return (
        <>
            <Router>
                <ForoContextProvider>
                    <Header></Header>
                    <main>
                        <Routes>
                            <Route path="/" element={<Home />} />
                        </Routes>
                    </main>
                    <footer></footer>
                </ForoContextProvider>
            </Router>
        </>
    );
}

export default App;
