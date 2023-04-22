import { BrowserRouter , Routes, Route, Outlet} from "react-router-dom";
import { Login } from "./components/Login/Login";
import Header from "./components/Header/Header";
import App from "./App";
import path from "path";
import Home from "./pages/home/Home";
import NotFound from "./pages/notFound/NotFound";

export default function PageRoutes(){

    const DefaultPages = () => (
        <div>
          <Header></Header>
          <Outlet />
        </div>
      );
    return (
        <BrowserRouter>
        <Routes>
           
            <Route element={<DefaultPages/>}>
                <Route element={<NotFound/>} path="*"/>
                <Route element={<Home/>} path="/"/>
                <Route element={<Login/>} path="/login"/>
            </Route>
        </Routes>
        </BrowserRouter>
    )
}