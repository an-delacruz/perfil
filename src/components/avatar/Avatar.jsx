import "./avatar.css";

function Avatar(props) {
  return (
    <div className="photoContainer">
      <img src={props.ImgAvatar} alt="Avatar" />
    </div>
  );
}

export default Avatar;
