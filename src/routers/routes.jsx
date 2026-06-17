import{BrowserRouter as Router, Route, Routes} from "react-router-dom"

import LandingPage  from "../pages/Landing.Page"
import { CharacterDetails } from "../pages/CharacterDetails"
export function MyRoutes() {
    return(
        <Router>
            <Routes>
                <Route  path="/" element={<LandingPage />} />
                <Route  path="/details/:detailsId" element={<CharacterDetails />} />

            </Routes>
        </Router>
    )
    
}