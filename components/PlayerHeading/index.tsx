import Image from 'next/image'

import {
  PlayerInfo,
  PlayerInfoItem,
  PlayerInfoItemCard,
  PlayerInfoItemCardContent,
  PlayerPhoto,
  StyledPlayerHeading,
  TeamLogo,
} from "./styled-components";

import PlayerDetails, { IDetail } from "./PlayerDetails";
import PlayerCircularStats from "./PlayerCircularStats";
import PlayerTitle, { IPlayerName } from "./PlayerTitle";
import PlayerStats, { IStatItem } from "./PlayerStats";

export * from "./PlayerDetails";
export * from "./PlayerStats";
export * from "./PlayerTitle";

interface Props {
  playerName: IPlayerName;
  photo: string;
  stats: IStatItem[];
  details: IDetail[];
}

const PlayerHeading = ({ playerName, photo, stats, details }: Props) => {
  return (
    <StyledPlayerHeading>
      <div className="container mx-auto">
        <TeamLogo>
          <div style={{ position: 'relative', width: '400px', height: '400px' }}>
            <Image src="/assets/images/logo.png" alt="logo" layout="fill" objectFit="contain" />
            </div>
        </TeamLogo>

        <PlayerTitle className="mobile" {...playerName} />

        <PlayerInfo>
          <PlayerInfoItemCard>
            <PlayerInfoItemCardContent>
                <PlayerInfoItem className="photo" aria-hidden="false">
                <PlayerPhoto>
                  <Image src={photo} alt={`${playerName.firstName} ${playerName.lastName}`} layout="fill" objectFit="contain" />
                  </PlayerPhoto>
                </PlayerInfoItem>
                <PlayerInfoItem className="details" aria-hidden="false">
                  <PlayerTitle {...playerName} />
                  <PlayerDetails data={details} />
                  <PlayerCircularStats />
                </PlayerInfoItem>
                <PlayerInfoItem className="stats" aria-hidden="false">
                  <PlayerStats data={stats} />
                </PlayerInfoItem>
            </PlayerInfoItemCardContent>
          </PlayerInfoItemCard>
        </PlayerInfo>
      </div>
    </StyledPlayerHeading>
  );
};

export default PlayerHeading;
