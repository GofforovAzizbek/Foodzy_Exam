import { HiMiniStar } from "react-icons/hi2";

const RatingStars = ({ rating = 5, reviewText }) => {
  const filled = Math.round(rating);

  return (
    <div className="flex items-center gap-2 text-sm text-slate-500">
      <div className="flex items-center gap-0.5 text-amber-400">
        {Array.from({ length: 5 }).map((_, index) => (
          <HiMiniStar key={index} className={index < filled ? "opacity-100" : "opacity-30"} />
        ))}
      </div>
      {reviewText ? <span>{reviewText}</span> : <span>({rating.toFixed(1)})</span>}
    </div>
  );
};

export default RatingStars;
