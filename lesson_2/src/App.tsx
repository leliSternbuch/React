import React from 'react';
import './App.css';
import GreetingCard, { GreetingCardProps } from './components/GreetingCard/GreetingCard';

function App() {
  const babies: GreetingCardProps[] = [
    {
      name: 'ללי',
      gender: 'נקבה',
      message: 'מתרגשים!'
    },
    {
      name: 'אליהו',
      gender: 'זכר',
      message: 'מזל טוב! שתגדל לאושר ולברכה!'
    },
    {
      name: 'איצי',
      gender: 'זכר',
      message: 'ברכות והצלחה! שיהיה בריא וחזק!'
    },
    {
      name: 'גיטל',
      gender: 'נקבה',
      message: 'מזל טוב על הבת! שתגדל בבריאות ואושר!'
    },
    {
      name: 'ללי',
      gender: 'נקבה',
      message: 'מתרגשים!'
    },
    {
      name: 'אליהו',
      gender: 'זכר',
      message: 'מזל טוב! שתגדל לאושר ולברכה!'
    },
    {
      name: 'איצי',
      gender: 'זכר',
      message: 'ברכות והצלחה! שיהיה בריא וחזק!'
    },
    {
      name: 'גיטל',
      gender: 'נקבה',
      message: 'מזל טוב על הבת! שתגדל בבריאות ואושר!'
    },
    {
      name: 'ללי',
      gender: 'נקבה',
      message: 'מתרגשים!'
    },
    {
      name: 'אליהו',
      gender: 'זכר',
      message: 'מזל טוב! שתגדל לאושר ולברכה!'
    },
    {
      name: 'איצי',
      gender: 'זכר',
      message: 'ברכות והצלחה! שיהיה בריא וחזק!'
    },
    {
      name: 'גיטל',
      gender: 'נקבה',
      message: 'מזל טוב על הבת! שתגדל בבריאות ואושר!'
    }
  ];

  return (
    <div className="App">
      <h1>כרטיסי ברכה </h1>
      <div className="cards-container">
        {babies.map((baby, index) => (
          <GreetingCard
            key={index}
            name={baby.name}
            gender={baby.gender}
            message={baby.message}
            image={baby.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
