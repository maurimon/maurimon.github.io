//Deshabilita el botón Nuevo Juego hasta que finaliza la partida
const disableNewGameButton = () => {
    let newGameButtonMobile = document.getElementById('newGame-mobile');
    newGameButtonMobile.setAttribute('disabled','');
    let parentNewGameButtonMobile = document.getElementById('newGame-button-mobile');
    parentNewGameButtonMobile.appendChild(newGameButtonMobile);
    let newGameButtonDesktop = document.getElementById('newGame-desktop');
    newGameButtonDesktop.setAttribute('disabled','');
    let parentNewGameButtonDesktop = document.getElementById('newGame-button-desktop');
    parentNewGameButtonDesktop.appendChild(newGameButtonDesktop);        
};

disableNewGameButton();

//Añade el texto correspondiente a Instrucciones en el pop-up (versión móvil)
const addInstructionsMobile = () => {
    let instructionsTitleTag = document.getElementById('popup-title-mobile');
    instructionsTitleTag.innerHTML = 'Instrucciones';
    let instructionsContentTag = document.getElementById('popup-content-mobile');
    instructionsContentTag.innerHTML = 'El usuario podrá elegir entre 3 niveles de dificultad. En el nivel Fácil cada jugador debe elegir un valor entre 1 y 5, el que acierte el valor del dado ganará 3 puntos, en caso de empate 1 punto para cada uno. En el nivel Medio cada jugador debe elegir un valor entre 1 y 10, el que acierte el valor del dado ganará 6 puntos, en caso de empate 2 puntos para cada uno. Y en el nivel Difícil cada jugador debe elegir un valor entre 1 y 15, el que acierte el valor del dado ganará 9 puntos, en caso de empate 4 puntos para cada uno';

};

//Elimina el texto correspondiente a Instruccions en el pop-up (versión móvil)
const removeInstructionsMobile = () => {
    let instructionsTitleTag = document.getElementById('popup-title-mobile').innerHTML = '';
    let instructionsContentTag = document.getElementById('popup-content-mobile').innerHTML = '';
};

//Muestra el pop-up con las instrucciones al pulsar el botón "Mostrar instrucciones" (versión móvil)
const showInstructionsMobile = () => {
    addInstructionsMobile();
    const close = document.getElementById('close_mobile');
    const modal_container = document.getElementById('modal_container_mobile');
    modal_container.classList.add('show');

    close.addEventListener('click', () => {
        removeInstructionsMobile();
        modal_container.classList.remove('show');
    });
};

//Mismas funciones que las anteriores en la versión de escritorio
const addInstructionsDesktop = () => {
    let instructionsTitleTag = document.getElementById('popup-title-desktop');
    instructionsTitleTag.innerHTML = 'Instrucciones';
    let instructionsContentTag = document.getElementById('popup-content-desktop');
    instructionsContentTag.innerHTML = 'El usuario podrá elegir entre 3 niveles de dificultad. En el nivel Fácil cada jugador debe elegir un valor entre 1 y 5, el que acierte el valor del dado ganará 3 puntos, en caso de empate 1 punto para cada uno. En el nivel Medio cada jugador debe elegir un valor entre 1 y 10, el que acierte el valor del dado ganará 6 puntos, en caso de empate 2 puntos para cada uno. Y en el nivel Difícil cada jugador debe elegir un valor entre 1 y 15, el que acierte el valor del dado ganará 9 puntos, en caso de empate 4 puntos para cada uno';

};

const removeInstructionsDesktop = () => {
    let instructionsTitleTag = document.getElementById('popup-title-desktop').innerHTML = '';
    let instructionsContentTag = document.getElementById('popup-content-desktop').innerHTML = '';
};

const showInstructionsDesktop = () => {
    addInstructionsDesktop();
    const close = document.getElementById('close_desktop');
    const modal_container = document.getElementById('modal_container_desktop');
    modal_container.classList.add('show');

    close.addEventListener('click', () => {
        removeInstructionsMobile();
        modal_container.classList.remove('show');
    });
};

/*const getText = (level) => {
    let text = '';

    if (level=='easy') {
        text = 'Introduzca un valor entre 1 y 5: ';
    } else if (level='medium') {
        text = 'Introduzca un valor entre 1 y 10: ';
      } else if (level=='hard') {
            text = 'Introduzca un valor entre 1 y 15: '
        }  
    return text;
};*/

//Muestra el mensaje, seleccionador de valor y botón "Continuar" al pulsar el botón "Comenzar" (versión móvil)
const showValueInputMobile = () => {
    let labelTag = document.createElement('label');
    labelTag.setAttribute('for','value-mobile');
    labelTag.setAttribute('id','labelId-mobile');
    let labelText = document.createTextNode('Introduzca un valor: ');
    labelTag.appendChild(labelText);

    let userValueInput = document.getElementById('userValueInput-mobile');
    userValueInput.appendChild(labelTag);

    let inputTag = document.createElement('input');
    inputTag.setAttribute('type','number');
    inputTag.setAttribute('id','value-mobile');
    inputTag.setAttribute('required','');

    userValueInput.appendChild(inputTag);

    let buttonTag = document.createElement('button')
    buttonTag.setAttribute('id','submit-mobile');
    buttonTag.setAttribute('onclick','submitMobile()');
    let buttonText = document.createTextNode('Continuar');
    buttonTag.appendChild(buttonText);

    userValueInput.appendChild(buttonTag);
}; 

//Misma función que la anterior para la versión de escritorio
const showValueInputDesktop = () => {
    let labelTag = document.createElement('label');
    labelTag.setAttribute('for','value-desktop');
    labelTag.setAttribute('id','labelId-desktop');
    let labelText = document.createTextNode('Introduzca un valor: ');
    labelTag.appendChild(labelText);

    let userValueInput = document.getElementById('userValueInput-desktop');
    userValueInput.appendChild(labelTag);

    let inputTag = document.createElement('input');
    inputTag.setAttribute('type','number');
    inputTag.setAttribute('id','value-desktop');
    inputTag.setAttribute('required','');

    userValueInput.appendChild(inputTag);

    let buttonTag = document.createElement('button')
    buttonTag.setAttribute('id','submit-desktop');
    buttonTag.setAttribute('onclick','submitDesktop()');
    let buttonText = document.createTextNode('Continuar');
    buttonTag.appendChild(buttonText);

    userValueInput.appendChild(buttonTag);
}; 

//Muestra el estado del usuario cuando a comenzado la partida (versión móvil)
const userIsPlayingMobile = () => {
    let userStateValueTagMobile = document.createElement('span');
    userStateValueTagMobile.setAttribute('id','userStateValue-mobile');
    let userStateMobile = document.getElementById('userState-mobile');
    userStateMobile.appendChild(userStateValueTagMobile);
    let userMobile = document.getElementById('userStateValue-mobile');
    let userTextMobile = document.createTextNode('Jugando');
    userMobile.appendChild(userTextMobile);
};

//Misma función que la anterior para la versión de escritorio
const userIsPlayingDesktop = () => {
    let userStateValueTagMobile = document.createElement('span');
    userStateValueTagMobile.setAttribute('id','userStateValue-desktop');
    let userStateMobile = document.getElementById('userState-desktop');
    userStateMobile.appendChild(userStateValueTagMobile);
    let userMobile = document.getElementById('userStateValue-desktop');
    let userTextMobile = document.createTextNode('Jugando');
    userMobile.appendChild(userTextMobile);
};

//Devuelve el nivel de dificultad de la partida (versión móvil)
const getLevelMobile = () => {
    let selectedItem = document.querySelector('input[name="level-mobile"]:checked');
    let level = selectedItem.value;
    return level;
};

