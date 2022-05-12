import classes from "./Home.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [trend, setTrend] = useState([]);

  useEffect(() => {
    const topRated = fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
      topRated.then((res) => res.json())
      .then((json) => setMovies(json))
      .catch((err) => {
        console.log(err);
      });
    const trending = fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
      trending.then((res) => res.json())
      .then((json) => setTrend(json))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={classes.Home}>
      <div>
        <div className={classes.Home__link}>
          <p className={classes.Home__title}>What to watch</p>
          <Link to="/adding-new-data" className={classes.Home__addLink}>Add New Media</Link>
        </div>
        <section className={classes.Home__content}>
          <div className={classes.Home__contentOne}>
            <p className={classes.Home__contentPone}>Top picks</p>
            <ArrowForwardIosIcon fontSize="medium" />
          </div>
          <p className={classes.Home__contentPtwo}>
            Movies just for you
          </p>
          <p className={classes.Home__contentPthree}>sign in</p>
          <div className={classes.Home__movies}>
            {movies?.results?.map((movie, id) => (
              <Card key={id} movie={movie} />
            ))}
          </div>
        </section>
        <section className={classes.Home__content}>
          <div className={classes.Home__contentOne}>
            <p className={classes.Home__contentPone}>From your watchlist</p>
            <ArrowForwardIosIcon fontSize="medium" />
          </div>
          <div className={classes.Home__watchlist}>
            <BookmarkAddIcon fontSize="large" />
            <p>Sign in to access your Watchlist</p>
            <p>Save movies to keep track of what you want to watch</p>
            <button>Sign in to IMDb</button>
          </div>
        </section>
        <section>
          <div className={classes.Home__contentOne}>
            <p className={classes.Home__contentPone}>Fan favorites</p>
            <ArrowForwardIosIcon fontSize="medium" />
          </div>
          <p className={classes.Home__contentPtwo}>
            This week's top movies
          </p>
          <div className={classes.Home__movies}>
            {trend?.results?.map((movie, id) => (
              <Card key={id} movie={movie} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
