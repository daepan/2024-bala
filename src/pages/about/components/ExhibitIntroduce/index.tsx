import styles from './ExhibitIntroduce.module.scss';
import useMediaQuery from 'utils/hooks/useMediaQuery';
import balaPoster from './Asset/bala-poster.jpg';
import exhibitMap from './Asset/exhibitionMap.png';
import mobility from './Asset/mobility.png';
import care from './Asset/care.png';
import living from './Asset/living.png';
import { ReactComponent as ToTheTopIcon } from 'Asset/to-the-top.svg';
import { ReactComponent as KoreatechIcon } from 'Asset/koreatech.svg';
import { ReactComponent as DscIcon } from 'Asset/dsc.svg';
import { ReactComponent as IdeIcon } from 'Asset/ide.svg';
import { ReactComponent as LincIcon } from 'Asset/linc.svg';
import { ReactComponent as SeedkeeperIcon } from 'Asset/seedkeeper.svg';
import { ReactComponent as SmartHumanInterfaceIcon } from 'Asset/smart-human-interface.svg';
import TopButton from 'components/TopButton';

const MEMBERS = [
  {
    group: '위원단장',
    member: '강호정 황민성'
  },
  {
    group: '기획부',
    member: '김이연 오기석 사공도영 이서하 정해민 조용현 천세강'
  },
  {
    group: '진행부 ',
    member: '박채연 김도훈 박정빈 박지윤 신민우 윤채원 이예빈'
  },
  {
    group: '총무부',
    member: '김두언 김수현 이시온'
  },
  {
    group: '편집부',
    member: '김지민 곽우령 김승규 김익현 백승선 신동찬 이수빈 이한 최성우'
  },
  {
    group: '홍보부',
    member: '김다준 김혜민 이승은 최혁수'
  },
  {
    group: '도록부',
    member: '김채은 김정연 김호빈 원윤섭 최민경 최성일'
  }
];

