const s = '{\n' +
  '  "airlinesName": "United Airlines",\n' +
  '  "match": true,\n' +
  '  "sentiment": "negative"\n' +
  '}';


  class Airline {
    constructor(name, match, sentiment) {
      this.name = name;
      this.match = match;
      this.sentiment = sentiment;
    }
  }

const st = JSON.parse(s);
console.log({ st });
const a = new Airline(st.airlinesName, st.match, st.sentiment);
const a2 = new Airline(st.airlinesName, st.match, st.sentiment);
console.table([a, a2]); 

