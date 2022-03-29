import styled from "styled-components";

import PlayerName, { PlayerInfoFirstName, IPlayerName } from "./PlayerName";

export * from "./PlayerName";

const PlayerInfoTitle = styled.div`
  margin-bottom: 17px;

  &.mobile {
    padding: 35px 0 0;
    text-align: center;
    display:none;

    @media (max-width: 991px) {
      display: block;
    }

    ${PlayerInfoFirstName} {
      text-align: left;
    }
  }

  &.desktop {
    display: none;
    @media (min-width: 992px) {
      display: block;
    }
  }
`;

interface Props extends IPlayerName {
  className?: "desktop" | "mobile";
}
const PlayerTitle = ({ className = "desktop", ...props }: Props) => {
  return (
    <PlayerInfoTitle className={className}>
      <PlayerName {...props} />
    </PlayerInfoTitle>
  );
};

export default PlayerTitle;
