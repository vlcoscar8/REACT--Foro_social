import {
    BrowserRouter as Router,
    Navigate,
    Route,
    Routes,
} from "react-router-dom";
import Header from "./components/core/header/Header";
import { AuthProvider } from "./state/context/authStateContext";
import React from "react";
import Loading from "./components/shared/loading/Loading";

const Home = React.lazy(() => import("./pages/home/Home"));
const FamilyTopicDetail = React.lazy(() =>
    import("./pages/familyTopicDetail/FamilyTopicDetail")
);
const TopicDetail = React.lazy(() => import("./pages/topicDetail/TopicDetail"));
const UserProfile = React.lazy(() => import("./pages/userProfile/UserProfile"));

function App() {
    return (
        <>
            <AuthProvider>
                <Router>
                    <Header />
                    <main>
                        <Routes>
                            <Route
                                path="/home"
                                element={
                                    <React.Suspense fallback={<Loading />}>
                                        <Home />
                                    </React.Suspense>
                                }
                            />
                            <Route
                                path="/family/:id"
                                element={
                                    <React.Suspense fallback={<Loading />}>
                                        <FamilyTopicDetail />
                                    </React.Suspense>
                                }
                            />
                            <Route
                                path="/topic/:id"
                                element={
                                    <React.Suspense fallback={<Loading />}>
                                        <TopicDetail />
                                    </React.Suspense>
                                }
                            />
                            <Route
                                path="/user/:username"
                                element={
                                    <React.Suspense fallback={<Loading />}>
                                        <UserProfile />
                                    </React.Suspense>
                                }
                            />
                            <Route path="*" element={<Navigate to="/home" />} />
                        </Routes>
                    </main>
                    <footer></footer>
                </Router>
            </AuthProvider>
        </>
    );
}

export default App;
