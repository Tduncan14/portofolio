import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import MidContent from './components/MidContent/MidContent';

function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
      <MidContent />
      
    </div>
  );
}

export default App;
