import Image from 'next/image';
import styles from '../dashboard.module.css';

export default function StatsCard({ label, value, iconSrc }) {
  return (
    <div className={styles.statsCard}>
      <div className={styles.statsCopy}>
        <div className={styles.statsLabel}>{label}</div>
        <div className={styles.statsValue}>{value}</div>
      </div>
      <div className={styles.statsVisual} aria-hidden="true">
        <Image
          src={iconSrc}
          alt=""
          fill
          sizes="(max-width: 640px) 45vw, 180px"
          className={styles.statsIcon}
        />
      </div>
    </div>
  );
}