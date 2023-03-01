import NavBar from './components/NavBar/NavBar';
import './App.css';
import Experience from './components/Experience/Experience'
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';
import Workana from './images/workana.webp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Expertise from './components/Expertise/Expertise';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {

  const styleArrow = {
    position: "relative",
    width: "10vw",
    bottom: "-70vh"
  }

  return (
    <>
      <div className='App'>
        <NavBar />

        <Grid container spacing={0} className='name' justifyContent={'center'}>
          <Grid className='my_name_title'>
            <h1>DANIEL ALEJANDRO</h1>
          </Grid>

          <Grid className="brief_description">
            <h3>SOFTWARE ENGINEER, BACK END & FRONT END  DEVELOPER.</h3>
          </Grid>
        </Grid>

      </div>

      <Grid pt={6} className='my_expertise' id='my_expertise'>
        <h1>My Expertise</h1>
        <Expertise />
      </Grid>

      <div className='hello_word_dummpy' />

      <div className='my_expertise'>
        <h1>Professional Experience</h1>
        <Experience />
      </div>


      <footer id='contact'>
        <Grid container justifyContent="center">
          <Item>
            <h1 className='footer_title'>Let's start</h1>
          </Item>
        </Grid>

        <Grid container justifyContent="center" columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={4} sm={5} md={5} className='footer_row'>
            <h1 className='footer_text footer_text_contact'>dzambranocisneros@gmail.com</h1>
          </Grid>
          <Grid item xs={4} sm={5} md={5} className='footer_row'>
            <h1 className='footer_text footer_text_contact'>+52 (449) 524-73-95</h1>
          </Grid>
        </Grid>
  
        <Grid container justifyContent="center" className='footer_network_socials'>
          <Grid item xs={2}>
            <Item className='footer_text footer_network_social_icon'>
              <a className='footer_link' target='_blank' href='https://www.linkedin.com/in/daniel-alejandro-zambrano-cisneros-7bb31119a/'>
                <LinkedInIcon />
              </a>
            </Item>
          </Grid>
          <Grid item xs={2}>
            <Item className='footer_text footer_network_social_icon'>
              <a className='footer_link' target='_blank' href='/'>
                <GitHubIcon />
              </a>
            </Item>
          </Grid>
          <Grid item xs={2}>
            <Item className='footer_text footer_network_social_icon' padding>
              <img src='https://wkncdn.com/newx/assets/build/img/favicon.57f21bf36.png' height="25" />
            </Item>
          </Grid>
        </Grid>
      </footer>
    </>
  );
}

export default App;
