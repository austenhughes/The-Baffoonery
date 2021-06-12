import React from "react";
import HomePageBtn from "../components/HomePageBtn";
import PersonalPageBtn from "../components/PersonalPageBtn";
import LogOutBtn from "../components/LogOutBtn";
// import SaveNewJokeBtn from "../components/SaveNewJokeBtn";
import OwnJokesBtn from "../components/OwnJokesBtn";
import NewJokeForm from "../components/NewJokeForm";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Nav from "../components/Nav";

function NewJoke() {
  
  return <div>
  <Header />
  <Nav>
  <PersonalPageBtn />
  <HomePageBtn />
  <LogOutBtn />
  <OwnJokesBtn />
  </Nav> 
  <Container>
  <NewJokeForm />
  {/* <SaveNewJokeBtn /> */}
  </Container>
  <Footer />
  </div>       
  
}

export default NewJoke;