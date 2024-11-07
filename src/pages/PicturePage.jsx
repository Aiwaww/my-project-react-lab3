import { useState } from 'react';
import PictureFive from '../../assets/img/picture_5.jpg';
import { MyModal } from '../components/MyModal';
const PicturePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <>
      <section className="main-container picture-info">
        <div className="stats">
          <div className="picture-title">
            <h2>Name: The East</h2>
            <p>Characteristics of the Painting “The East”</p>

            <ul className="stats-list">
              <li className="stats-item">
                <span>Year of creation: 2021</span>
              </li>
              <li className="stats-item">
                <span>Dimensions: 60 W x 80 H x 3 D cm</span>
              </li>
              <li className="stats-item">
                <span>Type of art: painting</span>
              </li>
              <li className="stats-item">
                <span>Style: pop art</span>
              </li>
              <li className="stats-item">
                <span>Genre: portrait</span>
              </li>
              <li className="stats-item">
                <span>Materials: acrylic, canvas</span>
              </li>
              <li className="stats-item">
                <span>Artist: Larisa Leah Dizlarka</span>
              </li>
            </ul>
          </div>
          <img src={PictureFive} alt="" className="pictures-img" />
        </div>
        <div className="info-container">
          <h5>Description</h5>
          <p className="info">
            Painting «The East» One of the pop art portrait paintings series.
            All portraits in this series are made in bright colors and consist
            of many colored fragments, like a kaleidoscope, creating an overall
            unique image. So every person in our world is beautiful and cannot
            be repeated. The center of the composition in the painting is the
            gaze of a young woman. Graphic elements go well with the
            carelessness of bright strokes. Thanks to this the work looks
            contemporary enough. The surface changes its appearance depending on
            the light direction due to the fluorescent colors of paints. The
            artist used wide strokes of a brush and palette knife techniques to
            express the emotional state of a young girl. Theme and Concept: The
            painting not only symbolizes the individual beauty and uniqueness of
            a person but also may hint at deeper cultural or geographical
            influences, reflected in its title “The East.” This could evoke an
            Eastern aesthetic or philosophical influences that are visually
            represented through shapes, colors, or symbols. The central gaze of
            the young woman becomes the focal point, expressing a sense of
            mystery, perhaps evoking contemplation or inner strength. Emotional
            Depth: The central focus on the young woman’s gaze not only holds
            aesthetic appeal but also carries a strong emotional charge. It may
            symbolize a search for identity, inner conflict, or self-discovery.
            The artist creates a contrast between the bright, vibrant colors and
            the complexity of emotions that can be read in her expression,
            portraying an emotional richness beneath the surface. Symbolism of
            Fragments: The kaleidoscope-like fragments could symbolize the
            multiplicity of the human identity, portraying different aspects of
            a person or even society. They may also suggest that every
            individual is an amalgamation of many experiences, emotions, and
            impressions, coming together to form a unique whole.
          </p>
          <h5>Author info</h5>
          <p className="info">
            Larisa Leah Dizlarka’s creative work is marked by a deep exploration
            of complex themes like time, identity, and femininity. She employs a
            variety of media, including painting, photography, digital art, and
            installations. A notable feature of her art is the use of bright,
            bold colors combined with expressive brushstrokes and mixed media to
            explore emotional and philosophical concepts. Dizlarka's exhibitions
            have been held in countries like Spain, Israel, and the UK, and her
            works are part of private collections worldwide. Her artistic focus
            often revolves around time—she reflects on the transitions between
            life and death, as well as the ever-changing relationship between
            humans and time. Femininity and the evolving roles of women in
            society are also central themes in her work, where she often
            portrays women through powerful and introspective imagery.
            Dizlarka's technique combines traditional and modern elements, from
            palette knives and broad brushstrokes to digital manipulation. She
            frequently creates kaleidoscopic compositions and uses fluorescent
            paints to emphasize the dynamic interaction between color and light.
            Her works also include collages and generative art, allowing her to
            experiment with fragmented visual forms to express the multifaceted
            nature of identity. Throughout her career, she has contributed to
            various charity projects, including auctions supporting Ukraine and
            other humanitarian causes. Her innovative use of materials and her
            bold exploration of identity make her a significant figure in
            contemporary art.
          </p>
        </div>
      </section>

      <button onClick={openModal}>
        <img
          className="info-icon icon"
          src="https://img.icons8.com/ios7/600/info.png"
          alt=""
        />
      </button>

      <MyModal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Feedback</h2>
        <p>
          Your opinion is important to us. Leave feedback about our site and
          help us become better
        </p>
      </MyModal>
    </>
  );
};
export default PicturePage;
