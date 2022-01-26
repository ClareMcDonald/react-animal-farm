import './App.css';
import { animals } from './data';
import Header from './Header/Header.js';
import Main from './Main/Main.js';
import Footer from './Footer/Footer.js';


function App() {
  return (
    <div className="App">
      <Header name='Clare McDonald'/>
      <Main animals={ animals }/>
      <Footer email='clare.s.mcdonald@gmail.com'/>
    </div>
  );
}

export default App;
