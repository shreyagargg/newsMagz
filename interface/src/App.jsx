import { Route, Routes} from 'react-router-dom'
import SignupScreen from './screens/SignupScreen'
import LoginScreen from './screens/LoginScreen'
import NewsletterScreen from './screens/NewsletterScreen'
import HomeScreen from './screens/HomeScreen'

function App(){
    return(
        <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/signup" element={<SignupScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/newsletter" element={<NewsletterScreen />} />
        </Routes>
    )
}

export default App