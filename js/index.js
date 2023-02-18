const textContainer = document.getElementById("text-container");
      const textToType = document.getElementById("text-to-type");
      const cursor = document.getElementById("cursor");
      const texts = ["C", "C++", "Wordpress", "HTML", "CSS","Bootstrap", "JavaScript","Python"];
      let index = 0;
      let textIndex = 0;
      let backspacing = false;
      let cursorVisible = true;

      function typeText() {
        if (!backspacing) {
          if (index < texts[textIndex].length) {
            textToType.innerHTML += texts[textIndex].charAt(index);
            index++;
            setTimeout(typeText, 50);
          } else {
            backspacing = true;
            setTimeout(typeText, 1000);
          }
        } else {
          if (textToType.innerHTML.length > 0) {
            textToType.innerHTML = textToType.innerHTML.substring(0, textToType.innerHTML.length - 1);
            setTimeout(typeText, 50);
          } else {
            backspacing = false;
            textIndex++;
            if (textIndex >= texts.length) {
              textIndex = 0;
            }
            index = 0;
            setTimeout(typeText, 1000);
          }
        }
      }

      function toggleCursor() {
        cursorVisible = !cursorVisible;
        cursor.style.opacity = cursorVisible ? 1 : 0;
      }

      setInterval(toggleCursor, 500);
      typeText();

      // function buttonColor() {
      //   document.getElementById("button").style.backgroundColor='purple'; 
      //   document.getElementById("button").style.color='white'; ;
      // }
      document.getElementById("collapse-button").addEventListener("click", function() {
        var imageContainer = document.getElementById("image-container");
        var button = document.getElementById("collapse-button");
        var icon = button.firstElementChild;
        if (imageContainer.classList.contains("show")) {
          imageContainer.classList.remove("show");
          imageContainer.classList.add("hide");
          button.innerHTML = "Show More <i class='fas fa-chevron-down' aria-hidden='true'></i>";
        } else {
          imageContainer.classList.remove("hide");
          imageContainer.classList.add("show");
          button.innerHTML = "Show Less <i class='fas fa-chevron-up' aria-hidden='true'></i>";
        }
      });
      