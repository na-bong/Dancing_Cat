import './AnimationControls.css';

const AnimationControls = ({ isPlaying, onToggle }) => {
  return (
    <div className="controls-container">
      <button
        className={`control-button ${isPlaying ? 'playing' : 'paused'}`}
        onClick={onToggle}
        aria-label={isPlaying ? '애니메이션 정지' : '애니메이션 시작'}
      >
        <span className="button-icon">
          {isPlaying ? '⏸' : '▶'}
        </span>
        <span className="button-text">
          {isPlaying ? '멈추기' : '춤추기'}
        </span>
      </button>
    </div>
  );
};

export default AnimationControls;
