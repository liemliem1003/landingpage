function GetDownloadNumber() {
    fetch('http://14.225.206.203:8080/api/v1/download/count')  
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok' + response.statusText);
            }
            return response.json();  
        })
        .then(data => {
            console.log(data);
            document.getElementById("downloadNumber").innerHTML = "Download: " + data
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}

GetDownloadNumber()

function IncreaseNumberOfDownload(){
    fetch('http://14.225.206.203:8080/api/v1/download/increment', {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'  
        },
        body: JSON.stringify({
          
        })
      })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
        })
        .catch(error => {
          console.error('Error:', error);
        });
}

function checkIfInAppBrowser(event) {
  const userAgent = navigator.userAgent || navigator.vendor;
  
  if (userAgent.includes("FBAN") || userAgent.includes("FBAV")) {
      event.preventDefault(); // Prevent default anchor behavior
  } else {
      window.open("googlechrome://fresh-foodpt.site/app-release.apk", "_blank");
  }
}