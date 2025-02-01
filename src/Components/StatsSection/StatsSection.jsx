import React from "react";
import styles from "./StatsSection.module.css";
import CountUp from "react-countup";

const StatsSection = () => {
  return (
    <section className={styles.main}>
      <p className={styles.chip}>Real Results</p>
      <h1>See Why Clients 🧡 Us</h1>
      <p className={styles.summary}>
        Our statistics highlight our commitment to quality and expertise.
      </p>

      <div className={styles.container}>
        <div className={styles.box}>
          <h3>No. 1</h3>
          <p>
            first aid manufacturer <br /> from China
          </p>
        </div>

        <div className={styles.box}>
          <h3>
            <CountUp
              start={0}
              end={10}
              enableScrollSpy={true}
              duration={2}
              suffix="+"
            />
          </h3>
          <p>years of expertise</p>
        </div>

        <div className={styles.box}>
          <h3>
            <CountUp
              start={100}
              end={500}
              enableScrollSpy={true}
              duration={1}
              suffix="+"
            />
          </h3>
          <p>satisfied clients</p>
        </div>

        <div className={styles.box}>
          <h3>
            <CountUp
              start={0}
              end={10}
              enableScrollSpy={true}
              duration={2}
              suffix="k+"
            />
          </h3>
          <p>no. of orders placed</p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
