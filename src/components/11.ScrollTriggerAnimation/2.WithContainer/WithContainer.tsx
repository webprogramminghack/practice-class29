import React, { useRef } from 'react';
import styles from './WithContainer.module.scss';
import { motion } from 'framer-motion';
import { Center } from '@/components/Center';

export const WithContainer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.wrapper}>
      <Center>
        <div ref={containerRef} className={styles.container}>
          <div className={styles.placeholder}>sdfsdfsfd</div>
          <motion.div
            whileInView={{ borderRadius: '50%' }}
            initial={{ borderRadius: '25%' }}
            animate={{ borderRadius: '25%' }}
            viewport={{
              amount: 'all',
              root: containerRef,
            }}
            className={styles.motionBox}
          />
          <div className={styles.placeholder}>sdjfhskdjfhjshdf</div>
        </div>
      </Center>
    </div>
  );
};
