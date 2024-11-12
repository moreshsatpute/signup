

import { Container, Button } from 'react-bootstrap';

function HomePage() {
  return (
    <Container className="mt-5">
      <div className="text-center bg-primary text-white">
        <h1>Welcome to MyApp!</h1>
        <p className="lead">
          Discover our amazing features and enjoy a seamless experience.
        </p>
        <Button variant="light" href="/login">Get Started</Button>
      </div>
    </Container>
  );
}

export default HomePage;
