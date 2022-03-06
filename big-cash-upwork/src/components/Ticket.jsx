import { useState } from 'react';
import ScratchCard from './../js/ScratchCard';

function Ticket({ ticket }) {

    const [data, setData] = useState(ticket)
    const [image, setImage] = useState(null)
    const winningSettings = {
        width: ticket.image.winning.size.width,
        height: ticket.image.winning.size.height,
        image: './images/' + ticket.image.winning.src,
        finishPercent: 60,
        onComplete: () => {
            console.log('test')
        }
    }

    const onImgLoad = ({target:img}) => {
        console.log(img.offsetWidth)
        setImage({
            height:img.offsetHeight,
            width:img.offsetWidth
        });
    }

    const settings = {
        image: './images/' + ticket.image.foreground.src,
        finishPercent: 60,
        width: image && image.width,
        height: image && image.height,
        className: 'ScratchCard__Canvas',
        onComplete: () => {
           // data.scratched.push(item)
           // setData(data)
            console.log(data)
        }
    };
    return (
        <div id="ticket">
            <ScratchCard {...settings} />
            <div className='scratch'>
            <div className="winning-area">
                {
                    data.winnings.map(number => {
                        return <span key={number} className={`number winning`} style={{ color:ticket.image.foreground.color  }}>{number}</span>
                    })
                }
                </div>
                <div className="grid">
                {
                    data.numbers.map(item => {
                        return (
                            <div key={item.number} className='number-box'>
                                <div className='number-container'>
                                    <span className={`number`} style={{ color:ticket.image.foreground.color  }}>{item.number}</span>
                                    <span className='score'>{ item.score } </span>
                                </div>
                            </div> 
                        )
                    })
                }
                </div>
            </div>
            <img onLoad={onImgLoad} className='cover' src={'./images/' + ticket.image.background.src} />
        </div>
    );
}

export default Ticket