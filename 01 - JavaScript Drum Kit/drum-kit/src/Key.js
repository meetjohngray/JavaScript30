function Key(props) {
  const key = props.data.key
  const letter = props.data.letter
  const sound = props.data.sound
  
  return (
    <div data-key={key} className="key" >
      <kbd>{letter}</kbd>
      <span className="sound">{sound}</span>
      <audio data-key={key} src={`/sounds/${sound}</div>`}></audio>
    </div>
  )
}

export default Key