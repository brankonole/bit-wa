const figlet = require('figlet');

const figletF = () => {
    return figlet.textSync('Tamaraaaaa', {
        font: 'Ghost',
        horizontalLayout: 'default',
        verticalLayout: 'default'
    })
}

module.exports.figletF = figletF;