import PictureOne from '../../assets/img/picture_1.jpg';
import PictureThree from '../../assets/img/picture_3.jpg';
import PictureFive from '../../assets/img/picture_5.jpg';
import Like from '../../assets/img/heart.svg';
import { getItem, setItem } from '../helper/localStore';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const getCurrent = async () => {
      try {
        const response = await axios.get('/auth/current', {
          headers: { Authorization: `Bearer ${getItem('TOKEN')}` },
        });

        const data = response.data;
        console.log(data);

        if (!data.token) {
          return;
        }
        setItem('TOKEN', data.token);
        setItem('EMAIL', data.email);

        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setItem('TOKEN', '');
        setItem('EMAIL', '');
        navigate('/auth');
      }
    };

    getCurrent();
  }, [navigate]);
  return (
    <section className="profile">
      <div className="profile-info">
        <div>
          <h2>Personal Data</h2>
          <p>Email: {userData?.email || '<email>'}</p>
        </div>
        <img
          className="user-img"
          src="https://cdn.creazilla.com/icons/3217307/user-square-icon-lg.png"
          alt=""
        />
      </div>
      <ul className="liked-list">
        <p>Liked pics</p>
        <li className="liked-item">
          <div className="liked-item-box">
            <img src={PictureOne} alt="" className="img" />
            <div className="item-infos">
              <span>Name: Meeting at a cafe</span>
              <span>Original drawing, 50x45.5 cm, 2024</span>
            </div>
          </div>
          <img src={Like} alt="" className="icon" />
        </li>
        <li className="liked-item">
          <div className="liked-item-box">
            <img src={PictureThree} alt="" className="img" />
            <div className="item-infos">
              <span>Name: Souls of Trees: Autumn Symphony</span>
              <span>Original photo, 50x50 cm, 2024</span>
            </div>
          </div>
          <img src={Like} alt="" className="icon" />
        </li>
        <li className="liked-item">
          <div className="liked-item-box">
            <img src={PictureFive} alt="" className="img" />
            <div className="item-infos">
              <span>Name: Magnolia</span>
              <span>Original artwork, 85x100 cm, 2024</span>
            </div>
          </div>
          <img src={Like} alt="" className="icon" />
        </li>
      </ul>
      ;
    </section>
  );
};
export default ProfilePage;
