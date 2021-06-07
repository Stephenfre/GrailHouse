import React from 'react';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom'

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import NavBar from '../Nav/NavBar'
import './DetailPage.css'

    function TabPanel(props) {
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
            <Box p={2}>
            <Typography>{children}</Typography>
            </Box>
        )}
        </div>
    );
    }

    TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
    };

    function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
    }

    const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    }));


function DetailPage(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    
    
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <div className='app'>
            <div className='container' style={{display:'flex', flexDirection: 'column', alignItems:'center'}}>
                <NavBar />
            <div className='shoe-details-content'>
                <div className='shoe-img'>
                    <img src={props.selectedShoe.thumbnail} alt='shoe pic' style={{border: '1px red solid'}}/>
                </div>
                <div className='shoe-details'>
                    <h2>{props.selectedShoe.shoeName}</h2>
                        <div className={classes.root}>
                            <AppBar position="static">
                                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                                <Tab label="Item One" {...a11yProps(0)} />
                                <Tab label="Item Two" {...a11yProps(1)} />
                                </Tabs>
                            </AppBar>
                            <TabPanel value={value} index={0}>
                                <p>{props.selectedShoe.description}</p>
                                <p>{props.selectedShoe.styleID}</p>
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                Prices
                            </TabPanel>
                        </div>
                    <div>
                </div>
                    <div className='add-btn'>
                        <Link>Add to closet</Link>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        selectedShoe: state.selectedShoe
    }
}

const mapDispatchToPros = {
}

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToPros
    )(DetailPage)
)