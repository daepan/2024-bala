import { useLocation } from 'react-router-dom';
import styles from './CareSection.module.scss';
import findProjectByCategory from 'utils/ts/findProductsByCategory';
import DetailProjectItem from '../DetailProjectItem';
import { shuffleProjectArray } from '../AllSection';

function CareSection() {
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  let query = useQuery();
  const searchTerm = query.get('tab');
  const projects = findProjectByCategory(searchTerm!);

  return (
    <div className={styles['container']}>
      <div className={styles['item-section']}>
        {shuffleProjectArray(projects)?.map(project => (
          <DetailProjectItem
            key={project.name}
            title={project.title}
            name={project.name}
            productName={project.productName}
            category={project.category}
            imgType={project.imgType}
          />
        ))}
      </div>
    </div>
  );
}

export default CareSection;
