import React from 'react';

class FavorCreate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            favor_title: '',
            favor_description: '',
            favor_lat: 0,
            favor_lng: 0,
            favor_status: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleDropInput = this.handleDropInput.bind(this);
    }

    componentDidMount() {
    navigator.geolocation.getCurrentPosition( position => {
        this.setState( { favor_lat: position.coords.latitude })
        this.setState( { favor_lng: position.coords.longitude})
    })
  }


   componentWillReceiveProps(newState) {
      this.setState({  favor_title: newState.favor_title,
            favor_description: newState.favor_description,
            favor_lat: newState.favor_lat,
            favor_lng: newState.favor_lng,
            favor_status: newState.favor_status, });
    }
   
    handleInput(field) {
        return e=> {
            this.setState( { [field]: e.currentTarget.value })
        }
    }

    handleDropInput(e) {
         
     this.setState({ "favor_status": e.currentTarget.value })
     
    }

    handleSubmit(e) {

        
        e.preventDefault();
        const favor = Object.assign({}, this.state)
       
        this.props.createFavor(favor).then(this.props.closeModal()).then(window.location.reload());
        // this.props.history.push('/')

        this.props.fetchFavors();
        
    }

    render() {
        const display = (
            <div className="favor-create-form">
                
                <form id={"favor-form"}>
                    <center><h1 className="form-head" id={"favor-form-title"}> Create a Favor </h1></center>

                    <br/>
                       <center><img className="logo-img"  src="https://i.ibb.co/5MynHJQ/Clogo3.png"/></center>

                     {/* <center><img className="logo-img"  src="https://i.ibb.co/1mHJgBD/C.png"/></center> */}
                     <div onClick={this.props.closeModal} className="close-x">X</div>

                    <div className="favor-form-div">
                    <h2 className="form-head"> Title: </h2>
                    <label>
                        <input id={"input-form"} type='text' placeholder="Title" value={this.state.favor_title} onChange={this.handleInput('favor_title')} />
                    </label>
                    {/* <h2 className="form-head"> Status:</h2>
                    <select value={this.state.favor_status} onChange={this.handleDropInput} >
                        <option value="Request" >Request</option>
                        <option value= "Done" >Done</option> 
                          
                    </select> */}
                    {/* <label>
                        <input id={"input-form"} type='text' placeholder="Request"  />
                    </label> */}
                    <h2 className="form-head"> Description: </h2>
                    <label>
                        <textarea id={"text-form"} type='text' placeholder="Description" value={this.state.favor_description} onChange={this.handleInput('favor_description')} />
                    </label>
                    <br/>
                    <button id={"favor-form-button"}  disabled={!this.state.favor_title} onClick={this.handleSubmit}>Create Favor</button>
                    </div>
                </form>
            </div>
        )
    return( 
        <div>
            {display}
        </div>
    )
    }
}

export default FavorCreate;