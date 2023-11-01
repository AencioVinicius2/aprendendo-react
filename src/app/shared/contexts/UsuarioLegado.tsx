import { createContext } from 'react'

interface IUsuarioLogadoContextProps {
    children: React.ReactNode;
}

interface IUsuarioLogadoContextData {
    nomeDoUsuario: string;
}

const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

export const UsuarioLogadoProvidor: React.FC<IUsuarioLogadoContextProps> = ({ children }) => {

    return (
        <UsuarioLogadoContext.Provider value={{ nomeDoUsuario: 'Aencio' }}>
            {children}
        </UsuarioLogadoContext.Provider>
    );
}