//Misma función que la anterior en versión de escritorio
const getLevelDesktop = () => {
    let selectedItem = document.querySelector('input[name="level-desktop"]:checked');
    let level = selectedItem.value;
    return level;
};

//Deshabilita el botón "Comenzar" una vez comenzada la partida (versión móvil)
const disableStartButtonMobile = () => {
    let startButtonMobile = document.getElementById('start-mobile');
    startButtonMobile.setAttribute('disabled','');
    let startMobile = document.getElementById('start-button-mobile');
    startMobile.appendChild(startButtonMobile);
};

//Misma función que la anterior para la versión de escritorio
const disableStartButtonDesktop = () => {
    let startButtonDesktop = document.getElementById('start-desktop');
    startButtonDesktop.setAttribute('disabled','');
    let startDesktop = document.getElementById('start-button-desktop');
    startDesktop.appendChild(startButtonDesktop);
};

//Deshabilita por defecto el botón "Mostrar instrucciones" al comenzar la partida
const disableInstructionsButtonMobile = () => {
    let instructionsButtonMobile = document.getElementById('instructions-mobile');
    instructionsButtonMobile.setAttribute('disabled','');
    let instructionsMobile = document.getElementById('instructions-button-mobile');
    instructionsMobile.appendChild(instructionsButtonMobile);
};

//Misma función que la anterior para la versión de escritorio
const disableInstructionsButtonDesktop = () => {
    let instructionsButtonMobile = document.getElementById('instructions-desktop');
    instructionsButtonMobile.setAttribute('disabled','');
    let instructionsMobile = document.getElementById('instructions-button-desktop');
    instructionsMobile.appendChild(instructionsButtonMobile);
};

//Función que es llamada al pulsar el botón "Comenzar" (versión móvil)
const startMobile = () => {
    disableStartButtonMobile();
    disableStartButtonDesktop();
    userIsPlayingMobile();
    userIsPlayingDesktop();
    showValueInputMobile();
    showValueInputDesktop();
};

//Misma función que la anterior para la versión de escritorio
const startDesktop = () => {
    disableStartButtonDesktop();
    disableStartButtonMobile();
    userIsPlayingDesktop();
    userIsPlayingMobile();
    showValueInputDesktop();
    showValueInputMobile();
};

//Devuelve el valor que ha introducido el usuario (versión móvil)
const getUserValueMobile = () => {
    let userValue = document.getElementById('value-mobile').value;
    return userValue;
};

//Misma función que la anterior para la versión de escritorio
const getUserValueDesktop = () => {
    let userValue = document.getElementById('value-desktop').value;
    return userValue;
};

//Deshabilita el botón "Continuar" una vez que el usuario lo ha pulsado (ambas versiones)
const disableSubmitButton = () => {
    let submitButtonMobile = document.getElementById('submit-mobile');
    submitButtonMobile.setAttribute('disabled','');
    let submitMobile = document.getElementById('userValueInput-mobile');
    submitMobile.appendChild(submitButtonMobile);
    let submitButtonDesktop = document.getElementById('submit-desktop');
    submitButtonDesktop.setAttribute('disabled','');
    let submitDesktop = document.getElementById('userValueInput-desktop');
    submitDesktop.appendChild(submitButtonDesktop);
};

//Muestra en comentarios el valor elegido por el usuario (versión móvil)
const showEnteredUserValueMobile = (userVal) => {
    let pTag = document.createElement('p');
    pTag.setAttribute('id','enteredUserValue-mobile');
    let pText = document.createTextNode('Has introducido el número ' + userVal);
    pTag.appendChild(pText);

    let comment = document.getElementById('comments-mobile');
    comment.appendChild(pTag);
};

//Misma función que la anterior para la versión de escritorio
const showEnteredUserValueDesktop = (userVal) => {
    let pTag = document.createElement('p');
    pTag.setAttribute('id','enteredUserValue-desktop');
    let pText = document.createTextNode('Has introducido el número ' + userVal);
    pTag.appendChild(pText);

    let comment = document.getElementById('comments-desktop');
    comment.appendChild(pTag);
};

//Muestra el estado del oponente al comenzar su turno (versión móvil)
const computerIsPlayingMobile= () => {
    let computerStateValueTagMobile = document.createElement('span');
    computerStateValueTagMobile.setAttribute('id','computerStateValue-mobile');
    let computerStateMobile = document.getElementById('computerState-mobile');
    computerStateMobile.appendChild(computerStateValueTagMobile);
    let computerMobile = document.getElementById('computerStateValue-mobile');
    let computerTextMobile = document.createTextNode('Jugando');
    computerMobile.appendChild(computerTextMobile);
};

//Misma función que la anterior para la versión de escritorio
const computerIsPlayingDesktop= () => {
    let computerStateValueTagMobile = document.createElement('span');
    computerStateValueTagMobile.setAttribute('id','computerStateValue-desktop');
    let computerStateMobile = document.getElementById('computerState-desktop');
    computerStateMobile.appendChild(computerStateValueTagMobile);
    let computerMobile = document.getElementById('computerStateValue-desktop');
    let computerTextMobile = document.createTextNode('Jugando');
    computerMobile.appendChild(computerTextMobile);
};

//Muestra en comentarios que el oponente está eligiendo un valor
const computerTurnMobile = () => {
    let pTag = document.createElement('p');
    pTag.setAttribute('id','waitingForComputer-mobile');
    let pText = document.createTextNode('Esperando al oponente...');
    pTag.appendChild(pText);

    let comment = document.getElementById('comments-mobile');
    comment.appendChild(pTag);
};

//Misma función que la anterior para la versión de escritorio
const computerTurnDesktop = () => {
    let pTag = document.createElement('p');
    pTag.setAttribute('id','waitingForComputer-desktop');
    let pText = document.createTextNode('Esperando al oponente...');
    pTag.appendChild(pText);

    let comment = document.getElementById('comments-desktop');
    comment.appendChild(pTag);
};

//Devuelve el valor elegido por el oponente
const getComputerValue = (min,max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
};

//Muestra en comentarios el valor elegido por el oponente (versión móvil)
const showComputerValueMobile = (computerVal) => {
    let pTag = document.createElement('p');
    pTag.setAttribute('id','computerValue-mobile');
    let pText = document.createTextNode('Tu oponente ha elegido el número ' + computerVal);
    pTag.appendChild(pText);

    let comment = document.getElementById('comments-mobile');
    comment.appendChild(pTag);
};

//Misma función que la anterior para la versión de escritorio
const showComputerValueDesktop = (computerVal) => {
    let pTag = document.createElement('p');
    pTag.setAttribute('id','computerValue-desktop');
    let pText = document.createTextNode('Tu oponente ha elegido el número ' + computerVal);
    pTag.appendChild(pText);

    let comment = document.getElementById('comments-desktop');
    comment.appendChild(pTag);
};

//Muestra en comentarios que se está tirando eldado (versión móvil)
const diceTurnMobile = () => {
    let pTag = document.createElement('p');
    pTag.setAttribute('id','diceTurn-mobile');
    let pText = document.createTextNode('Tirando el dado...');
    pTag.appendChild(pText);

    let comment = document.getElementById('comments-mobile');
    comment.appendChild(pTag);
};

//Misma función que la anterior para la versión de escritorio
const diceTurnDesktop = () => {
    let pTag = document.createElement('p');
    pTag.setAttribute('id','diceTurn-desktop');
    let pText = document.createTextNode('Tirando el dado...');
    pTag.appendChild(pText);

    let comment = document.getElementById('comments-desktop');
    comment.appendChild(pTag);
};

//Devuelve el valor del dado
const getDiceValue = (min,max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
};

//Muestra en comentarios el valor del dado (Versión móvil)
const showDiceValueMobile = (diceVal) => {
    let pTag = document.createElement('p');
    pTag.setAttribute('id','diceValue-mobile');
    let pText = document.createTextNode('Ha salido el número ' + diceVal);
    pTag.appendChild(pText);

    let comment = document.getElementById('comments-mobile');
    comment.appendChild(pTag);
};

