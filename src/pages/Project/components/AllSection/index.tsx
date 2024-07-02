import DetailProjectItem from '../DetailProjectItem';
import styles from './AllSection.module.scss';
import { PROJECTS, ProjectDataType } from 'utils/constant/projects';

export function shuffleProjectArray(array: ProjectDataType[]): ProjectDataType[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}


function AllSection() {
  
  return (
    <div className={styles['container']}>
      <div className={styles['item-section']}>
        {shuffleProjectArray(PROJECTS).map((project) => (
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
