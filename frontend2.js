sync function fetchPeople() { 
    const results = await fetch("https://swapi.dev/api/people/?page=1");
    const data = await results.json();
      console.log(data);
  } 
  fetchPeople();

  async function fetchPeople() { 
    let results = await fetch("https://swapi.dev/api/people/?page=1");
    const data = await results.json();
      console.log(data);
    let count = data.count;
    let next = data.next;
    let previous = data.previous;
      console.log(count);
      console.log(next);
      console.log(previous);
  } 
  console.log(data.results[0]);

  fetchPeople();

  let name = data.results[0].name;
    console.log(name);

    let people = data.results;

    people.forEach(item => {
        console.log(item.name);
      });





