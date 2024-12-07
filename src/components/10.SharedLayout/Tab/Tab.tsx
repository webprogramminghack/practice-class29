import React, { useState } from 'react';
import { Center } from '@/components/Center';
import { motion } from 'framer-motion';
import styles from './Tab.module.scss';

const tabs = [
  { name: 'Red', color: '#f00' },
  { name: 'Purple', color: '#b1f' },
  { name: 'Pink', color: '#f08' },
  { name: 'Blue', color: '#05f' },
];

export const Tab: React.FC = () => {
  const [selected, setSelected] = useState(0);
  const [formerColor, setFormerColor] = useState(tabs[0].color);

  return (
    <Center>
      <div className={styles.container}>
        {tabs.map(({ name, color }, i) => (
          <motion.div
            className={styles.tab}
            key={i}
            initial={{ color: i === selected ? '#fff' : '#000' }}
            animate={{ color: i === selected ? '#fff' : '#000' }}
            onTap={() => {
              setFormerColor(tabs[selected].color);
              setSelected(i);
            }}
          >
            {name}
            {i === selected && (
              <motion.div
                className={styles.selection}
                layoutId='selected'
                style={{ borderRadius: 30 }}
                initial={{ backgroundColor: formerColor }}
                animate={{ backgroundColor: color }}
                // transition={{ duration: 3 }}
              />
            )}
          </motion.div>
        ))}
      </div>
    </Center>
  );
};
