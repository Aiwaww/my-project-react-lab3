import { MyHeader } from '../components/MyHeader';
import { MyButton } from '../components/MyButton';

import PictureOne from '../../assets/img/picture_1.jpg';
import PictureTwo from '../../assets/img/picture_2.jpg';
import PictureThree from '../../assets/img/picture_3.jpg';
import PictureFour from '../../assets/img/picture_4.jpg';
import PictureFive from '../../assets/img/picture_5.jpg';
import PictureSix from '../../assets/img/picture_6.jpg';
import PictureSeven from '../../assets/img/picture_7.jpg';
import PictureEight from '../../assets/img/picture_8.jpg';
import { Link } from 'react-router-dom';
import { MyModal } from '../components/MyModal';
import { useState } from 'react';
const MainPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <main className="main">
      <div className="main-container hero">
        <h2>ARTELOISE ONLINE ART GALLERY</h2>
        <p>
          Welcome to the best art community for everyone, a place where art
          unites. Immerse yourself in art with us
        </p>
        <MyButton text="DETAILS" onClick={openModal} />
      </div>
      <MyModal isOpen={isModalOpen} onClose={closeModal}>
        <h2>New collections are ready!</h2>
        <p>
          Welcome! Get exclusive access to new collections. Please register
          right now
        </p>
      </MyModal>
      <section className="main-container selector">
        <span>Top pictures for the month</span>
        <div className="buttons-list">
          <MyButton text="Modern" />
          <MyButton text="Impressionism" />
          <MyButton text="Realism" />
          <MyButton text="Abstract" />
        </div>
      </section>
      <section className="main-container">
        <ul className="pictures-list">
          {/* ONE */}
          <li>
            <Link to={'/picture'}>
              <div className="picture-container">
                <img className="pictures-img" src={PictureOne} alt="" />
                <h3>While Coral</h3>
                <p>50×50 cm, acrylic/canvas</p>
              </div>
            </Link>
          </li>
          {/* TWO */}
          <li>
            <Link to={'/err'}>
              <div className="picture-container">
                <img className="pictures-img" src={PictureTwo} alt="" />
                <h3>Mystical Sky Reflected</h3>
                <p>60×60 cm, oil/canvas</p>
              </div>
            </Link>
          </li>
          {/* THREE */}
          <li>
            <Link to={'/err'}>
              <div className="picture-container">
                <img className="pictures-img" src={PictureThree} alt="" />
                <h3>TEXTURED CANDLES in GREEN</h3>
                <p>110×130 cm, acrylic/canvas</p>
              </div>
            </Link>
          </li>
          {/* FOUR */}
          <li>
            <Link to={'/err'}>
              <div className="picture-container">
                <img className="pictures-img" src={PictureFour} alt="" />
                <h3>Red ball</h3>
                <p>80×75 cm, oil/canvas</p>
              </div>
            </Link>
          </li>
          {/* FIVE */}
          <li>
            <Link to={'/err'}>
              <div className="picture-container">
                <img className="pictures-img" src={PictureFive} alt="" />
                <h3>High Low & Inbetween</h3>
                <p>91.4×91.4 cm, acrylic/canvas</p>
              </div>
            </Link>
          </li>
          {/* SIX */}
          <li>
            <Link to={'/err'}>
              <div className="picture-container">
                <img className="pictures-img" src={PictureSix} alt="" />
                <h3>Chasing The Sunshine</h3>
                <p>111.8×139.7 cm, acrylic/canvas</p>
              </div>
            </Link>
          </li>
          {/* SEVEN */}
          <li>
            <Link to={'/err'}>
              <div className="picture-container">
                <img className="pictures-img" src={PictureSeven} alt="" />
                <h3>Rebirth</h3>
                <p>40×50 cm, oil/canvas</p>
              </div>
            </Link>
          </li>
          {/* EIGHT */}
          <li>
            <Link to={'/err'}>
              <div className="picture-container">
                <img className="pictures-img" src={PictureEight} alt="" />
                <h3>Groningen Netherlands</h3>
                <p>40×50 cm, oil/canvas</p>
              </div>
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default MainPage;
