import { motion } from "framer-motion";

const Button = ({ startIcon, text, endIcon, onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.3 }}
      onClick={onClick ? onClick : () => ({})}
      className='flex p-2 items-center gap-2 justify-between text-black border border-black rounded-lg bg-white hover:bg-black hover:text-white'
    >
      {startIcon && startIcon}
      {text && <div>{text}</div>}
      {endIcon && <div>{endIcon}</div>}
    </motion.button>
  );
};

export default Button;
