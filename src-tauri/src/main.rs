#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use tauri::Manager;
use tauri::Window;

#[derive(Clone, serde::Serialize)]
struct Payload {
    message: String,
}

#[derive(Clone, serde::Serialize, serde::Deserialize)]
pub struct ScoreInfo {
  pub clock: bool,
  pub host_goals: i32,
  pub visitor_goals: i32,
}

#[tauri::command]
fn settings(name: &str) -> String {
    println!("Settings saved {}", name);
    format!("{name}")
}

#[tauri::command]
fn update(window: Window, data: ScoreInfo) -> String {
    println!("Scoreboard update {}", data.clock);
    window
        .emit_all(
            "update",
            ScoreInfo {
                clock: data.clock,
                host_goals: data.host_goals,
                visitor_goals: data.visitor_goals,
            },
        )
        .unwrap();
    format!("test")
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![settings, update])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
