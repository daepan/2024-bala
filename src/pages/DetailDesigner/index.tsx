import { ReactComponent as LinkLogo } from './Assets/link_logo.svg';
import { ReactComponent as InstaLogo } from './Assets/insta_logo.svg';
import { ReactComponent as MessageLogo } from './Assets/message_logo.svg';
import { useNavigate, useParams } from 'react-router-dom';
import cn from 'utils/ts/classnames';
import findProfilesByStudentNumber from 'utils/ts/findProfilesByStudentNumber';
import styles from './DetailDesigner.module.scss';
import { PROJECTS } from 'utils/constant/projects';
import TopButton from 'components/TopButton';
import useScrollToTop from 'utils/hooks/useScrollToTop';
import useMediaQuery from 'utils/hooks/useMediaQuery';

function findProjectByName(name: string | undefined) {
  if (!name) return null;
  return PROJECTS.find(project => project.name.includes(name));
}

function DetailDesigner() {
  useScrollToTop();
  const isMobile = useMediaQuery();
  const params = useParams();
  const navigate = useNavigate();
  const userData = findProfilesByStudentNumber(
    params.id ? Number(params.id) : 2021151016
  );
  const userProject = findProjectByName(userData?.name);
  const adjustedProductName =
    userProject?.productName === 'Re:Ver' ? 'Re' : userProject?.productName;
  const onClickProject = () => {
    navigate(`/project/${userProject?.category}/${userProject?.productName}`);
  };
  return (
    <div className={styles.template}>
      {!isMobile && (
        <div className={styles['top-button']}>
          <TopButton />
        </div>
      )}
      <div className={styles.profile}>
        <div className={styles.profile__image}>
          <img
            className={styles.profile__img}
            src={`${process.env.PUBLIC_URL}/designers/${userData?.student_number} ${userData?.name}.png`}
            alt="designer"
          />
          <div className={styles['name--mobile']}>
            <div className={styles['name__title--mobile']}>
              {userData?.name}
            </div>
            <div className={styles['name__en--mobile']}>
              {userData?.name_en}
            </div>
          </div>
        </div>
        <div className={styles.profile__info}>
          <div className={styles.name}>
            <div className={styles.name__title}>{userData?.name}</div>
            <div className={styles.name__en}>{userData?.name_en}</div>
          </div>
          <div className={styles.word}>
            <div className={styles.word__header}>{userData?.name}의 한마디</div>
            <div className={styles.word__content}>{userData?.sentence}</div>
          </div>
          <div className={styles.links}>
            <div className={styles.links__item}>
              <MessageLogo className={styles.links__logo} /> {userData?.email}
            </div>
            {userData?.instagram && (
              <div className={styles.links__item}>
                <InstaLogo className={styles.links__logo} />
                {userData?.instagram}
              </div>
            )}
            {userData?.photopolio_link && (
              <div className={styles.links__item}>
                <LinkLogo className={styles.links__logo} />
                <a
                  className={styles.links__link}
                  href={userData?.photopolio_link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {userData?.photopolio_link}
                </a>
              </div>
            )}
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
              <div className={styles.card__answer}>{userData?.concept}</div>
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
              <div className={styles.card__answer}>{userData?.experience}</div>
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
              <div className={styles.card__answer}>{userData?.challenge}</div>
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
              <div className={styles.card__answer}>{userData?.story}</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.more}>
        <div className={styles.more__title}>작품 더보기</div>
        <div className={styles.more__content}>
          <div className={styles.card} onClick={() => onClickProject()}>
            <img
              className={styles.card__img}
              src={
                isMobile
                  ? `${process.env.PUBLIC_URL}/products/${userProject?.category}/${adjustedProductName}/${adjustedProductName}_2.${userProject?.imgType}`
                  : `${process.env.PUBLIC_URL}/products/${userProject?.category}/${adjustedProductName}/${adjustedProductName}_1.${userProject?.imgType}`
              }
              alt="project-main"
            />
            <div
              className={cn({
                [styles.card__description]: true,
                [styles['card__description--project']]: true
              })}
            >
              <div
                className={cn({
                  [styles.card__title]: true,
                  [styles['card__title--project']]: true
                })}
              >
                {userProject?.title}
              </div>
              <div className={styles.card__content}>
                {!isMobile && (
                  <span className={styles.card__content}>
                    {userProject?.name}
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <img
              src={`${process.env.PUBLIC_URL}/plant/${userData?.name}.png`}
              className={styles.card__img}
              alt="plant"
            />
            <div className={styles.card__description}>
              <div className={styles.card__title}>
                {userData?.plant_category} | {userData?.plant_name}
              </div>
              <div className={styles.card__content}>
                내가 발아시킨 또 다른 씨앗과 화분
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailDesigner;
