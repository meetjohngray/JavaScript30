import { useRef } from 'react';
import KeyboardEventHandler from 'react-keyboard-event-handler'

function Key(props) {
  const key = props.data.key
  const letter = props.data.letter
  const sound = props.data.sound
  const audio = props.data.audio
  const audioRef = useRef(null)
  // const src = `/sounds/${sound}.wav`
  
  return (
    <>
    <KeyboardEventHandler
    handleKeys={[letter]}
    onKeyEvent={() => {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
      console.log(`do something upon keydown event of ${key}`)
      } 
    }
    />  
    <div data-key={key} className="key" >
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