import { Transformer } from '../converter';
import { Time } from './time';

/**
 * Scales the time by factor
 * @param factor
 */
export const TimeStretch = (factor: number): Transformer<Time> => {
  const convert = (val: Time): Time => {
    return { time: val.time / factor };
  };

  return { convert };
};
