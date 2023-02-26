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
    height: "100px",
    bottom: "-40vh"
  }

  return (
    <>
      <div className='App'>
        <NavBar />

        <div className='name'>
          <div>
            <h1>DANIEL ALEJANDRO</h1>
          </div>

          <div className="brief_description">
            <span>SOFTWARE ENGINEER, BACK END & FRONT END  DEVELOPER.</span>
          </div>

          <div>
            <a href='#my_expertise'>
              <lottie-player src="https://assets6.lottiefiles.com/packages/lf20_4nclagit.json" className="show_more" speed="1" style={styleArrow} loop autoplay></lottie-player>
            </a>
          </div>

        </div>

      </div>

      <div className='my_expertise' id='my_expertise'>
        <h1>My Expertise</h1>
        <Expertise />
      </div>

      <div className='hello_word_dummpy' />

      <div className='my_expertise'>
        <h1>Professional Experience</h1>
        <Experience />
      </div>


      <footer id='contact'>
        <Grid container spacing={2} justifyContent="center">
          <Item>
            <h1 className='footer_title'>Let's start</h1>
          </Item>
        </Grid>

        <Grid container spacing={{ xs: 2, md: 3 }} justifyContent="center" columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={4} sm={5} md={5} className='footer_row'>
            <h1 className='footer_text footer_text_contact'>dzambranocisneros@gmail.com</h1>
          </Grid>
          <Grid item xs={4} sm={2} md={2} className='footer_row'>
            <h1 className='footer_text footer_text_get_quote'>GET A QUOTE</h1>
          </Grid>
          <Grid item xs={4} sm={5} md={5} className='footer_row'>
            <h1 className='footer_text footer_text_contact'>+52 (449) 524-73-95</h1>
          </Grid>
        </Grid>

        <Grid container justifyContent="center" className='footer_network_socials'>
          <Grid item xs={2}>
            <Item className='footer_text footer_network_social_icon'>
              <LinkedInIcon />
            </Item>
          </Grid>
          <Grid item xs={2}>
            <Item className='footer_text footer_network_social_icon'>
              <GitHubIcon />
            </Item>
          </Grid>
          <Grid item xs={2}>
            <Item className='footer_text footer_network_social_icon' padding>
              <img src={Workana} height="25" />
            </Item>
          </Grid>
        </Grid>
      </footer>
    </>
  );
}

export default App;