//Misma función que la anterior para la versión de escritorio
const showDiceValueDesktop = (diceVal) => {
    let pTag = document.createElement('p');
    pTag.setAttribute('id','diceValue-desktop');
    let pText = document.createTextNode('Ha salido el número ' + diceVal);
    pTag.appendChild(pText);

    let comment = document.getElementById('comments-desktop');
    comment.appendChild(pTag);
};

/*const getUserValueDesktop = () => {
    let userValue = document.getElementById('value-desktop').value;
    return userValue;
};*/

/*const showEnteredUserValueDesktop = (userVal) => {
    let pTag = document.createElement('p');
    pTag.setAttribute('id','enteredUserValue-desktop');
    let pText = document.createTextNode('Has introducido el número ' + userVal);
    pTag.appendChild(pText);

    let comment = document.getElementById('comments-desktop');
    comment.appendChild(pTag);
};*/

/*const computerIsPlayingDesktop= () => {
    let computerStateValueTagMobile = document.createElement('span');
    computerStateValueTagMobile.setAttribute('id','computerStateValue-desktop');
    let computerStateMobile = document.getElementById('computerState-desktop');
    computerStateMobile.appendChild(computerStateValueTagMobile);
    let computerMobile = document.getElementById('computerStateValue-desktop');
    let computerTextMobile = document.createTextNode('Jugando');
    computerMobile.appendChild(computerTextMobile);
};*/

/*const computerTurnDesktop = () => {
    let pTag = document.createElement('p');
    pTag.setAttribute('id','waitingForComputer-desktop');
    let pText = document.createTextNode('Esperando al oponente...');
    pTag.appendChild(pText);

    let comment = document.getElementById('comments-desktop');
    comment.appendChild(pTag);
};*/

/*const showComputerValueDesktop = (computerVal) => {
    let pTag = document.createElement('p');
    pTag.setAttribute('id','computerValue-desktop');
    let pText = document.createTextNode('Tu oponente ha elegido el número ' + computerVal);
    pTag.appendChild(pText);

    let comment = document.getElementById('comments-desktop');
    comment.appendChild(pTag);
};*/

/*const diceTurnDesktop = () => {
    let pTag = document.createElement('p');
    pTag.setAttribute('id','diceTurn-desktop');
    let pText = document.createTextNode('Tirando el dado...');
    pTag.appendChild(pText);

    let comment = document.getElementById('comments-desktop');
    comment.appendChild(pTag);
};*/

/*const showDiceValueDesktop = (diceVal) => {
    let pTag = document.createElement('p');
    pTag.setAttribute('id','diceValue-desktop');
    let pText = document.createTextNode('Ha salido el número ' + diceVal);
    pTag.appendChild(pText);

    let comment = document.getElementById('comments-desktop');
    comment.appendChild(pTag);
};*/

//Muestra la puntuación obtenida (versión móvil)
const showScoreMobile = (userScore,computerScore) => {
    let userScoreValueTag = document.getElementById('userScoreValue-mobile');
    userScoreValueTag.innerHTML = userScore;
    let computerScoreValueTag = document.getElementById('computerScoreValue-mobile');
    computerScoreValueTag.innerHTML = computerScore;
};

//Misma función que la anterior para la versión de escritorio
const showScoreDesktop = (userScore,computerScore) => {
    let userScoreValueTag = document.getElementById('userScoreValue-desktop');
    userScoreValueTag.innerHTML = userScore;
    let computerScoreValueTag = document.getElementById('computerScoreValue-desktop');
    computerScoreValueTag.innerHTML =computerScore;
};

//Devuelve la puntuación obtenida por el usuario (Versión móvil)
const getUserScoreMobile = (userVal,computerVal,diceVal) => {
    let level = getLevelMobile();
    let userScore = 0;
    if (userVal==diceVal && computerVal!=diceVal) {
        if (level=='easy') {
            userScore += 3;    
        } else if (level=='medium') {
            userScore += 6;
        } else if (level=='hard') {
            userScore += 9;
        }
    } else if (userVal!=diceVal && computerVal==diceVal) {
        userScore += 0;
      } else if ((userVal!=diceVal && computerVal!=diceVal) || userVal==diceVal && computerVal==diceVal) {
        if (level=='easy') {
            userScore += 1;    
        } else if (level=='medium') {
            userScore += 2;
        } else if (level=='hard') {
            userScore += 4;
        }
      }
    return userScore;  
};

//Misma función que la anterior para la versión de escritorio
const getUserScoreDesktop = (userVal,computerVal,diceVal) => {
    let level = getLevelDesktop();
    let userScore = 0;
    if (userVal==diceVal && computerVal!=diceVal) {
        if (level=='easy') {
            userScore += 3;    
        } else if (level=='medium') {
            userScore += 6;
        } else if (level=='hard') {
            userScore += 9;
        }
    } else if (userVal!=diceVal && computerVal==diceVal) {
        userScore += 0;
      } else if ((userVal!=diceVal && computerVal!=diceVal) || userVal==diceVal && computerVal==diceVal) {
        if (level=='easy') {
            userScore += 1;    
        } else if (level=='medium') {
            userScore += 2;
        } else if (level=='hard') {
            userScore += 4;
        }
      }
    return userScore;  
};

//Devuelve la puntuación obtenida por el oponente (Versión móvil)
const getComputerScoreMobile = (userVal,computerVal,diceVal) => {
    let level = getLevelMobile();
    let computerScore = 0;
    if (userVal!=diceVal && computerVal==diceVal) {
        if (level=='easy') {
            computerScore += 3;    
        } else if (level=='medium') {
            computerScore += 6;
        } else if (level=='hard') {
            computerScore += 9;
        }
    } else if (userVal==diceVal && computerVal!=diceVal) {
        computerScore += 0;
      } else if ((userVal!=diceVal && computerVal!=diceVal) || userVal==diceVal && computerVal==diceVal) {
        if (level=='easy') {
            computerScore += 1;    
        } else if (level=='medium') {
            computerScore += 2;
        } else if (level=='hard') {
            computerScore += 4;
        }
      }
    return computerScore;  
};

//Misma función que la anterior para la versión de escritorio
const getComputerScoreDesktop = (userVal,computerVal,diceVal) => {
    let level = getLevelDesktop();
    let computerScore = 0;
    if (userVal!=diceVal && computerVal==diceVal) {
        if (level=='easy') {
            computerScore += 3;    
        } else if (level=='medium') {
            computerScore += 6;
        } else if (level=='hard') {
            computerScore += 9;
        }
    } else if (userVal==diceVal && computerVal!=diceVal) {
        computerScore += 0;
      } else if ((userVal!=diceVal && computerVal!=diceVal) || userVal==diceVal && computerVal==diceVal) {
        if (level=='easy') {
            computerScore += 1;    
        } else if (level=='medium') {
            computerScore += 2;
        } else if (level=='hard') {
            computerScore += 4;
        }
      }
    return computerScore;  
};

//Devuelve el ganador de la partida
const getWinner = (userScore,computerScore) => {
    let winner = '';
    if (userScore>computerScore) {
        winner = 'user';
    } else if (userScore<computerScore) {
        winner = 'computer';
      } else if (userScore==computerScore) {
            winner = 'none';
        }
    return winner;
}

//Añade el texto al pop-up que muestra al usuario como ganador (Versión móvil)
const addPlayerWinsMobile = () => {
    let playerWinsTitleTag = document.getElementById('popup-title-mobile');
    playerWinsTitleTag.innerHTML = '¡Enhorabuena!, has ganado';
};

