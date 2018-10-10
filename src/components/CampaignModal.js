import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import Platform from "./Platform";

const styles = {
    appBar: {
        position: 'relative',
        backgroundColor: 'black'
    },
    flex: {
        flex: 1,
    },
};

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class CampaignModal extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedCampaign: null
        }
    }

    state = {
        open: false
    };

    handleClickOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {
        const {classes} = this.props;
        let platformsToRender = [];
        let keys = Object.keys(this.props.campaign.platforms);
        for (let i = 0; i < keys.length; i++) {
            platformsToRender[i] = <Platform platform={this.props.campaign.platforms[keys[i]]} platformName={keys[i]}/>;
        }

        return (
            <div>
                <Button onClick={this.handleClickOpen}>Details</Button>
                <Dialog
                    fullScreen
                    open={this.state.open}
                    onClose={this.handleClose}
                    TransitionComponent={Transition}
                >
                    <AppBar className={classes.appBar}>
                        <Toolbar>
                            <Typography variant="h6" color="inherit" className={classes.flex}>
                                Details of {this.props.campaign.name}
                            </Typography>
                            <Button color="inherit" onClick={this.handleClose}>
                                close
                            </Button>
                        </Toolbar>
                    </AppBar>
                    {platformsToRender}
                </Dialog>
            </div>
        );
    }
}

CampaignModal.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(CampaignModal);