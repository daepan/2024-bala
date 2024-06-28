import useMediaQuery from 'utils/hooks/useMediaQuery';
import styles from './DetailProject.module.scss';
import { useParams } from 'react-router-dom';


function DetailProject() {
  const isMobile = useMediaQuery();
  const { category,productName } = useParams();
  const adjustedProductName = productName === 'Re:Ver' ? 'Re' : productName;

  const imgType = () => {
    if(productName ==='북르륵' || productName ==='Roof'|| productName ==='맡겨줄개'|| productName ==='PLAYBOOK' || productName ==='EZ-Beesy') {
      return 'png';
    }
    return 'jpg';
  }

  console.log(`${process.env.PUBLIC_URL}/products/${category}/${adjustedProductName}/${adjustedProductName}_6-${2}.${imgType()}`)
  return (
    <>
  
      <img 
      className={styles['project-top-image']}
      src={isMobile 
        ?`${process.env.PUBLIC_URL}/products/${category}/${adjustedProductName}/${adjustedProductName}_5.${imgType()}`
        :`${process.env.PUBLIC_URL}/products/${category}/${adjustedProductName}/${adjustedProductName}_4.${imgType()}`
        }
      alt="product"
      />
      <div className={styles['project-info']}>
        {[1, 2, 3, 4, 5, 6, 7, 8,9,10].map(num => (
          <img 
            key={num}
            className={styles['project-info-image']}
            src={`${process.env.PUBLIC_URL}/products/${category}/${adjustedProductName}/${adjustedProductName}_6-${num}.${imgType()}`}
            onError={(e:any) => e.target.style.display = 'none'} // 이미지 로드 실패 시 숨기기
            alt={`product ${num}`}
          />
        ))}
        <div className={styles['project-designers']}>
          <span className={styles['project-designers__title']}>DESIGNER</span>
        </div>
      </div>
      
    </>
  );
}

export default DetailProject;
