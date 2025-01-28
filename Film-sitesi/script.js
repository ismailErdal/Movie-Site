
const arrows = document.querySelectorAll(".fa-chevron-right");
const movieList = document.querySelectorAll(".movie-list");
console.log(movieList[0]);
arrows.forEach((right, i) => {
    const widthRatio = Math.floor(window.innerWidth / 300);
    let clickCounter = 0;
    right.addEventListener("click", function () {
        clickCounter++;
        const imageItem = movieList[i].querySelectorAll("img").length;

        right.addEventListener("click", function () {
            if (imageItem - (2 + clickCounter) + (2 - widthRatio) >= 0) {

                clickCounter++;
                movieList[i].style.transform = `translateX(${movieList[i].computedStyleMap().get("transform")[0].x.value - 300
                    }px)`;

            }
            else {
                movieList[i].style.transform = "translateX(0)";
                clickCounter = 0;
            }
        });
    });
});
