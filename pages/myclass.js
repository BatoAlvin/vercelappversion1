import { Container, Grid, Paper, Typography,TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';


const Messages = () => {
    return ( 
        <>

<Container>
           <Grid container spacing={0} style={{marginTop: 10}} className='info'>

<Grid item xs='2'>
<Paper style={{height:'130px', backgroundColor: '#10bc65', textAlign: 'center', verticalAlign: 'middle',boxShadow: 'none', marginTop: '5px'}}>


    </Paper>   
</Grid>

<Grid item xs='5'>
<Paper style={{height:'130px', backgroundColor: '#10bc65', textAlign: 'center', verticalAlign: 'middle',boxShadow: 'none', marginTop: '5px'}}>
<Typography paragraph>
    Hello 
</Typography>

    
    </Paper>   
</Grid>

<Grid item xs='5'>
<Paper style={{height:'130px', backgroundColor: '#10bc65', textAlign: 'center', verticalAlign: 'middle',boxShadow: 'none', marginTop: '5px'}}>

<Button
        variant="contained"
        color="primary"
      >
        Connect to slack
      </Button>
    
    </Paper>   
</Grid>



</Grid>
           </Container> 
            
        </>
     );
}
 
export default Messages;