import styles from './MajorIntroduce.module.scss';
import useMediaQuery from 'utils/hooks/useMediaQuery';
import Kimsungjun from './Asset/Kimsungjun.png';
import Hongjuphyo from './Asset/Hongjuphyo.png';
import Jeonggwangtae from './Asset/Jeonggwangtae.png';
import Jungjuyoung from './Asset/Jungjuyoung.png';
import Kimtaegyun from './Asset/Kimtaegyun.png';
import Yoonjeongsik from './Asset/Yoonjeongsik.png';
import Yoonjinpil from './Asset/Yoonjinpil.png';

const OTHER_PROFESSOR = [
  { img: Yoonjeongsik, name: '윤정식 교수' },
  { img: Jeonggwangtae, name: '정광태 교수' },
  { img: Kimtaegyun, name: '김태균 교수' },
  { img: Hongjuphyo, name: '홍주표 교수' },
  { img: Kimsungjun, name: '김성준 교수' },
  { img: Jungjuyoung, name: '정주영 교수' },
  { img: Yoonjinpil, name: '윤진필 기술연구원' },
];

export default function MajorIntroduce() {
  const isMobile = useMediaQuery();

  return isMobile ? (
    <div className={styles['mobile-major-introduce-section']}>
      <div className={styles['mobile-major-introduce-title']}>학과 소개</div>
      <div className={styles['mobile-major-introduce']}>
        내용이 바뀔 수 있다네요..
      </div>
      <div className={styles['mobile-major-introduce-title']}>교수진 소개</div>
      <div className={styles['other-professor-section']}>
        {OTHER_PROFESSOR.map((item) => (
          <div
            className={styles['other-professor-section__items']}
            key={item.name}
          >
            <img src={item.img} alt={item.name} />
            <div className={styles['other-professor-section__name']}>
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div className={styles['major-introduce-section']}>
      <div className={styles['major-introduce-info-img']}>
        <div className={styles['major-introduce-info']}>
          디자인공학전공은 디자인과 공학의 융합 교육을 실시한 국내 최초의
          학과로, 산업디자인 기술과 공학적 지식을 활용하여 사용자의 감성과
          경험을 충족하는 스마트제품 및 감성융합서비스 디자인 전문가 양성을
          목표로 하고 있다. 급변하는 현대 산업사회에서 능동적으로 디자인 문제를
          발견하고, 창의적인 디자인 솔루션을 제시할 수 있는 디자인 전문인력
          양성에 중점을 두고 있다
        </div>
      </div>
      <div className={styles['professor-introduce-section']}>
        <div className={styles.title}>교수진 소개</div>
        <div className={styles['major-professor-section']}>
          {/* <div className={styles['main-professor']}>
            <img src={Kimsungjun} alt="김성진 교수" />
            <div className={styles['main-professor__title']}>
              <div className={styles['main-professor__name']}>김성준 교수</div>
              <div className={styles['main-professor__role']}>학부장</div>
            </div>
            <div className={styles['main-professor__info']}>
              Sed suscipit quis viverra amet velit mauris quis in facilisi.
              Nullam elit placerat id senectus tristique nunc neque. Odio diam
              neque mauris iaculis urna odio laoreet ullamcorper.
            </div>
          </div> */}

          <div className={styles['other-professor-section']}>
            {OTHER_PROFESSOR.map((item) => (
              <div
                className={styles['other-professor-section__items']}
                key={item.name}
              >
                <img src={item.img} alt={item.name} />
                <div className={styles['other-professor-section__name']}>
                  {item.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
