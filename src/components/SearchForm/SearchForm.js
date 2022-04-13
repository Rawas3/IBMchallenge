import React from 'react';
import {useState} from 'react';
import { GiphyFetch } from '@giphy/js-fetch-api';
import {Container} from "react-bootstrap";
import ErrorForm from "../ErrorForm/index.js";


const giphyURL = process.env.REACT_APP_GIPHY_URL

    const SearchForm = () => {

      const [text, setText] = useState('')
      const [results, setResults] = useState([])
      const [loading, setLoading] = useState(false)
      const [err, setErr] = useState(false)

      const handleInput = (e) => {
          setText(e.target.value)
      }

      const handleSubmit = (e) => {
         const url = giphyURL.concat(text + "&limit=5")
              if(text.length === 0) {
                  setErr(true)
                  return
              }
                setLoading(true);
                fetch(url)
                    .then((response) => response.json())
                    .then((content) => {
                    console.log(content.data)
                        setResults(content.data.map((gif) => {
                            return gif.images.fixed_height.url;
                            }))
                    })

          setText('')
          setErr(false)
          setLoading(false)
      }

      const handleResults = () => {
          return results.map((gif, index)=> {
                return (
                    <img key={index} src={gif}/>
                )
          })
      }

      return (
         <section className="search-form mb-5">

            <input className="input-field"
                   placeholder="Search Gifs"
                   value={text}
                   onChange={handleInput} />
            <button className="submit-btn" onClick={handleSubmit}>Search</button>
            <ErrorForm isError={err} text="need length longer than 0 for input"/>

            <Container className="search-results mt-4">
                {handleResults()}
            </Container>

         </section>
      );
    }

export default SearchForm