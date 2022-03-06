import { useState } from 'react';
import ScratchCard from './../js/ScratchCard';

function Ticket({ ticket }) {

    const [data, setData] = useState(ticket)

    return (
        <div id="ticket">
            <div className='scratch-area'>
                {
                    data.numbers.map(item => {
                        const settings = {
                            width: 60,
                            height: 60,
                            image: './images/' + ticket.image.box,
                            finishPercent: 60,
                            onComplete: () => {
                                data.scratched.push(item)
                                setData(data)
                                console.log(data)
                            }
                        };
                        return (
                            <div key={item} className='number-box'>
                                <ScratchCard {...settings}>
                                    <span className={`number ${data.scratched.includes(item) ? 'scratched' : ''}`}>{item}</span>
                                </ScratchCard>
                            </div> 
                        )
                    })
                }
            </div>
            <img className='cover' src={'./images/' + ticket.image.background} />
        </div>
    );
}

export default Ticket