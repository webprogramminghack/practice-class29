import { Center } from '@/components/Center';
import { delay, motion, Variants } from 'framer-motion';
import React from 'react';
import styles from './CustomProperty.module.scss';

const childVariants: Variants = {
  initial: () => ({
    scale: 0,
    opacity: 0,
    backgroundColor: `hsl(${Math.floor(Math.random() * 360)},80%,50%)`,
  }),
  start: (custom) => {
    console.log('custom :>> ', custom);
    return {
      scale: 1,
      opacity: 1,
      transition: {
        delay: custom,
      },
    };
  },
};

class DelayGroup {
  indexes: number[];
  delay: number;

  constructor(indexes: number[], delay: number) {
    this.indexes = indexes;
    this.delay = delay;
  }

  includes(index: number): number {
    return this.indexes.includes(index) ? this.delay : 0;
  }
}

const innerSide = new DelayGroup([1, 3, 5, 7], 0.2);
const outerSide = new DelayGroup([0, 2, 6, 8], 0.5);
const center = new DelayGroup([4], 1);

const getDelay = (index: number) => {
  if (innerSide.includes(index)) return innerSide.delay;
  if (outerSide.includes(index)) return outerSide.delay;
  if (center.includes(index)) return center.delay;
};

export const CustomProperty: React.FC = () => {
  return (
    <Center>
      <motion.div
        className={styles.container}
        initial='initial'
        animate='start'
      >
        {new Array(9).fill(null).map((_, index) => (
          <motion.div
            key={index}
            className={styles.item}
            variants={childVariants}
            custom={getDelay(index)}
          />
        ))}
      </motion.div>
    </Center>
  );
};
