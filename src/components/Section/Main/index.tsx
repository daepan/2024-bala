import { ReactComponent as Arrow } from './Asset/arrow.svg';
import { ReactComponent as BlueSeed } from './Asset/blue_seed.svg';
import styles from './Main.module.scss';

export default function MainSection() {
  return (
    <div className={styles.section}>
      <div className={styles.description}>
        <div className={styles.description__title}>
          씨앗에서부터 더 높은 단계로<br />
          나아가기 위한 출발.
        </div>
        <div className={styles.description__content}>
          발아는 단순한 생명의 시작을 넘어, 가능성과 희망,<br />
          그리고 무한한 잠재력의 상징입니다.
        </div>
      </div>
      <BlueSeed className={styles.section__image} />
      <Arrow className={styles.section__arrow} />
    </div>
  )
}
