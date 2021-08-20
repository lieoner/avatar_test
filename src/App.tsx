import './App.css';
import { ColoredUserpic } from './components/ui/ColoredUserpic';
import img from './assets/chiller.png';

function App() {
    return (
        <div className='App'>
            <ColoredUserpic
                size={150}
                src={img}
                margin={4}
                backgroundColor='red'
                colors={['green', 'blue']}
                hoverColors={['blue', 'green', 'pink']}
                colorWidth={6}
            />
        </div>
    );
}

export default App;
