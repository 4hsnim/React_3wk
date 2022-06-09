import {db} from "../../firebase"
import { collection, doc, getDoc, getDocs, addDoc,updateDoc,deleteDoc } from "firebase/firestore";


// Actions
const LOAD = 'magazine/LOAD'
const CREATE = 'magazine/CREATE'

const initialState = {
    list:[],
}

// Action Creators
export const LoadMagazine = (magazine_list) => {
    return {type: LOAD, magazine_list}
}


// middlewares
export const LoadMagazineFB= () => {
    return async (dispatch) => {
        const magazine_data = await getDocs(collection(db,"image_url"))
        console.log(magazine_data)

        let magazine_list =[]
        magazine_data.forEach((b)=> {
            magazine_list.push({...b.data()})
        })
        dispatch(LoadMagazine(magazine_list))
    }
}


// Reducer

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case LOAD:{
            return {list:action.magazine_list}
        }
        case CREATE : {
            const new_dictionary_list =
                 [...state.list, 
                {Word:action.word, 
                Explanation:action.explanation,
                Example:action.example}]
            console.log(new_dictionary_list)
            return {list:new_dictionary_list}
        }
    default: return state;
    }
    }