import { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';

const TeamDetailsScreen = ({ match }) => {
  const [teamStats, setTeamStats] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data } = await axios.get('/api/teamRanks');
      setTeamStats(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  const urlMatch = window.location.href;
  const urlId = parseInt(urlMatch.split('/')[4]);

  return (
    <>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        teamStats.map(
          (teamStat) =>
            urlId === teamStat.id && (
              <div>
                <ul>
                  <li>
                    ({teamStat.abbreviation}) {teamStat.name}
                  </li>
                  <li>Rank: {teamStat.playoffSeed}</li>
                  <li>
                    Points For: {teamStat.totalPointsScored.toFixed(2)} Points
                    Against: {teamStat.regularSeasonPointsAgainst.toFixed(2)}
                  </li>
                  <li>
                    Record: {teamStat.wins} - {teamStat.losses} -{' '}
                    {teamStat.ties}
                  </li>
                  <li>Win Percentage: {teamStat.winningPercentage}%</li>
                </ul>
                <h2>Roster</h2>
                <Table striped bordered hover variant='dark' responsive>
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
                      <td>{teamStat.roster[0].fullName}</td>
                      <td>{teamStat.roster[0].proTeamAbbreviation}</td>
                      <td>{teamStat.roster[0].defaultPosition}</td>
                      <td>
                        {teamStat.roster[0].averageDraftPosition.toFixed(2)}
                      </td>
                      <td>{teamStat.roster[0].percentChange.toFixed(2)}</td>
                      <td>{teamStat.roster[0].percentOwned.toFixed(2)}</td>
                      <td>{teamStat.roster[0].percentStarted.toFixed(2)}</td>
                      <td>{teamStat.roster[0].injuryStatus}</td>
                    </tr>
                    <tr>
                      <td>{teamStat.roster[1].fullName}</td>
                      <td>{teamStat.roster[1].proTeamAbbreviation}</td>
                      <td>{teamStat.roster[1].defaultPosition}</td>
                      <td>
                        {teamStat.roster[1].averageDraftPosition.toFixed(2)}
                      </td>
                      <td>{teamStat.roster[1].percentChange.toFixed(2)}</td>
                      <td>{teamStat.roster[1].percentOwned.toFixed(2)}</td>
                      <td>{teamStat.roster[1].percentStarted.toFixed(2)}</td>
                      <td>{teamStat.roster[1].injuryStatus}</td>
                    </tr>
                    <tr>
                      <td>{teamStat.roster[2].fullName}</td>
                      <td>{teamStat.roster[2].proTeamAbbreviation}</td>
                      <td>{teamStat.roster[2].defaultPosition}</td>
                      <td>
                        {teamStat.roster[2].averageDraftPosition.toFixed(2)}
                      </td>
                      <td>{teamStat.roster[2].percentChange.toFixed(2)}</td>
                      <td>{teamStat.roster[2].percentOwned.toFixed(2)}</td>
                      <td>{teamStat.roster[2].percentStarted.toFixed(2)}</td>
                      <td>{teamStat.roster[2].injuryStatus}</td>
                    </tr>
                    <tr>
                      <td>{teamStat.roster[3].fullName}</td>
                      <td>{teamStat.roster[3].proTeamAbbreviation}</td>
                      <td>{teamStat.roster[3].defaultPosition}</td>
                      <td>
                        {teamStat.roster[3].averageDraftPosition.toFixed(2)}
                      </td>
                      <td>{teamStat.roster[3].percentChange.toFixed(2)}</td>
                      <td>{teamStat.roster[3].percentOwned.toFixed(2)}</td>
                      <td>{teamStat.roster[3].percentStarted.toFixed(2)}</td>
                      <td>{teamStat.roster[3].injuryStatus}</td>
                    </tr>
                    <tr>
                      <td>{teamStat.roster[4].fullName}</td>
                      <td>{teamStat.roster[4].proTeamAbbreviation}</td>
                      <td>{teamStat.roster[4].defaultPosition}</td>
                      <td>
                        {teamStat.roster[4].averageDraftPosition.toFixed(2)}
                      </td>
                      <td>{teamStat.roster[4].percentChange.toFixed(2)}</td>
                      <td>{teamStat.roster[4].percentOwned.toFixed(2)}</td>
                      <td>{teamStat.roster[4].percentStarted.toFixed(2)}</td>
                      <td>{teamStat.roster[4].injuryStatus}</td>
                    </tr>
                    <tr>
                      <td>{teamStat.roster[5].fullName}</td>
                      <td>{teamStat.roster[5].proTeamAbbreviation}</td>
                      <td>{teamStat.roster[5].defaultPosition}</td>
                      <td>
                        {teamStat.roster[5].averageDraftPosition.toFixed(2)}
                      </td>
                      <td>{teamStat.roster[5].percentChange.toFixed(2)}</td>
                      <td>{teamStat.roster[5].percentOwned.toFixed(2)}</td>
                      <td>{teamStat.roster[5].percentStarted.toFixed(2)}</td>
                      <td>{teamStat.roster[5].injuryStatus}</td>
                    </tr>
                    <tr>
                      <td>{teamStat.roster[6].fullName}</td>
                      <td>{teamStat.roster[6].proTeamAbbreviation}</td>
                      <td>{teamStat.roster[6].defaultPosition}</td>
                      <td>
                        {teamStat.roster[6].averageDraftPosition.toFixed(2)}
                      </td>
                      <td>{teamStat.roster[6].percentChange.toFixed(2)}</td>
                      <td>{teamStat.roster[6].percentOwned.toFixed(2)}</td>
                      <td>{teamStat.roster[6].percentStarted.toFixed(2)}</td>
                      <td>{teamStat.roster[6].injuryStatus}</td>
                    </tr>
                    <tr>
                      <td>{teamStat.roster[7].fullName}</td>
                      <td>{teamStat.roster[7].proTeamAbbreviation}</td>
                      <td>{teamStat.roster[7].defaultPosition}</td>
                      <td>
                        {teamStat.roster[7].averageDraftPosition.toFixed(2)}
                      </td>
                      <td>{teamStat.roster[7].percentChange.toFixed(2)}</td>
                      <td>{teamStat.roster[7].percentOwned.toFixed(2)}</td>
                      <td>{teamStat.roster[7].percentStarted.toFixed(2)}</td>
                      <td>{teamStat.roster[7].injuryStatus}</td>
                    </tr>
                    <tr>
                      <td>{teamStat.roster[8].fullName}</td>
                      <td>{teamStat.roster[8].proTeamAbbreviation}</td>
                      <td>{teamStat.roster[8].defaultPosition}</td>
                      <td>
                        {teamStat.roster[8].averageDraftPosition.toFixed(2)}
                      </td>
                      <td>{teamStat.roster[8].percentChange.toFixed(2)}</td>
                      <td>{teamStat.roster[8].percentOwned.toFixed(2)}</td>
                      <td>{teamStat.roster[8].percentStarted.toFixed(2)}</td>
                      <td>{teamStat.roster[8].injuryStatus}</td>
                    </tr>
                    <tr>
                      <td>{teamStat.roster[9].fullName}</td>
                      <td>{teamStat.roster[9].proTeamAbbreviation}</td>
                      <td>{teamStat.roster[9].defaultPosition}</td>
                      <td>
                        {teamStat.roster[9].averageDraftPosition.toFixed(2)}
                      </td>
                      <td>{teamStat.roster[9].percentChange.toFixed(2)}</td>
                      <td>{teamStat.roster[9].percentOwned.toFixed(2)}</td>
                      <td>{teamStat.roster[9].percentStarted.toFixed(2)}</td>
                      <td>{teamStat.roster[9].injuryStatus}</td>
                    </tr>
                    <tr>
                      <td>{teamStat.roster[10].fullName}</td>
                      <td>{teamStat.roster[10].proTeamAbbreviation}</td>
                      <td>{teamStat.roster[10].defaultPosition}</td>
                      <td>
                        {teamStat.roster[10].averageDraftPosition.toFixed(2)}
                      </td>
                      <td>{teamStat.roster[10].percentChange.toFixed(2)}</td>
                      <td>{teamStat.roster[10].percentOwned.toFixed(2)}</td>
                      <td>{teamStat.roster[10].percentStarted.toFixed(2)}</td>
                      <td>{teamStat.roster[10].injuryStatus}</td>
                    </tr>
                    <tr>
                      <td>{teamStat.roster[11].fullName}</td>
                      <td>{teamStat.roster[11].proTeamAbbreviation}</td>
                      <td>{teamStat.roster[11].defaultPosition}</td>
                      <td>
                        {teamStat.roster[11].averageDraftPosition.toFixed(2)}
                      </td>
                      <td>{teamStat.roster[11].percentChange.toFixed(2)}</td>
                      <td>{teamStat.roster[11].percentOwned.toFixed(2)}</td>
                      <td>{teamStat.roster[11].percentStarted.toFixed(2)}</td>
                      <td>{teamStat.roster[11].injuryStatus}</td>
                    </tr>
                    <tr>
                      <td>{teamStat.roster[12].fullName}</td>
                      <td>{teamStat.roster[12].proTeamAbbreviation}</td>
                      <td>{teamStat.roster[12].defaultPosition}</td>
                      <td>
                        {teamStat.roster[12].averageDraftPosition.toFixed(2)}
                      </td>
                      <td>{teamStat.roster[12].percentChange.toFixed(2)}</td>
                      <td>{teamStat.roster[12].percentOwned.toFixed(2)}</td>
                      <td>{teamStat.roster[12].percentStarted.toFixed(2)}</td>
                      <td>{teamStat.roster[12].injuryStatus}</td>
                    </tr>
                    <tr>
                      <td>{teamStat.roster[13].fullName}</td>
                      <td>{teamStat.roster[13].proTeamAbbreviation}</td>
                      <td>{teamStat.roster[13].defaultPosition}</td>
                      <td>
                        {teamStat.roster[13].averageDraftPosition.toFixed(2)}
                      </td>
                      <td>{teamStat.roster[13].percentChange.toFixed(2)}</td>
                      <td>{teamStat.roster[13].percentOwned.toFixed(2)}</td>
                      <td>{teamStat.roster[13].percentStarted.toFixed(2)}</td>
                      <td>{teamStat.roster[13].injuryStatus}</td>
                    </tr>
                    <tr>
                      <td>{teamStat.roster[14].fullName}</td>
                      <td>{teamStat.roster[14].proTeamAbbreviation}</td>
                      <td>{teamStat.roster[14].defaultPosition}</td>
                      <td>
                        {teamStat.roster[14].averageDraftPosition.toFixed(2)}
                      </td>
                      <td>{teamStat.roster[14].percentChange.toFixed(2)}</td>
                      <td>{teamStat.roster[14].percentOwned.toFixed(2)}</td>
                      <td>{teamStat.roster[14].percentStarted.toFixed(2)}</td>
                      <td>{teamStat.roster[14].injuryStatus}</td>
                    </tr>
                    <tr>
                      <td>{teamStat.roster[15].fullName}</td>
                      <td>{teamStat.roster[15].proTeamAbbreviation}</td>
                      <td>{teamStat.roster[15].defaultPosition}</td>
                      <td>
                        {teamStat.roster[15].averageDraftPosition.toFixed(2)}
                      </td>
                      <td>{teamStat.roster[15].percentChange.toFixed(2)}</td>
                      <td>{teamStat.roster[15].percentOwned.toFixed(2)}</td>
                      <td>{teamStat.roster[15].percentStarted.toFixed(2)}</td>
                      <td>{teamStat.roster[15].injuryStatus}</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            )
        )
      )}
    </>
  );
};

export default TeamDetailsScreen;