//Misma función que la anterior para la versión de escritorio
const addPlayerWinsDesktop = () => {
    let playerWinsTitleTag = document.getElementById('popup-title-desktop');
    playerWinsTitleTag.innerHTML = '¡Enhorabuena!, has ganado';
};

//Elimina el texto añadido anteriormente (Versión móvil)
const removePlayerWinsMobile = () => {
    let playerWinsTitleTag = document.getElementById('popup-title-mobile').innerHTML = '';
};

//Misma función que la anterior para la versión de escritorio
const removePlayerWinsDesktop = () => {
    let playerWinsTitleTag = document.getElementById('popup-title-desktop').innerHTML = '';
};

//Muestra en el pop-up al usuario como ganador
const showPlayerWinsMobile = () => {
    addPlayerWinsMobile();
    const close = document.getElementById('close_mobile');
    const modal_container = document.getElementById('modal_container_mobile');
    modal_container.classList.add('show');

    close.addEventListener('click', () => {
        removePlayerWinsMobile();
        modal_container.classList.remove('show');
    });
};

//Misma función que la anterior para la versión de escritorio
const showPlayerWinsDesktop = () => {
    addPlayerWinsDesktop();
    const close = document.getElementById('close_desktop');
    const modal_container = document.getElementById('modal_container_desktop');
    modal_container.classList.add('show');

    close.addEventListener('click', () => {
        removePlayerWinsDesktop();
        modal_container.classList.remove('show');
    });
};

//Añade el texto en el pop-up que muestra al perdedor (versión móvil)
const addPlayerLosesMobile = () => {
    let playerLosesTitleTag = document.getElementById('popup-title-mobile');
    playerLosesTitleTag.innerHTML = 'Lo siento, has perdido';
};

//Misma función que la anterior para la versión de escritorio
const addPlayerLosesDesktop = () => {
    let playerLosesTitleTag = document.getElementById('popup-title-desktop');
    playerLosesTitleTag.innerHTML = 'Lo siento, has perdido';
};

//Elimina el texto añadido anteriormente en el pop-up (Versión móvil)
const removePlayerLosesMobile = () => {
    let playerLosesTitleTag = document.getElementById('popup-title-mobile').innerHTML = '';
};

//Misma función que la anterior para la versión de escritorio
const removePlayerLosesDesktop = () => {
    let playerLosesTitleTag = document.getElementById('popup-title-desktop').innerHTML = '';
};

//Muestra en el pop-up al usuario como perdedor (versión móvil)
const showPlayerLosesMobile = () => {
    addPlayerLosesMobile();
    const close = document.getElementById('close_mobile');
    const modal_container = document.getElementById('modal_container_mobile');
    modal_container.classList.add('show');

    close.addEventListener('click', () => {
        removePlayerLosesMobile();
        modal_container.classList.remove('show');
    });
};

//Misma función que la anterior para la versión de escritorio
const showPlayerLosesDesktop = () => {
    addPlayerLosesDesktop();
    const close = document.getElementById('close_desktop');
    const modal_container = document.getElementById('modal_container_desktop');
    modal_container.classList.add('show');

    close.addEventListener('click', () => {
        removePlayerLosesDesktop();
        modal_container.classList.remove('show');
    });
};

//Añade en el pop-up el texto que muestra el empate (versión móvil)
const addPlayersDrawMobile = () => {
    let playersDrawTitleTag = document.getElementById('popup-title-mobile');
    playersDrawTitleTag.innerHTML = 'Habéis empatado';
};

//Misma función que la anterior para la versión de escritorio
const addPlayersDrawDesktop = () => {
    let playersDrawTitleTag = document.getElementById('popup-title-desktop');
    playersDrawTitleTag.innerHTML = 'Habéis empatado';
};

//Elimina el texto añadido anteriormente (versión móvil)
const removePlayersDrawMobile = () => {
    let playersDrawTitleTag = document.getElementById('popup-title-mobile').innerHTML = '';
};

//Misma función que la anterior para la versión de escritorio
const removePlayersDrawDesktop = () => {
    let playersDrawTitleTag = document.getElementById('popup-title-desktop').innerHTML = '';
};

//Muestra en el pop-up el empate (versión móvil)
const showPlayersDrawMobile = () => {
    addPlayersDrawMobile();
    const close = document.getElementById('close_mobile');
    const modal_container = document.getElementById('modal_container_mobile');
    modal_container.classList.add('show');

    close.addEventListener('click', () => {
        removePlayersDrawMobile();
        modal_container.classList.remove('show');
    });
};

//Misma función que la anterior para la versión de escritorio
const showPlayersDrawDesktop = () => {
    addPlayersDrawDesktop();
    const close = document.getElementById('close_desktop');
    const modal_container = document.getElementById('modal_container_desktop');
    modal_container.classList.add('show');

    close.addEventListener('click', () => {
        removePlayersDrawDesktop();
        modal_container.classList.remove('show');
    });
};

/*const addPlayerWinsDesktop = () => {
    let playerWinsTitleTag = document.getElementById('popup-title-desktop');
    playerWinsTitleTag.innerHTML = '¡Enhorabuena!, has ganado';
};*/

/*const removePlayerWinsDesktop = () => {
    let playerWinsTitleTag = document.getElementById('popup-title-desktop').innerHTML = '';
};*/

/*const showPlayerWinsDesktop = () => {
    addPlayerWinsDesktop();
    const close = document.getElementById('close_desktop');
    const modal_container = document.getElementById('modal_container_desktop');
    modal_container.classList.add('show');

    close.addEventListener('click', () => {
        removePlayerWinsDesktop();
        modal_container.classList.remove('show');
    });
};*/

/*const addPlayerLosesDesktop = () => {
    let playerLosesTitleTag = document.getElementById('popup-title-desktop');
    playerLosesTitleTag.innerHTML = 'Lo siento, has perdido';
};*/

/*const removePlayerLosesDesktop = () => {
    let playerLosesTitleTag = document.getElementById('popup-title-desktop').innerHTML = '';
};*/

/*const showPlayerLosesDesktop = () => {
    addPlayerLosesDesktop();
    const close = document.getElementById('close_desktop');
    const modal_container = document.getElementById('modal_container_desktop');
    modal_container.classList.add('show');

    close.addEventListener('click', () => {
        removePlayerLosesDesktop();
        modal_container.classList.remove('show');
    });
};*/

/*const addPlayersDrawDesktop = () => {
    let playersDrawTitleTag = document.getElementById('popup-title-desktop');
    playersDrawTitleTag.innerHTML = 'Habéis empatado';
};*/

/*const removePlayersDrawDesktop = () => {
    let playersDrawTitleTag = document.getElementById('popup-title-desktop').innerHTML = '';
};*/

/*const showPlayersDrawDesktop = () => {
    addPlayersDrawDesktop();
    const close = document.getElementById('close_desktop');
    const modal_container = document.getElementById('modal_container_desktop');
    modal_container.classList.add('show');

    close.addEventListener('click', () => {
        removePlayersDrawDesktop();
        modal_container.classList.remove('show');
    });
};*/

//Muestra el pop-up con el resultado de la partida (versión móvil)
const showResultMobile = (winner) => {
    if (winner=='user') {
        showPlayerWinsMobile();
    } else if (winner=='computer') {
        showPlayerLosesMobile();
      } else if (winner=='none') {
        showPlayersDrawMobile();
        }
};

//Misma función que la anterior para la versión de escritorio
const showResultDesktop = (winner) => {
    if (winner=='user') {
        showPlayerWinsDesktop();
    } else if (winner=='computer') {
        showPlayerLosesDesktop();
      } else if (winner=='none') {
        showPlayersDrawDesktop();
        }
};

