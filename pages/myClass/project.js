import Head from "next/head";
import styles from '../../styles/myClass.module.css'
import AssignmentRoundedIcon from '@material-ui/icons/AssignmentRounded';

const Project = () => {
    return ( 
        <>
        <Head>
        <title>EDU MY CLASS | PROJECT</title>
        <meta name="description" content="Become a software developer" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap"
          rel="stylesheet"
        />
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
                        <h4 style = {{color: '#096691',fontWeight: '900'}}>PROJECT 2</h4>
                        <p style = {{color:'#808080',fontWeight: '700'}}>Edna Nakajugo</p>
                        <p style = {{color:'black',fontWeight: 'bold'}}>100 Points</p>
                        <p>Due Date: </p>
                    </div>
                </div>
                <div className = {styles.projectHeaderSec2}>
                    <h3>Your Work</h3>
                    <p style = {{color:'#41AD48',fontWeight: 'bold'}}>Status</p>
                    <div className = {styles.projectUpload}>
                    <button style = {{background: 'white',color: 'black'}}>Upload File</button>
                    </div>
                    <button style = {{borderStyle: 'none'}}>SUBMIT</button>
                </div>
            </div>
            <div className = {styles.Instructions}>
                <h3>INSTRUCTIONS</h3>
                <p>Non proident sunt dolor aliqua ex. Cupidatat aute laboris consectetur Lorem ut quis fugiat deserunt id. Aliqua sint laboris et commodo Lorem cillum. Ullamco aute tempor excepteur eu.</p>
                <p>Non proident sunt dolor aliqua ex. Cupidatat aute laboris consectetur Lorem ut quis fugiat deserunt id. Aliqua sint laboris et commodo Lorem cillum. Ullamco aute tempor excepteur eu.</p>
                <p>Non proident sunt dolor aliqua ex. Cupidatat aute laboris consectetur Lorem ut quis fugiat deserunt id. Aliqua sint laboris et commodo Lorem cillum. Ullamco aute tempor excepteur eu.</p>
            </div>
        </div>
          </div>
          </div>
         
        </>
        
        
     );
}
 
export default Project;