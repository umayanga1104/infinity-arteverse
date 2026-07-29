import { useEffect, useRef } from "react";
import p5 from "p5";

export default function P5Canvas() {
  const containerRef = useRef();

  useEffect(() => {

    const noiseScale = 0.002;

    const numParticles = 400;

    const mouseInfluenceRadius = 50;

    // Mouse distortion strength
    const forceStrength = 1.2;

    let particles = [];

    const myP5 = new p5((sketch) => {

      sketch.setup = () => {

        sketch.createCanvas(
          window.innerWidth,
          window.innerHeight
        );

        sketch.background(0);

        // Create particles
        for (let i = 0; i < numParticles; i++) {

          particles.push(
            new Particle(
              sketch,
              noiseScale,
              mouseInfluenceRadius,
              forceStrength
            )
          );
        }
      };

      sketch.draw = () => {
        // Trail effect
        sketch.background(0, 10);

        // DEBUG VISUALIZATION
        // SHOWS MOUSE INFLUENCE AREA
        /*
        sketch.noFill();
        sketch.stroke(255, 20);

        sketch.circle(
          sketch.mouseX,
          sketch.mouseY,
          mouseInfluenceRadius * 2
        );
        */

        // Update each particle per frame
        particles.forEach((particle) => {

          particle.follow();
          particle.update();
          particle.edges();
          particle.show();

        });
      };

      // Canvas configuration for responsiveness
      sketch.windowResized = () => {

        sketch.resizeCanvas(
          window.innerWidth,
          window.innerHeight
        );
      };

    }, containerRef.current);

    return () => myP5.remove();

  }, []);

  return (
    <div
      ref={containerRef}
      style={{ position: "fixed", inset: 0, width: "100%", height: "100%", zIndex: 0, pointerEvents: "none" }}
    />
  );
}

/* =====================================================
   PARTICLE CLASS
   ===================================================== */

class Particle {

  constructor(
    sketch,
    noiseScale,
    mouseInfluenceRadius,
    forceStrength
  ) {

    this.sketch = sketch;

    // ENVIRONMENT CONFIG
    this.noiseScale = noiseScale;
    this.mouseInfluenceRadius = mouseInfluenceRadius;
    this.forceStrength = forceStrength;

    /* =============================================
       MOTION
       ============================================= */

    this.pos = sketch.createVector(
      sketch.random(sketch.width),
      sketch.random(sketch.height)
    );

    // Old position for drawing trails
    this.prevPos = this.pos.copy();

    // Physics vectors
    this.vel = sketch.createVector(0, 0);
    this.acc = sketch.createVector(0, 0);

    this.maxSpeed = 1;
  }

  follow() {

    /* =============================================
       FLOW FIELD
       ============================================= */

    // Get angle from Perlin noise based on position

    let angle =
      this.sketch.noise(
        this.pos.x * this.noiseScale,
        this.pos.y * this.noiseScale
      ) *
      this.sketch.TWO_PI *
      2;

    // ❌ COMMON BEGINNER MISTAKE:
    // this.acc = angle;

    // WHY WRONG?
    // angle = NUMBER
    // acc = VECTOR

    // ✅ CONVERT ANGLE -> VECTOR

    let flowForce = p5.Vector.fromAngle(angle);

    // Flow force strength
    flowForce.setMag(0.05);

    this.applyForce(flowForce);

    /* =============================================
       EDGE REPULSION
       Prevents chaotic corner curling —
       particles arc gracefully inward instead
       ============================================= */

    const edgeZone = 0.15;
    const edgeStrength = 0.04;
    const w = this.sketch.width;
    const h = this.sketch.height;

    let edgeForce = this.sketch.createVector(0, 0);

    // Left edge
    if (this.pos.x < w * edgeZone) {
      let t = 1 - (this.pos.x / (w * edgeZone));
      edgeForce.x += t * edgeStrength;
    }
    // Right edge
    if (this.pos.x > w * (1 - edgeZone)) {
      let t = 1 - ((w - this.pos.x) / (w * edgeZone));
      edgeForce.x -= t * edgeStrength;
    }
    // Top edge
    if (this.pos.y < h * edgeZone) {
      let t = 1 - (this.pos.y / (h * edgeZone));
      edgeForce.y += t * edgeStrength;
    }
    // Bottom edge
    if (this.pos.y > h * (1 - edgeZone)) {
      let t = 1 - ((h - this.pos.y) / (h * edgeZone));
      edgeForce.y -= t * edgeStrength;
    }

    this.applyForce(edgeForce);

    /* =============================================
       MOUSE DISTORTION
       ============================================= */

    let mouse = this.sketch.createVector(
      this.sketch.mouseX,
      this.sketch.mouseY
    );

    let distance = this.pos.dist(mouse);

    // Only affect near particles
    if (distance < this.mouseInfluenceRadius) {

      // Direction away from mouse
      let mouseForce =
        p5.Vector.sub(this.pos, mouse);

      // Smooth falloff
      // Closer = stronger

      let strength =
        (1 - distance / this.mouseInfluenceRadius)
        * this.forceStrength;

      mouseForce.setMag(strength);

      this.applyForce(mouseForce);
    }
  }

  /* =============================================
     APPLY FORCE
     ============================================= */

  applyForce(force) {

    // Accumulate forces
    this.acc.add(force);
  }

  /* =============================================
     UPDATE PHYSICS
     ============================================= */

  update() {

    // Save old position
    // Important for drawing trails
    this.prevPos = this.pos.copy();

    // Physics pipeline

    // acceleration -> velocity
    this.vel.add(this.acc);

    // LIMIT SPEED
    this.vel.limit(this.maxSpeed);

    // velocity -> position
    this.pos.add(this.vel);

    // RESET ACCELERATION
    this.acc.mult(0);
  }

  /* =============================================
     DRAW PARTICLE
     ============================================= */

  show() {

    this.sketch.stroke(255, 100 );

    this.sketch.line(
      this.prevPos.x,
      this.prevPos.y,
      this.pos.x,
      this.pos.y
    );
  }

  /* =============================================
     SCREEN WRAPPING
     ============================================= */

  edges() {

    let wrapped = false;

    if (this.pos.x > this.sketch.width) {

      this.pos.x = 0;
      wrapped = true;
    }

    if (this.pos.x < 0) {

      this.pos.x = this.sketch.width;
      wrapped = true;
    }

    if (this.pos.y > this.sketch.height) {

      this.pos.y = 0;
      wrapped = true;
    }

    if (this.pos.y < 0) {

      this.pos.y = this.sketch.height;
      wrapped = true;
    }

    // Reset previous position
    // After teleporting

    if (wrapped) {
      this.prevPos = this.pos.copy();
    }
  }
}