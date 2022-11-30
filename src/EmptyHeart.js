import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

export default function EmptyHeart() {
  return (
    <>
      <FontAwesomeIcon icon={faHeart} color="red" size="2x" />
    </>
  );
}
