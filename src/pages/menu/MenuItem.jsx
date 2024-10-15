import { usePosts } from "../../PostProvider";
import { useNavigate } from "react-router-dom";
import styles from "./MenuItem.module.css";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { useState } from "react";
import { MdFavorite } from "react-icons/md";
import Star from "../../ui/Star";
function MenuItem({ item }) {
  const [setIsWish] = useState(item.wish);
  const { wishHandler } = usePosts();
  const navigate = useNavigate();
  function productHandler(item) {
    navigate(`/product/${item.id}`, { state: item });
  }
  return (
    <div
      className={styles.menuItem}
      key={item.id}
      onClick={() => productHandler(item)}
    >
      <div
        onClick={(e) => wishHandler(e, item, setIsWish)}
        className={styles.wishButton}
      >
        {item.wish ? (
          <MdFavorite style={{ color: "#ff5441" }} />
        ) : (
          <MdOutlineFavoriteBorder />
        )}
      </div>
      <div className={styles.imageContainer}>
        <div className={styles.imageContainer}>
          <img
            src={item.imageUrl}
            alt={item.productName}
            className={styles.itemImage}
          />
        </div>
      </div>
      <div className={styles.itemName}>{item.productName}</div>
      {item.soldOut ? (
        <p className={styles.soldOut}>Sold Out</p>
      ) : (
        <p className={styles.available}>Available</p>
      )}
      <Star />
      <div className={styles.itemPrice}>MRP : ₹ {item.price}</div>
    </div>
  );
}

export default MenuItem;
