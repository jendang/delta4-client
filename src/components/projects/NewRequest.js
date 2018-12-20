import React, {Component} from 'react'

class NewRequest extends Component {
    state={}

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.onSubmit(this.state)
    }

    handleChange = (event) => {
        const {name, value} = event.target
        //[event.target.name] = event.target.value
        this.setState({
            [name]: value
        })
    }


    render () {
        return (
            <div>
                <div className="ui attached message">
  				    {/* <div className="header">Welcome to our site</div> */}
  		 		    <p>New request</p>
				</div>
                <form className="ui form attached fluid segment" onSubmit={this.handleSubmit}> 
                    <div className="field">
                        <label>Project name: </label>
                        <input type="text" name="name" onChange={this.handleChange} />

                    </div>
                    <div>
                        <button className="ui primary button">Submit</button>
                     </div>   
                </form>
                
            </div>

        )
    }

}

export default NewRequest