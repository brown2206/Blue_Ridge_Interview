class Candidates extends React.Component {
  render () {
    return (
      <div id="page-wrap">
        <thead>
          <tr>
            <th>ID </th>
            <th>FIRST NAME </th>
            <th>LAST NAME </th>
            <th>EMAIL </th>
            <th>GENDER </th>
            <th>IP ADDRESS </th>
            <th>DATE OF BIRTH </th>
            <th colspan="20"></th>
          </tr>
        </thead>
      {this.props.candidates.map(function(x){
        return(
          <tbody>
            <tr key={x.id}>
              <td><a href={"/candidates/"+ x.id}>{x.id}</a></td>
              <td><a href={"/candidates/"+ x.id}>{x.first_name}</a></td>
              <td><a href={"/candidates/"+ x.id}>{x.last_name}</a></td>
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
