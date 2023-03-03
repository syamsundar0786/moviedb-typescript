import Image from "next/legacy/image";
import React from "react";
import styles from "../styles/movies.module.scss";
import playButton from "../assets/images/playButton.svg";
import StarIcon from "@mui/icons-material/Star";
import Link from "next/link";
import { MovieResultData } from "@/interface/interface";



const Movies:React.FC<MovieResultData>=({ movie })=> {
  return (
    <div className={styles.movie_wrapper}>
      <Link href={`/movies/${movie?.id}`} className={styles.link_wrapper}>
        <div>
          <div className={styles.main_image}>
            <Image
              src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
              alt={movie?.title}
              placeholder={"blur"}
              blurDataURL={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
              width={250}
              height={250}
              loading={"lazy"}
            />
          </div>

          <div className={styles.image__subdetail}>
            <div className={styles.image__titles}>
              <span className={styles.image__main__titles}>{movie?.title}</span>
              <span className={styles.subtitle__details}>
                <StarIcon className={styles.icon_star} />{" "}
                {parseInt(movie?.vote_average)}/10
                <span className={styles.imdb}>IMDb</span>
              </span>
            </div>
            <div className={styles.image__playbtn}>
              <Image
                src={playButton}
                alt="playButton"
                width={30}
                height={30}
              />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Movies;
