export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Learning App Dashboard</h1>

      <p>Current Skill Level: Beginner</p>

      <div style={{ width: "100%", backgroundColor: "#ddd", height: 20 }}>
        <div
          style={{
            width: "25%",
            backgroundColor: "green",
            height: 20,
          }}
        />
      </div>

      <p>Progress: 25%</p>

      <p>Next lesson: Python Variables</p>
    </div>
  );
}

