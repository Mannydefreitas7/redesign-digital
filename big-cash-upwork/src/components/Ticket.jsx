import { useState } from 'react';
import ScratchCard from './../js/ScratchCard';

function Ticket({ ticket }) {

    const [data, setData] = useState(ticket)

    return (
        <div id="ticket">
            <div className='winning-area'>Winning Numbers</div>
            <div className='scratch-area'>
                {
                    data.numbers.map(item => {
                        const settings = {
                            width: ticket.image.foreground.size.width,
                            height: ticket.image.foreground.size.height,
                            image: './images/' + ticket.image.foreground.src,
                            finishPercent: 60,
                            onComplete: () => {
                                data.scratched.push(item)
                                setData(data)
                                console.log(data)
                            }
                        };
                        return (
                            <div key={item.number} className='number-box'>
                                <ScratchCard {...settings}>
                                    <div className='number-container'>
                                        <span className={`number`} style={{ color:ticket.image.foreground.color  }}>{item.number}</span>
                                        <span className='score'>{ item.score } </span>
                                    </div>

                                </ScratchCard>
                            </div> 
                        )
                    })
                }
            </div>
            <img className='cover' src={'./images/' + ticket.image.background.src} />
        </div>
    );
}

export default Ticket