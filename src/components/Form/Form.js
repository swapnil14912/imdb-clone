import classes from "./Form.module.css";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { useState } from "react";

const Form = () => {
  const [cast, setCast] = useState([]);
  const [val, setVal] = useState("");
  const [crew, setCrew] = useState([]);
  const [castVal, setCastVal] = useState("");
  const [poster, setPoster] = useState("");

  const handleKeyDownCrew = (evt) => {
    if (["Enter", "Tab", ","].includes(evt.key)) {
      evt.preventDefault();
      var value = val.trim();
      if (value) {
        setCrew([...crew, value]);
        setVal("");
      }
    }
  };

  const handleKeyDownCast = (evt) => {
    if (["Enter", "Tab", ","].includes(evt.key)) {
      evt.preventDefault();
      var value = castVal.trim();
      if (value) {
        setCast([...cast, value]);
        setCastVal("");
      }
    }
  };

  const handleChange = (evt) => {
    setVal(evt.target.value);
  };

  const handleDelete = (setData, data, item) => {
    setData(data.filter((i) => i !== item));
  };

  const addHandler = (e) => {
    e.preventDefault();
    alert("movie submitted");
  };

  const handlePoster = (e) => {
    if(e.target.files && e.target.files[0]){
      const max = 5*1024*1024;
      if(e.target.files[0].size > max){
        alert("Size too large");
      }else{
        setPoster(e.target.value);
      }
    }
  }

  return (
    <div className={classes.newdata}>
      <form className={classes.Form}>
        <div className={classes.Form__input}>
          <label htmlFor="label" className={classes.label}>
            Title<sup className={classes.sup}>*</sup>
          </label>
          <input
            className={classes.Form__title}
            id="title"
            type="text"
            placeholder="title"
            required
          />
        </div>
        <div className={classes.Form__input}>
          <label htmlFor="Genre" className={classes.label}>
            Genre<sup className={classes.sup}>*</sup>
          </label>
          <input
            className={classes.Form__genre}
            id="Genre"
            type="text"
            placeholder="genre"
            required
            onChange={handleChange}
          />
        </div>
        <label htmlFor="plot" className={classes.label}>
          Plot summary
        </label>
        <textarea
          className={classes.Form__plot}
          id="plot"
          placeholder="plot summary"
          rows={10}
          cols={60}
        />
        {poster && <p style={{margin:"0"}}>{poster}</p>}
        <div className={`${classes.Form__poster} ${classes.Form__input}`}>
          <label
            htmlFor="poster"
            className={`${classes.label} ${classes.file}`}
          >
            Upload movie/TV poster
            <FileUploadIcon />
          </label>
          <input className={classes.Form__file} id="poster" type="file" onChange={handlePoster}/>
        </div>
        <p style={{margin:"0"}}>max file size 5mb</p>
        <div className={classes.Form__input}>
          <label htmlFor="trailer" className={classes.label}>
            Trailer URL
          </label>
          <input
            className={classes.Form__url}
            id="trailer"
            type="url"
            placeholder="trailer"
          />
        </div>

        <div style={{display:"grid", gridTemplateColumns:"auto auto auto auto auto"}}>
          {cast?.map((item) => (
            <div className={classes["tag-item"]} key={item}>
              {item}
              <button
                type="button"
                className={classes.button}
                onClick={() => handleDelete(setCast,cast,item)}
              >
                &times;
              </button>
            </div>
          ))}
        </div>
        <div className={classes.Form__input}>
          <label htmlFor="cast" className={classes.label}>
            Cast members<sup className={classes.sup}>*</sup>
          </label>
          <input
            className={classes.Form__cast}
            id="cast"
            type="text"
            placeholder="cast"
            required
            disabled={cast.length>=100}
            value={castVal}
            onKeyDown={handleKeyDownCast}
            onChange={(e) => setCastVal(e.target.value)}
          />
        </div>

        <div style={{display:"grid", gridTemplateColumns:"auto auto auto auto auto"}}>
        {crew?.map((item) => (
          <div className={classes["tag-item"]} key={item}>
            {item}
            <button
              type="button"
              className={classes.button}
              onClick={() => handleDelete(setCrew,crew,item)}
            >
              &times;
            </button>
          </div>
        ))}
        </div>
        <div className={classes.Form__input}>
          <label htmlFor="crew" className={classes.label}>
            Crew members<sup className={classes.sup}>*</sup>
          </label>
          <input
            className={classes.Form__crew}
            id="crew"
            type="text"
            placeholder="crew"
            required
            value={val}
            disabled={crew.length>=100}
            onKeyDown={handleKeyDownCrew}
            onChange={handleChange}
          />
        </div>
        <div className={`${classes.Form__dateBudget} ${classes.Form__input}`}>
          <div className={classes.Form__dateBudget}>
            <label htmlFor="date" className={classes.label}>
              Release date
            </label>
            <input className={classes.Form__date} id="date" type="date" />
          </div>
          <div className={classes.Form__dateBudget}>
            <label htmlFor="budget" className={classes.label}>
              Budget
            </label>
            <input
              className={classes.Form__budget}
              id="budget"
              type="number"
              placeholder="budget"
            />
          </div>
        </div>
        <p>label marked as <sup className={classes.sup}>*</sup> are mandatory</p>
        <button className={classes.Form__button} onClick={addHandler}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
