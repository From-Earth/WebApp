import {create} from 'zustand';

type UserLogged = {
    id: number,
    email: string,
    token: string,
    nome: string,
    isEmpty: boolean;
    setUser: (novoId: number,
        novoEmail: string,
        novoToken: string,
        novoNome: string,) =>void

}
export const useUserStore = create<UserLogged>(set =>({
    id: NaN,
    email : '',
    token: '',
    nome: '',
    isEmpty: true,
    setUser: (novoId,novoEmail,novoToken,novoNome) => set(() => ({
        id: novoId,
        email : novoEmail,
        token: novoToken,
        nome: novoNome,
        isEmpty:
        novoEmail === '' && novoToken === '' && novoNome === ''
          ? true
          : false
    }))
}));

