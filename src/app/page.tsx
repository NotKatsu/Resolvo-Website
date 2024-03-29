'use client'

import { useState, useEffect } from 'react';
import styles from "./page.module.css";
import { IoIosArrowDown } from "react-icons/io";

export default function Home() {
  const words: string[] = ["MOBILE APPS", "DESKTOP APPS", "WEB-BASED APPS"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true); // Initially set to true to trigger animations

  useEffect(() => {
    // Trigger animation by setting isAnimating to false after a delay
    const timeout = setTimeout(() => {
      setIsAnimating(false);
    }, 1000); // Adjust this value according to your animation duration

    // Clear the timeout to avoid memory leaks
    return () => clearTimeout(timeout);
  }, []);

  // Rotate words every 2000 milliseconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className={styles.container}>
      <div className={styles.image_background}>
        <img src="hero_background.png" alt="Background Image" className={styles.background_image} />
      </div>

      <div className={`${styles.content} ${isAnimating ? styles.fadeIn : ''}`}>
        <div className={styles.top_section}>
          <p className={styles.top_section_text_small}>we develop</p>
          <h1 className={styles.top_section_text}>
            {words[currentIndex]} <a className={styles.white_dot}>.</a>
          </h1>
          <p className={styles.top_section_text_medium}>to &quot;resolve&quot; problems.</p>
          
          <div className={styles.top_section_buttons}>
            <button className={styles.get_in_touch_button}>Get in Touch</button>
            <div className={styles.button_seperator}></div>
            <button className={styles.view_examples_button}>View Work</button>
          </div>
        </div>

        <div className={styles.middle_section}>
          <h1><IoIosArrowDown /></h1>
        </div>

        <div className={styles.bottom_section}>
          <div className={styles.examples_section}>
            <h1 className={styles.header_text}>PROJECTS<a className={styles.white_dot}>.</a></h1>
            <p className={styles.description_text}>Our previous & current projects.</p>
            <div className={styles.header_seperator}></div>

            <div className={styles.inside_components}>
              <div className={styles.solvio}>
                <div className={styles.example_top_section}>
                  <div className={styles.image_container}>
                    <img src="solvio_app_icon.png" className={styles.solvio_app_icon}/>
                  </div>
                  <div className={styles.example_details}>
                    <h1 className={styles.solvio_example_text}>SOLVIO.APP</h1>
                    <p className={styles.default_medium_text}>Why should Problems have to be difficult?</p>
                    <div className={styles.tags}>
                      <div className={styles.tag}>
                        <p className={styles.default_medium_text}>Expo</p>
                      </div>
                      <div className={styles.tag}>
                        <p className={styles.default_medium_text}>NextJS</p>
                      </div>
                      <div className={styles.tag}>
                        <p className={styles.default_medium_text}>Typescript</p>
                      </div>
                      <div className={styles.tag}>
                        <p className={styles.default_medium_text}>GoLang</p>
                      </div>
                      <div className={styles.tag}>
                        <p className={styles.default_medium_text}>Postgres</p>
                      </div>
                    </div>
                    <div className={styles.example_section_buttons}>
                      <a className={styles.solvio_view_website_button} href='https://solvio.app/' target='_blank'>
                        <p className={styles.a_tag_text}>View Website</p>
                      </a>
                      <div className={styles.button_seperator}></div>
                      <a className={styles.solvio_other_button} href='https://github.com/GetSolvio' target='_blank'>
                        <p className={styles.a_tag_text}>View Github</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
