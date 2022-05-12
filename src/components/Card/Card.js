import classes from "./Card.module.css";
import {useNavigate} from "react-router-dom";

const Card = ({ movie }) => {

  const navigate = useNavigate();

  const showDetailsHandler = () => {
    navigate(`/${movie.id}`)
  }

  return (
    <div className={classes.Card} onClick={showDetailsHandler}>
      <img
      className={classes.Card__poster}
        src={"https://image.tmdb.org/t/p/w400/" + movie.poster_path}
        alt="movie_poster"
      />
      <p className={classes.Card__rating}>
        &nbsp;⭐&nbsp;<span>{movie.vote_average}</span>
      </p>
      <p className={classes.Card__title}>{movie.title || movie.name}</p>
    </div>
  );
};

export default Card;
