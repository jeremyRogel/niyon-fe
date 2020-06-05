import React, { useEffect, useContext } from 'react';
import Footer from '../footer/Footer'
import Header from '../header/Header'
import Connections from '../connections/Connections'
import ConnectionRequests from '../connections/ConnectionRequests'
import RecommendedConnections from '../connections/RecommendedConnections'
import { axiosWithAuth } from "../apiStuff/axiosWithAuth";
import { UserContext } from "../../UserContext";
import './styles.scss';

const Home = (props) => {
  const { user, setUser } = useContext(UserContext);
  const id = window.localStorage.getItem("id");  
  

  useEffect(() => {
    const apiCall = async () => {
    const result = await axiosWithAuth()
                    .get(`/profile/${id}`)
                    .then((res) => {                   
                    if(res) setUser({...user, ...res.data});                     
                    })
                    .catch(err => console.log(err))
            }
    apiCall();        
  },[id, user]);
 
  return (
    <div className="home" data-test="home-container">
      <Header />
      <Connections />
      <ConnectionRequests />
      <RecommendedConnections />
      <Footer value={0} />
    </div>
  );
}

export default Home;