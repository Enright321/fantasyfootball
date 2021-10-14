import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import TeamDetailsScreen from './screens/TeamDetailsScreen';

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-4 bg'>
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/item/:id' component={TeamDetailsScreen} />
        </Container>
      </main>
    </Router>
  );
};

export default App;
