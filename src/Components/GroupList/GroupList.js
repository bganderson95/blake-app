import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import classes from "./GroupList.css";
import Group from "./Group/Group";
import Spinner from "../UI/Spinner/Spinner";
import * as actions from "../../store/actions/index";

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
              <AddCircleOutlineIcon
                fontSize="large"
                style={{ color: "#bbb" }}
              />
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
