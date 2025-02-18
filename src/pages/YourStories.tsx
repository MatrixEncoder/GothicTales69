import React from 'react';

const YourStories = () => {
    return (
        <div className="your-stories">
            <header className="flicker" style={{ textAlign: 'center' }}>
                <h1 className="legends-heading">Your Stories</h1>
                <link href="https://fonts.googleapis.com/css2?family=Nosifer&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Eater&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Creepster&display=swap" rel="stylesheet"/>
                <p className="highlighted-description">This section features stories submitted by users. Dive into the tales that others have shared!</p>
            </header>
            <style>
                {`
                    .legends-heading {
                        font-family: 'Nosifer', cursive;
                        font-size: 3em;
                        text-align: center;
                        color: #fff;
                        text-shadow: 0 0 20px #ffcc00, 0 0 30px #ffcc00;
                        margin-bottom: 20px;
                    }
                `}
            </style>
            <style>
                {`
                    .highlighted-description {
                        border: 2px solid red;
                        padding: 5px;
                        margin: 0;
                        font-family: 'Creepster', cursive;
                        text-align: center;
                        display: inline-block;
                        position: relative;
                        box-shadow: 0 0 10px rgba(255, 0, 0, 0.7);
                    }
                `}
            </style>
            <style>
                {`
                    .story-text {
                        font-family: 'Eater', cursive;
                    }
                `}
            </style>
            <style>
                {`
                    .flicker {
                        animation: lightbulb-flicker 1s infinite;
                    }
                    @keyframes lightbulb-flicker {
                        0% {
                            opacity: 1;
                        }
                        10% {
                            opacity: 0.8;
                        }
                        20% {
                            opacity: 1;
                        }
                        30% {
                            opacity: 0.9;
                        }
                        40% {
                            opacity: 1;
                        }
                        50% {
                            opacity: 0.6;
                        }
                        60% {
                            opacity: 1;
                        }
                        70% {
                            opacity: 0.8;
                        }
                        80% {
                            opacity: 1;
                        }
                        90% {
                            opacity: 0.9;
                        }
                        100% {
                            opacity: 1;
                        }
                    }
                `}
            </style>
            <div className="story-container">
                <div className="story">
                    <h3 className="story-title unique-title">I Found a Hidden Door in My Basement. I Should Have Left It Alone.</h3>
                    <style>
                        {`
                            .unique-title {
                                font-family: 'Creepster', cursive;
                                font-size: 2.5em;
                                color: #ffcc00;
                                text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
                                margin-bottom: 15px;
                                text-align: center;
                            }
                        `}
                    </style>
                    <p className="story-text">I moved into this house six months ago. It’s old, creaky, and has that “someone definitely died here” energy, but the price was too good to pass up. Everything seemed normal—until last night.</p>
                    <p className="story-text">I was organizing some old boxes in the basement when I noticed something strange. One section of the wall sounded… hollow. I knocked again. Definitely hollow. A few minutes of prying later, I found it.</p>
                    <p className="story-text">A door.</p>
                    <p className="story-text">Not a normal door, though. It was small, like a child’s playhouse entrance, and covered in a thick layer of dust. No knob, just a deep groove where one might have been. My gut screamed at me to leave it alone, but curiosity won.</p>
                    <p className="story-text">I pulled it open.</p>
                    <p className="story-text">Beyond it, there was a narrow tunnel, barely wide enough for me to squeeze through. The air was damp and smelled… wrong. Rotten. Like something had been festering for a long time. I should’ve turned back. But I didn’t.</p>
                    <p className="story-text">I crawled through.</p>
                    <p className="story-text">The tunnel opened into a tiny, candlelit room. And in that room was a chair. A chair with deep scratch marks in the wood, as if someone had been tied there for a long time. The floor was covered in old, dried stains. I don’t want to think about what kind.</p>
                    <p className="story-text">Then I saw it.</p>
                    <p className="story-text">A mirror, covered with a filthy, moth-eaten sheet. Something was standing behind it.</p>
                    <p className="story-text">I froze. The candles flickered, and I swear I heard… breathing. Slow, ragged, like someone barely clinging to life. My hands shook as I reached for the sheet, but before I could pull it down—</p>
                    <p className="story-text">The breathing stopped.</p>
                    <p className="story-text">I don’t know what happened next. One second I was standing there, the next I was back in my basement, door sealed shut like it had never been opened.</p>
                    <p className="story-text">But something changed.</p>
                    <p className="story-text">My reflection isn’t right anymore. It lingers for just a second too long. It smiles when I don’t. And last night?</p>
                    <p className="story-text">It blinked at me.</p>
                    <p className="story-text">I’m not going back down there. I don’t think I’d come back the same.</p>
                    <p className="submission-details"><em>submitted by 'ChatGPT' on: 14.02.2025 at 7:25PM (IST)</em></p>
                    <style>
                        {`
                            .submission-details {
                                font-family: 'Arial', sans-serif;
                                font-size: 1em;
                                color: #ccc;
                                text-align: right;
                                margin-top: 10px;
                                border-top: 1px solid #ffcc00;
                                padding-top: 5px;
                            }
                        `}
                    </style>
                </div>
            </div>
        </div>
    );
};

export default YourStories;
