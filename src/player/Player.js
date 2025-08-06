import * as Tone from 'tone';
import { baseUrl, aliases, samples } from './samples';

class Player {
  sampler;
  ready = false;
  
  constructor() {
    this.sampler = new Tone.Sampler({
      urls: samples,
      release: 999999,
      baseUrl: baseUrl,
    }).toDestination();

    this.waitUntilReady(() => this.ready = true);

  }

  async waitUntilReady(handler) {
    if (!this.ready) {
      await Tone.loaded();
    }

    handler && handler();
  }

  async play(sequence) {

    const noteFormatter = e => {
      const note = aliases[e.type];
      const time = e.time * (60 / sequence.bpm);
      
      return { ...e, note, time }
    }

    const intro = sequence.intro.map(noteFormatter);
    const loop = sequence.loop.map(noteFormatter);

    const introLength = sequence.introLength * (60 / sequence.bpm);
    const loopLength = sequence.loopLength * (60 / sequence.bpm);
    
    await this.waitUntilReady();

    for (const beat of intro) {
      this.sampler.triggerAttackRelease(beat.note, 1, this.sampler.now() + beat.time, beat.vol);
    }

    for (const beat of loop) {
      for (let i = 0; i < sequence.repeats; i++) {
        this.sampler.triggerAttackRelease(beat.note, 1, this.sampler.now() + beat.time + introLength + (loopLength * i), beat.vol);
      }
    }
  }
}

export { Player };