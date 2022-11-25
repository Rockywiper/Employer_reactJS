import React from 'react'
import pic1 from "C:/Users/91938/Desktop/Easyjob/easyjob/src/Images/mob100.png"
import { BsBriefcase } from 'react-icons/bs';
import { BiBrain } from 'react-icons/bi';
import { TbFileDescription } from 'react-icons/tb';
import { Nav } from './Nav';
import './HomeEasyjob.css'
import { GetJobByEmpId } from '../Actions/action';
import { connect } from 'react-redux';

export const Card = () => {
    return (
        <div className="card" style={{height:"200px", display:"flex", flexDirection:"column"}}>
            <div className='header'>
                <div style={{
                    padding: 12,
                    marginLeft: 10,
                }}>
                    <img className='header-img' src={pic1}></img>
                </div>
                <h4>Job Title</h4>
            </div>
            <div className='card-desc'>
                <TbFileDescription />

                Location
                Salary
                Company Name
            </div>

            <div className='card-bodyhome'>
                <div >
                    <BiBrain style={{ padding: "0px 2px" }}></BiBrain>
                    Skills
                </div>
                <div>
                    <BsBriefcase style={{ padding: "0px 2px" }}></BsBriefcase>
                    Experience
                </div>

            </div>

            <div className='card-button'>
                <div style={{ fontSize: "17px", padding: "0px 20px" }}>Status</div>
                <div>
                    <button class="ui primary button">
                        Edit
                    </button>
                    <button class="ui red button">Delete</button>
                </div>

            </div>
        </div>

    )
}

class Home extends React.Component {

    componentDidMount(){
        console.log("at home com");
        this.props.dispatch(GetJobByEmpId(1));
        console.log("completed");
    }

    render() {
        return (
            <div>
                <Nav></Nav>
                <br />
                <br />
                <div className='main-card' >
                    <center>

                        <div className="ui two stackable cards">

                            <Card />

                        </div>

                    </center>


                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log(state.joblist);
    return{
        list:state.joblist
    };
}
export default connect (mapStateToProps)(Home)

// export default Home