import styled from "styled-components";

const PlayerInfoNumber = styled.div`
  font-size: 54px;
  text-transform: uppercase;
  font-family: Montserrat, sans-serif;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #fff;
  line-height: 1em;
  display: inline-block;
  vertical-align: middle;

  @media (min-width: 992px) {
    font-size: 64px;
    margin-left: -80px;
  }

  @media (min-width: 1200px) {
    font-size: 92px;
    margin-left: -123px;
    margin-right: 5px;
  }
`;

const PlayerInfoName = styled.h1`
  display: inline-block;
  vertical-align: middle;
  font-size: 32px;
  line-height: 1em;
  color: #fff;
  margin: 0;
  @media (min-width: 992px) {
    font-size: 32px;
  }

  @media (min-width: 1200px) {
    font-size: 54px;
    line-height: 46px;
  }
`;

export const PlayerInfoFirstName = styled.span`
  display: block;
  font-size: 16px;
  line-height: 1em;
  @media (min-width: 992px) {
    font-size: 18px;
  }

  @media (min-width: 1200px) {
    font-size: 26px;
  }
`;

const PlayerInfoLastName = styled.span`
  color: #ffdc11;
`;

export interface IPlayerName {
  firstName: string;
  lastName: string;
  number: string;
}

interface Props extends IPlayerName {}

const PlayerName = ({firstName, lastName, number}: Props) => (
  <>
    <PlayerInfoNumber>{number}</PlayerInfoNumber>
    <PlayerInfoName>
      <PlayerInfoFirstName>{firstName}</PlayerInfoFirstName>{" "}
      <PlayerInfoLastName>{lastName}</PlayerInfoLastName>
    </PlayerInfoName>
  </>
);

export default PlayerName;
