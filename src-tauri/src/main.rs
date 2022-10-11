#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use tauri::{
    CustomMenuItem, Manager, SystemTray, SystemTrayEvent, SystemTrayMenu, SystemTrayMenuItem,
};

#[derive(Clone, Debug, serde::Serialize, serde::Deserialize)]
pub struct ScoreInfo {
    h_goals: i16,
    v_goals: i16,
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
    println!("Score update {} - {}", data.h_goals, data.v_goals);
    app_handle.emit_all("update_score", data).unwrap();
}

#[tauri::command]
fn update_period(app_handle: tauri::AppHandle, data: String) {
    println!("Period {}", data);
    app_handle.emit_all("update_period", data).unwrap();
}

fn main() {
    let quit = CustomMenuItem::new("quit".to_string(), "Quit");
    let tray_menu = SystemTrayMenu::new()
        .add_item(quit)
        .add_native_item(SystemTrayMenuItem::Separator)
        .add_item(CustomMenuItem::new("show", "Show"));
    let system_tray = SystemTray::new().with_menu(tray_menu);
    tauri::Builder::default()
        .system_tray(system_tray)
        .on_system_tray_event(|app, event| match event {
            SystemTrayEvent::MenuItemClick { id, .. } => {
                match id.as_str() {
                    "quit" => {
                        std::process::exit(0);
                    }
                    "show" => {
                        let window = app.get_window("main").unwrap();
                        window.show().unwrap();
                        // let set_window = tauri::WindowBuilder::new(
                        //     app,
                        //     "main"
                        //     // tauri::WindowUrl::External("https://tauri.app/".parse().unwrap())
                        //   ).build().expect("failed to build window");
                    }
                    _ => {}
                }
            }
            _ => {}
        })
        .invoke_handler(tauri::generate_handler![
            settings,
            toggle_clock,
            update_clock,
            update_score,
            update_period
        ])
        .run(tauri::generate_context!())
        .expect("error while building tauri application");
}
