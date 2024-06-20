import useMediaQuery from 'utils/hooks/useMediaQuery';
import styles from './Designers.module.scss';
import DetailDesignerItem from './components/DetailDesignerItem';
import TopButton from 'components/TopButton';
import { PROFILES, ProfilesDataType } from 'utils/constant/profiles';

function shuffleArray(array: ProfilesDataType[]): ProfilesDataType[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


function Designers() {
  const isMobile = useMediaQuery();

  return (
    <div className={styles['container']}>
      {!isMobile && (
        <span className={styles['title']}>
          “ 여기, 38명의 디자이너 그리고 38개의 씨앗 ”
        </span>
      )}
      {!isMobile && (
        <div className={styles['top-button']}>
          <TopButton />
        </div>
      )}
      <div className={styles['item-container']}>
        <div className={styles['item-section']}>
          {shuffleArray(PROFILES).map((profile: ProfilesDataType, index: number) => (
            <DetailDesignerItem
              key={profile.student_number}
              student_number={profile.student_number}
              en_name={profile.name_en}
              name={profile.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Designers;
