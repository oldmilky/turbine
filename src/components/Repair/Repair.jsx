import { motion } from "framer-motion";
import { upToDown } from "../../assets/animations/animations";
import image1 from "../../assets/images/image1.svg";
import image2 from "../../assets/images/image2.svg";
import s from "./Repair.module.scss";

function Repair() {
  return (
    <motion.section className={s.repair} initial="hidden" whileInView="visible">
      <motion.h1 className={s.title} custom={1} variants={upToDown}>
        <span className={s.span}>Ремонт</span> турбин
      </motion.h1>
      <div className={s.container}>
        <motion.p className={s.text} custom={1.4} variants={upToDown}>
          Ремонт турбин или системы турбонаддува автомобиля - сложный процесс,
          требующий высокой квалификации специалистов, сложного оборудования и
          больших финансовых вложений. К выполнению этих работ допускаются лишь
          профессиональные автомеханики. Проводить диагностику и восстановление
          трубосистем необходимо на высокоточном технологичном оборудовании
        </motion.p>
        <div className={s.wrap}>
          <motion.div className={s.wrapper} custom={1.8} variants={upToDown}>
            <h1 className={s.titleMax}>TBsonio</h1>
            <h2 className={s.subtitle}>Высокоскоростная балансировка</h2>
          </motion.div>
          <motion.h2 className={s.subtitleMax} custom={1.9} variants={upToDown}>
            МАКСИМАЛЬНАЯ СКОРОСТЬ ДЛЯ НАИВЫСШЕГО КАЧЕСТВА
          </motion.h2>
        </div>
        <motion.p className={s.text} custom={2.3} variants={upToDown}>
          На TBsonio балансировка турбонагнетателя в среднем корпусе выполняется
          практически на рабочих скоростях и в реальных условиях эксплуатации.
          После проведения коррекции дисбаланса и контрольного замера
          турбонагнетатель готов к дальнейшей продолжительной работе в
          экстремальных рабочих условиях
        </motion.p>
        <motion.div className={s.images} custom={2.6} variants={upToDown}>
          <img className={s.image} src={image1} alt="" />
          <img className={s.image} src={image2} alt="" />
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Repair;
