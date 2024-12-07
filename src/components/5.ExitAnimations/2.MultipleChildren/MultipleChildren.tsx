import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Center } from '@/components/Center';
import styles from './MultipleChildren.module.scss';
import clsx from 'clsx';

export const MultipleChildren: React.FC = () => {
  const [count, setCount] = useState(0);

  const segments = [];
  for (let i = 0; i < count; i++) {
    segments.push(
      <motion.div
        className={clsx(styles.segment, {
          [styles.low]: i <= 4,
          [styles.medium]: i > 4 && i <= 6,
          [styles.high]: i >= 7,
        })}
        style={{
          originY: 1,
        }}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        exit={{ scaleY: 0 }}
        key={i}
      />
    );
  }

  const increment = () => {
    setCount((count) => (count < 8 ? count + 1 : count));
  };

  const decrement = () => {
    setCount((count) => (count > 0 ? count - 1 : count));
  };

  return (
    <Center>
      <div className={styles.controls}>
        <div className={styles.actions}>
          <motion.div
            className={clsx(styles.button, styles.plusButton)}
            whileTap={{ opacity: 0.6 }}
            onTap={increment}
            // onTap is specifically designed to work with Framer Motion's animation system and provides additional benefits, especially for touch devices.
          >
            +
          </motion.div>
          <motion.div
            className={clsx(styles.button, styles.minusButton)}
            whileTap={{ opacity: 0.6 }}
            onTap={decrement}
          >
            -
          </motion.div>
        </div>
        <div className={styles.segments}>
          <AnimatePresence>{segments}</AnimatePresence>
        </div>
      </div>
    </Center>
  );
};
