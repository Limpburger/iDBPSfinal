import React, { Component } from 'react';

class Game extends Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    this.ctx = this.canvasRef.current.getContext('2d');
    this.player = {
      x: 200,
      y: 300,
      width: 50,
      height: 50,
    };
    this.objects = [];
    this.score = 0;
    this.spawnObject();
    this.intervalId = setInterval(this.update.bind(this), 16);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  spawnObject() {
    const newObject = {
      x: Math.random() * this.canvasRef.current.width,
      y: 0,
      width: 20,
      height: 20,
    };
    this.objects.push(newObject);
  }

  update() {
    this.ctx.clearRect(0, 0, this.canvasRef.current.width, this.canvasRef.current.height);
    this.updatePlayer();
    this.updateObjects();
    this.checkCollision();
    this.drawScore();
  }

  updatePlayer() {
    if (this.leftPressed) {
      this.player.x -= 10;
    } else if (this.rightPressed) {
      this.player.x += 10;
    }
    this.drawPlayer();
  }

  updateObjects() {
    for (let i = 0; i < this.objects.length; i++) {
      const object = this.objects[i];
      object.y += 5;
      this.drawObject(object);
    }
    if (Math.random() < 0.05) {
      this.spawnObject();
    }
  }

  checkCollision() {
    for (let i = 0; i < this.objects.length; i++) {
      const object = this.objects[i];
      if (
        this.player.x < object.x + object.width &&
        this.player.x + this.player.width > object.x &&
        this.player.y < object.y + object.height &&
        this.player.y + this.player.height > object.y
      ) {
        this.objects.splice(i, 1);
        this.score++;
      }
    }
  }

  drawPlayer() {
    this.ctx.fillStyle = 'blue';
    this.ctx.fillRect(this.player.x, this.player.y, this.player.width, this.player.height);
  }

  drawObject(object) {
    this.ctx.fillStyle = 'red';
    this.ctx.fillRect(object.x, object.y, object.width, object.height);
  }

  drawScore() {
    this.ctx.font = '24px Arial';
    this.ctx.fillStyle = 'black';
    this.ctx.fillText(`Score: ${this.score}`, 10, 30);
  }

  handleKeyDown(event) {
    if (event.key === 'ArrowLeft') {
      this.leftPressed = true;
    } else if (event.key === 'ArrowRight') {
      this.rightPressed = true;
    }
  }

  handleKeyUp(event) {
    if (event.key === 'ArrowLeft') {
      this.leftPressed = false;
    } else if (event.key === 'ArrowRight') {
      this.rightPressed = false;
    }
  }

  render() {
    return <canvas ref={this.canvasRef} width={600} height={400} tabIndex="1" onKeyDown={this.handleKeyDown.bind(this)} onKeyUp={this.handleKeyUp.bind(this)} />;
  }
}

export default Game
