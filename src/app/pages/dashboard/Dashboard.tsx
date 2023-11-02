import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useUsuarioLogado } from '../../shared/hook';

export const Dashboard = () => {
    const counterRef = useRef({ counter: 0 });

    const usuarioLogadoContext = useUsuarioLogado();

    return (
        <div>
            <p>Dasboard</p>

            <p>{usuarioLogadoContext.nomeDoUsuario}</p>

            <p>Contador: `{counterRef.current.counter}</p>

            <button onClick={() => counterRef.current.counter++}>Somar</button>

            <Link to="/entrar">Login</Link>
        </div>
    )
}