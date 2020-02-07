import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import {MDBContainer, MDBRow, MDBCol} from "mdbreact";
import "./index.css"

class App extends React.Component {
	state = {};
	render(){
		return (
			<React.Fragment>
			<MDBContainer>
				<MDBRow>
				<MDBCol md="9"><Event /></MDBCol>
				<MDBCol md="3"></MDBCol>
				</MDBRow>
			</MDBContainer>
			</React.Fragment>
			);
	}
}

class Event extends React.Component {
	render() {
		return (
			<React.Fragment>
				<h3>{this.props.time} - {this.props.title}</h3>
			</React.Fragment>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));