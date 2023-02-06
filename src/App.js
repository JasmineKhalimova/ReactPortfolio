import './App.css';
import Header  from './components/header/header';
import Home from './components/home/Home';
import About from './components/about/About';

function App() {
  return (
    <div>
      <Header />
      <main className='main'>
        <Home />
        <About />
      </main>
    </div>
  );
}

export default App;
