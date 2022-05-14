import Login from "./Login";
import Logout from "./Logout";
import Profile from './Profile';
import { useAuth0 } from '@auth0/auth0-react';

function App() {

  const { isAuthenticated, isLoading, user } = useAuth0();

  if (isLoading) return <div>Loading ...</div>

  return (
    <div className="App">
      {isAuthenticated ? <Logout /> : <Login />}
      {isAuthenticated && <Profile user={user} />}
    </div>
  );
}

export default App;
