import './App.css';
import { animals } from './data';
import Header from './Header/Header.js';
import Footer from './Footer/Footer.js';


function App() {
  return (
    <div className="App">
      <Header name='Clare McDonald'/>
    
      <Footer email='clare.s.mcdonald@gmail.com'/>
    </div>
  );
}

export default App;
