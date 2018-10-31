import React from 'react';
import Table from '@material-ui/core/Table';
import CampaignModal from "./CampaignModal";
import {withStyles} from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as campaignActions from '../actions/Actions';

class Campaigns extends React.Component {

    componentWillMount() {
        this.props.actions.loadCampaigns();
    }

    render() {
        if(this.props.campaigns)
            return this.customizedTable();

        return (
            <h1>Loading...</h1>
        );
    }

    customizedTable() {

        const CustomTableCell = withStyles(theme => ({
            head: {
                backgroundColor: theme.palette.common.black,
                color: theme.palette.common.white,
            },
            body: {
                fontSize: 14,
            },
        }))(TableCell);

        return (
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <CustomTableCell>ID</CustomTableCell>
                            <CustomTableCell numeric>Name</CustomTableCell>
                            <CustomTableCell numeric>Goal</CustomTableCell>
                            <CustomTableCell numeric>Total Budget</CustomTableCell>
                            <CustomTableCell numeric>Status</CustomTableCell>
                            <CustomTableCell numeric>Details</CustomTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.campaigns.map(row => {
                            return (
                                <TableRow key={row.id}>
                                    <CustomTableCell component="th" scope="row">{row.id}</CustomTableCell>
                                    <CustomTableCell numeric>{row.name}</CustomTableCell>
                                    <CustomTableCell numeric>{row.goal}</CustomTableCell>
                                    <CustomTableCell numeric>{row.total_budget}</CustomTableCell>
                                    <CustomTableCell numeric>{row.status}</CustomTableCell>
                                    <CustomTableCell numeric><CampaignModal id={row.id}/></CustomTableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

const mapStateToProps = state =>({
    isFetching: state.isFetching,
    campaigns: state.campaigns,
    error: state.error
});

const mapDispatchToProps = dispatch => ({
        actions: bindActionCreators(campaignActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Campaigns);