import React, { Component } from 'react';
import {Route, NavLink} from 'react-router-dom';
import {connect} from 'react-redux';

import {signUp, moduleName} from '../../ducks/auth';

import SignInForm from '../auth/SignInForm';
import SignUpForm from '../auth/SignUpForm';
import Loader from '../Loader';

class AuthPage extends Component {

    handleSignIn = (values) => console.log('---', values)
    handleSignUp = ({email, password}) => this.props.signUp(email, password)

    render() {
        const {loading} = this.props
        return (
            <div>
                <h1>Auth page</h1>
                <NavLink to="/auth/signin" activeStyle={{ color: 'red'}}>Sign in</NavLink>
                <NavLink to="/auth/signup" activeStyle={{ color: 'red'}}>Sign up</NavLink>
                <Route path='/auth/signin' render={() => <SignInForm onSubmit={this.handleSignIn}/>} />
                <Route path='/auth/signup' render={() => <SignUpForm onSubmit={this.handleSignUp}/>} />     
                {loading && <Loader />}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    loading: state[moduleName].loading
})

export default connect(mapStateToProps, {signUp})(AuthPage);