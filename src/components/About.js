import React from 'react';
import Timeline from './Timeline.js';
import Equipments from './Equipments.js';

class about extends React.Component {
    render(){
        return(<div>
            {/* Main about text comes here */}
            <Timeline/>
            <Equipments/>
        </div>           
           
        )
    }
}

export default about;