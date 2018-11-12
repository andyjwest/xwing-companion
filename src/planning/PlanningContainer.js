import React, {Component} from 'react';
import './planning.css';
import PlanningHeaderItem from "./PlanningHeaderItem";
import Planning from "./Planning";

class PlanningContainer extends Component {

    constructor(props){
        super(props);
        this.state = {
            activeShip: this.props.ships[0]
        }
    }

    updateShip(ship){
        this.setState({
           activeShip: ship
        });
    }

    render(){
        let shipsHeaderItems = this.props.ships.map(ship => <PlanningHeaderItem {...ship} updateShip={()=> this.updateShip(ship)}/>);
        return (
            <div>
                <div className='full-flex'>
                    {shipsHeaderItems}
                </div>
                <Planning {...this.state.activeShip}/>
            </div>
        );
    }
}

export default PlanningContainer;
