import {
    BrowserRouter as Router,
    Navigate,
    Route,
    Routes,
} from "react-router-dom";
import { ForoContextProvider } from "./context/apiContext";
import Home from "./pages/home/Home";
import Header from "./components/core/header/Header";
import FamilyTopicDetail from "./pages/familyTopicDetail/FamilyTopicDetail";
import TopicDetail from "./pages/topicDetail/TopicDetail";
import UserProfile from "./pages/userProfile/UserProfile";

function App() {
    return (
        <>
            <ForoContextProvider>
                <Router>
                    <Header />
                    <main>
                        <Routes>
                            <Route path="/home" element={<Home />} />
                            <Route
                                path="/family/:id"
                                element={<FamilyTopicDetail />}
                            />
                            <Route
                                path="/topic/:id"
                                element={<TopicDetail />}
                            />
                            <Route
                                path="/user/:username"
                                element={<UserProfile />}
                            />
                            <Route path="*" element={<Navigate to="/home" />} />
                        </Routes>
                    </main>
                    <footer></footer>
                </Router>
            </ForoContextProvider>
        </>
    );
}

export default App;
