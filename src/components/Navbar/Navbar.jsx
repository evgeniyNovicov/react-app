import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

// let classes = {
//     'nav' : 'Navbar_nav__qWosE',
//     'item' : 'Navbar_item__92Uha'
// }

//  let c1 = 'item';
//  let c2 = 'active';
//let classes = c1 + '' + c2; 1 выриант, 2 ниже
//  let classesNEw = `${classes.item} ${classes.active}`;


const Navbar = (props) => {
    return <nav className={classes.nav}>
        <div className={`${classes.item} ${classes.active}`}>
            <NavLink to='/profile' className = {navData => navData.isActive? classes.active: classes.item}>Profile</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/dialogs' className = {navData => navData.isActive? classes.active: classes.item}>Messages</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/feed' className = {navData => navData.isActive? classes.active: classes.item}>News</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/music' className = {navData => navData.isActive? classes.active: classes.item}>Music</NavLink>
        </div>
        <div className={classes.item}>
            <NavLink to='/settings' className = {navData => navData.isActive? classes.active: classes.item}>Settings</NavLink>
        </div>
    </nav>
}

export default Navbar; 