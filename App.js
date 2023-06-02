import {Route} from 'react-router-dom'
import {Routes} from 'react-router-dom'
import {ResponsiveAppBar} from './components/AppBarComponent';
import BottomNavigationComponent from './components/BottomNavigation';
import LoginForm from './LoginComponents';
import RegistrationForm from './components/UserRegistration';

function App() {
  return (
    <html>
    <div>
      
      <ResponsiveAppBar/>
      <br/>

      <BottomNavigationComponent/>
      <RegistrationForm/>
      <LoginForm/>

      
    </div>
    </html>
  );
};


export default App;