import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import  Avatar from "@material-ui/core/Avatar";
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';

class Creatives extends React.Component {
    render() {
        let imageMap = new Map([["img1.jpg", img1], ["img2.jpg", img2], ["img3.jpg", img3], ["img4.jpg", img4]]);
        let image = imageMap.get(this.props.creatives.image);
        return (
            <ListItem button>
                <ListItemText primary="Header" secondary={this.props.creatives.header}/>
                <ListItemText primary="Header1" secondary={this.props.creatives.header_1}/>
                <ListItemText primary="Header2" secondary={this.props.creatives.header_2}/>
                <ListItemText primary="Description" secondary={this.props.creatives.description}/>
                <ListItemText primary="Url" secondary={this.props.creatives.url}/>
                <ListItemText primary="Image" secondary={<Avatar size="xlarge" src={image}/>} />
            </ListItem>

        )
    }
}

export default Creatives;