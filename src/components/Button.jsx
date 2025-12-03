export default function Button({ label, primary, classes }) {
  return (
    <button
      className={`${classes} shadow-util px-6 py-2.5 rounded-full font-medium transition-all  ${
        primary
          ? "bg-lime-200 hover:bg-lime-400 focus:bg-lime-400"
          : "bg-white hover:bg-neutral-100 focus:bg-neutral-100"
      }`}
    >
      {label}
    </button>
  );
}
