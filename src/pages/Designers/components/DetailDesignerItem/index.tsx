import useMediaQuery from 'utils/hooks/useMediaQuery';
import styles from './DetailDesignerItem.module.scss';

const SAMPLE_DATA = {
  id: 1,
  ENGName: 'Kim Chaeeun',
  Name: '김채은',
};

function DetaildesignerItem() {
  const isMobile = useMediaQuery();

  return (
    <a
      className={styles['designer-button']}
      href={`designer/${SAMPLE_DATA.id}`}
    >
      <div className={styles['container']}>
        <img
          className={styles['designer-image']}
          src={
            isMobile
              ? 'https://via.placeholder.com/158x210'
              : 'https://via.placeholder.com/332x378'
          }
        />
        <div className={styles['designer-info']}>
          <span className={styles['designer-info__eng-name']}>
            {SAMPLE_DATA.ENGName}
          </span>

          <span className={styles['designer-info__designers-name']}>
            {SAMPLE_DATA.Name}
          </span>
        </div>
      </div>
    </a>
  );
}

export default DetaildesignerItem;
