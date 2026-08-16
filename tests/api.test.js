const request = require("supertest");
const { app, connectDB } = require("../server");

beforeAll(async () => {
  await connectDB();
});

describe("TaskFlow API", () => {
  test("GET / should return welcome message", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.text).toContain("Welcome to TaskFlow API");
  });

  test("GET /tasks should return tasks", async () => {
    const response = await request(app).get("/tasks");

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test("POST /tasks should create a task", async () => {
    const response = await request(app)
      .post("/tasks")
      .send({
        title: "Automated Test Task",
        completed: false,
      });

    expect(response.statusCode).toBe(201);
    expect(response.body.task.title).toBe("Automated Test Task");
  });

  test("POST /tasks should reject empty title", async () => {
    const response = await request(app)
      .post("/tasks")
      .send({
        title: "",
      });

    expect(response.statusCode).toBe(400);
    expect(response.body.message).toBe("Title is required");
  });

  test("GET /tasks/123 should reject invalid ID", async () => {
    const response = await request(app).get("/tasks/123");

    expect(response.statusCode).toBe(400);
    expect(response.body.message).toBe("Invalid task ID");
  });
});