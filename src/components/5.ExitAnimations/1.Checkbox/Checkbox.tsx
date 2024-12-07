import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Center } from '../../Center';

export const Checkbox: React.FC = () => {
  const [isChecked, setIsChecked] = useState(true);

  return (
    <Center>
      <motion.div
        style={{
          width: 150,
          height: 150,
          borderRadius: 30,
          backgroundColor: '#fff',
          cursor: 'pointer',
        }}
        whileTap={{ scale: 0.95 }}
        onTap={() => setIsChecked(!isChecked)}
      >
        <AnimatePresence initial={false}>
          {isChecked && (
            <motion.div
              style={{ width: 150, height: 150, originX: 0, originY: 1 }}
              initial={{ opacity: 0, scale: 0.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
            >
              <svg xmlns='http://www.w3.org/2000/svg' width='150' height='150'>
                <path
                  d='M 38 74.707 L 62.647 99.353 L 108.5 53.4'
                  fill='transparent'
                  strokeWidth='20'
                  stroke='#40f'
                  strokeLinecap='round'
                />
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Center>
  );
};
