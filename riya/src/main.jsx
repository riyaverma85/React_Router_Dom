
import { createRoot } from 'react-dom/client'

import App from "./ContextApi.jsx"
 import { BrowserRouter } from 'react-router-dom'
import UserContext from './ContextApi.jsx'

let mydata={
     name:"Riya"
}

createRoot(document . getElementById ('root')) . render(
    <UserContext.Provider value={mydata}>
     <BrowserRouter>
          <App/>
     </BrowserRouter>
  </UserContext.Provider>
)
