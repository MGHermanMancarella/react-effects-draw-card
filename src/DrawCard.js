/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from './Card.js'

const BASEURL = "https://deckofcardsapi.com/api/deck/";
/**
 * on load makes API request to "https://deckofcardsapi.com/" to get a deck of
 * playing cards
 *
 *
 * Drawcard URL    ${deckId}}/draw/?count=1
 */

function DrawCard() {
  const [deckId, setDeckId] = useState();
  const [card, setCard] = useState()
    
console.log("deckId, ln20 DrawCard", deckId)

  useEffect(() => {
    async function getDeckId() {
      const response = axios.get(BASEURL + "new/shuffle/?deck_count=1");
      setDeckId(response.data.deck_id);
    }
    getDeckId();
  }, []);

  useEffect(() => {
    async function getCard() {
        const response = axios.get(BASEURL +  `${deckId}}/draw/?count=1`)
        setCard
    }
  })

  function handleOnClick (){
    
  }

  return <div></div>;
}

export default DrawCard;
