import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ForoContextProvider } from "./context/apiContext";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import FamilyTopicDetail from "./pages/familyTopicDetail/FamilyTopicDetail";
import TopicDetail from "./pages/topicDetail/TopicDetail";

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
                            <Route
                                path="/topic/:id"
                                element={<TopicDetail />}
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
