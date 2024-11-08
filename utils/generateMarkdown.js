// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license){
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license){
    return "";
}
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license){
    return "";
}
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projecttitle}


## Description
${data.description}


## Choosing to be Open Sorce or Not?
${data.status}

## Installation Requiremenets
${data.install}

## Installation steps

${data.tutorial}

## Reach Me

Email - ${data.email}
Github - Https://www.Github.Com/${data.github}


## License
${renderLicenseBadge(data.license)}
${renderLicenseLink(data.license)}

`
}



module.exports = generateMarkdown;