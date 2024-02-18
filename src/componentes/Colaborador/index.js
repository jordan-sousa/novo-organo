import './colaborador.css'
import { IoIosCloseCircle } from "react-icons/io";
import { FaHeart, FaRegHeart  } from "react-icons/fa";

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {
    function favoritar() {
        aoFavoritar(colaborador.id)
    }

    const propsFavorito = {
        size: 25,
        onClick: favoritar
    }

    return (
        <div className="colaborador">
            <IoIosCloseCircle
                className='deletar'
                size={35}
                onClick={() => aoDeletar(colaborador.id)}
            />
            <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
                <img src={colaborador.imagem} alt={colaborador.nome} />
            </div>
            <div className="rodape">
                <h4>{colaborador.nome}</h4>
                <h5>{colaborador.cargo}</h5>
                <div className='favoritar'>
                    {colaborador.favorito ? <FaHeart {...propsFavorito} color='#ff0000' /> : <FaRegHeart {...propsFavorito} />}
                </div>
            </div>
        </div>
    )
}

export default Colaborador