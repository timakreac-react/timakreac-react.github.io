import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./main.min.css";
import store from "./store";

ReactDOM.render(<App />, document.querySelector("#root"));

window.addEventListener("beforeinstallprompt", e => {
  e.preventDefault();
  store.setInstallPrompt(e);
});
// Check for browser support of service worker

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/service-worker.js")
    .then(function(registration) {
      // Successful registration
      console.log(
        "Hooray. Registration successful, scope is:",
        registration.scope
      );
    })
    .catch(function(err) {
      // Failed registration, service worker won’t be installed
      console.log("Whoops. Service worker registration failed, error:", error);
    });
}
