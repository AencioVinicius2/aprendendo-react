import { useCallback, useMemo, useState, useRef } from 'react';
import { InputLogin } from './components/InputLogin';
import { ButtonLogin } from './components/ButtonLogin';
import { useUsuarioLogado } from '../../shared/hook';

export const Login = () => {
    const inputPasswordRef = useRef<HTMLInputElement>(null);

    const { nomeDoUsuario } = useUsuarioLogado();

    const [password, setPassword] = useState('');

    const [email, setEmail] = useState('');

    const emailLenth = useMemo(() => {
        return email.length;
    }, [email.length]);

    const handleEntrar = useCallback(() => {
        console.log(email, password);

        if (inputPasswordRef.current !== null) {
            inputPasswordRef.current.focus();
        }
    }, [email, password]);

    return (
        <div>
            <form>
                <p>Quantidade de caracteres no email: {emailLenth}</p>
                <p>{nomeDoUsuario}</p>

                <InputLogin
                    label="email"
                    value={email}
                    onChange={newValue => setEmail(newValue)}
                    onPressEnter={() => inputPasswordRef.current?.focus()}
                />
                
                <InputLogin
                label="senha"
                value={password}
                ref={inputPasswordRef}
                onChange={newValue => setPassword(newValue)}
                type="password"
                />
                
                <ButtonLogin type="button" onClick={handleEntrar}> 
                    Entrar
                </ButtonLogin> 
                <ButtonLogin type="button" onClick={handleEntrar}> 
                    Cadastrar-se
                </ButtonLogin>

            </form>
        </div>
    )
}