import logo from './logo.svg';
import './App.css';
import UpperSection from './Components/UpperSection';
import LowerSection from './Components/LowerSection';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <UpperSection/>
      <LowerSection />
      <Footer />
    </div>
  );
}

export default App;
