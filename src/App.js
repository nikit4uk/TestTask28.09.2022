import { useState, useEffect } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Users from './components/Users/Users';
import UserForm from './components/UserForm/UserForm';

const App = () => {
  const [ users ] = useState([]);
  const [ CountID ] = useState(70);
  const [ userPerPage, setMoreUserPerPage ] = useState(6);

  return (
    <main>
      <Header />
      <Main />
      <Users users={users} CountID={CountID} userPerPage={userPerPage} setMoreUserPerPage={setMoreUserPerPage} />
      <UserForm users={users} CountID={CountID} userPerPage={userPerPage} setMoreUserPerPage={setMoreUserPerPage} />
    </main>
  );
}

export default App;
