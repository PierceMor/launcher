import React, { Component  } from "react";
import Dashboard from '../components/dashboard.js';
import Inputs from '../components/input';

class Home extends Component {
    render(){
        return(
            <div>
                <Dashboard />
                <Inputs />
            </div>
        )
    }
}

export default Home;