import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class TodoApp extends Component{

    render(){
        return (
            <div className="todo-App">
                <h1>Todo app</h1>
                <Router>
                    <>
                    <Switch>
                        <Route path="/login" component={LoginComponent} />
                        <Route path="/welcome" component={WelcomeComponent} />
                        <Route path="/" exact component={LoginComponent} />
                        <Route component={ErrorComponent} />
                    </Switch>
                    </>
                </Router>
            </div>
        )
    }
}

class LoginComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: 'Saugat',
            password: '',
            loginSuccess: 0
        };
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
    }


    handleFieldChange(e){
        this.setState(
            (prevState) => {
                return {
                    ...prevState,
                    [e.target.name]: e.target.value
                };
            }
        );
    }
    
    loginClicked(){
        if(this.state.username === 'Saugat' && this.state.password === '1234'){
            this.setState((prevState) => {
                return {
                    ...prevState,
                    loginSuccess: 1
                }
            });
            this.props.history.push("/welcome");
        }else{
            this.setState((prevState) => {
                return {
                    ...prevState,
                    loginSuccess: 2
                }
            });
        }
    }

    render () {
        return (
            <>
                <ShowInvalidMessage loginSuccess={this.state.loginSuccess}></ShowInvalidMessage>
                Username: <input type="text" name="username" value={this.state.username} onChange={this.handleFieldChange}/>
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleFieldChange}/>
                <button onClick={this.loginClicked}>Login</button>
            </>
        )
    }
}

class WelcomeComponent extends Component{
    render() {
        return (
        <>
            <h1>
                Welcome
            </h1>
        </>
        )
    }
}

function ShowInvalidMessage(props){
    if(props.loginSuccess === 2){
        return (
            <div>
                Invalid Credentials        
            </div>
        );
    }else if(props.loginSuccess === 1){
        return (
            <div>
                Login Successful       
            </div>
        );
    }
    else{
        return null;
    }
}

function ErrorComponent(){
    return (
        <>
            <p>An error occured. Please contact support</p>
        </>
    );
}

export default TodoApp;