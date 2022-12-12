import React from "react";
import SimpleReactValidator from 'simple-react-validator';


export class Formuser extends React.Component {

    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            objecthandle: { ...this.state.objecthandle, [name]: value }
        });
    }
    handeleSubmit = () => {
        if (this.validator.allValid()){
            this.props.getuserform(this.state.objecthandle)
        }
        else{
            this.validator.showMessages();
            this.forceUpdate();
        }
    }

    constructor(props) {
        super(props)
        this.validator = new SimpleReactValidator();

        this.state = {
            // batch: 50
            objecthandle: {
                firstname: "",
                lastname: "",
                number: "",
                date: "",
                email: "",
                password: "",
                address: ""
            },
        }
    }

    render() {
        return (
            <>
                <h1 className="text-center text-primary">LOGIN</h1>
                <div className="container border border-4">
                    <div className="row">
                        <div className="col-6">
                            <label class="form-label">First Name</label>
                            <input type="text" class="form-control" value={this.state.objecthandle.firstname} name="firstname" onChange={this.handleChange} />
                            <div className="abcd">{this.validator.message('firstname', this.state.objecthandle.firstname, 'required')}</div>
                        </div>
                        <div className="col-6">
                            <label class="form-label">Last Name</label>
                            <input type="text" class="form-control" value={this.state.objecthandle.lastname} name="lastname" onChange={this.handleChange} />
                            <div className="abcd">{this.validator.message('lastname', this.state.objecthandle.lastname, 'required')}</div>

                        </div>
                    </div>
                    <br></br>

                    <div className="row">
                        <div className="col-6">
                            <label class="form-label">Number</label>
                            <input type="number" class="form-control" name="number" value={this.state.objecthandle.number} onChange={this.handleChange} />
                            <div className="abcd">{this.validator.message('number', this.state.objecthandle.number, 'required')}</div>

                        </div>
                        <div className="col-6">
                            <label class="form-label">Date</label>
                            <input type="date" class="form-control" name="date" value={this.state.objecthandle.date} onChange={this.handleChange} />
                            <div className="abcd">{this.validator.message('date', this.state.objecthandle.date, 'required')}</div>

                        </div>
                    </div>
                    <br></br>

                    <div className="row">
                        <div className="col-12">
                            <label class="form-label">Email address</label>
                            <input type="text" class="form-control" value={this.state.objecthandle.email} name="email" onChange={this.handleChange} />
                            <div className="abcd">{this.validator.message('email', this.state.objecthandle.email, 'required')}</div>

                        </div>
                    </div>
                    <br></br>
                    <div className="row">
                        <div className="col-12">
                            <label class="form-label">Password</label>
                            <input type="text" class="form-control" name="password" value={this.state.objecthandle.password} onChange={this.handleChange} />
                            <div className="abcd">{this.validator.message('password', this.state.objecthandle.password, 'required')}</div>

                        </div>
                    </div>
                    <br></br>

                    <div className="row">
                        <div className="col-12">
                            <label class="form-label">Address</label>
                            <textarea class="form-control" name="address" value={this.state.objecthandle.address} onChange={this.handleChange} rows="3"></textarea>
                            <div className="abcd">{this.validator.message('address', this.state.objecthandle.address, 'required')}</div>
                        </div>
                    </div>
                    <br></br>

                    <div className="row">
                        <div className="d-grid col-12">
                            <button type="submit" class="btn btn-primary" onClick={this.handeleSubmit}>Summit</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Formuser;