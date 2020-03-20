import React, { Component } from 'react';
import { connect } from "react-redux";
import Aux from '../../hoc/Aux/Aux';
import Header from '../../Components/Header/Header';

class Layout extends Component {
    render (){

    let GroupContent = <Header>Select a group to start</Header> 

    if (this.props.selectedGroup) {
        GroupContent = <Header>{this.props.selectedGroup}</Header> 
    }

        return (
            <Aux>
            {GroupContent}
          </Aux>
        )
    }
}

const mapStateToProps = state => {
    return {
        selectedGroup: state.selectedGroup,
    }
}

export default connect(mapStateToProps)(Layout);

