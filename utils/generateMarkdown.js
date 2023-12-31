const licenses = new Map([
  ['Apache', { version: '2.0', acronym: 'Apache', badgeColor: 'green'}],
  ['CDDL', { version: '1', acronym: 'cddl', badgeColor: 'orange'}],
  ['EPL', { version: '1.0', acronym: 'EPL', badgeColor: 'red'}],
  ['GPL', { version: '2', acronym: 'GPL', badgeColor: 'blue'}],
  ['MIT', {version: '', acronym: 'MIT', badgeColor: 'yellow'}],
]);

const licensesChoices = [
  {name: 'Apache License, version 2.0', value: 'Apache'},
  {name: 'Common Development and Distribution License 1.0', value: 'CDDL'},
  {name: 'Eclipse Public License version 2.0', value: 'EPL'},
  {name: 'GNU General Public License version 2.0', value: 'GPL'},
  {name: 'MIT License', value: 'MIT'},
];

const generateREADME = ({ title, description, installation, usage, contributing, tests, license, githubUsername, email}) =>`
  # ${title}

  ${renderLicenseBadge(licenses.get(license))}

  ## Description
  
  ${description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation

  ${installation} 

  ## Usage

  ${usage}   

  ## License

  ${renderLicenseSection(licenses.get(license))}

  ## Contributing

  ${contributing}
  
  ## Tests

  ${tests}
  
  ## Questions

  [Github profile](https://github.com/${githubUsername})

  For more information you can reach me at: ${email}

  `;

// Returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
  if (license !== undefined) {
    badge = `![License: ${license.acronym} ${license.version}](https://img.shields.io/badge/License-${license.acronym}${license.version}-${license.badgeColor}.svg)`;
  }
  return badge;
}

// Returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = '';
  if (license !== undefined) {
    let version = license.version !== '' ? `-${license.version}`: '';
    link = `https://opensource.org/licenses/${license.acronym}${version}`;
  }
  return link;
}

// Returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = '';
  if (license !== undefined) {
    licenseSection = `Licensed under the [${license.acronym} ${license.version}](${renderLicenseLink(license)}) license.`
  }
  return licenseSection;
}

// Generate markdown for README
function generateMarkdown(data) {
  return generateREADME(data);
}

module.exports = { generateMarkdown, licensesChoices};
