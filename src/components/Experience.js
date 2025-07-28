import React, { useState } from 'react';
import './Experience.css';

const experiences = [
  {
    id: 'nurimsoft',
    title: '(주)누림소프트',
    period: '2022.12 ~ 2023.12',
    content: (
      <div className="details-layout">
        <div className="details-column">
          <h4>주요 업무</h4>
          <ul>
            <li>표본과 조사 데이터 통계쿼리 작성</li>
            <li>복합 인덱스를 활용한 쿼리 최적화</li>
            <li>조사및 표본입력 페이지 생성</li>
          </ul>
          <h4>주요 기술</h4>
          <ul>
            <li><b>Backend:</b> Spring Boot</li>
            <li><b>Frontend:</b> Thymeleaf</li>
            <li><b>Database:</b> Oracle, Toad</li>
          </ul>
        </div>
        <div className="details-column">
          <h4>주요 성과</h4>
          <ul>
            <li>쿼리 실행 계획(Execution Plan)을 분석하여 조인 순서를 최적화하고, 옵티마이저 힌트(Hint)를 활용해 작은 테이블이 큰 테이블의 인덱스를 효율적으로 사용하도록 유도했습니다. 이를 통해 불필요한 디스크 I/O를 줄이고 데이터 처리 성능을 크게 향상시켰습니다.</li>
            <li>정렬 작업 시, ORDER BY 절이 인덱스를 사용하도록 쿼리를 재구성하여 Filesort를 방지하고 디스크 I/O 발생을 최소화했습니다.</li>
            <li>회의를 통한 통계 실무자들의 불편사항및 자주쓰는 사항을 받아들여 사용자 친화적으로 UI/UX를 지속적으로 변경</li>
            <li>반복적인 단일 INSERT 문을 UNION ALL을 활용한 방식으로 전환하여, 서버와 데이터베이스 간의 통신 반복을을 줄이고 대량 데이터 입력 성능을 개선했습니다. 주로(MERGE 활용)</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: 'dnf-project',
    title: '던파 정보 사이트',
    period: '2025.05 ~ 진행중',
    content: (
      <div className="details-layout">
        <div className="details-column">
          <h4>주요 기능</h4>
          <ul>
            <li>캐릭터 상세정보 검색</li>
            <li>특별 경매 최적가</li>
            <li>증폭 시뮬레이션</li>
            <li>장비 내실 점수</li>
            <li>최종 마법부여 시뮬 최적가 계산</li>
          </ul>
          <h4>기술 스택</h4>
          <ul>
            <li><b>Frontend:</b> React, JavaScript</li>
            <li><b>Backend:</b> Java, Spring Boot</li>
            <li><b>Database:</b> MongoDB</li>
            <li><b>Infra:</b> Docker, Nginx, Naver Cloud, GitHub</li>
            <li><b>URL:</b> <a href="https://www.dnf-info.com" target="_blank" rel="noopener noreferrer">www.dnf-info.com</a></li>
            <li><b>IDE:</b> Windsurf, VSCode</li>
          </ul>
        </div>
        <div className="details-column">
          <h4>주요 성과</h4>
          <ul>
            <li>Nexon OpenAPI로 조회한 경매장 데이터를 기반으로, 복수 재료의 조합 비용을 계산하여 아이템 제작의 최적 비용을 산출하는 로직을 구현</li>
            <li>API의 요청을 제한하기위해 일정시간의 딜레이를 적용하여 데이터 제공</li>
            <li>장비내실을 점수로 환산하여 제공</li>
            <li>스케줄러를 통해 필요한 API 데이터를 주기적으로 캐싱하여 API 요청 최적화</li>
          </ul>
          <h4>개발 예정</h4>
          <ul>
            <li>캐시아이템 실시간 골드 환산</li>
            <li>내실 업그레이드 로드맵</li>
          </ul>
        </div>
      </div>
    )
  }
];

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(experiences[0]);

  return (
    <section className="experience-container">
      <h2><i className="fas fa-briefcase"></i> 경력 및 활동</h2>
      <div className="experience-layout">
        <div className="experience-nav">
          <ul>
            {experiences.map(exp => (
              <li 
                key={exp.id} 
                className={selectedExperience.id === exp.id ? 'active' : ''}
                onClick={() => setSelectedExperience(exp)}
              >
                {exp.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="experience-content">
          <h3>{selectedExperience.title}</h3>
          <p className="period">{selectedExperience.period}</p>
          <div>{selectedExperience.content}</div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
