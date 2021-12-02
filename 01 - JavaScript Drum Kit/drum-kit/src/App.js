import data  from './data'

import Key from "./Key"

function App() {
  // const keys = data.map(item => item.letter)
  
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
