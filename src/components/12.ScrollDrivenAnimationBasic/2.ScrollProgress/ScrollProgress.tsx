import React from 'react';
import styles from './ScrollProgress.module.scss';
import { useScroll, motion, useSpring } from 'framer-motion';
import { LoremIpsum } from '../LoremIpsum';

export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 30,
  });

  return (
    <div>
      <motion.div
        className={styles.progressBar}
        style={{ scaleX, originX: 0 }}
      />
      <LoremIpsum />
    </div>
  );
};
