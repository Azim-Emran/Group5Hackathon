const SlideShow = () => {

    let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("ourSlides");
        let dots = document.getElementsByClassName("dot");
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }
    return (
        <div>
            <div className="slideshow-container">

                <div className="ourSlides fade">
                    <div className="numbertext">1 / 3</div>
                    <img src="img_nature_wide.jpg" />
                    <div className="text">Caption Text</div>
                </div>

                <div className="ourSlides fade">
                    <div className="numbertext">2 / 3</div>
                    <img src="img_snow_wide.jpg" />
                    <div className="text">Caption Two</div>
                </div>

                <div className="ourSlides fade">
                    <div className="numbertext">3 / 3</div>
                    <img src="img_mountains_wide.jpg" />
                    <div className="text">Caption Three</div>
                </div>

                <a className="prev" onclick="plusSlides(-1)">❮</a>
                <a className="next" onclick="plusSlides(1)">❯</a>

            </div>
            <br />

            <div style={{textAlign:"center"}}>
                <span className="dot" onclick="currentSlide(1)"></span>
                <span className="dot" onclick="currentSlide(2)"></span>
                <span className="dot" onclick="currentSlide(3)"></span>
            </div>
        </div>
    )
}

export default SlideShow;