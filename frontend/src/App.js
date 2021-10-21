import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import GameScoresScreen from './screens/GameScoresScreen';
import HomeScreen from './screens/HomeScreen';
import FreeAgentsScreen from './screens/FreeAgentsScreen';
import TeamDetailsScreen from './screens/TeamDetailsScreen';

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-4 bg'>
        <Container>
          <Route path='/' component={HomeScreen} exact />
          <Route path='/team/:id' component={TeamDetailsScreen} />
          <Route path='/freeagents' component={FreeAgentsScreen} />
          <Route path='/gamescores' component={GameScoresScreen} />
        </Container>
      </main>
    </Router>
  );
};

export default App;
