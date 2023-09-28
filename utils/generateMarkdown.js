const generateREADME = ({ title, description, installation, usage, contributing, tests, license, githubUsername, email}) =>`
  # ${title}

  ## Description
  
  ${description}

  ## Table of Contents

  ## Installation

  ${installation} 

  ## Usage

  ${usage}   

  ## License

  ${license}

  ## Contributing

  ${contributing}
  
  ## Tests

  ${tests}
  
  ## Questions

  ${githubUsername}

  ${email}

  `;

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== '') {

  }else{
    badge = '';
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return generateREADME(data);
}

module.exports = generateMarkdown;
