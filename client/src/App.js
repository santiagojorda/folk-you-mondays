import {
  BrowserRouter, 
  Route,
  Routes
} from 'react-router-dom'

import MainPage from './pages/main/mainPage';
import SignoutPage from './pages/signout/signoutPage';
import SpotyCallbackPage from './pages/spotyCallback/spotyCallbackPage';




function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<MainPage />} />
        <Route exact path='/callback' element={<SpotyCallbackPage />} />
        <Route exact path='/signout' element={<SignoutPage />} />

      </Routes>
    </BrowserRouter>

  );
}

export default App;
