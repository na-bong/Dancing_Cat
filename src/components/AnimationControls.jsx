import './AnimationControls.css';

const SPEED_OPTIONS = [0.5, 1, 1.5, 2];

const AnimationControls = ({ isPlaying, onToggle, speed, onSpeedChange }) => {
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

      <div className="speed-controls">
        <span className="speed-label">속도</span>
        <div className="speed-buttons">
          {SPEED_OPTIONS.map((option) => (
            <button
              key={option}
              className={`speed-button ${speed === option ? 'active' : ''}`}
              onClick={() => onSpeedChange(option)}
            >
              {option}x
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimationControls;
