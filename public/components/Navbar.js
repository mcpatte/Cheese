import React from 'react'
import {AppBar, Tabs, Tab} from 'material-ui'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Nav extends React.Component {
  render() {
    return (
      <AppBar title="Cheese" className="navBar">
        <Tabs>
          <Tab label="Item 1" />
          <Tab label="Item 2" />
          <Tab label="Item 3" />
          <Tab label="Item 4" />
        </Tabs>
      </AppBar>
    )
  }
}

export default Nav