import { useState } from "react";
import "./App.css";
import "./index.css";
import Combo from "./components/combos/combo.jsx";
import ImagemCombo1 from "./assets/combo1.jpg";
import ImagemCombo2 from "./assets/combo2.jpg";
import ImagemCombo3 from "./assets/combo3.jpg";

function App() {
    const [total, setTotal] = useState(0);

    const handleCheckboxChange = (event) => {
        const checkboxValue = parseInt(event.target.value);
        if (event.target.checked) {
            setTotal(total + checkboxValue);
        } else {
            setTotal(total - checkboxValue);
        }
    };

    const wpp = `https://wa.me/5511972541352?text=Gostaria%20de%20finalizar%20a%20compra%0ATotal%20%3D%20${encodeURIComponent(
        total
    )}`;

    return (
        <main id="App">
            <h1>Mercadinho verduras Orgânicas</h1>
            <div className="combos">
                <Combo
                    value={50}
                    imageSrc={ImagemCombo1}
                    title="Cesta Orgânica Pequena"
                    subTitle="Contém 4 tipos de verduras e 4 legumes"
                    color="#33ccff"
                    nome="combo1"
                    onCheckboxChange={handleCheckboxChange}
                />
                <Combo
                    value={75}
                    imageSrc={ImagemCombo2}
                    title="Cesta Orgânica Pequena"
                    subTitle="Contém 4 tipos de verduras e 4 legumes"
                    color="#66ff00"
                    nome="combo2"
                    onCheckboxChange={handleCheckboxChange}
                />
                <Combo
                    value={100}
                    imageSrc={ImagemCombo3}
                    title="Cesta Orgânica Pequena"
                    subTitle="Contém 4 tipos de verduras e 4 legumes"
                    color="#ccff99"
                    nome="combo3"
                    onCheckboxChange={handleCheckboxChange}
                />
            </div>
            <footer>
                <h2>Total: R$ {total},00</h2>
                <a href={wpp}>
                    <button> Finalizar Compra </button>
                </a>
            </footer>
        </main>
    );
}

export default App;
