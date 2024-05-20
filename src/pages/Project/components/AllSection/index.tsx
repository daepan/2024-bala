import DetailProjectItem from '../DetailProjectItem';
import styles from './AllSection.module.scss';

function AllSection() {
  //여기가 All에 대한 요소들이 들어있는 부분

  return (
    <div className={styles['container']}>
      <div className={styles['item-section']}>
        <DetailProjectItem />
        <DetailProjectItem />
        <DetailProjectItem />
        <DetailProjectItem />
        <DetailProjectItem />
        <DetailProjectItem />
        <DetailProjectItem />
      </div>
    </div>
  );
}

export default AllSection;
