class CookieMessage {
	constructor(options) {
	  this.message = options.message;
	  this.bgcolor = options.BgColor;
	  this.color = options.color;
	  this.position = options.position;
	  this.showCookies();
	}
  
	showCookies() {
	  document.body.insertAdjacentHTML(
		'beforeend',
		`<div id="cookie-notice" class="cookie-notification cookie-consent">
		  <div class="container">
			<div class="wp-block-column cookie-content">
			  <div class="ct-cookies-content">${this.message}</div>
			</div>
			<button id="ct-accept" class="ct-accept">Ok</button>
		  </div>
		</div>`
	  );
	  this.setStyle('#cookie-notice', '#ct-accept');
	  this.acceptCookie();
	}
  
	acceptCookie() {
	  document.getElementById("ct-accept").addEventListener("click", () => {
		const cookieNotice = document.getElementById("cookie-notice");
		cookieNotice.style.visibility = "hidden";
		cookieNotice.style.opacity = "0";
	  });
	}
  
	setStyle(target , buttonSelector) {
	  const container = document.querySelector(target);
      const button = document.querySelector(buttonSelector);
	  const contentContainer = document.querySelector(target).querySelector(".container");

	  // Apply the styles to the cookie consent element
	  container.style.display = "block";
	  container.style.position = "fixed";
	  container.style.left = "50%";
	  container.style.bottom = "1.5rem";
	  container.style.width = "50rem";
	  container.style.maxWidth = "calc(100% - 3rem)";
	  container.style.backgroundColor = this.bgcolor;
	  container.style.zIndex = "1020";
	  container.style.color = this.color;
	  container.style.padding = "1.5rem";
	  container.style.visibility = "visible";
	  container.style.opacity = "1";
	  container.style.borderRadius = "0.25rem";
	  container.style.boxShadow = "0 1px 2px #11182705, 0 10px 15px -3px #11182708";
	  container.style.transition = "visibility .35s ease, opacity .35s ease, transform .35s ease";
	  container.style.transform = "translateX(-50%)";  // Adjust to center



	  contentContainer.style.display = "flex";
	  contentContainer.style.alignItems = "center";  // Align items vertically center
	  contentContainer.style.justifyContent = "space-between";  // space between elements

	  contentContainer.style.gap = "20px";  // Add space between elements
  



	  // Apply styles to the button
	  button.style.backgroundColor = "#ffcd29"; // Green background
	  button.style.color = "#1d2129"; // White text color
	  button.style.padding = "10px 20px"; // Padding inside the button
	  button.style.border = "none"; // Remove border
	  button.style.borderRadius = "5px"; // Rounded corners
	  button.style.cursor = "pointer"; // Pointer cursor on hover
  
	  // Add hover effect for the button
	//   button.addEventListener("mouseover", () => {
	// 	button.style.backgroundColor = "#45a049"; // Darker green on hover
	//   });
	//   button.addEventListener("mouseout", () => {
	// 	button.style.backgroundColor = "#4CAF50"; // Reset to original color
	//   });

	}
  }
  
  // Example usage:
  const options = {
	message: "We use cookies to ensure you get the best experience on our website. <a>learn more</a>",
	BgColor: "#031a4e", // background color of the cookie notice
	color: "#fff", // text color of the cookie notice
	position: "right" // can be 'left' or 'right'
  };
  
  const cookieMessage = new CookieMessage(options);
  