import React from 'react';
import { useParams } from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import '../styles/User.css';
import '../styles/DW.css';
import ReportService from '../servicesDW/ReportService';
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import { Chart as ChartJS, LineController, LineElement, PointElement, LinearScale, Title } from 'chart.js';

ChartJS.register(LineController, LineElement, PointElement, LinearScale, Title);


function ReportsComponent(props) {

    let { id } = useParams(); 
    const is_admin = localStorage.getItem("is_admin");
    const [sales, setSales] = React.useState({datasets: []});
    const [showSales, setShowSales] = React.useState(true);
    const [cities, setCities] = React.useState({datasets: []});
    const [showCities, setShowCities] = React.useState(false);
    const [weights, setWeights] = React.useState({datasets: []});
    const [showWeigths, setShowWeights] = React.useState(false);
    const [diets, setDiets] = React.useState({datasets: []});
    const [showDiets, setShowDiets] = React.useState(false);
    const [cart, setCart] = React.useState({datasets: []});
    const [showCart, setShowCart] = React.useState(false);

    React.useEffect(() => { 
        const fetchSales = async () => {
            const res = await ReportService.salesPerDay().then((response) => {return response.data}).catch((err) => alert(err));
            
            setSales({
                labels: res.map((sampling) => sampling.id_timp),
                datasets: [{
                    label: "Sales per day - total amount",
                    data: res.map((sampling) => sampling.total_amount),
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1                    
                },
                {
                    label: "Sales per day - fluctuation",
                    data: res.map((sampling) => sampling.fluctuation),
                    borderColor: 'rgb(247, 76, 116)',
                    tension: 0.1                      
                }]
            });
        }
        fetchSales();
    }, []);
    
    React.useEffect(() => { 
        const fetchUserWeight = async () => {
            const res = await ReportService.weightEvolution(4).then((response) => {return response.data}).catch((err) => alert(err));
        
            setSales({
                labels: res.map((sampling) => sampling.luna),
                datasets: [{
                    label: "Sales per day - total amount",
                    data: res.map((sampling) => sampling.average),
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1                    
                }]
            });
        }
        fetchUserWeight();
    }, []);

    React.useEffect(() => {
        const fetchCities = async () => {
            const res = await ReportService.topCities().then((response) => {return response.data}).catch((err) => alert(err));
            const res_total = await ReportService.topCitiesTotal().then((response) => {return response.data}).catch((err) => alert(err));
            
            const data = res.map((sampling) => sampling.total_amount/res_total*100);

            const value = 100 - data[0] - data[1] - data[2];
            data.push(value);

            setCities({
                labels: res.map((sampling) => sampling.city),
                datasets: [{
                    label: "Top cities",
                    data: data,  
                    backgroundColor: [
                        'rgb(75, 192, 192)',
                        'rgb(247, 76, 116)',
                        'rgb(164, 223, 124)',
                        'rgb(189, 189, 189)'
                    ],
                    hoverOffset: 4                
                }]
            });
        }
        fetchCities();
    }, []);

    function handleCharts(value){
        switch(value){
            case 'sales':{
                setShowSales(true);
                setShowCities(false);
                setShowWeights(false);
                setShowDiets(false);
                setShowCart(false);
                break;
            }
            case 'cities': {
                setShowSales(false);
                setShowCities(true);
                setShowWeights(false);
                setShowDiets(false);
                setShowCart(false);
                break;
            }
            case 'weights': {
                setShowSales(false);
                setShowCities(false);
                setShowWeights(true);
                setShowDiets(false);
                setShowCart(false);
                break;
            }
            case 'cart': {
                setShowSales(false);
                setShowCities(false);
                setShowWeights(false);
                setShowDiets(false);
                setShowCart(true);
                break;
            }
            case 'diets': {
                setShowSales(false);
                setShowCities(false);
                setShowWeights(false);
                setShowDiets(true);
                setShowCart(false);
                break;
            }
            default: {
                break;
            }
        }
    }

    console.log(sales);
    return (
        <div className="all">
            <div className="one">
                <div className="nav">
                    <NavLink to={`/users/${id}`} className="inactive"> Account Info </NavLink>
                    <NavLink to={`/users/${id}/updates`} className="inactive"> Updates </NavLink>
                    <NavLink to={`/users/${id}/diets`} className="inactive"> My diets </NavLink>
                    <div className="line"></div>
                    {is_admin &&<NavLink to={`/users/${id}/allusers`} className="inactive"> All users </NavLink>}
                    {is_admin &&<NavLink to={`/users/${id}/alldiets`} className="inactive"> All diets </NavLink>}
                    {is_admin &&<NavLink to={`/users/${id}/allbillings`} className="inactive"> All billings </NavLink>}
                    <div className="line"></div>
                    {is_admin &&<NavLink to={`/users/${id}/facttables`} className="inactive"> Fact Tables </NavLink>}
                    {is_admin &&<NavLink to={`/users/${id}/reports`} className="active"> Reports </NavLink>}
                    <div className="line"></div>
                </div>
                <div className="logout">
                    <NavLink to={`/logout`} className="inactive"> Log out </NavLink>
                </div>
            </div>

            <div className="two" id="user-component" style={{ marginRight: '20px' }}>
                <button className="buttonCharts" value="sales" onClick={() => handleCharts('sales')}>1</button>
                <button className="buttonCharts" value="cities" onClick={() => handleCharts('cities')}>2</button>
                <button className="buttonCharts" value="weights" onClick={() => handleCharts('weights')}>3</button>
                <button className="buttonCharts" value="diets" onClick={() => handleCharts('diets')}>4</button>
                <button className="buttonCharts" value="cart" onClick={() => handleCharts('cart')}>5</button>
                {showSales && <div style={{width: "1000px", margin:'0px auto', marginTop:"40px"}}>
                    <Chart type='line' data={sales} />
                    <p className="parag">Vânzările și fluctuațiile acestora pe zile, în ultimul an</p>
                </div>}
                {showCities && <div style={{width: "450px", margin:'0px auto', marginTop:"40px"}}>
                    <Chart type='pie' data={cities} />
                    <p className="parag">Top 3 orașe cu cele mai mari vânzări</p>
                </div>}
                {showWeigths && <div style={{width: "450px", margin:'0px auto', marginTop:"40px"}}>
                    <Chart type='line' data={weights} />
                    <p className="parag">Evoluția unui utilizator în timp - greutatea lunară</p>
                </div>}
            </div>
        </div>
    )
}

export default ReportsComponent;