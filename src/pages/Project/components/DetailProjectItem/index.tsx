import useMediaQuery from 'utils/hooks/useMediaQuery';
import styles from './DetailProjectItem.module.scss';

const SAMPLE_DATA = {
  id: 1,
  title: '배가 편의성을 개선한 북카트 디자인',
  designers: '김채은, 박정빈',
};

function DetailProjectItem() {
  const isMobile = useMediaQuery();

  return (
    <a className={styles['project-button']} href={`project/${SAMPLE_DATA.id}`}>
      <div className={styles['container']}>
        <img
          className={styles['project-image']}
          src={
            isMobile
              ? 'https://via.placeholder.com/152x120'
              : 'https://via.placeholder.com/496x329'
          }
        />
        <div className={styles['project-info']}>
          <span className={styles['project-info__title']}>
            {SAMPLE_DATA.title}
          </span>
          {!isMobile && (
            <span className={styles['project-info__designers']}>
              {SAMPLE_DATA.designers}
            </span>
          )}
        </div>
      </div>
    </a>
  );
}

export default DetailProjectItem;
