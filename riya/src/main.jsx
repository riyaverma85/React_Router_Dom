
import { createRoot } from 'react-dom/client'

import App from "./MainChild.jsx"
 import { BrowserRouter } from 'react-router-dom'
import UserContext from './ContextApi.jsx'

let mydata={
     name:"Riya",
     city:"bhopal"
}

createRoot(document . getElementById ('root')) . render(
    <UserContext.Provider value={mydata}>
     <BrowserRouter>
          <App/>
     </BrowserRouter>
  </UserContext.Provider>
)
