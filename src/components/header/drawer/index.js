import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import "./drawer.scss";
import ProfileMenu from "components/header/menu";

 const ProfileDrawer = ({open}) => (
        <Drawer open={open} containerClassName="profile_drawer_parent">
            <ProfileMenu></ProfileMenu>
        </Drawer>
);

export default ProfileDrawer;