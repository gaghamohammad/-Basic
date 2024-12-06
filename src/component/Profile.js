import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function profile (){
    return(
        <Card style={{ width: '18rem' }} className='col-md-4'>
<Card.Img variant="top" src="https://avatars.githubusercontent.com/u/185525438?v=4" />
<Card.Body>
  <Card.Title>mohammad</Card.Title>
  <Card.Text>
    I am studying in BCA..
  </Card.Text>
  <a variant="primary" href='https://github.com/gaghamohammad' target='_blank'>
  <Button>Open Profile</Button></a>
</Card.Body>
</Card>
    );
}
export default profile;