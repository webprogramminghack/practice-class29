import React, { useState } from 'react';
import styles from './BasicScrollDriven.module.scss';
import { useMotionValueEvent, useScroll } from 'framer-motion';

export const BasicScrollDriven: React.FC = () => {
  const { scrollXProgress, scrollYProgress, scrollY, scrollX } = useScroll();

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [xProgress, setXProgress] = useState(0);
  const [yProgress, setYProgress] = useState(0);

  useMotionValueEvent(scrollX, 'change', (x) => setX(x));
  useMotionValueEvent(scrollY, 'change', (y) => setY(y));
  useMotionValueEvent(scrollXProgress, 'change', (xProgress) =>
    setXProgress(xProgress)
  );
  useMotionValueEvent(scrollYProgress, 'change', (yProgress) =>
    setYProgress(yProgress)
  );

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        x: {x}
        <br />
        y: {y}
        <br />
        xProgress: {xProgress}
        <br />
        yProgress: {yProgress}
      </div>
      <div className={styles.box}>Hello world</div>
    </div>
  );
};
