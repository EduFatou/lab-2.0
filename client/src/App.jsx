import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  

  return (
    <>
          <BrowserRouter >
            <Header />
            <Main />
          </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
