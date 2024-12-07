import React from 'react';
import styles from './Staggering.module.scss';
import { motion } from 'framer-motion';

export const Staggering: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.centerText}>Scroll down :</div>
      <motion.div
        variants={{
          inView: {
            transition: { staggerChildren: 0.1 },
          },
          outOfView: {
            transition: { staggerChildren: 0.1, staggerDirection: -1 },
          },
        }}
        whileInView='inView'
        initial='outOfView'
        animate='outOfView'
        viewport={{ amount: 1 }}
        className={styles.grid}
      >
        {new Array(4).fill(null).map((i) => (
          <motion.div
            key={i}
            variants={{
              inView: {
                opacity: 1,
                x: 0,
              },
              outOfView: {
                opacity: 0,
                x: -30,
              },
            }}
            className={styles.card}
          />
        ))}
      </motion.div>
      <div className={styles.centerText}>Scroll up</div>
    </div>
  );
};