//Habilita el botón "Nuevo Juego" al finalizar la partida (versión móvil)
const enableNewGameButtonMobile = () => {
    let newGameButtonMobile = document.getElementById('newGame-mobile');
    newGameButtonMobile.removeAttribute('disabled','');
    let parentNewGameButtonMobile = document.getElementById('newGame-button-mobile');
    parentNewGameButtonMobile.appendChild(newGameButtonMobile);        
}

//Misma función que la anterior para la versión de escritorio
const enableNewGameButtonDesktop = () => {
    let newGameButtonDesktop = document.getElementById('newGame-desktop');
    newGameButtonDesktop.removeAttribute('disabled','');
    let parentNewGameButtonDesktop = document.getElementById('newGame-button-desktop');
    parentNewGameButtonDesktop.appendChild(newGameButtonDesktop);        
}

//Añade al pop-up el texto que indica que el valor introducido por el usuario no es válido para el nivel "Fácil" (versión móvil)
const addInvalidValueEasyMobile = () => {
    let invalidValueTitleTag = document.getElementById('popup-title-mobile');
    invalidValueTitleTag.innerHTML = 'Atención';
    let invalidValueContentTag = document.getElementById('popup-content-mobile');
    invalidValueContentTag.innerHTML = 'Debes introducir un valor entre 1 y 5';
};

//Misma función que la anterior para la versión de escritorio
const addInvalidValueEasyDesktop = () => {
    let invalidValueTitleTag = document.getElementById('popup-title-desktop');
    invalidValueTitleTag.innerHTML = 'Atención';
    let invalidValueContentTag = document.getElementById('popup-content-desktop');
    invalidValueContentTag.innerHTML = 'Debes introducir un valor entre 1 y 5';
};

//Elimina el texto introducido anteriormente
const removeInvalidValueMobile = () => {
    let invalidValueTitleTag = document.getElementById('popup-title-mobile').innerHTML = '';
    let invalidValueContentTag = document.getElementById('popup-content-mobile').innerHTML = '';
};

//Misma función que la anterior para la versión de escritorio
const removeInvalidValueDesktop = () => {
    let invalidValueTitleTag = document.getElementById('popup-title-desktop').innerHTML = '';
    let invalidValueContentTag = document.getElementById('popup-content-desktop').innerHTML = '';
};

//Muestra en el pop-up que el valor introducido por el usuario no es válido en el nivel "Fácil" (versión móvil)
const showInvalidValueEasyMobile = () => {
    addInvalidValueEasyMobile();
    const close = document.getElementById('close_mobile');
    const modal_container = document.getElementById('modal_container_mobile');
    modal_container.classList.add('show');

    close.addEventListener('click', () => {
        removeInvalidValueMobile();
        modal_container.classList.remove('show');
    });
};

//Misma función que la anterior para la versión de escritorio
const showInvalidValueEasyDesktop = () => {
    addInvalidValueEasyDesktop();
    const close = document.getElementById('close_desktop');
    const modal_container = document.getElementById('modal_container_desktop');
    modal_container.classList.add('show');

    close.addEventListener('click', () => {
        removeInvalidValueDesktop();
        modal_container.classList.remove('show');
    });
};

//Añade el texto en el pop-up que indica como no válido el valor introducido por el usuario en el nivel "Medio" (versión móvil)
const addInvalidValueMediumMobile = () => {
    let invalidValueTitleTag = document.getElementById('popup-title-mobile');
    invalidValueTitleTag.innerHTML = 'Atención';
    let invalidValueContentTag = document.getElementById('popup-content-mobile');
    invalidValueContentTag.innerHTML = 'Debes introducir un valor entre 1 y 10';
};

//Misma función que la anterior para la versión de escritorio
const addInvalidValueMediumDesktop = () => {
    let invalidValueTitleTag = document.getElementById('popup-title-desktop');
    invalidValueTitleTag.innerHTML = 'Atención';
    let invalidValueContentTag = document.getElementById('popup-content-desktop');
    invalidValueContentTag.innerHTML = 'Debes introducir un valor entre 1 y 10';
};

//Muestra en el pop-up que el valor introducido por el usuario no es válido en el nivel "Medio" (versión móvil)
const showInvalidValueMediumMobile = () => {
    addInvalidValueMediumMobile();
    const close = document.getElementById('close_mobile');
    const modal_container = document.getElementById('modal_container_mobile');
    modal_container.classList.add('show');

    close.addEventListener('click', () => {
        removeInvalidValueMobile();
        modal_container.classList.remove('show');
    });
};

//Misma función que la anterior para la versión móvil
const showInvalidValueMediumDesktop = () => {
    addInvalidValueMediumDesktop();
    const close = document.getElementById('close_desktop');
    const modal_container = document.getElementById('modal_container_desktop');
    modal_container.classList.add('show');

    close.addEventListener('click', () => {
        removeInvalidValueDesktop();
        modal_container.classList.remove('show');
    });
};

//Añade el mensaje en el pop-up indicando que el valor introducido por el usuario no es válido en el nivel "Difícil" (versión móvil)
const addInvalidValueHardMobile = () => {
    let invalidValueTitleTag = document.getElementById('popup-title-mobile');
    invalidValueTitleTag.innerHTML = 'Atención';
    let invalidValueContentTag = document.getElementById('popup-content-mobile');
    invalidValueContentTag.innerHTML = 'Debes introducir un valor entre 1 y 15';
};

//Misma función que la anterior para la versión de escritorio
const addInvalidValueHardDesktop = () => {
    let invalidValueTitleTag = document.getElementById('popup-title-desktop');
    invalidValueTitleTag.innerHTML = 'Atención';
    let invalidValueContentTag = document.getElementById('popup-content-desktop');
    invalidValueContentTag.innerHTML = 'Debes introducir un valor entre 1 y 15';
};

//Muestra en el pop-up que el valor introducido por el usuario no es válido (versión móvil)
const showInvalidValueHardMobile = () => {
    addInvalidValueHardMobile();
    const close = document.getElementById('close_mobile');
    const modal_container = document.getElementById('modal_container_mobile');
    modal_container.classList.add('show');

    close.addEventListener('click', () => {
        removeInvalidValueMobile();
        modal_container.classList.remove('show');
    });
};

//Misma función que la anterior para la versión de escritorio
const showInvalidValueHardDesktop = () => {
    addInvalidValueHardDesktop();
    const close = document.getElementById('close_desktop');
    const modal_container = document.getElementById('modal_container_desktop');
    modal_container.classList.add('show');

    close.addEventListener('click', () => {
        removeInvalidValueDesktop();
        modal_container.classList.remove('show');
    });
};

/*const addInvalidValueEasyDesktop = () => {
    let invalidValueTitleTag = document.getElementById('popup-title-desktop');
    invalidValueTitleTag.innerHTML = 'Atención';
    let invalidValueContentTag = document.getElementById('popup-content-desktop');
    invalidValueContentTag.innerHTML = 'Debes introducir un valor entre 1 y 5';
};*/

/*const removeInvalidValueDesktop = () => {
    let invalidValueTitleTag = document.getElementById('popup-title-desktop').innerHTML = '';
    let invalidValueContentTag = document.getElementById('popup-content-desktop').innerHTML = '';
};*/

/*const showInvalidValueEasyDesktop = () => {
    addInvalidValueEasyDesktop();
    const close = document.getElementById('close_desktop');
    const modal_container = document.getElementById('modal_container_desktop');
    modal_container.classList.add('show');

    close.addEventListener('click', () => {
        removeInvalidValueDesktop();
        modal_container.classList.remove('show');
    });
};*/

/*const addInvalidValueMediumDesktop = () => {
    let invalidValueTitleTag = document.getElementById('popup-title-desktop');
    invalidValueTitleTag.innerHTML = 'Atención';
    let invalidValueContentTag = document.getElementById('popup-content-desktop');
    invalidValueContentTag.innerHTML = 'Debes introducir un valor entre 1 y 10';
};*/

