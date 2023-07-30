import { React, useState, useEffect } from "react";
import "./featured.scss";
import { InfoOutlined, PlayArrow } from "@mui/icons-material";
import axios from "axios";

export default function Featured({ type, setGenre }) {
  const [content, setContent] = useState({});

  useEffect(() => {
    const getRandomMovie = async () => {
      try {
        const res = await axios.get(`movies/random?type=${type}`, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0YzE2ZGRlODA2MmVmN2MzNjE5ZTdhNCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5MDQ1MTEyNiwiZXhwIjoxNjkwODgzMTI2fQ.12tIvo1iJjDSFXnh3GW9UQXmWmg2iW6dAtmu8EGkar8",
          },
        });
        setContent(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomMovie();
  }, [type]);
  return (
    <>
      <div className="featured">
        {type && (
          <div className="category">
            <span>{type === "movies" ? "Movies" : "TV Shows"}</span>
            <select name="genre" id="genre">
              <option>Genre</option>
              <option value="adventure">Adventure</option>
              <option value="comedy">Comedy</option>
              <option value="crime">Crime</option>
              <option value="fantasy">Fantasy</option>
              <option value="historical">Historical</option>
              <option value="horror">Horror</option>
              <option value="romance">Romance</option>
              <option value="sci-fi">Sci-fi</option>
              <option value="thriller">Thriller</option>
              <option value="western">Western</option>
              <option value="animation">Animation</option>
              <option value="drama">Drama</option>
              <option value="documentary">Documentary</option>
            </select>
          </div>
        )}
        <img src={content.img} alt="" />
        <div className="info">
          <img src={content.imgTitle} alt="" />
          <span className="desc">{content.desc}</span>
          <div className="buttons">
            <button className="play">
              <PlayArrow /> <span>Play</span>
            </button>
            <button className="infoBtn">
              <InfoOutlined /> <span>More Info</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
