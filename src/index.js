import React from 'react' ;
import ReactDOM from 'react-dom';
import moment from 'moment';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';

import './index.css';
import { CardActions } from '@material-ui/core';

class BudgetApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
           
            month: []
        };
    } 
    
    render() {
        return (

            <div id="wrapper">
                <ChangeDate />
                <Money />
            </div>
        );
    }
}



class ChangeDate extends React.Component {
    constructor(props){
        super(props);
        this.handlePrevWeek = this.handlePrevWeek.bind(this);
        this.handleNextWeek = this.handleNextWeek.bind(this);

        this.state = {
            date: new Date(2019,0,6)
        };
    }
    handlePrevWeek(){
        this.setState((prevState) => {
            return{       
                date: moment(prevState.date).subtract(7, 'days')
            };
        });
    }
    handleNextWeek(){
        this.setState((prevState) => {
            return{       
                date: moment(prevState.date).add(7, 'days')
            };
        });
    }
    render() {
        let startDay = this.state.date; 
        let endDay = moment(startDay).add(6, 'days');
        
        return (
           <div>
               <button onClick={this.handlePrevWeek} type="submit">
               Prev</button>
                <h1>Week of {moment(startDay).format("MMM Do YYYY")} to
                    Week of {moment(endDay).format("MMM Do YYYY")}
                </h1>
                <button onClick={this.handleNextWeek}>
                Next</button>
           </div>
        );
    }
}

class Money extends React.Component{
    constructor(props){
        super(props);
        
    };
   render() {
     const cards = [1,2,3];
    return(
        <div>
            {/* <Grid container spacing={40}>
                {cards.map(card => (
                    <Grid item key={card} sm={6} md={4} lg={3}>
                        <Card className={classes.card}>
                        
                        </Card>
                    </Grid>
                ))}
            </Grid> */}
        </div>
    );
   }
}

// class Money extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             balance: '',
//             target: '',
//             progress: ''
//         };
//     }
//     onChangeBalance(event){
//         this.setState({
//             balance: event.target.value
//         });
//     }
//     onChangeTarget(event){
//         this.setState({
//             target: event.target.value
//         });
//     }
//     onChangeProgress(event){
//         this.setState({
//             progress: event.target.value
//         });
//     }
//     showValue(){ 
//         alert(this.state.balance) //for testing    <input type="submit" value="Submit" onClick={this.showValue.bind(this)}/> 
//     }
//     render(){
//         return(
//             <div>
//                  <input
//                  id="balance"
//                  type= "text"
//                 onChange={this.onChangeBalance.bind(this)}
//                 />
//                 <h4>Balance</h4>
//                 <input
//                 id="target"
//                 type= "text"
//                 onChange={this.onChangeTarget.bind(this)}
//                 />
//                 <h4>Target</h4>
//                 <input
//                 id="progress"
//                 type= "text"
//                 onChange={this.onChangeProgress.bind(this)}
//                 />
//                 <h4>Progress</h4>
//             </div>             
//         );
//     }
// }


ReactDOM.render(<BudgetApp />, document.getElementById('root'));



