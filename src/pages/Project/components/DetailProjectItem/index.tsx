import useMediaQuery from 'utils/hooks/useMediaQuery';
import styles from './DetailProjectItem.module.scss';

interface DetailProjectItemProps {
  title: string;
  name: string;
  productName: string;
  category: string;
  imgType: string;
}
function DetailProjectItem({title,name, productName, category, imgType}:DetailProjectItemProps) {
  const isMobile = useMediaQuery();

  const adjustedProductName = productName === 'Re:Ver' ? 'Re' : productName;
  
  return (
    <a className={styles['project-button']} href={`project/${category}/${productName}`}>
      <div className={styles['container']}>
        <img
          className={styles['project-image']}
          src={isMobile 
            ?`${process.env.PUBLIC_URL}/products/${category}/${adjustedProductName}/${adjustedProductName}_2.${imgType}`
            :`${process.env.PUBLIC_URL}/products/${category}/${adjustedProductName}/${adjustedProductName}_1.${imgType}`
          }
        /> 
        <div className={styles['project-info']}>
          <span className={styles['project-info__title']}>
            {title}
          </span>
          {!isMobile && (
            <span className={styles['project-info__designers']}>
              {name}
            </span>
          )}
        </div>
      </div>
    </a>
  );
}

export default DetailProjectItem;
