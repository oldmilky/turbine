import { motion } from "framer-motion";
import { upToDown } from "../../assets/animations/animations";
import s from "./Footer.module.scss";

function Footer() {
  return (
    <motion.section className={s.footer} initial="hidden" whileInView="visible">
      <motion.h1 className={s.text} custom={1} variants={upToDown}>
        © 2023 Company. Все права защищены.
      </motion.h1>
      <motion.h2 className={s.author} custom={1.4} variants={upToDown}>
        разработчик:{" "}
        <a
          className={s.span}
          href="https://rodya.kz/"
          target="_blank"
          rel="noreferrer"
        >
          rodya.kz
        </a>
      </motion.h2>
    </motion.section>
  );
}

export default Footer;
