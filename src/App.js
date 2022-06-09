import React from 'react';
import styled from 'styled-components'

import {Routes, Route,useNavigate} from "react-router-dom"
import {createUserWithEmailAndPassword, onAuthStateChanged,signOut} from "firebase/auth"

import {auth, db} from "./firebase"

import Signup from "./Signup"
import Login from "./Login"
import Home from './Home';
import Add from './Add'
import Test from './Test';


function App() {
  const navigate = useNavigate()

  const [is_login, setIsLogin] = React.useState(false)
  const loginCheck = async (user) => {
    if(user) {
      setIsLogin(true)
      navigate('/')
    } else {
      setIsLogin(false)
      navigate('/')
    }

  }
  React.useEffect(( )=> {
    onAuthStateChanged(auth, loginCheck)
  }, [])


  return (
    <div className="App">
      
      <Routes>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/add' element={<Add/>}/>
        
        {is_login? (
          <Route path='/' element={<Home/>}/>
          
        ) : (
        <Route path='/' element={<Login/>}/>
        )}
      </Routes>

    </div>
  );
}

export default App;

const Wrap = styled.div`
  min-width: 30vw;
  max-width: 30vw;
  min-height: 95vh;
  background-color: #DCF6F6;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center;

`
