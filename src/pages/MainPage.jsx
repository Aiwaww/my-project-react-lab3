import { MyHeader } from '../components/MyHeader';
import { MyButton } from '../components/MyButton';
const MainPage = () => {
  return (
    <>
      <section>
        <h2>ARTELOISE ONLINE ART GALLERY</h2>
        <p>
          Welcome to the best art community for everyone, a place where art
          unites. Immerse yourself in art with us
        </p>
        <MyButton text="DETAILS" />
      </section>
      <section>
        <ul>
          <li>
            <div>
              <img src="" alt="" />
              <h3></h3>
              <p></p>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
};

export default MainPage;
