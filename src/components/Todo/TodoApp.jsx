import React, {Component} from 'react';

class TodoApp extends Component{
    render(){
        return (
            <div className="todo-App">
                <h1>Todo app</h1>
                <LoginComponent />
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

export default TodoApp;