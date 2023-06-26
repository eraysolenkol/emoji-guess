import { useParams, useNavigate } from "react-router-dom";
import './Quiz.css'

function Quiz() {
    const navigate = useNavigate();
    const params = useParams();

    function checkAnswer(e) {
        const answer = e.target.parentNode.querySelector('.answer').value.toLowerCase();
        const answerText = selectedQuestions.find((question) => {
            return question.question === e.target.parentNode.querySelector('.question').innerText;
        }).answerText.toLowerCase();

        console.log(answerText);
        if (answer.replace("'", "") === answerText) {
            e.target.parentNode.querySelector('.answer').style.backgroundColor = 'green';
            e.target.parentNode.querySelector('.answer').disabled = true;
            correctAnswers++;
            if (correctAnswers === totalQuestion) {
                alert("You won!");
            }
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
    ]
    const selectedQuestions = questions.filter((artist) => {
        return artist.artistSlug === params.artistName;
    }).map((artist) => {
        return artist.questions;
    })[0];
    const totalQuestion = selectedQuestions.length;
    let correctAnswers = 0;

    return (
        <div className="container">
            <p class="title">
                <span class="underline underline--emoji">{
                    params.artistName.replace("-", " ").split(' ')
                        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                        .join(' ')
                }</span>
            </p>
            <div className="items">
                {console.log(selectedQuestions)}
                {
                    selectedQuestions.map((question) => {
                        return (
                            <div className="item">
                                <p className="question">{question.question}</p>
                                <div class="input-container">
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