import DetailProjectItem from '../DetailProjectItem';
import styles from './AllSection.module.scss';
import { PROJECTS } from 'utils/constant/projects';


function AllSection() {
  
  return (
    <div className={styles['container']}>
      <div className={styles['item-section']}>
        {PROJECTS.map((project) => (
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

export default AllSection;
