import React, {PureComponent} from 'react';
import Stat from "./Stat";

class Stats extends PureComponent {

    render() {
        return (
            <div className='bottom-center'>
                {this.props.stats.map(stat => <Stat key={stat.xws} {...stat}/>)}
            </div>
        );
    }
}

export default Stats;