import { ReactComponent as LinkLogo } from './Assets/link_logo.svg';
import { ReactComponent as InstaLogo } from './Assets/insta_logo.svg';
import { ReactComponent as MessageLogo } from './Assets/message_logo.svg';
import styles from './DetailDesigner.module.scss';
import TopButton from 'components/TopButton';
import useMediaQuery from 'utils/hooks/useMediaQuery';

function DetailDesigner() {
  const isMobile = useMediaQuery();

  return (
    <div className={styles.template}>
      {!isMobile && (
        <div className={styles['top-button']}>
          <TopButton />
        </div>
      )}
      <div className={styles.profile}>
        <div className={styles.profile__image}>
          이미지
          <div className={styles['name--mobile']}>
            <div className={styles['name__title--mobile']}>이름</div>
            <div className={styles['name__en--mobile']}>영어이름</div>
          </div>
        </div>
        <div className={styles.profile__info}>
          <div className={styles.name}>
            <div className={styles.name__title}>이름</div>
            <div className={styles.name__en}>영어이름</div>
          </div>
          <div className={styles.word}>
            <div className={styles.word__header}>김다준의 한마디</div>
            <div className={styles.word__content}>
              나는 자랑스러운 태극기앞에 말랑뱅구 다식이 최고 이제 졸업이다.
            </div>
          </div>
          <div className={styles.links}>
            <div className={styles.links__item}>
              <MessageLogo className={styles.links__logo} />{' '}
              autumn0205@koreatech.ac.kr
            </div>
            <div className={styles.links__item}>
              <InstaLogo className={styles.links__logo} /> @the__autum.n
            </div>
            <div className={styles.links__item}>
              <LinkLogo className={styles.links__logo} /> Portfolio Link
            </div>
          </div>
        </div>
      </div>
      <div className={styles.qa}>
        <div className={styles.qa__title}>Q&A</div>
        <div className={styles.qa__content}>
          <div className={styles.card}>
            <div className={styles.card__head}>
              <div className={styles.card__title}>Q1.</div>
              <div className={styles.card__question}>
                작품의 주요 아이디어나 컨셉은 무엇인가요?
              </div>
            </div>
            <div className={styles.card__tail}>
              <div className={styles.card__answer}>
                2021년도에는 응애응애 신입생이던 제가 드디어 2024년, 졸업작품을
                만들고 드디어 졸업을 할 줄 알았으나 사실 내년에 졸업하게 됩니다.
                ㅋ 속았지. 아무튼 졸업 전시 합니다. 졸업 전시 많관부~승관
                2021년도에는 응애응애 신입생이던 제가
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.card__head}>
              <div className={styles.card__title}>Q2.</div>
              <div className={styles.card__question}>
                작품을 통해 전달하고자 하는 메시지나,
                <br />
                사용자에게 전달하고자 하는 경험은 무엇인가요?
              </div>
            </div>
            <div className={styles.card__tail}>
              <div className={styles.card__answer}>
                2021년도에는 응애응애 신입생이던 제가 드디어 2024년, 졸업작품을
                만들고 드디어 졸업을 할 줄 알았으나 사실 내년에 졸업하게 됩니다.
                ㅋ 속았지. 아무튼 졸업 전시 합니다. 졸업 전시 많관부~승관
                2021년도에는 응애응애 신입생이던 제가
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.card__head}>
              <div className={styles.card__title}>Q3.</div>
              <div className={styles.card__question}>
                작품을 만들면서 가장 큰 도전은 무엇이었나요?
                <br />
                이를 어떻게 극복했나요?
              </div>
            </div>
            <div className={styles.card__tail}>
              <div className={styles.card__answer}>
                2021년도에는 응애응애 신입생이던 제가 드디어 2024년, 졸업작품을
                만들고 드디어 졸업을 할 줄 알았으나 사실 내년에 졸업하게 됩니다.
                ㅋ 속았지. 아무튼 졸업 전시 합니다. 졸업 전시 많관부~승관
                2021년도에는 응애응애 신입생이던 제가
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.card__head}>
              <div className={styles.card__title}>Q4.</div>
              <div className={styles.card__question}>
                개발한 디자인 또는 기술적 도약이
                <br />
                어떤 새로운 가능성을 열어주었고, 이를 통해
                <br />
                자신이 어떻게 성장했는지 간단히 이야기 해주세요.
              </div>
            </div>
            <div className={styles.card__tail}>
              <div className={styles.card__answer}>
                2021년도에는 응애응애 신입생이던 제가 드디어 2024년, 졸업작품을
                만들고 드디어 졸업을 할 줄 알았으나 사실 내년에 졸업하게 됩니다.
                ㅋ 속았지. 아무튼 졸업 전시 합니다. 졸업 전시 많관부~승관
                2021년도에는 응애응애 신입생이던 제가
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailDesigner;
