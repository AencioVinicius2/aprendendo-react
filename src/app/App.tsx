import  { Routes } from './routes';
import { UsuarioLogadoProvidor } from './shared/contexts'

export const App = () => {
  return (
    <UsuarioLogadoProvidor>
      <Routes />
    </UsuarioLogadoProvidor>
      
  );
}