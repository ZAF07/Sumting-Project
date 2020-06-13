import * as data from './model';
import * as view from './view';



export const randomData = (num) => {

  switch (num) {
    case 1:
    const space = () => {
      data.getHowManyInSpace().then((result) => {
        let fact = `Humans are amazing, but sometimes are equally as shit.
        Right now, there are three people in space. They are ${result[0]},
        ${result[1]} and ${result[2]}🚀`;

        view.factSlide(fact)
      })
    }
    space();
      break;
    case 2:
      const sunRise = () => {
        data.getSunriseInfo().then((result) => {
          let fact = result;

          view.factSlide(fact);
        })
      }
      sunRise()
      break;
    case 3:
      const iss = () => {
        data.getISSInfo().then((result) => {
          let fact = result;

          view.factSlide(fact);
        })
      }
      iss();
      break;
    case 4:
      const numbers = () => {
        data.getNumFacts().then((result) => {
          let fact = result;

          view.factSlide(fact);
        })
      }
      numbers();
      break;
    case 5:
      const covid = () => {
        data.getCovid().then((result) => {
          let fact = result;

          view.factSlide(fact);
        })
      }
      covid();
      break;
    default:
    alert('try again')

  }
}
