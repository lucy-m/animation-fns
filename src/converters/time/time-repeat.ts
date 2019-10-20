import { Transformer } from '../converter';
import { Time } from './time';

export const TimeRepeat = (start: number, end: number): Transformer<Time> => {
  if (end <= start) {
    throw Error('For TimeRepeat pipe, end must be after start');
  }

  const convert = (val: Time): Time => {
    const intervalSize = end - start;
    if (val.time < start) {
      return val;
    }
    const newTime = ((val.time - start) % intervalSize) + start;

    return { time: newTime };
  };

  return { convert };
};
