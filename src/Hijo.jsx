import './App.css'

function Hijo(props) {
    const {count, setCount} = props;

    return (
        <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
            <p>Acá está renderizando con la desestructuración {count} </p>
            <p>Acá está renderizando con las props {props.count} </p>
        </div>
        
    )
}

export default Hijo