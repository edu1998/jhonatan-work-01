import {Card, Col, Row} from "antd";
import BarChart from "../../../components/BarChart/BarChart";
import {BAR_CHART_DATA as barChartConfig} from "../../../services/barchart-data";
import {TableTop} from "../../../components/TableTop/TableTop";
import {TableTopData} from "../../../services/table-data";
import CardBody from "../../../components/card/cardBody/Card/cardBody";
import {PieChart} from "../../../components/PieChart/PieChart";
import {PieData, PieData2} from "../../../services/progress-data";

export const ChartsView = () => {
    return (
        <>
            <Row>
                <Col span={15} >
                   <BarChart data={barChartConfig} title="Ordenes"/>
                </Col>
                <Col span={9}>
                    <TableTop topData={TableTopData} title="Top Productos"/>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <PieChart data={PieData} staticContent={'+10.10%'} title="Más vendidos" />
                </Col>
                <Col span={6}>
                    <PieChart data={PieData2} staticContent={'+12.48%'} title="Top Marketplace $"/>
                </Col>
                <Col span={6}>
                    <PieChart data={PieData} staticContent={'-30.35%'} title="Top Paises $"/>
                </Col>
            </Row>
        </>
    )
}
