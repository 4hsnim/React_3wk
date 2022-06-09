import React from 'react';
import styled from 'styled-components'

import {ref, uploadBytes,getDownloadURL} from "firebase/storage"
import {auth, db, storage} from "./firebase"
import { collection, addDoc } from "firebase/firestore"

const Add = () => {
    
    

    const file_ref = React.useRef(null)
    const file_link_ref = React.useRef(null)
    const text_ref = React.useRef(null)


    // e.target.files
    const uploadFB = async() => {
        if (text_ref==="") {
            window.alert("텍스트를 입력하세요!")
        }

        else  { console.log(file_ref.current.files)
        const uploaded_file = await uploadBytes(ref(storage,`images/${file_ref.current.files[0].name}`),
        file_ref.current.files[0]
        )
        console.log(uploaded_file)
        //Ref를 가지고온것은 중요, 이 Ref로 다운로드 URL을 가지고올것

        const file_url = await getDownloadURL(uploaded_file.ref)
        console.log(file_url)
        file_link_ref.current = {url:file_url}
    
    
        const user_doc = await addDoc(collection(db, "image_url") , {
          image_url: file_link_ref.current?.url,
          text: text_ref.current.value
        })
        console.log(user_doc.id)}
       
      }
    return (
        <AddWrap>
            <h1>게시글 작성</h1>
            <div>
            이미지 : <input type="file" ref ={file_ref}/>
            </div><br/>

                <textarea 
                    ref={text_ref}
                    placeholder= "텍스트를 입력하세요."
                    style={{
                    width: "300px",
                    height: "200px"
                }}/>
                <button style={{
                    width: "150px",
                    height: "100px",
                    margin: "20px",
                }}
                onClick={uploadFB}>추가하기</button>

        </AddWrap>
    )
}

export default Add



const AddWrap = styled.div`
    width: 500px;
    height: 90vh;
    border: 1px solid black;
    margin: 20px auto;
    align-items: center;
    display: flex;
    flex-direction: column;
`