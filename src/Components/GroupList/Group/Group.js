import React from 'react';
import classes from './Group.css';

const Group = (props) => (
    <li className={classes.Group}>
    <div >
        <h4>{props.name}</h4>
        <p>{props.time}</p>
    </div>
</li>
);

export default Group;