import FlowFieldCanvas from "./canvases/FlowFieldCanvas";
import Timeline from "./Timeline";

export default function Landing() {
  

  return (
    <>
      <div className="w-full h-full relative overflow-hidden">
        <FlowFieldCanvas />
        <Timeline/>   
      </div>
    </>
  );
}