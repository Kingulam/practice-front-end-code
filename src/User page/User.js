import React from "react";
import './User.css';
import Formuser from "../Formuser/Fmuser";
import Listform from "../Listuser/Ltuser";
import axios from 'axios';
// import  Await  from "react-router-dom";

export class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

            userDataList: [
                {
                    firstname: "Gulam",
                    lastname: "Ghouse",
                    number: "8220",
                    date: "19",
                    email: "haseem@gmail.com",
                    password: "Gul@m8220",
                    address: "vathiya palli"
                }
            ]
        }
    }

handleDelete=()=>{
    axios.delete('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        //handle success
        console.log(response.data);
        this.setState({ userDataList: response.data })
    })
    .catch((error) => {
        //handle success
        console.log(error);
    })
}

    componentDidMount() {

    }

    handleForm = (date) => {
        this.state.userDataList.push(date)
        this.setState({ userDataList: this.state.userDataList })
    }

    // handlecount = () => {
    //     this.setState({ batch: this.state.batch - 1 })
    // }
    // handlecountde = () => {
    //     this.setState({ batch: this.state.batch + 1 })
    // }


    render() {
        return (
            <div className="container">
                {/* <h1>batch{this.state.batch}</h1> */}

                {/* <button className="" onClick={this.handlecount}>Decrease</button>{" "}
                <button className="" onClick={this.handlecountde}>Increase</button> */}

                <div className="row">
                    <div className="col-6">
                        <Formuser getuserform={this.handleForm} />
                    </div>
                    <div className="col-sm-6 text-center">
                        <Listform userDataList={this.state.userDataList} />
                    </div>
                </div>

            </div>
        )
    }
}
export default User;


