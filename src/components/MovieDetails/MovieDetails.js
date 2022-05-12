import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classes from "./MovieDetails.module.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {CircularProgress} from "@mui/material";

const MovieDetails = () => {
  const [data, setData] = useState([]);
  const [credits, setCredits] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const movie_id = fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    movie_id
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => {
        console.log(err);
      });

    const creditsData = fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    creditsData
      .then((res) => res.json())
      .then((json) => setCredits(json))
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div className={classes.MovieDetails}>
      <div className={classes.MovieDetails__head}>
        <div className={classes.MovieDetails__info}>
          <p className={classes.MovieDetails__title}>{data.title}</p>
          <p className={classes.MovieDetails__runtime}>
            {data.release_date} {data.runtime}
          </p>
        </div>
        <div className={classes.MovieDetails__popularity}>
          <p className={classes.MovieDetails__pOne}>RATING</p>
          <div className={classes.MovieDetails__rate}>
            <p className={classes.MovieDetails__star}>⭐</p>
            <div className={classes.MovieDetails__review}>
              <p className={classes.MovieDetails__rating}>
                {data.vote_average}
              </p>
              <p className={classes.MovieDetails__count}>{data.vote_count}</p>
            </div>
          </div>
        </div>
      </div>
      {data.poster_path ? (
        <img
          className={classes.MovieDetails__poster}
          src={"https://image.tmdb.org/t/p/w400/" + data.poster_path}
          alt="poster"
        />
      ):(
        <CircularProgress/>
      )}
      <div className={classes.MovieDetails__genres}>
        {data?.genres?.map((gen) => (
          <p key={gen.id} className={classes.MovieDetails__genre}>
            {gen.name}
          </p>
        ))}
      </div>
      <p className={classes.MovieDetails__overview}>{data.overview}</p>
      <hr />
      <div className={classes.MovieDetails__job}>
        <p className={classes.Job__title}>Director</p>
        {credits?.crew?.map((credit)=>(
            (credit.job === "Director") && <p key={credit.id} className={classes.Job__name}>{credit.name}</p>
          ))}
      </div>
      <hr />
      <div className={classes.MovieDetails__job}>
      <p className={classes.Job__title}>Writers</p>
      {credits?.crew?.map((credit)=>(
          (credit.job === "Screenplay" || credit.job==="Writer" || credit.job==="Novel") && <p key={Math.random()} className={classes.Job__name}>{`${credit.name} (${credit.job})`}</p>
        ))}
        </div>
      <hr />
      <div className={classes.MovieDetails__section2}>
        <p className={classes.MovieDetails__castCrew}>cast and crew</p>
        <div className={classes.MovieDetails__cast}>
          {credits?.cast?.map((credit)=>(
            <div key={credit.id} className={classes.Cast__info}>
              {credit.profile_path ? (
                <img className={classes.Cast__profile} src={"https://image.tmdb.org/t/p/w400/"+credit.profile_path} alt=''/>
              ):(
                <AccountCircleIcon fontSize="large"/>
              )}
              <div className={classes.Cast__title}>
                <p>{credit.original_name}</p>
                <p>as {credit.character}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
