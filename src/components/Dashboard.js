import React, { Component } from 'react';
import Plot from 'react-plotly.js';
import moment from 'moment';


class Dashboard extends Component{

    constructor(props) {
        super(props)

        this.urlData = 'http://127.0.0.1:5000';
        this.state = {
            time: [],
            hold: [],
            latency: [],
            revision: 0,
            layout: {
                datarevision: 0,
            },
            timeView: 'http://127.0.0.1:5000'
        }
        this.REFRESH_TIME = 30000;

        this.handleToggleTimeViewDay = this.handleToggleTimeViewDay.bind(this);
        this.handleToggleTimeViewWeek = this.handleToggleTimeViewWeek.bind(this);
        this.handleToggleTimeViewMonth = this.handleToggleTimeViewMonth.bind(this);
        this.handleToggleTimeViewYear = this.handleToggleTimeViewYear.bind(this);
        this.handleToggleTimeViewAll = this.handleToggleTimeViewAll.bind(this);

    }

    handleToggleTimeViewDay() {
        let start = moment().format('YYYY-MM-DD');
        let timeQuery = 'http://127.0.0.1:5000?start_date=' + start;
        console.log('start', start);
        this.setState(() => {
            return {
                revision: this.state.revision + 1,
                timeView : timeQuery
            };
        })
        this.state.layout.datarevision = this.state.revision + 1;
    }

    handleToggleTimeViewWeek() {
        let end = moment().format('YYYY-MM-DD');
        let start = moment().subtract(7, 'days').format('YYYY-MM-DD');
        let timeQuery = 'http://127.0.0.1:5000?start_date=' + start + '&end_date=' + end;
        console.log('start', start, 'end', end);
        this.setState(() => {
            return {
                timeView : timeQuery
            };
        })
    }
    handleToggleTimeViewMonth() {
        let end = moment().format('YYYY-MM-DD');
        let start = moment().subtract(1, 'months').format('YYYY-MM-DD');
        let timeQuery = 'http://127.0.0.1:5000?start_date=' + start + '&end_date=' + end;
        console.log('start', start, 'end', end);
        this.setState(() => {
            return {
                timeView : timeQuery
            };
        })
    }
    handleToggleTimeViewYear() {
        let end = moment().format('YYYY-MM-DD');
        let start = moment().subtract(1, 'years').format('YYYY-MM-DD');
        let timeQuery = 'http://127.0.0.1:5000?start_date=' + start + '&end_date=' + end;
        console.log('start', start, 'end', end);
        this.setState(() => {
            return {
                timeView : timeQuery
            };
        })
    }
    handleToggleTimeViewAll() {
        let end = moment().format('YYYY-MM-DD');
        let timeQuery = 'http://127.0.0.1:5000?end_date=' + end;
        console.log('end', end);
        this.setState(() => {
            return {
                timeView : timeQuery
            };
        })
    }


    
    async componentDidMount() {

        try {
            setInterval(async () => {

                console.log("get")

                // const response = await fetch(this.urlData,
                const response = await fetch(this.state.timeView,
                    {
                        headers : { 
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                        }
                    });

                const data = await response.json();

                console.log(data)

                const { time, hold, latency, layout } = this.state;

                for (var i = 0; i < data.length; i++) {
                    let obj = data[i];

                    time.push(obj.time);
                    hold.push(obj.hold);
                    latency.push(obj.latency);
                }

                this.setState({ 
                    revision: this.state.revision + 1, 
                });
                layout.datarevision = this.state.revision + 1;
                
            }, this.REFRESH_TIME);
          } catch(e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div className="Dashboard">
                <h1> Hello, Jackie.</h1>
                <h4> <b>Today is August 4, 2019.</b></h4>
                <br></br><br></br>
                <p>See your recent activity.</p>

                <div className="toggleTime">
                    <button className="toggleTimeButton" id="DayView" value="Day" onClick = {this.handleToggleTimeViewDay}>Day</button>
                    <button className="toggleTimeButton" id="WeekView" value="Week" onClick = {this.handleToggleTimeViewWeek}>Week</button>
                    <button className="toggleTimeButton" id="MonthyView" value="Month" onClick = {this.handleToggleTimeViewMonth}>Month</button>
                    <button className="toggleTimeButton" id="YearView" value="Year" onClick = {this.handleToggleTimeViewYear}>Year</button>
                    <button className="toggleTimeButton" id="AllView" value="ALl" onClick = {this.handleToggleTimeViewAll}>All</button>
                </div>

                <Plot
                data={[
                   {
                     x: this.state.time,
                     y: this.state.hold,
                     type: 'scatter',
                     mode: 'markers',
                     marker: {color: 'red'},
                   }
                ]}

                layout={this.state.layout}
                revision={this.state.revision}    
                />

                <Plot
                data={[
                   {
                     x: this.state.time,
                     y: this.state.latency,
                     type: 'scatter',
                     mode: 'markers',
                     marker: {color: 'blue'},
                   }
                ]}

                layout={this.state.layout}
                revision={this.state.revision}
                />
                
            </div>
        )
    }
}

export default Dashboard;
