import React from 'react';

const greetings = {
  fr: 'Salut',
  en: 'Hello',
  de: 'Hallo',
  es: 'Hola',
};

function Greetings(props) {
  const { children, lang } = props;
  //   let greet = 'Hello';
  //   if (lang === 'fr') {
  //     greet = 'Bonjour';
  //   } else if (lang === 'de') {
  //     greet = 'Hallo';
  //   } else if (lang === 'es') {
  //     greet = 'Hola';
  //   }

  //   switch (lang) {
  //     case 'de': {
  //       return <div>Hallo {children}</div>;
  //     }
  //   }
  // let hi=""
  // switch(lang) {
  //    case "de":
  //       hi = "Hallo"
  //       break

  // }

  return (
    <div>
      {greetings[lang]} {children}
    </div>
  );
}

// lang -> de
// greetings.de

export default Greetings;
