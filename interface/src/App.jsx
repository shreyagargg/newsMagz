import { Route, Routes} from 'react-router-dom'
import SignupScreen from './screens/SignupScreen'

function App(){
    return(
        <Routes>
            <Route path="/signup" element={<SignupScreen />} />
        </Routes>
    )
}

export default App