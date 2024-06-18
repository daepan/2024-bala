import useMediaQuery from 'utils/hooks/useMediaQuery';
import { Link } from 'react-router-dom';
import styles from './DetailDesignerItem.module.scss';

const SAMPLE_DATA = {
  id: 1,
  ENGName: 'Kim Chaeeun',
  Name: '김채은'
};

interface DesignerItemProps {
  student_number: number;
  en_name: string;
  name: string;
}

function DetaildesignerItem({
  student_number,
  en_name,
  name
}: DesignerItemProps) {
  const isMobile = useMediaQuery();

  return (
    <Link
      className={styles['designer-button']}
      to={`/designer/id=${student_number}`}
      state={{
        id: student_number
      }}
    >
      <div className={styles['container']}>
        <img
          className={styles['designer-image']}
          src={`${process.env.PUBLIC_URL}/designers/${student_number} ${name}.png`}
          alt="desinger-img"
        />
        <div className={styles['designer-info']}>
          <span className={styles['designer-info__eng-name']}>{en_name}</span>

          <span className={styles['designer-info__designers-name']}>
            {name}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default DetaildesignerItem;
