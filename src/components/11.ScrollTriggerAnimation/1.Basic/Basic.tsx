import React from 'react';
import { motion } from 'framer-motion';
import styles from './Basic.module.scss';

export const Basic: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.placeholder} />
      <motion.div
        whileInView={{ borderRadius: '100%' }}
        initial={{ borderRadius: '5%' }}
        animate={{ borderRadius: '5%' }}
        viewport={{ amount: 0.5 }}
        className={styles.motionBox}
      />
      <div className={styles.placeholder} />
    </div>
  );
};
