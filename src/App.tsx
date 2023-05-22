import './App.css';
import './header/header.tsx';
import { Header } from './header/header.tsx';

function App() {
  const title = 'The pointing gentlemen';

  return (
    <>
      <div className="container">
        <Header title={title}></Header>
      </div>
    </>
  )
}

export default App
