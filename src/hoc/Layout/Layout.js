import React, { Component } from 'react';
import Aux from '../Aux/Aux';
import SideDrawer from '../../Components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    render (){
        return (
            <Aux>
                <SideDrawer/>
                <main>
                {this.props.children}
                </main>
            </Aux>
        )
    }
}

export default Layout;