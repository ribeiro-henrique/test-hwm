import MinorHeader from '../components/MinorHeader/MinorHeader';
import RangeCard from '../components/personal/RangeCard/RangeCard';
import AreaCard from '../components/personal/AreaCard/AreaCard';
import ModalCard from '../components/personal/ModalCard/ModalCard';
import styles from '../styles/index.module.css';

const areas = ["Cirurgia Geral", "Pediatria", "Ginecologia e obstetrência", "Medicina Preventiva", "Clínica Médica"];
const provas = ["TODOS", "ABC", "AMRIGS", "EMARE", "SUS-SP", "UNICAMP", "USP", "UNISESP", "UFS", "UFRJ", "SANTA CASA DE SÃO PAULO"];
const temas = ["TODOS", "Epidemias", "Gestão em saúde", "HIV", "Abdome agudo obstrutivo", "Tumores abdominais na infância"];
export default function Personalization() {
    
    return (
      <main className={styles.main}>
        <div>
          <MinorHeader
            icon='/images/Painel.svg'
            alt='question-icon'
            text='Personalizar'
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
            options={provas}
          />
          <ModalCard
            title='Questões de temas específicos'
            example='Busque Temas'
            placeholder='Asma, Tuberculose, Pneumonia...'
            options={temas}
          />
        <button className={styles.button}>
          <span>
            COMEÇAR
          </span>
        </button>
      </main>
    )
};


