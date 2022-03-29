// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import {IDetail, IPlayerName, IStatItem} from "components/PlayerHeading";

interface IPlayer {
    playerName: IPlayerName;
    photo: string;
    stats: IStatItem[];
    details: IDetail[];
}

const players: IPlayer[] = [
  {
    playerName: {
      firstName: "Tyrone",
      lastName: "Thompson",
      number: "12",
    },
    photo: "/assets/images/players/tyronethompson.png",
    stats: [
      { attr: "OFF", value: 120 },
      { attr: "AST", value: 98 },
      { attr: "TCK", value: 86 },
      { attr: "TRY", value: 99 },
      { attr: "PAS", value: 85 },
      { attr: "DEF", value: 65 },
    ],
    details: [
        { className: "height", label: "Height", value: "6'5\"" },
        { className: "weight", label: "Weight", value: "111 kg" },
        { className: "age", label: "Age", value: "26" },
        {
          className: "college",
          label: "College",
          value: "Rockbell Bay College",
        },
        {
          className: "born",
          label: "Born",
          value: "Wellington, California. NZ",
        },
        { className: "position", label: "Position", value: "Hooker" },
      ],
  },
  {
    playerName: {
      firstName: "Ollie",
      lastName: "Norris",
      number: "12",
    },
    photo: "/assets/images/players/ollienorris.png",
    stats: [
      { attr: "OFF", value: 40 },
      { attr: "AST", value: 98 },
      { attr: "TCK", value: 67 },
      { attr: "TRY", value: 99 },
      { attr: "PAS", value: 85 },
      { attr: "DEF", value: 40 },
    ],
    details: [
      { className: "height", label: "Height", value: "6'5\"" },
      { className: "weight", label: "Weight", value: "111 kg" },
      { className: "age", label: "Age", value: "22" },
      {
        className: "college",
        label: "College",
        value: "Rockbell Bay College",
      },
      {
        className: "born",
        label: "Born",
        value: "Wellington, California. NZ",
      },
      { className: "position", label: "Position", value: "Prop" },
    ],
  },
  {
    playerName: {
      firstName: "Josh",
      lastName: "Load",
      number: "5",
    },
    photo: "/assets/images/players/joshlord.png",
    stats: [
      { attr: "OFF", value: 40 },
      { attr: "AST", value: 98 },
      { attr: "TCK", value: 67 },
      { attr: "TRY", value: 99 },
      { attr: "PAS", value: 85 },
      { attr: "DEF", value: 40 },
    ],
    details: [
      { className: "height", label: "Height", value: "6'5\"" },
      { className: "weight", label: "Weight", value: "111 kg" },
      { className: "age", label: "Age", value: "22" },
      {
        className: "college",
        label: "College",
        value: "Rockbell Bay College",
      },
      {
        className: "born",
        label: "Born",
        value: "Wellington, California. NZ",
      },
      { className: "position", label: "Position", value: "Lock" },
    ],
  },
  {
    playerName: {
      firstName: "Pita Gus",
      lastName: "Sowakula",
      number: "12",
    },
    photo: "/assets/images/players/pitagussowakula.png",
    stats: [
      { attr: "OFF", value: 40 },
      { attr: "AST", value: 98 },
      { attr: "TCK", value: 67 },
      { attr: "TRY", value: 99 },
      { attr: "PAS", value: 85 },
      { attr: "DEF", value: 40 },
    ],
    details: [
      { className: "height", label: "Height", value: "6'5\"" },
      { className: "weight", label: "Weight", value: "111 kg" },
      { className: "age", label: "Age", value: "22" },
      {
        className: "college",
        label: "College",
        value: "Rockbell Bay College",
      },
      {
        className: "born",
        label: "Born",
        value: "Wellington, California. NZ",
      },
      { className: "position", label: "Position", value: "Loose Forward" },
    ],
  },
  {
    playerName: {
      firstName: "Rivez",
      lastName: "Reihana",
      number: "12",
    },
    photo: "/assets/images/players/rivezreihana.png",
    stats: [
      { attr: "OFF", value: 40 },
      { attr: "AST", value: 98 },
      { attr: "TCK", value: 67 },
      { attr: "TRY", value: 99 },
      { attr: "PAS", value: 85 },
      { attr: "DEF", value: 40 },
    ],
    details: [
      { className: "height", label: "Height", value: "6'5\"" },
      { className: "weight", label: "Weight", value: "111 kg" },
      { className: "age", label: "Age", value: "22" },
      {
        className: "college",
        label: "College",
        value: "Rockbell Bay College",
      },
      {
        className: "born",
        label: "Born",
        value: "Wellington, California. NZ",
      },
      { className: "position", label: "Position", value: "First-Five Eighth" },
    ],
  },
];
type Data = {
  players: IPlayer[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ players })
}
