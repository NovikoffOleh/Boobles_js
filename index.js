const container = document.querySelector(".container");

const hoverHand = (e) => {
    const { target: button} = e;
    button.style.top = `${Math.floor(Math.random() * (window.innerHeight - button.clientHeight))}px`;
    button.style.left = `${Math.floor(Math.random() * (window.innerWidth - button.clientWidth))}px`;
};

container.addEventListener("mouseover", hoverHand );
