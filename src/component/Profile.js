import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function profile ({profile}){
    return(
        <Card style={{ width: '18rem' }} className='col-md-4'>
<Card.Img variant="top" src={profile.img} />
<Card.Body>
  <Card.Title>{profile.name}</Card.Title>
  <Card.Text>
    {profile.desc}
  </Card.Text>
  <a variant="primary" href={profile.link} target='blank'>
  <Button>{profile.btn}</Button></a>
</Card.Body>
</Card>
    );
}
export default profile;