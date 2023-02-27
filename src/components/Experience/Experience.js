import * as React from 'react';
import { Accordion, AccordionSummary, Grid, AccordionDetails, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { faLocation, faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './style.css'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Experience = [
    {
        title: "Software Engineer @ Globant",
        time: "2021 - now",
        location: "México DF",
        page_location: "https://www.globant.com/",
        page: "Globant.com",
        description: "Developing back-end solutions for companies like WarnerMedia Discovery to create/improve projects using the best practices with Amazon Web Services (AWS).",
        tools: ["NodeJs", "Python", "AWS SDK", "AWS SAM", "AWS Console",  "Jenkins", "Terreform", "Sonarqube", "GitLab & GitHub", "ReactJs & Redux", "CSS", "HTML5", "Tox", "MongoDB", "Docker"]
    },
    {
        title: "Full Stack Developer @ IT Seekers",
        time: "2021",
        location: "México, Aguascalientes",
        page_location: "https://www.it-seekers.com/",
        page: "It-Seekers.com",
        description: "Developed the UI and UX eco-system for a internal platform using modular component structures with JS, CSS, Express on Node.",
        tools: ["NodeJs", "AWS", "GitHub", "ReactJs & Redux", "React Native", "MongoDB"]
    },
    {
        title: "Web Developer @ QMC",
        time: "2019 - 2021",
        location: "México, Aguascalientes",
        page_location: "https://www.qmcmex.com/",
        page: "QMC.com",
        description: "Developed the UI and UX eco-system for a internal platform using modular component structures with JS, CSS, Express on Node.",
        tools: ["NodeJs", "AWS", "GitHub", "ReactJs & Redux", "React Native", "MongoDB"]
    },
    {
        title: "Softaware Developer @ Freelance",
        time: "2019 - now",
        location: "México, Aguascalientes",
        page_location: "https://www.dazambrano.link/#my_expertise",
        page: "dazambrano.link",
        description: "Developed the UI and UX eco-system for a internal platform using modular component structures with JS, CSS, Express on Node.",
        tools: ["NodeJs", "AWS", "GitHub", "ReactJs & Redux", "React Native", "MongoDB"]
    }
]

export default function ExperienceCollapse() {
    return (
        <div className='experience_container'>
            {
                Experience.map(({ title, time, location, page_location, page, description, tools }) => {
                    return <Accordion className='accordion' expanded>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            className='my_experience'
                        >
                            <Item className='title_job'>
                                {title}
                            </Item>
                            <Item className='job_time'>
                                {time}
                            </Item>
                        </AccordionSummary>
                        <AccordionDetails className='box_description'>
                            <Typography className='box_experience' textAlign="left" color="white">

                                <span>
                                    <FontAwesomeIcon icon={faLocation} color="#b7f" /> {location} &nbsp;
                                </span>

                                <span>
                                    <FontAwesomeIcon icon={faLink} color="#b7f" />
                                    <a target='_black' className='page_location' href={page_location}>{page}</a>
                                </span>

                                <br /> <br />
                                {description}
                                <br /> <br />

                                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                    {
                                        tools.map((name_tool) => {
                                            return <Grid item>
                                                <Item className='tools_used'>{name_tool}</Item>
                                            </Grid>
                                        })
                                    }
                                </Grid>

                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                })
            }
        </div>
    );
}