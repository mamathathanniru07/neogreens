import { ReactComponent as Quote } from "../../assets/icons/quote.svg";
import "./index.css";

const TestiMonials = () => {
  const testimonials = [
    {
      title: "Finally, mental clarity that sticks with just one scoop.",
      text: "Between work and workouts, my mind used to feel fogged by midday. NeoGreens changed the game. Now I'm sharp, calm, and focused even on the toughest days.",
      name: "Krithi Koushal",
      profileImg: "https://picsum.photos/seed/krithi/200/200",
      quoteImg: "https://picsum.photos/seed/quote1/50/50",
    },
    {
      title: "No more bloating, only a lighter, happier gut.",
      text: "I’ve tried everything for digestion, but nothing helped like NeoGreens. The probiotics and enzymes are gentle but mighty my stomach feels balanced, refreshed, and energized.",
      name: "Midhun Roy",
      profileImg: "https://picsum.photos/seed/midhun/200/200",
      quoteImg: "https://picsum.photos/seed/quote2/50/50",
    },
    {
      title: "Reset my routine inside and out.",
      text: "Ditching my multitabs for NeoGreens simplified my mornings. Just one scoop gives me gut support, clean energy, and focus. I feel more grounded and ready to tackle the day.",
      name: "Jennifer",
      profileImg: "https://picsum.photos/seed/jennifer/200/200",
      quoteImg: "https://picsum.photos/seed/quote3/50/50",
    },
    {
      title: "From sluggish to unstoppable.",
      text: "I was dragged down by sluggish mornings—lack of energy, poor focus, uncomfortable digestion. NeoGreens turned that around. One daily scoop, and I’m more alert, active, and resilient.",
      name: "Rahul Harrison",
      profileImg: "https://picsum.photos/seed/rahul/200/200",
      quoteImg: "https://picsum.photos/seed/quote4/50/50",
    },
    // {
    //   title: "One scoop, so many wins.",
    //   text: "Travel, gym, work—NeoGreens travels with me. It’s like a reset button: better digestion, clearer mind, and more energy. Finally, a wellness routine that fits my life.",
    //   name: "Emily Johnson",
    //   profileImg: "https://picsum.photos/seed/emily/200/200",
    //   quoteImg: "https://picsum.photos/seed/quote5/50/50",
    // },
  ];

  return (
    <>
      <section className="testimonials-section">
          {testimonials.map((t) => (
            <div className="testimonials-card" key={t.name}>
              <Quote />
              <p className="testimonials-title">
                <b>"{t.title}"</b>
              </p>
              <p className="testimonials-text">{t.text}</p>
              <div className="testimonials-details">
                <img src={t.profileImg} alt={t.name} />
                <p>{t.name}</p>
              </div>
            </div>
          ))}
      </section>
      <section class="bottom-section">
        <div class="bottom-container">
          <div class="description-main-container">
            <div class="description-cont">
              <h2>When You’re Ready, NeoGreens is Here.</h2>
              <p>One clean, simple habit to help you feel better every day.</p>
              <button className="buy-now-button">Buy Now</button>
            </div>
          </div>
          <div class="image-container">
            <img
              src="https://neogreens.com/wp-content/uploads/2025/09/Frame-1-4.png"
              alt=""
              class="product-cover-img"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default TestiMonials;
