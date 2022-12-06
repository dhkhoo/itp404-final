import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

export default function EmptyHeart() {
	return (
		<>
			<FontAwesomeIcon
				className="heart"
				icon={faHeart}
				color="#e5989b"
				size="2x"
			/>
		</>
	);
}
