import React from "react";
import { connect } from "react-redux";

import "./FoodCritic.css";
import FoodReviewContainer from "../FoodReviewContainer/FoodReviewContainer";

class FoodCritic extends React.Component {
  render() {
    const reviews = [
      {
        title: "A WEEK IN CHENGDU",
        review: [
          "Over the summer, I visited my mother's home town. It is a small section of the larger Chengdu metropolis called Ziyang. A little bit of background on this place: during World War 2, after the Japanese Army pushed the Chinese forces out of their capital of Nanjing, they were forced to look for a new capital and relocate. The new capital they decided on was Chengdu, and It was from this city where American forces stationed in preparation for their attacks against Japanese controlled South East Asia. It is also the center of China's Panda research (I guess that's cool too).",
          "The cuisine here is notorious for being spicy, so for me who spent the past two years in San Luis Obispo—where the hottest thing was black pepper, it took a bit of getting use to. The Sichuan peppercorn is a unique part of this cuisine because it provides a mouth-numbing effect on the food that can only be described as intoxicating. All my relatives made fun of me for my inability to handle this spice. My uncle told me that the reason why this food is so hot and spicy is that the winters in Chengdu are brutal, so they need something hot and spicy to get them through negative temperatures.",
          "One thing I really appreciated about this place is the freshness of the food. since Ziyang is about an hour out of the metropolis, it is a rather rural town which means fresh food and vegetables. The eggs I ate were laid within the last week, the chicken that my aunt prepared was running around in an open field the morning before, the oils were freshly pressed and the honey was retrieved from our own honeycombs. I had never had a true appreciation for how impactful fresh food is on flavor, everything just had that extra zing. In the past, I had always thought it was the skill of the chef that can make the most terrible of ingredients food, but I guess now I know that it is also the freshness of the ingredients. "
        ],
        imageLinks: ["https://imgur.com/q6zLiBy", "https://imgur.com/egbaXZM"]
      },
      {
        title: "DINNER AT MOURAD",
        review: [
          "Before the start of my 2019 summer internship, I went to San Francisco for a small vacation. While I was there, I got the chance to go to a lot of great Michelin Starred restaurants: one of them is Mourad. They serve Moroccan cuisine prepared by chef Chris Mourad and I can arguably say it is one of the best thing I have ever had in my life"
        ],
        imageLinks: []
      },
      {
        title: "A LONG WALK TO SPQR",
        review: [
          "During my trip to San Francisco, another restaurant I got to try was SPQR, which was named after the Roman republic—unsurprisingly, they served Italian cusine. It was a 45 minute walk from our hotel so by the time I got there I was famished and ready to eat."
        ]
      }
    ];

    return (
      <div className="fd-crtc__c" style={{ height: window.innerHeight - 62 }}>
        <p className="programmer__sc-flex2__subtitle">THE FOODIE</p>
        <h1 className="programmer__sc-flex2__title">BRYAN KWONG</h1>
        <p
          className="programmer__sc-flex2__container-title"
          style={{ marginBottom: "20px" }}
        >
          THE PLACES I'VE BEEN
        </p>

        {reviews.map((data, index) => (
          <FoodReviewContainer data={data} key={index} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  Ui: state.Ui,
  Enum: state.Enum
});

export default connect(mapStateToProps)(FoodCritic);
