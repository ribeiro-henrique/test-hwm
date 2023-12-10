import { useState } from 'react';
import Image from 'next/image';
import styles from './styles/index.module.css';

export default function Options() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className={styles.general}>
      <div className={styles.main}>
        <div className={styles.modal}>
          {isModalOpen ? (
            <Image
              src='/images/icon-cog.svg'
              width={28}
              height={28}
              alt='gear-btn'
              onClick={toggleModal}
              className={styles.rotated}
            />
          ) : (
            <>
              <Image src='/images/icon-pencil.svg' width={25} height={25} alt='gear-btn' />
              <Image src='/images/icon-bookmark.svg' width={25} height={25} alt='gear-btn' />
              <Image src='/images/icon-calendar.svg' width={25} height={25} alt='gear-btn' />
              <Image
                src='/images/icon-cog.svg'
                width={28}
                height={28}
                alt='gear-btn'
                onClick={() => {
                  toggleModal();
                }}
              />
            </>
          )}
        </div>
        <div className={styles.modal} onClick={toggleDetails}>
          <Image src='/images/icon-info.svg' width={27} height={27} alt='info-btn' />
        </div>
      </div>
      <div className={`${styles.details} ${showDetails ? styles.visible : ''}`}>
        <span>SCMBH</span>
        <span>R1</span>
        <span>N°96</span>
        <span>2019</span>
      </div>
    </div>
  );
}
