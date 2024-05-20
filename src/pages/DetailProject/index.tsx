import useMediaQuery from 'utils/hooks/useMediaQuery';
import styles from './DetailProject.module.scss';
import { useParams } from 'react-router-dom';

function DetailProject() {
  const isMobile = useMediaQuery();
  const { id } = useParams();

  return (
    <>
      <>여기가 각각</>
      <>{id}</>
    </>
  );
}

export default DetailProject;
