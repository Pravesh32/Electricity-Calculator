async function calculate() {
  const prev = document.getElementById("prev").value;
  const curr = document.getElementById("curr").value;

  const res = await fetch("/calculate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ prev, curr })
  });

  const data = await res.json();

  document.getElementById("result").innerHTML =
    `Units: ${data.units} <br> Bill: Rs. ${data.bill}`;
}