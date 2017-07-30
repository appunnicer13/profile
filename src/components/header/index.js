import React , { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import ProfileMenu from './menu';


/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
class Header extends Component{

    render(){
        return(
            <div>
                <AppBar
                    title="Title"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonTouchTap={this.handleToggle}
                    showMenuIconButton={false}
                >
                    <ProfileMenu></ProfileMenu>

                </AppBar>

            </div>
        );
    }
}


export default Header;