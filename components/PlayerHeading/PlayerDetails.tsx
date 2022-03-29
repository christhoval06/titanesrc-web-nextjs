import styled from "styled-components";

const PlayerInfoDetails = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 991px) {
    padding: 0 17px;
  }
`;

const PlayerInfoDetailsItem = styled.div`
  padding: 10px 0;

  &.height {
    -ms-flex-preferred-size: 33%;
    flex-basis: 33%;

    @media (min-width: 992px) {
      -ms-flex-preferred-size: 19%;
      flex-basis: 19%;
    }
  }

  &.weight {
    -ms-flex-preferred-size: 33%;
    flex-basis: 33%;

    @media (min-width: 992px) {
      -ms-flex-preferred-size: 24%;
      flex-basis: 24%;
    }
  }

  &.age {
    -ms-flex-preferred-size: 33%;
    flex-basis: 33%;

    @media (min-width: 992px) {
      -ms-flex-preferred-size: 15%;
      flex-basis: 15%;
    }
  }

  &.college {
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;

    @media (min-width: 992px) {
      -ms-flex-preferred-size: 42%;
      flex-basis: 42%;
    }
  }

  &.born {
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;

    @media (min-width: 992px) {
      -ms-flex-preferred-size: 58%;
      flex-basis: 58%;
    }
  }

  &.position {
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;

    @media (min-width: 992px) {
      -ms-flex-preferred-size: 42%;
      flex-basis: 42%;
    }
  }
`;

const PlayerInfoDetailsTitle = styled.h6`
  font-size: 10px;
  color: #9a9da2;
  line-height: 1.2em;
  margin-bottom: 0.1em;
  font-weight: 400;
`;

const PlayerInfoDetailsValue = styled.div`
  font-family: Montserrat, sans-serif;
  font-size: 15px;
  line-height: 1.2em;
  font-weight: 700;

  @media (min-width: 992px) and(max-width: 1199px) {
    font-size: 12px;
  }
`;

interface PlayerDetailItemProps {
  className: string;
  label: string;
  value: string;
}

const PlayerDetailItem = ({
  className,
  label,
  value,
}: PlayerDetailItemProps) => (
  <PlayerInfoDetailsItem className={className}>
    <PlayerInfoDetailsTitle>{label}</PlayerInfoDetailsTitle>
    <PlayerInfoDetailsValue>{value}</PlayerInfoDetailsValue>
  </PlayerInfoDetailsItem>
);

export interface IDetail {
  className: 'height'|'weight'|'age'|'college'|'born'|'position';
  label: string;
  value: string;
}

interface Props {
  data: IDetail[];
}

const PlayerDetail = ({data}: Props) => {
  return (
    <PlayerInfoDetails>
      {data.map((item, index) => (<PlayerDetailItem key={`detail--${index}`} {...item} />))}
    </PlayerInfoDetails>
  );
};

export default PlayerDetail;
