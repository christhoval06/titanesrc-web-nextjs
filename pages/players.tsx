import { useQuery } from "react-query";
import axios from "axios";

import Layout from '../components/Layout/Layout'


import PlayerHeading, {IDetail, IPlayerName, IStatItem} from "components/PlayerHeading";

interface IPlayer {
    playerName: IPlayerName;
    photo: string;
    stats: IStatItem[];
    details: IDetail[];
}

type Data = {
  players: IPlayer[];
}


const fetchPlayers = () =>
  axios
    .get('/api/players')
    .then(({ data }) => data);


export default function Players() {

  const { isSuccess, data, isLoading, isError } = useQuery<Data>(
    ["getPlayers"],
    () => fetchPlayers(),
    {enabled: true}
  );

  if (isLoading) {
    return <div className="center">Loading...</div>;
  }

  if (isError) {
      return <div className="search-message">Something went wrong</div>;
  }
  
  if (isSuccess) {
    return (
      <Layout title="Home | Next.js + TypeScript Example">
        <h1>Players</h1>
        <section>
          {data?.players.map(({ playerName, photo, stats, details }, index) => (
            <PlayerHeading
              key={`player-${index}`}
              playerName={playerName}
              photo={photo}
              stats={stats}
              details={details}
            />
          ))}
        </section>
      </Layout>
    );
  }
  
  return <></>
}
