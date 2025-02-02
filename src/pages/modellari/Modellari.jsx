import '../../../styles/modellar/modellar.scss'
import ModellariTurlari from './ModellariTurlari'


function Modellari() {

    const modellar = [
        { nomi: "CHEVROLET", rasm: 'https://wallpaper.forfun.com/fetch/ca/ca545d8a06207b86951a62e147a8b7b9.jpeg?w=1470&r=0.5625', id: 1 },
        { nomi: "LADA", rasm: 'https://wallpaper.forfun.com/fetch/ca/ca545d8a06207b86951a62e147a8b7b9.jpeg?w=1470&r=0.5625', id: 2 },
        { nomi: "LAMBORGHINI", rasm: 'https://wallpaper.forfun.com/fetch/ca/ca545d8a06207b86951a62e147a8b7b9.jpeg?w=1470&r=0.5625', id: 3 },
        { nomi: "FERRARI", rasm: 'https://wallpaper.forfun.com/fetch/ca/ca545d8a06207b86951a62e147a8b7b9.jpeg?w=1470&r=0.5625', id: 4 },
    ]

    return (
        <div>
            <h1>Modellar</h1>
            <div className='modellari'>
                {modellar.map(item => (
                    <ModellariTurlari item={item} key={item.id} />
                ))}
            </div>
        </div>
    )
}

export default Modellari