import { motion } from "framer-motion";
import { upToDown } from "../../assets/animations/animations";
import s from "./Title.module.scss";

function Title() {
  return (
    <motion.section className={s.title} initial="hidden" whileInView="visible">
      <motion.h1 className={s.titleTitle} custom={2.6} variants={upToDown}>
        Информация <span className={s.span}>о нас</span>
      </motion.h1>
      <div className={s.container}>
        <motion.p className={s.text} custom={3} variants={upToDown}>
          Компания <span className={s.span}>«Novoross-DokTurbo»</span>{" "}
          занимается ремонтов авто турбин. Мы располагаем самым современным
          оборудованием для диагностики, балансировки, ремонта и чистки турбин.
          Можем выполнять работу любой сложности и предоставляем гарантию на
          наши работы 6 месяцев
        </motion.p>
        <motion.h2 className={s.subtitle} custom={3.4} variants={upToDown}>Наши услуги включают в себя:</motion.h2>
        <div className={s.list}>
          <motion.div className={s.wrap} custom={3.8} variants={upToDown}>
            <div className={s.line} />
            <p className={s.text}>
              диагностика турбокомпрессоров ( легковых, грузовых автомобилей и
              спецтехники)
            </p>
          </motion.div>
          <motion.div className={s.wrap} custom={4} variants={upToDown}>
            <div className={s.line} />
            <p className={s.text}>осуществление ремонта всех типов турбин</p>
          </motion.div>
          <motion.div className={s.wrap} custom={4.2} variants={upToDown}>
            <div className={s.line} />
            <p className={s.text}>
              ремонт и настройка электронных актуаторов турбин
            </p>
          </motion.div>
          <motion.div className={s.wrap} custom={4.4} variants={upToDown}>
            <div className={s.line} />
            <p className={s.text}>Чистка деталей турбин</p>
          </motion.div>
          <motion.div className={s.wrap} custom={4.6} variants={upToDown}>
            <div className={s.line} />
            <p className={s.text}>Мойка деталей турбин</p>
          </motion.div>
        </div>
        <motion.p className={s.texting} custom={5} variants={upToDown}>
          Балансировка сердечников турбокомпрессоров осуществляется на
          высокоточном оборудовании компании SCHENCK (Германия).
        </motion.p>
      </div>
    </motion.section>
  );
}

export default Title;
