import SendMessageButton from '../SendMessageButton'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import './styles.css'

function SalesCard() {
    return (
        <>
            <div className="card">
                <h2 className="card-title">Sistema de Vendas</h2>
                <div className="card-box-input">
                    <div className="card-input">
                        <label htmlFor="dtInicio">Data de Inicio</label>
                        <DatePicker
                            selected={new Date()}
                            onChange={(date: Date) => { }}
                            dateFormat="dd/MM/yyyy" />
                    </div>
                    <div className="card-input">
                        <label htmlFor="dtTermino">Data de Término</label>
                        <DatePicker
                            selected={new Date()}
                            onChange={(date: Date) => { }}
                            dateFormat="dd/MM/yyyy" />
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