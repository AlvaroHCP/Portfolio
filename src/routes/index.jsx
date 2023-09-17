import { Routes, Route } from "react-router-dom";
import { Home } from '../Pages/Home'
import { NotFound404 } from '../Pages/404'
import { AboutMe } from "../Pages/AboutMe";
import { Portfolio } from "../Pages/Portfolio";

function RoutesApp() {
    return (
        <Routes>
            <Route path={'/'} element={<Home />} />
            <Route path={'/sobre'} element={<AboutMe />} />
            <Route path={'/projetos'} element={<Portfolio />} />
            <Route path={'*'} element={<NotFound404 />} />
        </Routes>
    )
}

export { RoutesApp }