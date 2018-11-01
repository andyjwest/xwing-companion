import React, {Component} from 'react';
import Dial from "../ship/dial/Dial";
import ActivationManeuver from "./ActivationManeuver";

class ActivationCard extends Component {

    constructor(props){
        super(props);
        this.state = {
            focusRule: "",
            executeManeuverRule: "",
            activated: false
        }
    }

    componentWillMount(){
        fetch('/rules/actions/focus.md').then(response => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.text();
        })
            .then(md => this.setState({focusRule: md}))
            .catch(error => console.warn(error));
        fetch('/rules/executing-maneuver.md').then(response => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.text();
        })
            .then(md => this.setState({executeManeuverRule: md}))
            .catch(error => console.warn(error));
    }

    render() {
        return (
            <div style={{color:'white'}}>
                <div className='activation-artwork-container'>
                    <img className='activation-artwork' src={this.props.pilots[0].artwork} alt={this.props.pilots[0].name}/>
                    <div className='top-left'>
                        <div>
                            <h1>{this.props.pilots[0].name}</h1>
                            <p>PS: {this.props.pilots[0].initiative}</p>
                        </div>
                        <Dial dial={this.props.dial}/>
                    </div>
                    <ActivationManeuver icon='straight' color='white' speed={2}/>
                </div>
            </div>
        )
    }
}

export default ActivationCard;