import react from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import teamRanks from '../teamRanks.json';

const TeamDetailsScreen = ({ match }) => {
  const item = teamRanks.find((p) => p.id === match.params.id);

  return (
    <div>
      {Object.values(teamRanks).map((item) => (
        <div>
          <h1>{item.name}</h1>
          {Object.values(item.roster).map((i) => (
            <Table striped bordered hover variant='dark'>
              <thead>
                <tr>
                  <th>Player</th>
                  <th>Team</th>
                  <th>Position</th>
                  <th>Average Draft Position</th>
                  <th>Percent Change</th>
                  <th>Percent Owned</th>
                  <th>Percent Started</th>
                  <th>Injury Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{i.fullName}</td>
                  <td>{i.proTeamAbbreviation}</td>
                  <td>{i.defaultPosition}</td>
                  <td>{i.averageDraftPosition.toFixed(2)}</td>
                  <td>{i.percentChange.toFixed(2)}</td>
                  <td>{i.percentOwned.toFixed(2)}</td>
                  <td>{i.percentStarted.toFixed(2)}</td>
                  <td>{i.injuryStatus}</td>
                </tr>
              </tbody>
            </Table>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TeamDetailsScreen;
