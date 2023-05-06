import { BrowserRouter , Routes, Route, Outlet, Navigate} from "react-router-dom";
import { Login } from "./components/Login/Login";
import { Cadastro } from "./components/Cadastro/Cadastro";
import Home from "./pages/home/Home";
import Header from "./components/Header/Header";
import App from "./App";
import path from "path";
import NotFound from "./pages/notFound/NotFound";
import Painel from "./pages/painel/Painel";
import UserEdit from "./components/User/UserEdit/UserEdit";

export default function PageRoutes(){

    const DefaultPages = () => (
        <div>
          <Header></Header>
          <Outlet />
        </div>
      );

      const UserLogged = () => (
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
                <Route element={<Navigate to = "/home" replace/>} path="/"/>
                <Route element={<Home/>} path="/home"/>
                <Route element={<Login/>} path="/login"/>
                <Route element={<Cadastro/>} path="/cadastro"/>
                <Route element={<Painel/>} path="/painel"/>
                <Route element={<UserEdit/>} path="/painel/edit/:id"/>
            </Route>
        </Routes>
        </BrowserRouter>
    )
}