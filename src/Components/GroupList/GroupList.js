import React from "react";
import classes from "./GroupList.css";
import Group from "./Group/Group";

const Groups = [
  {
    id: 1,
    name: "Blake Group 1",
    time: "1:17 PM",
    members: ["John", "Blake", "Ryan", "Matt"]
  },
  {
    id: 2,
    name: "Random Group 2",
    time: "1:18 PM",
    members: ["Tim", "Tom", "Tyler", "Travis", "Todd"]
  },
  {
    id: 3,
    name: "Poop Scoop 3",
    time: "Yesterday",
    members: ["Sam", "Spencer"]
  },
  {
    id: 4,
    name: "Number 4",
    time: "May 10th",
    members: ["David", "Dale", "Drake", "Devon"]
  }
];

const GroupList = () => {
  return (
    <div className={classes.GroupList}>
      <h3>My Groups</h3>
      <ul className={classes.List}>
        {Groups.map(group => (
          <Group key={group.id} data={group} />
        ))}
      </ul>
    </div>
  );
};

export default GroupList;
