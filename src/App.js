import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import MidContent from './components/MidContent/MidContent';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="appParent">
    <div className="App">
      <Header />
      <Profile />
      <MidContent />
    </div>
          
   <Footer />

    </div>
  );
}

export default App;
