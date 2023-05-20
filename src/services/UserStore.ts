import {create} from 'zustand';

interface User {
    email: string,
    token: string,
    nome: string

}
export const useUserStore = create<User>(() =>({
    email : "",
    token: "",
    nome: ""
}));