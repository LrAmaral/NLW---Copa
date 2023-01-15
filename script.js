function createGame(player1, hour, player2) {
  return `<li>
            <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
            <!--alt ajuda o leitor de buscas -->
            <strong>${hour}</strong>
            <img src="assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
            <!--alt ajuda o leitor de buscas -->
          </li>`
}

let delay = -0.3
function createCard(date, day, games) {
  delay = delay + 0.4;
  return ` 
  <div class="card" style=""animation-delay: ${delay}>
        <h2>${date}<span>${day}</span></h2>
        <ul>
          ${games}
        </ul>
      </div>`
}

document.querySelector("#cards").innerHTML = 
      createCard(
        "24/11",
        "quinta",
        createGame("Brazil", "13:00", "France") +
          createGame("Japan", "16:30", "Colombia")
      ) +
      createCard(
        "28/11",
        "segunda",
        createGame("Japan", "14:00", "Argentina")
      ) +
      createCard(
        "02/12",
        "sexta",
        createGame("Hungary", "14:00", "Camaroon")
      )

