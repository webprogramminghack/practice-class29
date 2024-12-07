import { useScroll, motion } from 'framer-motion';
import React from 'react';
import styles from './SVGPathAnimation.module.scss';
import { LoremIpsum } from '../LoremIpsum';

export const SVGPathAnimation: React.FC = () => {
  const { scrollYProgress } = useScroll();

  return (
    <div>
      <div className={styles.progressCircle}>
        <svg xmlns='http://www.w3.org/2000/svg' width='56' height='56'>
          <motion.path
            d='M 28 5 C 40.703 5 51 15.297 51 28 C 51 40.703 40.703 51 28 51 C 15.297 51 5 40.703 5 28 C 5 15.297 15.297 5 28 5 Z'
            fill='transparent'
            strokeWidth='2.05'
            stroke='#70f'
            strokeLinecap='round'
            style={{ pathLength: scrollYProgress }}
          />
        </svg>
      </div>
      <LoremIpsum />
    </div>
  );
};
