import { motion as m } from "framer-motion";

// eslint-disable-next-line react/prop-types
const HeadAnimation = ({ text }) => {
  // eslint-disable-next-line react/prop-types
  const letters = text.split('')

  return (
    <div>
      {letters.map((letter, index) => (

        <m.span initial={{opacity: 0}} animate={{opacity: 1}} transition={{ delay: index * 0.05}} key={index}>{letter}</m.span>
      ))}
    </div>
  );
};

export default HeadAnimation;
