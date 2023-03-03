import './App.css';
import { CompA } from './CompA';
import { GlobalContextProvider } from './GlobalContext';

const info = "Info will be here"

function App() {
  return (
    <GlobalContextProvider>
    <div className="App">
      <CompA info={info}/>
    </div>
    </GlobalContextProvider>
  );
}

export default App;
