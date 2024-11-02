import styled from 'styled-components';

const Card = styled.div`
  background: radial-gradient(circle, #1d1e4b, #09091c);
  opacity: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-align: center;
  padding: 2rem;
  border: 2px solid #f0f;
  border-radius: 12px;
  box-shadow: 0 0 20px #fffb00;
`;

const Heading = styled.h1`
  font-size: 3rem;
  color: #fff;
  text-shadow: 0 0 10px #fffb00, 0 0 20px #fffb00, 0 0 30px #fffb00;
`;

const Message = styled.p`
  font-size: 1.5rem;
  margin-top: 1rem;
  color: #fffb00;
  text-shadow: 0 0 10px #fff, 0 0 20px #fff;
`;



const GreetingCard = ({onHandle}) => {
  return (
    <Card onClick={onHandle}>
      <Heading>Happy Diwali <h3 style={{
        fontSize: '2rem',
        color: 'red',
        }}>From Saroj</h3></Heading>
      <Message>Wishing you joy, prosperity, and happiness!</Message>
      <p style={{color : 'red'}}>Hey touch me....</p>
    </Card>
  );
};

export default GreetingCard;
