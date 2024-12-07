import { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import styles from './PopLayoutVSSync.module.scss';

const variants: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1 },
  exit: { scale: 0.8, opacity: 0 },
};

export const PopLayoutVsSync = () => {
  const [items, setItems] = useState([0, 1, 2, 3, 4]);

  function removeItem(index: number) {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  }

  return (
    <div className={styles.columns}>
      <div className={styles.column}>
        <h2 className={styles.columnTitle}>Sync</h2>
        <div className={styles.columnItems}>
          <AnimatePresence mode='sync' initial={false}>
            {items.map((id, index) => (
              <motion.div
                className={styles.columnItem}
                layout
                variants={variants}
                initial='hidden'
                animate='visible'
                exit='exit'
                transition={{ type: 'spring' }}
                key={id}
                onTap={() => removeItem(index)}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>

      <div className={styles.column}>
        <h2 className={styles.columnTitle}>Pop layout</h2>
        <div className={styles.columnItems}>
          <AnimatePresence mode='popLayout' initial={false}>
            {items.map((id, index) => (
              <motion.div
                className={styles.columnItem}
                layout
                variants={variants}
                initial='hidden'
                animate='visible'
                exit='exit'
                transition={{ type: 'spring' }}
                key={id}
                onTap={() => removeItem(index)}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
