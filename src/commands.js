const { invoke } = window.__TAURI__.tauri;
function addEvents() {
  const settingsButton = document.getElementById("saveSettings");
  const timerArea = document.getElementById("wrapTime");
  settingsButton.onclick = () => invoke("settings", { data: settingsToUrl() });
  timerArea.onclick = () => invoke("toggle_clock", { });

  const score_h = document.getElementById("score1");
  const score_v = document.getElementById("score2");
  document.getElementById("wrapscore1").onclick = () => invoke("update_score", { data: { h_goals: parseInt(score_h.value), v_goals: parseInt(score_v.value) } });
  document.getElementById("wrapscore2").onclick = () => invoke("update_score", { data: { h_goals: parseInt(score_h.value), v_goals: parseInt(score_v.value) } });
  score_h.onchange = () => invoke("update_score", { data: { h_goals: parseInt(score_h.value), v_goals: parseInt(score_v.value) } });
  score_v.onchange = () => invoke("update_score", { data: { h_goals: parseInt(score_h.value), v_goals: parseInt(score_v.value) } });

  const period = document.getElementById("period");
  document.getElementById("wrapPeriodDiv").onclick = () => invoke("update_period", { data: period.value });
  period.onchange = () => invoke("update_period", { data: period.value });
}