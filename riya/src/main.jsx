
import { createRoot } from 'react-dom/client'

import App from "./Mybooking.jsx"
 import { BrowserRouter } from 'react-router-dom'
import UserContext from './ContextApi.jsx'

createRoot(document . getElementById ('root')) . render(
    <UserContext.Provider value={"Riya Sharma"}>
     <BrowserRouter>
          <App/>
     </BrowserRouter>
    
  </UserContext.Provider>
)
