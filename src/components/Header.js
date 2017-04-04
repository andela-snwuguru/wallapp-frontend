/**
 * Created by sundayguru on 01/04/2017.
 */
import React, { Component } from 'react';
import '../App.css';
import {NavDropdown, MenuItem} from 'react-bootstrap';
import {isLogged} from '../Utils';
import {logoutUser} from '../actions/AuthActions';
import { connect } from 'react-redux'


class Header extends Component {
    logout(){
        this.props.dispatch(logoutUser());
    }
    getAccountLink(){
        if(!isLogged())
            return;
        return (
            <NavDropdown eventKey="4" title={"Welcome " + this.props.user.username} id="nav-dropdown" className="pull-right account">
              <MenuItem eventKey="4.1">Settings</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey="4.4" onClick={this.logout.bind(this)}>Logout</MenuItem>
            </NavDropdown>
        )
    }
  render() {
    return (
      <div className="App-header">
          {this.getAccountLink()}
      </div>
    );
  }
}


function mapStateToProps(state) {
    return {
      user: state.auth.user
    };
}

export default connect(mapStateToProps)(Header);
