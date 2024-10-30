
import './App.css';
import TenthStudent from './classes/TenthStudent';
let madhu = new TenthStudent();
madhu.engMarks=95;
madhu.telMarks=85;
madhu.hinMarks=75;
madhu.mathMarks=65;
madhu.sciMarks=55;
madhu.socMarks=45;
madhu.calculateResult();
console.log(TenthStudent.passMarks);


let alphabeticalWords =["Apple","Ball","Car","Doll","Egg","Fish","Grapes","Hat","Ice Cream","Jeep","Kite","Lion","Moon","Nest","Orange","Pen","Queen","Rose","Star","Tiger","Umbrella","Van","Watch","X-Ray","Yalk","Zeebra"]

function App() {
  return (
    <div className="App">
     
      <button type='button' onClick={()=>{
        console.log(alphabeticalWords.length);
        for(let m=0;m<alphabeticalWords.length;m++){
          console.log(alphabeticalWords[m]);
        }
      }}>Length</button>

      <button type='button' onClick={()=>{
        console.log(alphabeticalWords.at(5));
        }}>at</button>

      <button type='button' onClick={()=>{
        console.log(alphabeticalWords);
        console.log(alphabeticalWords.toString());
        console.log(alphabeticalWords.join("🙂"));
      }}>toString/join</button>

      <button type='button' onClick={()=>{
        
        alphabeticalWords.push("Apple");
        console.log(alphabeticalWords);
      }}>push</button>

      <button type='button' onClick={()=>{
        alphabeticalWords.pop();
        console.log(alphabeticalWords);
      }}>pop</button>

      <button type='button' onClick={()=>{
        alphabeticalWords.shift();
        console.log(alphabeticalWords);
      }}>shift</button>

      <button type='button' onClick={()=>{
        alphabeticalWords.unshift("Zeebra");
        console.log(alphabeticalWords);
        }}>unShift</button>
        
      <button type='button' onClick={()=>{
        alphabeticalWords.splice(3,2);
        console.log(alphabeticalWords);
      }}>splice</button>
    </div>
  );
}

export default App;
