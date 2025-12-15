import DancingCat from './components/DancingCat';
import AnimationControls from './components/AnimationControls';
import useAnimation from './hooks/useAnimation';
import './styles/animations.css';
import './App.css';

function App() {
  const { isPlaying, speed, toggle, changeSpeed } = useAnimation(true);

  return (
    <div className="app">
      <header className="app-header">
        <h1 className="title">Dancing Cat</h1>
        <p className="subtitle">Click the button to control the dance!</p>
      </header>

      <main className="app-main">
        <DancingCat isPlaying={isPlaying} speed={speed} />
        <AnimationControls
          isPlaying={isPlaying}
          onToggle={toggle}
          speed={speed}
          onSpeedChange={changeSpeed}
        />
      </main>

      <footer className="app-footer">
        <p>Made with React + Vite</p>
      </footer>
    </div>
  );
}

export default App;
