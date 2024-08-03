const car = document.querySelector(".car");

class CarControl {
    constructor(carElement) {
        this.carElement = carElement;
        this.position = parseInt(window.getComputedStyle(carElement).left, 10);
        this.step = 10;
    }
    moveLeft() {
        this.position -= this.step;
        this.updatePosition()
    }
    moveRight() {
        this.position += this.step
        this.updatePosition()
    }
    updatePosition() {
        this.carElement.style.left = `${this.position}px`;
    }
}
const carControl = new CarControl(car);

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        carControl.moveLeft()
    }
    else if (event.key === 'ArrowRight') {
        carControl.moveRight()
    }
})



