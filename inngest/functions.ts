import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "1s");
    await step.run("llm-call", async () => {
        return { 'output': 'This is some random message from llm' }
    })
    return { message: `Hello ${event.data.email}!` };
  },
);

export const functions = [helloWorld];