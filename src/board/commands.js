const listen = window.__TAURI__.event.listen

function addListeners() {
  listen("toggle_clock", () => {
    clockTrigger();
  });
  listen("settings", (event) => {
    $("#variables").text(event.payload);
    initVariables();
  });
  listen("update_score", (event) => {
    const input1 = document.querySelector("input[id='score1']");
    const input2 = document.querySelector("input[id='score2']");
    input1.value = event.payload.h_goals;
    input2.value = event.payload.v_goals;
  });
  listen("update_period", (event) => {
    document.getElementById("period").value = event.payload;
  })
}