import React, {useState} from 'react'
import styles from '../../styles/myClass.module.css';
import {db} from '../../firebase/firebase'
import { collection,  addDoc } from "firebase/firestore"; 

export default function addProject() {
    const [title,setTitle] = useState("");
    const [question,setQuestion] = useState("");
    const [desc,setDesc] = useState("");
    const [points,setPoints] = useState("");
    const [date,setDate] = useState("");
    const [status,setStatus] = useState("Assigned")

    const data = {
        title: title,
        question: question,
        desc: desc,
        points: points,
        date: date,
        status: status
    }

  
    const handleSubmit= async(e) =>{
        e.preventDefault();
        const docRef =  await addDoc(collection(db,"projects"),data)
        .then((docRef)=> {
                console.log("Project added",docRef.id)
            })
            .catch((error)=>{
                    console.error("Error occurred while adding project",error)
                })
    }

    const  changeState = () => {  
        setStatus({status: 'Submitted'}); 
       }; 
       
    const changeTitle = (e)=>{
        setTitle(e.target.value);
    }
    const changeQn = (e)=>{
        setQuestion(e.target.value);
    }
    const changeDesc = (e)=>{
        setDesc(e.target.value);
    }
    const changePoints = (e) => {
        setPoints(e.target.value);
    }
    const changeDate = (e) => {
        setDate(e.target.value);
    }

    return (
        <div className={styles.myClassSection}>
        <div className={styles.myClassBorder}>
        <form className = {styles.addProjectForm} onSubmit = {handleSubmit}>
                <label>
                Title
                <textarea type = "text" name = "title" value = {title} onChange = {changeTitle} warp = "soft"></textarea>
                </label>
                <label>
                Question
                <textarea type = "text" name = "question" value = {question} onChange = {changeQn}></textarea>
                </label>
                <label>
                Description
                <textarea type = "text" name = "desc" value = {desc} onChange = {changeDesc}></textarea>
                </label>
                <label>
                    Points
                <textarea type = "text" name = "points" value = {points} onChange = {changePoints}></textarea>
                </label>
                <label>
                    Status 
                    <input type = "text" name = "status" value = {status} onChange = {changeState}></input>
                </label>
                <div  className = {styles.DateInput}>
                <label>
                    Due Date
                <input type = "date" name = "date" value = {date} onChange = {changeDate} ></input>
                </label>
                <button type = "submit">ADD PROJECT</button>
                </div>
                
            </form>
            </div>
            
        </div>
    )
}
