class Candidates extends React.Component {
  render () {
    return (
      <div>
        <thead>
          <tr>
            <th>ID</th>
            <th>FIRST NAME</th>
            <th>LAST NAME</th>
            <th>EMAIL</th>
            <th>GENDER</th>
            <th>IP ADDRESS</th>
            <th>DATE OF BIRTH</th>
            <th colspan="20"></th>
          </tr>
        </thead>
      {this.props.candidates.map(function(x){
        return(
          <tbody>
            <tr key={x.id}>
              <td>{x.id}</td>
              <td>{x.first_name}</td>
              <td>{x.last_name}</td>
              <td>{x.email}</td>
              <td>{x.gender}</td>
              <td>{x.ip_address}</td>
              <td>{x.date_of_birth}</td>
            </tr>
          </tbody>
        )
      })}
      </div>
    );
  }
}
