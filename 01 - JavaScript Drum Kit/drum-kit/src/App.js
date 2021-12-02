// Big assist goes to https://github.com/GeoffreyHanson/drum-kit
import data  from './data'
import Key from "./Key"

function App() {
  
  return (
    <>
    <div className="keys">
      {data.map(item => (
        <Key key={item.key} data={item} />
        )
      )}
    </div>
    </>
  )
}

export default App;
