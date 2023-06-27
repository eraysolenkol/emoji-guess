import { useParams, useNavigate } from "react-router-dom";
import './Quiz.css'
import { useState, useEffect } from "react";

function Quiz() {
    const navigate = useNavigate();
    const params = useParams();

    function checkAnswer(e) {
        const answer = e.target.parentNode.querySelector('.answer').value.toLowerCase();
        const answerText = selectedQuestions.find((question) => {
            return question.question === e.target.parentNode.querySelector('.question').innerText;
        }).answerText.toLowerCase();
        if (answer.replace("'", "") === answerText) {
            e.target.parentNode.querySelector('.answer').style.backgroundColor = 'green';
            e.target.parentNode.querySelector('.answer').disabled = true;
            setCorrectAnswers(1 + correctAnswers);
        } else {
            e.target.parentNode.querySelector('.answer').style.backgroundColor = 'red';
        }
    }

    const questions = [
        {
            artistSlug: 'the-weeknd',
            questions: [
                { question: "🏠🎈🎈", answerText: 'House of Balloons' },
                { question: "⭐👦🏻", answerText: 'Starboy' },
                { question: "➡️🕒", answerText: 'After Hours' },
                { question: "✖️🚨", answerText: 'False Alarm' },
                { question: "🌟👀", answerText: 'Starry Eyes' }
            ],
        },
        {
            artistSlug: 'drake',
            questions: [
                { question: "📞🔥", answerText: 'Hotline Bling' },
                { question: "💃🕺", answerText: 'One Dance' },
                { question: "🙏", answerText: "Gods Plan" },
                { question: "🔄🔥", answerText: 'Nonstop' },
                { question: "💰⚰️", answerText: 'Money in the Grave' }
            ]
        },
        {
            artistSlug: 'ariana-grande',
            questions: [
                { question: "💍💍💍💍💍💍💍", answerText: '7 Rings' },
                { question: "😢✖️😭", answerText: 'No Tears Left to Cry' },
                { question: "🙏👋,👉", answerText: 'Thank U, Next' },
                { question: "🌌👈", answerText: 'Into You' }
            ]
        },
        {
            artistSlug: 'tame-impala',
            questions: [
                { question: "👁️🌈🔙", answerText: 'Feels Like We Only Go Backwards' },
                { question: "⏰🕰️🏃‍♂️", answerText: 'Eventually' },
                { question: "🐘", answerText: 'Elephant' }
            ]
        },
        {
            artistSlug: 'sza',
            questions: [
                { question: "😡👉", answerText: 'I Hate U' },
                { question: "👕", answerText: 'Shirt' },
                { question: "🔪💀", answerText: 'Kill Bill' },
                { question: "💤😴💤", answerText: 'Snooze' }
            ]
        },
        {
            artistSlug: 'travis-scott',
            questions: [
                { question: "⭐🌌🔭", answerText: 'STARGAZING' },
                { question: "🏔️🆙🛌", answerText: 'HIGHEST IN THE ROOM' },
                { question: "🦋🌪️💥", answerText: 'Butterfly Effect' },
                { question: "🐜🆘🌵", answerText: 'Antidote' },
                { question: "☀️🆙🛌", answerText: 'Wake Up' },
                { question: "🙊❌🗣️", answerText: "CANT SAY" },
            ]
        },
        {
            artistSlug: 'doja-cat',
            questions: [
                { question: "🗣️💬🎶", answerText: 'Say So' },
                { question: "🍭🍦🍬", answerText: 'Candy' },
                { question: "💼🔥💃", answerText: 'Boss Bitch' },
                { question: "💋", answerText: 'Kiss Me More' },
                { question: "🙎‍♀️", answerText: 'Woman' },
                { question: "💻🛏️🔞", answerText: 'Cyber Sex' },
                { question: "🔥🌺", answerText: 'Hot Pink' }
            ]
        },
        {
            artistSlug: 'metro-boomin',
            questions: [
                { question: "🕷️🕸️🌇", answerText: 'Metro Spider' },
                { question: "⏰🕛🕑", answerText: 'On Time' },
                { question: "🌊🌋🌪", answerText: 'Niagara Falls' },
                { question: "💥🔥🦸‍♂️", answerText: 'Superhero' },
                { question: "🌧️☔️💧", answerText: 'Raindrops' },
                { question: "☂️☔️🌂", answerText: 'Umbrella' },
            ]
        },
    ]
    const selectedQuestions = questions.filter((artist) => {
        return artist.artistSlug === params.artistName;
    }).map((artist) => {
        return artist.questions;
    })[0];

    const totalQuestion = selectedQuestions.length;
    const [correctAnswers, setCorrectAnswers] = useState(0);

    useEffect(() => {
        console.log(correctAnswers, totalQuestion);
        if (correctAnswers === totalQuestion) {
            alert("You won!");
        }
    }, [correctAnswers, totalQuestion]);

    return (
        <div className="container">
            <p className="title">
                <span className="underline underline--emoji">{
                    params.artistName.replace("-", " ").split(' ')
                        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                        .join(' ')
                }</span>
            </p>
            <div className="items">
                {
                    selectedQuestions.map((question) => {
                        return (
                            <div className="item">
                                <p className="question">{question.question}</p>
                                <div className="input-container">
                                    <input className="answer" type="text" />
                                </div>
                                <input className="submit" type="button" value="🔍" onClick={checkAnswer} />
                            </div>
                        );
                    })
                }

            </div>
            <div className="footer">
                <input type="button" value="🔙" onClick={() => { navigate(-1, { replace: true }) }} />
            </div>
        </div>

    );
}

export default Quiz;