export const baseUrl = "./samples/";

export const manifest = JSON.parse(await (await fetch(`${baseUrl}/manifest.json`)).text());

export const aliases = {
  metronome: "C1",
  kicker: "D1",
  snare: "E1",
  hihat_closed: "F1"
};

export const samples = {
  C1: manifest.metronome.samples[0],
  D1: manifest.kick.samples[0],
  E1: manifest.snare.samples[0],
  F1: manifest.hi_hat_closed.samples[0],
};