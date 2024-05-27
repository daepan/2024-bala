import useMediaQuery from 'utils/hooks/useMediaQuery';
import styles from './Designers.module.scss';
import DetailDesignerItem from './components/DetailDesignerItem';

function Designers() {
  const isMobile = useMediaQuery();

  return (
    <div className={styles['container']}>
      {!isMobile && (
        <span className={styles['title']}>
          “ 여기, 38명의 디자이너 그리고 38개의 씨앗 ”
        </span>
      )}

      <div className={styles['item-container']}>
        <div className={styles['item-section']}>
          <DetailDesignerItem />
          <DetailDesignerItem />
          <DetailDesignerItem />
          <DetailDesignerItem />
          <DetailDesignerItem />
          <DetailDesignerItem />
          <DetailDesignerItem />
        </div>
      </div>
    </div>
  );
}

export default Designers;
