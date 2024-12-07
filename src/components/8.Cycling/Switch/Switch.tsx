import { AnimatePresence, motion, useCycle } from 'framer-motion';
import React from 'react';
import { Center } from '@/components/Center';
import styles from './Switch.module.scss';

export const Switch: React.FC = () => {
  const [current, cycle] = useCycle('off', 'on');

  return (
    <Center>
      <div className={styles.container}>
        <motion.div
          className={styles.switch}
          initial={false}
          animate={current}
          onTapStart={() => cycle()}
        >
          <AnimatePresence initial={false}>
            <motion.div
              className={styles.switchBackground}
              variants={{ off: { scale: 0 }, on: { scale: 1 } }}
              transition={{ ease: 'easeInOut' }}
            />
          </AnimatePresence>
          <motion.div
            className={styles.handle}
            variants={{ off: { x: 0 }, on: { x: 20 } }}
            transition={{ ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </Center>
  );
};
