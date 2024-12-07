import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './ScaleCorrection.module.scss';
import clsx from 'clsx';
import { Center } from '@/components/Center';

export const ScaleCorrection: React.FC = () => {
  const [big, setBig] = useState(false);

  // When you tap the parent, it immediately assumes its final form and then resizes. The child is scaled along with it, which makes it initially too big or too small.
  return (
    <Center>
      <motion.div
        className={clsx(styles.parent, big ? styles.big : styles.small)}
        layout
        transition={{ duration: 1 }}
        onClick={() => setBig(!big)}
      >
        <div className={styles.child}></div>
        <motion.div className={styles.child} layout />
      </motion.div>
    </Center>
  );
};
