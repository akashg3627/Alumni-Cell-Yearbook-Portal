import React, { Component, useContext, useEffect} from 'react';
import qnas from './q&as.js'
import { ChakraProvider } from '@chakra-ui/react';
import loadingSpinner from '../Homepage/images/808.gif'
import './About.scss';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react'
import { LoginContext } from '../../helpers/Context.js';

function About(){

  const {loading, setLoading} = useContext(LoginContext);

  useEffect(() => {
    const Load = async () => {
        await new Promise((r) => setTimeout(r, 5000));

        setLoading((loading) => !loading);
    }

    Load();
}, [])
  
  
    return (
      // <ChakraProvider>
      <>
      {!loading &&
      <div className='loading_spinner' style={{width: "100%", height:"100vh", display: "flex", alignItems: "center", justifyContent: "center"}}>
      <img src={loadingSpinner}></img>
  </div>
      }
        {loading && <div className='wrapper'>
          <div className='about'>
            <h1 id='about'>ABOUT ALUMNI CELL</h1>
            <p id='para-about'>The Alumni Cell is the Institute’s student-run cell to connect and broaden the alum network. It started as a group of 4 individuals but now encompasses 5 teams working to improve Alum-Institute-Student Relations.The Yearbook was one such initiative undertaken by the Cell. Starting with the Class of 2021, the Yearbook’s First Edition was a smashing success and helped the alums and the students connect more. Following the same, the Yearbook Portal is another initiative headed by the Web Development Division of the Alumni Cell. A one-stop hub to curate your Yearbook profile and help others do the same. This is the very first edition of the Yearbook Portal, and we would love to hear your comments and suggestions so we can improve in the coming years. </p>
            <p>Please reach us at:<br></br>E-Mail: alumnicell@iiti.ac.in<br></br>Enjoy commenting!<br></br>Regards<br></br>The Alumni Cell<br></br>Indian Institute of Technology, Indore<br></br></p>
          </div>
          <div className='faq'>
            <h1 id='faq'>Frequently Asked Questions</h1>
            <div className='qna'>
              {/* <Accordion defaultIndex={[0]} allowMultiple>
                {qnas.map((qna) => {
                  return (
                    <AccordionItem>
                  <h2 className='q'>
                    <AccordionButton>
                      <Box as="span" flex='1' textAlign='left'>
                        {qna.q}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} id='a'>
                    {qna.a}
                  </AccordionPanel>
                </AccordionItem> */}
                  {/* )
                // })} */}
                
              {/* </Accordion> */}
              
            </div>
          </div>
        </div>}
        </>
     
    );
};

export default About;
