import { useState } from 'react';
import { Refresh } from './components/Refresh';
import { Tab } from './components/10.SharedLayout/Tab';
import { Basic } from './components/11.ScrollTriggerAnimation/1.Basic';
import { WithContainer } from './components/11.ScrollTriggerAnimation/2.WithContainer';
import { Staggering } from './components/11.ScrollTriggerAnimation/3.Staggering';
import { BasicScrollDriven } from './components/12.ScrollDrivenAnimationBasic/1.Basic/BasicScrollDriven';
import { ScrollProgress } from './components/12.ScrollDrivenAnimationBasic/2.ScrollProgress';
import { SVGPathAnimation } from './components/12.ScrollDrivenAnimationBasic/3.SVGPathAnimation';
import { ScrollProgressWithTransform } from './components/12.ScrollDrivenAnimationBasic/4.ScrollProgressWithTransform';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div key={count}>
      {/* <Tab /> */}
      {/* <Basic /> */}
      {/* <WithContainer /> */}
      {/* <Staggering /> */}
      {/* <BasicScrollDriven /> */}
      {/* <ScrollProgress /> */}
      {/* <SVGPathAnimation /> */}
      <ScrollProgressWithTransform />
      <Refresh onClick={() => setCount(count + 1)} />
    </div>
  );
}

export default App;
