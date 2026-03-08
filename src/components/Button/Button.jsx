import "../../assets/scss/components/_button.scss";

export default function Bbutton({ text, className, onClick }) {
  return (
    <button
      type="button"
      className={className ? className : "btn-bg-primary-500"}
      onClick={onClick ? onClick : null}
    >
      {text}
    </button>
  );
}
