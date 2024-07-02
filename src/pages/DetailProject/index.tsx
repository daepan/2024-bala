import useMediaQuery from 'utils/hooks/useMediaQuery';
import styles from './DetailProject.module.scss';
import { useParams } from 'react-router-dom';
import findProjectByProjectName from 'utils/ts/findProjectByProjectName';

function DetailProject() {
  const isMobile = useMediaQuery();
  const { category,productName } = useParams();
  const adjustedProductName = productName === 'Re:Ver' ? 'Re' : productName;
  const adjustedProductNameReverse = productName === 'Re' ? 'Re:Ver' : productName;

  const imgType = () => {
    if(productName ==='북르륵' || productName ==='Roof'|| productName ==='맡겨줄개'|| productName ==='PLAYBOOK' || productName ==='EZ-Beesy') {
      return 'png';
    }
    return 'jpg';
  }

  const designer = findProjectByProjectName(adjustedProductNameReverse!)?.designers;
  const title = findProjectByProjectName(adjustedProductNameReverse!)?.title;
  const name = findProjectByProjectName(adjustedProductNameReverse!)?.name;
  

  console.log(`${process.env.PUBLIC_URL}/products/${category}/${adjustedProductName}/${adjustedProductName}_6-${2}.${imgType()}`)
  return (
    <>
    <div className={styles['project-top-image-section']}>
      <img 
      className={styles['project-top-image']}
      src={isMobile 
        ?`${process.env.PUBLIC_URL}/products/${category}/${adjustedProductName}/${adjustedProductName}_5.${productName === '북르륵' ? 'jpg' : imgType()}`
        :`${process.env.PUBLIC_URL}/products/${category}/${adjustedProductName}/${adjustedProductName}_4.${imgType()}`
        }
      alt="product"
      />
      {isMobile
      ?(
      <div className={styles['project-top-image__info-section']}>
        <div className={styles['project-top-image__name-section']}>
          <div className={styles['project-top-image__product-name']}>{productName}</div>
          <div className={styles['project-top-image__name']}>{name}</div>  
        </div>
        <div className={styles['project-top-image__title']}>{title}</div>
      </div>)
      :(
      <div className={styles['project-top-image__info-section']}>
        <div className={styles['project-top-image__product-name']}>{productName}</div>
        <div className={styles['project-top-image__name']}>{name}</div>
      </div>
      )}
      </div>
      <div className={styles['project-info']}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
          <img 
            key={num}
            className={styles['project-info-image']}
            src={`${process.env.PUBLIC_URL}/products/${category}/${adjustedProductName}/${adjustedProductName}_6-${num}.${imgType()}`}
            onError={(e:any) => e.target.style.display = 'none'} // 이미지 로드 실패 시 숨기기
            alt={`product ${num}`}
          />
        ))}
        <div className={styles['project-designers']}>
          <span className={styles['project-designers__title']}>DESIGNER
            <div className={styles['project-designers__title-under-bar']}/>
          </span>
          <div className={styles['project-designers__item-section']}>
            {designer?.map((designer) => (
              <div key={designer.student_number} className={styles['project-designers__item']}>
                <img
                  className={styles['project-designers__item-image']}
                  src={`${process.env.PUBLIC_URL}/designers/${designer.student_number} ${designer.name}.png`}
                  alt="designer"
                />
                <div className={styles['project-designers__item-info']}>
                  <div className={styles['project-designers__item-name-section']}>
                    <div className={styles['project-designers__item-name-en-name']}>{designer.name_en}</div>
                    <div className={styles['project-designers__item-name-kr-name']}>{designer.name}</div>
                  </div>
                  <a 
                    className={styles['project-designers__item-link']}
                    href={`${window.location.origin}/designer/${designer.student_number}`}
                    target="_blank"
                    rel="noreferrer"
                  >더 알아보기</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </>
  );
}

export default DetailProject;
