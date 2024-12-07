import { motion } from 'framer-motion';
import React from 'react';
import styles from './Propagation.module.scss';
import { Center } from '@/components/Center';

const parentVariants = {
  start: { rotate: 180, borderRadius: '30px' },
  hoverState: { borderRadius: '75px' },
  tapState: { backgroundColor: '#ffd700' },
};

const childVariants = {
  start: { rotate: -180 },
  hoverState: { borderRadius: '30px' },
  tapState: { backgroundColor: '#f00' },
};

export const Propagation: React.FC = () => {
  return (
    <Center>
      <motion.div
        className={styles.parent}
        variants={parentVariants}
        animate='start'
        whileHover='hoverState'
        whileTap='tapState'
      >
        <motion.div className={styles.child} variants={childVariants} />
      </motion.div>
    </Center>
  );
};
