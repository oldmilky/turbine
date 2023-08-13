import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { upToDown } from "../../assets/animations/animations";
import phone from "../../assets/images/phone.svg";
import telegram from "../../assets/images/telegram.svg";
import whatsapp from "../../assets/images/whatsapp.svg";
import s from "./Header.module.scss";

function Header() {
  return (
    <motion.header className={s.header} initial="hidden" whileInView="visible">
      <Link className={s.link} to="/">
        <motion.div className={s.container} custom={1} variants={upToDown}>
          <h1 className={s.logo}>LOGO</h1>
          <h2 className={s.title}>Ремонт турбин</h2>
        </motion.div>
      </Link>

      <div className={s.wrap}>
        <motion.div className={s.wrapper} custom={1.4} variants={upToDown}>
          <img className={s.image} src={whatsapp} alt="whatsapp" />
        </motion.div>
        <motion.div className={s.wrapper} custom={1.8} variants={upToDown}>
          <img className={s.image} src={telegram} alt="telegram" />
        </motion.div>
        <motion.div className={s.wrapper} custom={2.2} variants={upToDown}>
          <img className={s.image} src={phone} alt="phone" />
        </motion.div>
      </div>
    </motion.header>
  );
}

export default Header;
