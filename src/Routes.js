import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import Feed from './pages/Feed/Feed';
import Jobs from './pages/Jobs/Jobs';
import Profile from './pages/Profile/Profile';
import TopNav from './components/TopNav/TopNav';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <>
          <TopNav />
          <Route exact path="/" component={Home} />
          <Route exact path="/feed" component={Feed} />
          <Route exact path="/jobs" component={Jobs} />
          <Route exact path="/profile" component={Profile} />
        </>
      </Switch>
    </BrowserRouter>
  );
}
