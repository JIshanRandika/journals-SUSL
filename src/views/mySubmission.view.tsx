import React from 'react';
import logo from './logo.svg';
import '../App.css';
import Nav from '../components/nav.component';
import Footer from '../components/footer.component'
import {Row,Col,Container} from 'reactstrap';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {Button} from "react-bootstrap";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function MySubmission() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <div className="MySubmission">
            <Nav/>
            <div style={{position:'relative',background:'#520103'}} >
                <Row>
                    <Container style={{paddingLeft: '10%', paddingRight: '10%',marginTop:80, marginBottom:25}}>
                        <div style={{
                            fontSize: 60,
                            fontWeight: 'bold',
                            color: 'white',
                            textAlign:'left'
                            // fontFamily:'Itim',
                        }}>
                            Submissions
                        </div>
                    </Container>
                </Row>
            </div>
            <Row>
                <Container style={{paddingLeft: '10%', paddingRight: '10%',marginTop:40}}>
                    <div style={{marginBottom:10}}>
                        <Button href='/newSubmission' style={{background:"#520103", border:"none"}} type="submit">
                            New Submission
                        </Button>
                    </div>
                    <div style={{position:'relative',background:'#f1f1f1', height:400, marginBottom:100}} >
                        <Box sx={{ width: '100%' }}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                    <Tab label="Submitted" {...a11yProps(0)} />
                                    <Tab label="Pending" {...a11yProps(1)} />
                                    <Tab label="Draft" {...a11yProps(2)} />
                                </Tabs>
                            </Box>
                            <TabPanel value={value} index={0}>
                                Submitted
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                Pending
                            </TabPanel>
                            <TabPanel value={value} index={2}>
                                Draft
                            </TabPanel>

                        </Box>
                    </div>

                </Container>
            </Row>
            <div>

            </div>

            <Footer/>

        </div>
    );
}

export default MySubmission;
