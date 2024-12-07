import { motion, Variants } from 'framer-motion';
import React from 'react';
import styles from './Staggering.module.scss';
import { Center } from '@/components/Center';

const containerVariants: Variants = {
  initial: { skewX: -10, opacity: 0 },
  // jangan pakai opacity 0 kalau pakai staggerChildren
  // initial: { skewX: -10 },
  start: { skewX: 0, opacity: 1 },
  hoverState: { scale: 1.05 },
};

const itemVariants: Variants = {
  initial: { x: 50, opacity: 0, backgroundColor: '#fa2' },
  start: { x: 0, opacity: 1 },
  tapState: { backgroundColor: '#f00' },
};

export const Staggering: React.FC = () => {
  return (
    <Center>
      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial='initial'
        animate='start'
        whileHover='hoverState'
        whileTap='tapState'
        transition={{
          delayChildren: 0.2,
          staggerChildren: 0.2,
          staggerDirection: 0.2,
          when: 'afterChildren',
          delay: 1,
        }}
      >
        {new Array(4).fill(0).map((_, index) => (
          <motion.div
            className={styles.item}
            variants={itemVariants}
            key={index}
          />
        ))}
      </motion.div>
    </Center>
  );
};
