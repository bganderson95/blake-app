import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import classes from "./GroupList.css";
import Group from "./Group/Group";
import Spinner from "../UI/Spinner/Spinner";
import * as actions from "../../store/actions/index";

// const Groups = [
//   {
//     id: 1,
//     name: "Blake Group 1",
//     time: "1:17 PM",
//     members: ["John", "Blake", "Ryan", "Matt"]
//   },
//   {
//     id: 2,
//     name: "Random Group 2",
//     time: "1:18 PM",
//     members: ["Tim", "Tom", "Tyler", "Travis", "Todd"]
//   },
//   {
//     id: 3,
//     name: "Poop Scoop 3",
//     time: "Yesterday",
//     members: ["Sam", "Spencer"]
//   },
//   {
//     id: 4,
//     name: "Number 4",
//     time: "May 10th",
//     members: ["David", "Dale", "Drake", "Devon"]
//   }
// ];

class GroupList extends Component {
  componentDidMount() {
    this.props.onFetchGroups();
  }

  render() {
    let listContent = (
      <ul className={classes.List}>
        {this.props.groups.map(group => (
          <Group
            key={group.id}
            id={group.id}
            name={group.Name}
            description={group.Description}
          />
        ))}
      </ul>
    );

    if (this.props.loading) {
      listContent = <Spinner />;
    }

    return (
      <div className={classes.GroupList}>
        <div className={classes.SideDrawerTop}>
          <h3>My Groups</h3>
          <Button>
            <Link to="/createGroup">
              <AddCircleOutlineIcon />
            </Link>
          </Button>
        </div>
        {listContent}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.groups.loading,
    groups: state.groups.groups
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchGroups: () => dispatch(actions.fetchGroups())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupList);
