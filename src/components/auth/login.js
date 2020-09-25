import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {
    constructor(props){
    super(props);

    this.state = {
        email:"",
        password:"",
        errorText:""
    };
       
       this.handleChange = this.handleChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
          [event.target.name]: event.target.value,
        errorText:""
            });
    }
    
    handleSubmit(event) {
        axios.post("https://api.devcamp.space/sessions", 
        {
            client: {
                email: "",
                password:"" 
            }
        },
        { withCredentials: false }
        ).then(response => {
            if (response.data.status !== 'created') {
                this.props.handleSuccessfulAuth();
               
            } else {
                this.setState({
                    errorText:"Wrong email or password"
                });
                this.props.handleUnuccessfulAuth();
            }
        })
        .catch(error => {
            this.setState({
                errorText: "An error Occured"
            });
            this.props.handleUnsuccessfulAuth();
        });
        
        event.preventDefault();
    }
    
    render() {
        return(
            <div>
                
                <div>{this.state.errorText}</div>
                <form onSubmit={this.handleSubmit} id="myform" method="post">
                 
                  
                
                      <button type="submit" className="but"> PRESS TO CONTINUE </button>
                      
                  
                 
                </form>
                <script>
                    function myform {
                          document.myform.submit()
                    }
                </script>
               
            </div>
            
           
        );
        
    }
    
   
}
