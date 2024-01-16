const users = [
    { name: 'John Doe', age: 25 },
    { name: 'Alexander', age: 17 },
    { name: 'Nelson Mandela', age: 78 },
    { name: 'Mahatma Gandhi', age: 56 },
    { name: 'Nikol Tesla', age: 39 }
  ];
  
  document.getElementById('email').addEventListener('click', () => {
    users.sort((a, b) => a.age - b.age);
    const names = users.map(user => user.name);
    window.alert(names.join(', '));
  });
  
  document.getElementById('mobile').addEventListener('click', () => {
    window.alert(`Thank you for choosing mobile, ${users[0].name`});
  });
  
  document.getElementById('google').disabled = true ;