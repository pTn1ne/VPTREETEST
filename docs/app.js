function processFile() {
    let file = document.getElementById("fileInput").files[0];
    if (!file) return alert("Hãy chọn file!");

    let reader = new FileReader();
    reader.onload = function(e) {
        let lines = e.target.result.split("\n");
        
        // Gọi hàm detectAnomalies giả (mock)
        let anomalies = detectAnomalies(lines);

        renderResult(anomalies);
    };
    reader.readAsText(file);
}

// ==========================
// MOCK FUNCTION (tạm thời)
// ==========================
function detectAnomalies(lines) {
    // Sau này teammate thay bằng Trie + EVT
    let results = [];

    lines.forEach((line, idx) => {
        if (line.toLowerCase().includes("error") ||
            line.toLowerCase().includes("fail")) {
            results.push({
                line: idx + 1,
                content: line,
                score: Math.random() * 0.3 + 0.7 // 0.7 – 1.0
            });
        }
    });

    return results;
}

// ==========================
// HIỂN THỊ KẾT QUẢ
// ==========================
function renderResult(data) {
    document.getElementById("result").style.display = "block";
    let tbody = document.querySelector("#resultTable tbody");
    tbody.innerHTML = "";

    data.forEach(row => {
        let tr = document.createElement("tr");
        tr.classList.add("anomaly");

        tr.innerHTML = `
            <td>${row.line}</td>
            <td>${row.content}</td>
            <td>${row.score.toFixed(3)}</td>
        `;
        tbody.appendChild(tr);
    });
}

// ==========================
// EXPORT CSV
// ==========================
function exportCSV() {
    let rows = [["Line", "Content", "Score"]];
    document.querySelectorAll("#resultTable tbody tr").forEach(tr => {
        let cols = tr.querySelectorAll("td");
        rows.push([
            cols[0].innerText,
            cols[1].innerText.replace(/,/g, " "), 
            cols[2].innerText
        ]);
    });

    let csvContent = rows.map(e => e.join(",")).join("\n");

    let blob = new Blob([csvContent], { type: "text/csv" });
    let url = URL.createObjectURL(blob);

    let a = document.createElement("a");
    a.href = url;
    a.download = "anomalies.csv";
    a.click();
}
