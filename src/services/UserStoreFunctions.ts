import { UserLogged, useUserStore } from "./UserStore";

class OutraClasse {
    setNome(novoNome: string) {
      const { getState, setState } = useUserStore(); // Chame o hook useUserStore para obter as funções getState e setState
      const estadoAtual = getState(); // Obtenha o estado atual chamando getState()
  
      const novoEstado = { ...estadoAtual, nome: novoNome }; // Criar um novo objeto de estado com o novo valor do nome
      setState(novoEstado); // Atualizar o estado chamando setState() com o novo objeto
    }
  }

export default OutraClasse;
