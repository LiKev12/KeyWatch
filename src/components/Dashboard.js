import React, { Component } from "react";
import Plot from "react-plotly.js";
import moment from "moment";
import { Tabs, Tab } from "react-mdl";
import DashboardInfo from "./DashboardInfo";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.urlData = "http://127.0.0.1:5000";
    this.state = {
      time: [],
      hold: [],
      latency: [],
      revision: 0,
      layout: {
        datarevision: 0
      },
      timeViewURL: "http://127.0.0.1:5000",
      timeView: "All",
      activeTab: 4
    };

    this.REFRESH_TIME = 20000;
    this.handleToggleTimeView = this.handleToggleTimeView.bind(this);
  }

  async componentDidMount() {
    try {
      setInterval(async () => {
        console.log("get");
        let response = "";
        let data = "";
        try {
          response = await fetch(this.state.timeViewURL, {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            }
          });

          // console.log(response.status);
          if (!response.ok) {
            throw new Error(response.statusText);
          } // or check for response.status

          data = await response.json();
        } catch (err) {
          console.warn(err);
        }

        console.log(data);

        const { time, hold, latency, layout } = this.state;

        for (var i = 0; i < data.length; i++) {
          let obj = data[i];

          time.push(obj.time);
          hold.push(obj.hold);
          latency.push(obj.latency);
        }

        this.setState({
          revision: this.state.revision + 1
        });
        layout.datarevision = this.state.revision + 1;
      }, this.REFRESH_TIME);
    } catch (e) {
      console.log("error");
      console.log(e);
    }
  }

  handleToggleTimeView(tabId) {
    console.log(moment().format("LLLL"));
    this.setState({ activeTab: tabId });
    let end = moment().format("YYYY-MM-DD");
    let start = "";
    let timeQuery = "";
    let timeView = "";

    if (tabId < 4) {
      if (tabId === 0) {
        timeView = "Day";
        start = moment().format("YYYY-MM-DD");
      } else if (tabId === 1) {
        timeView = "Week";
        start = moment()
          .subtract(7, "days")
          .format("YYYY-MM-DD");
      } else if (tabId === 2) {
        timeView = "Month";
        start = moment()
          .subtract(1, "months")
          .format("YYYY-MM-DD");
      } else {
        timeView = "Year";
        start = moment()
          .subtract(1, "years")
          .format("YYYY-MM-DD");
      }
      timeQuery =
        "http://127.0.0.1:5000?start_date=" + start + "&end_date=" + end;
    } else {
      timeView = "All";
      timeQuery = "http://127.0.0.1:5000?end_date=" + end;
    }
    console.log("start", start, "end", end);
    this.setState({
      time: [],
      hold: [],
      latency: [],
      revision: 0,
      layout: {
        datarevision: 0
      },
      timeViewURL: timeQuery,
      timeView
    });
    this.state.layout.datarevision = this.state.revision + 1;
  }

  render() {
    return (
      <div className="Dashboard">
        <DashboardInfo />
        <br />
        <br />
        <p>See your recent activity.</p>
        <br />

        <div className="demo-tabs">
          <Tabs
            activeTab={this.state.activeTab}
            onChange={tabId => this.handleToggleTimeView(tabId)}
            ripple
          >
            <Tab>Day</Tab>
            <Tab>Week</Tab>
            <Tab>Month</Tab>
            <Tab>Year</Tab>
            <Tab>All</Tab>
          </Tabs>
          <section>
            <div className="content">
              <h4>Viewing: {this.state.timeView}</h4>
            </div>
          </section>
        </div>

        <Plot
          data={[
            {
              x: this.state.time,
              y: this.state.hold,
              type: "scatter",
              mode: "markers",
              marker: { color: "red" }
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
              type: "scatter",
              mode: "markers",
              marker: { color: "blue" }
            }
          ]}
          layout={this.state.layout}
          revision={this.state.revision}
        />
      </div>
    );
  }
}

// export default Dashboard;

