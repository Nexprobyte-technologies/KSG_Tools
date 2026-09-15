export default function Stars({ count }: { count: number }) {
  return (
    <span className="stars" role="img" aria-label={`${count} out of 5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} aria-hidden>
          {i <= Math.floor(count) ? "★" : i === Math.ceil(count) && count % 1 >= 0.5 ? "◐" : "☆"}
        </span>
      ))}
    </span>
  );
}