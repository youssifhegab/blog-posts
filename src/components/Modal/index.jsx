import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ children, isOpen, setIsModalOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          onClick={() => setIsModalOpen(false)}
          className='fixed top-0 left-0 w-full h-full flex items-center justify-center z-10'
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className='flex flex-col relative bg-white rounded-lg '
            style={{ width: "400px", height: "200px" }}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