/*const showInvalidValueMediumDesktop = () => {
    addInvalidValueMediumDesktop();
    const close = document.getElementById('close_desktop');
    const modal_container = document.getElementById('modal_container_desktop');
    modal_container.classList.add('show');

    close.addEventListener('click', () => {
        removeInvalidValueDesktop();
        modal_container.classList.remove('show');
    });
};*/

/*const addInvalidValueHardDesktop = () => {
    let invalidValueTitleTag = document.getElementById('popup-title-desktop');
    invalidValueTitleTag.innerHTML = 'Atención';
    let invalidValueContentTag = document.getElementById('popup-content-desktop');
    invalidValueContentTag.innerHTML = 'Debes introducir un valor entre 1 y 15';
};*/

/*const showInvalidValueHardDesktop = () => {
    addInvalidValueHardDesktop();
    const close = document.getElementById('close_desktop');
    const modal_container = document.getElementById('modal_container_desktop');
    modal_container.classList.add('show');

    close.addEventListener('click', () => {
        removeInvalidValueDesktop();
        modal_container.classList.remove('show');
    });
};*/

//Función llamada cuando el usuario pulsa el botón "Continuar" (versión móvil)
const submitMobile = () => {
    let level = getLevelMobile();
    let userValue = getUserValueMobile();
        
    if (level=='easy' && (userValue<=0 || userValue>5 || userValue=='')) {
        showInvalidValueEasyMobile();
    } else if (level=='easy' && (userValue>0 && userValue<=5)) {
        disableSubmitButton();
        showEnteredUserValueDesktop(userValue);
        showEnteredUserValueMobile(userValue);
        computerIsPlayingDesktop();
        computerIsPlayingMobile();
        computerTurnDesktop();
        computerTurnMobile();
        let computerValue = getComputerValue(1,5);
        setTimeout(() => {
            showComputerValueDesktop(computerValue);    
            showComputerValueMobile(computerValue);    
        }, 3000);
        setTimeout(() => {
            diceTurnDesktop();
            diceTurnMobile();    
        }, 6000);
        let diceValue = getDiceValue(1,5);
        setTimeout(() => {
            showDiceValueDesktop(diceValue);
            showDiceValueMobile(diceValue);    
        }, 9000);
        let userScore = getUserScoreMobile(userValue, computerValue, diceValue);
        let computerScore = getComputerScoreMobile(userValue, computerValue, diceValue);
        setTimeout(() => {
            showScoreDesktop(userScore,computerScore);
            showScoreMobile(userScore,computerScore);
        }, 9000);
        let winner = getWinner(userScore, computerScore);
        setTimeout(() => {
            showResultMobile(winner);
        }, 10000);
        setTimeout(() => {
            enableNewGameButtonDesktop();
            enableNewGameButtonMobile();
        }, 10000);  
      }
      
    if (level=='medium' && (userValue<=0 || userValue>10 || userValue=='')) {
        showInvalidValueMediumMobile();
    } else if (level=='medium' && (userValue>0 && userValue<=10)) {
        disableSubmitButton();
        showEnteredUserValueDesktop(userValue);
        showEnteredUserValueMobile(userValue);
        computerIsPlayingDesktop();
        computerIsPlayingMobile();
        computerTurnDesktop();
        computerTurnMobile();
        let computerValue = getComputerValue(1,10);
        setTimeout(() => {
            showComputerValueDesktop(computerValue);    
            showComputerValueMobile(computerValue);    
        }, 3000);
        setTimeout(() => {
            diceTurnDesktop();
            diceTurnMobile();    
        }, 6000);
        let diceValue = getDiceValue(1,10);
        setTimeout(() => {
            showDiceValueDesktop(diceValue);
            showDiceValueMobile(diceValue);    
        }, 9000);
        let userScore = getUserScoreMobile(userValue, computerValue, diceValue);
        let computerScore = getComputerScoreMobile(userValue, computerValue, diceValue);
        setTimeout(() => {
            showScoreDesktop(userScore,computerScore);
            showScoreMobile(userScore,computerScore);
        }, 9000);
        let winner = getWinner(userScore, computerScore);
        setTimeout(() => {
            showResultMobile(winner);
        }, 10000);
        setTimeout(() => {
            enableNewGameButtonDesktop();
            enableNewGameButtonMobile();
        }, 10000);  
      }

    if (level=='hard' && (userValue<=0 || userValue>15 || userValue=='')) {
        showInvalidValueHardMobile();
    } else if (level=='hard' && (userValue>0 && userValue<=15)) {
        disableSubmitButton();
        showEnteredUserValueDesktop(userValue);
        showEnteredUserValueMobile(userValue);
        computerIsPlayingDesktop();
        computerIsPlayingMobile();
        computerTurnDesktop();
        computerTurnMobile();
        let computerValue = getComputerValue(1,15);
        setTimeout(() => {
            showComputerValueDesktop(computerValue);    
            showComputerValueMobile(computerValue);    
        }, 3000);
        setTimeout(() => {
            diceTurnDesktop();
            diceTurnMobile();    
        }, 6000);
        let diceValue = getDiceValue(1,15);
        setTimeout(() => {
            showDiceValueDesktop(diceValue);
            showDiceValueMobile(diceValue);    
        }, 9000);
        let userScore = getUserScoreMobile(userValue, computerValue, diceValue);
        let computerScore = getComputerScoreMobile(userValue, computerValue, diceValue);
        setTimeout(() => {
            showScoreDesktop(userScore,computerScore);
            showScoreMobile(userScore,computerScore);
        }, 9000);
        let winner = getWinner(userScore, computerScore);
        setTimeout(() => {
            showResultMobile(winner);
        }, 10000);
        setTimeout(() => {
            enableNewGameButtonDesktop();
            enableNewGameButtonMobile();
        }, 10000);  
      }
};

