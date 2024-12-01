import './App.css';

function App() {
  // Hàm xử lý sự kiện khi nhấn nút
  const handleRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 10001); // Random từ 0 đến 10000

    // Kiểm tra số random
    if (randomNumber === 6789) {
      alert(`Chúc mừng! Bạn đã quay được số ${randomNumber}.`);
    } else {
      alert(`Kết quả: ${randomNumber}. Quay số lại!`);
    }
  };

  return (
    <div className="App">
      <h1>Random Number Generator</h1>
      <button onClick={handleRandomNumber}>Random Number</button>
    </div>
  );
}

export default App;
