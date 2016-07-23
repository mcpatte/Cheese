import React from 'react'
import {AppBar, Tabs, Tab} from 'material-ui'

class Nav extends React.Component {
  render() {
      var myTabs = (
          <Tabs>
              <Tab label="item 1" />
              <Tab label="item 2" />
          </Tabs>
      );
      return <AppBar title="My App" iconElementRight={myTabs} />
  }
}

export default Nav