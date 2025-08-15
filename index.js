document.getElementById("calculateBtn").addEventListener("click", function () {
  const wd = parseFloat(document.getElementById("wd").value);
  const ws = parseFloat(document.getElementById("ws").value);
  const wss = parseFloat(document.getElementById("wss").value);
  let l1 = parseFloat(document.getElementById("l1").value);
  let l2 = parseFloat(document.getElementById("l2").value);

  if (isNaN(wd) || isNaN(ws) || isNaN(wss) || isNaN(l1) || isNaN(l2)) {
    alert("Please fill in all fields with valid numbers.");
    return;
  }

  // Convert mm to cm
  l1 = l1 / 10;
  l2 = l2 / 10;

  // Bulk Density
  const bd = wd / (ws - wss);

  // Apparent Porosity
  const ap = ((ws - wd) / (ws - wss)) * 100;

  // Water Absorption
  const wa = ((ws - wd) / wd) * 100;

  // Linear Shrinkage in cm
  const ls = ((l1 - l2) / l1) * 100;

  // Display results
  document.getElementById("bd").textContent = bd.toFixed(2);
  document.getElementById("ap").textContent = ap.toFixed(2);
  document.getElementById("wa").textContent = wa.toFixed(2);
  document.getElementById("ls").textContent = ls.toFixed(2);
});
