const rubric = [
  { name: "Hazard perception", weight: 30, score: 84 },
  { name: "Road-rule compliance", weight: 25, score: 91 },
  { name: "Vehicle control smoothness", weight: 20, score: 79 },
  { name: "Emergency response", weight: 15, score: 88 },
  { name: "Fuel efficiency", weight: 10, score: 82 }
];

const timeline = [
  { time: "00:12", title: "Session started", detail: "Honda Fit RHD on Harare CBD vertical slice." },
  { time: "00:39", title: "Mirror check detected", detail: "Approach to controlled intersection." },
  { time: "01:04", title: "Speed adjusted", detail: "Learner reduced speed before pedestrian conflict zone." }
];

let seconds = 76;

const elements = {
  clock: document.querySelector("#sessionClock"),
  speed: document.querySelector("#speedValue"),
  brake: document.querySelector("#brakeValue"),
  steering: document.querySelector("#steeringValue"),
  score: document.querySelector("#scoreValue"),
  lane: document.querySelector("#laneMeter"),
  distance: document.querySelector("#distanceMeter"),
  ttc: document.querySelector("#ttcMeter"),
  rubric: document.querySelector("#rubricList"),
  timeline: document.querySelector("#eventTimeline"),
  eventCount: document.querySelector("#eventCount")
};

function formatClock(value) {
  const minutes = Math.floor(value / 60).toString().padStart(2, "0");
  const remainingSeconds = (value % 60).toString().padStart(2, "0");
  return `${minutes}:${remainingSeconds}`;
}

function renderRubric() {
  elements.rubric.innerHTML = rubric
    .map(
      (item) => `
        <article class="rubric-item">
          <div class="rubric-label">
            <span>${item.name}</span>
            <strong>${item.score}%</strong>
          </div>
          <div class="bar" aria-label="${item.name} ${item.score}%">
            <span style="width: ${item.score}%"></span>
          </div>
        </article>
      `
    )
    .join("");
}

function renderTimeline() {
  elements.timeline.innerHTML = timeline
    .map(
      (event) => `
        <li>
          <strong>${event.time} - ${event.title}</strong>
          <span>${event.detail}</span>
        </li>
      `
    )
    .join("");
  elements.eventCount.textContent = `${timeline.length} events`;
}

function addTimelineEvent(title, detail) {
  timeline.unshift({
    time: formatClock(seconds),
    title,
    detail
  });
  renderTimeline();
}

function updateTelemetry() {
  seconds += 1;
  const speed = 39 + Math.round(Math.sin(seconds / 4) * 8);
  const brake = Math.max(0, Math.round(18 + Math.sin(seconds / 6) * 16));
  const steering = Math.round(Math.sin(seconds / 5) * 11);
  const laneOffset = Number((Math.sin(seconds / 7) * 0.32).toFixed(2));
  const distance = Number((2.8 + Math.sin(seconds / 9) * 0.7).toFixed(1));
  const ttc = Number((4.4 + Math.sin(seconds / 8) * 1.2).toFixed(1));
  const averageScore = Math.round(
    rubric.reduce((total, item) => total + item.score * (item.weight / 100), 0)
  );

  elements.clock.textContent = formatClock(seconds);
  elements.speed.textContent = speed;
  elements.brake.textContent = brake;
  elements.steering.textContent = steering;
  elements.score.textContent = averageScore;
  elements.lane.value = laneOffset;
  elements.distance.value = distance;
  elements.ttc.value = ttc;
}

document.querySelectorAll("[data-event]").forEach((button) => {
  button.addEventListener("click", () => {
    addTimelineEvent(button.dataset.event, "Instructor-injected event queued for the learner route.");
  });
});

renderRubric();
renderTimeline();
updateTelemetry();
setInterval(updateTelemetry, 1000);
