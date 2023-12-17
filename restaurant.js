console.log('Console');

try {
  function displayTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0'); // Get the current hour
    const minutes = String(now.getMinutes()).padStart(2, '0'); // Get the current minute
    const seconds = String(now.getSeconds()).padStart(2, '0'); // Get the current second
    
    const currentTime = `${hours}:${minutes}:${seconds}`; // Format the time as HH:MM:SS
    
    document.getElementById('time').textContent = currentTime; // Display the time in the 'time' paragraph
    
    setTimeout(displayTime, 1000); // Update the time every second
  }
} catch (error) {
  console.log(error);
}


  let h4=document.body.children[1].children[0].children[2];
  console.log(h4);

  h4.innerText=`<b></b>`;

  console.clear();

  console.log("We are using jQuery");

  