function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
    case "GPLv3":
      return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)";
    // Add more cases for different licenses
    default:
      return "";
  }
}

function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "(https://opensource.org/licenses/MIT)";
    case "GPLv3":
      return "(https://www.gnu.org/licenses/gpl-3.0)";

    default:
      return "";
  }
}
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `\n## License\nThis project is licensed under the ${license} license. For more information see ${renderLicenseLink(
      license
    )}`;
  }
  return "";
}

function generateMarkdown(data) {
  return `
# ${data.title}
${data.description}
## Installation
${data.installation}
## Usage 
${data.usage}
## License
${renderLicenseBadge(data.license)}
${renderLicenseSection(data.license)}
## Contributing
${data.contributing}
## Tests
${data.tests}
## Email address
${data.email}
## Table_of_Contents
${data.Table_of_Contents}
## Github 
${data.github}\n`;
}

module.exports = generateMarkdown;
