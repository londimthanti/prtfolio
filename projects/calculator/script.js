let display = document.getElementById("display");

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    // Only allow valid math operations
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}
