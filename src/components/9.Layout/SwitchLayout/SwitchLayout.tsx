import React, { useState } from 'react';
import styles from './SwitchLayout.module.scss';
import { motion } from 'framer-motion';
import { Center } from '@/components/Center';
import { button, p } from 'framer-motion/client';

export const SwitchLayout: React.FC = () => {
  const [isOn, setIsOn] = useState(false);
  const [showParagraph, setShowParagraph] = useState(false);

  return (
    <>
      <button onClick={() => setShowParagraph((prev) => !prev)}>
        Show Paragraph
      </button>
      {showParagraph && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          itaque illum suscipit quaerat modi, beatae, ut cum omnis dolor
          repellat aperiam dolorem. Porro quis dolor maiores doloremque
          voluptatibus, fugiat accusantium. Accusamus unde porro at praesentium
          sit, ut non nobis modi repellat nihil eligendi quibusdam laudantium
          asperiores nostrum atque consequuntur natus commodi maiores
          consequatur? Officia, neque! Hic ab harum est, deserunt cum voluptate
          sapiente dignissimos sint explicabo omnis laborum illum deleniti enim
          vel eum maiores. Omnis velit autem unde quod distinctio modi
          molestias, placeat quis repellendus numquam architecto suscipit
          dignissimos mollitia ut nulla, quisquam molestiae reiciendis non
          officiis? Iure neque nisi nesciunt, cupiditate ullam culpa dolorum
          eius minus sed iste laboriosam adipisci officia et laudantium. Vel
          aliquam cumque beatae illo quos qui odit dolorum, adipisci at, fuga
          ipsam quia minima quaerat ullam in magni officiis? Repellendus neque
          autem voluptate debitis iste sint. Laudantium iusto culpa beatae quo
          odio nihil aliquam dicta, atque debitis voluptatem, similique dolore!
          Id fugit officiis, earum nisi cumque aperiam alias. Autem corrupti
          consectetur asperiores error nihil, iure aliquid placeat quidem
          incidunt tempora mollitia laboriosam dolorum, fugiat magnam quod
          eligendi. Adipisci tempora explicabo expedita voluptatum officiis
          suscipit, corrupti sed distinctio harum doloribus totam ut vero
          commodi, qui vitae.
        </p>
      )}
      <Center>
        <motion.div
          className={styles.switch}
          data-isOn={isOn}
          onClick={() => setIsOn((prev) => !prev)}
        >
          <motion.div
            className={styles.handle}
            layout
            transition={{ type: 'spring', stiffness: 700, damping: 30 }}
          />
        </motion.div>
      </Center>
    </>
  );
};
