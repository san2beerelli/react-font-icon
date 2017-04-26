import React, { Component } from 'react';
import {RFUrl,RFIcon} from '../../src';

class App extends Component {
    render () {
        return (
            <div>
                <RFIcon name="flag" color="#5f5f5f"
                        gradient="90deg, #FEB984, #FF5542"
                     //   textShadow="0 0.5px 1px rgba(1, 0, 0, 0.3)"
                        fontSize="20em"
                        size="5x" />

                <RFIcon name="face" type="md" color="#5f5f5f"
                        gradient="90deg, #FDE869, #00B1C1"
                      //  textShadow="0 0.5px 1px rgba(1, 0, 0, 0.3)"
                        fontSize="18em" />
            </div>
        )
    }
}

export default App