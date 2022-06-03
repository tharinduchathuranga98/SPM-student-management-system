import React, { Component } from "react";
import axios from "../../action/axios";

export default class supFieldsRetrieve extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    this.retrievePosts();
  }

  retrievePosts() {
    axios.get("/api/v1/postsSupervisorField").then((res) => {
      if (res.data.success) {
        this.setState({
          posts: res.data.existingPosts,
        });
        console.log(this.state.posts);
      }
    });
  }

  filterData(posts, searchKey) {
    const result = posts.filter(
      (post) =>
        post.supName.toLowerCase().includes(searchKey) ||
        post.researchFieldT.toLowerCase().includes(searchKey) ||
        post.supervisorEmail.toLowerCase().includes(searchKey)
    );
    this.setState({ posts: result });
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("/api/v1/postsSupervisorField").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingPosts, searchKey);
      }
    });
  };

  render() {
    return (
      <div className="container">
        <br></br>

        <div className="text-center">
          <h1 className="adminletter" style={{ color: "navy" }}>
            <b>Research Fields Of Supervisors</b>
          </h1>
        </div>
        <div className="col-md-6 mb-4">
          <form class="form-inline">
            <i class="fas fa-search" aria-hidden="true"></i>
            <input
              className="form-control form-control-sm ml-3 w-75"
              type="search"
              placeholder="Search"
              name="searchQuery"
              onChange={this.handleSearchArea}
            ></input>
          </form>
          <br></br>
        </div>
        <table className="table table-striped" style={{ color: "#362419" }}>
          <thead>
            <tr>
              <th scope="col">
                <b>ID</b>
              </th>
              <th scope="col">
                <b>Supervisor Name</b>
              </th>
              <th scope="col">
                <b>Research Field</b>
              </th>
              <th scope="col">
                <b>Supervisor Email</b>
              </th>
              <th scope="col">
                <b>Action</b>
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((posts, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>

                <td>{posts.supName}</td>
                <td>{posts.researchFieldT}</td>
                <td>{posts.supervisorEmail}</td>

                <td>
                  <a className="btn btn-success" href={`/addresearchTopic`}>
                    <i className="fas fa-edit"></i>&nbsp;REQUEST
                  </a>
                  &nbsp;
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
