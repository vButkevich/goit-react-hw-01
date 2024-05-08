import "./Profile.css";

export default function Profile({ name, tag, location, image, stats }) {
  //export default function Profile(param) {
  // name = "ім'я користувача"
  // tag = "— тег в соціальній мережі без @"
  // location = "— місто і країна"
  // image = "— посилання на зображення"
  // stats = "—об'єкт з інформацією про активності"
  return (
    <div className="profile">
      <div>
        <div>
          <img
            src={image} //"https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
            alt="User avatar"
          />
          <p className="profile-name"> {name}</p>
          <p className="profile-tag">@{tag}</p>
          <p className="profile-location">{location}</p>
        </div>

        <ul className="stats">
          <li className="stats-item">
            <span>Followers</span>
            <span>{stats.followers}</span>
          </li>
          <li>
            <span>Views</span>
            <span>{stats.views}</span>
          </li>
          <li>
            <span>Likes</span>
            <span>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
