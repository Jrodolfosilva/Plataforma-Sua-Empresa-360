import Header from "./components/header/Header"
import { GlobalStyledSite } from "./styled/styled-global"
import {Link,BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./page/home/Home"
import Footer from "./components/footer/Footer"

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <GlobalStyledSite/>  
       <Header/>
    
       <Routes>

        <Route path="/home" element={<Home/>}/>

       </Routes>
       <Footer/>
    </div>
    </BrowserRouter>
  )
}

export default App
