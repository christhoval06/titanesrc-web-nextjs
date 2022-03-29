import "react-circular-progressbar/dist/styles.css";
import styled from "styled-components";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";

const Circular = styled.div`
  margin: 10px 0;

  @media (min-width: 992px) {
    margin: 0;
  }
`;

const CircularBar = styled.div`
  width: 62px;
  height: 62px;

  @media (min-width: 992px) {
    display: inline-block;
    vertical-align: middle;
    margin: 0 6px 0 0;
  }

  @media (min-width: 992px) and(max-width: 1199px) {
    width: 44px;
    height: 44px;
  }
`;

const CircularPercents = styled.span`
  font-size: 12px;
  text-transform: uppercase;
  font-family: Montserrat, sans-serif;
  font-weight: 700;
  letter-spacing: -0.02em;
  display: block;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #31404b;
  line-height: 1.2em;
  color: #fff;
  font-size: 15px;

  small {
    display: block;
    font-size: 8px;
    line-height: 1.2em;
    color: #9a9da2;
  }

  @media (min-width: 992px) and(max-width: 1199px) {
    font-size: 12px;
  }
`;

const CircularLabel = styled.div`
  color: #9a9da2;
  display: block;
  font-size: 8px;
  text-transform: uppercase;
  font-family: Montserrat, sans-serif;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.2em;
  text-align: center;

  @media (min-width: 992px) {
    display: inline-block;
    vertical-align: middle;
    text-align: left;
    margin: 0;
  }

  strong {
    color: #fff;
    display: block;
  }

  @media (min-width: 992px) and(max-width: 1199px) {
    font-size: 9px;
  }
`;

interface Props {
  value: number;
  trailColor?: string;
  pathColor?: string;
  children: React.ReactNode;
  label: React.ReactNode;
}
const CircularStat = ({
  value,
  label,
  children,
  trailColor = "#4c5d6f",
  pathColor = "#ffdc11",
}: Props) => {
  return (
    <Circular>
      <CircularBar>
        <CircularProgressbarWithChildren
          value={value}
          styles={{
            path: { stroke: pathColor },
            trail: { stroke: trailColor },
          }}
        >
          <CircularPercents>
            {children}
          </CircularPercents>
        </CircularProgressbarWithChildren>
      </CircularBar>
      <CircularLabel>
        {label}
      </CircularLabel>
    </Circular>
  );
};

export default CircularStat;
