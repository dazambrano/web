import { faTag, faDesktop, faServer, faDiagramNext } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import "./style.css";

const Item = styled(Paper)(() => ({
    textAlign: 'center',
    alignContent: 'center',
    background: 'transparent',
    color: 'white'
}));

const EXPERTISE = [
    {
        id: 1,
        icon: faDesktop,
        role_span: "Software",
        role_h5: "Development",
        description: "Experienced in both functional and OOP such as Python, JavaScript and TypeScript."
    },
    {
        id: 2,
        icon: faDiagramNext,
        role_span: "Cloud",
        role_h5: "Development",
        description: "Experienced in Amazon Web Services (AWS), Jenkins, Terreform and other Frameworks."
    },
    {
        id: 3,
        icon: faServer,
        role_span: "Backend",
        role_h5: "Development",
        description: "Passionate about Backend. Experience in NodeJs, Flesk, ExpressJs, NestJs Frameworks."
    },
    {
        id: 4,
        icon: faTag,
        role_span: "Frontend",
        role_h5: "Development",
        description: "Passionate about UI/UX. Experience in HTML, CSS, JS, React and NextJS frameworks."
    }
]

export default function Expertise() {
    return (
        <Box pt={6}>
            <Grid justifyContent={'center'} container columns={{ xs: 3, sm: 8, md: 12 }}>
                {EXPERTISE.map((element) => (
                    <Grid item xs={2} sm={4} md={4} key={element.id}>
                        <Item className='my_expertise_skill_description'>
                            <Grid className='skill_title_description'>
                                <Grid className='skill_title_description_icon'>
                                    <FontAwesomeIcon icon={element.icon} />
                                </Grid>
                                <Grid className="skill_title_description_title">
                                    <h2>
                                        <span>{element.role_span}</span>
                                        {element.role_h5}
                                    </h2>
                                </Grid>
                            </Grid>
                            <Grid className='skill_description'>
                                {element.description}
                            </Grid>
                        </Item>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}