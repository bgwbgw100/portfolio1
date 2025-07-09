import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className ="about-flex-box">
      <div className="about-left">
        <h1>도전과 성장을 즐기는<br />개발자 백관우입니다.</h1>
        <p>새로운 기술을 배우고 적용하는 과정에서 즐거움을 느끼며, 동료와 함께 시너지를 만들어내는 것을 중요하게 생각합니다.</p>
      </div>

      <section className="about">
        <h2><i class="fas fa-user"></i> 소개</h2>
        <div className="about-content">
          <div className="about-item">
            <h3><i class="fas fa-graduation-cap"></i> 학력</h3>
            <p><strong>배재대학교 컴퓨터수학과</strong> (2015.03 ~ 2021.08)</p>
            <ul>
              <li>C++, Java, Python 기초를 배우며 프로그래밍에 흥미를 느낌</li>
            </ul>
          </div>
          <div className="about-item">
            <h3><i class="fas fa-chalkboard-teacher"></i> 교육</h3>
            <p><strong>대덕인재개발원</strong> (2021.10 ~ 2022.05)</p>
            <ul>
              <li>Java 심화 및 WEB 이해</li>
              <li>자바스크립트 학습</li>
              <li>전자정부프레임워크 위주 학습</li>
            </ul>
          </div>

          <div className="about-item">
            <h3><i className="fas fa-building"></i> 경력</h3>
            <p><strong>(주)누림소프트</strong> (2022.12 ~ 2023.12)</p>
            <ul>
              <li>표본과 조사 데이터를 조인하며 통계쿼리 작성 및 복합 인덱스를 활용하여 최적화</li>
              <li>조사및 표본 입력 페이지 생성</li>
            </ul>
          </div>

          <div className="about-item">
            <h3><i className="fas fa-project-diagram"></i> 개인 프로젝트</h3>
            <p><strong>던파 정보 사이트 개발 및 배포</strong> (2025.04 ~ 진행중)</p>
            <ul>
              <li><strong>주요 기술:</strong> React, Spring Boot, Docker, Nginx, Naver Cloud, Github</li>
              <li><strong>사이트:</strong> <a href="http://www.dnf-info.com" target="_blank" rel="noopener noreferrer">www.dnf-info.com</a></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
