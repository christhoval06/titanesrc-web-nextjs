import styled from "styled-components";

export const StyledPlayerHeading = styled.div`
  background-color: #1e2024;
  background-image: url(/assets/images/page-heading.jpeg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  position: relative;
  overflow: hidden;

  &:before {
    height: 24px;
    background-image: linear-gradient(
        90deg,
        rgba(236, 240, 246, 0.15) 4px,
        transparent 0
      ),
      linear-gradient(90deg, rgba(236, 240, 246, 0.15) 4px, transparent 0),
      linear-gradient(90deg, rgba(236, 240, 246, 0.15) 4px, transparent 0),
      linear-gradient(90deg, rgba(236, 240, 246, 0.15) 4px, transparent 0),
      linear-gradient(90deg, rgba(236, 240, 246, 0.15) 4px, transparent 0),
      linear-gradient(90deg, rgba(236, 240, 246, 0.15) 4px, transparent 0),
      linear-gradient(90deg, rgba(0, 0, 0, 0.1) 4px, transparent 0),
      linear-gradient(90deg, rgba(0, 0, 0, 0.11) 4px, transparent 0);
    background-repeat: repeat-x;
    background-size: 36px 12px, 36px 15px, 36px 17px, 36px 20px, 36px 18px,
      36px 15px, 72px 15px, 108px 18px;
    background-position: 0 100%, 6px 100%, 12px 100%, 18px 100%, 24px 100%,
      30px 100%, 6px 100%, 24px 100%;
  }
  &:after,
  &:before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
  }

  &:after {
    top: 0;
    z-index: 1;
    background-image: url(/assets/images/page-heading-pattern.png);
    background-size: auto;
    background-position: 100% 0;
    background-repeat: no-repeat;
    opacity: 0.4;
  }
  .container {
    position: relative;
    z-index: 2;
  }
`;

export const TeamLogo = styled.div`
  position: absolute;
  left: -45%;
  top: -5%;
  opacity: 0.05;
  z-index: -1;

  @media (min-width: 992px) {
    left: -10%;
    opacity: 0.1;
  }
`;

export  const PlayerInfo = styled.div`
  color: #fff;
  position: relative;
  width: 100%;

  @media (min-width: 992px) {
    display: flex;
  }
`;

export const PlayerPhoto = styled.figure`
  position: relative;
  display: block;
  margin: 0;
  width: 400px;
  height: 400px;

   /* @media (min-width: 992px) { */
     @media (max-width: 991px) {
    width: 300px;
  height: 300px;
  }
`;

export  const PlayerInfoItemCard = styled.div`
  position: relative;
  display: block;
  overflow: hidden;
  margin: 0;
  padding: 0;
  transform: translate3d(0, 0, 0);
`;

export  const PlayerInfoItemCardContent = styled.div`
  position: relative;
  top: 0;
  left: 0;
  display: block;
  opacity: 1;
  width: 15000px;
  transform: translate3d(0px, 0px, 0px);
  &:before,
  &:after {
    display: table;
    content: "";
  }
  &:after {
    clear: both;
  }
`;

export  const PlayerInfoItem = styled.div`
  display: block;
  position: relative;
  float: left;
  height: 100%;
  min-height: 1px;
  outline: none;

  &.photo {
    @media (max-width: 991px) {
      img {
        margin: 0 auto;
      }
    }

    @media (min-width: 992px) {
      -ms-flex-preferred-size: 33%;
      flex-basis: 33%;
      width: 312px;
      margin: 0;
    }

    @media (min-width: 1200px) {
      width: 400px;
    }
  }

  &.details {
    width: 400px;
    @media (min-width: 992px) {
      -ms-flex-preferred-size: 38%;
      flex-basis: 38%;
      padding: 48px 0;
      width: 352px;
    }

    @media (min-width: 992px) and(max-width: 1199px) {
      -ms-flex-preferred-size: 45%;
      flex-basis: 45%;
      padding: 25px 0;
    }

    @media (min-width: 1200px) {
      width: 460px;
    }
  }

  .stats {
    @media (min-width: 992px) {
      -ms-flex-preferred-size: 29%;
      flex-basis: 29%;
      width: 297px;
    }

    @media (min-width: 992px) and(max-width: 1199px) {
      -ms-flex-preferred-size: 36%;
      flex-basis: 36%;
    }

    @media (min-width: 1200px) {
      width: 310px;
    }

    @media (max-width: 991px) {
      height: 200px !important;
    }
  }
`;
