import React from 'react';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import {imageService} from '../service/ImageService';


class Creatives extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            image: null,
        };
    }

    componentDidMount() {
        imageService.fetchImage(this.props.creatives.image)
            .then(response => {
                    this.setState({
                        image: response
                    })
                }
            );
    }

    render() {
        return (
            <ListItem button>
                <ListItemText primary="Header" secondary={this.props.creatives.header}/>
                <ListItemText primary="Header1" secondary={this.props.creatives.header_1}/>
                <ListItemText primary="Header2" secondary={this.props.creatives.header_2}/>
                <ListItemText primary="Description" secondary={this.props.creatives.description}/>
                <ListItemText primary="Url" secondary={this.props.creatives.url}/>
                <ListItemText primary="Image"
                              secondary={<Avatar size="xlarge" src={"data:image/jpg;base64," + this.state.image}/>}/>
            </ListItem>

        )
    }
}

export default Creatives;