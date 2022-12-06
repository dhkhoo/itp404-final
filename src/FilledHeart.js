import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function FilledHeart() {
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
