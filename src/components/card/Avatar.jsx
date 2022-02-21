import "./avatar.css";
import AvatarPrueba from "../../images/AvatarPrueba.png";

function Avatar() {
  return (
    <div className="photoContainer">
      <img src={AvatarPrueba} alt="Avatar" />
    </div>
  );
}

export default Avatar;
