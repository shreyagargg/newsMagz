import { Route, Routes} from 'react-router-dom'
import SignupScreen from './screens/SignupScreen'
import LoginScreen from './screens/LoginScreen'
import NewsletterScreen from './screens/NewsletterScreen'
import HomeScreen from './screens/HomeScreen'
import BookmarkScreen from './screens/BookmarkScreen'
import AuthorDashboard from './screens/AuthorDashboard'

function App(){
    return(
        <Routes>
            <Route path="/reader" element={<HomeScreen />} />
            <Route path="/author" element={<AuthorDashboard />} />
            <Route path="/signup" element={<SignupScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/newsletter" element={<NewsletterScreen />} />
            <Route path="/bookmark" element={<BookmarkScreen />} />
        </Routes>
    )
}

export default App