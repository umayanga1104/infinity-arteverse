import FlowFieldCanvas from "../../canvases/FlowFieldCanvas";
import HomeTimeline from "../../timelines/HomeTimeline";

export default function Home() {
  return (
    <>
      <div className="w-full h-full relative overflow-hidden">
        <FlowFieldCanvas />
        <HomeTimeline />
      </div>
    </>
  );
}