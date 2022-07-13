import './styles.css'
import SendMessageButton from '../SendMessageButton'

function SalesCard() {
    return (
        <>
            <div className="card">
                <h2 className="card-title">Sistema de Vendas</h2>
                <div className="card-box-input">
                    <div className="card-input">
                        <label htmlFor="dtInicio">Data de Inicio</label>
                        <input type="text" name="dtInicio" placeholder="Digite uma data inicial" />
                    </div>
                    <div className="card-input">
                        <label htmlFor="dtTermino">Data de Término</label>
                        <input type="text" name="dtTermino" placeholder="Digite uma data de termino" />
                    </div>
                </div>
                <div className="card-table">
                    <table>
                        <thead>
                            <tr>
                                <th className="show-lg">ID</th>
                                <th className="show-md">Data</th>
                                <th>Vendedor</th>
                                <th className="show-lg">Visitas</th>
                                <th className="show-lg">Vendas</th>
                                <th>Total</th>
                                <th>Notificar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="show-lg">#361</td>
                                <td className="show-md">10/07/2022</td>
                                <td>Anakin</td>
                                <td className="show-lg">15</td>
                                <td className="show-lg">4</td>
                                <td>R$55300.00</td>
                                <td>
                                    <div className="btn-wrapper">
                                        <SendMessageButton />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="show-lg">#361</td>
                                <td className="show-md">10/07/2022</td>
                                <td>Anakin</td>
                                <td className="show-lg">15</td>
                                <td className="show-lg">4</td>
                                <td>R$55300.00</td>
                                <td>
                                    <div className="btn-wrapper">
                                        <SendMessageButton />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="show-lg">#361</td>
                                <td className="show-md">10/07/2022</td>
                                <td>Anakin</td>
                                <td className="show-lg">15</td>
                                <td className="show-lg">4</td>
                                <td>R$55300.00</td>
                                <td>
                                    <div className="btn-wrapper">
                                        <SendMessageButton />
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="show-lg">#361</td>
                                <td className="show-md">10/07/2022</td>
                                <td>Anakin</td>
                                <td className="show-lg">15</td>
                                <td className="show-lg">4</td>
                                <td>R$55300.00</td>
                                <td>
                                    <div className="btn-wrapper">
                                        <SendMessageButton />
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default SalesCard