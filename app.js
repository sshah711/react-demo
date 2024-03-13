import React from "react";
import ReactDOM from "react-dom/client";
// const heading=React.createElement("h1",
// {id:"heading"},
// "hello sakshi shah")
// console.log(heading) //object
//     const root= ReactDOM.createRoot(document.getElementById("root"))
//     root.render(heading)
/**
 * <div id="p"> 
  *<div id="c">
    *<p>Different </p> 
     *<p>Different </p>
    *</div>
     *<div id="c2">
    *<p>Different </p>
     *<p>Different </p>
    *</div>
*</div>
 
const heading = React.createElement("div",{id:"p"},
                        [ React.createElement("div",{id:"c"},
                                 [React.createElement("h1",{},"hello multiple"),
                                 React.createElement("h2",{},"hello 2nd multiple")]
                                 ),
                        React.createElement("div",{id:"c2"},
                                 [React.createElement("h1",{},"hello 3multiple"),
                                 React.createElement("h2",{},"helloo 4nd multiple")]
                                 )
                                ]
                                 )
console.log(heading) //object
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading)
*/
//const heading = React.createElement("h1",{id:"p"},"hello")

//react element
/** 
const h = <h1 id="p">title</h1>;
console.log(h);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(h);

//react Component
//1. class base C       2. functional C
const HeadingC1 = () => (
  <div>
    <h1 id="p">hiii</h1>
  </div>
);

//component composition

const HeadingC = () => (
  <div>
    <HeadingC1 />
    {h}
    <h1 id="p">hiii hellooooo</h1>
  </div>
);

const r = ReactDOM.createRoot(document.getElementById("root"));
r.render(<HeadingC />);
*/

