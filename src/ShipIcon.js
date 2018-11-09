import React, {PureComponent} from 'react';
import "../node_modules/xwing-miniatures-font/dist/xwing-miniatures.css";
import classNames from 'classnames';

class Icon extends PureComponent {

    render() {
        let iconClasses = classNames('xwing-miniatures-ship', 'xwing-miniatures-ship-' + this.props.shipId);
        return (
            <i className={iconClasses} style={{color: 'white', margin: '2px', height: '50px', width: '50px'}}/>
        )
    }
}

export default Icon;