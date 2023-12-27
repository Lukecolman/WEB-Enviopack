import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Collect from './pages/Collect';
import Fullpack from './pages/Fullpack';
import Dispatch from './pages/Dispatch';
import Carriers from './pages/Carriers';
import Integrations from './pages/Integrations';
import Rates from './pages/Rates';
import Contact from './pages/Contact';
import Tracking from './pages/Tracking';
import { Navbar, Footer } from './components';

const App = () => {
    return (
        <BrowserRouter>
            <>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/collect' element={<Collect />} />
                    <Route path='/fullpack' element={<Fullpack />} />
                    <Route path='/dispatch' element={<Dispatch />} />
                    <Route path='/carriers' element={<Carriers />} />
                    <Route path='/integrations' element={<Integrations />} />
                    <Route path='/rates' element={<Rates />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/tracking' element={<Tracking />} />
                </Routes>
                <Footer />
            </>
        </BrowserRouter>
    );
};

export default App;
