/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from './Card.js'

const BASEURL = "https://deckofcardsapi.com/api/deck";
/**
 * on load makes API request to "https://deckofcardsapi.com/" to get a deck of
 * playing cards
 *
 *
 * Drawcard URL    ${deckId}}/draw/?count=1
 */

function DrawCard() {
  const [deckId, setDeckId] = useState();
  const [cards, setCards] = useState([]);
  let drawCard = false;
  console.log("deckId =>", deckId);

  useEffect(() => {
    async function getDeckId() {
      const response = await axios.get(`${BASEURL}/new/shuffle/?deck_count=1`);
      setDeckId(response.data.deck_id);
    }
    getDeckId();
  }, [ ]);

  async function getCard() {
    // drawCard = false;
    const response = await axios.get(`${BASEURL}/${deckId}/draw/?count=1`)
    console.log('response data =>', response.data);
    setCard(response.data);
  }

  // useEffect(() => {
  //   async function getCard() {
  //       console.log('deck id =>', deckId);
  //       const response = await axios.get(`${BASEURL}/${deckId}}/draw/?count=1`)
  //       setCard(response.data);
  //   }
  //   getCard();
  // }, [card])

  if (card.remaining === 0) {
    alert('No more cards in deck')
  }

  function handleOnClick() {
    // setCard(getCard())
    // how can we update cards state here as well
    // add cards to drawnCards array  
    console.log('deckId', deckId, 'card =>', card);
    getCard();
    drawCard = true;
  }

  // change conditional logic, if not ready to render card 
  // if no deckid render loading
  if(card.remaining === 0) return <div>No more cards!</div>


  return (
    <div>
      <button onClick={handleOnClick}>Get card!</button>
      <Card card={card} /> 
    </div>
  );
}

export default DrawCard;
