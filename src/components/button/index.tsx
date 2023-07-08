import styles from "./button.module.scss";

type ButtonProps = {
  title: string;
  handleClick: () => void;
  disabled?: boolean;
};

export default function Button({ title, handleClick, disabled }: ButtonProps) {
  return (
    <div
      className={disabled ? styles.disabled : styles.active}
      onClick={disabled ? () => {} : handleClick}
    >
      <h5>{title}</h5>
    </div>
  );
}
