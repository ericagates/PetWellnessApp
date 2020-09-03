import React, { Component } from 'react'

class AboutUs extends Component{
    constructor(props){
        super(props)
        this.state = {
            success: false
        }
    }
    
    render(){
        return(
            <React.Fragment>
                <h3> About Us </h3>
                { this.state.success && <Redirect to={ `/` }/> }
            </React.Fragment>
        )
    }
}
export default AboutUs