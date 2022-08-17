const generateManager = (manager) => {
  return `
  <div class="employee-card">
    <div class="employee-name">
      <h2>${manager.name}</h3>
      <h3>Manager</h3>
    </div>

    <div class="employee-info">
      <table>
        <tr>
          <td class="id">ID: ${manager.id}</td>
        </tr>
        <tr>
          <td class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></td>
        </tr>
        <tr>
          <td class="office">Office number: ${manager.officeNumber}</td>
        </tr>
      </table>
    </div>
  </div>
    `;
};

const generateEngineer = (engineer) => {
  return `
  <div class="employee-card">
    <div class="employee-name">
      <h2>${engineer.name}</h3>
      <h3>Engineer</h3>
    </div>

    <div class="employee-info">
      <table>
        <tr>
          <td class="id">ID: ${engineer.id}</td>
        </tr>
        <tr>
          <td class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></td>
        </tr>
        <tr>
          <td class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></td>
        </tr>
      </table>
    </div>
  </div>
    `;
};

const generateIntern = (intern) => {
  return `
  <div class="employee-card">
    <div class="employee-name">
      <h2>${intern.name}</h3>
      <h3>Intern</h3>
    </div>

    <div class="employee-info">
      <table>
        <tr>
          <td class="id">ID: ${intern.id}</td>
        </tr>
        <tr>
          <td class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></td>
        </tr>
        <tr>
          <td class="school">School: ${intern.school}</td>
        </tr>
      </table>
    </div>
  </div>
    `;
};

generateHTML = (data) => {
  pageArray = [];

  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();

    // call manager function
    if (role === "Manager") {
      const managerCard = generateManager(employee);

      pageArray.push(managerCard);
    }

    // call engineer function
    if (role === "Engineer") {
      const engineerCard = generateEngineer(employee);

      pageArray.push(engineerCard);
    }

    // call intern function
    if (role === "Intern") {
      const internCard = generateIntern(employee);

      pageArray.push(internCard);
    }
  }

  // joining strings
  const employeeCards = pageArray.join("");

  // return to generated page
  const generateTeam = generatePage(employeeCards);
  return generateTeam;
};

const generatePage = function (employeeCards) {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>My Team</title>
      <link rel="stylesheet" href="./style.css" />
    </head>
    <body>
      <header>
        <h1>My Team</h1>
      </header>
      <main>
        <div class="flex-container id="team-cards">
          ${employeeCards}
        </div>
      </main>
      
    </body>
  </html>
`;
};

module.exports = generateHTML;
