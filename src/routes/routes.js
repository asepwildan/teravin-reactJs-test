import { BrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "../pages/main/main";
import Detail from "../pages/detail/detail";
function RoutesLink() {
    return (
        <Router>
            <Routes>
                <Route exact path="" element={<MainPage />} />
                <Route exact path="detail/:id" element={<Detail />} />
            </Routes>
        </Router>
    );
}

export default RoutesLink;