//Misma función que la anterior para la versión de escritorio
const submitDesktop = () => {
    let level = getLevelDesktop();
    let userValue = getUserValueDesktop();
        
    if (level=='easy' && (userValue<=0 || userValue>5 || userValue=='')) {
        showInvalidValueEasyDesktop();
    } else if (level=='easy' && (userValue>0 && userValue<=5)) {
        disableSubmitButton();
        showEnteredUserValueMobile(userValue);
        showEnteredUserValueDesktop(userValue);
        computerIsPlayingMobile();
        computerIsPlayingDesktop();
        computerTurnMobile();
        computerTurnDesktop();
        let computerValue = getComputerValue(1,5);
        setTimeout(() => {
            showComputerValueMobile(computerValue);    
            showComputerValueDesktop(computerValue);    
        }, 3000);
        setTimeout(() => {
            diceTurnMobile();    
            diceTurnDesktop();
        }, 6000);
        let diceValue = getDiceValue(1,5);
        setTimeout(() => {
            showDiceValueMobile(diceValue);    
            showDiceValueDesktop(diceValue);
        }, 9000);
        let userScore = getUserScoreMobile(userValue, computerValue, diceValue);
        let computerScore = getComputerScoreMobile(userValue, computerValue, diceValue);
        setTimeout(() => {
            showScoreMobile(userScore,computerScore);
            showScoreDesktop(userScore,computerScore);
        }, 9000);
        let winner = getWinner(userScore, computerScore);
        setTimeout(() => {
            showResultDesktop(winner);
        }, 10000);
        setTimeout(() => {
            enableNewGameButtonMobile();
            enableNewGameButtonDesktop();
        }, 10000);
      }
      
    if (level=='medium' && (userValue<=0 || userValue>10 || userValue=='')) {
        showInvalidValueMediumDesktop();
    } else if (level=='medium' && (userValue>0 && userValue<=10)) {
        disableSubmitButton();
        showEnteredUserValueMobile(userValue);
        showEnteredUserValueDesktop(userValue);
        computerIsPlayingMobile();
        computerIsPlayingDesktop();
        computerTurnMobile();
        computerTurnDesktop();
        let computerValue = getComputerValue(1,10);
        setTimeout(() => {
            showComputerValueMobile(computerValue);    
            showComputerValueDesktop(computerValue);    
        }, 3000);
        setTimeout(() => {
            diceTurnMobile();    
            diceTurnDesktop();
        }, 6000);
        let diceValue = getDiceValue(1,10);
        setTimeout(() => {
            showDiceValueMobile(diceValue);    
            showDiceValueDesktop(diceValue);
        }, 9000);
        let userScore = getUserScoreMobile(userValue, computerValue, diceValue);
        let computerScore = getComputerScoreMobile(userValue, computerValue, diceValue);
        setTimeout(() => {
            showScoreMobile(userScore,computerScore);
            showScoreDesktop(userScore,computerScore);
        }, 9000);
        let winner = getWinner(userScore, computerScore);
        setTimeout(() => {
            showResultDesktop(winner);
        }, 10000);
        setTimeout(() => {
            enableNewGameButtonMobile();
            enableNewGameButtonDesktop();
        }, 10000);
      }

    if (level=='hard' && (userValue<=0 || userValue>15 || userValue=='')) {
        showInvalidValueHardDesktop();
    } else if (level=='hard' && (userValue>0 && userValue<=15)) {
        disableSubmitButton();
        showEnteredUserValueMobile(userValue);
        showEnteredUserValueDesktop(userValue);
        computerIsPlayingMobile();
        computerIsPlayingDesktop();
        computerTurnMobile();
        computerTurnDesktop();
        let computerValue = getComputerValue(1,15);
        setTimeout(() => {
            showComputerValueMobile(computerValue);    
            showComputerValueDesktop(computerValue);    
        }, 3000);
        setTimeout(() => {
            diceTurnMobile();    
            diceTurnDesktop();
        }, 6000);
        let diceValue = getDiceValue(1,15);
        setTimeout(() => {
            showDiceValueMobile(diceValue);    
            showDiceValueDesktop(diceValue);
        }, 9000);
        let userScore = getUserScoreMobile(userValue, computerValue, diceValue);
        let computerScore = getComputerScoreMobile(userValue, computerValue, diceValue);
        setTimeout(() => {
            showScoreMobile(userScore,computerScore);
            showScoreDesktop(userScore,computerScore);
        }, 9000);
        let winner = getWinner(userScore, computerScore);
        setTimeout(() => {
            showResultDesktop(winner);
        }, 10000);
        setTimeout(() => {
            enableNewGameButtonMobile();
            enableNewGameButtonDesktop();
        }, 10000);
      }           
};

//Habilita el botón "Comenzar" cuando finaliza la partida (versión móvil)
const enableStartButtonMobile = () => {
    let startButtonMobile = document.getElementById('start-mobile');
    startButtonMobile.removeAttribute('disabled','');
    let startMobile = document.getElementById('start-button-mobile');
    startMobile.appendChild(startButtonMobile);
};

//Misma función que la anterior para la versión de escritorio
const enableStartButtonDesktop = () => {
    let startButtonDesktop = document.getElementById('start-desktop');
    startButtonDesktop.removeAttribute('disabled','');
    let startDesktop = document.getElementById('start-button-desktop');
    startDesktop.appendChild(startButtonDesktop);
};

//Oculta en comentarios el valor introducido por el usuario (versión móvil)
const hideValueInputMobile = () => {
    let labelTag = document.getElementById('labelId-mobile');
    let userValueInput = document.getElementById('userValueInput-mobile');
    userValueInput.removeChild(labelTag);

    let inputTag = document.getElementById('value-mobile');
    userValueInput.removeChild(inputTag);

    let buttonTag = document.getElementById('submit-mobile');
    userValueInput.removeChild(buttonTag);
}; 

//Misma función que la anterior para la versión de escritorio
const hideValueInputDesktop = () => {
    let labelTag = document.getElementById('labelId-desktop');
    let userValueInput = document.getElementById('userValueInput-desktop');
    userValueInput.removeChild(labelTag);

    let inputTag = document.getElementById('value-desktop');
    userValueInput.removeChild(inputTag);

    let buttonTag = document.getElementById('submit-desktop');
    userValueInput.removeChild(buttonTag);
};

//Oculta el estado del jugador cuando comienza la partida (versión móvil)
const hideUserIsPlayingMobile = () => {
    let userStateValueTagMobile = document.getElementById('userStateValue-mobile');
    let userStateMobile = document.getElementById('userState-mobile');
    userStateMobile.removeChild(userStateValueTagMobile);
};

//Misma función que la anterior para la versión de escritorio
const hideUserIsPlayingDesktop = () => {
    let userStateValueTagDesktop = document.getElementById('userStateValue-desktop');
    let userStateDesktop = document.getElementById('userState-desktop');
    userStateDesktop.removeChild(userStateValueTagDesktop);
};

//Oculta el estado del oponente cuando inicia su turno (versión móvil)
const hideComputerIsPlayingMobile= () => {
    let computerStateValueTagMobile = document.getElementById('computerStateValue-mobile');
    let computerStateMobile = document.getElementById('computerState-mobile');
    computerStateMobile.removeChild(computerStateValueTagMobile);
};

//Misma función que la anterior para la versión de escritorio
const hideComputerIsPlayingDesktop = () => {
    let computerStateValueTagDesktop = document.getElementById('computerStateValue-desktop');
    let computerStateDesktop = document.getElementById('computerState-desktop');
    computerStateDesktop.removeChild(computerStateValueTagDesktop);
};

//Oculta en comentarios el valor introducido por el usuario (versión móvil)
const hideEnteredUserValueMobile = () => {
    let pTag = document.getElementById('enteredUserValue-mobile');
    let comment = document.getElementById('comments-mobile');
    comment.removeChild(pTag);
};

//Misma función que la anterior para la versión de escritorio
const hideEnteredUserValueDesktop = () => {
    let pTag = document.getElementById('enteredUserValue-desktop');
    let comment = document.getElementById('comments-desktop');
    comment.removeChild(pTag);
};

//Oculta en comentarios el turno del oponente (versión móvil)
const hideComputerTurnMobile = () => {
    let pTag = document.getElementById('waitingForComputer-mobile');
    let comment = document.getElementById('comments-mobile');
    comment.removeChild(pTag);
};

//Misma función que la anterior para la versión de escritorio
const hideComputerTurnDesktop = () => {
    let pTag = document.getElementById('waitingForComputer-desktop');
    let comment = document.getElementById('comments-desktop');
    comment.removeChild(pTag);
};

//Oculta en comentarios el valor elegido por el oponente (versión móvil)
const hideComputerValueMobile = () => {
    let pTag = document.getElementById('computerValue-mobile');
    let comment = document.getElementById('comments-mobile');
    comment.removeChild(pTag);
};

//Misma función que la anterior para la versión de escritorio
const hideComputerValueDesktop = () => {
    let pTag = document.getElementById('computerValue-desktop');
    let comment = document.getElementById('comments-desktop');
    comment.removeChild(pTag);
};

//Oculta en comentarios el turno del dado (versión móvil)
const hideDiceTurnMobile = () => {
    let pTag = document.getElementById('diceTurn-mobile');
    let comment = document.getElementById('comments-mobile');
    comment.removeChild(pTag);
};

//Misma función que la anterior para la versión de escritorio
const hideDiceTurnDesktop = () => {
    let pTag = document.getElementById('diceTurn-desktop');
    let comment = document.getElementById('comments-desktop');
    comment.removeChild(pTag);
};

