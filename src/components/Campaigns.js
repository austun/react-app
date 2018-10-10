import React from 'react';
import Table from '@material-ui/core/Table';
import CampaignModal from "./CampaignModal";
import { withStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class Campaigns extends React.Component {
    constructor(props) {
        super(props);

        this.selectCampaign = this.selectCampaign.bind(this);

        this.state = {
            selectedCampaign: null
        }

    }

    selectCampaign(campaignId) {
        const filteredCampaigns = this.props.data.filter(campaign => campaign.id === campaignId);
        return filteredCampaigns[0];
    }

    render() {
        return this.customizedTable();
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
                        {this.props.data.map(row => {
                            return (
                                <TableRow key={row.id}>
                                    <CustomTableCell component="th" scope="row">{row.id}</CustomTableCell>
                                    <CustomTableCell numeric>{row.name}</CustomTableCell>
                                    <CustomTableCell numeric>{row.goal}</CustomTableCell>
                                    <CustomTableCell numeric>{row.total_budget}</CustomTableCell>
                                    <CustomTableCell numeric>{row.status}</CustomTableCell>
                                    <CustomTableCell numeric><CampaignModal campaign={this.selectCampaign(row.id)}/></CustomTableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

export default Campaigns;