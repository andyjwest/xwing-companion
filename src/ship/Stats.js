import React, {PureComponent} from 'react';
import Stat from "./Stat";

class Stats extends PureComponent {

    render() {
        return (
            <div>
                {this.props.stats.map(stat => <Stat {...stat}/>)}
            </div>
        );
    }
}

export default Stats;