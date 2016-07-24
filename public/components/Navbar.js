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
injectTapEventPlugin();



class Nav extends React.Component {
  render(){
    return (
  <AppBar
    title="Cheese"
    className="navBar"
    style={{position: 'fixed'}}
    iconElementRight={<Avatar src="https://pixabay.com/static/uploads/photo/2016/03/31/19/57/avatar-1295406_960_720.png"/>}
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