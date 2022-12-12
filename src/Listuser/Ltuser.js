import React from "react";

export class Listform extends React.Component {

    render() {
        return (
            <>
            <h1>USER LIST</h1>
                        <table class="table border border-4 ">
                            <thead>
                                <tr>
                                    <th scope="col">s.no</th>
                                    <th scope="col">name</th>
                                    <th scope="col">id</th>
                                    <th scope="col">phone</th>
                                    <th scope="col">email</th>
                                     {/* <th scope="col">city</th>
                                     <th scope="col">password</th>  */}
                                    {/* <th scope="col">Address</th> */}

                                </tr>
                            </thead>
                            <tbody>
                                {this.props?.userDataList?.map((pass, i) =>
                                    <tr>
                                        <th>{1 + i}</th>
                                        <td>{pass.name}</td>
                                        <td>{pass.id}</td>
                                        <td>{pass.phone}</td>
                                        <td>{pass.email}</td>
                                        <td><button onClick={this.props.handleDelete(pass)}>Delete</button></td>
                                        {/* <td>{pass.city}</td> */}
                                        {/* <td>{pass.password}</td> */}
                                        {/* <td>{pass.address}</td> */}

                                    </tr>
                                )} 
                            </tbody>
                        </table>
            </>
        )
    }
}
export default Listform;