import React, { Component } from 'react';

class Card extends Component {

    constructor(props) {
        super(props)
        this.state = {data: null}
    }

    componentDidMount() {
        const that = this
        fetch(this.props.url).then(response => response.json()).then(
            data => {
                that.setState({data})
            }

        )
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