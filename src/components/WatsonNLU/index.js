import React, { useState } from 'react';
import NaturalLanguageUnderstandingV1 from 'ibm-watson/natural-language-understanding/v1';
import { IamAuthenticator } from 'ibm-watson/auth';
import { NLUCredentials } from "../../components/Credentials";

function WatsonNLU(){

    const [text, setText] = useState('');
    const [keywords, setKeywords] = useState('');

    const nlu = new NaturalLanguageUnderstandingV1({
        authenticator: new IamAuthenticator({ apikey: NLUCredentials.apikey}),
        version: '2022-04-07',
        serviceUrl: "https://api.us-south.natural-language-understanding.watson.cloud.ibm.com",
    });

    function nluText(){
        let keywords = '';
        nlu.analyze(
            {
              html: text,
              features: {
                keywords: {}
              }
            })
            .then(response => {
                response.result.keywords.map(keyword => {
                    keywords += keyword.text+"; ";
                });
                setKeywords(JSON.stringify(keywords, null, 2));
                console.log(JSON.stringify(response.result, null, 2));
            })
            .catch(err => {
              console.log('error: ', err);
            });
    }

    return(
        <div className="container">
            <main>
                <div className="form">
                    <div className="formItem">
                        <textarea onChange={e => setText(e.target.value)} cols="28" rows="5" />
                    </div>
                    <button type="button" onClick={nluText} className="buttonSubmit">
                        Search
                    </button>
                </div>
                <div className="result">
                    <label>Keywords: {keywords} </label>
                </div>
            </main>
        </div>

    );
}

export default WatsonNLU;

