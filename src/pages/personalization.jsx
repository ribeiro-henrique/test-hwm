import MinorHeader from '../components/MinorHeader/MinorHeader';
import RangeCard from '../components/personal/RangeCard/RangeCard';
import AreaCard from '../components/personal/AreaCard/AreaCard';
import ModalCard from '../components/personal/ModalCard/ModalCard';
import styles from '../styles/index.module.css';

const areas = ["Cirurgia Geral", "Pediatria", "Ginecologia e obstetrência", "Medicina Preventiva", "Clínica Médica"];
const CustomSlider = () => {
    
    return (
      <main className={styles.main}>
        <div>
          <MinorHeader
            icon='/images/Painel.svg'
            alt='question-icon'
            text='Personalização'
          />
        </div>
          <RangeCard
            title='Definir meta diária de questões'
          />
          <AreaCard
            title='Questões por Grandes áreas'
            areas={areas}
          />
          <ModalCard
            title='Questões de provas específicas'
            example='Busque Provas'
            placeholder='Exemplo: USP, SUS-SP, SURCE...'
          />
          <ModalCard
            title='Questões de temas específicos'
            example='Busque Temas'
            placeholder='Asma, Tuberculose, Pneumonia...'
          />
        <button>
          <span>
            Começar
          </span>
        </button>
      </main>
    )
};

export default CustomSlider;
