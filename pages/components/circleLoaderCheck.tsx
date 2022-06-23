import { CircularProgress } from "@mui/material";
import { motion } from "framer-motion";
import style from ".././../styles/circleLoader.module.scss";

const CircleLoaderCheck = ({ resetForm, isSent, sendForm }) => {
  console.log(isSent);

  if (isSent == undefined) {
    return <div></div>;
  }

  switch (isSent.state) {
    case "loading":
      return (
        <div className={style.wrapper}>
          <div className='text-white'>
            <CircularProgress color='inherit' />
          </div>
        </div>
      );
    case "error":
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={style.wrapper}>
          <h1 className='text-white text-center'>Sorry! There was an error!</h1>
          <p className='text-white text-center'></p>
          <button onClick={sendForm} className={style.btn}>
            Try Again
          </button>
        </motion.div>
      );
    case "sent":
      return (
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
          <button onClick={resetForm} className={style.btn}>
            Submit New
          </button>
        </motion.div>
      );
  }
};

export default CircleLoaderCheck;