function ExhibitIntroduce() {
  const isMobile = useMediaQuery();

  return (
    <>
      <div className={styles['container']}>
        {isMobile && (
          <img
            className={styles['mobile-bala-poster']}
            src={balaPoster}
            alt="발아 졸업 전시회 포스터"
          />
        )}
        <div className={styles['exhibit-introduce-section']}>
          {isMobile ? (
            <>
              <div className={styles['mobile-section']}>
                <div className={styles['title']}>전시 소개</div>
                <div className={styles['info-section__info']}>
                  씨앗에서부터 더 높은 단계로 나아가기 위한 출발. 발아는 단순한
                  생명의 시작을 넘어, 가능성과 희망, 그리고 무한한 잠재력의
                  상징입니다. 모여있던 홀씨들은 4년간 한 곳에서 함께 배우고
                  성장하며 이제 새로운 곳으로 비상할 준비를 마쳤습니다.
                  <br />
                  <br /> 더 멀리 낯선 곳에서 꽃 피우기 위한 우리의 도약을 이번
                  전시를 통해 선보이고자 합니다. <br />
                  <br />
                  2024 한국기술교육대학교 디자인공학과 졸업 전시에서는 총 23개의
                  팀이
                  <br />
                  Mobility, Care, Living 분야에서 각자의 ‘디자인 해석’을 싹
                  틔웁니다.
                  <br />
                  <br />
                  작은 씨앗을 품고 세상으로 날아오르는 도약의 순간, 우리들의
                  멋진 발아를 응원해주세요.
                </div>
              </div>
            </>
          ) : (
            <>
              <div className={styles['title']}>전시 소개</div>
              <div className={styles['info-section']}>
                <img
                  className={styles['bala-poster']}
                  src={balaPoster}
                  alt="발아 졸업 전시회 포스터"
                />
                <div className={styles['info-section__info']}>
                  씨앗에서부터 더 높은 단계로 나아가기 위한 출발. 발아는 단순한
                  생명의 시작을 넘어, 가능성과 희망, 그리고 무한한 잠재력의
                  상징입니다. 모여있던 홀씨들은 4년간 한 곳에서 함께 배우고
                  성장하며 이제 새로운 곳으로 비상할 준비를 마쳤습니다.
                  <br />
                  <br /> 더 멀리 낯선 곳에서 꽃 피우기 위한 우리의 도약을 이번
                  전시를 통해 선보이고자 합니다. <br />
                  <br />
                  2024 한국기술교육대학교 디자인공학과 졸업 전시에서는 총 23개의
                  팀이
                  <br />
                  Mobility, Care, Living 분야에서 각자의 ‘디자인 해석’을 싹
                  틔웁니다.
                  <br />
                  <br />
                  작은 씨앗을 품고 세상으로 날아오르는 도약의 순간, 우리들의
                  멋진 발아를 응원해주세요.
                </div>
              </div>
            </>
          )}
          <div className={styles['category-section']}>
            <div className={styles['title']}>CATEGORY</div>
            <div className={styles['category-section__info']}>
              ‘발아’ 전시의 프로젝트는
              <br />
              Mobility, Care, Living 3가지
              <br />
              카테고리로 나누어져 있습니다.
            </div>
            <div className={styles['category-section__detail']}>
              <div className={styles['category-section__detail-type']}>
                <img src={mobility} alt="mobility" />
                <span>Mobility</span>
              </div>
              <div className={styles['category-section__detail-type']}>
                <img src={care} alt="care" />
                <span>Care</span>
              </div>
              <div className={styles['category-section__detail-type']}>
                <img src={living} alt="living" />
                <span>Living</span>
              </div>
            </div>
          </div>
          <div className={styles['exhibit-section']}>
            <div>
              <div className={styles['title']}>전시 안내도</div>
              <div className={styles['exhibit-section__info']}>
                각 전시자들의 작품이 전시되어 있는 Exhibition Zone과 <br />
                전시 컨텐츠를 즐길 수 있는 Contents Zone이 있습니다.
              </div>
              <div className={styles['exhibit-section__detail']}>
                <ul className={styles['exhibit-section__detail-title']}>
                  <span>Exhibition</span>
                  <li className={styles['exhibit-section__detail-info']}>
                    Mobility
                  </li>
                  <li className={styles['exhibit-section__detail-info']}>
                    Care
                  </li>
                  <li className={styles['exhibit-section__detail-info']}>
                    Living
                  </li>
                </ul>
                <ul className={styles['exhibit-section__detail-title-number']}>
                  <span>Contents</span>
                  <li className={styles['exhibit-section__detail-info']}>
                    Introduction
                  </li>
                  <li className={styles['exhibit-section__detail-info']}>
                    Media
                  </li>
                  <li className={styles['exhibit-section__detail-info']}>
                    Interview
                  </li>
                  <li className={styles['exhibit-section__detail-info']}>
                    Project
                  </li>
                </ul>
              </div>
            </div>
            <img src={exhibitMap} alt="exhibitMap" />
          </div>
          <div className={styles['committee-section']}>
            <div className={styles['title']}>졸업준비위원회</div>
            <div className={styles['committee-section__member-section']}>
              {MEMBERS.map(item => (
                <div
                  className={styles['committee-section__member']}
                  key={item.group}
                >
                  <div className={styles['committee-section__member-group']}>
                    {item.group}
                  </div>
                  <div
                    className={styles['committee-section__member-group-unit']}
                  >
                    {item.member}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles['sponsor-section']}>
          <KoreatechIcon className={styles['koreatechIcon']} />
          <IdeIcon className={styles['ideIcon']} />
          <LincIcon className={styles['lincIcon']} />
          <DscIcon className={styles['dscIcon']} />
          <SmartHumanInterfaceIcon
            className={styles['smartHumanInterfaceIcon']}
          />
          <SeedkeeperIcon className={styles['seedkeeperIcon']} />
        </div>
      </div>
    </>
  );
}

export default ExhibitIntroduce;
