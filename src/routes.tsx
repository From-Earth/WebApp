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
import { Delete } from "./components/Delete/Delete";
import { Upload } from "./components/Upload/Upload";
import { useUserStore } from "./services/UserStore";
import UserPerfil from "./components/User/UserPerfil/UserPerfil";
import DocumentEdit from "./components/Document/DocumentEdit/DocumentEdit";

export default function PageRoutes(){

  const ProtectedRoute = ({ children }: any) => {
    const user = useUserStore(state => state);
    if (user.isEmpty) {
      alert("Acesso expirado!")
      return <Navigate to="/login" />;
    }
    return children;
  };

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
            </Route>
            <Route element={<ProtectedRoute><UserLogged/></ProtectedRoute> }>

                <Route element={<Painel/>} path="/painel"/>
                <Route element={<Upload/>} path="/painel/livro"/>
                <Route element={<DocumentEdit/>} path="/painel/livro/edit/:id"/>
                <Route element={<UserEdit/>} path="/painel/edit/:id"/>
                <Route element={<Delete/>} path="/painel/excluir/:id"/>
                <Route element={<UserPerfil/>} path="/painel/usuario"/>
            </Route>
        </Routes>
        </BrowserRouter>
    )
}