//Oculta en comentarios el valor del dado (versión móvil)
const hideDiceValueMobile = (diceVal) => {
    let pTag = document.getElementById('diceValue-mobile');
    let comment = document.getElementById('comments-mobile');
    comment.removeChild(pTag);
};

//Misma función que la anterior para la versión de escritorio
const hideDiceValueDesktop = (diceVal) => {
    let pTag = document.getElementById('diceValue-desktop');
    let comment = document.getElementById('comments-desktop');
    comment.removeChild(pTag);
};

//Oculta la puntuación obtenida por los jugadores (versión móvil)
const hideScoreMobile = (userScore,computerScore) => {
    let userScoreValueTag = document.getElementById('userScoreValue-mobile').innerHTML = '';
    let computerScoreValueTag = document.getElementById('computerScoreValue-mobile').innerHTML = '';
};

//Misma función que la anterior para la versión de escritorio
const hideScoreDesktop = (userScore,computerScore) => {
    let userScoreValueTag = document.getElementById('userScoreValue-desktop').innerHTML = '';
    let computerScoreValueTag = document.getElementById('computerScoreValue-desktop').innerHTML = '';
};

//Deshabilita el botón "Nuevo Juego" cuando se inicia la partida (versión móvil)
const disableNewGameButtonMobile = () => {
    let newGameButtonMobile = document.getElementById('newGame-mobile');
    newGameButtonMobile.setAttribute('disabled','');
    let parentNewGameButtonMobile = document.getElementById('newGame-button-mobile');
    parentNewGameButtonMobile.appendChild(newGameButtonMobile);        
}

//Misma función que la anterior para la versión de escritorio
const disableNewGameButtonDesktop = () => {
    let newGameButtonDesktop = document.getElementById('newGame-desktop');
    newGameButtonDesktop.setAttribute('disabled','');
    let parentNewGameButtonDesktop = document.getElementById('newGame-button-desktop');
    parentNewGameButtonDesktop.appendChild(newGameButtonDesktop);        
}

//Habilita el botón "Mostrar Instrucciones" antes de iniciar la partida
const enableInstructionsButtonMobile = () => {
    let instructionsButtonMobile = document.getElementById('instructions-mobile');
    instructionsButtonMobile.removeAttribute('disabled','');
    let instructionsMobile = document.getElementById('instructions-button-mobile');
    instructionsMobile.appendChild(instructionsButtonMobile);
};

//Misma función que la anterior para la versión de escritorio
const enableInstructionsButtonDesktop = () => {
    let instructionsButtonDesktop = document.getElementById('instructions-desktop');
    instructionsButtonDesktop.removeAttribute('disabled','');
    let instructionsDesktop = document.getElementById('instructions-button-desktop');
    instructionsDesktop.appendChild(instructionsButtonDesktop);
};

/*const hideValueInputDesktop = () => {
    let labelTag = document.getElementById('labelId-desktop');
    let userValueInput = document.getElementById('userValueInput-desktop');
    userValueInput.removeChild(labelTag);

    let inputTag = document.getElementById('value-desktop');
    userValueInput.removeChild(inputTag);

    let buttonTag = document.getElementById('submit-desktop');
    userValueInput.removeChild(buttonTag);
};*/ 

/*const hideUserIsPlayingDesktop = () => {
    let userStateValueTagDesktop = document.getElementById('userStateValue-desktop');
    let userStateDesktop = document.getElementById('userState-desktop');
    userStateDesktop.removeChild(userStateValueTagDesktop);
};*/

/*const hideComputerIsPlayingDesktop = () => {
    let computerStateValueTagDesktop = document.getElementById('computerStateValue-desktop');
    let computerStateDesktop = document.getElementById('computerState-desktop');
    computerStateDesktop.removeChild(computerStateValueTagDesktop);
};*/

/*const hideEnteredUserValueDesktop = () => {
    let pTag = document.getElementById('enteredUserValue-desktop');
    let comment = document.getElementById('comments-desktop');
    comment.removeChild(pTag);
};*/

/*const hideComputerTurnDesktop = () => {
    let pTag = document.getElementById('waitingForComputer-desktop');
    let comment = document.getElementById('comments-desktop');
    comment.removeChild(pTag);
};*/

/*const hideComputerValueDesktop = () => {
    let pTag = document.getElementById('computerValue-desktop');
    let comment = document.getElementById('comments-desktop');
    comment.removeChild(pTag);
};*/

/*const hideDiceTurnDesktop = () => {
    let pTag = document.getElementById('diceTurn-desktop');
    let comment = document.getElementById('comments-desktop');
    comment.removeChild(pTag);
};*/

/*const hideDiceValueDesktop = (diceVal) => {
    let pTag = document.getElementById('diceValue-desktop');
    let comment = document.getElementById('comments-desktop');
    comment.removeChild(pTag);
};*/

/*const hideScoreDesktop = (userScore,computerScore) => {
    let userScoreValueTag = document.getElementById('userScoreValue-desktop').innerHTML = '';
    let computerScoreValueTag = document.getElementById('computerScoreValue-desktop').innerHTML = '';
};*/

/*const disableNewGameButtonDesktop = () => {
    let newGameButtonDesktop = document.getElementById('newGame-desktop');
    newGameButtonDesktop.setAttribute('disabled','');
    let parentNewGameButtonDesktop = document.getElementById('newGame-button-desktop');
    parentNewGameButtonDesktop.appendChild(newGameButtonDesktop);        
}*/

/*const enableInstructionsButtonDesktop = () => {
    let instructionsButtonDesktop = document.getElementById('instructions-desktop');
    instructionsButtonDesktop.removeAttribute('disabled','');
    let instructionsDesktop = document.getElementById('instructions-button-desktop');
    instructionsDesktop.appendChild(instructionsButtonDesktop);
};*/

//Función llamada cuando se pulsa el boton "Nuevo Juego" (versión móvil)
const newGameMobile = () => {
    enableStartButtonDesktop();
    enableStartButtonMobile();
    hideUserIsPlayingDesktop();
    hideUserIsPlayingMobile();
    hideComputerIsPlayingDesktop();
    hideComputerIsPlayingMobile();
    hideValueInputDesktop();
    hideValueInputMobile();
    hideEnteredUserValueDesktop();
    hideEnteredUserValueMobile();
    hideComputerTurnDesktop();
    hideComputerTurnMobile();
    hideComputerValueDesktop();    
    hideComputerValueMobile();    
    hideDiceTurnDesktop();    
    hideDiceTurnMobile();    
    hideDiceValueDesktop();    
    hideDiceValueMobile();    
    hideScoreDesktop();
    hideScoreMobile();
    disableNewGameButtonDesktop();
    disableNewGameButtonMobile();
    enableInstructionsButtonDesktop(); 
    enableInstructionsButtonMobile();
};

//Misma función que la anterior para la versión de escritorio
const newGameDesktop = () => {
    enableStartButtonMobile();
    enableStartButtonDesktop();
    hideUserIsPlayingMobile();
    hideUserIsPlayingDesktop();
    hideComputerIsPlayingMobile();
    hideComputerIsPlayingDesktop();
    hideValueInputMobile();
    hideValueInputDesktop();
    hideEnteredUserValueMobile();
    hideEnteredUserValueDesktop();
    hideComputerTurnMobile();
    hideComputerTurnDesktop();
    hideComputerValueMobile();
    hideComputerValueDesktop();        
    hideDiceTurnMobile();
    hideDiceTurnDesktop();        
    hideDiceValueMobile();    
    hideDiceValueDesktop();    
    hideScoreMobile();
    hideScoreDesktop();
    disableNewGameButtonMobile();
    disableNewGameButtonDesktop();
    enableInstructionsButtonMobile(); 
    enableInstructionsButtonDesktop(); 
};