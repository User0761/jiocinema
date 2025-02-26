import Show from '../show/Show';
import styles from './shows.module.css';

const Shows = (props) => {
  const { title, movies } = props;

  if (!movies) {
    return <div>No movies found.</div>;
  }

  return (
    <section className={styles.shows}>
      <h1>{title}</h1>
      <div className={styles.showsParent}>
        {movies.map((movie, index) => (
          <Show key={index} movie={movie} />
        ))}
      </div>
    </section>
  );
};

export default Shows;