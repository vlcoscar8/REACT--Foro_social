import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ForoContextProvider } from "./context/apiContext";
import Home from "./pages/home/home";
import Header from "./components/header/header.component";
import FamilyTopicDetail from "./pages/familyTopicDetail/familyTopicDetail";

function App() {
    return (
        <>
            <Router>
                <ForoContextProvider>
                    <Header />
                    <main>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route
                                path="/family/:id"
                                element={<FamilyTopicDetail />}
                            />
                        </Routes>
                    </main>
                    <footer></footer>
                </ForoContextProvider>
            </Router>
        </>
    );
}

export default App;
