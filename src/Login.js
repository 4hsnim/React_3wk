import React,{ useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import {signInWithEmailAndPassword } from "firebase/auth";
import {auth, db} from "./firebase"
import {getDocs, where, query, collection} from "firebase/firestore"

const Login = () => {

    const [id, setId] = useState("");

    const id_ref = React.useRef(null)
    const pw_ref = React.useRef(null)

    const loginFB = async () => {

        

        console.log(id_ref.current.value,pw_ref.current.value)
        const user = await signInWithEmailAndPassword(
            auth,
            id_ref.current.value,
            pw_ref.current.value
            )
        console.log(user)

        const user_docs = await getDocs(query(
            collection(db,"users"),where("user_id", "==", user.user.email)
        ))
        user_docs.forEach(u => {
            console.log(u.data())
        })

        

    }
    const navigate = useNavigate()
    return (
        <LoginWrap>
            <button onClick={()=> {
                    navigate("/signup")
                }}>회원가입</button>
                <h1>로그인</h1>
                아이디<br/>
                <input ref={id_ref}/><br/>
                비밀번호<br/>
                <input ref={pw_ref}/><br/>           
                <button onClick={loginFB}>로그인</button>
        </LoginWrap>
    )
}

export default Login

const LoginWrap = styled.div`
    width: 500px;
    height: 90vh;
    border: 1px solid black;
    margin: 20px auto;
    align-items: center;
    display: flex;
    flex-direction: column;
`