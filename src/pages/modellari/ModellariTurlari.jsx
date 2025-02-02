import { NavLink } from 'react-router-dom'
import '../../../styles/modellarTurlari/modellarTurlari.scss'

function ModellariTurlari({ item }) {
    return (
        <NavLink>
            <div className="modellari_turlari">
                <img src={item?.rasm} />
                <h2>{item?.nomi}</h2>
            </div>
        </NavLink>
    )
}

export default ModellariTurlari