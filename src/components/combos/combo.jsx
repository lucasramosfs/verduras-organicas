import "../../assets/css/combo/index.css";
import React from "react";

const Combo = ({
    value,
    imageSrc,
    title,
    subTitle,
    color,
    nome,
    onCheckboxChange,
}) => {
    return (
        <main className="mainCombo1" style={{ backgroundColor: color }}>
            <div className="imgCombo1">
                <img src={imageSrc} alt="Combo 1" />
            </div>

            <div className="itensCombo1">
                <h2>{title}</h2>
                <h4>{subTitle}</h4>
                <ul>
                    <li>Cebola</li>
                    <li>Pimentão Verde</li>
                    <li>Pimentão Vermelho</li>
                    <li>Brócolis</li>
                    <li>Berinjela</li>
                    <li>Cenoura</li>
                    <li>Cheiro Verde</li>
                    <li>Alho</li>
                    <li>Couve</li>
                </ul>
                <label>
                    <input
                        type="checkbox"
                        name={nome}
                        value={value}
                        onChange={onCheckboxChange}
                    />
                    Valor: R$ {value},00
                </label>
            </div>
        </main>
    );
};

export default Combo;
