import React from "react"
import styled from 'styled-components'

import {auth, db} from "./firebase"
import {createUserWithEmailAndPassword, onAuthStateChanged,signOut} from "firebase/auth"
import { collection, getDoc, getDocs, addDoc } from "firebase/firestore";
import { useSelector,useDispatch, } from "react-redux";
import { CreateDictionary,LoadMagazineFB } from "./redux/modules/magazine"
import {Routes, Route,useNavigate} from "react-router-dom"




const Home = () => {
  const data = useSelector((state) => state.magazine.list) //state는 스토어에서 가지고오는 전체 데이터를 의미
  console.log(data)  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  React.useEffect(() => {
    dispatch(LoadMagazineFB())  
},[])

    return (
      <div style={{
        backgroundColor: "#DCF6F6",
        width: "100vw",
        minHeight : "100vh",
      }}>
        
          <div style={{
            borderBottom: "5px solid black",
            display: "flex",
            justifyContent: "center"
            
          }}>
            <div>
              <h1>Welcome to magazine</h1>
            </div>
            <div>
              <button 
              style={{              
                position: "relative",
                left: "300px",
              }}onClick={ () => {
              signOut(auth)
            }}>로그아웃</button>
            <button 
              style={{
                position: "sticky",
              }}onClick={()=> {
                navigate("/add")
            }}>추가하러가기</button>
            </div>
            
          </div>
          
        {data.map((list,index) => {
          return (
            <MagazineList>
        
        <img style= {{
          width: "300px",
          height: "400px",
          marginLeft: "100px",
          marginTop: "20px",
        }}
        src={list.image_url}/>
        <p>
        {list.text}
        </p>
        
        
        </MagazineList>

          )
        })}
        

        
        
        
      </div>
    )
  }

export default Home




const MagazineList = styled.div`
    background-color: white;
    width: 500px;
    height: 600px;
    margin: 20px auto;
    border: 2px solid black;
    border-radius: 2px;
    align-content: center;
    align-items: center;

    
    
`