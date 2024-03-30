import React, { useEffect, useState } from "react";
import styles from "./DashBoard.module.css";
import { GetAllProducts } from "../../../apiCalls/ApiCalls";
import heartDefault from "../../../Assets/defaultheart.svg";
import heartSelected from "../../../Assets/selectedheart.svg";

const DashBoard = () => {
  const [isFilterShow, setIsFilterShow] = useState(true);
  const [likedItems, setLikedItems] = useState(new Set());
  const [storeData, setStoreData] = useState([]);
  const [isRecommended, setIsRecommended] = useState(false);

  const customizableFilter = [
    { filterName: "Ideal For", filterType: "All" },
    { filterName: "Occasion", filterType: "All" },
    { filterName: "Work", filterType: "All" },
    { filterName: "Fabric", filterType: "All" },
    { filterName: "Segment", filterType: "All" },
    { filterName: "Suitable For", filterType: "All" },
    { filterName: "Raw Materials", filterType: "All" },
    { filterName: "Pattern", filterType: "All" },
  ];

  const recommendationFilter = [
    "Recommended",
    "Newest first",
    "Popular",
    "Price : high to low",
    "Price : low to high",
  ];

  const handleFilterShow = () => {
    setIsFilterShow(!isFilterShow);
  };

  const handleLikedItem = (id) => {
    const newLikedItems = new Set(likedItems);
    if (likedItems.has(id)) {
      newLikedItems.delete(id);
    } else {
      newLikedItems.add(id);
    }
    setLikedItems(newLikedItems);
  };

  const handleRecommendation = () => {
    setIsRecommended(!isRecommended);
  };

  const getAllProducts = async () => {
    try {
      const response = await GetAllProducts();
      setStoreData(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div>
      <div className={styles["dashboard-desc-and-para"]}>
        <div className={styles["mobile__view-toggle"]}>
          <div className={styles["mobile__view-toggle-home"]}>HOME</div>
          <div className={styles["mobile__view-hr-line2"]}></div>
          <div>SHOP</div>
        </div>

        <div className={styles["dashboard__discover-heading"]}>
          DISCOVER OUR PRODUCTS
        </div>
        <p className={styles["dashboard__discover-description"]}>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>
      </div>

      <div className={styles["dashboard__item-container"]}>
        <div className={styles["dashboard__item-and-recommendation-header"]}>
          <div className={styles["dashboard__item-and-hide-filter"]}>
            <div className={styles["total__items-count"]}>3245 items</div>
            <div
              className={styles["dashboard__item-filter-hide-cta"]}
              onClick={handleFilterShow}
            >
              {isFilterShow ? (
                <div className={styles["dashboard__item-filter-status"]}>
                  <i className="fa-solid fa-angle-right"></i> <div>Hide Filter</div>
                </div>
              ) : (
                <div className={styles["dashboard__item-filter-status"]}>
                  <i className="fa-solid fa-angle-left"></i> <div>Show Filter</div>
                </div>
              )}
            </div>
          </div>

          <div
            onClick={handleFilterShow}
            className={styles["mobile__view-filter"]}
          >
            Filter
          </div>

          <div className={styles["mobile__view-hr-line"]}></div>

          <div
            onClick={handleRecommendation}
            className={styles["recommended__filter-text"]}
          >
            Recommended
            <i
              className={`fa-solid ${
                isRecommended ? "fa-angle-up" : "fa-angle-down"
              } `}
            ></i>{" "}
            {isRecommended && (
              <div className={styles["dashboard__items-recommended-filter"]}>
                {recommendationFilter.map((recommendation, index) => (
                  <div
                    key={index}
                    className={styles["recommendation__filter-value"]}
                  >
                    {recommendation.toUpperCase()}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className={styles["dashboard__filter-and-products-container"]}>
          {isFilterShow && (
            <div className={styles["dashboard__items-filter"]}>
              <div className={styles["dashboard__customize-heading"]}>
                <input type="checkbox" />
                Customizable
              </div>
              <div className={styles["filter-type-container"]}>
                {customizableFilter.map((filterData, index) => (
                  <div className={styles["filter-types"]} key={index}>
                    <div className={styles["filter-name-and-type"]}>
                      <div className={styles["filter-name"]}>
                        {filterData.filterName}
                      </div>
                      <div>{filterData.filterType}</div>
                    </div>
                    <div className={styles["filter__angle-down"]}>
                      <i className="fa-solid fa-angle-down"></i>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {storeData === undefined ? (
            "Loading.."
          ) : (
            <div className={styles["dashboard__products-container"]}>
              {storeData.map((data, index) => (
                <div
                  key={data.id}
                  className={
                    isFilterShow
                      ? styles["dashboard__products-card"]
                      : styles["dashboard__products-card-filter-hide"]
                  }
                >
                  <div className={styles["dashboard__products-image-card"]}>
                    <img src={data.image} alt="product-images" />
                  </div>
                  <div className={styles["product__items-details"]}>
                    {data.title}

                    <div className={styles["product__item-price-and-rating"]}>
                      <div>
                        Price :{" "}
                        <span className={styles["product__item-price"]}>
                          ${data.price}
                        </span>
                      </div>

                      <div>{data.rating.rate}⭐</div>
                    </div>
                    <div
                      className={styles["product__item-heart"]}
                      onClick={() => handleLikedItem(data.id)}
                    >
                      {likedItems.has(data.id) ? (
                        <img src={heartSelected} alt="selected heart" />
                      ) : (
                        <img src={heartDefault} alt="default heart" />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
