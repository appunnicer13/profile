import React , { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import ProfileMenu from './menu';
import './header.scss';


/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
const Header = ({title="Appunni M"}) => (
    <div>
        <AppBar
            title={title}
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            onLeftIconButtonTouchTap={this.handleToggle}
            showMenuIconButton={false}
            titleStyle={{textAlign:"left",fontSize:"2.4em"}}
        >
        </AppBar>

    </div>
);



export default Header;