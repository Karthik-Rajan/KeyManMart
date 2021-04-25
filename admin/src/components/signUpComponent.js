import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignUp from '../views/signup';

class signUpComponent extends Component {
    onSubmit = (e) => {

    //    this.props.register(data);
    }
    render() {
        return (
            <SignUp {...this.props} />
        );
    }
}

const mapStateToProps = state => ({
   onSubmit: (e) => { this.onSubmit(e) }  
});

const mapDispatchToProps = dispatch => ({
    // register : (data) => { dispatch(register(data)) }
})

export default connect(mapStateToProps, mapDispatchToProps)(signUpComponent)