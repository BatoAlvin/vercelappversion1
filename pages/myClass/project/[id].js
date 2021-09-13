import Head from "next/head";
import styles from './../../../styles/myClass.module.css'
import AssignmentRoundedIcon from '@material-ui/icons/AssignmentRounded';
import {db} from '../../../firebase/firebase'
import { getDoc,doc} from "firebase/firestore";
import FlagIcon from '@material-ui/icons/Flag';



const Project = ({post}) => {
    return ( 
        <>
        <Head>
        <title>PROJECT</title>
      </Head>
        <div className={styles.myClassSection}>
        <div className={styles.myClassBorder}>
          
          <div className = {styles.projectSection}>
            <div className = {styles.projectHeader1}>
                <h3>CLASSWORK</h3>
            </div>
            <div className = {styles.projectHeader2}>
                <div className = {styles.projectHeaderSec1}>
                    <AssignmentRoundedIcon style = {{fill: 'white',fontSize: '5rem',border:'5px solid #096691',background:'#096691',borderRadius: '50%'}}/>
                    <div>
                        <h4 style = {{color: '#096691',fontWeight: '900'}}>{post.title}</h4>
                        <p style = {{color:'#808080',fontWeight: '700'}}>{post.facilitator}</p>
                        <p style = {{color:'black',fontWeight: 'bold'}}>{post.points} Points</p>
                        <p>Due Date: {post.date} </p>
                    </div>
                </div>
                <div className = {styles.projectHeaderSec2}>
                <FlagIcon style={{fill:'#41AD48'}}/>
                    <h4>PLEASE ALWAYS FOLLOW THE STANDARD PRINCIPLES WHILE CARRYING OUT YOUR PROJECTS.</h4>
                </div>
            </div>
            <div className = {styles.Instructions}>
                <h3>INSTRUCTIONS</h3>
                <p>{post.question}</p>
                <p>{post.desc}</p>
               
            </div>
        </div>
          </div>
          </div>
         
        </>
        
        
     );
}


export const getServerSideProps = async (context)=>{
   
    const docRef = doc(db, "lms_projects", context.params.id);
    const docSnap = await getDoc(docRef);
 
    const post = await docSnap.data()
    console.log(post)
    return{
        props: {
           post
        }
    }
}


 
export default Project;