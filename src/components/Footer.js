import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-item">
          <h3><i class="fas fa-gamepad"></i> 취미 & 특기</h3>
          <p>취미: 게임, 만화</p>
          <p>특기: 게임</p>
        </div>
      </div>
      <p className="copyright">&copy; 2024. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
