import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import NavMenu from './components/NavMenu';
import Home from './routes/Home';
import PraktiskInfo from './routes/PraktiskInfo';
import Tidslinje from './routes/Tidslinje'
import Skjema from './routes/RSVPFrom';
import Toastmaster from './routes/Toastmaster'
import Forlovere from './routes/Folovere'
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
 <div className="flex flex-col min-h-screen">
        <NavMenu />
        <div className="flex-grow">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/praktisk-info' element={<PraktiskInfo />} />
            <Route path='/tidslinje' element={<Tidslinje />} />
            <Route path='/skjema' element={<Skjema />} />
            <Route path='/toastmaster' element={<Toastmaster />} />
            <Route path='forlovere' element={<Forlovere />} />
          </Routes>
        </div>
        <Footer />
      </div>
      </BrowserRouter>
  );
}

export default App;
