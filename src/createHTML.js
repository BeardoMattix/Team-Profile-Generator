const managerCard = (managerArray) => {
  let card = "";
  for (const manager of managerArray) {
    card += `
        <div class="card" id="manager-card">
                <div class="card-content">
                  <div class="media">
                    <div class="media-left"></div>
                    <div class="media-content">
                      <p class="title is-4 has-text-dark">
                        <i class="fas fa-tasks"></i> ${manager.name}
                      </p>
                      <p
                        class="subtitle has-text-weight-bold is-6 has-text-dark"
                      >
                        Manager
                      </p>
                      <p class="subtitle is-6 has-text-dark"><strong>ID: </strong> ${manager.id}</p>
                      <p class="subtitle is-6 has-text-dark"><strong>Email: </strong><a href="mailto:${manager.email}">${manager.email}</a></p>
                      <p class="subtitle is-6 has-text-dark"><strong>Office Number: </strong> ${manager.officeNumber}</p>
                    </div>
                  </div>
                  
                </div>
              </div>
        </div>
        `;
  }
  return card;
};

const engineerCard = (engineerArray) => {
  let card = "";
  for (const engineer of engineerArray) {
    card += `
        <div class="card" id="engineer-card">
                <div class="card-content">
                  <div class="media">
                    <div class="media-left"></div>
                    <div class="media-content">
                      <p class="title is-4 has-text-dark">
                        <i class="fas fa-tools"></i> ${engineer.name}
                      </p>
                      <p
                      class="subtitle has-text-weight-bold is-6 has-text-dark"
                      >
                        Engineer
                      </p>
                      <p class="subtitle is-6 has-text-dark"><strong>ID:</strong> ${engineer.id}</p>
                      <p class="subtitle is-6 has-text-dark"><strong>Email:</strong> <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                      <p class="subtitle is-6 has-text-dark"><strong>GitHub Profile:</strong> <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></p> 
                      
                      
                    </div>
                  </div>
                </div>
              </div>
        </div>
        `;
  }
  return card;
};

const internCard = (internArray) => {
  let card = "";
  for (const intern of internArray) {
    card += `
        <div class="card" id="intern-card">
                <div class="card-content">
                  <div class="media">
                    <div class="media-left"></div>
                    <div class="media-content">
                      <p class="title is-4 has-text-dark">
                        <i class="fas fa-mug-hot"></i> ${intern.name}
                      </p>
                      <p
                      class="subtitle has-text-weight-bold is-6 has-text-dark"
                      >
                        Intern
                      </p>
                      <p class="subtitle is-6 has-text-dark"><strong>ID:</strong> ${intern.id}</p>
                      <p class="subtitle is-6 has-text-dark"><strong>Email:</strong> <a href="mailto:${intern.email}">${intern.email}</a></p>
                      <p class="subtitle is-6 has-text-dark"><strong>School:</strong> ${intern.school}</p>
                    </div>
                  </div>
                </div>
              </div>
        </div>
        `;
  }
  return card;
};

const createHTML = (managerArray, engineerArray, internArray) => {
  return `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
      integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
      crossorigin="anonymous"
    />

    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"
    />
    <link rel="stylesheet" href="./style.css" />
    <title>Team Profile</title>
  </head>
  <body>
    <main>
      <section class="hero is-fullheight">
        <p class="title" id="title">Meet Our Team:</p>
        <div class="hero-body">
          <div class="columns">
            <div class="column">
            ${managerCard(managerArray)}
            <div class="column">
            ${engineerCard(engineerArray)}
            <div class="column">
            ${internCard(internArray)}
          </div>
        </div>
      </section>
    </main>
  </body>
</html>
`;
};

// Exporting to use with the createHTML function in index.js
module.exports = createHTML;
