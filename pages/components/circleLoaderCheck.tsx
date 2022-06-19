import { CircularProgress } from "@mui/material";
import { motion } from "framer-motion";
import style from ".././../styles/CircleLoader.module.scss";

const CircleLoaderCheck = ({ onClick, isSent }) => {
  return (
    <div className={style.wrapper}>
      {isSent ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={style.wrapper}>
          <h1 className='text-white text-center'>
            Thank You for Reaching Out!
          </h1>
          <p className='text-white text-center'>
            I will reply as soon as possible.
          </p>
          <button onClick={onClick} className={style.btn}>
            Submit New
          </button>
        </motion.div>
      ) : (
        <div className={style.wrapper}>
          <div className='text-white'>
            <CircularProgress color='inherit' />
          </div>
        </div>
      )}
    </div>
  );
};

export default CircleLoaderCheck;
