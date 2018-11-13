import React, { Component } from 'react';
import {reduxForm, Field} from 'redux-form';

class SignInForm extends Component {
    render() {
        const {handleSubmit} = this.props

        return (
            <div>
                <h2>Sign in</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="">Email</label>
                        <Field name='email' component="input" />
                    </div>
                    <div>
                        <label htmlFor="">Password</label>
                        <Field name='password' component="input" type="password" />
                    </div>
                    <div>
                        <input type="submit"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'auth'
})(SignInForm);