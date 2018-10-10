import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

class Insights extends React.Component {
    render() {
        return (
            <ListItem button>
                <ListItemText primary="Impressions" secondary={this.props.insights.impressions}/>
                <ListItemText primary="Clicks" secondary={this.props.insights.clicks}/>
                <ListItemText primary="Website visits" secondary={this.props.insights.website_visits}/>
                <ListItemText primary="Nanos score" secondary={this.props.insights.nanos_score}/>
                <ListItemText primary="Cost per click" secondary={this.props.insights.cost_per_click}/>
                <ListItemText primary="Click through rate" secondary={this.props.insights.click_through_rate}/>
                <ListItemText primary="Advanced KPI 1" secondary={this.props.insights.advanced_kpi_1}/>
                <ListItemText primary="Advanced KPI 2" secondary={this.props.insights.advanced_kpi_2}/>
            </ListItem>
        )
    }
}

export default Insights;