import {
  Radar,
  RadarChart,
  Legend,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";
import styled from "styled-components";

export interface IStatItem {
  attr: string;
  value: number;
}

const StyledStats = styled.div`
  svg text {
    text-transform: uppercase;
    font-family: Montserrat, sans-serif;
    font-weight: 400;
    font-size: 10px;
  }
`;

interface Props {
  data: IStatItem[];
}

const PlayerStats = ({ data }: Props) => (
  <StyledStats>
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart
        cx="50%"
        cy="50%"
        outerRadius={120}
        width={400}
        height={400}
        data={data}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="attr" tick={{ fill: "white", fontSize: 5 }} />
        <Radar
          name="Mike"
          dataKey="value"
          stroke="#ffdc11"
          fill="#ffdc11"
          fillOpacity={0.9}
        />
      </RadarChart>
    </ResponsiveContainer>
    {/* <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}> */}
    <RadarChart
      cx="50%"
      cy="50%"
      outerRadius={120}
      width={400}
      height={400}
      data={data}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="attr" tick={{ fill: "white" }} />
      <Radar
        name="Mike"
        dataKey="value"
        stroke="#ffdc11"
        fill="#ffdc11"
        fillOpacity={0.9}
      />
    </RadarChart>
  </StyledStats>
);

export default PlayerStats;
