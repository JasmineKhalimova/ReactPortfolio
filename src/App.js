import './App.css';
import Header  from './components/header/header';
import Home from './components/home/Home';

function App() {
  return (
    <div>
      <Header />
      <main className='main'>
        <Home />
      </main>
    </div>
  );
}

export default App;
