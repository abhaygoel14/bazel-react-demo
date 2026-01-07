const { spawn } = require("child_process");
const path = require("path");

const apps = ["zomato", "swiggy"];

function run(command, args, cwd) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd,
      stdio: "inherit",
      shell: true,
    });

    child.on("close", (code) => {
      if (code !== 0) {
        reject(new Error(`${command} failed in ${cwd}`));
      } else {
        resolve();
      }
    });
  });
}

async function bootstrap() {
  console.log("🚀 Bootstrapping apps in parallel...\n");

  await Promise.all(
    apps.map((app) => {
      const appDir = path.join(__dirname, "..", "apps", app);
      console.log(`📦 Building ${app}...`);
      return run("npm", ["install"], appDir).then(() =>
        run("npm", ["run", "build"], appDir)
      );
    })
  );

  console.log("\n✅ Bootstrap completed. dist folders are ready.");
}

bootstrap().catch((err) => {
  console.error("❌ Bootstrap failed:", err.message);
  process.exit(1);
});
