import { ReactComponent as ThunderIcon } from "../../assets/icons/thunder.svg";
import { ReactComponent as StomacIcon } from "../../assets/icons/stomac.svg";
import { ReactComponent as SecurityIcon } from "../../assets/icons/security.svg";
import { ReactComponent as DrinkingIcon } from "../../assets/icons/drinking.svg";
import { ReactComponent as TitltStomachIcon } from "../../assets/icons/tilt_stomach.svg";
import "./index.css";

const ProductBeinifitsSection = () => {
  const belowBenifits = [
    {
      id: 1,
      Icon: <ThunderIcon height={50} width={50} />,
      description: "Increased energy levels",
    },
    {
      id: 2,
      Icon: <StomacIcon height={50} width={50} />,
      description: "Improved gut health",
    },
    {
      id: 3,
      Icon: <SecurityIcon height={50} width={50} />,
      description: "Boosted Immunity",
    },
    {
      id: 4,
      Icon: <TitltStomachIcon height={50} width={50} />,
      description: "Natural Detox",
    },
    {
      id: 5,
      Icon: <DrinkingIcon height={50} width={50} />,
      description: "Daily nourishment",
    },
  ];
  return (
    <>
      <section className="product-benifits-section">
        <div className="product-benifits-left-section">
          <div className="product-benfit-title">
            <div className="text-container">
              <h2>Backed by Nature. Built for Your Routine.</h2>
              <p className="benifit-description">
                NeoGreens goes where you go - from home to the office to the
                gym. One scoop a day will help you overcome all your wellness
                roadblocks with ease.
              </p>
              <button className="buy-now-button">
                <span>Buy Now</span>
              </button>
              <img
                src="https://neogreens.com/wp-content/uploads/2025/09/nature.png"
                alt=""
                className="product-left-image"
              />
            </div>
          </div>
        </div>
        <div className="product-benifits-right-section">
          <div className="benifit-card">
            <div className="beifit-title-container">
              <img
                src="https://neogreens.com/wp-content/uploads/2025/06/Group-4962.svg"
                alt=""
              />
              <div className="desctiption-container">
                <h5>Feel Foggy or Unfocused?</h5>
                <p>
                  Designed to support mental clarity with B12 and adaptogens.{" "}
                </p>
              </div>
            </div>
            <img
              className="prodcut-benifit-right-images"
              src="https://neogreens.com/wp-content/uploads/2025/09/Image-1-3.png"
              alt=""
            />
          </div>
        </div>
      </section>
      <section class="benifits-below-section">
        <ul className="benifits-list">
          {belowBenifits.map(({ id, Icon, description }) => (
            <li key={id}>
              {Icon}
              <p>{description}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default ProductBeinifitsSection;
