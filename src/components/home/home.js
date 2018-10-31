import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';

const actionsStyles = theme => ({
    root: {
      flexShrink: 0,
      color: theme.palette.text.secondary,
      marginLeft: theme.spacing.unit * 2.5,
    },
});

class TablePaginationActions extends React.Component {
    handleFirstPageButtonClick = event => {
      this.props.onChangePage(event, 0);
    };
  
    handleBackButtonClick = event => {
      this.props.onChangePage(event, this.props.page - 1);
    };
  
    handleNextButtonClick = event => {
      this.props.onChangePage(event, this.props.page + 1);
    };
  
    handleLastPageButtonClick = event => {
      this.props.onChangePage(
        event,
        Math.max(0, Math.ceil(this.props.count / this.props.rowsPerPage) - 1),
      );
    };
  
    render() {
      const { classes, count, page, rowsPerPage, theme } = this.props;
  
      return (
        <div className={classes.root}>
          <IconButton
            onClick={this.handleFirstPageButtonClick}
            disabled={page === 0}
            aria-label="First Page"
          >
            {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
          </IconButton>
          <IconButton
            onClick={this.handleBackButtonClick}
            disabled={page === 0}
            aria-label="Previous Page"
          >
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
          </IconButton>
          <IconButton
            onClick={this.handleNextButtonClick}
            disabled={page >= Math.ceil(count / rowsPerPage) - 1}
            aria-label="Next Page"
          >
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </IconButton>
          <IconButton
            onClick={this.handleLastPageButtonClick}
            disabled={page >= Math.ceil(count / rowsPerPage) - 1}
            aria-label="Last Page"
          >
            {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
          </IconButton>
        </div>
      );
    }
  }
  
TablePaginationActions.propTypes = {
    classes: PropTypes.object.isRequired,
    count: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
    theme: PropTypes.object.isRequired,
};
  
const TablePaginationActionsWrapped = withStyles(actionsStyles, { withTheme: true })(
    TablePaginationActions,
);

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const styles = theme => ({
    card: {
        height: 'auto',
        maxWidth: 1500,
        minWidth: 120,
        width: 1400,
        background: 'white',
        color: '#282c34',
        margin: 20,
        borderRadius: 2,
    },
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
    row: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
    button: {
		margin: theme.spacing.unit,
		backgroundColor: '#a73436',
		marginLeft: '40%',
		color: '#282c34',
	},
});

const rows = [
    createData(1334,'Harshavardhan P', '03/06/1992', 'S/W Engineer', 'RNS', 1400000, 200000, 4),
    createData(1335,'Harshavardhan P', '03/06/1992', 'S/W Engineer', 'RNS', 1400000, 200000, 4),
    createData(1336,'Harshavardhan P', '03/06/1992', 'S/W Engineer', 'RNS', 1400000, 200000, 4),
    createData(1337,'Harshavardhan P', '03/06/1992', 'S/W Engineer', 'RNS', 1400000, 200000, 4),
    createData(1338,'Harshavardhan P', '03/06/1992', 'S/W Engineer', 'RNS', 1400000, 200000, 4),
    createData(1339,'Harshavardhan P', '03/06/1992', 'S/W Engineer', 'RNS', 1400000, 200000, 4),
    createData(1330,'Harshavardhan P', '03/06/1992', 'S/W Engineer', 'RNS', 1400000, 200000, 4),
    createData(1331,'Harshavardhan P', '03/06/1992', 'S/W Engineer', 'RNS', 1400000, 200000, 4),
    createData(1332,'Harshavardhan P', '03/06/1992', 'S/W Engineer', 'RNS', 1400000, 200000, 4),
    createData(1333,'Harshavardhan P', '03/06/1992', 'S/W Engineer', 'RNS', 1400000, 200000, 4),
    createData(1314,'Harshavardhan P', '03/06/1992', 'S/W Engineer', 'RNS', 1400000, 200000, 4),
    createData(1324,'Harshavardhan P', '03/06/1992', 'S/W Engineer', 'RNS', 1400000, 200000, 4),
    createData(1234,'Harshavardhan P', '03/06/1992', 'S/W Engineer', 'RNS', 1400000, 200000, 4),
    createData(1344,'Harshavardhan P', '03/06/1992', 'S/W Engineer', 'RNS', 1400000, 200000, 4),
    createData(1354,'Harshavardhan P', '03/06/1992', 'S/W Engineer', 'RNS', 1400000, 200000, 4),
    createData(1364,'Harshavardhan P', '03/06/1992', 'S/W Engineer', 'RNS', 1400000, 200000, 4),
    createData(1374,'Harshavardhan P', '03/06/1992', 'S/W Engineer', 'RNS', 1400000, 200000, 4),
    createData(1384,'Harshavardhan P', '03/06/1992', 'S/W Engineer', 'RNS', 1400000, 200000, 4),
    createData(1394,'Harshavardhan P', '03/06/1992', 'S/W Engineer', 'RNS', 1400000, 200000, 4),
    createData(1304,'Harshavardhan P', '03/06/1992', 'S/W Engineer', 'RNS', 1400000, 200000, 4),
    createData(1134,'Harshavardhan P', '03/06/1992', 'S/W Engineer', 'RNS', 1400000, 200000, 4),
    createData(1234,'Harshavardhan P', '03/06/1992', 'S/W Engineer', 'RNS', 1400000, 200000, 4),
    createData(1034,'Harshavardhan P', '03/06/1992', 'S/W Engineer', 'RNS', 1400000, 200000, 4),
    createData(1434,'Harshavardhan P', '03/06/1992', 'S/W Engineer', 'RNS', 1400000, 200000, 4),
    createData(1534,'Harshavardhan P', '03/06/1992', 'S/W Engineer', 'RNS', 1400000, 200000, 4),
];

function createData(empId, name, doj, designation, proj, ctc, bonus, period) {
  return { empId, name, doj, designation, proj, ctc, bonus, period };
}

class Home extends Component {
    state = {
        page: 0,
        rowsPerPage: 10,
    };

    handleChangePage = (event, page) => {
        this.setState({ page });
    };
    
    handleChangeRowsPerPage = event => {
        this.setState({ rowsPerPage: event.target.value });
    };

  render() {
    const { classes } = this.props;

    return (
        <div className={classes.card}>
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <CustomTableCell numeric>Employee Id</CustomTableCell>
                            <CustomTableCell>Name</CustomTableCell>
                            <CustomTableCell>Date of joining</CustomTableCell>
                            <CustomTableCell>Designation</CustomTableCell>
                            <CustomTableCell>Project</CustomTableCell>
                            <CustomTableCell numeric>CTC</CustomTableCell>
                            <CustomTableCell numeric>Variable Pay/Bonus</CustomTableCell>
                            <CustomTableCell numeric>Variable Pay/Bonus Period</CustomTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.slice(this.state.page * this.state.rowsPerPage, this.state.page * this.state.rowsPerPage + this.state.rowsPerPage).map(row => {
                            return (
                            <TableRow className={classes.row} key={row.empId}>
                                <CustomTableCell>
                                    {row.empId}
                                </CustomTableCell>
                                <CustomTableCell>{row.name}</CustomTableCell>
                                <CustomTableCell>{row.doj}</CustomTableCell>
                                <CustomTableCell>{row.designation}</CustomTableCell>
                                <CustomTableCell>{row.proj}</CustomTableCell>
                                <CustomTableCell numeric>{row.ctc}</CustomTableCell>
                                <CustomTableCell numeric>{row.bonus}</CustomTableCell>
                                <CustomTableCell numeric>{row.period}</CustomTableCell>
                            </TableRow>
                            );
                        })}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                colSpan={3}
                                count={rows.length}
                                rowsPerPage={this.state.rowsPerPage}
                                page={this.state.page}
                                onChangePage={this.handleChangePage}
                                onChangeRowsPerPage={this.handleChangeRowsPerPage}
                                ActionsComponent={TablePaginationActionsWrapped}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </Paper>
            <Button variant="contained" className={classes.button}>
                Login
            </Button>
        </div>
    );
  }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(Home);
