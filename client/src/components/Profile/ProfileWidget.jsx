import { useContext } from "react";
import styles from "./ProfileWidget.module.css";
import { AppContext } from "../../context/AppContext";
import userAvatar from "../../assets/userAvatar.png";
function ProfileWidget() {
  const { user, selectedGenres } = useContext(AppContext);

  console.log(selectedGenres)

  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        <img src={userAvatar} alt="avatar" />
      </div>
      <div className={styles.details}>
        <p className={styles.name}>{user.name}</p>
        <p className={styles.email}>{user.email}</p>
        <p className={styles.username}>{user.username}</p>

        <div className={styles.genres}>
          {selectedGenres.slice(0, 4).map((genre, index) => (
            <div key={index} className={styles.genre}>
              {genre.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProfileWidget;
