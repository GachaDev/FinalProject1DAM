import LoggedInComponent from './components/LoggedInComponent';
import Login from './components/Login/Login';
import { CSSTransition } from 'react-transition-group';
import { UseAdmin } from './Zustand/UseAdmin';

export default function App() {
  const { isLogged, setIsLogged } = UseAdmin();
  return (
    <div>
      <CSSTransition
        in={isLogged}
        timeout={500}
        classNames="fade"
        unmountOnExit
      >
        <LoggedInComponent />
      </CSSTransition>
      <CSSTransition
        in={!isLogged}
        timeout={500}
        classNames="fade"
        unmountOnExit
      >
        <Login setIsLogged={setIsLogged} />
      </CSSTransition>
    </div>
  );
}
