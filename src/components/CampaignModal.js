import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import Platform from "./Platform";
import * as actions from '../actions/Actions';
import {bindActionCreators} from "redux";
import {connect} from 'react-redux';

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

    handleClickOpen = () => {
        this.props.actions.loadCampaignById(this.props.id);
    };

    handleClose = () => {
        this.props.actions.initStates();
    };

    render() {
        const {classes} = this.props;
        let platformsToRender = [];
        let title;

        if (this.props.campaign) {
            title = this.props.campaign.name;
            let keys = Object.keys(this.props.campaign.platforms);
            for (let i = 0; i < keys.length; i++) {
                platformsToRender[i] =
                    <Platform platform={this.props.campaign.platforms[keys[i]]} platformName={keys[i]}/>;
            }
        }

        return (
            <div>
                <Button onClick={this.handleClickOpen}>Details</Button>
                <Dialog
                    fullScreen
                    open={this.props.open}
                    onClose={this.handleClose}
                    TransitionComponent={Transition}
                >
                    <AppBar className={classes.appBar}>
                        <Toolbar>
                            <Typography variant="h6" color="inherit" className={classes.flex}>
                                Details of {title}
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

const mapStateToProps = state => ({
    isFetching: state.isFetching,
    campaign: state.campaign,
    error: state.error,
    open: state.open
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CampaignModal));
