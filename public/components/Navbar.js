import React from 'react'
import {AppBar, Tabs, Tab} from 'material-ui'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Avatar from 'material-ui/Avatar'
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import { Field, reduxForm } from 'redux-form';
import {TextField} from 'redux-form-material-ui';
import DatePicker from 'material-ui/DatePicker';
import DropDownMenu from 'material-ui/DropDownMenu';


injectTapEventPlugin();
//TODO: Split all of this up!

const styles = {
  width: '40%',
  maxWidth: 'none',
};



class Nav extends React.Component {

  constructor(props) {
    super(props);
    this.state = {open: false, value: 1};
  };

  render(){

    const handleChange = (event, index, value) => this.setState({value});
    //TODO: pass from data
    const handleSubmit = () => {
      console.log("Hey you submitted the form!");
      this.setState({open: false})
      };

    const handleOpen = () => {
      console.log("open")
      this.setState({open: true});
    };

    const handleClose = () => {
      console.log("close")
      this.setState({open: false});
    };

    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onTouchTap={handleSubmit}
      />,
    ];


    return (
  <AppBar
    title="Cheese"
    className="navBar"
    style={{position: 'fixed'}}
    iconElementRight={
      <div>
      <RaisedButton label="Add new task" onTouchTap={handleOpen} />
      <Dialog
          title="Add new task!"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={handleClose}
          contentStyle={styles}
        >
          <form id="myForm" className='form' onSubmit={handleSubmit}>
            Task Name:<br/>
            <TextField hintText="Task name"/><br />
            Due date:<br/>
            <DatePicker  hintText="Due date" mode="landscape" />
            Category:<br/>
            <TextField hintText="Category"/><br />
            Status:<br/>
              <div>
                <DropDownMenu
                    value={this.state.value}
                    onChange={handleChange}
                    style={styles.customWidth}
                    autoWidth={false}
                    >
                  <MenuItem value={1} primaryText="To-Do" />
                  <MenuItem value={2} primaryText="In progress" />
                  <MenuItem value={3} primaryText="Done" />
                </DropDownMenu>
            </div>
          </form>
        </Dialog>
      </div>
    }
    iconElementLeft={
      <IconMenu
        iconButtonElement={
          <IconButton><MoreVertIcon /></IconButton>
        }
        targetOrigin={{horizontal: 'left', vertical: 'top'}}
        anchorOrigin={{horizontal: 'left', vertical: 'top'}}
      >
        <MenuItem primaryText="Filter tasks by due date" />
        <MenuItem primaryText="Filter tasks by user" />
        <MenuItem primaryText="Sign out" />
      </IconMenu>
    }
  />
  )}
}





export default Nav