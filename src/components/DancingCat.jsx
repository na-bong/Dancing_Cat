import CatSvg from '../assets/images/Cat';
import './DancingCat.css';

const DancingCat = ({ isPlaying, speed = 1 }) => {
  const animationDuration = 1 / speed;

  return (
    <div
      className="dancing-cat-container"
      style={{ '--animation-speed': `${animationDuration}s` }}
    >
      <div className={`cat-wrapper ${isPlaying ? 'dancing' : ''}`}>
        <CatSvg className="cat-svg" />
      </div>
      <div className={`cat-shadow ${isPlaying ? 'shadow-dancing' : ''}`}></div>

      {/* 음표들 */}
      {isPlaying && (
        <div className="music-notes">
          <span className="note note-1">♪</span>
          <span className="note note-2">♫</span>
          <span className="note note-3">♪</span>
          <span className="note note-4">♬</span>
        </div>
      )}
    </div>
  );
};

export default DancingCat;
