//license badge 
var licenseBadge = license => {
  if (license !== "None") {
    return `[![License:${license}](https://img.shields.io/badge/License-${license}-yellow.svg)](https://opensource.org/licenses/${license})`
  } else {
    return `This application does not have licence`
  }
}
//link to the license
var licenseLink = license => {
  if (license) {
    return (
      `\n* [License](#license)\n`
    )
  }
}
//license section
var displayLicense = license => {
  if (license !== "None") {
    return (`## License
    ### This application is licensed under ${licenseBadge(license)}.`)
  } else {
    return (`## License
    ### This application is not licensed.`)
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${displayLicense(data.license)}

   ## Description
   ${data.description}
   ## Table of Contents
   * [Installation Instructions](#installation-instructions)
   
   * [Usage Instructions](#usage-instructions)
   
   * [Contribution](#Contribution)
   
   * [Developers Contact Information](#Developers-Contact-Information)
     ${licenseLink(data.license)}
   ## Installation Instructions
   ${data.installation}
   ## Usage Instructions
   ${data.usage}
   ![${data.imageName}](${data.imagePath})
  [![${data.imageName}](${data.imagePath})](${data.video})
   ## Contributiion
   ${data.contribution}
   
   ## Developers Contact Information
    * Linkedin Profile: ${data.linkedin}
    * URL : ${data.url}
    * Github URL:${data.gitURL}
    * Email: ${data.email}
   
  `;
}

module.exports = generateMarkdown;