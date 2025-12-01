let globalLines = [];
let globalAnomalies = [];

function switchTab(tabName) {
    document.querySelectorAll(".tab").forEach(t => t.style.display = "none");
    document.getElementById(tabName).style.display = "block";
}

switchTab("upload");

// PROCESS FILE
function processFile() {
    let file = document.getElementById("fileInput").files[0];
    if (!file) {
        alert("Hãy chọn file log");
        return;
    }

    let reader = new FileReader();
    reader.onload = function(e) {
        globalLines = e.target.result.split("\n");
        mockDetect(globalLines);
        renderLogViewer();
        renderAnomalyTable();
        renderDashboard();
        switchTab("logviewer");
    };
    reader.readAsText(file);
}

// MOCK DETECT (teammate sẽ thay bằng Trie + EVT)
function mockDetect(lines) {
    globalAnomalies = [];

    lines.forEach((line, index) => {
        if (line.toLowerCase().includes("error") ||
            line.toLowerCase().includes("fail")) {
            globalAnomalies.push({
                line: index + 1,
                content: line,
                score: (Math.random() * 0.3 + 0.7).toFixed(3),
                reason: "Token hiếm xuất hiện"
            });
        }
    });
}

// RENDER LOG VIEWER
function renderLogViewer() {
    let out = "";
    globalLines.forEach((line, i) => {
        let isAnomaly = globalAnomalies.some(a => a.line === i+1);
        out += (isAnomaly ? "[ANOMALY] " : "") + (i+1) + " | " + line + "\n";
    });
    document.getElementById("logContent").textContent = out;
}

// RENDER ANOMALY TABLE
function renderAnomalyTable() {
    let tbody = document.querySelector("#anomalyTable tbody");
    tbody.innerHTML = "";

    globalAnomalies.forEach(a => {
        let tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${a.line}</td>
            <td>${a.content}</td>
            <td>${a.score}</td>
            <td>${a.reason}</td>
        `;
        tbody.appendChild(tr);
    });
}

// DASHBOARD
function renderDashboard() {
    document.getElementById("totalLines").textContent = globalLines.length + " dòng";
    document.getElementById("totalAnomalies").textContent = globalAnomalies.length + " bất thường";
    document.getElementById("uniqueTemplates").textContent = "Mock — đợi Trie";
    document.getElementById("rareTemplates").textContent = "Mock — đợi EVT";

    let ctx = document.getElementById("scoreChart");
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: globalAnomalies.map(a => a.line),
            datasets: [{
                label: "Anomaly score",
                data: globalAnomalies.map(a => a.score),
            }]
        }
    });
}

// EXPORT CSV
function exportCSV() {
    let csv = "line,content,score,reason\n";
    globalAnomalies.forEach(a => {
        csv += `${a.line},"${a.content}",${a.score},${a.reason}\n`;
    });

    let blob = new Blob([csv], {type: "text/csv"});
    let url = URL.createObjectURL(blob);

    let a = document.createElement("a");
    a.href = url;
    a.download = "anomalies.csv";
    a.click();
}
