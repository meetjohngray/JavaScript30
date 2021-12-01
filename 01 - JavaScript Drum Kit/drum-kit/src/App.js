import { useEffect } from 'react'
import data  from './data'
import Key from "./Key"

function App() {
  
  useEffect(() => {
    document.addEventListener('keydown', handlePress)
    const keys = Array.from(document.querySelectorAll('.key'))
    console.log(keys)
    return () => {
      document.removeEventListener('keydown', handlePress)
    }
  }, [])

  // console.log(keys)
  const handlePress = (e) => {
    console.log('hi', e.key)
  }

  return (
    <div className="keys" tabIndex = {0} onKeyDown={handlePress}>
      {data.map(item => (
        <Key key={item.key} data={item} />
        )
      )}
    </div>
  )
}

export default App;
