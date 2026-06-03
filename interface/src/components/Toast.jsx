export default function Toast({ message }) {
  if (!message) return null;

  return <div className="fixed top-5 right-5 bg-neutral-800 text-secondary px-4 py-3 rounded-lg text-base z-[99]">{message}</div>;
}