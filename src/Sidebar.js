import React from "react";
import "./Sidebar.css";
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import SportsHandballIcon from '@material-ui/icons/SportsHandball';
import StyleIcon from '@material-ui/icons/Style';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import ComputerIcon from '@material-ui/icons/Computer';
import SettingsIcon from '@material-ui/icons/Settings';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';


function Sidebar() {

    return(
        <div className="sidebar">
            <div>
            <button><h1>ALL</h1></button>
            </div>
            <hr />

            <h1><SportsHandballIcon />Sports</h1>
            <p><DirectionsBikeIcon />Mountain Biking</p>
            <p><StyleIcon />Sports Gear</p>
            <hr />

            <h1><ImportantDevicesIcon />Technology</h1>
            <p><CameraAltIcon />Camera Gear</p>
            <p><ComputerIcon />Computer Gear</p>
            <p><SettingsIcon />Tech Gear</p>
            <hr />

            <h1><StyleIcon />Fashion</h1>
            <p><StyleIcon />Accesories</p>
            <hr />

            <h1><AllInclusiveIcon />Lessons</h1>
        </div>
    )
};

export default Sidebar;