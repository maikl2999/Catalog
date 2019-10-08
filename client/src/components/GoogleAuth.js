import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
    componentDidMount(){
        window.gapi.load('auth2', () => {
            window.gapi.auth2.init({
                clientId: '174963929750-8pjm71cl6p5ctg2glkfm1a3siqjdhkba.apps.googleusercontent.com'
              }).then(() => {
                    this.auth = window.gapi.auth2.getAuthInstance();
                    
                    this.onAuthChange(this.auth.isSignedIn.get());
                    this.auth.isSignedIn.listen(this.onAuthChange);
              }, () => console.log('init error'));
        });
    }

    onAuthChange = (isSignedIn) => {
        if(isSignedIn) {
            const userProfile = this.auth.currentUser.get().getBasicProfile();

            this.props.signIn({ 
                userName: userProfile.getGivenName(),
                userEmail: userProfile.getEmail(),
                userId: userProfile.getId(),
             })
        } else {
            this.props.signOut();
        }
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }

    onSignInClick = () => {
        this.auth.signIn()
        this.auth.currentUser.get().getId()
    }

    renderAuthButton() {
        console.log(this.props.isSignedIn + "  from ...")
        if(this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
            return (
                <React.Fragment>   
                    <button onClick={this.onSignOutClick} className="btn btn-link p-0 border-0 sign-in">Sign out</button>
                    <div className="mr-2">Welcome <span className="text-muted mr-2">{this.props.userName}</span>|</div>
                </React.Fragment>
            );
        } else {
            return (
                <button onClick={this.onSignInClick} className="btn btn-link p-0 border-0 sign-in">Sign in with Google</button>
            );
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.renderAuthButton()}
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userName: state.auth.userName,
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);