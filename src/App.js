import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Container from './Container';

//api key: https://api.adviceslip.com/
//install dependency: npm i react-router-dom axios 
//above dependency will be at package.json
//in index.js: import {BrowserRouter} from 'react-router-dom' and warp <App / > with {BrowserRouter};
//then header

function App() {
  return (
    <div className="App">
       <Header />
        <main>
          <Container />
        </main>
        <Footer/>
    </div>
  );
}

export default App;
