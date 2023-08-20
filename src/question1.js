import './question1.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import { Bar } from "react-chartjs-2"
import { Pie } from "react-chartjs-2";
import { Doughnut } from 'react-chartjs-2';
function question1() {
    const chartData_1 ={
        labels: ["A", "B", "C", "D", "E","D", "E"],
        datasets: [
          {
            label: "label1",
            radius : 0,
            borderColor: [
              "rgba(255,165,0,1)"
            ],
            backgroundColor: "rgba(154,178,96,0)",
            // hoverBackgroundColor: "rgba(154,178,96,1)",
            data: [510, 615, 1215, 1481, 1055,500,-1100],
          },
      ]};
      const chartData_2 ={
        labels: ["0", "2", "4", "6", "8","10"],
        datasets: [
          {
            label: "label1",
            borderColor: [
              "rgba(255,165,0,1)"
            ],
            radius : 0,
            backgroundColor: "rgba(255,165,0,1)",
            // hoverBackgroundColor: "rgba(154,178,96,0)",
            data: [1510, 1615, 1215, 1481, 1055,-500],
          },
          {
            label: "label2",
            borderColor: [
              "rgba(0,255,255,1)"
            ],
            radius : 0,
            backgroundColor: "rgba(0,255,255,0)",
            // hoverBackgroundColor: "rgba(54,178,96,0)",
            data: [510, 615, 1215, 1481, 1055,500],
          },
          {
            label: "label3",
            borderColor: [
              "rgba(54,178,96,1)"
            ],
            radius : 0,
            backgroundColor: "rgba(154,78,96,0)",
            // hoverBackgroundColor: "rgba(54,178,96,)",
            data: [700, 700, 700, 700, 700,700],
          },
      ]};
      const chartOptions = {
        responsive: false,
        plugins: {
          legend: {
            display:false,
            position: "top",
            labels: {
              fontColor:'transparent',
              soze:0
            }
          },
          title: {
            display: false,
            text: "Chart.js Line Chart",
          },
          labels: {
            size:0
          },
          scales: {
            yAxes: [{
              gridLines: {
                zeroLineColor:'rgba(0,0,0,0)',
                color:'rgba(0,0,0,0)',
                frawBorder:false
              },
            }],
            xAxes: [{
              gridLines: {
                display:false,
                frawBorder:false,
              },
            }],
          }
        },
      };

      const barData ={
        labels: ["日", "月"],
        datasets: [
          {
            label: "label bar 日",
            // stack : 'Stack 1',
            backgroundColor: ["rgba(154,178,96,0.5)","rgba(15,17,196,0.5)"],
            // hoverBackgroundColor: "rgba(154,178,96,1)",
            data: [510,1900],
          },
          // {
            // label: "label bar 年",
            // stack : 'Stack 1',
            // backgroundColor: "rgba(15,17,196,0.5)",
            // hoverBackgroundColor: "rgba(154,178,96,1)",
          //   data: [1900],
          // },
      ]};
      const barOptions = {
        responsive: false,
        plugins: {
          legend: {
            display:false,
            position: "top",
            labels: {
              fontColor:'transparent',
              soze:0
            }
          },
          title: {
            display: false,
            text: "Chart.js Line Chart",
          },
          labels: {
            size:0
          },
        },
      };
      const pieData_1 ={
        labels: ["投資", "轉帳"],
        datasets: [{
            data: [2600, 100],
            backgroundColor : ["#0074D9", "#FF851B"],
            },     
        ]};
       const pieData_2 ={
          labels: ["投資", "信用卡"],
          datasets: [{data: [1615,100],
          backgroundColor : ["#2ECC40", "#0074D9"],
        },]};
      const peiOptions = {
        responsive: false,
        plugins: {
          legend: {
            display:false,
            position: "top",
            labels: {
              fontColor:'transparent',
              soze:0
            }
          },
          title: {
            display: false,
            text: "Chart.js Line Chart",
          },
          labels: {
            size:0
          },
        },
      };

    return (
      <div>

        <div className="q1">
        <header>
          <h2>Question 1</h2>
        </header>
            <div className = 'up-group row container d-flex justify-content-around'>
                <div className='border1 row col-md-5'>
                  <div className='col-md-3'>
                    <div>
                      <div className='title' >線上人數</div>
                      <div className='aquaColor'>4325人</div>
                    </div>
                    <div>
                      <div className='title' >Average</div>
                      <div>4153人</div>
                    </div>
                  </div>
                  <div className='col-md-9 barChart'>
                    <Bar type='bar'  data={barData} options={barOptions} />
                  </div>
                </div>
                <div className='border2 row col-md-5'>
                  <div className='col-md-3'>
                    <div>
                      <div className='title' >交易比數</div>
                      <div className='aquaColor'>287389<span>筆</span></div>
                    </div>
                    <div>
                      <div className='title' >當月平均</div>
                      <div>177652<span>筆</span></div>
                    </div>
                  </div>
                  <div className='col-md-9 lineChart'>
                    <Chart type='line'  data={chartData_1} options={chartOptions}/>
                  </div>
                </div>
            </div>
            <div className = 'down-group row container d-flex justify-content-around'>
                <div className='border3 row col-md-5'>
                    <div className='col-md-4'>
                      <div>
                        <div className='title' >回應時間</div>
                        <div className='orangeColor'>Max</div>
                        <div>12.2<span> ms</span></div> 
                      </div>
                      <div>
                        <div className='aquaColor'>Average</div>
                        <div>5.1<span> ms</span></div>
                      </div>
                    </div>
                    <div className='col-md-8 lineChart' style={{height:'60%',width:'60%'}}>
                      <Chart type='line'  data={chartData_2} options={chartOptions}/>
                    </div>
                </div>
                <div className='border4 row col-md-5'>
                    <div className=' col-md-6'>
                      <div className='title' >交易失敗</div>
                      <div className='aquaColor'>3823<span>筆</span></div>
                        <Doughnut type='doughnut'  data={pieData_1} options={peiOptions}/>
                    </div>
                    <div className=' col-md-6'>
                      <div className='title' >超時交易</div>
                      <div className='aquaColor'>3231<span>筆</span></div>
                        <Doughnut type='doughnut'  data={pieData_2} options={peiOptions}/>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default question1;