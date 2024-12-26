---
ID: 2024-07-27-11:56
tags:
  - evolutionaryComputation
  - algorithm
  - math
---
## Evolutionary computation

Evolutionary computation is a field of computer science inspired by natural evolutionary processes to solve complex problems. It makes use of algorithms based on natural selection principles that consider mutation, reproduction and the survival of the fittest to find optimal or sub-optimal solutions.

## Genetic algorithm

A genetic algorithm (GA) is a type of evolutionary algorithm that simulates the natural evolution process. In a GA, a population of candidates evolves toward better solutions over time. Each candidate has a set of properties (chromosomes) that can be mutated and combined to create a new generation of candidates from the fittest candidates of the previous generation.

A GA process typically involves the followings steps:
- ==initialization==: creation of an initial population of candidates
- ==evaluation==: each candidate is evaluated using a fitness function. The candidates are ranked based on their performance
- ==selection==: the best candidates are selected and their properties are used to compose the next generation of candidates
- ==crossover==: a new generation is composed by combining couple of candidates
- ==mutation==: casual variations are introduced to the new generation to allow a certain degree of freedom
- ==substitution==: the new generation substitutes the previous one


```dataviewjs
const canvasId = 'genetic-algo-canvas';
let canvas = document.createElement('canvas');
canvas.id = canvasId;
canvas.width = 500;
canvas.height = 500;
canvas.style.border = '1px solid white';
dv.el('div', canvas);

const target = { x: 480, y: 480 };
const populationSize = 100;
const mutationRate = 0.01;
const lifespan = 200;
let population = [];
let lifeCount = 0;
let bestDot = null;

class DNA {
  constructor(genes) {
    this.genes = genes || Array.from({ length: lifespan }, () => ({
      x: Math.random() * 2 - 1,
      y: Math.random() * 2 - 1
    }));
  }
  crossover(partner) {
    const newGenes = [];
    const mid = Math.floor(Math.random() * this.genes.length);
    for (let i = 0; i < this.genes.length; i++) {
      newGenes.push(i > mid ? this.genes[i] : partner.genes[i]);
    }
    return new DNA(newGenes);
  }
  mutate() {
    this.genes = this.genes.map(gene => Math.random() < mutationRate
      ? { x: Math.random() * 2 - 1, y: Math.random() * 2 - 1 }
      : gene
    );
  }
}

class Dot {
  constructor(dna) {
    this.pos = { x: 100, y: 200 };
    this.vel = { x: 0, y: 0 };
    this.acc = { x: 0, y: 0 };
    this.dna = dna || new DNA();
    this.fitness = 0;
  }
  applyForce(force) {
    this.acc.x += force.x;
    this.acc.y += force.y;
  }
  update() {
    if (
      this.pos.x > 0 &&
      this.pos.x < canvas.width &&
      this.pos.y > 0 &&
      this.pos.y < canvas.height
    ) {
      this.applyForce(this.dna.genes[lifeCount]);
      this.vel.x += this.acc.x;
      this.vel.y += this.acc.y;
      this.pos.x += this.vel.x;
      this.pos.y += this.vel.y;
      this.acc = { x: 0, y: 0 };
    }
  }
  calculateFitness() {
    const dx = this.pos.x - target.x;
    const dy = this.pos.y - target.y;
    this.fitness = 1 / (dx * dx + dy * dy);
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, 2, 0, 2 * Math.PI);
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.closePath();
  }
}

function setup() {
  for (let i = 0; i < populationSize; i++) {
    population.push(new Dot());
  }
  bestDot = population[0];
}

function draw() {
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(target.x, target.y, 10, 0, 2 * Math.PI);
  ctx.fillStyle = 'purple';
  ctx.fill();
  ctx.closePath();

  if (lifeCount < lifespan) {
    population.forEach(dot => dot.update());
    lifeCount++;
  } else {
    population.forEach(dot => dot.calculateFitness());
    evolve();
    lifeCount = 0;
  }

  population.forEach(dot => dot.draw(ctx));
  requestAnimationFrame(draw);
}

function evolve() {
  const matingPool = [];
  let maxFitness = 0;

  population.forEach(dot => {
    if (dot.fitness > maxFitness) {
      maxFitness = dot.fitness;
      bestDot = dot;
    }
  });

  population.forEach(dot => {
    const n = dot.fitness / maxFitness * 100;
    for (let j = 0; j < n; j++) {
      matingPool.push(dot);
    }
  });

  for (let i = 0; i < population.length; i++) {
    const parentA = matingPool[Math.floor(Math.random() * matingPool.length)].dna;
    const parentB = matingPool[Math.floor(Math.random() * matingPool.length)].dna;
    const childDNA = parentA.crossover(parentB);
    childDNA.mutate();
    population[i] = new Dot(childDNA);
  }
}

setup();
draw();

```