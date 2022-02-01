import appStyle from './App.css';
import {Component} from "react";
import Input from "./components/phoneNumberInput/Input";

export default class App extends Component {
    state = {
        numbersData: [
            {id:1,number: "9528262065"},
            {id:2,number: "9528262064"},
            {id:3,number: "9528262063"},
            {id:4,number: "9528262062"},
            {id:5,number: "9528262061"}
        ],
        phone: ""
    }

    onChangeHandler = (text) => {
        this.setState({
            phone:text
        })
    }

    handleClick = () => {
        this.state.numbersData.push({id:this.state.numbersData.length+1,number: this.state.phone})
        let arr = this.state.numbersData;
        this.setState({numbersData:arr})
        this.state.phone = "";
    };

    render() {
        return (
            <div className={appStyle.div}>
                <Input name="phone"
                       mask={this.state.mask}
                       searchArray={this.state.numbersData}
                       callBackFunc={this.handleClick}
                       value={this.state.phone}
                       onChangeHandler={this.onChangeHandler}
                />
            </div>
        );
    }
}