// this.handleToggleTimeViewDay = this.handleToggleTimeViewDay.bind(this);
// this.handleToggleTimeViewWeek = this.handleToggleTimeViewWeek.bind(this);
// this.handleToggleTimeViewMonth = this.handleToggleTimeViewMonth.bind(this);
// this.handleToggleTimeViewYear = this.handleToggleTimeViewYear.bind(this);
// this.handleToggleTimeViewAll = this.handleToggleTimeViewAll.bind(this);

// <div className="toggleTime">
// <button className="toggleTimeButton" id="DayView" value="Day" onClick = {this.handleToggleTimeViewDay}>Day</button>
// <button className="toggleTimeButton" id="WeekView" value="Week" onClick = {this.handleToggleTimeViewWeek}>Week</button>
// <button className="toggleTimeButton" id="MonthyView" value="Month" onClick = {this.handleToggleTimeViewMonth}>Month</button>
// <button className="toggleTimeButton" id="YearView" value="Year" onClick = {this.handleToggleTimeViewYear}>Year</button>
// <button className="toggleTimeButton" id="AllView" value="All" onClick = {this.handleToggleTimeViewAll}>All</button>
// </div>

// handleToggleTimeViewDay() {
//     let start = moment().format('YYYY-MM-DD');
//     let timeQuery = 'http://127.0.0.1:5000?start_date=' + start;
//     console.log('start', start);
//     this.setState({
//         time: [],
//         hold: [],
//         latency: [],
//         revision: 0,
//         layout: {
//             datarevision: 0,
//         },
//         timeViewURL : timeQuery,
//         timeView: 'day'
//     });
//     this.state.layout.datarevision = this.state.revision + 1;
// }

// handleToggleTimeViewWeek() {
//     let end = moment().format('YYYY-MM-DD');
//     let start = moment().subtract(7, 'days').format('YYYY-MM-DD');
//     let timeQuery = 'http://127.0.0.1:5000?start_date=' + start + '&end_date=' + end;
//     console.log('start', start, 'end', end);
//     this.setState(() => {
//         return {
//             time: [],
//             hold: [],
//             latency: [],
//             revision: 0,
//             layout: {
//                 datarevision: 0,
//             },
//             timeViewURL : timeQuery,
//             timeView: 'week'
//         };
//     })
// }
// handleToggleTimeViewMonth() {
//     let end = moment().format('YYYY-MM-DD');
//     let start = moment().subtract(1, 'months').format('YYYY-MM-DD');
//     let timeQuery = 'http://127.0.0.1:5000?start_date=' + start + '&end_date=' + end;
//     console.log('start', start, 'end', end);
//     this.setState(() => {
//         return {
//             time: [],
//             hold: [],
//             latency: [],
//             revision: 0,
//             layout: {
//                 datarevision: 0,
//             },
//             timeViewURL : timeQuery,
//             timeView: 'month'
//         };
//     })
// }
// handleToggleTimeViewYear() {
//     let end = moment().format('YYYY-MM-DD');
//     let start = moment().subtract(1, 'years').format('YYYY-MM-DD');
//     let timeQuery = 'http://127.0.0.1:5000?start_date=' + start + '&end_date=' + end;
//     console.log('start', start, 'end', end);
//     this.setState(() => {
//         return {
//             time: [],
//             hold: [],
//             latency: [],
//             revision: 0,
//             layout: {
//                 datarevision: 0,
//             },
//             timeViewURL : timeQuery,
//             timeView: 'year'
//         };
//     })
// }
// handleToggleTimeViewAll() {
//     let end = moment().format('YYYY-MM-DD');
//     let timeQuery = 'http://127.0.0.1:5000?end_date=' + end;
//     console.log('end', end);
//     this.setState(() => {
//         return {
//             time: [],
//             hold: [],
//             latency: [],
//             revision: 0,
//             layout: {
//                 datarevision: 0,
//             },
//             timeViewURL : timeQuery,
//             timeView: 'all'
//         };
//     })
// }
