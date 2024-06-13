import React, { useState } from "react";
import ProductNav from "../../products/ProductNav";
import { ProfileContainer, ProfileHeader, ProfileHeaderOption,ProfileBtn, ProfileLogin,ProfileCreate } from "./styled";
import { api } from "../../../services/api";
import Loading from "../../states/Loading";
import Error from "../../states/Error";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [tab, setTab] = useState(true);
  const [loading,setLoading] = useState(false);
  const [errorMsg,setErrorMsg] = useState(null);  
  const navigate = useNavigate()
  const [profileLog,setProfileLog] = useState({
    username:'',
    password:''
  })
 
  const [profileCreate,setProfileCreate] = useState({
    username:'',
    email:'',
    password:''
  })

  const handleChangeCreate = e => {
    const {name,value} = e.target;
    setProfileCreate((prevstate) => ({
        ...prevstate,
        [name]:value
    }))
  }

  const handleChangeLog = e => {
    const {name,value} = e.target;
    setProfileLog((prevstate) => ({
        ...prevstate,
        [name]:value
    }))
  }
  const handleSubmitLog = async (e) => {
    e.preventDefault();
  }
  const handleSubmitCreate = async (e) => {
    e.preventDefault();
    try {
        setLoading(true)
        const response = await fetch(`${api}/user`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(profileCreate),
        })
        if (!response.ok) {
            throw new Error("failed to add");
          }else{
            console.log(profileCreate);
            setLoading(false)
            navigate('/')
          }
    } catch (error) {
        setLoading(false)
        setErrorMsg(error.message)
    }
  }
  if(loading) return <Loading/>
  if(errorMsg !== null) return <Error msg={errorMsg}/>
  return (
    <>
      <ProductNav prev={"Profile"} />
      <ProfileContainer>
        <ProfileHeader>
          <ProfileHeaderOption
            onClick={() => setTab(true)}
            className={tab ? "selected" : null}
          >
            Log In
          </ProfileHeaderOption>
          <ProfileHeaderOption
            onClick={() => setTab(false)}
            className={!tab ? "selected" : null}
          >
            Create Profile
          </ProfileHeaderOption>
        </ProfileHeader>
        {tab?
        <ProfileLogin>
            <label htmlFor="username"> Enter Username</label>
            <input type="text" name="username" id="username"  value={profileLog.username} onChange={handleChangeLog}/>
            <label htmlFor="password"> Enter Password</label>
            <input type="text" name="password" id="password"  value={profileLog.password} onChange={handleChangeLog}/>
            <input type="submit" value="Log In" id="submit-btn"/>
        </ProfileLogin>
        :
        <ProfileLogin onSubmit={handleSubmitCreate}>
            <label htmlFor="email"> Enter Email</label>
            <input type="text" name="email" id="email" value={profileCreate.email} onChange={handleChangeCreate}/>
            <label htmlFor="username"> Enter Username</label>
            <input type="text" name="username" id="username" value={profileCreate.username} onChange={handleChangeCreate}/>
            <label htmlFor="password"> Enter Password</label>
            <input type="text" name="password" id="password" value={profileCreate.password} onChange={handleChangeCreate}/>
            <input type="submit" value="Create Profile" id="submit-btn"/>
        </ProfileLogin>
        }
      </ProfileContainer>
    </>
  );
};

export default Profile;
