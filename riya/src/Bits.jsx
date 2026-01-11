import React from 'react'
import Ballpit from './Ballpit'
import "./tailwind.css"
const App = () => {
  return (
    <>
  <div  style={{position: 'relative', overflow: 'hidden', minHeight: '500px', maxHeight: '500px', width: '100%'}}>
   <Ballpit
     count={200}
     gravity={0.7}
     friction={0.8}
      wallBounce={0.95}
     followCursor={true}
  />
 </div>
   </>
  )
}

export default App