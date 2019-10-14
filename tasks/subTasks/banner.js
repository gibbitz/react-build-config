const chalk = require('chalk')

const logo = `

       ..
       *((*.
        ./%%(,.
        (&@@@@&(*.
          (&@@@%%&%(*.                      .,*(%%(,
          ,%@@&(.,/%&&(*,....     ...,*/(%&@@@@*
       ***#&@@&/.    *(#&@@@@@&&&&&&&&@@@@@@&%(/
       *%@@@@@#,               ((###%&&&@@@&/.
        ,(%&%/.                        (&@@%,
                                       (&@@&*
                                   *%&&@@@@%,
                                    *%@@@@%*
                                      *((*


                                 ....
                          ..*(#%%%%%%%%#(/,.
                        ,(%%%*        **%&&%#*.
                      ,(#/,                *(#/.
                     ,(/.
                    ..

\n\n`

const title = `
 REACT BUILD CONFIG                                                       `

const intro = `
Before you get started, you'll need to answer a few questions in order to
help set up your package.json, dependencies and local proxies.\n
`

const writeBanner = () => {
    console.log(
        chalk.hex('#204190')(logo),
        chalk.hex('#204190').bgHex('#FFF').bold(title),
        chalk.hex('#888')(intro)
    )
}

module.exports = { writeBanner }
