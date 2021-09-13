import styles from "../../styles/myClass.module.css";
import Head from "next/head";
import Image from 'next/image'
import Link from 'next/link'
import { Container, Grid, Paper, Box, Typography } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Avatar from "@material-ui/core/Avatar";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
//import styles from '../styles/messages.module.css';
// import '../../components/myClass/peopleFacilitators'

const People = () => {
    return ( 
        <>
        <Grid container spacing={3}>
        <Grid item md="6" xs="6" sm='6'>
          <Box p={{ md: 9, xs: 7, sm: 3 }}>
            <Box pt={5}>Classwork</Box>
          </Box>
        </Grid>

        <Grid item md="6" xs="6" sm='6'>
          <Box p={{ md: 9, xs: 7, sm: 3 }}>
            <Box pt={5} pl={5} textAlign="center">
              People
            </Box>
          </Box>
        </Grid>

        <Grid item md="12" xs="12">
          <Box p={{ md: 5, xs: 7, sm: 3 }}>
            <Box pt={1} textAlign="left" fontWeight="bold">
              Facilitors
            </Box>
          </Box>
        </Grid>

        <Grid item md="12" xs="12">
          <Box p={{ md: 5, xs: 7, sm: 3 }}>
            <Divider variant="middle" />
          </Box>
        </Grid>

        <Grid item md="4" xs="4">
          <Box p={{ md: 5, xs: 7, sm: 3 }}>
            <Box>
              <Avatar src="/Bleach.jpg" />
            </Box>
          </Box>
        </Grid>

        <Grid item md="4" xs="4">
          <Box p={{ md: 5, xs: 7, sm: 3 }}>
            <Box textAlign="center">Andrew</Box>
          </Box>
        </Grid>

        <Grid item md="4" xs="4">
          <Box p={{ md: 5, xs: 7, sm: 3 }}>
            <Box textAlign="center">
              <Link
                href="https://oul-edu-learning.slack.com/archives/D014RT3HHLY"
                passHref={true}
                p={{ md: 5, xs: 7, sm: 3 }}
              >
                <ChatBubbleOutlineIcon
                  target="_blank"
                  style={{ fill: "#10BC65" }}
                ></ChatBubbleOutlineIcon>
              </Link>
            </Box>
          </Box>
        </Grid>

        <Grid item md="4" xs="4">
          <Box p={{ md: 5, xs: 7, sm: 3 }}>
            <Box>
              <Avatar src="/mk.jpg" />
            </Box>
          </Box>
        </Grid>

        <Grid item md="4" xs="4">
          <Box p={{ md: 5, xs: 7, sm: 3 }}>
            <Box textAlign="center">Edna</Box>
          </Box>
        </Grid>

        <Grid item md="4" xs="4">
          <Box p={{ md: 5, xs: 7, sm: 3 }}>
            <Box textAlign="center">
              <Link
                href="https://oul-edu-learning.slack.com/archives/D02D5816EJ1"
                p={{ md: 5, xs: 7, sm: 3 }}
                passHref={true}
              >
                <ChatBubbleOutlineIcon
                  style={{ fill: "#10BC65" }}
                  target="_blank"
                />
              </Link>
            </Box>
          </Box>
        </Grid>

        <Grid item md="12" xs="12">
          <Box p={{ md: 5, xs: 7, sm: 3 }}>
            <Box pt={1} textAlign="left" fontWeight="bold">
              Classmates
            </Box>
          </Box>
        </Grid>

        <Grid item md="4" xs="4">
          <Box p={{ md: 5, xs: 7, sm: 3 }}>
            <Box>
              <Avatar src="/mk.jpg" />
            </Box>
          </Box>
        </Grid>

        <Grid item md="4" xs="4">
          <Box p={{ md: 5, xs: 7, sm: 3 }}>
            <Box textAlign="center">John</Box>
          </Box>
        </Grid>

        <Grid item md="4" xs="4">
          <Box p={{ md: 5, xs: 7, sm: 3 }}>
            <Box textAlign="center">
            <Link href='' passHref={true}>
              <ChatBubbleOutlineIcon style={{ fill: "#10BC65" }} 
                    target="_blank"
              />
              </Link>
            </Box>
          </Box>
        </Grid>
      </Grid>
        </> 
        
    );
}

export default People;