
import 'bootstrap/dist/css/bootstrap.min.css';
import {MainContextProvider} from './phoneEcmrs/context/Context'

import Index from './phoneEcmrs/Index'

function App() {
  return (
    <MainContextProvider>
      <Index/>
    </MainContextProvider>
  );
}

export default App;
