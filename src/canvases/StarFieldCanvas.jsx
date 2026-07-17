import { useEffect, useRef } from "react";
import p5 from "p5";

export default function StarFieldCanvas() {

  const containerRef = useRef();

  useEffect(() => {

    let stars = [];

    const STAR_COUNT = 300;

    const myP5 = new p5((sketch) => {

      class Star {

        constructor() {

          this.reset();

          this.z = sketch.random(0.2, 1);

          // Different star sizes
          this.size =
            this.z < 0.4
              ? sketch.random(0.5, 1.2)
              : this.z < 0.7
              ? sketch.random(1, 2)
              : sketch.random(2, 3);

          // Different opacity
          this.alpha = sketch.random(80, 255);

          // Subtle drift speed
          this.speed = this.z * 0.08;
        }

        reset() {

          this.x = sketch.random(sketch.width);
          this.y = sketch.random(sketch.height);
        }

        update() {

          // VERY subtle drift
          this.y += this.speed * 0.2;

          // tiny sideways drift
          this.x += Math.sin(this.y * 0.001) * 0.05;

          // Wrap around
          if (this.y > sketch.height) {
            this.y = 0;
            this.x = sketch.random(sketch.width);
          }
        }

        show() {

          // White + gray palette
          let brightness = sketch.random(180, 255);

          sketch.noStroke();

          sketch.fill(
            brightness,
            brightness,
            brightness,
            this.alpha
          );

          sketch.circle(
            this.x,
            this.y,
            this.size
          );
        }
      }

      sketch.setup = () => {

        sketch.createCanvas(
          window.innerWidth,
          window.innerHeight
        );

        for (let i = 0; i < STAR_COUNT; i++) {
          stars.push(new Star());
        }
      };

      sketch.draw = () => {

        // Infinity black
        sketch.background(1, 2, 7);

        stars.forEach((star) => {
          star.update();
          star.show();
        });

        // Soft center void gradient
        drawVoid();
      };

      function drawVoid() {

        let ctx = sketch.drawingContext;

        let gradient = ctx.createRadialGradient(
          sketch.width / 2,
          sketch.height / 2,
          50,
          sketch.width / 2,
          sketch.height / 2,
          sketch.width * 0.4
        );

        gradient.addColorStop(0, "rgba(0,0,0,0.65)");
        gradient.addColorStop(1, "rgba(0,0,0,0)");

        ctx.fillStyle = gradient;

        ctx.fillRect(
          0,
          0,
          sketch.width,
          sketch.height
        );
      }

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
      className="absolute inset-0 "
    />
  );
}