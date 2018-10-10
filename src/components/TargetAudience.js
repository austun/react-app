import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

class TargetAudience extends React.Component {
    constructor(props) {
        super(props);
        this.itemParser = this.itemParser.bind(this);
    }

    itemParser(array, separator) {
        let result = '';
        if (array == null)
            return result;

        for (let i = 0; i < array.length; i++) {
            result += array[i];
            if (i + 1 !== array.length) {
                result += separator;
            }
        }
        return result;
    }

    render() {
        let languages = this.itemParser(this.props.targetAudience.languages, ' / ');
        let genders = this.itemParser(this.props.targetAudience.genders, ' / ');
        let ageRange = this.itemParser(this.props.targetAudience.age_range, ' - ');
        let locations = this.itemParser(this.props.targetAudience.locations, ' / ');
        let keywords = this.itemParser(this.props.targetAudience.keyWords, ' / ');
        return (
            <ListItem button>
                <ListItemText primary="Languages" secondary={languages}/>
                <ListItemText primary="Genders" secondary={genders}/>
                <ListItemText primary="Age range" secondary={ageRange}/>
                <ListItemText primary="Locations" secondary={locations}/>
                <ListItemText primary="KeyWords" secondary={keywords}/>
            </ListItem>
        )
    }
}

export default TargetAudience;