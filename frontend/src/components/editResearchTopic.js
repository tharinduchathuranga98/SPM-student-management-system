import React, { Component } from "react";
import axios from "../action/axios";
import swal from "sweetalert";

export default class editResearchTopic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentsGrpId: "",
      researchField: "",
      supervisorName: "",
      selectedTopic: "",
      grpLeaderName: "",
      grpLeaderEmail: "",
      status: "",
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const id = this.props.match.params.id;

    const {
      studentsGrpId,
      researchField,
      supervisorName,
      selectedTopic,
      grpLeaderName,
      grpLeaderEmail,
      status,
    } = this.state;

    const data = {
      studentsGrpId: studentsGrpId,
      researchField: researchField,
      supervisorName: supervisorName,
      selectedTopic: selectedTopic,
      grpLeaderName: grpLeaderName,
      grpLeaderEmail: grpLeaderEmail,
      status: status,
    };

    console.log(data);

    //Validation

    if (
      studentsGrpId == "" ||
      researchField == "" ||
      supervisorName == "" ||
      selectedTopic == "" ||
      grpLeaderName == "" ||
      grpLeaderEmail == ""
    ) {
      swal(
        "Please fill the form correctly",
        "Form values cannot be empty",
        "error"
      );
    } else if (researchField.length < 2) {
      swal(
        "Invalid Research Field",
        "Length should be greater than 2",
        "error"
      );
    } else if (studentsGrpId.length < 2) {
      swal(
        "Invalid Students' Group ID",
        "Length should be greater than 2",
        "error"
      );
    } else if (studentsGrpId.length > 15) {
      swal(
        "Invalid Students' Group ID",
        "Length should not be greater than 15",
        "error"
      );
    } else if (supervisorName.length < 2) {
      swal(
        " Please Enter Supervisor Name Correctly",
        "length should be greater than 2",
        "error"
      );
    } else {
      axios.put(`/api/v1/postTopic/update/${id} `, data).then((res) => {
        if (res.data.success) {
          swal("Successful!", "Research Topic Status Updated", "success");
          this.setState({
            studentsGrpId: "",
            researchField: "",
            supervisorName: "",
            selectedTopic: "",
            grpLeaderName: "",
            grpLeaderEmail: "",
            status: "",
          });
        }
      });
    }
  };

  componentDidMount() {
    const id = this.props.match.params.id;

    axios.get(`/api/v1//postTopic/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          studentsGrpId: res.data.post.studentsGrpId,
          researchField: res.data.post.researchField,
          supervisorName: res.data.post.supervisorName,
          selectedTopic: res.data.post.selectedTopic,
          grpLeaderName: res.data.post.grpLeaderName,
          grpLeaderEmail: res.data.post.grpLeaderEmail,
          status: res.data.post.status,
        });
      }
    });
  }

  render() {
    return (
      <div
        className="container border"
        style={{
          marginTop: "50px",

          width: "50%",

          backgroundImage: `url('data:image/jpeg;base64,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')`,

          backgroundPosition: "center",

          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="cardU" style={{ marginTop: "40px" }}>
            <div className="card-body">
              <div className="col-md-8 mt-4 mx-auto">
                <center>
                  <h1
                    className="h3 mb-3 font-weight-normal"
                    style={{
                      backgroundColor: "#d4eff9",
                      marginTop: "3px",
                      color: "navy",
                      width: "150%",
                      textAlign: "center",
                    }}
                  >
                    <font face="Comic sans MS" size="6">
                      <b>Accept/Reject Reserach Topics</b>
                    </font>
                  </h1>
                  <br />
                </center>
                <br />
                <form className="needs-validation" noValidate>
                  <div className="form-group" style={{ marginBottom: "15px" }}>
                    <label style={{ marginBottom: "5px" }}>
                      <b>Students' Group ID: </b>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="studentsGrpId"
                      placeholder="Enter Your Group Id"
                      value={this.state.studentsGrpId}
                      onChange={this.handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group" style={{ marginBottom: "15px" }}>
                    <br></br>
                    <label
                      style={{ marginBottom: "5px", fontSize: "19px" }}
                      className="topic"
                    >
                      <b>Research Field:</b>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="researchField"
                      placeholder="Enter Your Research Field"
                      value={this.state.researchField}
                      onChange={this.handleInputChange}
                      required
                    />
                  </div>
                  <br></br>

                  <label
                    style={{ marginBottom: "5px", fontSize: "19px" }}
                    className="topic"
                  >
                    <b>Supervisor Name: </b>
                  </label>
                  <div class="row">
                    <div class="col">
                      <input
                        type="text"
                        className="form-control"
                        name="supervisorName"
                        placeholder="Enter supervisorName"
                        value={this.state.supervisorName}
                        onChange={this.handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <br></br>
                  <div className="form-group" style={{ marginBottom: "15px" }}>
                    <br></br>
                    <label
                      style={{ marginBottom: "5px", fontSize: "19px" }}
                      className="topic"
                    >
                      <b>Selected Research Topic: </b>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="selectedTopic"
                      placeholder="Enter Your Research Topic"
                      value={this.state.selectedTopic}
                      onChange={this.handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group" style={{ marginBottom: "15px" }}>
                    <br></br>
                    <label
                      style={{ marginBottom: "5px", fontSize: "19px" }}
                      className="topic"
                    >
                      <b>Name Of Group Leader: </b>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="grpLeaderName"
                      placeholder="Enter the group leader's name"
                      value={this.state.grpLeaderName}
                      onChange={this.handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group" style={{ marginBottom: "15px" }}>
                    <br></br>
                    <label
                      style={{ marginBottom: "5px", fontSize: "19px" }}
                      className="topic"
                    >
                      <b>Email Of Group Leader: </b>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="grpLeaderEmail"
                      placeholder="Enter the group leader's email"
                      value={this.state.grpLeaderEmail}
                      onChange={this.handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group" style={{ marginBottom: "15px" }}>
                    <br></br>
                    <label
                      style={{ marginBottom: "5px", fontSize: "19px" }}
                      className="topic"
                    >
                      <b>Status:</b>
                    </label>
                    <select
                      className="form-control"
                      style ={{marginBottom:'15px', maxWidth:'500px'}}
                      name="status"
                      placeholder="Status"
                      value={this.state.status}
                      onChange={this.handleInputChange}
                      required
                    >
                      <option value = "Pending">Pending</option>
                      <option value = "Accepted">Accepted</option>
                      <option value = "Rejected">Rejected</option> </select>
                  </div>

                  <button
                    className="btn btn-success"
                    type="submit"
                    style={{ marginTop: "15px" }}
                    onClick={this.onSubmit}
                  >
                    <i className="far fa-check-square"></i>
                    &nbsp; Update
                  </button>
                </form>
              </div>
            </div>
          </div>

          <br />
          <br />
          <br />
        </div>
      </div>
    );
  }
}
