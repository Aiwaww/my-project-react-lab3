import Twitter from '../../assets/img/twitter.svg';
import Instagram from '../../assets/img/instagram.svg';
import Youtube from '../../assets/img/youtube.svg';
export function MyFooter() {
  return (
    <footer className="footer">
      <ul className="footer-base-list">
        <li className="footer-base-item">
          <h4>CONTACT INFO</h4>
          <span>Contact Us</span>
          <span>About Us</span>
          <span>Help Center</span>
        </li>
        <li className="footer-base-item">
          <h4>FOR ARTISTS</h4>
          <span>Courses</span>
          <span>Opportunities</span>
          <span>Articles</span>
        </li>
        <li className="footer-base-item">
          <h4>FOLLOW US</h4>
          <div className="footer-networks">
            <img className="network" src={Twitter} alt="" />
            <img className="network" src={Instagram} alt="" />
            <img className="network" src={Youtube} alt="" />
          </div>
        </li>
      </ul>
      <div className="footer-down">
        <p>©2024 Arteloise</p>
        <div className="footer-links">
          <span>Terms of Use</span>
          <span>Privacy Police</span>
          <span>Return Policy</span>
          <span>Copyright</span>
        </div>
      </div>
    </footer>
  );
}
