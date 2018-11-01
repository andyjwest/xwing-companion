import React, {Component} from 'react';

class Builder extends Component {

    constructor(props){
        super(props);
    }

    render() {
        let pilots = this.props.pilots.map(pilot => <option key={pilot.xws} value={pilot.xws}>{pilot.name}</option>);
        return (
            <div>
                <select>
                    {pilots}
                </select>
            </div>
        )
    }
}

export default Builder;