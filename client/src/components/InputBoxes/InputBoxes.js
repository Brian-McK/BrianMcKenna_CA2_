import React, {Component} from 'react';
import OutlineInput from '../InputBoxes/OutlineInput';

export default class InputBoxes extends Component {

    render() 
    {
        return (
            <div className="InputBoxesStyle">
                <OutlineInput 
                setLabel={"Search By Movie..."} 
                value={this.props.value} 
                setName={"search"} 
                valueOnChange={this.props.filterSearch} 
                />
            </div>
        )
    }
}