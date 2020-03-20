import React from 'react';
import classes from './GroupList.css'
import Group from './Group/Group';

const Groups = [
    {
        id: 1,
        name: 'Blake Group 1',
        time: '1:17 PM'
    },
    {
        id: 2,
        name: 'Random Group 2',
        time: '1:18 PM'
    },
    {
        id: 3,
        name: 'Poop Scoop 3',
        time: 'Yesterday'
    },
    {
        id: 4,
        name: 'Number 4',
        time: 'May 10th'
    }
]

const GroupList = () => (
    <ul className={classes.GroupList}>
    {Groups.map(group => (
        <Group key={group.id} name={group.name} time={group.time}/>
    ))}
    </ul>
)

export default GroupList;