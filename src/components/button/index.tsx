"use client";
import styles from "./button.module.scss";

type ButtonProps = {
  title: string;
  handleClick: (event: any) => void;
  disabled?: boolean;
  outlined?: boolean;
};

export default function Button({
  title,
  handleClick,
  disabled,
  outlined,
}: ButtonProps) {
  const getStyleMode = () => {
    if (outlined) {
      return disabled ? styles.disabledOutlined : styles.activeOutlined;
    } else {
      return disabled ? styles.disabled : styles.active;
    }
  };

  return (
    <div
      className={getStyleMode()}
      onClick={disabled ? async () => {} : async (event) => handleClick(event)}
    >
      <h5>{title}</h5>
    </div>
  );
}
