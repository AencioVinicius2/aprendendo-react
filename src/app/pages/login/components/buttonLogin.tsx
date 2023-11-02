import { useUsuarioLogado } from "../../../shared/hook";

interface IButtonLoginProps {
    type?: "button" | "submit" | "reset";
    onClick: () => void;
    
    children: React.ReactNode;
}

export const ButtonLogin: React.FC<IButtonLoginProps> = ({type, onClick, children}) => {

    const { nomeDoUsuario }= useUsuarioLogado();

    return (
        <button type={type} onClick={onClick}>
            {nomeDoUsuario} {children}
        </button>
    )
}