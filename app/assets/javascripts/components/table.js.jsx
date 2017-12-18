var Table = createReactClass({

  render: function() {
    return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>FIRST NAME</th>
          <th>LAST NAME</th>
          <th>EMAIL</th>
          <th>GENDER</th>
          <th>IP ADDRESS</th>
          <th>DATE OF BIRTH</th>
          <th colspan="3"></th>
        </tr>
      </thead>
    </table>
    );
  }
});
