import React, { Component } from 'react';
import Plot from 'react-plotly.js';


class Dashboard extends Component{

    constructor(props) {
        super(props)

        this.urlData = 'http://127.0.0.1:5000/';
        this.state = {
            time: [],
            hold: [],
            latency: [],
            revision: 0,
            layout: {
                datarevision: 0,
            },
        }
        this.REFRESH_TIME = Infinity; // 1000;
    }
    
    async componentDidMount() {


        console.log("get")
        console.log(Date.now())
                const response = await fetch(this.urlData,
                    {
                        headers : { 
                            'Content-Type': 'application/json',
                            'Accept': 'application/json'
                        }
                    });

                const data = await response.json();

                //console.log(data)

                const { time, hold, latency, layout } = this.state;

                // for (var i = 0; i < data.length; i++) {
                //     let obj = data[i];

                //     time.push(obj.time);
                //     hold.push(obj.hold);
                //     latency.push(obj.latency);
                // }

                console.log(data.time)

                this.setState({ 
                    time: data.time,
                    hold: data.hold,
                    latency: data.latency
                });

                //time.concat(data.time);
                //hold.concat(data.hold);
                //latency.concat(data.latency);

                console.log(Date.now())

                console.log(time)
                console.log(hold)
                console.log(latency)

                this.setState({ revision: this.state.revision + 1 });
                layout.datarevision = this.state.revision + 1;
        // try {
        //     setInterval(async () => {

        //         console.log("get")

        //         const response = await fetch(this.urlData,
        //             {
        //                 headers : { 
        //                     'Content-Type': 'application/json',
        //                     'Accept': 'application/json'
        //                 }
        //             });

        //         const data = await response.json();

        //         console.log(data)

        //         const { time, hold, latency, layout } = this.state;

        //         for (var i = 0; i < data.length; i++) {
        //             let obj = data[i];

        //             time.push(obj.time);
        //             hold.push(obj.hold);
        //             latency.push(obj.latency);
        //         }

        //         this.setState({ revision: this.state.revision + 1 });
        //         layout.datarevision = this.state.revision + 1;
                
        //     }, this.REFRESH_TIME);
        //   } catch(e) {
        //     console.log(e);
        // }
    }

    render() {

        return (
            <div className="Dashboard">
                <h1> Hello, Jackie.</h1>
                <h4> <b>Today is August 4, 2019.</b></h4>
                <br></br><br></br>
                <p>See your recent activity.</p>

                <Plot
                data={[
                   {
                     x: this.state.time,
                     y: this.state.hold,
                     type: 'scattergl',
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
                     type: 'scattergl',
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

// class Dashboard extends Component{
//     render() {
//         return (
//             <div>
//                 <h1>Dashboard Page</h1>
//             </div>
//         )
//     }
// }

// export default Dashboard;