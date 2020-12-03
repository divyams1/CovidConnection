import React from 'react';

class FavorCreate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            favor_description: '',
            lat: 0,
            lng: 0
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
    navigator.geolocation.getCurrentPosition( position => {
        this.setState( { lat: position.coords.latitude })
        this.setState( { lng: position.coords.longitude})
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
        debugger
        this.props.createFavor(favor);
        this.props.history.push('/')
    }

    render() {
        const display = ( 
            <div className="favor-create-form">
                <h1> Create a Favor </h1>
                <form>
                    <h2> Title: </h2>
                    <label>
                        <input type='text' placeholder="Title" value={this.state.title} onChange={this.handleInput('title')} />
                    </label>
                    <h2> Description: </h2>
                    <label>
                        <textarea type='text' placeholder="Description" value={this.state.favor_description} onChange={this.handleInput('favor_description')} />
                    </label>
                    <button onClick={this.handleSubmit}> Create Favor </button>
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