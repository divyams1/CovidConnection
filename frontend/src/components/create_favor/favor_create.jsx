import React from 'react';

class FavorCreate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            favor_title: '',
            favor_description: '',
            favor_lat: 0,
            favor_lng: 0
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
    navigator.geolocation.getCurrentPosition( position => {
        this.setState( { favor_lat: position.coords.latitude })
        this.setState( { favor_lng: position.coords.longitude})
    })
  }
    handleInput(field) {
        return e=> {
            this.setState( { [field]: e.currentTarget.value })
        }
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
                <h1 id={"favor-form-title"}> Create a Favor </h1>
                <form id={"favor-form"}>
                    <br/>
                     <center><img className="logo-img"  src="https://i.ibb.co/1mHJgBD/C.png"/></center>
                     <div onClick={this.props.closeModal} className="close-x">X</div>

                    <h2> Title: </h2>
                    <label>
                        <input id={"input-form"} type='text' placeholder="Title" value={this.state.favor_title} onChange={this.handleInput('favor_title')} />
                    </label>
                    <h2> Description: </h2>
                    <label>
                        <textarea id={"text-form"} type='text' placeholder="Description" value={this.state.favor_description} onChange={this.handleInput('favor_description')} />
                    </label>
                    <br/>
                    <button id={"favor-form-button"} onClick={this.handleSubmit}>Create Favor</button>
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