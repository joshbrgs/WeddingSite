import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import SignUp from './pages/auth/signupform';
import SignIn from './pages/auth/signinform';
import Profile from './pages/auth/updateProfile';
import Home from './pages/Home';
import RSVP from './pages/RSVP';
import Photo from './pages/Photos';
import Maid from './pages/Bridesmaids';
import Admin from './pages/Admin';
import Groom from './pages/Groomsmen';
import Party from './pages/party';
import PasswordReset from './pages/auth/passwordReset';
import { AuthProvider } from './utils/AuthContext';
import PrivateRoute from './routes/privateRoute';
import FAQ from './pages/FAQ';
import PlacesToStay from './pages/PlacesToStay';

const App: React.FC = () => {
  const location = useLocation();
  return (
    <AuthProvider>
      <Switch location={location} key={location.key}>
        <Route path='/signup' component={SignUp} />
        <Route path='/login' component={SignIn} />
        <Route path='/' exact component={Home} />
        <Route path='/rsvp' component={RSVP} />
        <Route path='/photos' component={Photo} />
        <Route path='/faq' component={FAQ} />
        <Route path='/places-to-stay' component={PlacesToStay} />
        <Route path='/passwordreset' component={PasswordReset} />
        <PrivateRoute path='/profile' component={Profile} />
        <PrivateRoute path='/bridesmaid' component={Maid} />
        <PrivateRoute path='/party' component={Party} />
        <PrivateRoute path='/groomsmen' component={Groom} />
        <PrivateRoute path='/admin' component={Admin} />
      </Switch>
    </AuthProvider>
  );
};

export default App;
