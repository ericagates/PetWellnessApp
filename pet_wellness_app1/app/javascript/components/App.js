import React, { Component } from 'react'
import PropTypes from "prop-types"
import Header from './components/Header'
import Footer from './components/Footer'
import { Nav, NavItem } from 'reactstrap'
import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'


class App extends Component {
  constructor(props){
    super(props)
    }

  render () {
    const {
      logged_in,
      sign_in_route,
      sign_out_route,
      //passed in by index.html.erb (devise)
      current_user
    } = this.props
    console.log("logged_in", logged_in, current_user);
    return (
        <Router>
          <Header
          logged_in={ this.props.logged_in }
          sign_in_route={ this.props.sign_in_route }
          sign_out_route={ this.props.sign_out_route }
          />
          <Switch>
            <h3>Hello Pets</h3>
            <Route exact path="/" 
            render={ (props) =>
              <Landing 
                logged_in={ logged_in }
                sign_in_route={ sign_in_route }
                sign_out_route={ sign_out_route }
              />
            }
            />

            
            

          </Switch>
        </Router>
    );
  }
}

export default App