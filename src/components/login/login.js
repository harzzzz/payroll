import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Redirect } from "react-router-dom";
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyDLHk7kAmlZMNDaHmIA7ahz6ifofAS8LnE';

YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
	console.log(data);
});

const styles = theme => ({
	button: {
		margin: theme.spacing.unit,
		backgroundColor: '#a73436',
		marginLeft: '40%',
		color: '#282c34',
	},
  card: {
		maxWidth: 400,
		minWidth: 200,
		width: 'auto',
    margin: 0,
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)' 
  },
  actions: {
    display: 'flex',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
});

class Login extends React.Component {
  state = { loggedIn: false };
	
	handleClick = event => {
		this.setState({
			loggedIn: true
		});
	}

  render() {
		const { classes } = this.props;
		
		if (this.state.loggedIn) {
			return <Redirect to="/home" />
		}

    return (
      <Card className={classes.card}>
        <CardHeader title="Login" />
        <CardContent>
          <Typography component="div">
            <form noValidate autoComplete="off">
							<TextField
								id="outlined-email-input"
								label="Email"
								className={classes.textField}
								type="email"
								name="email"
								autoComplete="email"
								margin="normal"
								variant="outlined"
							/>
							<TextField
								id="outlined-password-input"
								label="Password"
								className={classes.textField}
								type="password"
								autoComplete="current-password"
								margin="normal"
								variant="outlined"
							/>
            </form>
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
					<Button variant="contained" className={classes.button} onClick={this.handleClick}>
						Login
					</Button>
        </CardActions>
      </Card>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
