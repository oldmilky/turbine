import { Link } from "react-router-dom";
import Header from "../Header/Header";
import s from "./Notfound.module.scss";

function Notfound() {
  return (
    <>
      <Header />
      <section className={s.notfound}>
        <h1 className={s.title}>404</h1>
        <h2 className={s.subtitle}>
          Страница не была найдена, вернитесь на главную страницу
        </h2>
        <Link className={s.button} to="/">На главную</Link>
      </section>
    </>
  );
}

export default Notfound;
