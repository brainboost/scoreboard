#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use tauri::Manager;

#[derive(Clone, Debug, serde::Serialize, serde::Deserialize)]
pub struct ScoreInfo {
    h_goals: i32,
    v_goals: i32,
}

#[tauri::command]
fn settings(app_handle: tauri::AppHandle, data: &str) {
    println!("Settings saved {}", data);
    app_handle.emit_all("settings", data).unwrap();
}

#[tauri::command]
fn toggle_clock(app_handle: tauri::AppHandle) {
    println!("Toggle clock");
    app_handle.emit_all("toggle_clock", {}).unwrap();
}

#[tauri::command]
fn update_clock(app_handle: tauri::AppHandle, data: &str) {
    println!("Clock update {:?}", data);
    app_handle.emit_all("update_clock", data).unwrap();
}

#[tauri::command]
fn update_score(app_handle: tauri::AppHandle, data: ScoreInfo) {
    println!(
        "Score update {} - {}",
        data.h_goals,
        data.v_goals
    );
    app_handle.emit_all("update_score", data).unwrap();
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            settings,
            toggle_clock,
            update_clock,
            update_score
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
