const { invoke } = window.__TAURI__.tauri;
function addEvents() {
  const settingsButton = document.querySelector("#saveSettings");
  const timerArea = document.querySelector("#wrapTime");
  
  settingsButton.addEventListener("click", async () => {
    var settingsString = settingsToUrl();
    await invoke("settings", { data: settingsString });
  });
  timerArea.addEventListener("click", async () => {
    await invoke("toggle_clock", { });
  });
  const input1 = document.querySelector("input[id='score1']");
  const input2 = document.querySelector("input[id='score2']");
  
  input1.addEventListener("change", async () => {
    await invoke("update_score", { data: { h_goals: parseInt(input1.value), v_goals: parseInt(input2.value) } });
  });
  input2.addEventListener("change", async () => {
    await invoke("update_score", { data: { h_goals: parseInt(input1.value), v_goals: parseInt(input2.value) } });
  });
 document.querySelector("#wrapscore1").addEventListener("click", async () => {
    await invoke("update_score", { data: { h_goals: parseInt(input1.value), v_goals: parseInt(input2.value) } });
  });
  document.querySelector("#wrapscore2").addEventListener("click", async () => {
    await invoke("update_score", { data: { h_goals: parseInt(input1.value), v_goals: parseInt(input2.value) } });
  });
}