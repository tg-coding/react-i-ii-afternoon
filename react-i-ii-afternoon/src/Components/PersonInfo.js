import React, {Component} from 'react'
import {data} from './data'
// import 

class PersonInfo extends Component {
    
    //constructor only necessary if you need state in your component
    constructor(){
        super();
        this.state = { 
            user: data,
            index: 0
        }

        this.previousButton = this.previousButton.bind(this);
        this.nextButton = this.nextButton.bind(this);
        
    }

    

    previousButton() {
        if(this.state.index < 1){
            this.setState({index:24});
        } else {
            this.setState({index: this.state.index -= 1})
        }
    }

    nextButton() {
        if(this.state.index > 23){
            this.setState({index:0});
        } else {
            this.setState({index: this.state.index += 1})
        } 
    }


    render() {
        const user = this.state.user;
        const index = this.state.index;

        // console.log(user[index].favoriteMovies)

        let list = user[index].favoriteMovies.map((element, index)=>{
            return <li key={index}> {element} </li>
        });

        return(
            <div className='body'>
                <div className='personInfo-container'>
                    
                    <h1 className='userIndex'>
                        {user[index].id}/25
                    </h1>
                    <div className='userInfo'>
                        <h1 className='userName'>
                            {user[index].name.first} {user[index].name.last}
                        </h1>
                        
                        <p>
                            <strong className='strongText'>From:</strong> {user[index].city}, {user[index].country}
                        <br/>
                            <strong className='strongText'>Job Title:</strong> {user[index].title}
                        <br/>
                            <strong className='strongText'>Employer: </strong>{user[index].employer}
                        </p>

                        <p className='movies'><strong className='strongText'>Favorite Movies:</strong></p>
                        <ol>
                            {list}
                        </ol>

                    </div>
                
                </div>

                <div className='button-container'>
                    <button className='navButton' onClick={(e)=>{this.previousButton(e)}}>
                        {"<"} Previous
                    </button>

                    <div>
                        <button className='editButton'>Edit</button>
                        <button className='editButton'>Delete</button>
                        <button className='editButton'>New</button>
                    </div>

                    <button className='navButton' onClick={(e)=>{this.nextButton(e)}}>
                        Next {">"}
                    </button>
                </div>
            </div>
        )
    }
}

export default PersonInfo
