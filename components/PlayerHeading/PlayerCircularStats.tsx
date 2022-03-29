import styled from "styled-components";

import CircularStat from "./CircularStat";

const PlayerInfoStats = styled.div`
  overflow: hidden;

  @media (min-width: 992px) {
    padding: 25px 0 0;
  }
`;

const PlayerInfoStatsItem = styled.div`
  float: left;
  width: 33.3%;
`;

interface Props {

}

const PlayerCircularStats = () => {
  return (
    <PlayerInfoStats>
      <PlayerInfoStatsItem>
        <CircularStat
          value={60}
          label={
            <>
              <strong>Points</strong> per game
            </>
          }
        >
          2.6<small>avg</small>
        </CircularStat>
      </PlayerInfoStatsItem>
      <PlayerInfoStatsItem>
        <CircularStat
          value={75}
          label={
            <>
              <strong>Pass</strong> per game
            </>
          }
        >
          4.5<small>avg</small>
        </CircularStat>
      </PlayerInfoStatsItem>
      <PlayerInfoStatsItem>
        <CircularStat
          value={80}
          label={
            <>
              <strong>Tackle</strong> per game
            </>
          }
        >
          6.8<small>avg</small>
        </CircularStat>
      </PlayerInfoStatsItem>
    </PlayerInfoStats>
  );
};

export default PlayerCircularStats;
