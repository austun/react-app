import React from "react";
import List from "@material-ui/core/List";
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Creatives from './Creatives';
import TargetAudience from './TargetAudience';
import Insights from "./Insights";

class Platform extends React.Component {
    render() {
        if (this.props.platform == null)
            return(null);
        let start_date = new Date(this.props.platform.start_date);
        let end_date = new Date(this.props.platform.start_date);
        let platformName = this.props.platformName.charAt(0).toUpperCase() + this.props.platformName.slice(1);
        return (
            <List>
                <Divider/>
                <Typography variant="h6" color="inherit">
                    {platformName} Campaign Details
                </Typography>
                <Divider/>
                <ListItem button>
                    <ListItemText primary="Status" secondary={this.props.platform.status}/>
                    <ListItemText primary="Total budget" secondary={this.props.platform.total_budget}/>
                    <ListItemText primary="Remaining budget" secondary={this.props.platform.remaining_budget}/>
                    <ListItemText primary="Start date" secondary={start_date.toDateString()}/>
                    <ListItemText primary="End date" secondary={end_date.toDateString()}/>
                </ListItem>
                <Divider/>
                <Typography variant="h5" color="inherit">
                    {platformName} Creatives
                </Typography>
                <Divider/>
                <Creatives creatives={this.props.platform.creatives}/>
                <Divider/>
                <Typography variant="h5" color="inherit">
                    {platformName} Target Audiences
                </Typography>
                <Divider/>
                <TargetAudience targetAudience={this.props.platform.target_audiance}/>
                <Divider/>
                <Typography variant="h5" color="inherit">
                    {platformName} Insights
                </Typography>
                <Divider/>
                <Insights insights={this.props.platform.insights}/>
            </List>
        );
    }
}

export default Platform;