import { ReactComponent as YesIcon } from "../../assets/icons/tick.svg";
import { ReactComponent as NoIcon } from "../../assets/icons/wrong.svg";
import "./index.css";
const ProductComparision = () => {
  const nutrientsComparison = [
    {
      compareText: "Probiotic content",
      neogreens: true,
      plantBased: true,
      animalBased: true,
      whey: false,
    },
    {
      compareText: "Organic nutrients",
      neogreens: true,
      plantBased: false,
      animalBased: false,
      whey: false,
    },
    {
      compareText: "Scientific backing transparency",
      neogreens: true,
      plantBased: true,
      animalBased: false,
      whey: false,
    },
    {
      compareText: "Taste profile",
      neogreens: true,
      plantBased: true,
      animalBased: false,
      whey: true,
    },
    {
      compareText: "Ingredient sourcing transparency",
      neogreens: true,
      plantBased: true,
      animalBased: false,
      whey: false,
    },
    {
      compareText: "Cognitive-enhancing ingredients",
      neogreens: true,
      plantBased: false,
      animalBased: false,
      whey: false,
    },
    {
      compareText: "Gut–Brain Axis support",
      neogreens: true,
      plantBased: false,
      animalBased: false,
      whey: false,
    },
    {
      compareText: "Avoids questionable fillers (e.g., Gums, Stevia)",
      neogreens: true,
      plantBased: false,
      animalBased: false,
      whey: false,
    },
    {
      compareText: "Pricing",
      neogreens: true,
      plantBased: false,
      animalBased: false,
      whey: false,
    },
    {
      compareText: "Ease of Use",
      neogreens: true,
      plantBased: false,
      animalBased: false,
      whey: false,
    },
  ];

  const height = 30;

  return (
    <section class="product-comparision-section">
      <div class="nutrients-wrap">
        <h2>One Scoop. 60+ Nutrients. It's That Easy.</h2>
        <p>
          NeoGreens is built to take the confusion out of wellness. you get the
          essentials – no synthetic ingredients, harsh formulas, or hidden
          additives. just smart, science-backed nutrition that respects your
          time and your trust.{" "}
        </p>
             <button className="buy-now-button">Buy Now</button>
      </div>
      <div class="container">
        <h2>How NeoGreens Compares</h2>
        <div class="table-responsive">
          <table class="comparison-table">
            <thead>
              <tr>
                <td className="comp-title">
                  <b>Information</b>
                </td>
                <td className="other-brands">
                  <b>NeoGreens</b>
                </td>
                <td className="other-brands">
                  <b>Bloom</b>
                </td>
                <td className="other-brands">
                  <b>Animal-Based</b>
                </td>
                <td className="other-brands">
                  <b>LiveItUp</b>
                </td>
              </tr>
            </thead>
            <tbody>
              {nutrientsComparison.map((row) => (
                <tr key={row.compareText}>
                  <td className="comp-title">{row.compareText}</td>
                  <td className="neo-greens-style">
                    {row.neogreens ? (
                      <YesIcon height={height} width={height} fill="green" />
                    ) : (
                      <NoIcon
                        height={height}
                        width={height}
                        color="lightgrey"
                      />
                    )}
                  </td>
                  <td className="other-brands">
                    {row.plantBased ? (
                      <YesIcon height={height} width={height} fill="green" />
                    ) : (
                      <NoIcon
                        height={height}
                        width={height}
                        color="lightgrey"
                      />
                    )}
                  </td>
                  <td className="other-brands">
                    {row.animalBased ? (
                      <YesIcon height={height} width={height} fill="green" />
                    ) : (
                      <NoIcon
                        height={height}
                        width={height}
                        color="lightgrey"
                      />
                    )}
                  </td>
                  <td className="other-brands">
                    {row.whey ? (
                      <YesIcon height={height} width={height} fill="green" />
                    ) : (
                      <NoIcon
                        height={height}
                        width={height}
                        color="lightgrey"
                      />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ProductComparision;
