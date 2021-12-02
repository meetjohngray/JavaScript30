import { useState, useRef } from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler'

function Key(props) {
  const [play, setPlay] = useState(false)
  const audioRef = useRef(null)
  
  const key = props.data.key
  const letter = props.data.letter
  const sound = props.data.sound
  const audio = props.data.audio
  
  return (
    <>
    <KeyboardEventHandler
    handleKeys={[letter]}
    onKeyEvent={(e) => {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
      setPlay(true)
      } 
    }
    />  
    <div data-key={key} 
      className= {"key " + (play ? 'playing' : '')}
      onTransitionEnd = {() => setPlay(false)} 
    >
      <kbd>{letter}</kbd>
      <span className="sound">{sound}</span>
      <audio 
        data-key={key} 
        src={audio}
        ref={audioRef}
        >
      </audio>
    </div>
    </>
  )
}

export default Key