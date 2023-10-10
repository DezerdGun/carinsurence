import Link from "next/link";
import styles from "./insuranceBlock.module.scss";

const InsuranceBlock = () => {
  const data = [
    {
      img: "/osago.svg",
      title: "ОСАГО",
      description: "Возместим ущерб третьим лицам, если вы стали виновником ДТП",
      link: "#",
    },
    {
      img: "/kasko.svg",
      title: "Каско",
      description: "Компенсируем ремонт вашего авто, даже если вы стали виновником ДТПП",
      link: "#",
    },
  ];

  return (
    <section className={styles.insuranceBlock}>
      <h2>Автострахование онлайн</h2>
      <div className={styles.insuranceBlock__block}>
        {data.map((item) => (
          <div key={item.title} className={styles.insuranceBlock__block__item}>
            <div>
              <img src={item.img} />
              <div className={styles.insuranceBlock__block__item__title}>{item.title}</div>
              <div className={styles.insuranceBlock__block__item__description}>{item.description}</div>
            </div>
            <Link href={item.link}>Подробнее</Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InsuranceBlock;
