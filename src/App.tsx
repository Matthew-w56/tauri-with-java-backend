import { StompProvider } from './components/StompProvider';
import TauriWindowEventListener from './components/TauriWindowEventListener';
import StompClientIsActiveGate from './components/StompClientIsActiveGate';
import ItemView from './ui-sections/ItemView'
import ServerWaitingScreen from './components/ServerWaitingScreen';
import './App.css'

function App() {

  return (
    <StompProvider>
			<StompClientIsActiveGate fallback={ServerWaitingScreen}>
				<div className="main-content-column">
					<h1 className="main-title">My To-Do App</h1>
					<TauriWindowEventListener />
					<ItemView />
					<div className="bottom-spacer" />
				</div>
			</StompClientIsActiveGate>
    </StompProvider>
  );
	
}

export default App
