import clap from './sounds/clap.wav';
import hihat from './sounds/hihat.wav';
import kick from './sounds/kick.wav';
import openhat from './sounds/openhat.wav';
import boom from './sounds/boom.wav';
import ride from './sounds/ride.wav';
import snare from './sounds/snare.wav';
// import tom from './sounds/tom.wav';
// import tink from './sounds/tink.wav';


// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    key: "65",
    letter: "A",
    sound: "clap",
    audio: clap
  },
  {
    key: "83",
    letter: "S",
    sound: "hihat",
    audio: hihat
  },
  {
    key: "68",
    letter: "D",
    sound: "kick",
    audio: kick
  },
  {
    key: "70",
    letter: "F",
    sound: "openhat",
    audio: openhat
  },
  {
    key: "71",
    letter: "G",
    sound: "boom",
    audio: boom
  },
  {
    key: "72",
    letter: "H",
    sound: "ride",
    audio: ride,
  },
  {
    key: "74",
    letter: "J",
    sound: "snare",
    audio: snare
  }
]