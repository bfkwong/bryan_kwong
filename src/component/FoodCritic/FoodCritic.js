import React from "react";
import { connect } from "react-redux";

import "./FoodCritic.css";
import FoodReviewContainer from "../FoodReviewContainer/FoodReviewContainer";

class FoodCritic extends React.Component {
  constructor() {
    super();
    this.state = {
      expand: false
    };
  }

  render() {
    const reviews = [
      {
        title: "AN STATISTICAL ANALYSIS OF BOBA IN LA",
        review: [
          "With thousands of boba shops in the San Gabriel Valley, it becomes very difficult to decided which one is the best. Everyone has their own personal preferences so deciding where to go can become a challenging task. With this said, the goal of this study is to see where the best boba shops are and how much better they are. To ensure robust results, a design where random sampling is applied to 5 balanced categories, each of the categories being the location the boba shop is in. The 5 cities sampled is Alhambra, San Gabriel, Monterey Park, Temple City, and Pasadena and 8 different boba shops was random sampled from each of these locations. To this to avoid confounding variable in the observational study.",
          "We start by visualizing different explanatory variables and seeing how well these explain the variation in the quality of boba. These explanatory variables are price, location of the shop, and the number of reviews contributed to the overall ratings. The last EV was added adjust again a possible confounder.",
          "The study finds that there is a general association between price v. location, price v. quality, and location v. quality. Given that both price and location are explanatory variables, it means there will be covariation between the two EV, hindering our ability to draw a definitive conclusion. There is evidence to suggest that there is a statistically significant linear relationship between price and quality of boba. We are 95% certain that for every $1 dollar increase, there is at most a 7.7% increase in the quality of boba. Thus we are certain that if prices are higher, quality tends to be higher. Here, price explains 33% of the total variation in quality. ",
          "When it comes to location, there is no significant evidence to show that location has any impact on the true population quality of boba because we got a p-value of 0.20. However, on average Pasadena has the highest average rating at 4.55 while Monterey park has the lowest ratings at 3.99. For this particular dataset, location alone explains about 16% of total variation in quality. ",
          "Note that when we look the association between price and location, Pasadena tends to have the most expensive boba at the average cost of $4.97 while Temple City has the cheapest at the average of $4.13. This is evidence of a statistical interaction because we don’t know whether the boba in Pasadena is good because it’s in Pasadena or because it’s expensive. We can get around this issue by running a model with interaction. After we use the two variable model with interaction, we can see that even without price influencing the quality of boba, Pasadena still has the highest rating, thus allowing us to the make the conclusion that Pasadena boba is good regardless of price. The least square mean is the mean rating for each city after adjusting for the the price and the mean column on the right is the unadjusted mean.",
          "Additional variables such as longitude and latitude were explored however they yielded no significant result meaning that their closest to downtown LA has no influence on boba price. ",
          "From this dataset, we can say with 95% confidence that pricier boba tends to be of higher quality, however these pricier boba tend to be located in Pasadena.  A “worth it” boba should be one that has the highest quality to price ratio—meaning the highest quality per dollar. Below is a box plot of the cities with their quality to price ratio. We can see that Temple City has the highest quality per dollar ratio and it is where you would find the most 'worth it' boba.",
          "On the individual scale, the most 'worth it' boba is Share Tea in Pasadena, where the rating is 4.5 at the cost of $4 per cup of boba milk tea, giving it a worth it score of 1.12. This is then followed by Nest Tea House at 1.11 as well and then Tpumps at 1.10. While these are just technical descriptions of boba, nothing beats trying it for yourself, analytics can only go so far and what it cannot predict is up to the individual to decide whether the boba is good or bad."
        ]
      },
      {
        title: "A WEEK IN CHENGDU",
        review: [
          "Over the summer, I visited my mother's home town. It is a small section of the larger Chengdu metropolis called Ziyang. A little bit of background on this place: during World War 2, after the Japanese Army pushed the Chinese forces out of their capital of Nanjing, they were forced to look for a new capital and relocate. The new capital they decided on was Chengdu, and It was from this city where American forces stationed in preparation for their attacks against Japanese controlled South East Asia. It is also the center of China's Panda research (I guess that's cool too).",
          "The cuisine here is notorious for being spicy, so for me who spent the past two years in San Luis Obispo—where the hottest thing was black pepper, it took a bit of getting use to. The Sichuan peppercorn is a unique part of this cuisine because it provides a mouth-numbing effect on the food that can only be described as intoxicating. All my relatives made fun of me for my inability to handle this spice. My uncle told me that the reason why this food is so hot and spicy is that the winters in Chengdu are brutal, so they need something hot and spicy to get them through negative temperatures.",
          "Unfortunately, when I was visiting, the African Swine Fever was ravaging the Chinese pork population, making pork expensive and hard to come by. Hence, a lot of delicacies that I have come to expect were unfortunately not available. However, there was a lot of food I was able to eat. Salted duck eggs were one of the things I was able to try, it has the texted of normal chicken eggs but the smell is so much more fragrant. Another one was the spice fermented eggplants, which has such a depth of spice and flavor that every time you chew, you can taste something new and different. Finally, my favorite is Sichuan cold noodles, it is an egg noodle that has been cooked, then cooled, then tossed in a bath of chili oil, Sichuan peppercorn, spices, and fresh herbs.",
          "One thing I really appreciated about this place is the freshness of the food. since Ziyang is about an hour out of the metropolis, it is a rather rural town which means fresh food and vegetables. The eggs I ate were laid within the last week, the chicken that my aunt prepared was running around in an open field the morning before, the oils were freshly pressed and the honey was retrieved from our own honeycombs. I had never had a true appreciation for how impactful fresh food is on flavor, everything just had that extra zing. In the past, I had always thought it was the skill of the chef that can make the most terrible of ingredients food, but I guess now I know that it is also the freshness of the ingredients. "
        ],
        imageLinks: ["https://imgur.com/q6zLiBy", "https://imgur.com/egbaXZM"]
      },
      {
        title: "DINNER AT MOURAD",
        review: [
          "During the summer of 2019, I went to San Francisco for a small vacation. While I was there, I got the chance to go to a lot of great Michelin Starred restaurants: one of them is Mourad. Mourad serves Moroccan cuisine prepared by Chef Chris Mourad in a restaurant that can only be described as dazzling. The high ceilings, the tall glass windows, and dark ambiance just make it a fantastic place to spend a few hours enjoying world-class food. The Restaurant is located inside the history PacBell building which adds to the extravagance of the place. ",
          "Once we sat down, the waiter introduced the menu to us. She explained that the unique thing at Mourad is La'acha, a family-style dining experience. There are four options available for La'acha: Short Ribs, Lamb Shoulder, Snapper, and Chicken. We ultimately went for the Short Ribs. ",
          "After approximately 30 minutes, the Short Ribs came out with four sides: CousCous, Kale, Roasted Potatoes, Heirloom Beans. The problem with a lot of meat cooked for that long, they lose their color, however, these were incredibly tender, and looked (and tasted) like a perfect medium-rare; it simply melted in my mouth. It had the text adjacent to a Wagyu Steak. ",
          "The sides were no slouch either. One of my friends who hates kale with a  passion, he said that this dish made him love kale. All four of the sides were incredibly delicious and nearly faultless. It had the perfect balance of flavor. ",
          "Now, this meal is quite heavy. Which makes the dessert that much more important. There were dessert wines, dessert teas, and sweet desserts. I'm not sure what got into the other three, but the three of them combined ordered 8 desserts. All the desserts were amazingly light which balanced out the meal we just had.",
          "The final bill came out to $250 to feed four people, had they been a bit more sensible with the desserts, the meal would've worked out to approximately $60 to $70 per person. Which sounds high, but for the amount of food we got, it was comparable to a meal of similar prices at The Cheesecake Factory. For the experience and quality of the meal, I would say it was well worth the money."
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
          WHAT I THINK ABOUT FOOD
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
