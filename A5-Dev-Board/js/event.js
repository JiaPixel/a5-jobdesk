  const btn = document.getElementById("btn-make-blue");

  btn.addEventListener("click", function () {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16); 
    document.body.style.backgroundColor = randomColor;
  });

  const div = document.getElementById("question-page");

  div.addEventListener("click", function () {
    window.location.href = "http://127.0.0.1:5500/A5-Dev-Board/question.html";
  });

  function showDate() {
    const date = new Date(); // Get current date
    const currentDate = date.toDateString(); // Format like "Fri Feb 28 2025"
    
    document.getElementById("today").innerHTML = `<br> ${currentDate} <br>`; // Update div content
  }

  showDate(); // Call the function on page load

  // button disabled 
// সব Button সিলেক্ট করা
const buttons = document.querySelectorAll('.btn-primary');
let completedCount = 24; // Initial Completed Task Count
const completedTaskSpan = document.getElementById('completed-task');

let totalTaskCount = 6; // Initial Task Assigned Count
const totalTaskSpan = document.getElementById('total-taskcount');
const historyDiv = document.getElementById('history');
const clearBtn = document.getElementById('clear-btn');

// Function to Add History
function addHistory(task) {
  const time = new Date().toLocaleTimeString();
  const p = document.createElement('p');
  p.className = 'bg-[#F4F7FF] p-3 rounded-xl text-sm';
  p.innerText = `You have completed the task ${task} at ${time}`;
  historyDiv.appendChild(p);
}

// Clear History
clearBtn.addEventListener('click', () => {
  historyDiv.innerHTML = '';
});

// Loop করে সব Button এ Click Event লাগানো
buttons.forEach(button => {
  button.addEventListener('click', function () {
    if (!button.disabled) {
      // Button Disable করা
      button.disabled = true;
      button.innerText = 'Completed ✅';
      button.style.backgroundColor = 'gray';
      button.style.cursor = 'not-allowed';

      // Card Title বের করা
      const cardTitle = button.closest('.card-body').querySelector('.card-title').innerText;

      // Alert Message দেখানো with Card Title
      alert(`${cardTitle} Task Completed Successfully 🎯`);

      // Add History
      addHistory(cardTitle);

      // Completed Task Count বাড়ানো
      completedCount++;
      completedTaskSpan.innerText = completedCount;

      // Total Task Count কমানো
      totalTaskCount--;
      totalTaskSpan.innerText = totalTaskCount;

      // সব টাস্ক কমপ্লিট হলে Final Alert দেখানো
      if (totalTaskCount === 0) {
        setTimeout(() => {
          alert('All Tasks Completed Successfully 🎯🎉');
        }, 500);
      }
    }
  });
});
