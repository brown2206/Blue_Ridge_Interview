class Candidates extends React.Component {
  render () {
    return (
      <div>
      {this.props.candidates.map(function(x){
        return(
            <p key={x.id}> {x.id} {x.first_name} </p>
        )
      })}
      </div>
    );
  }
}
