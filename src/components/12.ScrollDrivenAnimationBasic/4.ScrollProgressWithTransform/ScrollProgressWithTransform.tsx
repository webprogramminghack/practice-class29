import React from 'react';
import styles from './ScrollProgressWithTransform.module.scss';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { LoremIpsum } from '../LoremIpsum';

export const ScrollProgressWithTransform: React.FC = () => {
  const { scrollYProgress } = useScroll();

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    ['#ff008c', '#7928ca']
  );

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 30,
  });

  return (
    <div>
      <motion.div
        className={styles.progressBar}
        style={{ scaleX, originX: 0, backgroundColor }}
      />
      <LoremIpsum />
    </div>
  );
};
