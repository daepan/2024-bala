import { useLocation } from 'react-router-dom';
import styles from './CareSection.module.scss';
import findProjectByCategory from 'utils/ts/findProductsByCategory';
import DetailProjectItem from '../DetailProjectItem';

function CareSection() {

  const useQuery = () => {
  return new URLSearchParams(useLocation().search);
  }
  let query = useQuery();
  const searchTerm = query.get("tab");
  const test = findProjectByCategory(searchTerm!);

  return ( 
  <div className={styles['container']}>
      <div className={styles['item-section']}>
        {test?.map((project) => (
          <DetailProjectItem 
          key={project.name}
          title={project.title}
          name={project.name} 
          productName={project.productName} 
          category={project.category}
          imgType={project.imgType}
          />))}
      </div>
    </div> 
    );
}

export default CareSection;