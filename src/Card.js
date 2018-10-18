import React, { Component } from 'react';

class Card extends Component {

    constructor(props) {
        super(props)
    }

    render(){
        let name = null
        if(this.state.data != null){
           name = this.state.data[0].name
        }
        return (
            <div>
                {name}
            </div>
        )
    }
}

export default Card;