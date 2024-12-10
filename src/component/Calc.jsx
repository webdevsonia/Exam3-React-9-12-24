import { useState } from 'react';

export default function Cal() {
  const [input, setInput] = useState('0');

  const handleClick = (value) => {
    if (input === '0') {
      setInput("" + value);
    } else {
      setInput(input + value);
    }
  };

  const handleClear = () => {
    setInput('0');
  };

  const handleCalculate = () => {
    if (input === '0') {
      alert('Please enter a number to calculate.');
      return;
    }
    try {
      const result = new Function('return ' + input)();
      setInput(result.toString());
    } catch (e) {
      setInput('Error');
      console.log("Error", e);
    }
  };

  return (
    <div style={styles.calculator}>
      <input
        type="text"
        value={input}
        style={styles.input}
      />
      <div style={styles.buttons}>
        <button onClick={() => handleClick('7')} style={styles.button}>7</button>
        <button onClick={() => handleClick('8')} style={styles.button}>8</button>
        <button onClick={() => handleClick('9')} style={styles.button}>9</button>
        <button onClick={() => handleClick('+')} style={styles.operator}>+</button>

        <button onClick={() => handleClick('4')} style={styles.button}>4</button>
        <button onClick={() => handleClick('5')} style={styles.button}>5</button>
        <button onClick={() => handleClick('6')} style={styles.button}>6</button>
        <button onClick={() => handleClick('-')} style={styles.operator}>-</button>

        <button onClick={() => handleClick('1')} style={styles.button}>1</button>
        <button onClick={() => handleClick('2')} style={styles.button}>2</button>
        <button onClick={() => handleClick('3')} style={styles.button}>3</button>
        <button onClick={() => handleClick('*')} style={styles.operator}>*</button>

        <button onClick={() => handleClick('0')} style={styles.button}>0</button>
        <button onClick={() => handleClick('.')} style={styles.button}>.</button>
        <button onClick={handleClear} style={styles.clearButton}>C</button>
        <button onClick={() => handleClick('/')} style={styles.operator}>/</button>
      </div>
      <div>
        <button onClick={handleCalculate} style={styles.equalsButton}>=</button>
      </div>
    </div>
  );
}


  const styles = {
    calculator: {
      padding: '20px',
      maxWidth: '300px',
      margin: '0 auto',
      textAlign: 'center',
      backgroundColor: '#D9EAFD', 
      borderRadius: '15px',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
    },
    input: {
      padding: '20px 0',
      width: '100%',
      fontSize: '30px',
      textAlign: 'right',
      border: 'none',
      backgroundColor: '#9AA6B2', 
      borderRadius: '10px',
      marginBottom: '20px',
      color: '#000',
      boxShadow: '0 5px 10px rgba(0, 0, 0, 0.1)',
    },
    buttons: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '15px',
      marginBottom: '10px',
    },
    button: {
      padding: '25px',
      fontSize: '22px',
      border: 'none',
      backgroundColor: '#81BFDA', 
      color: '#000', 
      borderRadius: '10px',
      boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    operator: {
      backgroundColor: '#E195AB',
      color: '#000',
      padding: '25px',
      fontSize: '22px',
      border: 'none',
      borderRadius: '10px',
      boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    clearButton: {
      backgroundColor: '#9AA6B2', 
      color: '#000',
      padding: '25px',
      fontSize: '22px',
      border: 'none',
      borderRadius: '10px',
      boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    equalsButton: {
      backgroundColor: '#E195AB', 
      color: '#000',
      padding: '25px',
      fontSize: '22px',
      border: 'none',
      borderRadius: '10px',
      width: '100%',
      boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
  };
  

