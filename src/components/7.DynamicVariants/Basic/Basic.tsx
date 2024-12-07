import { Center } from '@/components/Center';
import { motion } from 'framer-motion';
import React from 'react';
import styles from './Basic.module.scss';

const itemVariants = {
  initial: () => ({
    scale: 0,
    opacity: 0,
    backgroundColor: `hsl(${Math.floor(Math.random() * 360)},80%,50%)`,
  }),
  start: { scale: 1, opacity: 1 },
};

export const Basic: React.FC = () => {
  return (
    <Center>
      <motion.div
        className={styles.container}
        initial='initial'
        animate='start'
        transition={{ delayChildren: 0.1, staggerChildren: 0.1 }}
      >
        {new Array(9).fill(null).map((_, index) => (
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
