import { Route, Routes} from 'react-router-dom'
import SignupScreen from './screens/SignupScreen'
import LoginScreen from './screens/LoginScreen'

function App(){
    return(
        <Routes>
            <Route path="/signup" element={<SignupScreen />} />
            <Route path="/login" element={<LoginScreen />} />
        </Routes>
    )
}

export default App