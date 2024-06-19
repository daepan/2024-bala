import React from 'react';
import { ReactComponent as MainLogo } from 'assets/bala_logo.svg';
import { ReactComponent as Arrow } from 'components/Section/Main/Asset/arrow.svg';
import { ReactComponent as BlueSeed } from 'components/Section/Main/Asset/blue_seed.svg';
import { useScroll, useTransform, MotionValue, motion } from 'framer-motion';
import styles from './MainMobileSection.module.scss';

interface MainMobileSectionProps {
  onMoveScroll: () => void;
}

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export default function MainMobileSection({
  onMoveScroll
}: MainMobileSectionProps) {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <div className={styles.section}>
      <motion.div className={styles.section__image} style={{ y }}>
        <BlueSeed width={446.389} height={446.389} />
      </motion.div>
      <div className={styles.section__describe}>
        <div className={styles.header}>
          <MainLogo width={174.8} height={24.81} />
          <div className={styles.header__title}>
            한국기술교육대학교 디자인공학과 30th 졸업전시
          </div>
        </div>
        <div className={styles.content}>
          발아는 단순한 생명의 시작을 넘어, <br />
          가능성과 희망, 그리고 무한한 잠재력의 상징입니다. <br />
          더 멀리 낯선 곳에서 꽃 피우기 위한 우리의 도약을 <br />
          이번 전시를 통해 선보이고자 합니다. <br />
        </div>
        <Arrow onClick={() => onMoveScroll()} />
      </div>
    </div>
  );
}
