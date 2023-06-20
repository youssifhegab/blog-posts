import { motion } from "framer-motion";

const Button = ({
  startIcon,
  text,
  endIcon,
  onClick,
  variant = "primary",
  ...props
}) => {
  let chosenVariant;
  switch (variant) {
    case "primary":
      chosenVariant =
        "bg-white text-black border border-black  hover:bg-black hover:text-white";
      break;
    case "ghost":
      chosenVariant = " bg-white hover:bg-slate-200";
      break;
    case "danger":
      chosenVariant = "text-white bg-red-700";
      break;
  }

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      className={`flex p-2 items-center gap-2 justify-between rounded-lg ${chosenVariant}`}
      {...props}
    >
      {startIcon && startIcon}
      {text && <div>{text}</div>}
      {endIcon && <div>{endIcon}</div>}
    </motion.button>
  );
};

export default Button;
