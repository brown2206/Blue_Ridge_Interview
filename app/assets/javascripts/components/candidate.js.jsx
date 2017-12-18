var Candidate = createReactClass({
  handleDelete(id) {
    this.props.handleDelete(id);
  },

  render: function() {
    return (
    <div>
      <p><b>ID:</b> {this.props.candidate.id}</p>
      <p><b>FIRST NAME:</b> {this.props.candidate.first_name}</p>
      <p><b>LAST NAME:</b> {this.props.candidate.last_name}</p>
      <p><b>EMAIL:</b> {this.props.candidate.email}</p>
      <p><b>GENDER:</b> {this.props.candidate.gender}</p>
      <p><b>IP ADDRESS:</b> {this.props.candidate.ip_address}</p>
      <p><b>DOB:</b> {this.props.candidate.date_of_birth}</p>
    </div>
    );
  }
});
