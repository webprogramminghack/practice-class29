import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import emoji from 'react-easy-emoji';
import { Center } from '@/components/Center';
import styles from './SameElementDifKey.module.scss';
import clsx from 'clsx';

const emojiVariants: Variants = {
  hidden: { scale: 0, rotate: -180 },
  visible: { scale: 1, rotate: 0 },
  exit: { scale: 0, rotate: -180 },
};

export const SameElementDifKey: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const emojis = ['⚽️', '🏀', '🏈', '⚾️', '🎾', '🏐', '🏉', '🥎', '🎱'];

  const handlePrevious = () => {
    setCurrent((current) => (current > 0 ? current - 1 : emojis.length - 1));
  };

  const handleNext = () => {
    setCurrent((current) => (current < emojis.length - 1 ? current + 1 : 0));
  };

  return (
    <Center>
      <div className={styles.control}>
        {/* Previous Button */}
        <motion.div
          className={clsx(styles.button, styles.prevButton)}
          whileTap={{ scale: 0.9 }}
          onTap={handlePrevious}
        >
          {'<'}
        </motion.div>

        {/* Emoji */}
        <AnimatePresence>
          {/* mode wait */}
          <motion.div
            className={styles.emoji}
            variants={emojiVariants}
            initial='hidden'
            animate='visible'
            exit='exit'
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 20,
            }}
            key={current} // Changing the key triggers the exit animation
          >
            {emoji(emojis[current], {
              baseUrl:
                'https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/svg/',
              ext: '.svg',
              size: '',
              props: { style: { width: 80, height: 80 } },
            })}
          </motion.div>
        </AnimatePresence>

        {/* Next Button */}
        <motion.div
          className={clsx(styles.button, styles.nextButton)}
          whileTap={{ scale: 0.9 }}
          onTap={handleNext}
        >
          {'>'}
        </motion.div>
      </div>
    </Center>
  );
};