/**
header
  logo
  nav items

body
  search
  restaurant container
    Restaurantcards
      img
      name of res, rating, cuisine, delevery time 
footer
  copyright
  links
  address
  contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-con">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        />
      </div>
      <div className="nav">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    sla,
    costForTwo
  } = resData?.info;

  console.log(resData);
  return (
    <div className="restaurant-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />

      <h3>{name} </h3>
      <h4> {cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4> {costForTwo}</h4>
      <h4>{sla.deliveryTime} mins</h4>
      {/* <h4>4.4 stars</h4> */}
    </div>
  );
};
const resOBJ = [
  {
    info: {
      id: "240796",
      name: "Pizza Hut",
      cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
      locality: "Kudasan Road",
      areaName: "Gandhinagar",
      costForTwo: "₹600 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.1,
      parentId: "721",
      avgRatingString: "4.1",
      totalRatingsString: "1K+",
      
      sla: {
        deliveryTime: 32,
        lastMileTravel: 8.7,
        serviceability: "SERVICEABLE",
        slaString: "32 mins",
        lastMileTravelString: "8.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-14 03:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-e287f52a-dd6a-4fb7-ae5e-712de11fdc85",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/pizza-hut-kudasan-road-gandhinagar-ahmedabad-240796",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "168122",
      name: "McDonald's",
      cloudinaryImageId: "03501c33ecb3a3105124441e541e6fe4",
      locality: "SARGASAN CROSS ROAD",
      areaName: "GANDHINAGAR",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      avgRating: 4.3,
      parentId: "630",
      avgRatingString: "4.3",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 10.9,
        serviceability: "SERVICEABLE",
        slaString: "29 mins",
        lastMileTravelString: "10.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-14 03:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹199",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-e287f52a-dd6a-4fb7-ae5e-712de11fdc85",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/mcdonalds-sargasan-cross-road-gandhinagar-ahmedabad-168122",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "765053",
      name: "KFC",
      cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
      locality: "Kudasan",
      areaName: "Gandhinagar",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
      avgRating: 4.2,
      parentId: "547",
      avgRatingString: "4.2",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 24,
        lastMileTravel: 8.7,
        serviceability: "SERVICEABLE",
        slaString: "24 mins",
        lastMileTravelString: "8.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-13 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-e287f52a-dd6a-4fb7-ae5e-712de11fdc85",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/kfc-kudasan-gandhinagar-ahmedabad-765053",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "806685",
      name: "Burger King",
      cloudinaryImageId: "aa77cb6fce4d94f3ad4b4e7fb42782db",
      locality: "Satavahana Nagar",
      areaName: "Gandhinagar",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.1,
      parentId: "166",
      avgRatingString: "4.1",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 9.5,
        serviceability: "SERVICEABLE",
        slaString: "29 mins",
        lastMileTravelString: "9.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-13 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-e287f52a-dd6a-4fb7-ae5e-712de11fdc85",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/burger-king-satavahana-nagar-gandhinagar-ahmedabad-806685",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "565280",
      name: "Wendy's Burgers",
      cloudinaryImageId: "f1aa621021a2826088089b89842d4e7c",
      locality: "Near Aashka Multispeciality Hospital",
      areaName: "Gandhinagar",
      costForTwo: "₹200 for two",
      cuisines: ["Burgers", "American", "Fast Food", "Snacks", "Beverages"],
      avgRating: 4.4,
      parentId: "972",
      avgRatingString: "4.4",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 33,
        lastMileTravel: 10.7,
        serviceability: "SERVICEABLE",
        slaString: "33 mins",
        lastMileTravelString: "10.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-13 23:59:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹149",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-e287f52a-dd6a-4fb7-ae5e-712de11fdc85",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/wendys-burgers-near-aashka-multispeciality-hospital-gandhinagar-ahmedabad-565280",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "613850",
      name: "Great Indian Khichdi by EatFit",
      cloudinaryImageId: "6e44fd7f1e5cd9967edfe47c10247671",
      locality: "Near Reliance Cross Road",
      areaName: "Sargasan",
      costForTwo: "₹200 for two",
      cuisines: ["Indian", "Home Food", "Healthy Food", "Snacks"],
      avgRating: 4.5,
      veg: true,
      parentId: "319582",
      avgRatingString: "4.5",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 26,
        lastMileTravel: 9.4,
        serviceability: "SERVICEABLE",
        slaString: "26 mins",
        lastMileTravelString: "9.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-14 01:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "brand",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "brand",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-e287f52a-dd6a-4fb7-ae5e-712de11fdc85",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/great-indian-khichdi-by-eatfit-near-reliance-cross-road-sargasan-ahmedabad-613850",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "678169",
      name: "Rivaj-Gujarati Rasthal",
      cloudinaryImageId: "051933cdf9ff831f0dadf5a2f93b13a3",
      locality: "Sarthak Pulse Mall",
      areaName: "Gandhinagar",
      costForTwo: "₹400 for two",
      cuisines: ["Gujarati", "Sweets"],
      avgRating: 4.4,
      veg: true,
      parentId: "405364",
      avgRatingString: "4.4",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 10.8,
        serviceability: "SERVICEABLE",
        slaString: "30 mins",
        lastMileTravelString: "10.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-13 15:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-e287f52a-dd6a-4fb7-ae5e-712de11fdc85",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/rivaj-gujarati-rasthal-sarthak-pulse-mall-gandhinagar-ahmedabad-678169",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "45320",
      name: "Subway",
      cloudinaryImageId: "1ace5fa65eff3e1223feb696c956b38b",
      locality: "Super Mall 1",
      areaName: "Infocity",
      costForTwo: "₹350 for two",
      cuisines: ["Healthy Food", "Salads", "Snacks", "Desserts", "Beverages"],
      avgRating: 4.2,
      parentId: "2",
      avgRatingString: "4.2",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 9.6,
        serviceability: "SERVICEABLE",
        slaString: "29 mins",
        lastMileTravelString: "9.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-13 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-e287f52a-dd6a-4fb7-ae5e-712de11fdc85",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/subway-super-mall-1-infocity-ahmedabad-45320",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "45527",
      name: "Faasos - Wraps, Rolls & Shawarma",
      cloudinaryImageId: "af33b81798b11deba338e94b7585d348",
      locality: "Near Aashka Multispeciality Hospital",
      areaName: "Gandhinagar",
      costForTwo: "₹200 for two",
      cuisines: [
        "Kebabs",
        "Fast Food",
        "Snacks",
        "American",
        "Healthy Food",
        "Desserts",
        "Beverages",
      ],
      avgRating: 4.4,
      parentId: "21809",
      avgRatingString: "4.4",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 10.6,
        serviceability: "SERVICEABLE",
        slaString: "32 mins",
        lastMileTravelString: "10.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-03-13 23:59:00",
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "guiltfree/GF_Logo_android_3x",
                  shortDescription: "options available",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-e287f52a-dd6a-4fb7-ae5e-712de11fdc85",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/faasos-wraps-rolls-and-shawarma-near-aashka-multispeciality-hospital-gandhinagar-ahmedabad-45527",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">search</div>
      <div className="restaurant-con">
        {
          resOBJ.map((r)=>(
            <RestaurantCard resData={r} />
          ))
        }
       
        {/* <RestaurantCard /> */}
      </div>
    </div>
  );
};

const App = () => {
  <Header />;
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
