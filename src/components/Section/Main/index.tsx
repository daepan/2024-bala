import React from 'react';
import { ReactComponent as Arrow } from './Asset/arrow.svg';
import { ReactComponent as BlueSeed } from './Asset/blue_seed.svg';
import {
  useScroll,
  useTransform,
  MotionValue,
  motion,
} from "framer-motion";
import styles from './Main.module.scss';

interface MainSectionProps {
  onMoveScroll: () => void
}

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export default function MainSection({
  onMoveScroll
}: MainSectionProps) {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 400); 

  return (
    <div className={styles.section}>
      <div className={styles.description} ref={ref}>
        <div className={styles.description__intro}>
          한국기술교육대학교 <br />
          디자인공학과 30th 졸업 전시
        </div>
        <div className={styles.description__title}>
          씨앗에서부터 더 높은 단계로<br />
          나아가기 위한 출발.
        </div>
        <div className={styles.description__content}>
          발아는 단순한 생명의 시작을 넘어, 가능성과 희망,<br />
          그리고 무한한 잠재력의 상징입니다.
        </div>
      </div>
      <motion.div className={styles.section__image} style={{ y }}>
        <BlueSeed />
      </motion.div>
      <Arrow className={styles.section__arrow} onClick={() => onMoveScroll()}/>
    </div>
  )
}
