import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputNumber, setInputNumber] = useState(''); // State để lưu số nhập vào

  const handleRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 1001); // Random từ 0 đến 10000

    // Kiểm tra số nhập vào và so sánh với số random
    if (parseInt(inputNumber) === randomNumber) {
      alert(`Chúc mừng! Bạn đã đoán đúng số ${randomNumber}.`);
    } else {
      alert(`Sai rồi! Số quay được là ${randomNumber}. Thử lại!`);
    }
  };

  return (
    <div className="App">
      <h1>Random Number Game</h1>
      <div>
        <input
          type="number"
          placeholder="Nhập số từ 0 - 10000"
          value={inputNumber}
          onChange={(e) => setInputNumber(e.target.value)}
        />
        <button onClick={handleRandomNumber}>Kiểm tra</button>
      </div>
    </div>
  );
}

export default App;
