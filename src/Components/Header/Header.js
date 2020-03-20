import React from 'react';
import classes from './Header.css'

const Header = (props) => (
    <h1 className={classes.Header}>{props.children}</h1>
)

export default Header