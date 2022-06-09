import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import {createUserWithEmailAndPassword} from "firebase/auth"
import { collection, addDoc } from "firebase/firestore"
import {auth, db, } from "./firebase"

const Signup = () => {
    const id_ref = React.useRef(null)
    const name_ref = React.useRef(null)
    const pw_ref = React.useRef(null)
    const pwcheck_ref = React.useRef(null)

    const signupFB= async () => {

        const user = await createUserWithEmailAndPassword(
          auth, 
          id_ref.current.value,
          pw_ref.current.value)
        console.log(user)
    
        const user_doc = await addDoc(collection(db, "users") , {
          user_id: user.user.email,
          name: name_ref.current?.value,
        })
        console.log(user_doc.id)
      }
    const navigate = useNavigate()

    return (
        <div>
            <SignUpWrap>
                <button onClick={()=> {
                    navigate("/login")
                }}>로그인</button>
                <h1>회원가입</h1>
                아이디<br/>
                <input ref={id_ref}/><br/>
                닉네임<br/>
                <input ref={name_ref}/><br/>
                비밀번호<br/>
                <input ref={pw_ref}/><br/>
                비밀번호 확인<br/>
                <input ref={pwcheck_ref}/><br/>              
                <button onClick={signupFB}>회원가입</button>
            </SignUpWrap>
            
            
        </div>
    )
}

export default Signup

const SignUpWrap = styled.div`
    width: 500px;
    height: 90vh;
    border: 1px solid black;
    margin: 20px auto;
    align-items: center;
    display: flex;
    flex-direction: column;
`
