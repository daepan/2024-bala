import { useLocation } from "react-router-dom";
import findProjectByCategory from "utils/ts/findProductsByCategory";
import styles from './LivingSection.module.scss';
import DetailProjectItem from "../DetailProjectItem";

function LivingSection() {

  const useQuery = () => {
  return new URLSearchParams(useLocation().search);
  }
  let query = useQuery();
  const searchTerm = query.get("tab");
  const projects = findProjectByCategory(searchTerm!);


  return ( 
      <div className={styles['container']}>
      <div className={styles['item-section']}>
        {projects?.map((project) => (
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

export default LivingSection;